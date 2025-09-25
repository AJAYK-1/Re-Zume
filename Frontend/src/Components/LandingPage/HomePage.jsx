import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function HomePage() {
  return (
    <>
      <Navbar />

      <body>
        <div className='bg-gray-100'>
          <h1> Hero Header </h1>
          <h2> Tag Line </h2>
          <button> Build Resume </button>
        </div>
      </body>

      <Footer />
    </>
  )
}

export default HomePage