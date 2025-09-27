'use client'

import { type ReactElement } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: string
  left: string
  top: string
  duration: number
  delay: number
}

export function AnimatedParticles(): ReactElement {
  if (typeof window === 'undefined') {
    return <div className="absolute inset-0" />
  }

  const particles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
    id: `particle-${i}`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 2,
  }))

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