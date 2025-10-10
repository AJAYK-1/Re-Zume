import React, { useContext, useState } from 'react'
import { ThemeContext } from '../Contexts/themeContext';
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

function Navbar() {
    const [sideBar, setSideBar] = useState(false)
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <nav className='flex justify-between p-5 bg-gradient-to-r from-[#4c3386] to-[#8559ed]'>
            <section>
                <a className='text-xl text-white font-michroma font-extrabold' href='/'>
                    <span className='text-blue-300 text-2xl'>R</span>e-<span className='text-blue-300 font-extrabold text-2xl'>Z</span>ume
                </a>
            </section>

            <div className='md:hidden flex space-x-4 hover:cursor-pointer'>
                {theme === 'light' ?
                    <FaMoon size={25} onClick={toggleTheme} color='#aae7f7' className='drop-shadow-lg drop-shadow-sky-300' /> :
                    <FaSun size={25} onClick={toggleTheme} color='#fafc8c' className='drop-shadow-md drop-shadow-amber-200' />
                }
                {!sideBar &&
                    <FaBars size={27} onClick={() => setSideBar(true)} color='white' />
                }
            </div>
            {sideBar &&
                <aside className='md:hidden absolute right-0 top-0 h-full w-2/3 z-50 bg-gradient-to-bl from-[#140c26] to-[#6341b3] from-20%'>
                    <FaTimes size={30} onClick={() => setSideBar(false)} color='white' className='ml-auto mr-5 mt-5' />
                    <section className='flex flex-col mt-8 ml-6 space-y-5'>
                        <a href="#" className='nav-links text-lg'> Option1 </a>
                        <a href="#" className='nav-links text-lg'> Option2 </a>
                        <a href="#" className='nav-links text-lg'> Option3 </a>
                        <a href="/signIn" className='nav-links text-lg'> SignIn </a>
                    </section>
                </aside>
            }

            <section className=' hidden md:flex space-x-5'>
                <a href="#" className='nav-links'> Option1 </a>
                <a href="#" className='nav-links'> Option2 </a>
                <a href="#" className='nav-links'> Option3 </a>
                <a href="/signIn" className='nav-links'> SignIn </a>
                {theme === 'light' ?
                    <FaMoon size={25} onClick={toggleTheme} color='#aae7f7' className='drop-shadow-lg drop-shadow-sky-300 hover:cursor-pointer' /> :
                    <FaSun size={25} onClick={toggleTheme} color='#fafc8c' className='drop-shadow-md drop-shadow-amber-200 hover:cursor-pointer' />
                }
            </section>

        </nav>
    )
}

export default Navbar