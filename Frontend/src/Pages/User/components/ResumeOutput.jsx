import React, { useState } from 'react'

const ResumeOutput = () => {
  const [resume, setResume] = useState({})

  return (
    <>
      <nav className='hidden md:flex w-full items-center justify-evenly p-3 bg-slate-900'>
        {/* <button onClick={() => setSelectedResume(null)} className='button-2'>
          <RiArrowGoBackFill /> Go Back
        </button> */}
        <section className='flex items-center gap-4'>
          <button className='button-2'>
            <FaRegEdit /> Edit
          </button>
          <button className='button-2'
            onClick={(e) => handleDeletion(e, selectedResume.id)}>
            <RiDeleteBin2Line /> Delete
          </button>
          <PDFDownloadButton resume={selectedResume} mini={false} btnText='Download' />
        </section>
      </nav>
      <nav className='flex w-full items-center justify-evenly p-3 bg-slate-900 md:hidden'>
        <button onClick={() => setSelectedResume(null)} className='button-2'>
          <RiArrowGoBackFill />
        </button>
        <section className='flex items-center gap-4'>
          <button className='button-2'>
            <FaRegEdit />
          </button>
          <button className='button-2'
            onClick={(e) => handleDeletion(e, selectedResume.id)}>
            <RiDeleteBin2Line />
          </button>
          <PDFDownloadButton resume={selectedResume} mini={false} />
        </section>
      </nav>
      <main className='bg-slate-900 min-h-screen overflow-hidden grid grid-cols-1'>
        <PDFViewer width={`100%`} height={`100%`}>
          <ResumePDF resumeData={selectedResume} />
        </PDFViewer>
      </main>
    </>
  )
}

export default ResumeOutput