'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Upload, ArrowRight, Star } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-1 bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-yellow-300 fill-current" />
              <Star className="h-4 w-4 text-yellow-300 fill-current" />
              <Star className="h-4 w-4 text-yellow-300 fill-current" />
              <Star className="h-4 w-4 text-yellow-300 fill-current" />
              <Star className="h-4 w-4 text-yellow-300 fill-current" />
              <span className="text-white text-sm font-medium ml-2">Trusted by thousands</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Protect Your Health?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of users who are already using Aushadhi-OCR to verify their medicines. 
            Start protecting yourself and your family today.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto"
            >
              <Upload className="mr-2 h-5 w-5" />
              Try Prototype Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 h-auto"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <p className="text-blue-100">Medicines Verified</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <p className="text-blue-100">Accuracy Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <p className="text-blue-100">Available Support</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}