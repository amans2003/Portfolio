import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Floating Geometric Shape
function FloatingShape({ position, color, size = 1, speed = 1, distort = 0.3 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[size, 0]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.4}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

// Glowing Orb
function GlowingOrb({ position, color, size = 0.3 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <Float speed={3} floatIntensity={1.5}>
      <group position={position}>
        {/* Core */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[size, 32, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.9} />
        </mesh>
        {/* Glow */}
        <mesh>
          <sphereGeometry args={[size * 1.8, 32, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.15} />
        </mesh>
      </group>
    </Float>
  )
}

// Wireframe Ring
function WireframeRing({ position, color, size = 2 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[size, 0.02, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} />
      </mesh>
    </Float>
  )
}

// Particle Field
function ParticleField() {
  const count = 300
  const pointsRef = useRef()

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40
    }
    return pos
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Mouse-following light
function MouseLight() {
  const lightRef = useRef()

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = state.mouse.x * 8
      lightRef.current.position.y = state.mouse.y * 8
    }
  })

  return (
    <pointLight
      ref={lightRef}
      color="#00fff5"
      intensity={30}
      distance={15}
    />
  )
}

// Main Scene Component
function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} color="#00fff5" intensity={15} />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={15} />
      <MouseLight />

      {/* Stars Background */}
      <Stars
        radius={80}
        depth={50}
        count={3000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Particle Field */}
      <ParticleField />

      {/* Floating Shapes */}
      <FloatingShape
        position={[-5, 3, -5]}
        color="#00fff5"
        size={1.2}
        speed={0.5}
        distort={0.4}
      />
      
      <FloatingShape
        position={[5, -2, -4]}
        color="#8b5cf6"
        size={1}
        speed={0.7}
        distort={0.3}
      />

      <FloatingShape
        position={[-4, -3, -6]}
        color="#ff00ff"
        size={0.8}
        speed={0.6}
        distort={0.5}
      />

      <FloatingShape
        position={[4, 4, -7]}
        color="#00fff5"
        size={0.9}
        speed={0.4}
        distort={0.35}
      />

      {/* Glowing Orbs */}
      <GlowingOrb position={[-6, 0, -8]} color="#00fff5" size={0.25} />
      <GlowingOrb position={[6, 2, -6]} color="#8b5cf6" size={0.3} />
      <GlowingOrb position={[0, -4, -10]} color="#ff00ff" size={0.2} />
      <GlowingOrb position={[-3, 4, -9]} color="#00fff5" size={0.15} />
      <GlowingOrb position={[4, -3, -7]} color="#8b5cf6" size={0.2} />

      {/* Wireframe Rings */}
      <WireframeRing position={[0, 0, -12]} color="#00fff5" size={3} />
      <WireframeRing position={[-8, 2, -15]} color="#8b5cf6" size={2} />
      <WireframeRing position={[7, -2, -14]} color="#ff00ff" size={1.5} />
    </Canvas>
  )
}

export default Scene