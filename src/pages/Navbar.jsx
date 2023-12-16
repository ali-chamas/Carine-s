import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from 'react-icons/ci'
import MobileMenu from '../components/MobileMenu';
import { IoMdClose } from 'react-icons/io'
export const links=[
    {id:1,title:'Home',href:'/'},
    {id:2,title:'About',href:'#about'},
    {id:3,title:'Collection',href:'/collection'},
    {id:4,title:'Contact',href:'#contact'}
]
const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false)
  return (
    <div className='flex h-[70px] md:h-auto items-center justify-between  py-5 font-extrabold text-2xl md:text-3xl  2xl:text-4xl sticky top-0 bg-white bg-opacity-[0.97] '>

        <button className=' hover:opacity-90 ' onClick={()=>setOpenMenu(open=>!open)}>
            {
                openMenu ? <IoMdClose />: <RiMenu2Fill/>
            }
            
        </button>
        {openMenu && <MobileMenu/>}
        
        <div className='italic '>
            Carine<span className='text-fuchsia-500'>'</span>s
        </div>
        <button className='hover:opacity-90'>
           <CiSearch/>
        </button>
        
        
        </div>
  )
}

export default Navbar