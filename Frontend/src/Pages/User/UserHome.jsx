import React, { useMemo } from 'react'
import Navbar from '../../Components/Layouts/Navbar'
import UserFooter from './UserFooter'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'
import { jwtDecode } from 'jwt-decode'
import ResumeGeneratorClassic from '../../Components/Utilities/ResumeGenerator_Classic'
import { useNavigate } from 'react-router-dom'

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
      <main className='background-1 min-h-full'>
        <h1 className='main-heading text-center mb-10'> Your Collection </h1>

        {loading ? <div> Loading... </div> :
          resumes.length === 0 ?
            <div> No Resumes Found... </div> :
            <div className='grid grid-cols-1 place-self-center gap-5 md:grid-cols-2 md:gap-20'>
              {resumes?.map((resume) =>
                <div key={resume?.id} onClick={() => navigate('/resume-preview', { state: { resume: resume } })} className='h-100 w-60 hover:cursor-pointer'>
                  {resume?.resumeType === "Classic" && <ResumeGeneratorClassic resumeData={resume} box={true} />}
                </div>
              )}
            </div>
        }
      </main>

      <UserFooter />
    </>
  )
}

export default UserHome