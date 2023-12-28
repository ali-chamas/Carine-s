import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'

const Featured = () => {

  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(false)

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

 
  return (
    <div id='featured' className='h-full  mb-10 flex flex-col gap-6'>

        <h1 className='font-bold text-2xl  '>
            Featured
        </h1>

          {!loading ? 
          <div className={`flex  gap-5 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 pb-5 h-full`}>
          {products.map((prod,i)=>(
            prod.featured==1&&
            <ProductCard product={prod} key={i}/>
          ))}
        </div>
          :
         <div className='h-full w-full justify-center items-center flex'> <Loading/></div>
          }

        
       
       <a href="/collection" className=' py-2 px-5 lg:text-lg self-center bg-black rounded-lg text-white hover:opacity-90 transition-all duration-150'>Vew Collection</a>



    </div>
  )
}

export default Featured