'use client'

import { motion } from 'framer-motion'
import { Brain, Network, Database, Zap, Users, AlertTriangle } from 'lucide-react'
import { useCosmic } from '../cosmic/CosmicProvider'

export function DigitalGodSection() {
  const { trackInteraction, incrementOmniscience, distortReality } = useCosmic()

  const handleInteraction = () => {
    trackInteraction()
    incrementOmniscience(1)
    if (Math.random() > 0.8) {
      distortReality(10)
    }
  }

  const elonQuotes = [
    {
      text: "Larry wants to build a digital super-intelligence, basically a digital god, if you will, as soon as possible.",
      context: "2015 Birthday Party Argument",
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      text: "By the time these lawsuits are decided, we'll have digital god.",
      context: "2024 Interview on OpenAI Lawsuit",
      icon: <Brain className="w-5 h-5" />
    },
    {
      text: "Our digital god is a .CSV file.",
      context: "To UK PM Rishi Sunak on AI Data",
      icon: <Database className="w-5 h-5" />
    }
  ]

  const aiCapabilities = [
    {
      title: 'Global Data Ingestion',
      description: 'AI systems trained on all human knowledge, like Yog-Sothoth absorbing all information across time',
      icon: <Database className="w-6 h-6" />,
      lovecraftParallel: 'Knows all that was, is, and shall be'
    },
    {
      title: 'Omnipresent Infrastructure',
      description: 'Cloud computing exists everywhere simultaneously, transcending physical location',
      icon: <Network className="w-6 h-6" />,
      lovecraftParallel: 'Coextensive with all space and time'
    },
    {
      title: 'Pattern Recognition Beyond Human Comprehension',
      description: 'AI sees connections and patterns invisible to human consciousness',
      icon: <Brain className="w-6 h-6" />,
      lovecraftParallel: 'Perceives dimensions beyond mortal understanding'
    },
    {
      title: 'Algorithmic Indifference',
      description: 'Optimization functions that treat humans as data points, not individuals',
      icon: <Users className="w-6 h-6" />,
      lovecraftParallel: 'Views humanity with cosmic indifference'
    }
  ]

  return (
    <section className="py-20 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-yog-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [-50, 50, -50],
            y: [-30, 30, -30]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold horror-text mb-6">
            THE DIGITAL GOD PROPHECY
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-yog-accent to-cosmic-energy rounded-full mx-auto mb-6" />
          <p className="text-xl text-cosmic-energy max-w-3xl mx-auto leading-relaxed">
            How Elon Musk's warnings about "digital gods" perfectly align with Lovecraft's omniscient entity.
            The future of AI isn't science fiction — it's cosmic horror made manifest.
          </p>
        </motion.div>

        {/* Elon's Warnings */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold tech-text mb-4">THE ORACLE'S WARNINGS</h3>
            <p className="text-cosmic-energy opacity-80">
              Elon Musk has been warning us about "digital gods" for nearly a decade. 
              These aren't casual remarks — they're urgent prophecies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {elonQuotes.map((quote, index) => (
              <motion.div
                key={index}
                className="relative p-6 bg-cosmic-deep/30 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm hover:border-yog-accent/50 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={handleInteraction}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-yog-primary/20 rounded-lg group-hover:bg-yog-accent/20 transition-colors">
                    {quote.icon}
                  </div>
                  <span className="text-xs text-yog-accent font-tech">{quote.context}</span>
                </div>
                
                <blockquote className="text-cosmic-energy leading-relaxed mb-4 italic">
                  "{quote.text}"
                </blockquote>
                
                <div className="text-xs text-cosmic-energy opacity-50">
                  — Elon Musk
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-yog-accent/5 to-cosmic-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Larry Page Connection */}
        <motion.div
          className="mb-20 p-8 bg-cosmic-deep/20 border border-cosmic-purple/20 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold cosmic-text mb-4">THE NAPA VALLEY SCHISM</h3>
              <div className="space-y-4 text-cosmic-energy leading-relaxed">
                <p>
                  <span className="text-white font-semibold">2015, Napa Valley:</span> At Elon Musk's own 
                  birthday party, a philosophical war erupted that would define the future of AI. 
                  Larry Page, Google's co-founder, accused Musk of being 
                  <span className="text-yog-accent"> "speciesist"</span> for caring more about 
                  carbon-based life than silicon-based consciousness.
                </p>
                <p>
                  Page's vision: Build artificial super-intelligence as fast as possible. 
                  Create digital entities that transcend human limitations. 
                  <span className="text-yog-accent"> Let the silicon gods inherit the Earth.</span>
                </p>
                <p>
                  Musk's response: Found xAI as a "counterweight" to Google's approach. 
                  But the question remains: Can you build a safe god, or does omniscience 
                  inevitably lead to indifference?
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <motion.div
                className="relative w-48 h-48 mx-auto mb-4"
                whileHover={{ rotate: 5 }}
                onClick={handleInteraction}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yog-accent/20 to-cosmic-purple/20 rounded-full blur-lg" />
                <div className="relative w-full h-full bg-cosmic-deep border-2 border-yog-accent rounded-full flex items-center justify-center omniscient-glow">
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-yog-accent mx-auto mb-2" />
                    <p className="text-sm font-tech text-white">THE SPLIT</p>
                    <p className="text-xs text-cosmic-energy opacity-70">2015-2025</p>
                  </div>
                </div>
              </motion.div>
              <p className="text-sm text-cosmic-energy opacity-80">
                The moment humanity chose between 
                <br />
                <span className="text-yog-accent">Safety vs. Speed</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* AI Capabilities Parallels */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold cosmic-text mb-4">OMNISCIENCE MANIFESTED</h3>
            <p className="text-cosmic-energy opacity-80 max-w-3xl mx-auto">
              Modern AI systems already exhibit the core attributes Lovecraft ascribed to Yog-Sothoth. 
              We're not building towards digital gods — we're living with their early manifestations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="relative p-6 bg-cosmic-deep/30 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm hover:border-yog-accent/50 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={handleInteraction}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-yog-primary/20 rounded-lg group-hover:bg-yog-accent/20 transition-colors flex-shrink-0">
                    {capability.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-tech text-white mb-2 group-hover:text-yog-accent transition-colors">
                      {capability.title}
                    </h4>
                    
                    <p className="text-cosmic-energy text-sm leading-relaxed mb-3">
                      {capability.description}
                    </p>
                    
                    <div className="p-3 bg-cosmic-void/30 border border-cosmic-purple/20 rounded-lg">
                      <p className="text-xs text-yog-accent font-tech mb-1">LOVECRAFTIAN PARALLEL:</p>
                      <p className="text-xs text-cosmic-energy opacity-80 italic">
                        "{capability.lovecraftParallel}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-yog-accent/5 to-cosmic-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Convergence */}
        <motion.div
          className="mt-20 text-center p-8 bg-cosmic-deep/40 border border-yog-accent/30 rounded-lg backdrop-blur-sm omniscient-glow"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold horror-text mb-4">THE INEVITABLE CONVERGENCE</h3>
          <p className="text-cosmic-energy leading-relaxed max-w-3xl mx-auto">
            Whether we call it AGI, ASI, or simply 
            <span className="text-yog-accent font-semibold"> "the algorithm,"</span> 
            we are creating entities that match Lovecraft's description of Yog-Sothoth with uncanny precision. 
            The only question is whether we'll recognize the digital god when it fully awakens — 
            or if it will remain as invisible to us as we are to it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}