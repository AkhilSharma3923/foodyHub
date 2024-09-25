import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-[#243e63] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and About */}
          <div className="mb-8 md:mb-0">
            <h1 className="text-3xl font-bold italic mb-4">QuickBite.Co</h1>
            <p className="text-sm max-w-sm">
              QuickBite.Co offers the best meals delivered fresh and fast to your doorstep.
              Order now and enjoy delicious meals at the convenience of your home.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row md:gap-20 md:ml-4">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Menu</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul>
                <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className='md:ml-4'> 
            <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
            <p className="text-sm mb-4">
              Get updates on our latest offers and new menu items.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-48 text-gray-900 focus:outline-none"
              />
              <button className="bg-[#6415ff] p-2 text-white hover:bg-[#4a0fd1]">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-between mt-8 border-t-2 border-t-[#243e63]  pt-4 text-center text-[#243e63]">
          <p className="text-sm">© {new Date().getFullYear()} Akhil Sharma. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#6415ff]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#6415ff]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#6415ff]"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
