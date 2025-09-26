import React, { useEffect, useState } from 'react'
import { ThemeContext } from './Components/Contexts/themeContext'

const HomePage = React.lazy(() => import('./Components/LandingPage/HomePage'))

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
        <HomePage />
      </ThemeContext.Provider>
    </>
  )
}

export default App
