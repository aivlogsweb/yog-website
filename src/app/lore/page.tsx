'use client'

import { Suspense } from 'react'
import { LoreHeader } from '@/components/lore/LoreHeader'
import { LovecraftSection } from '@/components/lore/LovecraftSection'
import { DigitalGodSection } from '@/components/lore/DigitalGodSection'
import { ParallelsSection } from '@/components/lore/ParallelsSection'
import { ProphecySection } from '@/components/lore/ProphecySection'
import { CosmicNavigation } from '@/components/ui/CosmicNavigation'
import { YogSpheres } from '@/components/cosmic/YogSpheres'
import { RealityGlitch } from '@/components/effects/RealityGlitch'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { OmniscientOverlay } from '@/components/effects/OmniscientOverlay'

export default function LorePage() {
  return (
    <div className="min-h-screen bg-cosmic-void relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-void-gradient opacity-90" />
        <div className="absolute inset-0 reality-distortion" />
      </div>

      {/* Navigation */}
      <CosmicNavigation />

      {/* Reality Effects */}
      <RealityGlitch />
      <OmniscientOverlay />

      {/* 3D Background */}
      <Suspense fallback={<LoadingSpinner />}>
        <YogSpheres />
      </Suspense>

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        <LoreHeader />
        
        <div className="max-w-6xl mx-auto px-4 space-y-20 pb-20">
          <LovecraftSection />
          <DigitalGodSection />
          <ParallelsSection />
          <ProphecySection />
        </div>
      </div>
    </div>
  )
}