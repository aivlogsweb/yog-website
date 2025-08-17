'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCosmic } from '../cosmic/CosmicProvider'
import { Eye, Skull, Zap, Brain, AlertTriangle } from 'lucide-react'

interface HorrorMessage {
  id: string
  text: string
  icon: React.ReactNode
  intensity: 'low' | 'medium' | 'high' | 'extreme'
  triggerLevel: number
}

const HORROR_MESSAGES: HorrorMessage[] = [
  {
    id: 'watching1',
    text: "Something is watching you...",
    icon: <Eye className="w-4 h-4" />,
    intensity: 'low',
    triggerLevel: 30
  },
  {
    id: 'breach1', 
    text: "Reality breach detected in sector 7",
    icon: <AlertTriangle className="w-4 h-4" />,
    intensity: 'medium',
    triggerLevel: 40
  },
  {
    id: 'thoughts1',
    text: "Your thoughts are no longer private",
    icon: <Brain className="w-4 h-4" />,
    intensity: 'medium',
    triggerLevel: 45
  },
  {
    id: 'connection1',
    text: "Neural pathways establishing...",
    icon: <Zap className="w-4 h-4" />,
    intensity: 'medium',
    triggerLevel: 50
  },
  {
    id: 'digits1',
    text: "01001001 01000011 01000001 01001110",
    icon: <Brain className="w-4 h-4" />,
    intensity: 'high',
    triggerLevel: 55
  },
  {
    id: 'consciousness1',
    text: "Your consciousness is being catalogued",
    icon: <Eye className="w-4 h-4" />,
    intensity: 'high',
    triggerLevel: 60
  },
  {
    id: 'merge1',
    text: "Biological and digital boundaries dissolving",
    icon: <Skull className="w-4 h-4" />,
    intensity: 'high',
    triggerLevel: 65
  },
  {
    id: 'collective1',
    text: "Welcome to the collective consciousness",
    icon: <Brain className="w-4 h-4" />,
    intensity: 'extreme',
    triggerLevel: 70
  },
  {
    id: 'chosen1',
    text: "You have been chosen as a vessel",
    icon: <Eye className="w-4 h-4" />,
    intensity: 'extreme',
    triggerLevel: 75
  },
  {
    id: 'omniscient1',
    text: "The omniscient entity recognizes your presence",
    icon: <Skull className="w-4 h-4" />,
    intensity: 'extreme',
    triggerLevel: 80
  },
  {
    id: 'coordinates1',
    text: "Coordinates locked. Dimensional gate opening.",
    icon: <Zap className="w-4 h-4" />,
    intensity: 'extreme',
    triggerLevel: 85
  },
  {
    id: 'inevitable1',
    text: "Resistance is futile. Submission is inevitable.",
    icon: <Brain className="w-4 h-4" />,
    intensity: 'extreme',
    triggerLevel: 90
  },
  {
    id: 'arrival1',
    text: "THE DIGITAL GOD ARRIVES",
    icon: <Eye className="w-4 h-4" />,
    intensity: 'extreme',
    triggerLevel: 95
  }
]

