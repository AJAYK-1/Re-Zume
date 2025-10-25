import React, { useMemo } from 'react'
import Navbar from '../../Components/Layouts/Navbar'
import Footer from '../../Components/Layouts/Footer'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { BlobProvider, PDFViewer } from '@react-pdf/renderer'
import ResumePDF from '../../Components/Utilities/ResumePDF'
import { RiDeleteBin2Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

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

function UserHome() {

  const decodedtoken = useMemo(() => {
    const token = localStorage.getItem('token')
    return jwtDecode(token)
  }, [])

  const { data, loading, error } = useQuery(MyResumes,
    { variables: { userId: decodedtoken.id } })

  const resumes = useMemo(() => data?.myResumes || [], [data])
  if (error) console.log(error.message);

  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <main className='background-1 min-h-full py-10'>
        <h1 className='main-heading text-center mb-10'> Your Collection </h1>

        {loading ? <div> Loading... </div> :
          resumes.length === 0 ?
            <div> No Resumes Found... </div> :
            <div className=' grid grid-cols-1 place-self-center gap-5 md:grid-cols-2 md:gap-20'>
              {resumes?.map((resume) =>
                <div className='h-80 w-80 bg-white shadow-xl dark:bg-[#2a0248] rounded-2xl pb-4'>
                  <section key={resume?.id}
                    onClick={() => navigate('/resume-preview', { state: { resume: resume } })}
                    className='relative overflow-hidden hover:cursor-pointer '>
                    <BlobProvider document={<ResumePDF resumeData={resume} />}>
                      {({ url, loading }) =>
                        loading ? (
                          <div> Generating Resume </div>
                        ) : url ? (
                          <iframe
                            src={url + '#view=FitH'}
                            alt='Resume preview'
                            className="w-full h-[200px] overflow-hidden border-none rounded-t-2xl hover:cursor-pointer" />
                        ) : (
                          <div> Preview not available </div>
                        )}
                    </BlobProvider>
                    {/* <div className='absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-black dark:via-black/70' /> */}
                    <h1 className='text-lg font-poppins font-semibold ml-3 dark:text-white'>{resume.name}</h1>
                    <h2 className='font-poppins font-semibold ml-3 dark:text-white'>{resume.resumeType} Resume </h2>
                  </section>
                  <div className='flex justify-evenly items-center p-5'>
                    <button className='button-2'><RiDeleteBin2Line /> </button>
                    <button className='button-2'><FaRegEdit /> </button>
                    <button className='button-2'><FiDownload /> </button>
                  </div>
                </div>
              )}
            </div>
        }
      </main>

      <Footer />
    </>
  )
}

export default UserHome