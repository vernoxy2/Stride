import React from 'react'
// import Footer from "./Sections/Footer";
import Footer from "../../Components/Footer";
import FooterData from "../../Components/FooterData";
import Head from "../../assets/AboutPage/PNG/AboutHead.png"
import PrimaryHeader from '../../Components/PrimaryHeader';
import PeopleSay from '../Home/Sections/PeopalSay';
import Values from './Sections/Values';
import About from './Sections/About';
import HorizontalScroll from './Sections/function';
import HorizontalScrollComponent from './Sections/function';
import HorizontalScrollContainer from './Sections/function';
import HorizontalScrollFramer from './Sections/function';
import HorizontalImageGallery from './Sections/function';

const AboutUs = () => {
  return (
    <div className="">
      <PrimaryHeader title="About Us" backgroundImage={Head} />
      {/* <div className=" px-0 rounded-[50px] md:rounded-[70px] py-10 bg-bg -my-14">
      </div> */}
      <About/>
      {/* <HorizontalImageGallery/> */}
      <Values/>
      <PeopleSay/>
      <Footer/>
    </div>
  )
}

export default AboutUs
