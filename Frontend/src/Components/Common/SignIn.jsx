import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { jwtDecode } from "jwt-decode";
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client/react'
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import signinAnimation from "../../assets/Animations/Login.lottie";
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

const USER_SIGNIN = gql`
mutation UsersSignIn($email: String!, $password: String!) {
    userSignIn(email: $email, password: $password) {
        success
        message
        token
    }
}
`

function SignIn() {
    const [SignIn, { loading, error }] = useMutation(USER_SIGNIN)
    const [formData, setFormData] = useState({})

    const inputRef = useRef(0)
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const navigate = useNavigate()
    const handleSubmission = async (e) => {
        try {
            e.preventDefault()
            const { data } = await SignIn({ variables: { email: formData.email, password: formData.password } })
            const response = data.userSignIn
            if (response.success) {
                localStorage.setItem('token', response.token)
                const decodedToken = jwtDecode(response.token)
                localStorage.setItem('role', decodedToken.role)
                toast.success(response.message)
                setTimeout(() => {
                    navigate('/user-home')
                }, 2000);
            } else {
                toast.error(response.message)
            }
        } catch (error) {
            console.error("GraphQL Error: ", error.message);
            alert("Something went Wrong! Please try again later...")
        }
    }

    return (
        <>
            <Navbar />

            <main className='p-10 background-1 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-evenly min-h-150'>

                <div className='flex justify-center'>
                    <DotLottieReact
                        src={signinAnimation}
                        loop
                        autoplay
                        className='size-100 lg:size-150' />
                </div>

                <div className='flex justify-center'>
                    <div className='bg-white max-h-110 max-w-90 p-10 rounded-xl dark:bg-[#272f42] dark:shadow-[0_0_5px_rgba(100,50,255,0.4)]'>
                        <h1 className='text-center text-3xl font-michroma font-bold dark:text-white mb-5'> SignIn </h1>

                        <form className='flex flex-col space-y-10' onSubmit={handleSubmission} >

                            <input ref={inputRef}
                                type="email" name='email'
                                onChange={handleChange} required
                                placeholder='Email'
                                className='relative-input peer/box1 focus:ring-4 ring-purple-700 outline-0 mt-1.5' />
                            <div className='input-icons peer-focus/box1:ring-4 ring-purple-700'>
                                <FaEnvelope size={22} color='purple' />
                            </div>

                            <input
                                type="password" name='password'
                                onChange={handleChange} required
                                placeholder='Password'
                                className='relative-input peer/box2 focus:ring-4 ring-purple-700 outline-0' />
                            <div className='input-icons mt-19 ml-57 peer-focus/box2:ring-4 ring-purple-700'>
                                <FaLock size={22} color='purple' />
                            </div>

                            <section className='flex justify-center'>
                                <button
                                    type='submit'
                                    disabled={loading}
                                    className='button-1'>
                                    {loading ? 'Signing in...' : 'SignIn'}
                                </button>
                            </section>
                            <p className='font-bold font-poppins dark:text-white text-center'> Don't have an account?
                                <a href="/signUp" className='underline text-blue-700 dark:text-sky-400'> SignUp </a>
                            </p>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default SignIn