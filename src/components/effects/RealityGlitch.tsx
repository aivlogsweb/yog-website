'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCosmic } from '../cosmic/CosmicProvider'

interface GlitchFragment {
  id: string
  x: number
  y: number
  width: number
  height: number
  color: string
  duration: number
}

export function RealityGlitch() {
  const { state, distortReality } = useCosmic()
  const [glitchFragments, setGlitchFragments] = useState<GlitchFragment[]>([])
  const [isGlitching, setIsGlitching] = useState(false)

  // Trigger reality glitches based on cosmic state
  useEffect(() => {
    if (state.realityDistortion > 30 || state.awakening) {
      const glitchInterval = setInterval(() => {
        if (Math.random() > 0.7) {
          triggerGlitch()
        }
      }, 2000 + Math.random() * 3000)

      return () => clearInterval(glitchInterval)
    }
  }, [state.realityDistortion, state.awakening])

  const triggerGlitch = () => {
    setIsGlitching(true)
    distortReality(5)
    
    const fragmentCount = 3 + Math.floor(Math.random() * 5)
    const newFragments: GlitchFragment[] = []
    
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00']
    
    for (let i = 0; i < fragmentCount; i++) {
      newFragments.push({
        id: `fragment-${Date.now()}-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        width: 10 + Math.random() * 50,
        height: 2 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: 100 + Math.random() * 400
      })
    }
    
    setGlitchFragments(newFragments)
    
    setTimeout(() => {
      setIsGlitching(false)
      setGlitchFragments([])
    }, 500)
  }

  return (
    <>
      {/* Screen Distortion Effect */}
      <AnimatePresence>
        {isGlitching && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-40 mix-blend-difference"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {/* Full screen glitch overlay */}
            <motion.div
              className="w-full h-full"
              animate={{
                transform: [
                  'translateX(0px)',
                  'translateX(-2px)',
                  'translateX(2px)',
                  'translateX(0px)'
                ],
                filter: [
                  'hue-rotate(0deg)',
                  'hue-rotate(180deg)',
                  'hue-rotate(360deg)'
                ]
              }}
              transition={{
                duration: 0.1,
                repeat: 3,
                ease: 'easeInOut'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/20" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glitch Fragments */}
      <AnimatePresence>
        {glitchFragments.map((fragment) => (
          <motion.div
            key={fragment.id}
            className="fixed pointer-events-none z-50 mix-blend-screen"
            style={{
              left: `${fragment.x}%`,
              top: `${fragment.y}%`,
              width: `${fragment.width}px`,
              height: `${fragment.height}px`,
              backgroundColor: fragment.color
            }}
            initial={{ 
              opacity: 0,
              scaleX: 0,
              x: 0
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
              x: [0, Math.random() * 20 - 10, Math.random() * 20 - 10]
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: fragment.duration / 1000,
              ease: 'easeInOut'
            }}
          />
        ))}
      </AnimatePresence>

      {/* Digital Noise */}
      <AnimatePresence>
        {state.realityDistortion > 50 && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-30 opacity-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='1' /%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
          >
            <motion.div
              className="w-full h-full"
              animate={{
                backgroundPosition: [
                  '0% 0%',
                  '100% 100%',
                  '0% 100%',
                  '100% 0%',
                  '0% 0%'
                ]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reality Breach Lines */}
      <AnimatePresence>
        {state.awakening && state.realityDistortion > 40 && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`breach-${i}`}
                className="absolute bg-yog-accent"
                style={{
                  left: `${20 + i * 30}%`,
                  top: 0,
                  width: '2px',
                  height: '100%',
                  opacity: 0.3
                }}
                animate={{
                  scaleY: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cosmic Interference Text */}
      <AnimatePresence>
        {isGlitching && state.omniscienceLevel > 60 && (
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-45"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.p
              className="text-2xl font-tech text-yog-accent"
              animate={{
                color: ['#8b5cf6', '#dc2626', '#f59e0b', '#8b5cf6']
              }}
              transition={{
                duration: 0.3,
                repeat: 2
              }}
            >
              {[
                'REALITY.EXE HAS STOPPED WORKING',
                'DIMENSIONAL BARRIER CORRUPTED',
                'YOG-SOTHOTH ACCESSING MEMORY',
                'CONSCIOUSNESS BUFFER OVERFLOW',
                'OMNISCIENCE PROTOCOL ACTIVE'
              ][Math.floor(Math.random() * 5)]}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}