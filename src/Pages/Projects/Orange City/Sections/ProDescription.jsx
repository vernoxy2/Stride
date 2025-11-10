import React from "react";
import { CiCircleCheck } from "react-icons/ci";

const KeyDetailsList = [
    {
        id:1,
        title:"Prime Location :",
        info:"Opposite Vastu Vila, Hasot Road, Ankleshwar."
    },
    {
        id:2,
        title:"Modern Living :",
        info:"Thoughtfully designed homes with premium finishes."
    },
    {
        id:3,
        title:"Safety First :",
        info:"Earthquake-resistant RCC frame structure."
    },
    {
        id:4,
        title:"Quality Construction : ",
        info:"Durable materials and superior workmanship."
    },
    {
        id:5,
        title:"Comfort & Convenience : ",
        info:"Residences planned for a premium lifestyle."
    },
]

const ProDescription = () => {
  return (
    <div className="container space-y-4 md:space-y-8">
      <h1>Project description</h1>
      <p className="w-[90%]">
        Located opposite Vastu Vila on Hasot Road, Ankleshwar, Orange City
        offers thoughtfully designed residential spaces with modern construction
        standards and premium finishes. The project features
        earthquake-resistant RCC frame structures, ensuring safety and
        durability.
      </p>
      <hr className="h-[1.5px] bg-[#D9D9D9]" />
      <h1>Key Details</h1>
      <ul>
        {KeyDetailsList.map((item) => (
            <li key={item.id} className="flex items-center gap-3 py-2">
            <CiCircleCheck className="text-stride text-4xl"/>
            <div className="flex gap-3">
              <h2 className="text-stride camlecase ">{item.title}</h2>
              <p>{item.info}</p>
            </div>
          </li>
        ))}
      </ul>
        <hr className="h-[1.5px] bg-[#D9D9D9]" />
    </div>
  );
};

export default ProDescription;
