import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { gql } from '@apollo/client'
import { useState } from 'react'
import { useMutation } from '@apollo/client/react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

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

      <div className='p-5 bg-[#ecf8fe] flex justify-center'>
        <form className='flex flex-col max-w-200 bg-white' onSubmit={Submission}>
          <h1 className='text-center'> SignUp </h1>
          <label htmlFor=""> Name: </label>
          <input type="text" name='name' onChange={handleChange} required />
          <label htmlFor=""> Email: </label>
          <input type="email" name='email' onChange={handleChange} required />
          <label htmlFor=""> Password: </label>
          <input type="password" name='password' onChange={handleChange} required />
          <button type='submit' disabled={loading}> {loading ? 'Signing Up...' : 'SignUp'} </button>
          <p> Already have an account? <a href="/signIn"> SignIn </a> </p>
        </form>
      </div>

      <Footer />
    </>
  )
}

export default SignUp