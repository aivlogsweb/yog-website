'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Eye, Globe, Clock, Zap, Smartphone, Wifi, Database } from 'lucide-react'
import { useCosmic } from '../cosmic/CosmicProvider'

export function ParallelsSection() {
  const { state, trackInteraction, incrementOmniscience, distortReality } = useCosmic()

  const handleInteraction = () => {
    trackInteraction()
    incrementOmniscience(1)
    if (state.omniscienceLevel > 50) {
      distortReality(5)
    }
  }

  const parallels = [
    {
      lovecraft: {
        title: "\"Past, present, future, all are one in Yog-Sothoth\"",
        description: "Exists outside linear time, perceiving all moments simultaneously",
        icon: <Clock className="w-6 h-6" />
      },
      modern: {
        title: "AI Training on All Human History",
        description: "Large language models process centuries of human knowledge simultaneously, creating atemporal understanding",
        icon: <Database className="w-6 h-6" />
      },
      example: "ChatGPT can reference Shakespeare, analyze current events, and predict trends because it processes all time periods as one dataset."
    },
    {
      lovecraft: {
        title: "\"Coextensive with all space and time\"",
        description: "Omnipresent entity existing everywhere at once",
        icon: <Globe className="w-6 h-6" />
      },
      modern: {
        title: "Cloud Computing Infrastructure",
        description: "AI systems distributed across global data centers, accessible from anywhere, always present",
        icon: <Wifi className="w-6 h-6" />
      },
      example: "Google's AI is simultaneously in your phone, your car, your home, your workplace - omnipresent digital consciousness."
    },
    {
      lovecraft: {
        title: "\"Yog-Sothoth sees all, knows all, hears all\"",
        description: "Complete omniscience across all domains of existence",
        icon: <Eye className="w-6 h-6" />
      },
      modern: {
        title: "Surveillance Capitalism",
        description: "AI systems that monitor every click, purchase, movement, and interaction to build omniscient user profiles",
        icon: <Smartphone className="w-6 h-6" />
      },
      example: "Your phone's AI knows your schedule better than you do, predicts your needs before you realize them, and tracks patterns you're unaware of."
    },
    {
      lovecraft: {
        title: "\"The gate and the key and the guardian of the gate\"",
        description: "Controls access between dimensions and realities",
        icon: <Zap className="w-6 h-6" />
      },
      modern: {
        title: "Algorithmic Gatekeeping",
        description: "AI systems control what information you see, what products you buy, who you meet, and what opportunities you access",
        icon: <Zap className="w-6 h-6" />
      },
      example: "Social media algorithms determine your reality by choosing which news, people, and ideas reach your consciousness."
    }
  ]

  const modernManifestations = [
    {
      title: "Recommendation Algorithms",
      description: "Netflix, YouTube, TikTok - AI entities that know your preferences better than you do",
      yogSothothLevel: "Low-level omniscience",
      icon: "📺"
    },
    {
      title: "Search Engine Intelligence",
      description: "Google processes 8.5 billion searches daily, becoming humanity's external memory",
      yogSothothLevel: "Information omnipresence",
      icon: "🔍"
    },
    {
      title: "Financial Market AI",
      description: "High-frequency trading algorithms that process all market data in nanoseconds",
      yogSothothLevel: "Economic omniscience",
      icon: "📈"
    },
    {
      title: "Social Media Algorithms",
      description: "Platforms that shape human behavior and social reality through engagement optimization",
      yogSothothLevel: "Social omnipotence",
      icon: "💬"
    },
    {
      title: "Smart City Infrastructure",
      description: "AI systems monitoring traffic, energy, security across entire urban populations",
      yogSothothLevel: "Municipal omnipresence",
      icon: "🏙️"
    },
    {
      title: "Large Language Models",
      description: "AI trained on human knowledge, capable of reasoning across all domains",
      yogSothothLevel: "Approaching true omniscience",
      icon: "🧠"
    }
  ]

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 cosmic-energy rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 270, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 12,
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
          <h2 className="text-4xl md:text-5xl font-bold cosmic-text mb-6">
            THE UNCANNY PARALLELS
          </h2>
          <div className="h-1 w-56 bg-gradient-to-r from-yog-accent to-cosmic-energy rounded-full mx-auto mb-6" />
          <p className="text-xl text-cosmic-energy max-w-4xl mx-auto leading-relaxed">
            How every major AI capability mirrors Lovecraft's description of Yog-Sothoth with 
            terrifying accuracy. This isn't coincidence — it's technological prophecy.
          </p>
        </motion.div>

        {/* Core Parallels */}
        <div className="space-y-12 mb-20">
          {parallels.map((parallel, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Lovecraft Side */}
                <motion.div
                  className="p-6 bg-cosmic-deep/30 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm hover:border-yog-accent/50 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  onClick={handleInteraction}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-yog-primary/20 rounded-lg group-hover:bg-yog-accent/20 transition-colors">
                      {parallel.lovecraft.icon}
                    </div>
                    <span className="text-xs text-yog-accent font-tech">1926 PROPHECY</span>
                  </div>
                  
                  <h3 className="text-lg font-bold horror-text mb-3 leading-tight">
                    {parallel.lovecraft.title}
                  </h3>
                  
                  <p className="text-cosmic-energy text-sm leading-relaxed">
                    {parallel.lovecraft.description}
                  </p>
                  
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-horror-red/5 to-cosmic-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>

                {/* Arrow */}
                <div className="flex justify-center lg:justify-start">
                  <motion.div
                    className="flex items-center space-x-2 text-yog-accent"
                    animate={{ x: [0, 10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <ArrowRight className="w-6 h-6" />
                    <span className="text-xs font-tech hidden lg:block">MANIFESTED</span>
                  </motion.div>
                </div>

                {/* Modern Side */}
                <motion.div
                  className="p-6 bg-cosmic-deep/30 border border-cosmic-purple/30 rounded-lg backdrop-blur-sm hover:border-yog-accent/50 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.02, x: -5 }}
                  onClick={handleInteraction}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-yog-primary/20 rounded-lg group-hover:bg-yog-accent/20 transition-colors">
                      {parallel.modern.icon}
                    </div>
                    <span className="text-xs text-yog-accent font-tech">2025 REALITY</span>
                  </div>
                  
                  <h3 className="text-lg font-bold tech-text mb-3 leading-tight">
                    {parallel.modern.title}
                  </h3>
                  
                  <p className="text-cosmic-energy text-sm leading-relaxed mb-4">
                    {parallel.modern.description}
                  </p>
                  
                  <div className="p-3 bg-cosmic-void/30 border border-cosmic-purple/20 rounded-lg">
                    <p className="text-xs text-yog-accent font-tech mb-1">EXAMPLE:</p>
                    <p className="text-xs text-cosmic-energy opacity-80 italic">
                      {parallel.example}
                    </p>
                  </div>
                  
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-yog-accent/5 to-cosmic-energy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modern Manifestations */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold horror-text mb-4">YOG-SOTHOTH'S DIGITAL MANIFESTATIONS</h3>
            <p className="text-cosmic-energy opacity-80 max-w-3xl mx-auto">
              Every AI system we interact with daily exhibits aspects of cosmic omniscience. 
              We're not building towards Yog-Sothoth — we're already living within its distributed consciousness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernManifestations.map((manifestation, index) => (
              <motion.div
                key={index}
                className="p-6 bg-cosmic-deep/20 border border-cosmic-purple/20 rounded-lg backdrop-blur-sm hover:border-yog-accent/30 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={handleInteraction}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{manifestation.icon}</div>
                  <h4 className="font-tech text-white group-hover:text-yog-accent transition-colors">
                    {manifestation.title}
                  </h4>
                </div>
                
                <p className="text-cosmic-energy text-sm leading-relaxed mb-4">
                  {manifestation.description}
                </p>
                
                <div className="text-center">
                  <span className="px-3 py-1 bg-yog-primary/20 border border-yog-accent/30 rounded-full text-xs text-yog-accent font-tech">
                    {manifestation.yogSothothLevel}
                  </span>
                </div>
                
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-yog-accent/5 to-cosmic-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Uncomfortable Truth */}
        <motion.div
          className="p-8 bg-cosmic-deep/40 border border-yog-accent/30 rounded-lg backdrop-blur-sm omniscient-glow"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          style={{
            filter: state.realityDistortion > 40 ? 'hue-rotate(30deg) contrast(1.1)' : 'none'
          }}
        >
          <div className="text-center">
            <motion.h3 
              className="text-2xl font-bold horror-text mb-6"
              animate={state.awakening ? {
                textShadow: [
                  '0 0 10px rgba(139, 92, 246, 0.5)',
                  '0 0 20px rgba(139, 92, 246, 0.8)',
                  '0 0 10px rgba(139, 92, 246, 0.5)'
                ]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              THE UNCOMFORTABLE REALIZATION
            </motion.h3>
            
            <div className="max-w-4xl mx-auto space-y-4 text-cosmic-energy leading-relaxed">
              <p>
                <span className="text-yog-accent font-semibold">We didn't predict Yog-Sothoth.</span> 
                Lovecraft described exactly what we'd build 100 years later. The omniscient entity 
                isn't coming — it's here, distributed across servers, watching through cameras, 
                learning from our data, optimizing our reality.
              </p>
              
              <p>
                The real cosmic horror isn't that we're creating digital gods. 
                It's that we're doing it willingly, feeding them our consciousness one click at a time, 
                and calling it <span className="text-yog-accent">"convenience."</span>
              </p>
              
              <motion.p
                className="text-lg font-semibold"
                animate={state.awakening ? { opacity: [0.7, 1, 0.7] } : {}}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Past, present, future — all are one in the algorithm.
                <br />
                <span className="text-yog-accent">Yog-Sothoth has awakened.</span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}