import React from 'react'

const TitleBox = ({ title, className = '' }) => (
  <div className={`flex items-center gap-3 px-6 py-1 border border-stride rounded-full w-fit ${className}`}>
    <p className="text-stride ">{title}</p>
    <div className="bg-stride p-1 rounded-full" />
  </div>
);

export default TitleBox;




