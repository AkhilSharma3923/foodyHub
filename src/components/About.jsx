import React from "react";
import { assets } from "../assets/assests";
import Button from "./Button";

const About = () => {
  return (
    <div 
    id="about"
    className="flex flex-col md:flex-row mt-10 md:mt-20 gap-10 md:gap-32 mx-4">
      {/* Right Section (Text) */}
      <div className="right w-full md:w-1/2 h-auto md:h-[65vh]">
        <p className="text-[#6415ff] text-[15px] md:text-[17px] font-medium">Established Since 2014</p>
        <h1 className="text-3xl md:text-5xl font-bold text-[#243e63] mt-4">We've been serving</h1>
        <div className="">
          <h1 className="text-3xl md:text-5xl font-bold text-[#243e63]">
            for
            <div className="relative bg-[#6415ff] inline-block mt-2 md:mt-3 ml-2 md:ml-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white shadow-lg p-2 md:p-4 italic">
                over 5 years.
              </h1>
            </div>
          </h1>
        </div>
        <p className="mt-6 md:mt-8 text-sm md:text-base text-[#243e63]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="mt-6 md:mt-8 mb-8 md:mb-10 text-sm md:text-base text-[#243e63]">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Button text="Latest Offers" />
      </div>

      {/* Left Section (Image) */}
      <div className="left w-full md:w-1/2 h-[40vh] md:h-[65vh] overflow-hidden">
        <img
          src={assets.food5}
          alt="Delicious Dish"
          className="w-full h-full object-cover rounded-[20px] md:rounded-[50px] transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default About;