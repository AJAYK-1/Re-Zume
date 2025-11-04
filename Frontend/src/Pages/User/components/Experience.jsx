import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { useResumeData } from '../../../Context/resumeContext'

function Experience() {
  const { resumeData, setResumeData, step, setStep } = useResumeData()
  const [expRow, setExpRow] = useState(resumeData.experience)

  const handleChange = (e, index) => {
    const { name, value } = e.target
    const newData = [...expRow]
    newData[index][name] = value
    setExpRow(newData)
  }
  console.log(expRow);

  const AddNewRow = () => setExpRow([...expRow, { company: '', position: '', place: '', from: '', to: '', description: '' }])

  const submitPersonalData = async (e) => {
    try {
      e.preventDefault()
      setResumeData({ ...resumeData, experience: expRow })
      setStep(step + 1)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='py-3'>
      <h2 className='sub-heading'> Experience </h2>

      <form onSubmit={submitPersonalData} className='pt-15 grid grid-cols-1'>
        {expRow.map((exp, index) =>
          <div key={index} className='p-3 space-y-3 shadow-xl rounded-2xl m-2'>
            <h1 className='tag-line'> EXPERIENCE #{index + 1}</h1>
            <input type="text" name='company'
              value={exp.company}
              onChange={(e) => handleChange(e, index)}
              className='resume-input'
              placeholder='Company name...' />

            <input type="text" name='position'
              value={exp.position}
              onChange={(e) => handleChange(e, index)}
              className='resume-input'
              placeholder='Position...' />

            <input type="text" name='place'
              value={exp.place}
              onChange={(e) => handleChange(e, index)}
              className='resume-input'
              placeholder='Place...' />

            <input type="month" name='from'
              value={exp.from}
              onChange={(e) => handleChange(e, index)}
              className='resume-input'
              placeholder='Joining month' />

            <input type="month" name='to'
              value={exp.to}
              onChange={(e) => handleChange(e, index)}
              className='resume-input'
              placeholder='Resignation month' />

            <textarea
              name="description"
              id="description"
              value={exp.description}
              onChange={(e) => handleChange(e, index)}
              className='resume-textarea'
              placeholder='Something about the job experience.' />
          </div>
        )}
        <button type='submit' className='button-3 absolute right-2 top-10' > <FaChevronRight /> </button>
      </form>
      <div className='flex justify-center items-center mt-5'>
        <button onClick={AddNewRow} className='button-1 max-w-50'> + Add Experience </button>
      </div>

    </div>
  )
}

export default Experience