import React from 'react'


import FilterProducts from '../components/FilterProducts';




const Collection = () => {





  return (
  <div className='h-full mb-10 flex flex-col'>
 <div className='flex my-6 flex-col w-full items-center  gap-5'>
        <div className='flex w-full justify-between items-center '>
       
          <h1 className=' text-2xl font-semibold lg:text-3xl'>All Products</h1>
        
        
         
          
          
          </div>
          <FilterProducts />
        </div>

    
       
</div>
  )
}

export default Collection