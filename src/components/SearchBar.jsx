import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import {products} from '../components/ProductCard'
const SearchBar = () => {
  const [items,setItems]=useState([]);
  const [searchValue,setSearchValue]=useState(false)

    const searchFunction=(e)=>{
     if(e.target.value!=='' || e.target.value){
      setSearchValue(true)
      const newItems = products.filter(product=>product.title.toLowerCase().includes(e.target.value.toLowerCase()));
      setItems(newItems)
     }
     else if(e.target.value=='' || !e.target.value){
      setItems([])
      setSearchValue(false)
     
     
     }
     
     

    }
    
  return (
    <m.div 
    initial={{y:-5}}
    animate={{y:0}}
    transition={{stiffness:50,duration:0.2}}
    className='absolute  items-center flex flex-col gap-3 top-[70px] right-0 w-full  bg-[rgb(255,255,255,0.97)] p-5'>


      <input type="text" placeholder='search for a product'  className='bg-transparent border-gray-500 focus:border-gray-500 focus:ring-0 border rounded-xl text-gray-600 text-sm placeholder:text-gray-400 placeholder:font-light' onChange={(e)=>searchFunction(e)} />
     
        {items.length==0 && searchValue && 
        
        <p className='text-sm text-gray-600'>no products found :(</p>

        }
          

        {items.length>0 && 

          <div className='flex flex-col max-h-[50vh]  gap-5 w-full items-center text-base  overflow-y-auto'>
            {items.map(item=>(
              <a
              key={item.id}
              href={`/collection/${item.id}`} 
              className='flex hover:bg-gray-300/10  items-center p-3 w-full border-b justify-between'>
                <div className='flex flex-col  gap-3'>
                <p>{item.title}</p>
                {
                  
                    item.onSale ?
                    <div className='flex  items-center gap-4 md:gap-6 text-sm '>
                      <p className='line-through text-gray-600'>$ {parseFloat(item.price).toFixed(2)}</p>
                      <p className='text-red-700'>$ {parseFloat(item.newPrice).toFixed(2)}</p>
                      
                    </div>
                     :
                     <p className='text-sm'>$ {item.price}</p>
                  
                }
                </div>
                <img src={item.img} className='w-[70px] h-[100px] rounded-xl' alt="" />
                
              </a>
            ))}
          </div>

      }
    </m.div>
  )
}

export default SearchBar