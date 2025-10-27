import React, { useState } from 'react'
import Navbar from '../../Components/Layouts/Navbar'
import Footer from '../../Components/Layouts/Footer'
import PersonalDetails from './components/PersonalDetails'
import Summary from './components/Summary'
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certification from "./components/Certification";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function BuildResume() {
  const [step, setStep] = useState(1)
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    gender: '',
    phone: '',
    address: {
      country: '', state: '', district: '', city: '', pincode: ''
    }
  })

  console.log(resumeData);

  const leftButton = (e) => {
    try {
      e.preventDefault()
      if (step === 1) return;
      setStep(step - 1)
    } catch (error) {
      console.log(error.message);
    }
  }

  const rightButton = (e) => {
    try {
      e.preventDefault()
      if (step === 6) return;
      setStep(step + 1)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Navbar />
      <main className='background-1 h-full p-5'>
        <h1 className='main-heading text-center mb-5'> Build your Resume </h1>

        <section className='big-box relative mx-auto'>
          <button className='button-3 absolute left-3' onClick={leftButton}> <FaChevronLeft /> </button>
          <button className='button-3 absolute right-3' onClick={rightButton}> <FaChevronRight /> </button>
          {step === 1 && <PersonalDetails resumeData={resumeData} setResumeData={setResumeData} />}
          {step === 2 && <Summary />}
          {step === 3 && <Experience />}
          {step === 4 && <Skills />}
          {step === 5 && <Education />}
          {step === 6 && <Certification />}
        </section>

      </main>
      <Footer />
    </>
  )
}

export default BuildResume