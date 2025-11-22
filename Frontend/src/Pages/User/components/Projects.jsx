import React from 'react'
import { useResumeData } from '../../../Context/resumeContext'

const Projects = () => {
    const { resumeData, setResumeData, step, setStep } = useResumeData()

    return (
        <div className='py-3'>
            <h2 className='sub-heading'> Projects </h2>
            

        </div>
    )
}

export default Projects