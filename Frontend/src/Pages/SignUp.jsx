import React, { useEffect, useRef } from 'react'
import Navbar from '../Components/Layouts/Navbar'
import Footer from '../Components/Layouts/Footer'
import { toast } from 'react-toastify'
import { gql } from '@apollo/client'
import { useState } from 'react'
import { useMutation } from '@apollo/client/react'
import { useNavigate } from 'react-router-dom'
import { FaLock, FaRegEnvelope, FaRegUser } from 'react-icons/fa'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import signupanimation from "../assets/Animations/signup.lottie";

const USER_SIGNUP = gql`
mutation CreateUser($name: String!, $email: String!, $password: String!) {
      userSignUp(name: $name, email: $email, password: $password) {
        success
        message
      }
}
`

function SignUp() {
  const [formData, setFormData] = useState({})
  const [createUser, { loading, error }] = useMutation(USER_SIGNUP)

  const inputRef = useRef(0)
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const navigate = useNavigate()
  const Submission = async (e) => {
    try {
      e.preventDefault()
      const { data } = await createUser({
        variables: {
          name: formData.name,
          email: formData.email,
          password: formData.password
        }
      })
      const response = data.userSignUp
      if (response.success) {
        toast.success(response.message)
        setTimeout(() => navigate('/signIn'), 2000);
      } else {
        toast.error(response.message)
      }
    } catch (error) {
      console.error("GraphQL Error: ", error.message);
      toast.error("Something went Wrong! Please try again later...")
    }
  }

  return (
    <>
      <Navbar />

      <main className='p-10 background-1 flex justify-center flex-col-reverse lg:flex-row lg:items-center lg:justify-evenly min-h-160'>

        <div className='flex justify-center'>
          <DotLottieReact
            src={signupanimation}
            loop
            autoplay
            className='size-100 lg:size-150' />
        </div>

        <div className='flex justify-center'>
          <div className='bg-white max-h-120 max-w-90 p-10 rounded-xl dark:bg-[#272f42] dark:shadow-[0_0_5px_rgba(100,50,255,0.4)]'>
            <h1 className='text-center text-3xl font-michroma font-bold dark:text-white mb-5'> SignUp </h1>

            <form className='flex flex-col space-y-10' onSubmit={Submission}>
              <input ref={inputRef}
                type="text" name='name'
                placeholder='Name'
                onChange={handleChange} required
                className='relative-input mt-1.5 peer/box1 focus:ring-4 ring-purple-700' />
              <div className='input-icons peer-focus/box1:ring-4 ring-purple-700'>
                <FaRegUser size={22} color='purple' />
              </div>

              <input type="email" name='email'
                placeholder='Email'
                onChange={handleChange} required
                className='relative-input peer/box2 focus:ring-4 ring-purple-700' />
              <div className='input-icons mt-19 ml-55 peer-focus/box2:ring-4 ring-purple-700'>
                <FaRegEnvelope size={22} color='purple' />
              </div>

              <input type="password" name='password'
                placeholder='Password'
                onChange={handleChange} required
                className='relative-input peer/box3 focus:ring-4 ring-purple-700' />
              <div className='input-icons mt-38 peer-focus/box3:ring-4 ring-purple-700'>
                <FaLock size={22} color='purple' />
              </div>

              <section className='flex justify-center'>
                <button type='submit' disabled={loading}
                  className='button-1'> {loading ? 'Signing Up...' : 'SignUp'} </button>
              </section>
              <p className='font-bold font-poppins dark:text-white'> Already have an account?
                <a href="/signIn" className='underline text-blue-700 dark:text-sky-400'> SignIn </a>
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default SignUp