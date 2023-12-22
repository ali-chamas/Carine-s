import React from 'react'
import { AiOutlineCopyrightCircle,AiOutlineInstagram,AiOutlineWhatsApp} from'react-icons/ai'
const Footer = () => {
  return (
    <div className='flex flex-col h-full px-5 md:px-20 xl:px-28 bg-gray-50 gap-3 items-center w-full  py-10 '>

    
    <div className='flex justify-between w-full items-center'>
        <div className='flex flex-col text-sm'>
            <a href="/" className='text-gray-700 hover:text-black '>Return policy and rules</a>
            <a href="/" className='text-gray-700 hover:text-black '>View collection</a>
        </div>
       
        <div className='flex gap-2 items-center'>
            <a href="" className='text-3xl text-gray-700 hover:text-pink-600'><AiOutlineInstagram/></a>
            <a href="" className='text-3xl text-gray-700 hover:text-green-600'><AiOutlineWhatsApp/></a>
        </div>
    </div>
    <p className='text-sm'>Made by Ali Chamas</p>
    <div className='self center flex items-center gap-2 text-sm '>
    <b>Carine's Closet</b> <AiOutlineCopyrightCircle/> all rights reserved
    </div>
    
    </div>
  )
}

export default Footer