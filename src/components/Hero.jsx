import React from "react";
import { assets } from "../assets/assests";
import Button from "./Button";
import { PiPlayCircleLight } from "react-icons/pi";

const Hero = ({ isOpen }) => {
  return (
    <div id="home"
      className={`flex flex-col md:flex-row mt-10 md:mt-20 gap-10 mx-4 transition-all duration-300 ${
        isOpen ? "mt-40" : ""
      }`} // Adjust margin if the menu is open
    >
      {/* Left Section */}
      <div className="left w-full md:w-1/2 md:h-[60vh] mt-10 md:mt-20">
        <h1 className="text-3xl md:text-5xl font-bold text-[#243e63]">
          Delicious & Affordable
        </h1>
        <div className="relative  bg-[#6415ff] inline-block mt-3 overflow-hidden">
          <h1 className="text-3xl md:text-5xl font-bold text-white shadow-lg p-3 md:p-4 italic">
            Meals Near You.
          </h1>
        </div>

        <p className="mt-5 mb-5 text-[#243e63] font-regular text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-5 md:gap-10 items-center">
          <Button text="Order Now" />
          <div className="flex items-center gap-2 md:gap-3 text-base md:text-lg cursor-pointer hover:text-[#6415ff] transition-colors duration-300">
            <PiPlayCircleLight className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform duration-300" />
            Meet The Chefs
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right w-full md:w-1/2 h-[40vh] md:h-[60vh] overflow-hidden">
        <img
          src={assets.food8}
          alt="Delicious Sushi Roll"
          className="w-full h-full object-cover rounded-[20px] md:rounded-[50px] transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Hero;
