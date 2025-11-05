import React from "react";
import Logo from "../assets/SVG/NavLogo.svg";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline, IoLogoFacebook } from "react-icons/io5";
import { FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

const contactdata = [
  {
    id: 1,
    icon: <CiLocationOn />,
    title: "Location",
    info: "Survey No-612, Opposite Garden City, Ankleshwar.",
  },
  {
    id: 2,
    icon: <IoCallOutline />,
    title: "Phone",
    info: "+91 81550 04443",
  },
  {
    id: 3,
    icon: <CiMail />,
    title: "Email",
    info: "k2T0o@example.com",
  },
];

const Socialdata = [
  {
    id: 1,
    icon: <FaSquareXTwitter />,
    link: "www.twitter.com",
  },
  {
    id: 2,
    icon: <FaSquareFacebook />
,
    link: "www.facebook.com",
  },
  {
    id: 3,
    icon: <FaSquareInstagram />,
    link: "www.instagram.com",
  },
  {
    id: 4,
    icon: <FaWhatsappSquare />,
    link: "www.whatsapp.com",
  },
];

const FooterData = () => {
  return (
    <section className="container pb-0">
      <div className="bg-bg container p-8 md:p-12 rounded-[35px] space-y-2">
        {/* 1st row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-2">
          {/* 1st column */}
          <div className="flex flex-col justify-between gap-5">
            <img src={Logo} alt="Logo" className="w-3/6" />
            <p>
              Building timeless environments that inspire, empower, and redefine
              modern living.
            </p>
          </div>
          {/* 2nd column */}
          <div className="hidden lg:block border-x-2 border-stride/20"></div>
          {/* 3rd column */}
          <div className="flex flex-col lg:px-4">
            <h2 className="font-bold text-stride">Contact Us</h2>
            <ul>
              {contactdata.map((item) => (
                <li key={item.id} className="flex items-center gap-4 py-2">
                  <div className="text-stride  text-4xl lg:text-5xl">{item.icon}</div>
                  <div className="-space-y-1">
                    <p className="text-stride camlecase font-bold">{item.title}</p>
                    <p>{item.info}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* 2nd row social icons */}
        <div className="flex justify-center items-center">
          {/* <h2 className="font-bold text-stride">Follow Us</h2> */}
          <ul className="flex items-center gap-2 py-2">
            {Socialdata.map((item) => (
              <li key={item.id} className="text-stride text-4xl">
                {item.icon}
              </li>
            ))}
          </ul>
        </div>
        <hr className="bg-stride/20 h-0.5" />
      </div>
    </section>
  );
};

export default FooterData;
