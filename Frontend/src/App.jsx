import React from 'react'

const HomePage = React.lazy(() => import('./Components/LandingPage/HomePage'))

function App() {

  return (
    <>
      <HomePage />

    </>
  )
}

export default App
