import React, { useEffect, useState } from 'react'
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa'
import ProductCard from './ProductCard'
import Loading from '../components/Loading'



const FilterProducts = () => {

  
  

    const [size,setSize]=useState('all')
    const [priceRange,setPriceRange]=useState('normal')
    const [filteredProducts,setFilteredProducts]=useState([]);
    
    
    const [loading,setLoading]=useState(false);

      

    useEffect(()=>{
      
      sortProducts();
      console.log('sorted')
      
      

    },[size,priceRange])

    

    const sortProducts=async()=>{

      setLoading(true);
      try{
        const res=await fetch(`https://ali-mobile.000webhostapp.com/filterProducts.php?size=${size}&price=${priceRange}`);

        setFilteredProducts(await res.json());
        setLoading(false);
      }catch(err){
        console.log(err)
      }
      
        
      }
      


    
     

      

    
    
  return (
    <div className='flex flex-col items-center gap-2'>
      
   
    
    <div className=' flex items-center text-xs md:text-sm gap-2  '>
        
    <button className={` flex items-center text-gray-600 p-2 rounded-full  ${priceRange=='normal' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`} onClick={()=>{setPriceRange('normal')}}>$  </button>
        <button className={` flex items-center text-gray-600 p-2 rounded-full  ${priceRange=='desc' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`} onClick={()=>{setPriceRange('desc')}}>$ <FaLongArrowAltDown /> <FaLongArrowAltUp /> </button>
        <button className={` flex items-center text-gray-600 p-2 rounded-full  ${priceRange=='asc' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`} onClick={()=>setPriceRange('asc')}>$  <FaLongArrowAltUp/> <FaLongArrowAltDown/></button>

        <button className={` p-2 rounded-full  ${size=='sm' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`} onClick={()=>setSize('sm')}>sm</button>
        <button className={` p-2 rounded-full ${size=='md' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`}  onClick={()=>setSize('md')}>md</button> 
        <button className={` p-2 rounded-full  ${size=='lg' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`}  onClick={()=>setSize('lg')}>lg</button>
        <button className={` p-2 rounded-full  ${size=='xl' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`}  onClick={()=>setSize('xl')}>xl</button>
        <button className={` p-2 rounded-full  ${size=='all' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`}  onClick={()=>setSize('all')}>all</button>
        
        </div>
        
        <div>
      {loading ?<div className='h-[40vh] items-center justify-center flex'><Loading/></div>: 
    <div className=' grid grid-cols-2 gap-3 gap-y-5 sm:grid-cols-3 lg:grid-cols-4 md:px-5'>
          {
            filteredProducts.map((prod)=>
            
            <ProductCard key={prod.id} product={prod}/>
                        )
           }
        </div>
}
</div>
    </div>
  )
}

export default FilterProducts