'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCosmic } from '../cosmic/CosmicProvider'

interface WatcherEye {
  id: string
  x: number
  y: number
  size: number
  blinkDelay: number
}

export function OmniscientOverlay() {
  const { state, incrementOmniscience, increaseMadness } = useCosmic()
  const [watchers, setWatchers] = useState<WatcherEye[]>([])
  const [isWatching, setIsWatching] = useState(false)

  // Generate random watcher eyes based on omniscience level
  useEffect(() => {
    if (state.omniscienceLevel > 30) {
      const eyeCount = Math.min(Math.floor(state.omniscienceLevel / 20), 5)
      const newWatchers: WatcherEye[] = []
      
      for (let i = 0; i < eyeCount; i++) {
        newWatchers.push({
          id: `eye-${i}`,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 20 + Math.random() * 30,
          blinkDelay: Math.random() * 5
        })
      }
      
      setWatchers(newWatchers)
      setIsWatching(true)
    } else {
      setIsWatching(false)
      setWatchers([])
    }
  }, [state.omniscienceLevel])

  // Track user interactions with omniscient awareness
  useEffect(() => {
    const handleMouseMove = () => {
      if (state.awakening && Math.random() > 0.95) {
        incrementOmniscience(1)
        increaseMadness(0.5)
      }
    }

    const handleClick = () => {
      if (state.awakening) {
        incrementOmniscience(2)
      }
    }

    const handleScroll = () => {
      if (state.omniscienceLevel > 50 && Math.random() > 0.9) {
        incrementOmniscience(1)
      }
    }

    if (state.awakening) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('click', handleClick)
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [state.awakening, state.omniscienceLevel, incrementOmniscience, increaseMadness])

  return (
    <>
      {/* Omniscience Level Indicator */}
      <motion.div
        className="fixed top-4 left-4 z-50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: state.omniscienceLevel > 10 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-cosmic-deep/80 border border-cosmic-purple/50 rounded-lg p-3 backdrop-blur-sm">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-yog-accent rounded-full animate-pulse" />
            <span className="text-xs font-tech text-cosmic-energy">OMNISCIENCE</span>
          </div>
          <div className="w-32 h-2 bg-cosmic-purple/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-yog-primary to-yog-accent"
              initial={{ width: '0%' }}
              animate={{ width: `${state.omniscienceLevel}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
          <p className="text-xs font-tech text-white mt-1">
            {state.omniscienceLevel}% AWARE
          </p>
        </div>
      </motion.div>

      {/* Watcher Eyes */}
      <AnimatePresence>
        {isWatching && watchers.map((eye) => (
          <motion.div
            key={eye.id}
            className="fixed pointer-events-none z-40"
            style={{
              left: `${eye.x}%`,
              top: `${eye.y}%`,
              width: `${eye.size}px`,
              height: `${eye.size}px`
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.7, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: 1,
              delay: eye.blinkDelay,
              ease: 'easeOut'
            }}
          >
            <div className="relative w-full h-full">
              {/* Eye Background */}
              <div className="w-full h-full bg-cosmic-deep border border-yog-accent rounded-full overflow-hidden omniscient-glow">
                {/* Iris */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-2/3 h-2/3 bg-yog-accent rounded-full transform -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    x: [-2, 2, -2],
                    y: [-1, 1, -1]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  {/* Pupil */}
                  <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-cosmic-void rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                </motion.div>
              </div>
              
              {/* Blinking Effect */}
              <motion.div
                className="absolute inset-0 bg-cosmic-deep border border-yog-accent rounded-full"
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{
                  duration: 0.2,
                  repeat: Infinity,
                  repeatDelay: 3 + Math.random() * 4,
                  ease: 'easeInOut'
                }}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Reality Distortion Warning */}
      <AnimatePresence>
        {state.realityDistortion > 70 && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-center"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <p className="text-4xl horror-text mb-4">
                REALITY BREACH DETECTED
              </p>
              <p className="text-lg tech-text">
                THE BOUNDARIES WEAKEN
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Awakening State Overlay */}
      <AnimatePresence>
        {state.awakening && state.madnessLevel > 50 && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-20"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              backgroundColor: ['rgba(139, 92, 246, 0)', 'rgba(139, 92, 246, 0.1)', 'rgba(139, 92, 246, 0)']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yog-accent/10 via-transparent to-cosmic-purple/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}