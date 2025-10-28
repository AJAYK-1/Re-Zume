import React, { useContext } from 'react'
import { AuthContext } from '../Context/authContext'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'

function ProtectedRoutes() {
    const { role } = useContext(AuthContext)
    if (!role) toast.error('Please login first...')

    return role ? <Outlet /> : <Navigate to={'/signIn'} replace/>
}

export default ProtectedRoutes