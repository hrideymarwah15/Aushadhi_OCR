import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { DemoSection } from '@/components/sections/DemoSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        
        <section id="demo">
          <DemoSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  )
}