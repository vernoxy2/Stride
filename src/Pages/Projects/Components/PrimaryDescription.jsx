import React from 'react'
import { CiCircleCheck } from 'react-icons/ci'

const PrimaryDescription = ({data = [], description = "Description"}) => {
  return (
    <div className="container space-y-4 md:space-y-8">
      <h1>Project Description</h1>

      <p className="w-[90%]">{description}</p>

      <hr className="h-[1.5px] bg-[#D9D9D9]" />

      <h1>Key Details</h1>

      <ul>
        {data.map((item) => (
          <li key={item.id} className="flex items-start gap-3 py-2">
            <CiCircleCheck className="text-stride text-4xl shrink-0" />
            <div className="flex flex-col sm:flex-row sm:gap-3">
              <h2 className="text-stride capitalize">{item.title}</h2>
              <p>{item.info}</p>
            </div>
          </li>
        ))}
      </ul>

      <hr className="h-[1.5px] bg-[#D9D9D9]" />
    </div>
  )
}

export default PrimaryDescription
