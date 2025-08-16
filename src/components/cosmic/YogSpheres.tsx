'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, MeshProps } from '@react-three/fiber'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { useCosmic } from './CosmicProvider'

interface OmniscientSphereProps {
  position: [number, number, number]
  scale: number
  color: string
  distort: number
  speed: number
}

function OmniscientSphere({ position, scale, color, distort, speed }: OmniscientSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * speed) * 0.5
      
      // Simple vertex displacement for distortion effect
      const geometry = meshRef.current.geometry as THREE.SphereGeometry
      if (geometry && geometry.attributes.position) {
        const time = state.clock.elapsedTime
        const positions = geometry.attributes.position
        for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i)
          const y = positions.getY(i)
          const z = positions.getZ(i)
          
          const noise = Math.sin(time * 2 + x * 5) * Math.sin(time * 2 + y * 5) * Math.sin(time * 2 + z * 5)
          const displacement = noise * distort * 0.1
          
          positions.setXYZ(i, x + displacement, y + displacement, z + displacement)
        }
        positions.needsUpdate = true
      }
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        roughness={0.4}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.3}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

function CosmicScene() {
  const { state } = useCosmic()
  
  const spheres = useMemo(() => {
    const sphereCount = Math.min(3 + Math.floor(state.omniscienceLevel / 20), 8)
    const sphereData = []
    
    for (let i = 0; i < sphereCount; i++) {
      sphereData.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 8
        ] as [number, number, number],
        scale: 0.5 + Math.random() * 1.5,
        color: ['#8b5cf6', '#dc2626', '#f59e0b', '#4c1d95'][Math.floor(Math.random() * 4)],
        distort: 0.2 + (state.realityDistortion / 100) * 0.5,
        speed: 0.5 + Math.random() * 0.5
      })
    }
    
    return sphereData
  }, [state.omniscienceLevel, state.realityDistortion])

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      
      {/* Point lights */}
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#dc2626" />
      
      {/* Omniscient spheres */}
      {spheres.map((sphere, index) => (
        <OmniscientSphere
          key={`sphere-${index}`}
          position={sphere.position}
          scale={sphere.scale}
          color={sphere.color}
          distort={sphere.distort}
          speed={sphere.speed}
        />
      ))}
      
      {/* Central Yog-Sothoth manifestation */}
      {state.awakening && (
        <OmniscientSphere
          position={[0, 0, 0]}
          scale={2 + (state.omniscienceLevel / 100) * 2}
          color="#8b5cf6"
          distort={0.8 + (state.madnessLevel / 100) * 0.5}
          speed={0.2}
        />
      )}
    </>
  )
}

export function YogSpheres() {
  const { state } = useCosmic()
  
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: state.omniscienceLevel > 10 ? 0.6 : 0.3 }}
      transition={{ duration: 2 }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <CosmicScene />
      </Canvas>
      
      {/* Overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-void via-transparent to-cosmic-deep opacity-50" />
      
      {state.awakening && (
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-yog-accent/20 via-transparent to-transparent"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      )}
    </motion.div>
  )
}