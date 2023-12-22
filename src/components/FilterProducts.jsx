import React, { useEffect, useState } from 'react'
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa'
import ProductCard from './ProductCard'

const FilterProducts = () => {

      const products=[
        
        { 'id':1,'img':"https://images.unsplash.com/photo-1509946458702-4378df1e2560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D",'title':"winter hoodie",'price':42.5,'newPrice':9,'colors':['red','blue','black'],'sizes':['sm','md','lg','xl'],'featured':true,'onSale':true,'out_of_stock':true},

        {'id':2,'img':"https://media.istockphoto.com/id/1456145436/photo/full-length-portrait-of-a-guy-with-curly-hair-carrying-a-backpack-and-posing.webp?b=1&s=170667a&w=0&k=20&c=ES5mUXV0BIrF0it8T10nR5vrkVmbMGBGZunavQMNCMg=",'title':"blue jeans",'price':10,'newPrice':31,'colors':['red','purple','black'],'sizes':['sm','xl'],'featured':true,'onSale':true,'out_of_stock':false},

        {'id':3,'img':"https://images.unsplash.com/photo-1635796244808-d93b6e26de62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D",'title':"T-shirt",'price':30,'newPrice':19,'colors':['red','white','black'],'sizes':['s','sm','lg','xl'],'featured':true,'onSale':false,'out_of_stock':false},
        {'id':4,'img':"https://images.unsplash.com/photo-1512977141980-8cc662e38a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D",'title':"blouse",'price':50,'newPrice':12,'colors':['red','white','black'],'sizes':['s','md','lg'],'featured':false,'onSale':true,'out_of_stock':false},
        {'id':5,'img':"https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8fDB8fHww",'title':"spring pyjama",'price':8,'newPrice':5,'colors':['red','white','black'],'sizes':['lg','xl'],'featured':false,'onSale':false,'out_of_stock':false},
        {'id':6,'img':"https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoaW5nfGVufDB8fDB8fHww",'title':"summer hoodie",'price':60,'newPrice':25,'colors':['red','white','black'],'sizes':['sm','md'],'featured':true,'onSale':false,'out_of_stock':false},
        {'id':7,'img':"https://plus.unsplash.com/premium_photo-1682090778813-3938ba76ee57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoaW5nfGVufDB8fDB8fHww",'title':"brown jacket",'price':76.3,'newPrice':34,'colors':['red','white','black'],'sizes':['md'],'featured':false,'onSale':false,'out_of_stock':false},
        

      

    ]

    const [size,setSize]=useState('all')
    const [priceRange,setPriceRange]=useState('normal')
    const [filteredProducts,setFilteredProducts]=useState([]);
    


      const oldProducts=products.sort((a,b)=>a.id-b.id);

    useEffect(()=>{
      
      sortProducts()
      
      

    },[size,priceRange])

    

    const sortProducts=()=>{

        if(size==='sm'){
          const sized = products.filter((prod)=>prod.sizes.find(a=>a=='sm'))
          sortByPrice(sized)
        }
        else if(size==='md'){
          const sized = products.filter((prod)=>prod.sizes.find(a=>a=='md'))
          sortByPrice(sized)
        }
        else if(size==='lg'){
          const sized = products.filter((prod)=>prod.sizes.find(a=>a=='lg'))
          sortByPrice(sized)
        }
        else if(size==='xl'){
          const sized = products.filter((prod)=>prod.sizes.find(a=>a=='xl'))
          sortByPrice(sized)
        }
        else{
          sortByPrice(products)
        }
       
        
      }
      const sortPriceFunction=(a,b)=>{
        if(a.onSale && b.onSale){
          return a.newPrice-b.newPrice
        }
        else  if(a.onSale && !b.onSale){
          return a.newPrice-b.price
        }
        else  if(!a.onSale && b.onSale){
          return a.price-b.newPrice
        }
        else{
          return a.price-b.price
        }
      }


      const sortByPrice=(prod)=>{
        if(priceRange==='descend'){

          let newProducts=prod.sort((a,b)=>sortPriceFunction(a,b))
          console.log(newProducts)
          setFilteredProducts(newProducts)
          
        
          
          
          
        }
        else if(priceRange==='ascend'){
          let newProducts=prod.sort((a,b)=>sortPriceFunction(a,b)).reverse()
          setFilteredProducts(newProducts)
          
        }
        else if(priceRange==='normal'){
          setFilteredProducts(prod)
        }
      }
     

      

    
    
  return (
    <div className='flex flex-col items-center gap-2'>
      
   
    
    <div className=' flex items-center text-xs md:text-sm gap-2  '>
        
    <button className={` flex items-center text-gray-600 p-2 rounded-full  ${priceRange=='normal' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`} onClick={()=>{setPriceRange('normal')}}>$  </button>
        <button className={` flex items-center text-gray-600 p-2 rounded-full  ${priceRange=='descend' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`} onClick={()=>{setPriceRange('descend')}}>$ <FaLongArrowAltDown /> <FaLongArrowAltUp /> </button>
        <button className={` flex items-center text-gray-600 p-2 rounded-full  ${priceRange=='ascend' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`} onClick={()=>setPriceRange('ascend')}>$  <FaLongArrowAltUp/> <FaLongArrowAltDown/></button>

        <button className={` p-2 rounded-full  ${size=='sm' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`} onClick={()=>setSize('sm')}>sm</button>
        <button className={` p-2 rounded-full ${size=='md' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`}  onClick={()=>setSize('md')}>md</button> 
        <button className={` p-2 rounded-full  ${size=='lg' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`}  onClick={()=>setSize('lg')}>lg</button>
        <button className={` p-2 rounded-full  ${size=='xl' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`}  onClick={()=>setSize('xl')}>xl</button>
        <button className={` p-2 rounded-full  ${size=='all' ? "bg-black text-white hover:bg-black/90":'bg-gray-100 hover:bg-gray-200'}`}  onClick={()=>setSize('all')}>all</button>
        
        </div>
        
    <div className=' grid grid-cols-2 gap-3 gap-y-5 sm:grid-cols-3 lg:grid-cols-4 md:px-5'>
          {
            filteredProducts.map((prod)=>
            
            <ProductCard key={prod.id} product={prod}/>
                        )
           }
        </div>
    </div>
  )
}

export default FilterProducts