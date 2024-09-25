import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { cartData } from '../assets/assests';

const Service = () => {
  return (
    <div className="" id='services'>
      <h1 className="text-5xl font-bold text-[#243e63] text-center mt-32">
        Amazing
        <div className="relative h-20 bg-[#6415ff] inline-block mt-3 ml-4">
          <h1 className="text-5xl font-bold text-white shadow-lg p-4 italic">Services.</h1>
        </div>
      </h1>

      <div className='cartcont flex flex-wrap justify-center gap-20 mt-20 mb-32'>
        {cartData.map((item) => (
          <div 
            key={item.id} 
            className='cart w-60 h-64 flex flex-col items-center justify-center p-5 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-[#f3f4f6] rounded-lg'
          >
            <div className='w-[100px] h-[100px] rounded-full flex items-center justify-center bg-zinc-100'>
              <img src={item.image} alt={item.title} className="w-full h-full" style={{
                objectFit: 'contain',
              }} />
            </div>
            <h1 className='mt-5 mb-2 text-[#243e63] font-bold text-2xl'>{item.title}</h1>
            <p className='mb-2 text-center'>{item.description}</p>
            <a href="#" className='flex items-center gap-3 font-medium text-[#6415ff]'>
              {item.linkText}
              <FaArrowRightLong className='mt-1' />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
