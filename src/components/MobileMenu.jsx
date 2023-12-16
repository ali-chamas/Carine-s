import React from 'react'
import { links } from '../pages/Navbar'
import { motion as m } from 'framer-motion'

const MobileMenu = () => {
  return (
    <m.div 
    initial={{y:-10}}
    animate={{y:0}}
    transition={{stiffness:50,duration:0.2}}
    className='absolute  flex flex-col gap-3 top-[70px] left-0 w-full  bg-white  bg-opacity-[0.97] '>
        {
            links.map(link=>(
                <a key={link.id} href={link.href} className='text-base  p-2 hover:opacity-90 '>{link.title}</a>
            ))
        }
    </m.div>
  )
}

export default MobileMenu