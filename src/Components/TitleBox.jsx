import React from 'react'

const TitleBox = ({ title, className = '' }) => (
  <div data-aos="fade-up" className={`flex items-center gap-3 px-6 py-1 border border-stride rounded-full w-fit ${className}`}>
    <div className="bg-stride p-1 rounded-full" />
    <p className="text-stride font-bold ">{title}</p>
  </div>
);

export default TitleBox;




