import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [sideBar, setSideBar] = useState(false)

    return (
        <nav className='flex justify-between p-5 bg-gradient-to-r from-[#4c3386] to-[#8559ed]'>
            <section>
                <a className='font-bold text-xl text-white' href='/HomePage'>
                    <span className='text-blue-300 font-extrabold text-2xl'>R</span>e-<span className='text-blue-300 font-extrabold text-2xl'>Z</span>ume
                </a>
            </section>

            <div className='md:hidden'>
                {!sideBar &&
                    <FaBars size={27} onClick={() => setSideBar(true)} color='white' />
                }
            </div>
            {sideBar &&
                <div className='md:hidden absolute right-0 top-0 h-full w-2/3 bg-gradient-to-bl from-[#352360] to-[#6341b3] from-20%'>
                    <FaTimes size={30} onClick={() => setSideBar(false)} color='white' className='ml-auto mr-5 mt-5' />
                    <section className='flex flex-col mt-8 ml-6 space-y-5'>
                        <a href="#" className='font-medium text-lg text-white'> Option1 </a>
                        <a href="#" className='font-medium text-lg text-white'> Option2 </a>
                        <a href="#" className='font-medium text-lg text-white'> Option3 </a>
                        <a href="#" className='font-medium text-lg text-white'> Login </a>
                    </section>
                </div>
            }

            <section className=' hidden md:block gap-x-8 space-x-5'>
                <a href="#" className='font-medium text-white'> Option1 </a>
                <a href="#" className='font-medium text-white'> Option2 </a>
                <a href="#" className='font-medium text-white'> Option3 </a>
                <a href="#" className='font-medium text-white'> Login </a>
            </section>

        </nav>
    )
}

export default Navbar