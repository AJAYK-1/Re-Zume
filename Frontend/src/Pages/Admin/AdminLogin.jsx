import React, { useContext, useEffect, useRef, useState } from 'react'
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client/react'
import { jwtDecode } from 'jwt-decode'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/authContext'

const ADMIN_LOGIN = gql`
  mutation AdminLogin ($name: String!, $password: String!) {
    adminLogin (name: $name, password: $password) {
      success
      token
      message
    }
  }
`

function AdminLogin() {
  const { setRole } = useContext(AuthContext)

  const [inputData, setInputData] = useState({
    name: '', password: ''
  })
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  const [adminLogin, { error, loading }] = useMutation(ADMIN_LOGIN)

  const handleChange = (e) => setInputData({ ...inputData, [e.target.name]: e.target.value })

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const { data } = await adminLogin({ variables: { name: inputData.name, password: inputData.password } })
      const response = data.adminLogin
      if (response.success) {
        localStorage.setItem('token', response.token)
        const decodedToken = jwtDecode(response.token)
        localStorage.setItem('role', decodedToken.role)
        setRole(decodedToken.role)
        toast.success(response.message)
        setTimeout(() => navigate('/dashboard'), 2000);
      } else {
        toast.error(response.message)
      }
    } catch (error) {
      console.error("GraphQL Error: ", error.message);
      toast.error("Something went Wrong! Please try again later...")
    }
  }

  return (
    <div className='background-1 h-full flex justify-center'>
      <div className='bg-white max-h-90 max-w-90 p-5 rounded-xl dark:bg-[#272f42] dark:shadow-[0_0_5px_rgba(100,50,255,0.4)]'>
        <h1 className='text-center text-3xl font-michroma font-bold dark:text-white mb-10'> Administrator Login </h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <input
            ref={inputRef}
            type="text" name='name'
            onChange={handleChange}
            placeholder='Admin Id' required
            className='relative-input peer/box1 focus:ring-4 ring-purple-700 outline-0 mt-1.5' />
          <div className='input-icons peer-focus/box1:ring-4 ring-purple-700'>
            <FaEnvelope size={22} color='purple' />
          </div>

          <input
            type="password" name='password'
            onChange={handleChange}
            placeholder='Password' required
            className='relative-input peer/box2 focus:ring-4 ring-purple-700 outline-0 mt-1.5' />
          <div className='input-icons mt-15.5 ml-68 peer-focus/box2:ring-4 ring-purple-700'>
            <FaLock size={22} color='purple' />
          </div>

          <div className='flex justify-center items-center'>
            <button type='submit' className='button-1'> {loading ? 'Logging in...' : 'Login'} </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin