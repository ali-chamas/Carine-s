import React from 'react'
import pic1 from '../assets/hero/hero-pic1.jpg'
import pic2 from '../assets/hero/hero-pic2.jpg'
import pic3 from '../assets/hero/hero-pic3.jpg'
import pic4 from '../assets/hero/hero-pic4.jpg'
import pic5 from '../assets/hero/hero-pic5.jpg'
import pic6 from '../assets/hero/hero-pic6.jpg'
import pic7 from '../assets/hero/hero-pic7.jpg'
import pic8 from '../assets/hero/hero-pic8.jpg'
import { motion as m } from 'framer-motion'
export const images=[
  {
    id:1,src:pic1
  },
  {
    id:2,src:pic2
  },
  {
    id:3,src:pic3
  },
  {
    id:4,src:pic4
  },
  {
    id:5,src:pic5
  },
  {
    id:6,src:pic6
  },
  {
    id:7,src:pic7
  },
  {
    id:8,src:pic8
  }
]

const Hero = () => {
  return (
    <div className='h-[calc(100vh-70px)] items-center  flex flex-col gap-4 justify-center  px-5'>
      
      
      {/* <img src={pic8} className='h-[160px] w-[120px] self-start rounded-xl shadow-lg shadow-gray-400'/> */}


    <m.div 
    initial={{opacity:0}}
    animate={{opacity:100 , transition:{
      duration:1.2,delay:0.5
    }}}
    className='flex m-3  flex-col gap-3 md:gap-4 xl:gap-5 p-2 '>


      <h1 className=' text-3xl md:text-4xl  xl:text-5xl font-semibold self-start text-center max-w-[800px] w-max'>
          Elevate your <span className='text-fuchsia-500 '>style</span> 
      </h1>
      
      <h1 className='text-3xl  md:text-4xl xl:text-5xl font-semibold self-end text-center'>
      and be <span className='text-fuchsia-500'>yourself</span> 
      </h1>
      <a href='#featured' className='py-2 px-5 lg:text-lg self-center bg-black rounded-lg text-white hover:opacity-90 transition-all duration-150'>
        Shop Now
      </a>
      <div className='bg-fuchsia-500 bg-opacity-10 blur-xl absolute w-[300px] h-[100px] lg:w-[360px] xl:w-[400px] -z-10'/>
      
    </m.div>
    
      {/* <img src={pic3} className='h-[160px] w-[120px] self-end rounded-xl shadow-lg shadow-gray-400'/> */}

      <div className='absolute h-[90vh]  bg-fuchsia-500 bg-opacity-10 -z-10 w-[2px] top-0 left-20 md:mx-10 xl:mx-20'/>
      <div className='absolute h-[90vh]  bg-fuchsia-500 bg-opacity-10 -z-10 w-[2px] top-0 right-20 md:mx-10 xl:mx-20'/>
      <div className='absolute h-[90vh]  bg-fuchsia-500 bg-opacity-10 -z-10 w-[2px] top-0 left-8 md:mx-10 xl:mx-20'/>
      <div className='absolute h-[90vh]  bg-fuchsia-500 bg-opacity-10 -z-10 w-[2px] top-0 right-8 md:mx-10 xl:mx-20'/>
    </div>
  ) 
}

export default Hero