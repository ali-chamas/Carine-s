
import React from 'react'
import Navbar from '../pages/Navbar'

const Layout = ({children}) => {
  return (
    <div className='h-full min-h-screen px-5 md:px-20 xl:px-28'>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout