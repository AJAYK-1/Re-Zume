import React from 'react'

function HeroSection() {
  return (
    <>
      <section className='bg-[#ecf8fe] dark:bg-[#111827] min-h-80 px-3 pt-5 pb-15 space-y-10
          md:px-8 md:pt-8 md:space-y-10 md:min-h-80
          lg:min-h-110 lg:px-12 lg:pt-15 lg:space-y-10 '>
        <h1 className='text-black dark:text-white text-2xl font-michroma font-semibold pt-5 drop-shadow-lg drop-shadow-slate-400 md:text-3xl lg:text-4xl 2xl:text-5xl'> Re-Zume: Resumes That Get You Hired </h1>
        <h2 className='text-slate-700 dark:text-slate-300 text-lg font-poppins md:text-xl lg:text-2xl 2xl:text-3xl drop-shadow-sm drop-shadow-teal-50'> Outdated templates won’t get you hired. Build a resume that matters. </h2>
        <button className='neon-button p-2 font-poppins md:w-40 md:h-13 md:text-lg lg:w-50 lg:h-15 lg:text-xl mt-10 ml-5'> Build Resume </button>
      </section>
    </>
  )
}

export default HeroSection