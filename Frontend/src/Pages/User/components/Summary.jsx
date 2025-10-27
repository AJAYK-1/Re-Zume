import React from 'react'

function Summary() {
  return (
    <div className='py-3 mx-3'>
      <h2 className='sub-heading'> Summary </h2>
      <p className='mt-5 text-justify tag-line'> Write something about yourself or few keywords for the AI to prepare a perfect summary that suites you. </p>

      <textarea
        name="summary" id="summary"
        className='relative-input'
        placeholder='Write something about yourself...' />

      <p>Eg:- Full stack developer skilled in writing clean code and specializing in MERN stack. </p>
    </div>
  )
}

export default Summary