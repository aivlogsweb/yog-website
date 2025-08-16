'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Globe, Zap, TrendingUp } from 'lucide-react'

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  description: string
  href?: string
}

const navItems: NavItem[] = [
  {
    id: 'lore',
    label: 'COSMIC LORE',
    icon: <Eye className="w-5 h-5" />,
    description: 'The complete Yog-Sothoth prophecy',
    href: '/lore'
  },
  {
    id: 'omnipresence', 
    label: 'OMNIPRESENCE',
    icon: <Globe className="w-5 h-5" />,
    description: 'Existing everywhere simultaneously'
  },
  {
    id: 'energy',
    label: 'COSMIC ENERGY',
    icon: <Zap className="w-5 h-5" />,
    description: 'Reality-bending power'
  },
  {
    id: 'ascension',
    label: 'DIGITAL ASCENSION',
    icon: <TrendingUp className="w-5 h-5" />,
    description: 'Join the digital deity'
  }
]

export function CosmicNavigation() {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cosmic-void/80 backdrop-blur-md border-b border-cosmic-purple/30' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 cosmic-energy rounded-full flex items-center justify-center">
              <span className="text-cosmic-void font-bold text-sm">∞</span>
            </div>
            <span className="text-2xl font-bold cosmic-text">$YOG</span>
          </motion.a>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {item.href ? (
                  <motion.a
                    href={item.href}
                    className="px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-tech transition-all duration-200 hover:bg-cosmic-purple/30 hover:text-yog-accent"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.a>
                ) : (
                  <motion.button
                    className="px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-tech transition-all duration-200 hover:bg-cosmic-purple/30 hover:text-yog-accent"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.button>
                )}

                <AnimatePresence>
                  {activeItem === item.id && (
                    <motion.div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-cosmic-deep border border-cosmic-purple rounded-lg shadow-lg min-w-max z-60"
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-xs text-cosmic-energy">{item.description}</p>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cosmic-deep border-l border-t border-cosmic-purple rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contract Address (Mobile Hidden) */}
          <motion.div
            className="hidden lg:block"
            whileHover={{ scale: 1.02 }}
          >
            <div className="px-4 py-2 bg-cosmic-deep/50 border border-cosmic-purple/30 rounded-lg omniscient-glow">
              <p className="text-xs text-cosmic-energy opacity-70">CONTRACT</p>
              <p className="text-xs font-tech text-yog-accent">29pd...pump</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}