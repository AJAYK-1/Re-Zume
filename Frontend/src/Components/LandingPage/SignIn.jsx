import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'

const USER_SIGNIN = gql`
query Users {
    users {
        id
        name
        email
    }
}
`

function SignIn() {
    const { data, loading, error } = useQuery(USER_SIGNIN)

    if (loading) return <h1> Loading... </h1>
    if (error) return <h1> Error...{error.message} </h1>

    return (
        <>
            <Navbar />
            
            {data.users.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}

            <Footer />
        </>
    )
}

export default SignIn