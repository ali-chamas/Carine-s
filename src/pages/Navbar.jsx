import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from 'react-icons/ci'

import { IoMdClose } from 'react-icons/io'
import DropdownMenu from '../components/MobileMenu';
import SearchBar from '../components/SearchBar';
export const links=[
    {id:1,title:'Home',href:'/'},
    
    {id:2,title:'Collection',href:'/collection'},
    {id:3,title:'About',href:'#about'},
    
]
const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false)
    const [openSearch,setOpenSearch]=useState(false)
  return (
    <div className='flex h-[70px]  items-center justify-between  py-5 font-extrabold text-2xl md:text-3xl  2xl:text-4xl sticky top-0 bg-[rgb(255,255,255,0.97)] px-5 md:px-20 xl:px-28 '>

        <button className=' hover:opacity-90 ' onClick={()=>{setOpenMenu(open=>!open);setOpenSearch(false)}}>
            {
                openMenu ? <IoMdClose />: <RiMenu2Fill/>
            }
            
        </button>
        {openMenu && <DropdownMenu/>}
        
        <div className='italic flex flex-col '>
            <h1>
            Carine<span className='text-pink-900'>'</span>s
            </h1>
            <small className='absolute bottom-3 text-xs self-end text-pink-900 '>closet</small>
        </div>
        <button className='hover:opacity-90' onClick={()=>{setOpenSearch(open=>!open);setOpenMenu(false)}}>
           
           {openSearch ? <IoMdClose />: <CiSearch/>}
           
        </button>
        {openSearch && <SearchBar/>}
        
        </div>
  )
}

export default Navbar