import React, { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import SearchProduct from './SearchProduct';

const SearchBar = () => {
  const [items,setItems]=useState([]);
  const [searchValue,setSearchValue]=useState(false)

  const [loading,setLoading]=useState(false)
  const [products,setProducts]=useState([])
  const fetchProducts=async()=>{
   setLoading(true)
   try{
     
     const res = await fetch('https://ali-mobile.000webhostapp.com/getProducts.php');
      setProducts(await res.json())
      setLoading(false)
   }
   catch(err){
     console.log(err)
   }
 }

 




 useEffect(()=>{
   
   fetchProducts()
   
 },[]) 

    const searchFunction=(e)=>{
     if(e.target.value!=='' || e.target.value){
      setSearchValue(true)
      const newItems = products.filter(product=>product.name.toLowerCase().includes(e.target.value.toLowerCase()));
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
              <SearchProduct item={item} key={item.pid}/>
            ))}
          </div>

      }
    </m.div>
  )
}

export default SearchBar