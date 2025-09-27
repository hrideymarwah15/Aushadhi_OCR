'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

interface Particle {
  left: string
  top: string
  duration: number
  delay: number
}

// Fixed set of positions for SSR
const initialParticles: Particle[] = Array.from({ length: 50 }).map((_, i) => ({
  left: `${(i * 2) % 100}%`,
  top: `${(i * 3) % 100}%`,
  duration: 3,
  delay: 0
}))

const AnimatedBackground: React.FC = () => {
  // Start with fixed positions during SSR
  const [particles, setParticles] = React.useState<Particle[]>(initialParticles)
  const [hasAnimated, setHasAnimated] = React.useState(false)

  // Only randomize positions after hydration
  React.useEffect(() => {
    if (!hasAnimated) {
      const randomParticles = Array.from({ length: 50 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2
      }))
      // Use a single set timeout to ensure browser has time to paint initial state
      setTimeout(() => {
        setParticles(randomParticles)
        setHasAnimated(true)
      }, 100)
    }
  }, [hasAnimated])

  return (
    <div className="absolute inset-0">
      {particles.map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-200 rounded-full opacity-0"
          animate={{
            x: [0, 0], // Dummy animation to force Framer to handle this element
            left: particle.left,
            top: particle.top,
            opacity: hasAnimated ? [0.3, 0.8, 0.3] : 0
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            opacity: {
              delay: hasAnimated ? particle.delay : 0,
              repeat: hasAnimated ? Infinity : 0
            }
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground