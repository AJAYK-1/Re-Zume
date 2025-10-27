import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/themeContext';
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/authContext';

function Navbar() {
    const [sideBar, setSideBar] = useState(false)
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { role, setRole } = useContext(AuthContext)

    const navigate = useNavigate()
    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('role')
        localStorage.removeItem('token')
        setRole(null)
        setTimeout(() => navigate('/signIn'), 1000);
    }

    return (
        <nav className='flex justify-between p-5 md:py-5 md:px-20 bg-gradient-to-r from-[#4c3386] to-[#8559ed]'>
            <section>
                <a className='text-xl text-white font-michroma font-extrabold' href={role === 'User' ? '/user-home' : '/'}>
                    <span className='text-blue-300 text-2xl'>R</span>e-<span className='text-blue-300 font-extrabold text-2xl'>Z</span>ume
                </a>
            </section>

            <div className='md:hidden flex space-x-4 hover:cursor-pointer'>
                {theme === 'light' ?
                    <FaMoon size={25} onClick={toggleTheme} color='#aae7f7' className='moon' /> :
                    <FaSun size={25} onClick={toggleTheme} color='#fafc8c' className='sun' />
                }
                {!sideBar &&
                    <FaBars size={27} onClick={() => setSideBar(true)} color='white' />
                }
            </div>
            {sideBar &&
                <aside className='md:hidden absolute right-0 top-0 h-full w-2/3 z-50 bg-gradient-to-bl from-[#140c26] to-[#6341b3] from-20%'>
                    <FaTimes size={30} onClick={() => setSideBar(false)} color='white' className='ml-auto mr-5 mt-5' />
                    <section className='flex flex-col mt-8 ml-6 space-y-5'>
                        {role === 'User' ? <>
                            <a href="/user-home" className='nav-links text-lg'> Home </a>
                            <a href="/build-resume" className='nav-links text-lg'> Resume Builder </a>
                            <a href="/ats-checker" className='nav-links text-lg'> ATS Checker </a>
                            <a href="/resume-modifier" className='nav-links text-lg'> Resume Modifier </a>
                            <button onClick={handleLogout} className='w-30 bg-red-500 rounded-xl p-1 font-poppins font-bold text-white'> Logout </button>
                        </> : role === 'Admin' ? <>
                            <a href="/dashboard" className='nav-links text-lg'> Dashboard </a>
                            <a href="/user-management" className='nav-links text-lg'> Users </a>
                            <a href="/feedback-management" className='nav-links text-lg'> Feedbacks </a>
                            <button onClick={handleLogout} className='w-30 bg-red-500 rounded-xl p-1 font-poppins font-bold text-white'> Logout </button>
                        </> : <>
                            <a href="/build-resume" className='nav-links text-lg'> Resume Builder </a>
                            <a href="#" className='nav-links text-lg'> About </a>
                            <a href="#" className='nav-links text-lg'> Contact </a>
                            <a href="/signIn" className='nav-links text-lg'> SignIn </a>
                        </>}
                    </section>
                </aside>
            }
            <section className='hidden md:flex space-x-5 items-center'>
                {role === 'User' ? <>
                    <a href="/user-home" className='nav-links'> Home </a>
                    <a href="/build-resume" className='nav-links'> Resume Builder </a>
                    <a href="/ats-checker" className='nav-links'> ATS Checker </a>
                    <a href="/resume-modifier" className='nav-links'> Resume Modifier </a>
                    <button onClick={handleLogout} className='logout'> Logout </button>
                </> : role === 'Admin' ? <>
                    <a href="/dashboard" className='nav-links'> Dashboard </a>
                    <a href="/user-management" className='nav-links'> Users </a>
                    <a href="/feedback-management" className='nav-links'> Feedbacks </a>
                    <button onClick={handleLogout} className='logout'> Logout </button>
                </> : <>
                    <a href="/build-resume" className='nav-links'> Resume Builder </a>
                    <a href="#" className='nav-links'> About </a>
                    <a href="#" className='nav-links'> Contact </a>
                    <a href="/signIn" className='nav-links'> SignIn </a>
                </>
                }
                {theme === 'light' ?
                    <FaMoon size={25} onClick={toggleTheme} color='#aae7f7' className='moon' /> :
                    <FaSun size={25} onClick={toggleTheme} color='#fafc8c' className='sun' />
                }
            </section>

        </nav>
    )
}

export default Navbar