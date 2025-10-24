import React, { useEffect, useState, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './Context/themeContext'
import { ToastContainer } from "react-toastify";
import Loading from './Components/Layouts/Loading';
import { AuthContext } from './Context/authContext';

const HomePage = React.lazy(() => import('./Pages/Home/HomePage'))
const SignInPage = React.lazy(() => import('./Pages/SignIn'))
const SignUpPage = React.lazy(() => import('./Pages/SignUp'))
const ErrorPage = React.lazy(() => import('./Components/Layouts/Error'))

const UserHome = React.lazy(() => import('./Components/User/UserHome'))
const ResumePreview = React.lazy(() => import('./Components/User/ResumePreview'))
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
  const [user, setUser] = useState('')

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

    const isLoggedin = localStorage.getItem('user') || null;
    setUser(isLoggedin)
  }, [])

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <AuthContext.Provider value={{ user, setUser }}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/signIn' element={<SignInPage />} />
              <Route path='/signUp' element={<SignUpPage />} />
              <Route path='*' element={<ErrorPage />} />

              {user === 'User' &&
                <Route>
                  <Route path='/user-home' element={<UserHome />} />
                  <Route path='/resume-preview' element={<ResumePreview />} />
                  <Route path='/build-resume' element={<BuildResume />} />
                  <Route path='/ats-checker' element={<ATSChecker />} />
                  <Route path='/resume-modifier' element={<ResumeModifier />} />
                  <Route path='/user-feedback' element={<UserFeedback />} />
                </Route>
              }

              <Route path='/admin' element={<AdminLogin />} />
              <Route path='/dashboard' element={<AdminDashboard />} />
              <Route path='/user-management' element={<UserManagement />} />
              <Route path='/feedback-management' element={<FeedbackManagement />} />
            </Routes>
          </AuthContext.Provider>
        </ThemeContext.Provider>
      </Suspense>
      <ToastContainer position='top-center' autoClose={2000} />
    </>
  )
}

export default App
