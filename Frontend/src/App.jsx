import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './Components/Contexts/themeContext'
import { ToastContainer } from "react-toastify";

const HomePage = React.lazy(() => import('./Components/Common/HomePage'))
const SignInPage = React.lazy(() => import('./Components/Common/SignIn'))
const SignUpPage = React.lazy(() => import('./Components/Common/SignUp'))

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
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signIn' element={<SignInPage />} />
          <Route path='/signUp' element={<SignUpPage />} />
        </Routes>
      </ThemeContext.Provider>
      <ToastContainer position='top-center' autoClose={2000} />
    </>
  )
}

export default App
