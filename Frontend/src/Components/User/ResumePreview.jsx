import React from 'react'
import ResumeGeneratorClassic from '../Utilities/ResumeGenerator_Classic'
import { useLocation, useNavigate } from 'react-router-dom'
import { RiArrowGoBackFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';

function ResumePreview() {
    const location = useLocation()
    const { resume } = location.state || null
    const navigate = useNavigate()

    return (
        <>
            <nav className='flex w-full items-center justify-evenly p-3 bg-slate-900'>
                <button onClick={() => navigate('/user-home')} className='button-2'>
                    <RiArrowGoBackFill /> Go Back
                </button>
                <section className='flex items-center gap-4'>
                    <button className='button-2'>
                        <FaRegEdit /> Edit
                    </button>
                    <button className='button-2'>
                        <RiDeleteBin2Line /> Delete
                    </button>
                </section>
            </nav>
            <main className='bg-slate-900 w-full h-full p-2 flex justify-center'>
                <ResumeGeneratorClassic resumeData={resume} box={false} />
            </main>

        </>
    )
}

export default ResumePreview