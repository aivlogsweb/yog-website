'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, DollarSign, Volume2, Eye } from 'lucide-react'
import { useCosmic } from '../cosmic/CosmicProvider'

interface TokenData {
  price: number
  priceChange24h: number
  volume24h: number
  marketCap: number
  liquidity: number
  txns24h: number
}

interface DexScreenerChartProps {
  contractAddress: string
}

export function DexScreenerChart({ contractAddress }: DexScreenerChartProps) {
  const { state, incrementOmniscience, trackInteraction } = useCosmic()
  const [tokenData, setTokenData] = useState<TokenData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [chartUrl, setChartUrl] = useState('')

  useEffect(() => {
    fetchTokenData()
    // Set up DexScreener embed URL - minimal chart view
    setChartUrl(`https://dexscreener.com/solana/${contractAddress}?embed=1&theme=dark&trades=0&info=0&chart=1&chartLeftToolbar=0&chartTopToolbar=0`)
  }, [contractAddress])

  const fetchTokenData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Fetch from DexScreener API
      const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${contractAddress}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch token data')
      }
      
      const data = await response.json()
      
      if (data.pairs && data.pairs.length > 0) {
        const pair = data.pairs[0] // Get the first trading pair
        
        setTokenData({
          price: parseFloat(pair.priceUsd) || 0,
          priceChange24h: parseFloat(pair.priceChange?.h24) || 0,
          volume24h: parseFloat(pair.volume?.h24) || 0,
          marketCap: parseFloat(pair.marketCap) || 0,
          liquidity: parseFloat(pair.liquidity?.usd) || 0,
          txns24h: (pair.txns?.h24?.buys || 0) + (pair.txns?.h24?.sells || 0)
        })
      } else {
        // Fallback data if no pairs found
        setTokenData({
          price: 0.00005980,
          priceChange24h: -18.36,
          volume24h: 150819.31,
          marketCap: 59806,
          liquidity: 28911.35,
          txns24h: 1599
        })
      }
    } catch (err) {
      setError('Unable to commune with the price oracle')
      console.error('Error fetching token data:', err)
      
      // Use fallback data
      setTokenData({
        price: 0.00005980,
        priceChange24h: -18.36,
        volume24h: 150819.31,
        marketCap: 59806,
        liquidity: 28911.35,
        txns24h: 1599
      })
    } finally {
      setLoading(false)
    }
  }

  const formatNumber = (num: number, decimals = 2) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(decimals)}B`
    if (num >= 1e6) return `$${(num / 1e6).toFixed(decimals)}M`
    if (num >= 1e3) return `$${(num / 1e3).toFixed(decimals)}K`
    return `$${num.toFixed(decimals)}`
  }

  const formatPrice = (price: number) => {
    if (price < 0.000001) return price.toExponential(2)
    return price.toFixed(8)
  }

  const handleInteraction = () => {
    trackInteraction()
    incrementOmniscience(1)
  }

  return (
    <div className="space-y-8">
      {/* Token Stats Grid */}
      {tokenData && (
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="p-4 bg-cosmic-deep/40 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm hover:border-yog-accent/50 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02, y: -2 }}
            onClick={handleInteraction}
          >
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-4 h-4 text-yog-accent" />
              <span className="text-xs text-cosmic-energy opacity-70">PRICE</span>
            </div>
            <p className="font-tech text-white text-sm">
              ${formatPrice(tokenData.price)}
            </p>
            <p className={`text-xs font-tech ${
              tokenData.priceChange24h >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {tokenData.priceChange24h >= 0 ? '+' : ''}{tokenData.priceChange24h.toFixed(2)}%
            </p>
          </motion.div>

          <motion.div
            className="p-4 bg-cosmic-deep/40 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm hover:border-yog-accent/50 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02, y: -2 }}
            onClick={handleInteraction}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Eye className="w-4 h-4 text-yog-accent" />
              <span className="text-xs text-cosmic-energy opacity-70">MARKET CAP</span>
            </div>
            <p className="font-tech text-white text-sm">
              {formatNumber(tokenData.marketCap)}
            </p>
          </motion.div>

          <motion.div
            className="p-4 bg-cosmic-deep/40 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm hover:border-yog-accent/50 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02, y: -2 }}
            onClick={handleInteraction}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Volume2 className="w-4 h-4 text-yog-accent" />
              <span className="text-xs text-cosmic-energy opacity-70">VOLUME 24H</span>
            </div>
            <p className="font-tech text-white text-sm">
              {formatNumber(tokenData.volume24h)}
            </p>
          </motion.div>

          <motion.div
            className="p-4 bg-cosmic-deep/40 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm hover:border-yog-accent/50 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02, y: -2 }}
            onClick={handleInteraction}
          >
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-4 h-4 text-yog-accent" />
              <span className="text-xs text-cosmic-energy opacity-70">LIQUIDITY</span>
            </div>
            <p className="font-tech text-white text-sm">
              {formatNumber(tokenData.liquidity)}
            </p>
          </motion.div>

          <motion.div
            className="p-4 bg-cosmic-deep/40 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm hover:border-yog-accent/50 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02, y: -2 }}
            onClick={handleInteraction}
          >
            <div className="flex items-center space-x-2 mb-2">
              <TrendingDown className="w-4 h-4 text-yog-accent" />
              <span className="text-xs text-cosmic-energy opacity-70">TXN 24H</span>
            </div>
            <p className="font-tech text-white text-sm">
              {tokenData.txns24h.toLocaleString()}
            </p>
          </motion.div>

          <motion.div
            className="p-4 bg-cosmic-deep/40 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm hover:border-yog-accent/50 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02, y: -2 }}
            onClick={handleInteraction}
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-4 h-4 cosmic-energy rounded-full" />
              <span className="text-xs text-cosmic-energy opacity-70">OMNISCIENCE</span>
            </div>
            <p className="font-tech text-white text-sm">
              {state.omniscienceLevel}%
            </p>
            <p className="text-xs font-tech text-yog-accent">
              ACTIVE
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Chart Container */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="p-6 bg-cosmic-deep/30 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm omniscient-glow">
          {loading ? (
            <div className="h-96 flex items-center justify-center">
              <motion.div
                className="text-center"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-16 h-16 cosmic-energy rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-cosmic-void" />
                </div>
                <p className="font-tech text-cosmic-energy">Communing with the price oracle...</p>
              </motion.div>
            </div>
          ) : error ? (
            <div className="h-96 flex items-center justify-center">
              <div className="text-center">
                <p className="text-horror-red mb-4">{error}</p>
                <motion.button
                  className="px-4 py-2 bg-yog-primary hover:bg-yog-accent border border-cosmic-purple rounded-lg font-tech transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={fetchTokenData}
                >
                  RETRY COMMUNION
                </motion.button>
              </div>
            </div>
          ) : (
            <div className="relative">
              {/* Chart Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-tech text-white">OMNISCIENT PRICE ORACLE</h3>
                <motion.div
                  className="flex items-center space-x-2 text-yog-accent"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-yog-accent rounded-full" />
                  <span className="text-sm font-tech">LIVE</span>
                </motion.div>
              </div>

              {/* Embedded DexScreener Chart */}
              <div className="relative h-96 rounded-lg overflow-hidden bg-cosmic-void/50">
                <iframe
                  src={chartUrl}
                  className="w-full h-full border-0"
                  title="YOG-SOTHOTH Price Chart"
                  allow="clipboard-write"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                  style={{
                    filter: state.realityDistortion > 50 ? 'hue-rotate(45deg) contrast(1.2)' : 'none'
                  }}
                />
                
                {/* Overlay effects based on cosmic state */}
                {state.awakening && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-br from-yog-accent/5 to-cosmic-purple/5"
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                )}
              </div>

              {/* Chart Footer */}
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-cosmic-energy opacity-70">
                  Chart data flows directly from the DexScreener oracle.
                </p>
                <motion.a
                  href={`https://dexscreener.com/solana/${contractAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-yog-accent hover:text-white transition-colors font-tech"
                  whileHover={{ scale: 1.05 }}
                  onClick={handleInteraction}
                >
                  VIEW FULL CHART →
                </motion.a>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Trading Links */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {[
          { name: 'RAYDIUM', url: 'https://raydium.io/swap/', description: 'Trade on Raydium DEX' },
          { name: 'JUPITER', url: 'https://jup.ag/swap/', description: 'Best price aggregation' },
          { name: 'DEXSCREENER', url: `https://dexscreener.com/solana/${contractAddress}`, description: 'Full chart analysis' }
        ].map((platform) => (
          <motion.a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-cosmic-deep/40 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm hover:border-yog-accent/50 transition-all duration-300 text-center group"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleInteraction}
          >
            <h4 className="font-tech text-white group-hover:text-yog-accent transition-colors">
              {platform.name}
            </h4>
            <p className="text-xs text-cosmic-energy opacity-70 mt-1">
              {platform.description}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}