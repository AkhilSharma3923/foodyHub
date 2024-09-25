import React from 'react'
import { testimonial } from '../assets/assests'
const Review = () => {
  return (
    <div>
       <h1 className="text-5xl font-bold text-[#243e63] text-center mt-32">
       Customers 
        <div className="relative h-20 bg-[#6415ff] inline-block mt-3 ml-4">
          <h1 className="text-5xl font-bold text-white shadow-lg p-4 italic">Love Us.</h1>
        </div>
      </h1>
      <div className="testimonial-container flex flex-wrap justify-center gap-20 mt-20 mb-32">
      {testimonial.map((item) => (
        <div 
          key={item._id} 
          className='testimonial-card w-60  flex flex-col items-center justify-center p-5 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-[#8265bd2b] rounded-lg'
        >
          <div className='w-[100px] h-[100px] rounded-full flex items-center justify-center bg-zinc-300'>
            <img src={item.image} alt={item.name} className="w-full h-full rounded-full" style={{
              objectFit: 'contain',
            }} />
          </div>
          <p className='mt-5 text-center'>{item.description}</p>
          <h1 className='mt-5 text-center mb-2 text-[#243e63] font-bold text-2xl'>-{item.name}</h1>
        </div>
      ))}
    </div>

    </div>
  )
}

export default Review
