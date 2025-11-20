import React from "react";
import Logo from "../assets/NavLogo.svg";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

const contactdata = [
  {
    id: 1,
    icon: <CiLocationOn />,
    title: "Location",
    info: "Survey No-612, Opposite Garden City, Ankleshwar.",
    link: "https://www.google.com/maps/place/Stride+Reality/@22.9823253,73.0878417,17z/data=!4m6!3m5!1s0x0:0x0!7e2!8m2!3d22.9823253!4d73.0878417",
  },
  {
    id: 2,
    icon: <IoCallOutline />,
    title: "Phone",
    info: "+91 81550 04443",
    link: "tel:+918155004443",
  },
  {
    id: 3,
    icon: <CiMail />,
    title: "Email",
    info: "k2T0o@example.com",
    link: "mailto:k2T0o@example.com",
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
    icon: <FaSquareFacebook />,
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

const Links = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "/about",
  },
];

const ProjectLinks = [
  {
    id: 1,
    title: "Aura",
    link: "/projects/aura-redefine_living",
  },
  {
    id: 2,
    title: "Orange City",
    link: "/projects/orange_city",
  },
  {
    id: 3,
    title: "Mannat Residency",
    link: "/projects/mannat_residency",
  },
];

const FooterData = () => {
  return (
    <section data-aos="fade-up" className="container py-0 overflow-hidden">
      <div className="bg-bg container p-8 md:p-12 rounded-[35px] space-y-2">
        {/* 1st row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-2">
          {/* 1st column */}
          <div className="flex flex-col  gap-5">
            <img src={Logo} alt="Logo" className="w-3/6" />
            <p>
              Building timeless environments that inspire, empower, and redefine
              modern living.
            </p>
            <hr className="h-1 w-[40%] bg-stride" />
          </div>
          {/* 2nd column */}
          <div className=" md:border-l-2 xl:border-x-2 border-stride/20 md:px-8">
            <h2 className=" text-stride font-bold ">Our Projects</h2>
            <ul>
              {ProjectLinks.map((item) => (
                <li key={item.id} className="flex items-start gap-3 py-1">
                  <a
                    href={item.link}
                    className="text-stride text-4xl lg:text-5xl text-start"
                  >
                    <p>{item.title}</p>
                  </a>
                </li>
              ))}
            </ul>
            <h2 className=" text-stride font-bold  mt-3">All Pages</h2>
            <ul className="mb-3">
              {Links.map((item) => (
                <li key={item.id} className="flex items-start gap-3 py-1 ">
                  <a
                    href={item.link}
                    className="text-stride text-4xl lg:text-5xl text-start"
                  >
                    <p>{item.title}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* 3rd column */}
          <div className="flex flex-col items-start gap-3 lg:px-4">
            <h2 className=" text-stride font-bold ps-1.5">Contact Us</h2>
            <ul>
              {contactdata.map((item) => (
                <li key={item.id} className="flex items-start gap-3 py-1 ">
                  <div className="text-stride text-4xl lg:text-5xl text-start">
                    {item.icon}
                  </div>
                  <div className="-space-y-1">
                    <p className="text-stride camlecase ">{item.title}</p>
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
