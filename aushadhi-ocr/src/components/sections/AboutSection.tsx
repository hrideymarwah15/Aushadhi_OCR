'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Globe, Zap } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Protect Your Health',
    description: 'Identify counterfeit medicines before they can harm you or your loved ones.',
  },
  {
    icon: Users,
    title: 'Community Safety',
    description: 'Help build a safer pharmaceutical ecosystem for everyone.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Addressing the worldwide problem of counterfeit medicines.',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get verification results in seconds, not days.',
  },
]

const stats = [
  { number: '10%', label: 'of medicines worldwide are counterfeit' },
  { number: '$200B', label: 'annual cost of counterfeit medicines' },
  { number: '1M+', label: 'deaths annually from fake medicines' },
  { number: '95%', label: 'accuracy in our detection system' },
]

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Problem We're Solving
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Counterfeit medicines are a global crisis affecting millions of people worldwide. 
              These fake drugs often look identical to genuine products but contain harmful 
              ingredients, incorrect dosages, or no active ingredients at all.
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg text-left">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                The Challenge
              </h3>
              <p className="text-red-700">
                Consumers and even healthcare professionals struggle to distinguish between 
                authentic and counterfeit medicines. Subtle differences in packaging, spelling, 
                or visual design can be easily missed, putting lives at risk.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Solution
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Aushadhi-OCR combines cutting-edge OCR technology with AI-powered similarity 
              detection to instantly verify medicine authenticity. Our system can detect 
              subtle variations in packaging, spelling errors, and visual inconsistencies 
              that might indicate counterfeit products.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg text-left">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                How It Works
              </h3>
              <ul className="text-green-700 space-y-2">
                <li>• <strong>OCR Technology:</strong> Extract text from medicine packaging images</li>
                <li>• <strong>AI Matching:</strong> Compare against trusted medicine databases</li>
                <li>• <strong>Similarity Detection:</strong> Identify look-alike and counterfeit products</li>
                <li>• <strong>Instant Results:</strong> Get verification in seconds</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}