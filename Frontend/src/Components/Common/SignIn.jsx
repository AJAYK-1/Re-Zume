import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { jwtDecode } from "jwt-decode";
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client/react'
import { FaEnvelope, FaLock } from 'react-icons/fa';

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

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmission = async (e) => {
        try {
            e.preventDefault()
            const { data } = await SignIn({ variables: { email: formData.email, password: formData.password } })
            const response = data.userSignIn
            if (response.success) {
                localStorage.setItem('token', response.token)
                const decodedToken = jwtDecode(response.token)
                localStorage.setItem('role', decodedToken.role)
                alert(response.message)
            } else {
                alert(response.message)
            }
        } catch (error) {
            console.error("GraphQL Error: ", error.message);
            alert("Something went Wrong! Please try again later...")
        }
    }

    return (
        <>
            <Navbar />

            <main className='py-10 bg-[#ecf8fe] flex justify-center min-h-full'>
                <div className='bg-white max-h-100 p-10 rounded-xl'>
                    <h1 className='text-center text-3xl font-michroma font-bold mb-5'> SignIn </h1>
                    <form className='flex flex-col space-y-10' onSubmit={handleSubmission} >

                        <input
                            type="email" name='email'
                            onChange={handleChange} required
                            placeholder='Email'
                            className='relative bg-violet-200 rounded-4xl font-poppins p-1 pl-13 mt-2 ml-1' />
                        <div className='absolute bg-white rounded-4xl size-12 border-3 border-violet-200 flex items-center justify-center'>
                            <FaEnvelope />
                        </div>

                        <input
                            type="password" name='password'
                            onChange={handleChange} required
                            placeholder='Password'
                            className='relative bg-violet-200 rounded-4xl p-1 pl-5 font-poppins' />
                        <div className='absolute bg-white rounded-4xl size-12 border-3 border-violet-200 flex items-center justify-center mt-18 ml-55'>
                            <FaLock />
                        </div>
                        <section className='flex justify-center'>
                            <button
                                type='submit'
                                disabled={loading}
                                className='bg-violet-400 p-2 rounded-lg w-[60%] text-white font-semibold font-poppins'>
                                {loading ? 'Signing in...' : 'SignIn'}
                            </button>
                        </section>
                        <p className='font-bold font-poppins'> Don't have an account?
                            <a href="/signUp" className='underline text-blue-700'> SignUp </a>
                        </p>
                    </form>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default SignIn