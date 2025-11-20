import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

function Education() {
  return (
    <div className='py-3'>
      <h2 className='sub-heading'> Education </h2>
      <div>
        <form action="">
          <input type="text"
            className='resume-input'
            placeholder='institution' />
          <input type="text"
            className='resume-input'
            placeholder='university' />
          <input type="text"
            className='resume-input'
            placeholder='course' />
          <input type="month"
            className='resume-input'
            placeholder='from' />
          <input type="month"
            className='resume-input'
            placeholder='to' />
          <button type='submit' className='button-3 absolute right-2 top-10' > <FaChevronRight /> </button>
        </form>
      </div>
    </div>
  )
}

export default Education