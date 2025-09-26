import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function HomePage() {

  return (
    <>
      <Navbar />

      <div>
        <section className={`bg-[#ecf8fe] dark:bg-[#111827] min-h-80 pl-3 pt-5 space-y-6
          md:px-8 md:pt-8 md:space-y-10 md:min-h-150
          lg:min-h-120 lg:px-12 lg:pt-15 lg:space-y-10 `}>
          <h1 className={`text-black dark:text-white text-2xl font-michroma font-semibold pt-5 drop-shadow-lg drop-shadow-slate-400 md:text-3xl lg:text-5xl `}> Re-Zume: Resumes That Get You Hired </h1>
          <h2 className={`text-slate-700 dark:text-slate-300 text-lg font-poppins md:text-xl lg:text-3xl drop-shadow-sm drop-shadow-teal-50`}> Outdated templates won’t get you hired. Build a resume that matters. </h2>
          <button className='neon-button p-2 font-poppins md:w-40 md:h-13 md:text-lg lg:w-50 lg:h-15 lg:text-xl'> Build Resume </button>
        </section>

      </div>

      <Footer />
    </>
  )
}

export default HomePage