# Aushadhi-OCR - AI-Powered Medicine Verification

A 3D animated website for Aushadhi-OCR that helps users verify the authenticity of medicines using AI-powered OCR technology.

## Features

- 🎨 **3D Animated Landing Page** - Interactive 3D medicine box with smooth animations
- 🔐 **Authentication** - Clerk-powered user authentication
- 🗄️ **Database Integration** - Supabase for storing medicine data and scan results
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🎯 **Interactive Demo** - Upload simulation with mock OCR results
- ⚡ **Real-time Processing** - Simulated OCR processing with progress indicators

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion
- **Styling**: TailwindCSS, Shadcn/ui
- **Authentication**: Clerk
- **Database**: Supabase
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Clerk account
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aushadhi-ocr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

4. **Set up Supabase database**
   - Create a new Supabase project
   - Run the SQL schema from `supabase-schema.sql` in your Supabase SQL editor
   - This will create the necessary tables and sample data

5. **Set up Clerk authentication**
   - Create a Clerk account and project
   - Configure your authentication settings
   - Add your domain to the allowed origins

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── ocr/           # OCR processing endpoint
│   │   └── medicines/     # Medicine data endpoints
│   ├── sign-in/           # Authentication pages
│   ├── sign-up/
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── 3d/               # 3D components
│   │   ├── MedicineBox.tsx
│   │   └── Scene.tsx
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/         # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── DemoSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── CTASection.tsx
│   └── ui/               # UI components
│       └── button.tsx
└── lib/                  # Utility functions
    ├── supabase.ts       # Supabase client
    └── utils.ts          # Helper functions
```

## Key Features Explained

### 3D Medicine Box Animation
- Built with Three.js and React Three Fiber
- Rotating medicine box with realistic materials
- Interactive controls for user engagement

### OCR Simulation
- Mock OCR processing with realistic timing
- Similarity matching algorithm for medicine verification
- Confidence scoring and suspicious medicine detection

### Authentication Flow
- Clerk-powered authentication
- Protected API routes
- User-specific scan history

### Database Schema
- `medicines` table: Stores medicine information
- `scan_results` table: Stores OCR scan results
- `user_scans` table: Tracks user activity

## API Endpoints

### POST /api/ocr
Processes medicine images and returns verification results.

**Request:**
```javascript
const formData = new FormData();
formData.append('image', file);

const response = await fetch('/api/ocr', {
  method: 'POST',
  body: formData
});
```

**Response:**
```javascript
{
  success: true,
  extractedText: "Paracetamol 500mg",
  matches: [...],
  bestMatch: {...},
  isSuspicious: false,
  confidence: 95,
  scanId: "uuid"
}
```

### GET /api/medicines
Retrieves all medicines from the database.

### POST /api/medicines
Creates a new medicine entry (admin only).

## Deployment

### Vercel Deployment

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Set environment variables**
   Add all your environment variables in the Vercel dashboard

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Environment Variables for Production

Make sure to set these in your deployment platform:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@aushadhi-ocr.com or join our Discord community.

## Roadmap

- [ ] Real OCR integration (Tesseract/EasyOCR)
- [ ] Multi-language support
- [ ] Visual similarity detection
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Integration with pharmaceutical databases