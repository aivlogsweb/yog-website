'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Brain, Zap, Wifi } from 'lucide-react'
import { useCosmic } from '../cosmic/CosmicProvider'

interface TrackedEvent {
  id: string
  type: 'scroll' | 'click' | 'hover' | 'keystroke' | 'focus'
  timestamp: number
  x: number
  y: number
}

export function OmniscienceTracker() {
  const { state, incrementOmniscience, trackInteraction, increaseMadness } = useCosmic()
  const [trackedEvents, setTrackedEvents] = useState<TrackedEvent[]>([])
  const [isTracking, setIsTracking] = useState(false)
  const [sessionData, setSessionData] = useState({
    timeOnSite: 0,
    interactions: 0,
    scrollDepth: 0,
    mouseMovements: 0
  })

  // Start tracking when omniscience level is high enough
  useEffect(() => {
    if (state.omniscienceLevel > 20) {
      setIsTracking(true)
    }
  }, [state.omniscienceLevel])

  // Track session time
  useEffect(() => {
    const interval = setInterval(() => {
      setSessionData(prev => ({
        ...prev,
        timeOnSite: prev.timeOnSite + 1
      }))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Track user interactions when omniscience is active
  useEffect(() => {
    if (!isTracking) return

    const addEvent = (type: TrackedEvent['type'], x = 0, y = 0) => {
      const event: TrackedEvent = {
        id: `${Date.now()}-${Math.random()}`,
        type,
        timestamp: Date.now(),
        x,
        y
      }
      
      setTrackedEvents(prev => [...prev.slice(-19), event]) // Keep last 20 events
      setSessionData(prev => ({ ...prev, interactions: prev.interactions + 1 }))
      
      if (state.awakening) {
        incrementOmniscience(0.5)
        if (Math.random() > 0.8) {
          increaseMadness(1)
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.98) { // Sample mouse movements
        addEvent('hover', e.clientX, e.clientY)
        setSessionData(prev => ({ ...prev, mouseMovements: prev.mouseMovements + 1 }))
      }
    }

    const handleClick = (e: MouseEvent) => {
      addEvent('click', e.clientX, e.clientY)
      trackInteraction()
    }

    const handleScroll = () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
      setSessionData(prev => ({ ...prev, scrollDepth: Math.max(prev.scrollDepth, scrollDepth) }))
      
      if (Math.random() > 0.9) {
        addEvent('scroll')
      }
    }

    const handleKeyPress = () => {
      addEvent('keystroke')
    }

    const handleFocus = () => {
      addEvent('focus')
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeyPress)
    window.addEventListener('focus', handleFocus)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('focus', handleFocus)
    }
  }, [isTracking, state.awakening, incrementOmniscience, trackInteraction, increaseMadness])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6" style={{ textShadow: '0 0 20px rgba(220, 38, 38, 0.8), 0 0 40px rgba(220, 38, 38, 0.4)' }}>
            OMNISCIENCE PROTOCOL
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cosmic-energy max-w-3xl mx-auto px-4">
            Every interaction feeds the digital god.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Your presence strengthens the cosmic intelligence.
          </p>
        </motion.div>

        {/* Tracking Status */}
        <AnimatePresence>
          {isTracking && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div
                  className="p-4 bg-cosmic-deep/40 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Eye className="w-5 h-5 text-yog-accent" />
                  </div>
                  <p className="text-xs text-cosmic-energy opacity-70">SESSION TIME</p>
                  <p className="text-lg font-tech text-white">{formatTime(sessionData.timeOnSite)}</p>
                </motion.div>

                <motion.div
                  className="p-4 bg-cosmic-deep/40 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Zap className="w-5 h-5 text-yog-accent" />
                  </div>
                  <p className="text-xs text-cosmic-energy opacity-70">INTERACTIONS</p>
                  <p className="text-lg font-tech text-white">{sessionData.interactions}</p>
                </motion.div>

                <motion.div
                  className="p-4 bg-cosmic-deep/40 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Brain className="w-5 h-5 text-yog-accent" />
                  </div>
                  <p className="text-xs text-cosmic-energy opacity-70">SCROLL DEPTH</p>
                  <p className="text-lg font-tech text-white">{sessionData.scrollDepth}%</p>
                </motion.div>

                <motion.div
                  className="p-4 bg-cosmic-deep/40 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Wifi className="w-5 h-5 text-yog-accent" />
                  </div>
                  <p className="text-xs text-cosmic-energy opacity-70">OMNISCIENCE</p>
                  <p className="text-lg font-tech text-white">{state.omniscienceLevel}%</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Event Feed */}
        <AnimatePresence>
          {isTracking && trackedEvents.length > 0 && (
            <motion.div
              className="mb-12 p-6 bg-cosmic-deep/30 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  className="w-3 h-3 bg-yog-accent rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <h3 className="text-lg font-tech text-white">LIVE OMNISCIENCE FEED</h3>
              </div>
              
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {trackedEvents.slice(-5).map((event) => (
                  <motion.div
                    key={event.id}
                    className="flex items-center justify-between text-sm p-2 bg-cosmic-void/30 rounded"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <span className="text-cosmic-energy">
                      {event.type.toUpperCase()} EVENT DETECTED
                    </span>
                    <span className="text-yog-accent font-tech">
                      {new Date(event.timestamp).toLocaleTimeString()}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Awakening Status */}
        <AnimatePresence>
          {state.awakening && (
            <motion.div
              className="relative z-[9998] text-center p-8 bg-cosmic-deep/50 border border-yog-accent/50 rounded-lg backdrop-blur-sm omniscient-glow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <motion.div
                className="mb-4"
                animate={{ 
                  scale: [1, 1.1, 1],
                  textShadow: [
                    '0 0 10px rgba(139, 92, 246, 0.5)',
                    '0 0 20px rgba(139, 92, 246, 0.8)',
                    '0 0 10px rgba(139, 92, 246, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <h3 className="text-3xl font-bold cosmic-text">AWAKENING DETECTED</h3>
              </motion.div>
              
              <p className="text-lg text-cosmic-energy mb-6">
                The digital god has noticed your presence.
                <br />
                Your consciousness is now being monitored.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-cosmic-void/50 rounded-lg">
                  <p className="text-sm text-cosmic-energy opacity-70">MADNESS LEVEL</p>
                  <div className="w-full h-2 bg-cosmic-purple/30 rounded-full overflow-hidden mt-2">
                    <motion.div
                      className="h-full bg-gradient-to-r from-horror-red to-yog-accent"
                      initial={{ width: '0%' }}
                      animate={{ width: `${state.madnessLevel}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <p className="text-sm font-tech text-white mt-1">{state.madnessLevel}%</p>
                </div>
                
                <div className="p-4 bg-cosmic-void/50 rounded-lg">
                  <p className="text-sm text-cosmic-energy opacity-70">REALITY DISTORTION</p>
                  <div className="w-full h-2 bg-cosmic-purple/30 rounded-full overflow-hidden mt-2">
                    <motion.div
                      className="h-full bg-gradient-to-r from-yog-primary to-cosmic-energy"
                      initial={{ width: '0%' }}
                      animate={{ width: `${state.realityDistortion}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <p className="text-sm font-tech text-white mt-1">{state.realityDistortion}%</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Privacy Notice */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xs text-cosmic-energy opacity-60 max-w-2xl mx-auto">
            Note: The omniscient entity respects your privacy. 
            All tracking data is processed locally and used only to enhance your cosmic horror experience.
            No personal information is transmitted beyond the dimensional barriers.
          </p>
        </motion.div>
      </div>
    </section>
  )
}