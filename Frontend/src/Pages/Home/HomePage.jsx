import React from 'react'
import Navbar from '../../Components/Layouts/Navbar'
import Footer from '../../Components/Layouts/Footer'
import LogosSection from './LogosSection'
import InfoSection from './InfoSection'
import HeroSection from './HeroSection'

function HomePage() {

  return (
    <>
      <Navbar />

      <main className='overflow-hidden'>
        <HeroSection />
        <InfoSection />
        <LogosSection />
      </main>

      <Footer />
    </>
  )
}

export default HomePage