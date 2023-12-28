import React, { useEffect, useState } from 'react'

const SearchProduct = ({item}) => {
    const [images,setImages]=useState([])

    const fetchImages = async()=>{
  
   

        const res = await fetch(`https://ali-mobile.000webhostapp.com/getImage.php?id=${item.pid}`)
        setImages(await res.json())
       
      }
      useEffect(()=>{
   
        
        fetchImages()
      },[item])
      console.log(images)
  return (
    
        <a
              key={item.id}
              href={`/collection/${item.pid}`} 
              className='flex hover:bg-gray-300/10  items-center p-3 w-full border-b justify-between'>
                <div className='flex flex-col  gap-3'>
                <p>{item.name}</p>
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
                {images.length>0 ?
                <img src={images[0].imageString} className='w-[70px] h-[100px] rounded-xl' alt="" />:<div className='w-[70px] h-[100px] rounded-xl bg-gray-200'/>
                }
                
              </a>
    
  )
}

export default SearchProduct