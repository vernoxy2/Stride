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
    link: "https://maps.app.goo.gl/Pv1WgMtDTDQmXaAg9",
    text: "Visit us",
  },
  {
    id: 2,
    icon: <IoCallOutline />,
    title: "Phone",
    info: "+91 81550 04443",
    link: "tel:+918155004443",
    text: "Call Us",
  },
  {
    id: 3,
    icon: <CiMail />,
    title: "Email",
    info: "k2T0o@example.com",
    link: "mailto:k2T0o@example.com",
    text: "Email Us",
  },
];

const ContactData = () => {
  return (
    <div className="container">
      <div className="2xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 ">
        {contactdata.map((item) => (
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            key={item.id}
            className="border-[2px] border-[#D9d9d9] rounded-3xl p-4 lg:p-6 flex flex-col justify-around gap-6 md:gap-3 xl:gap-6 lg:gap-10 group hover:border-secondary duration-300 transition-colors"
          >
            <div className="text-stride text-4xl md:text-5xl group-hover:-translate-y-1  translate-y-1 duration-300">
              {item.icon}
            </div>
            <div>
              <h2 className="text-stride font-bold">{item.title}</h2>
              <p className="camlecase text-lg lg:text-xl ">{item.info}</p>
            </div>
            {/* <button className="w-full lg:w-10/12 mx-auto bg-secondary hover:bg-stride duration-300 transition-colors rounded-3xl text-white py-1.5 text-lg">
              {item.text}
            </button> */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full lg:w-11/12 mx-auto"
            >
              <SecondaryButton className="w-full">{item.text}</SecondaryButton>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactData;
