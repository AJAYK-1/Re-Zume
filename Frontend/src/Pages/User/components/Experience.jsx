import React, { useState } from 'react'

function Experience() {
  const [experience, setExperience] = useState([{
    company: '', position: '', place: '', from: '', to: '', description: ''
  }])

  const handleChange = (e, index) => {
    const newExp = [...experience]
    newExp[index] = { [e.target.name]: e.target.value }
    setExperience(newExp)
  }

  return (
    <div className='py-3 mx-3'>
      <h2 className='sub-heading'> Experience </h2>

      <section >
        <form className='grid grid-cols-1'>
          <input type="text" name='company'
            placeholder='Company name...' />

          <input type="text" name='position'
            placeholder='Position...' />

          <input type="text" name='place'
            placeholder='Place...' />

          <input type="month" name='from'
            placeholder='Joining month' />

          <input type="month" name='to'
            placeholder='Resignation month' />

          <textarea
            name="description"
            id="description"
            placeholder='Something about the job experience.' />
        </form>
      </section>
    </div>
  )
}

export default Experience