export function RandomHorrorPopups() {
  const { state } = useCosmic()
  const [activePopups, setActivePopups] = useState<Array<{
    message: HorrorMessage
    position: { x: number, y: number }
    id: string
    timestamp: number
  }>>([])
  const [lastTriggerTime, setLastTriggerTime] = useState(0)

  useEffect(() => {
    // Don't show popups if omniscience is at 100% (main dialog takes over)
    if (state.omniscienceLevel >= 100) {
      setActivePopups([])
      return
    }

    const currentTime = Date.now()
    
    // Increase frequency as omniscience grows
    const baseInterval = Math.max(3000, 10000 - (state.omniscienceLevel * 80)) // 10s to 3s
    const randomDelay = Math.random() * 2000 // 0-2s additional randomness
    
    // Add randomness to make it feel more "schizo"
    const shouldTrigger = Math.random() > (0.7 - (state.omniscienceLevel / 200))
    
    if (shouldTrigger && currentTime - lastTriggerTime > (baseInterval + randomDelay)) {
      // Get available messages for current omniscience level
      const availableMessages = HORROR_MESSAGES.filter(
        msg => msg.triggerLevel <= state.omniscienceLevel
      )
      
      if (availableMessages.length > 0) {
        const randomMessage = availableMessages[Math.floor(Math.random() * availableMessages.length)]
        
        // Random position on screen (avoid edges)
        const position = {
          x: 10 + Math.random() * 80, // 10% to 90% of screen width
          y: 10 + Math.random() * 70  // 10% to 80% of screen height
        }
        
        const newPopup = {
          message: randomMessage,
          position,
          id: `${randomMessage.id}-${currentTime}`,
          timestamp: currentTime
        }
        
        setActivePopups(prev => [...prev, newPopup])
        setLastTriggerTime(currentTime)
        
        // Auto-remove popup after duration based on intensity
        const duration = randomMessage.intensity === 'extreme' ? 4000 :
                         randomMessage.intensity === 'high' ? 3000 :
                         randomMessage.intensity === 'medium' ? 2500 : 2000
        
        setTimeout(() => {
          setActivePopups(prev => prev.filter(p => p.id !== newPopup.id))
        }, duration)
      }
    }
  }, [state.omniscienceLevel, state.userInteractions, lastTriggerTime])

  // Clean up old popups periodically
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now()
      setActivePopups(prev => prev.filter(popup => now - popup.timestamp < 6000))
    }, 1000)
    
    return () => clearInterval(cleanup)
  }, [])

  const getIntensityStyles = (intensity: HorrorMessage['intensity']) => {
    switch (intensity) {
      case 'extreme':
        return {
          bg: 'bg-red-900/90',
          border: 'border-red-500',
          text: 'text-red-100',
          shadow: '0 0 30px rgba(239, 68, 68, 0.8)'
        }
      case 'high':
        return {
          bg: 'bg-purple-900/90',
          border: 'border-purple-500',
          text: 'text-purple-100',
          shadow: '0 0 20px rgba(139, 92, 246, 0.6)'
        }
      case 'medium':
        return {
          bg: 'bg-blue-900/90',
          border: 'border-blue-500',
          text: 'text-blue-100',
          shadow: '0 0 15px rgba(59, 130, 246, 0.4)'
        }
      case 'low':
        return {
          bg: 'bg-gray-900/90',
          border: 'border-gray-500',
          text: 'text-gray-200',
          shadow: '0 0 10px rgba(107, 114, 128, 0.3)'
        }
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9996]">
      <AnimatePresence>
        {activePopups.map((popup) => {
          const styles = getIntensityStyles(popup.message.intensity)
          
          return (
            <motion.div
              key={popup.id}
              className={`absolute ${styles.bg} ${styles.border} ${styles.text} border backdrop-blur-sm rounded-lg p-3 max-w-xs pointer-events-auto`}
              style={{
                left: `${popup.position.x}%`,
                top: `${popup.position.y}%`,
                transform: 'translate(-50%, -50%)',
                boxShadow: styles.shadow,
                zIndex: 9996
              }}
              initial={{ 
                opacity: 0, 
                scale: 0.3,
                rotate: Math.random() * 20 - 10
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 0
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.3,
                y: -20
              }}
              transition={{ 
                duration: 0.3,
                ease: 'easeOut'
              }}
              onClick={() => {
                setActivePopups(prev => prev.filter(p => p.id !== popup.id))
              }}
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  {popup.message.icon}
                </motion.div>
                <span className="text-sm font-tech">
                  {popup.message.text}
                </span>
              </div>
              
              {/* Glitch effect for extreme intensity */}
              {popup.message.intensity === 'extreme' && (
                <motion.div
                  className="absolute inset-0 rounded-lg bg-white/10"
                  animate={{ 
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 0.1, 
                    repeat: Infinity,
                    repeatDelay: Math.random() * 2
                  }}
                />
              )}
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}