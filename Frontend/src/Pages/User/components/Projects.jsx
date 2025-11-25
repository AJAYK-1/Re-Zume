import React, { useState } from 'react'
import { useResumeData } from '../../../Context/resumeContext'
import { FaChevronRight } from 'react-icons/fa'

const Projects = () => {
    const { resumeData, setResumeData, step, setStep } = useResumeData()
    const [project, setProject] = useState(resumeData.project || [{
        title: '', details: '', link: ''
    }])

    const AddNewRow = () => setProject([...project, { title: '', details: '', link: '' }])

    const handleChange = (e, index) => {
        const { name, value } = e.target
        const data = [...project]
        data[index][name] = value
        setProject(data)
    }

    const submitProjects = async (e) => {
        try {
            e.preventDefault()
            setResumeData({ ...resumeData, project: project })
            setStep(step + 1)
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='py-3 mx-3' >
            <h2 className='sub-heading' > Projects </h2>

            <form onSubmit={submitProjects} className='pt-15 grid grid-cols-1' >
                <p className='definition'> Fill in the details of your most relevant projects that showcase your skills. </p>
                {project.map((pro, index) =>
                    <div key={index} className='p-3 space-y-3 shadow-xl rounded-2xl m-2' >
                        <input type="text"
                            name='title'
                            value={pro.title}
                            className='resume-input'
                            onChange={(e) => handleChange(e, index)}
                            placeholder='Title...' />

                        <input type="text"
                            value={pro.link}
                            name='link'
                            className='resume-input'
                            onChange={(e) => handleChange(e, index)}
                            placeholder='Link...' />

                        <textarea type="text"
                            value={pro.details}
                            name='details'
                            className='resume-textarea'
                            onChange={(e) => handleChange(e, index)}
                            placeholder='Description of project...' />
                    </div>
                )}
                <button type='submit' className='button-3 absolute right-2 top-10' > <FaChevronRight /> </button>
            </form>
            <div className='flex justify-center items-center mt-5'>
                <button onClick={AddNewRow} className='button-1 max-w-50'> + New Project </button>
            </div>
        </div>
    )
}

export default Projects