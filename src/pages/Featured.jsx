import React from 'react'
import ProductCard, { products } from '../components/ProductCard'


const Featured = () => {
    

  return (
    <div id='featured' className='h-full mb-10 flex flex-col gap-6'>

        <h1 className='font-bold text-2xl  '>
            Featured
        </h1>

      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4'>
      {
        products.map((prod)=>
        prod.featured &&
        <ProductCard key={prod.id} product={prod}/>
        )
        }
      </div>
       
       <a href="/collection" className=' py-2 px-5 lg:text-lg self-center bg-black rounded-lg text-white hover:opacity-90 transition-all duration-150'>Vew Collection</a>



    </div>
  )
}

export default Featured