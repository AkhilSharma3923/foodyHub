import React from 'react';
import { assets } from '../assets/assests';
import Button from './Button';

const Choose = () => {
  return (
    <div className="flex flex-col md:flex-row mt-20 gap-10 mx-4">
      {/* Left Section */}
      <div className="left w-full md:w-1/2 h-[60vh] mt-8">
        <h1 className="text-[#6415ff] font-medium">A Reputed Brand</h1>
        <h1 className="text-4xl md:text-5xl mt-3 font-bold text-[#243e63]">
          Why
          <div className="relative h-12 md:h-20 bg-[#6415ff] inline-block mt-3 ml-2 md:ml-4 ">
            <h1 className="text-4xl md:text-5xl font-bold text-white shadow-lg p-2 md:p-4 italic">
              Choose Us ?
            </h1>
          </div>
        </h1>

        <p className="mt-5 mb-5 text-[#243e63] font-regular text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="flex flex-wrap gap-5 mb-7">
          <div className="flex flex-col items-center">
            <h1 className="text-[#243e63] text-xl font-bold">94000+</h1>
            <h1 className="text-[#6415ff] font-semibold">Orders</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[#243e63] text-xl font-bold">11000+</h1>
            <h1 className="text-[#6415ff] font-semibold">Customers</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[#243e63] text-xl font-bold">1500+</h1>
            <h1 className="text-[#6415ff] font-semibold">Chefs</h1>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Button text="Order Now" />
        </div>
      </div>

      {/* Right Section */}
      <div className="right w-full md:w-1/2 h-[60vh] overflow-hidden">
        <img
          src={assets.food2}
          alt="Delicious Sushi Roll"
          className="w-full h-full object-cover rounded-[20px] md:rounded-[50px] transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Choose;
