import React from 'react'
import FooterData from "./FooterData";
import FooterImg from "../assets/Contactpage/PNG/Footer.png"

const Footer = ({height = "600px", backgroundImage = FooterImg}) => {
const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: height,
  };

  return (
    <section style={style} className='bg-secondary relative -z-10'>
      <FooterData />
    </section>
  )
}

export default Footer
