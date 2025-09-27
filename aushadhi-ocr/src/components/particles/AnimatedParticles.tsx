'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
  id: string
  left: string
  top: string
  duration: number
  delay: number
}

export default function AnimatedParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Only generate particles on the client side
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: `particle-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  if (particles.length === 0) {
    return null
  }

  return (
    <div className="absolute inset-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-200 rounded-full"
          style={{ left: particle.left, top: particle.top }}
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}