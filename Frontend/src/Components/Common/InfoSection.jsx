import React from 'react'
import CouterUp from '../Constants/CouterUp'

function InfoSection() {
  return (
    <>
      <section className='background-2 px-7 flex justify-center py-10'>
        <section className='px-3 py-10 md:p-10 bg-white rounded-xl space-y-8 shadow-2xl dark:bg-[#272f42] dark:shadow-[0_0_5px_rgba(100,50,255,0.4)] md:max-w-[80%]'>
          <h1 className='font-michroma font-bold dark:text-white md:text-2xl text-center'> Why ATS Friendly Resumes Matters... </h1>
          <h2 className='font-poppins font-semibold text-slate-500 dark:text-slate-300 md:text-xl text-justify px-5'> Most resumes are filtered out by ATS before reaching human eyes. An ATS-optimized resume ensures your skills don’t get lost in the system. </h2>
          <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 dark:text-white text-slate-600'>
            <div className='smallbox'>
              <h1 className='font-michroma font-extrabold'> <CouterUp target={95} />% </h1>
              <h2 className='font-poppins font-semibold'> Companies uses ATS </h2>
            </div>
            <div className='smallbox'>
              <h1 className='font-michroma font-extrabold'> <CouterUp target={75} />% </h1>
              <h2 className='font-poppins font-semibold'> Resumes filtered out </h2>
            </div>
            <div className='smallbox'>
              <h1 className='font-michroma font-extrabold'> <CouterUp target={300} />% </h1>
              <h2 className='font-poppins font-semibold'> Higher interview rate </h2>
            </div>
            <div className='smallbox'>
              <h1 className='font-michroma font-extrabold'> <CouterUp target={6} /> Sec </h1>
              <h2 className='font-poppins font-semibold'> Average review time </h2>
            </div>
          </section>
        </section>
      </section>
    </>
  )
}

export default InfoSection