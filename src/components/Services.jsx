import React from 'react'
import data from '../assets/services_data'

const Services = () => {
  return (
    <div id='services'>
      <h1 className="text-5xl text-blue-500 text-center mt-5">MY SERVICES</h1>
      <hr className="w-[150px] bg-blue-500 border-none h-1 mx-auto mt-5" />
      <div className="container flex justify-center gap-12 flex-wrap mt-5 mb-5">
        
            {data.map((item,index)=>{
                return <div key={index} className="card flex bg-white justify-center flex-col flex-wrap gap-8 w-[350px] h-[300px] rounded-xl border-2 shadow-xl p-3 hover:rounded-xl hover:scale-[1.025] duration-300 hover:shadow-[0_2px_0px_2px_skyblue]">
                    <p className='text-gray-500 text-2xl'>{item.s_no}</p>
                    <h1 className='text-blue-900 text-3xl'>{item.s_name}</h1>
                    <p className='text-gray-600 text-xl font-normal	'>{item.s_desc}</p>
                </div>
            })}
      </div>
    </div>
  )
}

export default Services
