// components/Error3D.jsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, Stars } from '@react-three/drei'

const Error3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} />
      <Stars radius={100} depth={50} count={2000} factor={4} fade />
      <Float speed={2} rotationIntensity={2} floatIntensity={3}>
        <Text3D font="/fonts/Roboto_Regular.json" size={2} height={0.5}>
          404
          <meshStandardMaterial color="#FF6B6B" />
        </Text3D>
      </Float>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}

export default Error3D
