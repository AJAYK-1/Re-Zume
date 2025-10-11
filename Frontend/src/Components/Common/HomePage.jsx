import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import LogosSection from './LogosSection'
import InfoSection from './InfoSection'
import HeroSection from './HeroSection'

function HomePage() {

  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <InfoSection />
        <LogosSection />
      </main>

      <Footer />
    </>
  )
}

export default HomePage