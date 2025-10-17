import React, { useEffect, useState, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './Components/Utilities/themeContext'
import { ToastContainer } from "react-toastify";
import Loading from './Components/Common/Loading';

const HomePage = React.lazy(() => import('./Components/Common/HomePage'))
const SignInPage = React.lazy(() => import('./Components/Common/SignIn'))
const SignUpPage = React.lazy(() => import('./Components/Common/SignUp'))
const ErrorPage = React.lazy(() => import('./Components/Common/Error'))

const UserHome = React.lazy(() => import('./Components/User/UserHome'))
const BuildResume = React.lazy(() => import('./Components/User/BuildResume'))
const ATSChecker = React.lazy(() => import('./Components/User/ATSChecker'))
const ResumeModifier = React.lazy(() => import('./Components/User/ResumeModifier'))
const UserFeedback = React.lazy(() => import('./Components/User/UserFeedback'))

const AdminLogin = React.lazy(() => import('./Components/Admin/AdminLogin'))
const AdminDashboard = React.lazy(() => import('./Components/Admin/Dashboard'))
const UserManagement = React.lazy(() => import('./Components/Admin/UserManagement'))
const FeedbackManagement = React.lazy(() => import('./Components/Admin/FeedbackManagement'))

function App() {

  const [theme, setTheme] = useState('light')

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
  }, [])

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signIn' element={<SignInPage />} />
            <Route path='/signUp' element={<SignUpPage />} />
            <Route path='*' element={<ErrorPage />} />

            <Route path='/user-home' element={<UserHome />} />
            <Route path='/build-resume' element={<BuildResume />} />
            <Route path='/ats-checker' element={<ATSChecker />} />
            <Route path='/resume-modifier' element={<ResumeModifier />} />
            <Route path='/user-feedback' element={<UserFeedback />} />

            <Route path='/admin' element={<AdminLogin />} />
            <Route path='/dashboard' element={<AdminDashboard />} />
            <Route path='/user-management' element={<UserManagement />} />
            <Route path='/feedback-management' element={<FeedbackManagement />} />
          </Routes>
        </ThemeContext.Provider>
      </Suspense>
      <ToastContainer position='top-center' autoClose={2000} />
    </>
  )
}

export default App
