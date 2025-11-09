import React, { useState } from 'react'
import { useResumeData } from '../../../Context/resumeContext'
import { frontend } from '../../../Components/Constants/Skills'

function Skills() {
  const { resumeData, setResumeData, step, setStep } = useResumeData()
  const [skills, setSkills] = useState([])

  return (
    <div className='py-3'>
      <h2 className='sub-heading'> Skills </h2>
      <form className='pt-10 p-3 space-y-2 grid grid-cols-1 '>

        <h3 className='definition'>Choose your technical skills. </h3>

        <div className='gap-3'>
          {frontend.map((skill, index) =>
            <button key={index} className='options-button'> {skill} </button>
          )}
        </div>

      </form>
    </div>
  )
}

export default Skills