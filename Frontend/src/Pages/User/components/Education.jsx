import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { useResumeData } from '../../../Context/resumeContext'

function Education() {
  const { resumeData, setResumeData, step, setStep } = useResumeData()
  const [education, setEducation] = useState(resumeData.education || {
    course: '', university: '', institution: '', start: '', start: '', end: '', place: ''
  })

  const handleChange = (e) => setEducation({ ...education, [e.target.name]: e.target.value })
  console.log(education);

  const submitEducation = async (e) => {
    try {
      e.preventDefault()
      setResumeData({ ...resumeData, education: education })
      setStep(step + 1)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='py-3 mx-3'>
      <h2 className='sub-heading'> Education </h2>

      <form onSubmit={submitEducation} className='pt-15' >
        <p className='definition pl-3'> Fill in the details of your latest education. </p>

        <div className='pt-5 grid grid-cols-1 gap-2 lg:grid-cols-2'>
          <input type="text"
            name='institution'
            value={education.institution}
            onChange={handleChange}
            className='resume-input'
            placeholder='institution name...' />

          <input type="text"
            name='university'
            value={education.university}
            onChange={handleChange}
            className='resume-input'
            placeholder='university name...' />

          <input type="text"
            name='course'
            value={education.course}
            onChange={handleChange}
            className='resume-input'
            placeholder='course' />

          <input type="text"
            name='place'
            value={education.place}
            onChange={handleChange}
            className='resume-input'
            placeholder='place' />

          <input type="month"
            name='start'
            value={education.start}
            onChange={handleChange}
            className='resume-input'
            placeholder='start' />

          <input type="month"
            name='end'
            value={education.end}
            onChange={handleChange}
            className='resume-input'
            placeholder='end' />

        </div>
        <button type='submit' className='button-3 absolute right-2 top-10' > <FaChevronRight /> </button>
      </form>
    </div>
  )
}

export default Education