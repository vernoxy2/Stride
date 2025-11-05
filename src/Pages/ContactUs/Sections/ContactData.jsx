import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

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
    <section className="container pb-0">
      <div className="lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ">
        {contactdata.map((item) => (
          <div
            key={item.id}
            className="border-[2px] border-[#D9d9d9] rounded-3xl p-6 flex flex-col justify-around gap-6 lg:gap-10 group hover:border-secondary duration-300 transition-colors"
          >
            <div className="text-stride text-5xl group-hover:-  translate-y-1 duration-300">{item.icon}</div>
            <div>
              <h2 className="text-stride font-bold ">{item.title}</h2>
              <p className="camlecase">{item.info}</p>
            </div>
            <button className="w-full lg:w-10/12 mx-auto bg-secondary hover:bg-stride duration-300 transition-colors rounded-3xl text-white py-1.5 text-lg">
              {item.text}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactData;
