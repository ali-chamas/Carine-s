import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard, { products } from '../components/ProductCard'
import Loading from '../components/Loading';


const ProductDetails = () => {
   
    const [product, setProduct] = useState([]);
    const [colors,setColors]=useState([])
    const [sizes,setSizes]=useState([])
    const [images,setImages]=useState([])
    const [imageIndex,setImageIndex]=useState(0)
    const [loading,setLoading]=useState(false)
    const [products,setProducts]=useState([])
    const id=useParams();
  
    const fetchProduct = async()=>{
      setLoading(true)
      try{
        const resProducts=await fetch(`https://ali-mobile.000webhostapp.com/getProduct.php?id=${id.productId}`)
        setProduct(await resProducts.json());
        const resImages=await fetch(`https://ali-mobile.000webhostapp.com/getImage.php?id=${id.productId}`)
        setImages(await resImages.json());
        const resSizes=await fetch(`https://ali-mobile.000webhostapp.com/getSizes.php?id=${id.productId}`)
        setSizes(await resSizes.json());
        const resColors=await fetch(`https://ali-mobile.000webhostapp.com/getColors.php?id=${id.productId}`)
        setColors(await resColors.json());
        const res=await fetch(`https://ali-mobile.000webhostapp.com/getProducts.php`)
        setProducts(await res.json());
        setLoading(false)
      }catch(err){
        console.log(err)
      }
    
      

    }

    useEffect(()=>{
        fetchProduct();
        
        
    },[])
    console.log(products)
    
    
  return (
    
      loading? <div className='h-[80vh]  flex items-center justify-center'><Loading/></div> : 
      product.length>0&&

      <div className='md:min-h-[80vh] flex flex-col gap-10 w-full  h-full mt-5 pb-10 '>

      

      <div className='h-full flex  flex-col  md:items-center md:flex-row gap-5 md:gap-8  '>
       
        <div className=' flex flex-col gap-2 self-center w-full '>
        <img src={images[imageIndex].imageString} className='w-[300px]   border-2  h-[300px] lg:h-[400px] lg:w-[380px] rounded-xl ' alt="" />
        <div className='flex gap-2  items-center '>
          {images?.map((image,i)=>(
           
           <div className=' flex '>
            <img src={image.imageString} key={i} className={`  border-2 rounded-xl h-[50px] w-[50px]  `} alt="" />
            <div className={`absolute ${i==imageIndex? 'bg-pink-900/40 hover:bg-pink-900/30 ':'bg-transparent hover:bg-gray-500/20'} rounded-xl h-[50px] w-[50px]  cursor-pointer z-0`} onClick={()=>setImageIndex(i)}/>
            </div>
          ))}
        </div>
        
        </div> 
        <div className='flex flex-col gap-5 w-full md:border-l border-gray-700 md:px-5'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>{product[0].name}</h1>
        {
          product.onSale==1?
          
          <div className='flex   items-center gap-4 md:gap-6 self-start text-xl font-semibold'>
          <p className='line-through text-gray-600'>$ {parseFloat(product[0].price).toFixed(2)}</p>
          <p className='text-red-700 '>$ {parseFloat(product[0].newPrice).toFixed(2)}</p>
          
        </div>
         :
         <p className='text-xl font-semibold self-start'>$ {parseFloat(product[0].price).toFixed(2)}</p> 
        }
        
       
        <div className='flex lg:text-lg self-start items-center gap-4'>
         <p className=' font-semibold'>sizes:</p>
          {sizes.map((size,i)=>(
            
            <div key={i} className='bg-gray-100 p-2 rounded-2xl w-[30px] lg:w-[40px] text-center '>
              {size.size}
            </div>
          ))}
        </div>
        <div className='lg:text-lg flex self-start items-center gap-4'>
        <p className=' font-semibold'>colors:</p>
          {colors.map((color,i)=>(
            <div key={i} className={`bg-${color.color} bg-${color.color}-600 border-2 h-[30px] p-2 rounded-full w-[30px] lg:w-[40px] lg:h-[40px] text-center text-lg`}>
              
            </div>
          ))}
        </div>

        
        <div className='flex lg:text-lg flex-col self-start  gap-1'>
        <p className=' font-semibold'>Description:</p>
        <p className='text-sm lg:text-base'>{product[0].description}</p>
        </div>
        </div>
      </div>

      <div className='flex flex-col gap-3 '>
          <h1 className='font-semibold text-lg'>You may Also Like: </h1>
          <div className={`flex  gap-5 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 pb-5`}>
            {products.map((prod,i)=>(
              prod.category===product[0].category&&
              prod.pid!=product[0].pid ?
              <ProductCard product={prod} key={i}/>
              :
              prod.pid!=product[0].pid &&
              <ProductCard product={prod} key={i}/>
            ))}
          </div>
      </div>
      </div>
    
        )
}

export default ProductDetails