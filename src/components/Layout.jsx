
import React from 'react'
import Navbar from '../pages/Navbar'
import Footer from '../pages/Footer'
import WhatsappButton from './WhatsappButton'
const Layout = ({children}) => {
  return (
    <div className='h-full '>
        <Navbar/>
        <div className='min-h-screen px-5 md:px-20 xl:px-28'>
       
        {children}
        </div>
        <WhatsappButton/>
        <Footer/>
    </div>
  )
}

export default Layout