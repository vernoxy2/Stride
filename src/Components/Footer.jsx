import React from "react";
import FooterData from "./FooterData";
import FooterImg from "../assets/Contactpage/PNG/Footer.png";

const Footer = ({
  height = "600px",
  backgroundImage = FooterImg,
  BoldText = (
    <>
      Where your dream home <br className="hidden md:block" /> becomes reality
    </>
  ),
  text = (
    <>
      Discover a place where comfort, style, and dreams unite{" "}
      <br className="hidden md:block " /> turning your ideal home into reality.
    </>
  ),
}) => {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: height,
  };

  return (
    <section
      style={style}
      className="bg-secondary pt-28 pb-6 md:pb-10 before:-z-10 relative before:absolute before:content-[''] before:h-10 before:top-0 before:left-0 before:bg-white overflow-hidden"
    >
      <h1 data-aos="fade-up" className="text-white text-center container mt-5">
        {BoldText}
      </h1>
      <p
        data-aos="fade-up"
        className="container text-center text-white camlecase tracking-wide"
      >
        {text}
      </p>
      <FooterData />
    </section>
  );
};

export default Footer;
