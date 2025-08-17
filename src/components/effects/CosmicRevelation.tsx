'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCosmic } from '../cosmic/CosmicProvider'
import { X } from 'lucide-react'

export function CosmicRevelation() {
  const { state } = useCosmic()
  const [showOmniscienceDialog, setShowOmniscienceDialog] = useState(true)

  return (
    <AnimatePresence>
      {/* Critical omniscience revelations - always on top */}
      {state.omniscienceLevel >= 100 && showOmniscienceDialog && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center pointer-events-auto z-[9999] bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-cosmic-void/95 border-2 border-yog-accent rounded-lg p-8 mx-4 backdrop-blur-md max-w-md text-center relative"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            style={{
              boxShadow: '0 0 50px rgba(139, 92, 246, 0.5), inset 0 0 30px rgba(139, 92, 246, 0.1)'
            }}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-cosmic-purple/50 hover:border-yog-accent/50 transition-colors touch-manipulation"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowOmniscienceDialog(false)}
              style={{
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              <X className="w-4 h-4 text-cosmic-energy hover:text-yog-accent" />
            </motion.button>

            <motion.h2
              className="text-2xl font-bold horror-text mb-4"
              animate={{
                textShadow: [
                  '0 0 10px rgba(220, 38, 38, 0.5)',
                  '0 0 30px rgba(220, 38, 38, 0.8)',
                  '0 0 10px rgba(220, 38, 38, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              OMNISCIENCE ACHIEVED
            </motion.h2>
            
            <motion.p
              className="text-cosmic-energy mb-6"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              You have gazed too deeply into the void.
              <br />
              The digital god now sees through your eyes.
            </motion.p>
            
            {/* Dismissible button */}
            <motion.button
              className="w-full py-4 px-6 bg-yog-primary hover:bg-yog-accent border border-cosmic-purple rounded-lg font-tech transition-colors touch-manipulation"
              animate={{ 
                scale: [1, 1.02, 1],
                boxShadow: [
                  '0 0 10px rgba(139, 92, 246, 0.3)',
                  '0 0 20px rgba(139, 92, 246, 0.6)',
                  '0 0 10px rgba(139, 92, 246, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowOmniscienceDialog(false)}
              style={{
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-yog-accent rounded-full" />
                <span className="text-sm text-white font-bold">ENLIGHTENMENT COMPLETE</span>
                <div className="w-3 h-3 bg-yog-accent rounded-full" />
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* High madness level warnings */}
      {state.madnessLevel >= 80 && state.awakening && (
        <motion.div
          className="fixed top-4 left-4 right-4 z-[9998] pointer-events-none"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <motion.div
            className="bg-horror-red/20 border border-horror-red/50 rounded-lg p-4 backdrop-blur-sm"
            animate={{ 
              borderColor: [
                'rgba(220, 38, 38, 0.5)',
                'rgba(220, 38, 38, 0.8)',
                'rgba(220, 38, 38, 0.5)'
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <p className="text-center text-horror-red font-tech text-sm">
              REALITY COHERENCE: {100 - state.madnessLevel}%
            </p>
            <p className="text-center text-cosmic-energy text-xs mt-1">
              Dimensional barriers weakening...
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Reality distortion overlay */}
      {state.realityDistortion >= 70 && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-[9997]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-yog-accent/10 via-transparent to-cosmic-purple/10"
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}