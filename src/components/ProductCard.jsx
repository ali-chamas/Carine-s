import React from 'react'
export const products=[
    
        { id:1,img:"https://images.unsplash.com/photo-1509946458702-4378df1e2560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D",title:"winter hoodie",price:'45.00',colors:['red','blue','black'],},

        {id:2,img:"https://media.istockphoto.com/id/1456145436/photo/full-length-portrait-of-a-guy-with-curly-hair-carrying-a-backpack-and-posing.webp?b=1&s=170667a&w=0&k=20&c=ES5mUXV0BIrF0it8T10nR5vrkVmbMGBGZunavQMNCMg=",title:"winter hoodie",price:"45.00",colors:['red','purple','black']},

        {id:3,img:"https://images.unsplash.com/photo-1635796244808-d93b6e26de62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D",title:"winter hoodie",price:'45.00',colors:['red','white','black'],},
        {id:4,img:"https://images.unsplash.com/photo-1512977141980-8cc662e38a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D",title:"winter hoodie",price:'45.00',colors:['red','white','black'],},

       
    
]
const ProductCard = ({product}) => {
    
  return (
    <a href={`/collection/${product.id}`} className='bg-white flex flex-col shadow-lg p-3  rounded-lg gap-3 max-w-[200px] md:max-w-[250px] hover:bg-gray-50'>
        <img src={product.img} alt=""  className=' h-full w-full  rounded-lg self-center'/>
        <h2 className='font-bold'>{product.title}</h2>
        <p>$ {product.price}</p>
        
    </a>
  )
}

export default ProductCard