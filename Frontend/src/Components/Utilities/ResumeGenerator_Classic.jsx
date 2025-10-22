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
                <div className='bg-white w-[210mm] h-[297mm] p-[1.27cm] origin-top scale-[1]' style={{ transformOrigin: 'top center' }}>

                    <h1 className='text-center font-serif text-[28px]'> {name} </h1>
                    <p className='text-center text-[10px]'>
                        {address.city}, {address.district}, {address.pincode} |
                        <a href={`tel:${phone}`}> {phone} </a> | &nbsp;
                        <a href={`mailto:${email}`} className='text-blue-600 underline'>{email} </a>
                    </p>

                    <p className='text-center text-[13px]'>
                        {linkedIn && <a href={`${linkedIn}`}> [LinkedIn] </a>}
                        {gitHub && <a href={`${gitHub}`}> [GitHub] </a>}
                        {portfolio && <a href={`${portfolio}`}> [Portfolio] </a>}
                    </p>

                    <p className='text-justify text-[10px]'> {summary} </p>

                    <h2>EXPERIENCE</h2>
                    {experience.map((exp, index) => (
                        <section className='' key={index}>
                            <h3>{exp.position}</h3>
                            <h4> {exp.company} | {exp.place} | {exp.from} - {exp.to} </h4>
                            <ul className='text-[10px] list-disc px-4'>
                                {exp.description.split('. ').map((desc, i) =>
                                    <li key={i}> {desc} </li>
                                )}
                            </ul>
                        </section>
                    ))}

                    <h2> PROFESSIONAL SKILLS </h2>
                    <ul className='list-disc px-4 text-[10px]'>
                        <li>
                            {skills.professional.map((pro, i) => <span key={i}> {pro}, </span>)}
                        </li>
                    </ul>

                    <h2> SOFT SKILLS </h2>
                    <ul className='list-disc px-4 text-[10px]'>
                        <li>
                            {skills.soft.map((pro, i) => <span key={i}> {pro}, </span>)}
                        </li>
                    </ul>

                    <h2> EDUCATION </h2>
                    <h3> {education.course} </h3>
                    <p className='text-[10px]'>
                        {education.university} | {education.institution},{education.place} |
                        {education.start} - {education.end}
                    </p>

                    <h2> PROJECTS </h2>
                    <ul className='list-disc px-4 text-[10px]'>
                        {projects.map((proj, i) =>
                            <li key={i}>
                                <span className='font-semibold'> {proj.title}: </span>
                                {proj.details}
                            </li>
                        )}
                    </ul>

                    <h2> CERTIFICATIONS AND WORKSHOPS </h2>
                    <ul className='list-disc text-[10px] px-4'>
                        {certifications.map((cert, i) =>
                            <li key={i}> {cert.certificateName} - {cert.provider} </li>
                        )}
                    </ul>
                </div>
        )
})

export default ResumeGeneratorClassic