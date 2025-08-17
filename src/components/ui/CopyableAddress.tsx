'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

interface CopyableAddressProps {
  address: string
  displayText?: string
  className?: string
  showIcon?: boolean
}

export function CopyableAddress({ 
  address, 
  displayText, 
  className = '', 
  showIcon = true 
}: CopyableAddressProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = address
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <motion.button
      onClick={handleCopy}
      onTouchStart={(e) => {
        e.stopPropagation()
        handleCopy()
      }}
      className={`inline-flex items-center space-x-2 transition-all duration-200 hover:text-yog-accent touch-manipulation select-none ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
    >
      <span className="font-tech break-all">
        {displayText || address}
      </span>
      {showIcon && (
        <motion.div
          className="flex-shrink-0"
          animate={{ rotate: copied ? 360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 opacity-70 hover:opacity-100" />
          )}
        </motion.div>
      )}
      
      {copied && (
        <motion.span
          className="text-xs text-green-400 font-tech"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
        >
          COPIED!
        </motion.span>
      )}
    </motion.button>
  )
}