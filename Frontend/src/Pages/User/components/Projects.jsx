import React, { useState } from 'react'
import { useResumeData } from '../../../Context/resumeContext'
import { FaChevronRight } from 'react-icons/fa'

const Projects = () => {
    const { resumeData, setResumeData, step, setStep } = useResumeData()
    const [project, setProject] = useState(resumeData.project || [{
        title: '', details: '', link: ''
    }])

    const AddNewRow = (e) => setProject([...project, { title: '', details: '', link: '' }])

    const handleChange = (e, index) => {
        const { name, value } = e.target
        const data = [...project]
        data[index][name] = value
        setProject(data)
    }

    return (
        <div className='py-3' >
            <h2 className='sub-heading' > Projects </h2>

            <form>
                {project.map((pro, index) =>
                    <div key={index}>
                        <input type="text"
                            name='title'
                            value={pro.title}
                            className='resume-input'
                            onChange={() => handleChange(e, index)}
                            placeholder='Title...' />

                        <textarea type="text"
                            value={pro.details}
                            name='details'
                            className='resume-input'
                            onChange={() => handleChange(e, index)}
                            placeholder='Description of project...' />

                        <input type="text"
                            value={pro.link}
                            name='link'
                            className='resume-input'
                            onChange={() => handleChange(e, index)}
                            placeholder='Link...' />
                    </div>
                )}
                <div className='flex justify-center items-center mt-5'>
                    <button onClick={AddNewRow} className='button-1 max-w-50'> + Add Experience </button>
                </div>
                <button type='submit' className='button-3 absolute right-2 top-10' > <FaChevronRight /> </button>
            </form>
        </div>
    )
}

export default Projects