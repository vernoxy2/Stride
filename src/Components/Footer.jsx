import React from "react";
import FooterData from "./FooterData";
import FooterImg from "../assets/Contactpage/PNG/Footer.png";

const Footer = ({ height = "600px", backgroundImage = FooterImg }) => {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: height,
  };

  return (
    <section style={style} className="bg-secondary relative -z-10">
      <h1 className="text-white text-center container font-bold mt-5">
        Where your dream home <br className="hidden md:block" /> becomes reality
      </h1>
      <p className="container text-center text-white lowercase tracking-wide">
        Discover a place where comfort, style, and dreams
         unite{" "} <br className="hidden md:block " /> turning
        your ideal home into reality.
      </p>
      <FooterData />
    </section>
  );
};

export default Footer;
