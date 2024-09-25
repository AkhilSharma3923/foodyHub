import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { navbarItems } from "../assets/assests";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-20">
      <div className="flex justify-between items-center p-4 mt-2">
        <div className="left flex items-center gap-1">
          <h1 className="text-3xl font-bold text-[#6415ff]">QuickBite</h1>
          <span className="text-3xl font-bold">.Co</span>
        </div>

        <div className="hidden md:flex">
          <ul className="flex items-center gap-12">
            {navbarItems.map((item) => (
              <li key={item._id} className="group flex flex-col cursor-pointer items-center">
                {item.name === "Sign Up" ? (
                  <>
                    <Button text="Sign Up" />
                    <hr className="invisible hidden group-hover:visible border-[#6415ff] border-[1.5px] transition-all duration-300 w-full mt-1" />
                  </>
                ) : (
                  <>
                    <Link
                      to={item.link} // Use the link from navbarItems
                      smooth={true}
                      duration={500}
                      onClick={toggleMenu} // Close the menu on click
                      className="hover:text-[#6415ff] text-[18px] text-[#243e63]"
                    >
                      {item.name}
                    </Link>
                    <hr className="invisible group-hover:visible border-[#6415ff] border-[1.5px] transition-all duration-300 w-full mt-1" />
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-[#6415ff]">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white md:hidden z-20">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navbarItems.map((item) => (
              <li key={item._id} className="group flex flex-col items-center">
                {item.name === "Sign Up" ? (
                  <Button text="Sign Up" />
                ) : (
                  <Link
                    to={item.link} // Use the link from navbarItems
                    smooth={true}
                    duration={500}
                    onClick={toggleMenu} // Close the menu on click
                    className="hover:text-[#6415ff] text-[18px] text-[#243e63]"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
