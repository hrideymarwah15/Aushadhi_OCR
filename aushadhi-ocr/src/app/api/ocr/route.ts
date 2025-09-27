import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { supabase } from '@/lib/supabase'
import { calculateSimilarity } from '@/lib/utils'

// Mock medicine database - in production, this would come from Supabase
const mockMedicines = [
  { id: '1', brand_name: 'Paracetamol', generic_name: 'Acetaminophen', manufacturer: 'ABC Pharma' },
  { id: '2', brand_name: 'Ibuprofen', generic_name: 'Ibuprofen', manufacturer: 'XYZ Corp' },
  { id: '3', brand_name: 'Aspirin', generic_name: 'Acetylsalicylic Acid', manufacturer: 'DEF Ltd' },
  { id: '4', brand_name: 'Amoxicillin', generic_name: 'Amoxicillin', manufacturer: 'GHI Pharma' },
  { id: '5', brand_name: 'Metformin', generic_name: 'Metformin', manufacturer: 'JKL Corp' },
  // Counterfeit examples
  { id: '6', brand_name: 'Paracetamal', generic_name: 'Acetaminophen', manufacturer: 'Fake Corp' },
  { id: '7', brand_name: 'Ibuprofin', generic_name: 'Ibuprofen', manufacturer: 'Counterfeit Ltd' },
]

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('image') as File

    if (!file) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 })
    }

    // Mock OCR processing - in production, use actual OCR service
    const mockExtractedText = 'Paracetamol 500mg'
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Find matches using similarity calculation
    const matches = mockMedicines.map(medicine => ({
      ...medicine,
      similarity: Math.max(
        calculateSimilarity(mockExtractedText.toLowerCase(), medicine.brand_name.toLowerCase()),
        calculateSimilarity(mockExtractedText.toLowerCase(), medicine.generic_name.toLowerCase())
      )
    })).sort((a, b) => b.similarity - a.similarity)

    const bestMatch = matches[0]
    const isSuspicious = bestMatch.similarity < 0.8 || 
                        bestMatch.manufacturer.includes('Fake') || 
                        bestMatch.manufacturer.includes('Counterfeit')

    // Save scan result to database
    const { data: scanResult, error } = await supabase
      .from('scan_results')
      .insert({
        user_id: userId,
        extracted_text: mockExtractedText,
        matched_medicines: matches.slice(0, 3),
        confidence_score: Math.round(bestMatch.similarity * 100),
        is_suspicious: isSuspicious
      })
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      // Continue without saving to database for demo
    }

    return NextResponse.json({
      success: true,
      extractedText: mockExtractedText,
      matches: matches.slice(0, 3),
      bestMatch,
      isSuspicious,
      confidence: Math.round(bestMatch.similarity * 100),
      scanId: scanResult?.id
    })

  } catch (error) {
    console.error('OCR processing error:', error)
    return NextResponse.json(
      { error: 'Failed to process image' },
      { status: 500 }
    )
  }
}