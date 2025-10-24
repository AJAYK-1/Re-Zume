import React from 'react'
import ResumeGeneratorClassic from '../Utilities/ResumeGenerator_Classic'
import { useLocation, useNavigate } from 'react-router-dom'
import { RiArrowGoBackFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import ResumePDF from '../Utilities/ResumePDF';
import { PDFViewer } from '@react-pdf/renderer';

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
                    <button className='button-2'>
                        <FiDownload /> Download
                    </button>
                </section>
            </nav>
            <main className='bg-slate-900 min-h-screen overflow-hidden grid grid-cols-1'>
                <PDFViewer width={`100%`} height={`100%`}>
                    <ResumePDF resumeData={resume} />
                </PDFViewer>
            </main>

        </>
    )
}

export default ResumePreview