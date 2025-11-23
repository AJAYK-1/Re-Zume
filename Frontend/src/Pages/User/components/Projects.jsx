import React, { useState } from 'react'
import { useResumeData } from '../../../Context/resumeContext'

const Projects = () => {
    const { resumeData, setResumeData, step, setStep } = useResumeData()
    const [project, setProject] = useState([])
    
    return (
        <div className='py-3'>
            <h2 className='sub-heading'> Projects </h2>

            <form>
                <input type="text" placeholder='Title...' />
                <input type="text" placeholder='Description...' />
                <input type="text" placeholder='Link' />
            </form>
        </div>
    )
}

export default Projects