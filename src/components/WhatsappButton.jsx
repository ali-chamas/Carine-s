import React from 'react'
import { AiOutlineWhatsApp} from'react-icons/ai'
const WhatsappButton = () => {
  return (
    <button onClick={()=>window.open('https://wa.me/')} className='fixed m-3 bottom-0 right-0 text-3xl p-2 bg-lime-600 text-white rounded-full shadow-xl '>
        <AiOutlineWhatsApp/>
    </button>
  )
}

export default WhatsappButton
