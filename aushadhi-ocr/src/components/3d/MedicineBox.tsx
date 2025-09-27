'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export function MedicineBox() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <group>
      {/* Main box */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 3, 1]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      
      {/* Box top */}
      <mesh position={[0, 1.6, 0]}>
        <boxGeometry args={[2.1, 0.2, 1.1]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
      
      {/* Label */}
      <mesh position={[0, 0.5, 0.51]}>
        <planeGeometry args={[1.5, 1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Text on label */}
      <mesh position={[0, 0.5, 0.52]}>
        <planeGeometry args={[1.2, 0.3]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      
      {/* Cross symbol */}
      <group position={[0, 0.2, 0.53]}>
        <mesh>
          <boxGeometry args={[0.1, 0.4, 0.01]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>
        <mesh>
          <boxGeometry args={[0.4, 0.1, 0.01]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>
      </group>
    </group>
  )
}