import React, { useMemo, useState } from 'react'
import Navbar from '../../Components/Layouts/Navbar'
import Footer from '../../Components/Layouts/Footer'
import { gql } from '@apollo/client'
import { useMutation, useQuery } from '@apollo/client/react'
import { jwtDecode } from 'jwt-decode'
import { PDFViewer } from '@react-pdf/renderer'
import ResumePDF from '../../Components/Utilities/ResumePDF'
import { RiArrowGoBackFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import { BsArrowsFullscreen } from 'react-icons/bs';
import PDFDownloadButton from '../../Components/Utilities/DownloadButton'
import BlobResume from '../../Components/Utilities/BlobResume'
import itemLoading from '../../assets/Animations/itemLoading.lottie'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { toast } from 'react-toastify'

const MyResumes = gql`
  query myResumes( $userId: ID!) {
    myResumes( userId: $userId) {
    id
    userId
    resumeType
    name
    summary
    phone
    email
    gender
    address {
      country
      state
      district
      city
      pincode
    }
    linkedIn
    gitHub
    portfolio
    education {
      course
      university
      institution
      start
      end
      place
    }
    experience {
      company
      position
      place
      from
      to
      description
    }
    skills {
      professional
      soft
    }
    projects {
      title
      details
      link
    }
    certifications {
      certificateName
      provider
    }
    }
  }
`

const DELETE_RESUME = gql`
  mutation DeleteResume( $id:ID!) {
    deleteResume( id: $id ) {
      message
      success
    }
  }
`

function UserHome() {
  const [selectedResume, setSelectedResume] = useState(null)

  const decodedtoken = useMemo(() => {
    const token = localStorage.getItem('token')
    return jwtDecode(token)
  }, [])

  const { data, loading, error } = useQuery(MyResumes,
    { variables: { userId: decodedtoken.id } })

  const resumes = useMemo(() => data?.myResumes || [], [data])
  if (error) console.log(error.message);

  const [DeleteResume, { loading: delLoad }] = useMutation(DELETE_RESUME)

  const handleDeletion = async (e, id) => {
    try {
      e.preventDefault()
      const { data } = await DeleteResume({ variables: { id } })
      const response = data.deleteResume
      if (response.success) {
        toast.success(response.message)
        setTimeout(() => window.location.reload(), 2000);
      }
      else toast.error(response.message)
    } catch (error) {
      console.log(error.message);
    }
  }
  if (!selectedResume)
    return (
      <>
        <Navbar />
        <main className='background-1 min-h-full py-10'>
          <h1 className='main-heading text-center mb-10'> Your Collection </h1>

          {loading ? <div className='grid place-self-center'>
            <DotLottieReact src={itemLoading} loop autoplay speed={3} className='max-w-100' />
          </div> :
            resumes.length === 0 ?
              <div className='flex flex-col justify-center items-center gap-10 mt-20' >
                <p className='text-center text-2xl font-poppins text-slate-600'> No Resumes Found... </p>
                <div className='w-70 flex items-center justify-center'>
                  <button className='button-1'> Build Resume </button>
                </div>
              </div> :
              <div className=' grid grid-cols-1 place-self-center gap-10 md:grid-cols-2 md:gap-13 lg:grid-cols-3 xl:gap-20'>
                {resumes?.map((resume, index) =>
                  <div key={index}
                    className='h-80 w-70 bg-white shadow-xl dark:bg-[#2a0248] rounded-2xl pb-10'>
                    <section key={resume?.id}
                      onClick={() => setSelectedResume(resume)}
                      className='relative overflow-hidden hover:cursor-pointer '>
                      <BlobResume resume={resume} />
                      <h1 className='text-lg font-poppins font-semibold ml-3 dark:text-white'>{resume.name}</h1>
                      <h2 className='font-poppins font-semibold ml-3 dark:text-white'>{resume.resumeType} Resume </h2>
                    </section>
                    <div className='flex justify-evenly items-center p-5'>
                      <button className='button-2-mini' onClick={() => setSelectedResume(resume)}><BsArrowsFullscreen /> </button>
                      <button className='button-2-mini' onClick={(e) => handleDeletion(e, resume.id)}><RiDeleteBin2Line /> </button>
                      <button className='button-2-mini'><FaRegEdit /> </button>
                      <PDFDownloadButton resume={resume} />
                    </div>
                  </div>
                )}
              </div>
          }
        </main>

        <Footer />
      </>
    )

  return (
    <>
      <nav className='hidden md:flex w-full items-center justify-evenly p-3 bg-slate-900'>
        <button onClick={() => setSelectedResume(null)} className='button-2'>
          <RiArrowGoBackFill /> Go Back
        </button>
        <section className='flex items-center gap-4'>
          <button className='button-2'>
            <FaRegEdit /> Edit
          </button>
          <button className='button-2'
            onClick={(e) => handleDeletion(e, selectedResume.id)}>
            <RiDeleteBin2Line /> Delete
          </button>
          <PDFDownloadButton resume={selectedResume} mini={false} btnText='Download' />
        </section>
      </nav>
      <nav className='flex w-full items-center justify-evenly p-3 bg-slate-900 md:hidden'>
        <button onClick={() => setSelectedResume(null)} className='button-2'>
          <RiArrowGoBackFill />
        </button>
        <section className='flex items-center gap-4'>
          <button className='button-2'>
            <FaRegEdit />
          </button>
          <button className='button-2'
            onClick={(e) => handleDeletion(e, selectedResume.id)}>
            <RiDeleteBin2Line />
          </button>
          <PDFDownloadButton resume={selectedResume} mini={false} />
        </section>
      </nav>
      <main className='bg-slate-900 min-h-screen overflow-hidden grid grid-cols-1'>
        <PDFViewer width={`100%`} height={`100%`}>
          <ResumePDF resumeData={selectedResume} />
        </PDFViewer>
      </main>

    </>
  )
}

export default UserHome