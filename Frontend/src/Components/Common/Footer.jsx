import React from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaUserCircle } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md';

function Footer() {
    return (
        <footer className='grid grid-rows-2 md:grid-cols-3 bg-[#b1c7f8] dark:bg-[#27344e] gap-5 pt-6'>

            <section className='flex flex-col items-center justify-center gap-2'>
                <h3 className='font-michroma font-bold text-xl md:text-lg dark:text-white'> Contact </h3>
                <div className='flex flex-col justify-center items-center px-3 gap-2'>
                    <input type="text" className='relative-input' placeholder='Enter Message here...' />
                    <button className='button-1'> Send </button>
                </div>
                <div className='grid grid-cols-1 gap-2 px-3'>
                    <div className='flex items-center justify-center md:justify-start gap-2'>
                        <FaEnvelope className='text-2xl text-yellow-200' />
                        <a href="mailto:ajaykumartp10@gmail.com" className='font-poppins font-semibold dark:text-white'> ajaykumartp10@gmail.com </a>
                    </div>
                    <div className='flex items-center justify-center md:justify-start gap-2'>
                        <FaPhone className='text-2xl text-blue-700 md:text-xl' />
                        <p className='font-poppins font-semibold dark:text-white'> +91-8289938749 </p>
                    </div>
                    <div className='flex items-center justify-center md:justify-start gap-2'>
                        <MdLocationPin className='text-4xl text-red-400' />
                        <p className='font-poppins font-semibold dark:text-white'> North Paravur, Eranakulam, Kerala </p>
                    </div>
                </div>
            </section>

            <section className='flex flex-col items-center justify-center gap-2 md:border-l-2 md:border-r-2'>
                <h3 className='text-xl font-michroma font-bold md:text-lg dark:text-white'> Quick Links </h3>
                <div className='flex flex-col gap-2 text-lg font-poppins text-left font-semibold dark:text-white'>
                    <a href="#"> ▷ page1 </a>
                    <a href="#"> ▷ page2 </a>
                    <a href="#"> ▷ page3 </a>
                    <a href="/signIn"> ▷ SignIn </a>
                </div>
            </section>

            <section className='flex flex-col items-center justify-center gap-2'>
                <h3 className='text-xl font-michroma font-bold md:text-lg dark:text-white'> Social Media Handles </h3>
                <div className='flex gap-3 text-3xl'>
                    <FaInstagram className='text-pink-700' />
                    <FaGithub className='text-black' />
                    <FaLinkedin className='text-sky-700' />
                    <FaUserCircle className='text-slate-700 dark:text-white' />
                </div>
            </section>

            <section className='md:col-span-3 bg-[#8559ed] text-center font-poppins text-white text-lg p-2 '>
                © {new Date().getFullYear()}  All rights Reserved.
            </section>
        </footer>
    )
}

export default Footer