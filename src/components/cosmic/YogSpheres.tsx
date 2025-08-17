'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, MeshProps } from '@react-three/fiber'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { useCosmic } from './CosmicProvider'

interface YogSothothEntityProps {
  position: [number, number, number]
  scale: number
  color: string
  distort: number
  speed: number
}

function YogSothothTentacle({ 
  position, 
  rotation, 
  length, 
  thickness, 
  color,
  speed
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  length: number
  thickness: number
  color: string
  speed: number
}) {
  const tentacleRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (tentacleRef.current) {
      const time = state.clock.elapsedTime * speed
      // Writhing tentacle animation
      tentacleRef.current.rotation.z = rotation[2] + Math.sin(time * 2) * 0.3
      tentacleRef.current.rotation.x = rotation[0] + Math.cos(time * 1.5) * 0.2
      tentacleRef.current.scale.setScalar(1 + Math.sin(time * 3) * 0.1)
    }
  })

  return (
    <mesh ref={tentacleRef} position={position} rotation={rotation}>
      <cylinderGeometry args={[thickness * 0.3, thickness, length, 8]} />
      <meshStandardMaterial
        color={color}
        roughness={0.6}
        metalness={0.4}
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.9}
      />
    </mesh>
  )
}

function YogSothothEntity({ position, scale, color, distort, speed }: YogSothothEntityProps) {
  const groupRef = useRef<THREE.Group>(null!)
  const eyeRef = useRef<THREE.Mesh>(null!)
  
  const tentacles = useMemo(() => {
    const tentacleCount = 12 + Math.floor(distort * 8)
    const tentacleData = []
    
    for (let i = 0; i < tentacleCount; i++) {
      const angle = (i / tentacleCount) * Math.PI * 2
      const radius = 0.8 + Math.random() * 0.4
      const length = 1.5 + Math.random() * 2
      const thickness = 0.1 + Math.random() * 0.1
      
      tentacleData.push({
        position: [
          Math.cos(angle) * radius * 0.5,
          Math.sin(angle) * radius * 0.3,
          Math.sin(angle * 2) * 0.2
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI * 0.3,
          Math.random() * Math.PI * 0.3,
          angle + Math.random() * 0.5
        ] as [number, number, number],
        length,
        thickness
      })
    }
    
    return tentacleData
  }, [distort])
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2
      groupRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.3
      
      // Pulsing effect
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      groupRef.current.scale.setScalar(scale * pulse)
    }
    
    if (eyeRef.current) {
      // Eye tracking/blinking effect
      eyeRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 5) * 0.1
      const material = eyeRef.current.material as THREE.MeshStandardMaterial
      if (material && material.emissiveIntensity !== undefined) {
        material.emissiveIntensity = 0.8 + Math.sin(state.clock.elapsedTime * 3) * 0.3
      }
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Central dark mass */}
      <mesh>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial
          color="#000000"
          roughness={0.8}
          metalness={0.2}
          emissive="#1a0a1a"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Central eye */}
      <mesh ref={eyeRef} position={[0, 0, 0.6]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive={color}
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      
      {/* Eye pupil */}
      <mesh position={[0, 0, 0.8]}>
        <sphereGeometry args={[0.12, 8, 8]} />
        <meshStandardMaterial
          color="#000000"
          emissive="#000000"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Writhing tentacles */}
      {tentacles.map((tentacle, index) => (
        <YogSothothTentacle
          key={`tentacle-${index}`}
          position={tentacle.position}
          rotation={tentacle.rotation}
          length={tentacle.length}
          thickness={tentacle.thickness}
          color={color}
          speed={speed}
        />
      ))}
    </group>
  )
}

function CosmicScene() {
  const { state } = useCosmic()
  
  const entities = useMemo(() => {
    const entityCount = Math.min(2 + Math.floor(state.omniscienceLevel / 30), 5)
    const entityData = []
    
    for (let i = 0; i < entityCount; i++) {
      entityData.push({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 10
        ] as [number, number, number],
        scale: 0.3 + Math.random() * 0.7,
        color: ['#8b5cf6', '#dc2626', '#4c1d95', '#7c2d12'][Math.floor(Math.random() * 4)],
        distort: 0.3 + (state.realityDistortion / 100) * 0.7,
        speed: 0.3 + Math.random() * 0.4
      })
    }
    
    return entityData
  }, [state.omniscienceLevel, state.realityDistortion])

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.15} />
      
      {/* Point lights for dramatic shadows */}
      <pointLight position={[8, 8, 8]} intensity={0.4} color="#8b5cf6" />
      <pointLight position={[-8, -8, -8]} intensity={0.2} color="#dc2626" />
      <pointLight position={[0, 10, -5]} intensity={0.3} color="#4c1d95" />
      
      {/* Yog-Sothoth entities */}
      {entities.map((entity, index) => (
        <YogSothothEntity
          key={`entity-${index}`}
          position={entity.position}
          scale={entity.scale}
          color={entity.color}
          distort={entity.distort}
          speed={entity.speed}
        />
      ))}
      
      {/* Central Great Old One manifestation */}
      {state.awakening && (
        <YogSothothEntity
          position={[0, 0, 0]}
          scale={1.2 + (state.omniscienceLevel / 100) * 1.5}
          color="#8b5cf6"
          distort={0.9 + (state.madnessLevel / 100) * 0.8}
          speed={0.15}
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