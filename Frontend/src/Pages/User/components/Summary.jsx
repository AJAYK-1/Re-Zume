import React, { useEffect, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { useResumeData } from '../../../Context/resumeContext'

function Summary() {
  const { resumeData, setResumeData, step, setStep } = useResumeData()
  const [personalData, setPersonalData] = useState(resumeData)

  useEffect(() => {
    setPersonalData(resumeData)
  }, [resumeData])

  const handleChange = (e) => setPersonalData({ ...personalData, [e.target.name]: e.target.value })

  const submitPersonalData = async (e) => {
    try {
      e.preventDefault()
      setResumeData(personalData)
      setStep(step + 1)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='py-3 mx-3'>
      <h2 className='sub-heading'> Summary </h2>
      <form onSubmit={submitPersonalData} className='mt-7 space-y-5'>
        <p className='definition'> Write something about yourself or few keywords for the AI to prepare a perfect summary that suites you. </p>

        <textarea
          value={personalData.summary}
          onChange={handleChange}
          name="summary" id="summary"
          className='resume-textarea'
          placeholder='Eg:- Full stack developer skilled in writing clean code and specializing in MERN stack. ' required />

        <button type='submit' className='button-3 absolute right-2 top-10' > <FaChevronRight /> </button>
      </form>
    </div>
  )
}

export default Summary