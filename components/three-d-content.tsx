"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei"
import { Suspense } from "react"

function Box() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#ff6b6b" />
    </mesh>
  )
}

function Sphere() {
  return (
    <mesh position={[4, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#4ecdc4" />
    </mesh>
  )
}

function Torus() {
  return (
    <mesh position={[-4, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
      <torusGeometry args={[1.5, 0.5, 16, 100]} />
      <meshStandardMaterial color="#45b7d1" />
    </mesh>
  )
}

export function ThreeDContent() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-background to-muted/20">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Box />
          <Sphere />
          <Torus />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  )
}
