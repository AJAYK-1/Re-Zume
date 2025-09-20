import React from 'react'

const HomePage = React.lazy(() => import('./Components/HomePage'))

function App() {

  return (
    <>
      <HomePage />

    </>
  )
}

export default App
