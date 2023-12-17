import React from 'react'
import Hero from './pages/Hero'
import Navbar from './pages/Navbar'
import Featured from './pages/Featured'
import EventPage from './pages/EventPage'
import Footer from './pages/Footer'
import WhatsappButton from './components/WhatsappButton'

const App = () => {
  return (
    <div >
      
      <Hero/>
      <EventPage/>
      <Featured/>
      <WhatsappButton/>
      <Footer/>
    </div>
  )
}

export default App