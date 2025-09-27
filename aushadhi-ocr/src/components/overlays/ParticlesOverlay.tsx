'use client'

import { type ReactElement, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: string
  style: {
    left: string
    top: string
  }
  animation: {
    duration: number
    delay: number
  }
}

export default function ParticlesOverlay(): ReactElement {
  const [particles, setParticles] = useState<Particle[]>([])
  
  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 30 }, (_, i) => ({
        id: `particle-${i}`,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        },
        animation: {
          duration: 3 + Math.random() * 2,
          delay: Math.random() * 2,
        },
      }))
    }

    setParticles(generateParticles())
  }, [])

  if (particles.length === 0) {
    return null
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-200 rounded-full"
          style={particle.style}
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.animation.duration,
            repeat: Infinity,
            delay: particle.animation.delay,
          }}
        />
      ))}
    </div>
  )
}