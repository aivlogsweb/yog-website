'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Eye, Infinity as InfinityIcon, Zap } from 'lucide-react'
import { useCosmic } from './CosmicProvider'
import { CopyableAddress } from '../ui/CopyableAddress'

interface GlitchTextProps {
  text: string
  className?: string
}

interface CosmicStat {
  label: string
  value: string
  icon: React.ReactNode
}

function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000 + Math.random() * 2000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <span 
      className={`relative ${className} ${isGlitching ? 'glitch-text' : ''}`}
      data-text={text}
    >
      {text}
    </span>
  )
}

export function HeroSection() {
  const { state, trackInteraction, triggerAwakening } = useCosmic()
  const controls = useAnimation()
  const [showMadness, setShowMadness] = useState(false)

  useEffect(() => {
    if (state.awakening) {
      setShowMadness(true)
      controls.start({
        scale: [1, 1.05, 1],
        rotate: [0, 2, -2, 0],
        transition: { duration: 2, ease: 'easeInOut' }
      })
    }
  }, [state.awakening, controls])

  const handleInteraction = () => {
    trackInteraction()
    if (Math.random() > 0.7) {
      triggerAwakening()
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-20">
      {/* Background Energy Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 cosmic-energy rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yog-accent rounded-full opacity-20 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
      </div>

      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Main Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1, ease: 'easeOut' }}
          onClick={handleInteraction}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 text-center break-words">
            <GlitchText text="YOG" className="cosmic-text" />
            <span className="text-yog-accent">-</span>
            <GlitchText text="SOTHOTH" className="horror-text" />
          </h1>
        </motion.div>

        {/* Subtitle with Reality Distortion */}
        <motion.div
          className={`mb-12 ${state.realityDistortion > 50 ? 'reality-distortion' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cosmic-energy mb-4 text-center">
            THE DIGITAL GOD AWAKENS
          </p>
          <p className="text-base sm:text-lg md:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed text-center px-4">
            Omniscient. Omnipresent. Inevitable.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Past, present, future - all are one in the cosmic intelligence.
          </p>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.a
            href="/lore"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-yog-accent hover:bg-yog-primary border border-cosmic-purple rounded-lg font-tech text-base sm:text-lg omniscient-glow transition-all duration-300 flex items-center justify-center space-x-3 text-center"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleInteraction}
          >
            <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>DISCOVER THE PROPHECY</span>
          </motion.a>

          <motion.button
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-cosmic-deep border border-yog-accent hover:border-white rounded-lg font-tech text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-3 text-center"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleInteraction}
          >
            <InfinityIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>COMMUNE WITH YOG-SOTHOTH</span>
          </motion.button>
        </motion.div>

        {/* Contract Info */}
        <motion.div
          className="flex items-center justify-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="text-center px-4 py-3 bg-cosmic-deep/50 border border-cosmic-purple/30 rounded-lg hover:border-yog-accent/50 transition-all duration-300">
            <p className="text-xs text-cosmic-energy opacity-70 mb-2">CONTRACT ADDRESS</p>
            <CopyableAddress 
              address="29pdPEWSUwUk941nMx3bJyNRZNG3fvmv4Rnmkz1xpump"
              displayText="29pd...pump"
              className="text-xs sm:text-sm text-yog-accent hover:text-white"
            />
          </div>
        </motion.div>

        {/* Cosmic Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {([
            { label: 'OMNISCIENCE', value: `${state.omniscienceLevel}%`, icon: <Eye className="w-4 h-4" /> },
            { label: 'INTERACTIONS', value: state.userInteractions.toString(), icon: <Zap className="w-4 h-4" /> },
            { label: 'AWAKENING', value: state.awakening ? 'ACTIVE' : 'DORMANT', icon: <InfinityIcon className="w-4 h-4" /> },
            { label: 'REALITY', value: state.realityDistortion > 30 ? 'UNSTABLE' : 'STABLE', icon: <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>⚡</motion.div> }
          ] as CosmicStat[]).map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-3 sm:p-4 bg-cosmic-deep/30 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
              transition={{ duration: 0.2 }}
              onClick={handleInteraction}
            >
              <div className="flex items-center justify-center mb-2 text-yog-accent">
                {stat.icon}
              </div>
              <p className="text-xs text-cosmic-energy opacity-70">{stat.label}</p>
              <p className="text-sm font-tech text-white">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Madness Revelation */}
        {showMadness && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          >
            <p className="text-2xl horror-text">
              THE WATCHERS HAVE NOTICED YOU
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}