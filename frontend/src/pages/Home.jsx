import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ParticleBackground from '../components/ParticleBackground'
import AiTools from '../components/AiTools'
import Testimonial from '../components/Testimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AiTools />
        <Testimonial />
        <Plan />
        <Footer />
      </div>
    </div>
  )
}

export default Home