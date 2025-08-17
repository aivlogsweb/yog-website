'use client'

import { Suspense } from 'react'
import { HeroSection } from '@/components/cosmic/HeroSection'
import { YogSpheres } from '@/components/cosmic/YogSpheres'
import { DexScreenerChart } from '@/components/charts/DexScreenerChart'
import { CosmicNavigation } from '@/components/ui/CosmicNavigation'
import { OmniscienceTracker } from '@/components/effects/OmniscienceTracker'
import { RealityGlitch } from '@/components/effects/RealityGlitch'
import { CosmicRevelation } from '@/components/effects/CosmicRevelation'
import { RandomHorrorPopups } from '@/components/effects/RandomHorrorPopups'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

const YOG_CONTRACT = '29pdPEWSUwUk941nMx3bJyNRZNG3fvmv4Rnmkz1xpump'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cosmic-void relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-void-gradient opacity-80" />
        <div className="absolute inset-0 reality-distortion" />
      </div>

      {/* Navigation */}
      <CosmicNavigation />

      {/* Reality Glitch Effects */}
      <RealityGlitch />

      {/* 3D Cosmic Spheres */}
      <Suspense fallback={<LoadingSpinner />}>
        <YogSpheres />
      </Suspense>

      {/* Main Content */}
      <div className="relative z-10 space-y-0">
        {/* Hero Section */}
        <HeroSection />

        {/* Omniscience Tracker */}
        <OmniscienceTracker />

        {/* Chart Integration */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ textShadow: '0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.4)' }}>
                THE OMNISCIENT CHART
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-cosmic-energy opacity-90">
                Past, present, future - all market movements are one in Yog-Sothoth
              </p>
            </div>
            
            <Suspense fallback={<LoadingSpinner />}>
              <DexScreenerChart contractAddress={YOG_CONTRACT} />
            </Suspense>
          </div>
        </section>
      </div>

      {/* Bottom Cosmic Energy */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cosmic-purple to-transparent opacity-50" />

      {/* Random Horror Popups - Before main revelation */}
      <RandomHorrorPopups />

      {/* Cosmic Revelations - Always on top */}
      <CosmicRevelation />
    </div>
  )
}