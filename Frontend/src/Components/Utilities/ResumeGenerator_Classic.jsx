import React from 'react'

const ResumeGeneratorClassic = React.memo(({ resumeData, box }) => {
    const { id, userId, resumeType, name, summary, phone, email,
        gender, address, linkedIn, gitHub, portfolio, education,
        experience, skills, projects, certifications } = resumeData
    if (box)
        return (
            <div className='bg-white p-5'>
                <h1 className='text-center font-serif'> {name} </h1>
            </div>
        )
    else
        return (
            <div className='bg-white p-5 w-150'>
                <h1 className='text-center font-serif'> {name} </h1>
            </div>
        )
})

export default ResumeGeneratorClassic