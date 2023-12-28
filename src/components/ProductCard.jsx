import React, { useEffect, useState } from 'react'

export const products=[{}]

const ProductCard = ({product}) => {
  const [images,setImages]=useState([])
 
  const fetchImages = async()=>{
   
    

    const res = await fetch(`https://ali-mobile.000webhostapp.com/getImage.php?id=${product.pid}`)
    setImages(await res.json())
    
  }

  useEffect(()=>{
    fetchImages()
  },[product])
  
  

  return (
  
    <a href={`/collection/${product.pid}`} className={`bg-white flex flex-col shadow-lg p-3  rounded-lg gap-3 i max-w-[200px] md:max-w-[220px] hover:bg-gray-50  ${product.quantity<=0 && 'opacity-80 -z-10'}`}>

      <div className='relative self-center'>

      {
        images.length>0 ?<img src={images[0].imageString} alt=""  className=' h-full w-full  rounded-lg self-center  z-0 min-h-[200px]  md:min-h-[250px] max-h-[200px] md:max-h-[250px] min-w-[140px] max-w-[140px] md:min-w-[180px] md:max-w-[180px]'/> : <div className='  h-full w-full  rounded-lg self-center bg-gray-200 z-0 min-h-[200px] md:min-h-[250px] max-h-[200px] md:max-h-[250px] min-w-[140px] max-w-[140px] md:min-w-[180px] md:max-w-[180px]'/>
      }
        
        {product.quantity<=0 && 
         <p className='absolute my-2 mx-1 top-0 bg-black text-white p-1 rounded-xl text-xs'>out of stock</p>
         
        }
         </div>
       
        <h2 className='font-bold'>{product.name}</h2>
        {
          product.onSale==1 ?
          <div className='flex  items-center gap-4 md:gap-6 text-sm '>
            <p className='line-through text-gray-600'>$ {parseFloat(product.price).toFixed(2)}</p>
            <p className='text-red-700'>$ {parseFloat(product.newPrice).toFixed(2)}</p>
            
          </div>
           :
           <p className='text-sm'>$ {parseFloat(product.price).toFixed(2)}</p>
        }
       
        
    </a>
   
  )
}

export default ProductCard