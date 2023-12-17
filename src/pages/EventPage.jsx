import React from 'react'

const EventPage = () => {

    const event={title:'Merry Christmas' , img:'https://media.istockphoto.com/id/1341867273/photo/festive-christmas-wreath-of-fresh-natural-spruce-branches-with-red-holly-berries-traditional.webp?b=1&s=170667a&w=0&k=20&c=2rdg5uIdr98l5-t_GLnQeTfPqKReve2ofKyuGSZR6aM=',sale:'20% off',fromDate:'20/12/2023' ,endDate:'02/01/2024'}
  return (
    <div className='h-full w-full justify-between flex flex-col md:flex-row p-3 items-center my-5  bg-gray-50 px-5 rounded-xl'>

        <div className='flex flex-col gap-2 items-center'>
            <h1 className='text-6xl lg:text-7xl max-w-[400px]  text-center font-bold'>
            {event.title}
            </h1>
            <h2 className='text-yellow-500 text-2xl lg:text-3xl'>{event.sale}</h2>
            <div className='flex gap-2'>
            <small className=''>{event.fromDate} </small>
            <small>till</small>
            <small> {event.endDate}</small>
            </div>
      
        </div>

        <img src={event.img} className='rounded-3xl  h-[200px] w-[350px] lg:h-[300px] lg:w-[450px]' alt="" />


    </div>
  )
}

export default EventPage