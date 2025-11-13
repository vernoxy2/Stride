import React from 'react'
import { CiCircleCheck } from 'react-icons/ci'

const PrimaryDescription = ({data = [], description = "Description"}) => {
  return (
    <div className="container space-y-4 md:space-y-8">
      <h1 data-aos="fade-up">Project Description</h1>

      <p data-aos="fade-up" className="w-[90%]">{description}</p>

      <hr className="h-[1.5px] bg-[#D9D9D9]" />

      <h1 data-aos="fade-up">Key Details</h1>

      <ul>
        {data.map((item) => (
          <li data-aos="fade-up" key={item.id} className="flex sm:flex-wrap items-start justify-start gap-4 lg:gap-7 py-2">
            <CiCircleCheck className="text-stride text-4xl " />
            <div className="flex flex-col lg:flex-row lg:gap-3">
              <h2 className="text-stride capitalize font-bold">{item.title}</h2>
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
