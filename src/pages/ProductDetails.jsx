import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../components/ProductCard'

const ProductDetails = () => {
   
    const [product, setProduct] = useState({});

    const id=useParams();

    useEffect(()=>{
        
        setProduct(products.find((p)=>p.id==id.productId))
    },[])
    
    console.log(product)
  return (
    <div>
       {product&& product.title}
    </div>
  )
}

export default ProductDetails