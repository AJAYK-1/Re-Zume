import React, { useState } from 'react'
import { useResumeData } from '../../../Context/resumeContext'
import { backend, databases, frontend, languages, others, softSkills, toolsAndDevOps } from '../../../Components/Constants/Skills'
import { FaChevronRight } from 'react-icons/fa'

function Skills() {
  const { resumeData, setResumeData, step, setStep } = useResumeData()
  const [technicalSkills, setTechnicalSkills] = useState(resumeData.skills?.technical || {})
  const [soft, setSoft] = useState(resumeData.skills?.soft || [])

  const handleTechSkillChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value)
    const frontendSkills = selected.filter(skill => frontend.includes(skill))
    const backendSkills = selected.filter(skill => backend.includes(skill))
    const dbSkills = selected.filter(skill => databases.includes(skill))
    const languageSkills = selected.filter(skill => languages.includes(skill))
    const toolsSkills = selected.filter(skill => toolsAndDevOps.includes(skill))
    const otherSkills = selected.filter(skill => others.includes(skill))

    setTechnicalSkills({
      ...technicalSkills,
      frontend: frontendSkills,
      backend: backendSkills,
      databases: dbSkills,
      languages: languageSkills,
      toolsAndDevOps: toolsSkills,
      others: otherSkills
    })
  }

  const handleSoftSkillChange = (e) => {
    const softSkillset = Array.from(e.target.selectedOptions, opt => opt.value)
    setSoft(softSkillset)
  }

  const submitPersonalData = async (e) => {
    try {
      e.preventDefault()
      setResumeData({ ...resumeData, skills: { technical: technicalSkills, soft: soft } })
      setStep(step + 1)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='py-3'>
      <h2 className='sub-heading'> Skills </h2>
      <form onSubmit={submitPersonalData}
        className='pt-10 p-3 space-y-2 grid grid-cols-1 '>

        <div className='gap-3'>
          <h3 className='definition'>Choose your technical skills. </h3>
          <select
            multiple
            value={Object.values(technicalSkills).flat()}
            onChange={handleTechSkillChange}
            name="skills" id="skills"
            className='resume-input h-30'>
            <option value="" disabled> --select technical skills-- </option>
            {[...frontend, ...backend, ...databases, ...languages, ...toolsAndDevOps, ...others].map((skill, index) =>
              <option key={index} value={skill}> {skill} </option>
            )}
          </select>
          <div className='mt-4 flex flex-wrap gap-1'>
            {Object.values(technicalSkills).flat().map((tech, index) =>
              <span key={index} className='options-span'> {tech} </span>
            )}
          </div>
        </div>

        <div className='gap-3'>
          <h3 className='definition'>Choose your soft skills. </h3>
          <select
            multiple
            value={soft}
            onChange={handleSoftSkillChange}
            name="skills" id="skills"
            className='resume-input h-30'>
            <option value="" disabled> --select soft skills-- </option>
            {softSkills.map((skill, index) =>
              <option key={index} > {skill} </option>
            )}
          </select>
          <div className='mt-4 flex flex-wrap gap-1'>
            {soft.map((s, i) =>
              <span key={i} className='options-span'> {s} </span>
            )}
          </div>
        </div>
        <button type='submit' className='button-3 absolute right-2 top-10' > <FaChevronRight /> </button>
      </form>
    </div>
  )
}

export default Skills