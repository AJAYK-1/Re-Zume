import React from 'react'

function Certification() {
  return (
    <div className='py-3'>
      <h2 className='sub-heading' > Certifications and Workshops </h2>
      <input type="text"
        placeholder='Certificate/Workshop name...'
        className='resume-input' />
      <input type="text"
        placeholder='Certificate Provider...'
        className='resume-input' />
    </div>
  )
}

export default Certification