import React, { useContext } from 'react'
import { AuthContext } from "../../Context/authContext";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaUserCircle } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md';

function Footer() {
    const { role } = useContext(AuthContext)

    if (!role)
        return (
            <footer className='grid  md:grid-cols-2 lg:grid-cols-3 bg-[#b1c7f8] dark:bg-[#27344e] pt-6 divide-y-2 md:divide-y-0'>

                <section className='flex flex-col items-center justify-center gap-2 py-5'>
                    <h3 className='font-michroma font-bold dark:text-white'> Contact </h3>
                    <div className='flex flex-col justify-center items-center px-3 gap-2'>
                        <input type="text" className='relative-input' placeholder='Enter Message here...' />
                        <button className='button-1'> Send </button>
                    </div>

                    <div className='grid grid-cols-1 gap-2 px-3 '>
                        <div className='flex items-center justify-center md:justify-start gap-2'>
                            <FaEnvelope className='text-xl text-yellow-200' />
                            <a href="mailto:ajaykumartp10@gmail.com" className='font-poppins text-sm font-semibold dark:text-white'> ajaykumartp10@gmail.com </a>
                        </div>

                        <div className='flex items-center justify-center md:justify-start gap-2'>
                            <FaPhone className='text-xl text-blue-700' />
                            <p className='font-poppins font-semibold text-sm dark:text-white'> +91-8289938749 </p>
                        </div>
                        <div className='flex items-center justify-center md:justify-start gap-2'>
                            <MdLocationPin className='text-2xl text-red-400' />
                            <p className='font-poppins font-semibold text-sm dark:text-white'> North Paravur, Eranakulam, Kerala </p>
                        </div>
                    </div>
                </section>

                <section className='flex flex-col items-center justify-center gap-2 py-5 md:border-l-2 md:border-r-2'>
                    <h3 className='font-michroma font-bold dark:text-white'> Quick Links </h3>
                    <div className='flex flex-col gap-2 text-sm font-poppins text-left font-semibold dark:text-white'>
                        <a href="/"> ▷ Home </a>
                        <a href="#"> ▷ About </a>
                        <a href="#"> ▷ Contact </a>
                        <a href="/signIn"> ▷ SignIn </a>
                    </div>
                </section>

                <section className='md:col-span-3 lg:col-span-1 flex flex-col items-center justify-center gap-2 py-5'>
                    <h3 className='font-michroma font-bold dark:text-white'> Social Media Handles </h3>
                    <div className='flex gap-3 text-3xl'>
                        <FaInstagram className='text-pink-700' />
                        <FaGithub className='text-black' />
                        <FaLinkedin className='text-sky-700' />
                        <FaUserCircle className='text-slate-700 dark:text-white' />
                    </div>
                </section>

                <section className='md:col-span-3 bg-[#100b1c] text-center font-poppins text-white text-lg p-2 h-20'>
                    © {new Date().getFullYear()}  All rights Reserved.
                </section>
            </footer>
        )

    return (
        <footer className='w-full bg-[#100b1c] text-center font-poppins text-white text-lg p-2 h-20'>
            © {new Date().getFullYear()}  All rights Reserved.
        </footer>
    )
}

export default Footer