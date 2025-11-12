import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import SecondaryButton from "../../../Components/SecondaryButton";

const contactdata = [
  {
    id: 1,
    icon: <CiLocationOn />,
    title: "Location",
    info: "Survey No-612, Opposite Garden City, Ankleshwar.",

    text: "Visit us",
  },
  {
    id: 2,
    icon: <IoCallOutline />,
    title: "Phone",
    info: "+91 81550 04443",
    text: "Call Us",
  },
  {
    id: 3,
    icon: <CiMail />,
    title: "Email",
    info: "k2T0o@example.com",
    text: "Email Us",
  },
];

const ContactData = () => {
  return (
    <div className="container">
      <div className="2xl:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 ">
        {contactdata.map((item) => (
          <div
            key={item.id}
            className="border-[2px] border-[#D9d9d9] rounded-3xl p-4 lg:p-6 flex flex-col justify-around gap-6 lg:gap-10 group hover:border-secondary duration-300 transition-colors"
          >
            <div className="text-stride text-4xl md:text-5xl group-hover:-translate-y-1  translate-y-1 duration-300">{item.icon}</div>
            <div>
              <h2 className="text-stride ">{item.title}</h2>
              <p className="camlecase text-lg lg:text-xl">{item.info}</p>
            </div>
            {/* <button className="w-full lg:w-10/12 mx-auto bg-secondary hover:bg-stride duration-300 transition-colors rounded-3xl text-white py-1.5 text-lg">
              {item.text}
            </button> */}
            <SecondaryButton className="w-full lg:w-11/12">{item.text}</SecondaryButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactData;
