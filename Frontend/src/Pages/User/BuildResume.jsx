import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Layouts/Navbar'
import Footer from '../../Components/Layouts/Footer'
import PersonalDetails from './components/PersonalDetails'
import Summary from './components/Summary'
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certification from "./components/Certification";
import { ResumeContext } from "../../Context/resumeContext";
import { FaChevronLeft } from 'react-icons/fa';
import Projects from './components/Projects'

function BuildResume() {
  const [step, setStep] = useState(JSON.parse(sessionStorage.getItem('resumeStep')) || 1)
  const [resumeData, setResumeData] = useState(
    JSON.parse(sessionStorage.getItem('resumeData')) || {
      name: '',
      email: '',
      gender: '',
      phone: '',
      address: {
        country: '', state: '', district: '', city: '', pincode: ''
      },
      summary: '',
      experience: [{
        company: '', position: '', place: '', from: '', to: '', description: ''
      }],
      skills: {
        technical: {
          frontend: [], backend: [], databases: [], languages: [], toolsandDevOps: [], others: []
        },
        soft: []
      },
      education: {
        course: '', university: '', institution: '', start: '', start: '', end: '', place: ''
      },
      projects: [{
        title: '', details: '', link: ''
      }],
      certifications: [{
        certificateName: '', provider: ''
      }]
    })

  useEffect(() => {
    sessionStorage.setItem('resumeData', JSON.stringify(resumeData))
    sessionStorage.setItem('resumeStep', step)
  }, [resumeData, step])

  console.log(resumeData);

  const leftButton = (e) => {
    try {
      e.preventDefault()
      setStep(step - 1)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData, step, setStep }} >
      <Navbar />
      <main className='background-1 min-h-full lg:min-h-[120%] xl:min-h-full p-5'>
        <h1 className='main-heading text-center mb-5'> Build your Resume </h1>

        <section className='big-box relative mx-auto'>
          <button className='button-3 absolute left-2 top-10' onClick={leftButton} disabled={step === 1}> <FaChevronLeft /> </button>
          {step === 1 && <PersonalDetails />}
          {step === 2 && <Summary />}
          {step === 3 && <Experience />}
          {step === 4 && <Skills />}
          {step === 5 && <Education />}
          {step === 6 && <Projects />}
          {step === 7 && <Certification />}
        </section>

      </main>
      <Footer />
    </ResumeContext.Provider>
  )
}

export default BuildResume