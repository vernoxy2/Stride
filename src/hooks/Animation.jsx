import React from "react";
import SelectProject from "../Components/SelectProject";
import { projects } from "./../Data/Projects";


const Animation = () => {
  return (
    <>
      <div className="relative">
        {/* <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
          <h2 class="text-4xl font-bold">The Fourth slide</h2>
        </div>
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
          <h2 class="text-4xl font-bold">The Third slide</h2>
          <p class="mt-2">Scroll Up</p>
        </div>
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
          <h2 class="text-4xl font-bold">The Second slide</h2>
          <p class="mt-2">Scroll Up for next slide</p>
        </div>
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
          <h2 class="text-4xl font-bold">The First slide</h2>
          <p class="mt-2">Scroll Up for next slide</p>
        </div> */}
        {projects.map((item) => (
          <SelectProject key={item.id} {...item} />
        ))  }
      </div>

      {/* <script src="https://cdn.tailwindcss.com"></script> */}
    </>
  );
};

export default Animation;
