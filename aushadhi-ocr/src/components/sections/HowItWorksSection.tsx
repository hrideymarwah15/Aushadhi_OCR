'use client'

import { motion } from 'framer-motion'
import { Upload, Search, AlertTriangle, CheckCircle } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Upload Photo',
    description: 'Take a photo or upload an image of the medicine packaging',
    icon: Upload,
    color: 'blue',
  },
  {
    id: 2,
    title: 'OCR Processing',
    description: 'AI extracts text and analyzes the medicine label',
    icon: Search,
    color: 'green',
  },
  {
    id: 3,
    title: 'Verification',
    description: 'Compare against trusted database and flag suspicious cases',
    icon: AlertTriangle,
    color: 'red',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered system uses advanced OCR and similarity detection to identify 
            counterfeit medicines in just three simple steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const colorClasses = {
              blue: 'bg-blue-100 text-blue-600',
              green: 'bg-green-100 text-green-600',
              red: 'bg-red-100 text-red-600',
            }

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200 -z-10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                    />
                  </div>
                )}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10"
                >
                  <div className={`w-20 h-20 rounded-full ${colorClasses[step.color as keyof typeof colorClasses]} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <Icon className="h-10 w-10" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Step {step.id}
                  </h3>
                  
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {step.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Demo visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Input */}
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Upload className="h-12 w-12 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600">Medicine Photo</p>
            </div>

            {/* Arrow */}
            <div className="text-center">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl text-gray-400"
              >
                →
              </motion.div>
            </div>

            {/* Processing */}
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-green-600" />
              </div>
              <p className="text-sm text-gray-600">AI Analysis</p>
            </div>

            {/* Arrow */}
            <div className="text-center">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="text-2xl text-gray-400"
              >
                →
              </motion.div>
            </div>

            {/* Output */}
            <div className="text-center">
              <div className="w-24 h-24 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-12 w-12 text-red-600" />
              </div>
              <p className="text-sm text-gray-600">Verification Result</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}