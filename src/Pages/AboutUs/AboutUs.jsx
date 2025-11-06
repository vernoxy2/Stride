import React from 'react'
// import Footer from "./Sections/Footer";
import Footer from "../../Components/Footer";
import FooterData from "../../Components/FooterData";
import Head from "../../assets/AboutPage/PNG/AboutHead.png"
import PrimaryHeader from '../../Components/PrimaryHeader';

const AboutUs = () => {
  return (
    <div className="">
      <PrimaryHeader title="About Us" backgroundImage={Head} />
      
      
      <Footer/>
    </div>
  )
}

export default AboutUs
