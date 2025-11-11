import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-secondary text-xl text-white rounded-3xl p-2 px-5 flex items-center justify-center group hover:bg-stride duration-700 transition-colors">
      {children}
      <div className="">
        <BsArrowRightShort className="ml-2 bg-white rounded-3xl text-secondary text-2xl group-hover:-rotate-45 duration-700 h-full w-full" />
      </div>
    </button>
  );
};

export default PrimaryButton;
