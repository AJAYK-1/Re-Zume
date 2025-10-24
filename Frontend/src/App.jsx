import React, { useEffect, useState, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeContext } from './Context/themeContext'
import { ToastContainer } from "react-toastify";
import Loading from './Components/Layouts/Loading';
import { AuthContext } from './Context/authContext';
import ProtectedRoutes from './Routes/ProtectedRoutes';

const HomePage = React.lazy(() => import('./Pages/Home/HomePage'))
const SignInPage = React.lazy(() => import('./Pages/Common/SignIn'))
const SignUpPage = React.lazy(() => import('./Pages/Common/SignUp'))
const ErrorPage = React.lazy(() => import('./Components/Layouts/Error'))

const UserHome = React.lazy(() => import('./Pages/User/UserHome'))
const ResumePreview = React.lazy(() => import('./Pages/User/ResumePreview'))
const BuildResume = React.lazy(() => import('./Pages/User/BuildResume'))
const ATSChecker = React.lazy(() => import('./Pages/User/ATSChecker'))
const ResumeModifier = React.lazy(() => import('./Pages/User/ResumeModifier'))
const UserFeedback = React.lazy(() => import('./Pages/User/UserFeedback'))

const AdminLogin = React.lazy(() => import('./Pages/Admin/AdminLogin'))
const AdminDashboard = React.lazy(() => import('./Pages/Admin/Dashboard'))
const UserManagement = React.lazy(() => import('./Pages/Admin/UserManagement'))
const FeedbackManagement = React.lazy(() => import('./Pages/Admin/FeedbackManagement'))

function App() {

  const [theme, setTheme] = useState('light')
  const [role, setRole] = useState('')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme)
    document.documentElement.classList.toggle('dark', storedTheme === 'dark')

    const isLoggedin = localStorage.getItem('role') || null;
    setRole(isLoggedin)
  }, [])

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <AuthContext.Provider value={{ role, setRole }}>
            <Routes>

              {!role && <>
                <Route path='/' element={<HomePage />} />
                <Route path='/signIn' element={<SignInPage />} />
                <Route path='/signUp' element={<SignUpPage />} />
                <Route path='/admin' element={<AdminLogin />} />
                <Route path='*' element={<ErrorPage />} />
              </>}

              <Route element={<ProtectedRoutes />}>
                <Route path='/signIn' element={<Navigate to={'/'} />} />
                <Route path='/signUp' element={<Navigate to={'/'} />} />
                <Route path='/admin' element={<Navigate to={'/'} />} />
                <Route path='*' element={<ErrorPage />} />

                {role === 'User' && <>
                  <Route path='/' element={<Navigate to={'/user-home'} />} />
                  <Route path='/user-home' element={<UserHome />} />
                  <Route path='/resume-preview' element={<ResumePreview />} />
                  <Route path='/build-resume' element={<BuildResume />} />
                  <Route path='/ats-checker' element={<ATSChecker />} />
                  <Route path='/resume-modifier' element={<ResumeModifier />} />
                  <Route path='/user-feedback' element={<UserFeedback />} />
                </>}
                {role === 'Admin' && <>
                  <Route path='/' element={<Navigate to={'/dashboard'} />} />
                  <Route path='/dashboard' element={<AdminDashboard />} />
                  <Route path='/user-management' element={<UserManagement />} />
                  <Route path='/feedback-management' element={<FeedbackManagement />} />
                </>}

              </Route>
            </Routes>
          </AuthContext.Provider>
        </ThemeContext.Provider>
      </Suspense>
      <ToastContainer position='top-center' autoClose={2000} />
    </>
  )
}

export default App
