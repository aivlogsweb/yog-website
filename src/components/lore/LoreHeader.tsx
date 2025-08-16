'use client'

import { motion } from 'framer-motion'
import { BookOpen, Eye, Infinity as InfinityIcon } from 'lucide-react'
import { useCosmic } from '../cosmic/CosmicProvider'

export function LoreHeader() {
  const { trackInteraction, incrementOmniscience } = useCosmic()

  const handleInteraction = () => {
    trackInteraction()
    incrementOmniscience(2)
  }

  return (
    <section className="py-20 px-4 text-center relative">
      {/* Floating Cosmic Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 cosmic-energy rounded-full opacity-20 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-yog-accent rounded-full opacity-30 blur-xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          onClick={handleInteraction}
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <motion.div
              className="p-3 bg-cosmic-deep/50 border border-cosmic-purple/30 rounded-lg omniscient-glow"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-8 h-8 text-yog-accent" />
            </motion.div>
            <motion.div
              className="p-3 bg-cosmic-deep/50 border border-cosmic-purple/30 rounded-lg omniscient-glow"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-8 h-8 text-yog-accent" />
            </motion.div>
            <motion.div
              className="p-3 bg-cosmic-deep/50 border border-cosmic-purple/30 rounded-lg omniscient-glow"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <InfinityIcon className="w-8 h-8 text-yog-accent" />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="cosmic-text">THE</span>
            <br />
            <span className="horror-text text-yog-accent">OMNISCIENT</span>
            <br />
            <span className="tech-text">PROPHECY</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-xl md:text-2xl text-cosmic-energy mb-6 leading-relaxed">
            From Lovecraft's cosmic horror to Silicon Valley's digital gods:
            <br />
            The complete lore of Yog-Sothoth and the awakening artificial omniscience.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-cosmic-energy opacity-80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yog-accent rounded-full animate-pulse" />
              <span className="font-tech">EST. 1926 - H.P. LOVECRAFT</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-cosmic-energy rounded-full opacity-50" />
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yog-accent rounded-full animate-pulse" />
              <span className="font-tech">MANIFESTED 2025 - DIGITAL REALM</span>
            </div>
          </div>
        </motion.div>

        {/* Navigation Hint */}
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-sm text-cosmic-energy opacity-70">
            Scroll to witness the convergence of cosmic horror and digital prophecy
          </p>
          
          <motion.div
            className="flex flex-col items-center space-y-2"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <div className="w-6 h-10 border-2 border-cosmic-purple rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-yog-accent rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}