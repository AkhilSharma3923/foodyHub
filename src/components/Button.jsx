import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button 
      className="px-7 py-3 bg-[#6415ff] text-white rounded-md hover:bg-[#4a0fcc] transition-all duration-300" 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
