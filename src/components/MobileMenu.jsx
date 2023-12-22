import React from 'react'
import { links } from '../pages/Navbar'
import { motion as m } from 'framer-motion'

const DropdownMenu = () => {
  return (
    <m.div 
    initial={{y:-5}}
    animate={{y:0}}
    transition={{stiffness:50,duration:0.2}}
    className='absolute px-5 md:px-20 xl:px-28 flex flex-col gap-3 top-[70px] left-0 w-full  bg-[rgb(255,255,255,0.97)] '>
        {
            links.map(link=>(
                <a key={link.id} href={link.href} className='text-base  p-2 lg:p-3 hover:bg-gray-300/10  '>{link.title}</a>
            ))
        }
    </m.div>
  )
}

export default DropdownMenu