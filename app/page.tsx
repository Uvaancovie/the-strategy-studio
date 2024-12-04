import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import BenefitsCarousel from '@/components/BenefitsCarousel'
import FAQSection from '@/components/FAQSection'
import ProcessSection from '@/components/ProcessSection'
import CallToAction from '@/components/CallToAction'


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BenefitsCarousel />
      <FAQSection />
      <ProcessSection/>
      <CallToAction/>
    </div>
  )
}

export default Home
