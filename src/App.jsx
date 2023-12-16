import React from 'react'
import Hero from './pages/Hero'
import Navbar from './pages/Navbar'
import Featured from './pages/Featured'
import EventPage from './pages/EventPage'

const App = () => {
  return (
    <div className='h-full min-h-screen px-5 md:px-20 xl:px-28'>
      <Navbar/>
      <Hero/>
      <Featured/>
      <EventPage/>
    </div>
  )
}

export default App