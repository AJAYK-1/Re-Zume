import React, { useState } from 'react'
import { useResumeData } from '../../../Context/resumeContext'
import { FaChevronRight } from 'react-icons/fa'

function Certification() {
  const { resumeData, setResumeData, step, setStep } = useResumeData()
  const [certificates, setCertificates] = useState(resumeData.certifications || [{
    certificateName: '', provider: ''
  }])

  const AddNewRow = () => setCertificates([...certificates, { certificateName: '', provider: '' }])

  const handleChange = (e, i) => {
    const { name, value } = e.target
    const data = [...certificates]
    data[i][name] = value
    setCertificates(data)
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setResumeData({ ...resumeData, certifications: certificates })
      setStep(step + 1)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='py-3 mx-3'>
      <h2 className='sub-heading' > Certifications and Workshops </h2>

      <form onSubmit={handleSubmit} className='pt-15 grid grid-cols-1' >
        <p className='definition'> Fill in the details of any relevant certifications or workshops you have completed. </p>
        {certificates.map((cert, i) =>
          <div key={i} className='p-3 space-y-3 shadow-xl rounded-2xl m-2' >
            <h1 className='tag-line'> CERTIFICATE/WORKSHOP #{i + 1} </h1>

            <input type="text"
              name='certificateName'
              value={cert.certificateName}
              onChange={(e) => handleChange(e, i)}
              placeholder='Certificate/Workshop name...'
              className='resume-input' />

            <input type="text"
              name='provider'
              value={cert.provider}
              onChange={(e) => handleChange(e, i)}
              placeholder='Certificate Provider...'
              className='resume-input' />
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

export default Certification