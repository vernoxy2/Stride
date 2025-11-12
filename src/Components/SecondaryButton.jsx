import React from 'react';

const SecondaryButton = ({ children, className = "" }) => {
  return (
    <button className={`bg-secondary text-white text-xl px-4 py-2 rounded-3xl mx-auto hover:bg-stride duration-300 transition-colors ${className}`}>
      {children}
    </button>
  );
};

export default SecondaryButton;
