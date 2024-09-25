import React from "react";
import { foodItems } from "../assets/assests"; // Adjust the path if needed
import Button from "./Button";

const Items = () => {
  return (
    <div 
    id="menu"
    className="mt-16 mb-20 md:mt-80 px-4 lg:px-0">
      {/* Heading and Menu Category Buttons */}
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Heading */}
        <div className="flex items-center text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#243e63]">
            Checkout our
          </h1>
          <div className="relative  lg:h-20 ml-2 lg:ml-4 bg-[#6415ff] inline-block">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white shadow-lg p-2 md:p-3 lg:p-4 italic">
              menu.
            </h1>
          </div>
        </div>

        {/* Menu Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6 lg:mt-0 bg-zinc-200 p-2 rounded-lg">
          <Button text="Starters" />
          <Button text="Main" />
          <Button text="Soup" />
          <Button text="Desserts" />
        </div>
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 mt-10">
        {foodItems.map((item) => (
          <div
            key={item._id}
            className="cart w-full h-80 bg-zinc-100 rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-lg hover:bg-[#f3f4f6] duration-300"
          >
            <div className="w-full h-44 bg-zinc-100 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pl-5 pt-2 pr-2 text-[#243e63]">
              <h1 className="mt-2 text-lg md:text-xl mb-2 font-semibold">
                {item.name}
              </h1>
              <p className="text-sm mb-2">{item.description}</p>
              <h1 className="text-lg md:text-xl font-semibold ">${item.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
