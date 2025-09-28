import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function HomePage() {

  return (
    <>
      <Navbar />

      <main>
        <section className={`bg-[#ecf8fe] dark:bg-[#111827] min-h-80 pl-3 pt-5 space-y-6
          md:px-8 md:pt-8 md:space-y-10 md:min-h-80
          lg:min-h-110 lg:px-12 lg:pt-15 lg:space-y-10 `}>
          <h1 className={`text-black dark:text-white text-2xl font-michroma font-semibold pt-5 drop-shadow-lg drop-shadow-slate-400 md:text-3xl lg:text-5xl `}> Re-Zume: Resumes That Get You Hired </h1>
          <h2 className={`text-slate-700 dark:text-slate-300 text-lg font-poppins md:text-xl lg:text-3xl drop-shadow-sm drop-shadow-teal-50`}> Outdated templates won’t get you hired. Build a resume that matters. </h2>
          <button className='neon-button p-2 font-poppins md:w-40 md:h-13 md:text-lg lg:w-50 lg:h-15 lg:text-xl'> Build Resume </button>
        </section>

        <section className='p-4 bg-[#ecf8fe] dark:bg-[#111827] flex justify-center'>
          <section className='p-2 py-5 bg-white rounded-xl space-y-5 dark:bg-[#272f42] dark:shadow-[0_0_5px_rgba(100,50,255,0.4)] md:max-w-[80%]'>
            <h1 className='font-michroma font-bold dark:text-white md:text-2xl text-center'> Why ATS Friendly Resumes Matters... </h1>
            <h2 className='font-poppins font-semibold text-slate-500 dark:text-slate-300 md:text-xl text-justify px-5'> Most resumes are filtered out by ATS before reaching human eyes. An ATS-optimized resume ensures your skills don’t get lost in the system. </h2>
            <section className='flex flex-wrap justify-evenly space-x-5 space-y-8 dark:text-white text-slate-600'>
              <div className='smallbox'>
                <h1 className='font-michroma font-extrabold'> 95% </h1>
                <h2 className='font-poppins font-semibold'> Companies uses ATS </h2>
              </div>
              <div className='smallbox'>
                <h1 className='font-michroma font-extrabold'> 75% </h1>
                <h2 className='font-poppins font-semibold'> Resumes filtered out </h2>
              </div>
              <div className='smallbox'>
                <h1 className='font-michroma font-extrabold'> 300% </h1>
                <h2 className='font-poppins font-semibold'> Higher interview rate </h2>
              </div>
              <div className='smallbox'>
                <h1 className='font-michroma font-extrabold'> 6 Sec </h1>
                <h2 className='font-poppins font-semibold'> Average review time </h2>
              </div>
            </section>
          </section>
        </section>

        <section>
          <section>
            <h1> Get Hired at FAANG </h1>
          </section>
          <h1 className='animate-marquee inline-block'>
            Hello hello helloo
          </h1>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default HomePage