import React from 'react'
export const products=[
    
        { 'id':1,'img':"https://images.unsplash.com/photo-1509946458702-4378df1e2560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D",'title':"winter hoodie",'price':42.5,'newPrice':35,'colors':['red','blue','black'],'sizes':['sm','md','lg','xl'],'featured':true,'onSale':true,'out_of_stock':true},

        {'id':2,'img':"https://media.istockphoto.com/id/1456145436/photo/full-length-portrait-of-a-guy-with-curly-hair-carrying-a-backpack-and-posing.webp?b=1&s=170667a&w=0&k=20&c=ES5mUXV0BIrF0it8T10nR5vrkVmbMGBGZunavQMNCMg=",'title':"blue jeans",'price':10,'newPrice':35,'colors':['red','purple','black'],'sizes':['sm','m','l','xl'],'featured':true,'onSale':true,'out_of_stock':false},

        {'id':3,'img':"https://images.unsplash.com/photo-1635796244808-d93b6e26de62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D",'title':"T-shirt",'price':30,'newPrice':35,'colors':['red','white','black'],'sizes':['s','m','l','xl'],'featured':true,'onSale':false,'out_of_stock':false},
        {'id':4,'img':"https://images.unsplash.com/photo-1512977141980-8cc662e38a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D",'title':"blouse",'price':50,'newPrice':35,'colors':['red','white','black'],'sizes':['s','m','l','xl'],'featured':false,'onSale':true,'out_of_stock':false},
        {'id':5,'img':"https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8fDB8fHww",'title':"spring pyjama",'price':8,'newPrice':35,'colors':['red','white','black'],'sizes':['s','m','l','xl'],'featured':false,'onSale':false,'out_of_stock':false},
        {'id':6,'img':"https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoaW5nfGVufDB8fDB8fHww",'title':"summer hoodie",'price':60,'newPrice':35,'colors':['red','white','black'],'sizes':['s','m','l','xl'],'featured':true,'onSale':false,'out_of_stock':false},
        {'id':7,'img':"https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoaW5nfGVufDB8fDB8fHww",'title':"brown jacket",'price':76.3,'newPrice':35,'colors':['red','white','black'],'sizes':['s','m','l'],'featured':false,'onSale':false,'out_of_stock':false},
        

       
    
]
const ProductCard = ({product}) => {
    
  return (
    <a href={`/collection/${product.id}`} className={`bg-white flex flex-col shadow-lg p-3  rounded-lg gap-3 max-w-[200px] md:max-w-[220px] hover:bg-gray-50  ${product.out_of_stock && 'opacity-80 -z-10'}`}>
        <img src={product.img} alt=""  className=' h-full w-full  rounded-lg self-center min-h-[200px] md:min-h-[250px] min-w-[140px]'/>
        {product.out_of_stock && 
         <p className='absolute my-2 mx-1  bg-black text-white p-1 rounded-xl text-xs'>out of stock</p>
        }
       
        <h2 className='font-bold'>{product.title}</h2>
        {
          product.onSale ?
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