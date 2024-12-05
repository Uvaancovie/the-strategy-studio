import React from 'react'

import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import BenefitsCarousel from '@/components/BenefitsCarousel'
import FAQSection from '@/components/FAQSection'
import ProcessSection from '@/components/ProcessSection'
import CallToAction from '@/components/CallToAction'
import ContactSection from '@/components/ContactSection'

const Home = () => {
  return (
    <div>
      
      <HeroSection />
      <ServicesSection />
      <BenefitsCarousel />
      <FAQSection />
      <ProcessSection/>
      <ContactSection/>
      <CallToAction/>
    </div>
  )
}

export default Home
