import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ParticleBackground from '../components/ParticleBackground'

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default Home