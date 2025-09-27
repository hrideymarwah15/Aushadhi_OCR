'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Upload, CheckCircle, XCircle, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DemoSection() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<{
    isAuthentic: boolean
    confidence: number
    matchedMedicine: string
  } | null>(null)

  const handleDemoUpload = async () => {
    setIsProcessing(true)
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Mock result
    setResult({
      isAuthentic: Math.random() > 0.5,
      confidence: Math.floor(Math.random() * 30) + 70,
      matchedMedicine: 'Paracetamol 500mg'
    })
    
    setIsProcessing(false)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Try It Yourself
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload a medicine photo to see our AI in action. This is a demo with sample data.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {/* Upload Area */}
            <div className="text-center mb-8">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 hover:border-blue-500 transition-colors">
                <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Upload Medicine Photo
                </h3>
                <p className="text-gray-500 mb-6">
                  Take a clear photo of the medicine packaging or upload an image
                </p>
                
                <Button
                  onClick={handleDemoUpload}
                  disabled={isProcessing}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isProcessing ? 'Processing...' : 'Try Demo Upload'}
                </Button>
              </div>
            </div>

            {/* Processing Animation */}
            {isProcessing && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="inline-flex items-center space-x-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <span className="text-lg text-gray-600">Analyzing medicine label...</span>
                </div>
                
                <div className="mt-6 space-y-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-2 bg-blue-200 rounded-full"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </motion.div>
                  <p className="text-sm text-gray-500">OCR Processing → Database Matching → Verification</p>
                </div>
              </motion.div>
            )}

            {/* Results */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <div className={`p-6 rounded-xl border-2 ${
                  result.isAuthentic 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-red-200 bg-red-50'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {result.isAuthentic ? (
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      ) : (
                        <XCircle className="h-8 w-8 text-red-600" />
                      )}
                      <h3 className={`text-2xl font-bold ${
                        result.isAuthentic ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {result.isAuthentic ? 'Authentic Medicine' : 'Suspicious Medicine'}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Confidence</p>
                      <p className={`text-2xl font-bold ${
                        result.confidence > 85 ? 'text-green-600' : 
                        result.confidence > 70 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {result.confidence}%
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Matched Medicine:</p>
                      <p className="text-lg text-gray-900">{result.matchedMedicine}</p>
                    </div>
                    
                    {!result.isAuthentic && (
                      <div className="flex items-start space-x-2 p-3 bg-red-100 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-red-800">Warning</p>
                          <p className="text-sm text-red-700">
                            This medicine may be counterfeit or a look-alike. Please verify with a trusted pharmacist.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Comparison Demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Real vs Counterfeit Comparison
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                    <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Authentic</h4>
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <div className="text-sm text-gray-600">Brand: Paracetamol</div>
                      <div className="text-sm text-gray-600">Manufacturer: ABC Pharma</div>
                      <div className="text-sm text-gray-600">Batch: ABC123</div>
                    </div>
                    <p className="text-sm text-green-700">✓ Verified in database</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                    <XCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-red-800 mb-2">Counterfeit</h4>
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <div className="text-sm text-gray-600">Brand: Paracetamal</div>
                      <div className="text-sm text-gray-600">Manufacturer: XYZ Corp</div>
                      <div className="text-sm text-gray-600">Batch: XYZ999</div>
                    </div>
                    <p className="text-sm text-red-700">⚠ Spelling variation detected</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}