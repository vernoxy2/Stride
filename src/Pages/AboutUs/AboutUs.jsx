import React from 'react'
// import Footer from "./Sections/Footer";
import Footer from "../../Components/Footer";
import FooterData from "../../Components/FooterData";
import Head from "../../assets/AboutPage/PNG/AboutHead.png"
import PrimaryHeader from '../../Components/PrimaryHeader';
import PeopleSay from '../Home/Sections/PeopalSay';
import Values from './Sections/Values';
import About from './Sections/About';

const AboutUs = () => {
  return (
    <div className="">
      <PrimaryHeader title="About Us" backgroundImage={Head} />
      {/* <div className=" px-0 rounded-[50px] md:rounded-[70px] py-10 bg-bg -my-14">
      </div> */}
      <About/>
      <Values/>
      <PeopleSay/>
      <Footer/>
    </div>
  )
}

export default AboutUs
