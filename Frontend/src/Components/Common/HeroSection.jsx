import React from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import heroAnimation from '../../assets/Animations/hero.lottie'
import { BsCheck2Circle } from 'react-icons/bs';
import { SiReaddotcv } from 'react-icons/si';
import { FaFileLines } from 'react-icons/fa6';

function HeroSection() {
  return (
    <>
      <section className='background-1 min-h-80 px-3 pt-5 pb-15 space-y-10
          md:px-8 md:pt-8 md:space-y-10 md:min-h-80
          lg:min-h-110 lg:px-30 lg:pt-15 lg:space-y-10 lg:pb-10'>
        <h1 className='main-heading'> Re-Zume: Resumes That Get You Hired </h1>

        <div className='lg:grid grid-cols-2 '>
          <div className='md:pt-10'>
            <p className='tag-line'> Outdated templates won’t get you hired. Build a resume that matters.
              Beat the Applicant Tracking System with our AI-powered resume checker, builder, and optimizer. Increase your chances of landing interviews by 300%. </p>

            <div className='flex items-center  gap-10 mt-10 '>
              <button className='neon-button md:w-50 md:h-13'>
                <FaFileLines className='text-2xl' /> Build New Resume </button>
              <button className='neon-button md:w-50 md:h-13'>
                <BsCheck2Circle className='text-2xl' /> Check My Resume </button>
            </div>
          </div>

          <div className='lg:inline-flex justify-end ' >
            <DotLottieReact
              src={heroAnimation}
              autoplay
              loop
              className='lg:h-100 lg:w-100  transform hover:scale-130 duration-300' />
          </div>
        </div>

      </section>
    </>
  )
}

export default HeroSection