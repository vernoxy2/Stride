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
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";

const contactdata = [
  {
    id: 1,
    icon: <CiLocationOn />,
    title: "Location",
    info: "Survey No-612, Opposite Garden City, Ankleshwar.",
    link: "https://maps.app.goo.gl/Sqxhzve5pVLM7r9D6",
  },
  {
    id: 2,
    icon: <IoCallOutline />,
    title: "Phone",
    info: "+91 98790 11576",
    link: "tel:+919879011576",
  },
  {
    id: 3,
    icon: <CiMail />,
    title: "Email",
    info: "striderealty1@gmail.com",
    link: "mailto:striderealty1@gmail.com",
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
    link: "https://www.facebook.com/profile.php?id=61577804857599",
  },
  {
    id: 3,
    icon: <FaSquareInstagram />,
    link: "https://www.instagram.com/striderealty/",
  },
  {
    id: 4,
    icon: <FaWhatsappSquare />,
    link: "https://wa.me/919879011576",
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
      <div className="bg-bg container p-8 pb-4 md:p-12 md:pb-3 rounded-[35px] space-y-2">
        {/* 1st row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-2">
          {/* 1st column */}
          <div className="flex flex-col  gap-5">
            <LazyImage src={Logo} alt="Logo" loading="lazy" className="w-3/6 pointer-events-none" />
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
                  <a href={item.link} target="_blank" className="-space-y-1">
                    <p className="text-stride camlecase ">{item.title}</p>
                    <p>{item.info}</p>
                  </a>
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
              <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" key={item.id} className="text-stride text-4xl">
                {item.icon}
              </a>
            ))}
          </ul>
        </div>
        <hr className="bg-stride/20 h-0.5" />
        <p className="text-center text-primary  mt-auto text-sm">
            © {new Date().getFullYear()} Developed by <a href="https://www.vernoxy.com/" target="_blank">@Vernoxy</a>
          </p>
      </div>
    </section>
  );
};

export default FooterData;
