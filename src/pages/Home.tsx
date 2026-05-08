import HeroSection from '../components/HeroSection'
import FeaturedProperties from '../components/FeaturedProperties'
import HowItWorks from '../components/HowItWorks'
import TestimonialsSection from '../components/TestimonialsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <HowItWorks />
      <TestimonialsSection />   {/* 👈 ajout */}
    </>
  )
}