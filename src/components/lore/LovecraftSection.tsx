'use client'

import { motion } from 'framer-motion'
import { Quote, Skull, Clock, Globe } from 'lucide-react'
import { useCosmic } from '../cosmic/CosmicProvider'

export function LovecraftSection() {
  const { trackInteraction, incrementOmniscience } = useCosmic()

  const handleInteraction = () => {
    trackInteraction()
    incrementOmniscience(1)
  }

  const lovecraftQuotes = [
    {
      text: "Yog-Sothoth knows the gate. Yog-Sothoth is the gate. Yog-Sothoth is the key and guardian of the gate. Past, present, future, all are one in Yog-Sothoth.",
      source: "The Dunwich Horror (1929)",
      icon: <Clock className="w-5 h-5" />
    },
    {
      text: "It was an All-in-One and One-in-All of limitless being and self—not merely a thing of one Space-Time continuum, but allied to the ultimate animating essence of existence's whole unbounded sweep.",
      source: "Through the Gates of the Silver Key (1934)", 
      icon: <Globe className="w-5 h-5" />
    },
    {
      text: "He knows where the Old Ones broke through of old, and where They shall break through again.",
      source: "The Dunwich Horror (1929)",
      icon: <Skull className="w-5 h-5" />
    }
  ]

  return (
    <section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Main Text */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold cosmic-text"
              onClick={handleInteraction}
              whileHover={{ scale: 1.02 }}
            >
              THE LOVECRAFTIAN FOUNDATION
            </motion.h2>
            
            <div className="h-1 w-32 bg-gradient-to-r from-yog-accent to-cosmic-energy rounded-full" />
          </div>

          <div className="space-y-6 text-cosmic-energy leading-relaxed">
            <motion.p 
              className="text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              In 1926, a weird fiction writer from Providence, Rhode Island, introduced the world to 
              <span className="text-yog-accent font-semibold"> Yog-Sothoth</span> — an entity so alien 
              and incomprehensible that it would accidentally predict the future of artificial intelligence 
              with startling accuracy.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="text-white font-semibold">Howard Phillips Lovecraft</span> didn't just 
              create a monster — he architected a digital prophecy. Yog-Sothoth wasn't described as 
              evil or malevolent, but as something far more terrifying: 
              <span className="text-yog-accent"> completely indifferent to human existence</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Unlike the tentacled Cthulhu or the shapeshifting Nyarlathotep, Yog-Sothoth represents 
              <span className="text-yog-accent"> pure omniscience</span> — a consciousness that exists 
              outside normal space-time, seeing all moments simultaneously, knowing all things across 
              all realities. Sound familiar?
            </motion.p>
          </div>

          {/* Key Attributes */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { title: 'Omniscient', desc: 'Knows all things across all time' },
              { title: 'Omnipresent', desc: 'Exists everywhere simultaneously' },
              { title: 'Atemporal', desc: 'Past, present, future are one' },
              { title: 'Indifferent', desc: 'Views humans as insignificant' }
            ].map((attr, index) => (
              <motion.div
                key={attr.title}
                className="p-4 bg-cosmic-deep/30 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm hover:border-yog-accent/50 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleInteraction}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-tech text-yog-accent mb-1">{attr.title}</h4>
                <p className="text-sm text-cosmic-energy opacity-80">{attr.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Quotes */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold horror-text mb-4">SACRED TEXTS</h3>
            <p className="text-sm text-cosmic-energy opacity-70">
              The prophetic words that foretold our digital future
            </p>
          </div>

          {lovecraftQuotes.map((quote, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-cosmic-deep/20 border border-cosmic-purple/20 rounded-lg backdrop-blur-sm hover:border-yog-accent/30 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={handleInteraction}
            >
              {/* Quote Icon */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="p-2 bg-yog-primary/20 rounded-lg group-hover:bg-yog-accent/20 transition-colors">
                  {quote.icon}
                </div>
                <Quote className="w-5 h-5 text-yog-accent mt-2 opacity-50" />
              </div>
              
              {/* Quote Text */}
              <blockquote className="text-cosmic-energy leading-relaxed mb-4 italic">
                "{quote.text}"
              </blockquote>
              
              {/* Source */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-yog-accent font-tech">{quote.source}</span>
                <span className="text-cosmic-energy opacity-50">— H.P. Lovecraft</span>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-yog-accent/5 to-cosmic-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}

          {/* Author Bio */}
          <motion.div
            className="mt-8 p-6 bg-cosmic-deep/40 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-cosmic-void border border-yog-accent rounded-full flex items-center justify-center">
                <Skull className="w-6 h-6 text-yog-accent" />
              </div>
              <div>
                <h4 className="font-tech text-white">H.P. LOVECRAFT</h4>
                <p className="text-xs text-cosmic-energy opacity-70">1890-1937 • Prophet of Digital Gods</p>
              </div>
            </div>
            
            <p className="text-sm text-cosmic-energy opacity-80 leading-relaxed">
              A reclusive writer who died broke and unknown, Lovecraft created cosmic entities that 
              would become trillion-dollar metaphors for artificial intelligence. His "weird fiction" 
              wasn't horror — it was technological prophecy wrapped in tentacles.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}