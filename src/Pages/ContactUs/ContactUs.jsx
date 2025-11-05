import React from "react";
import Header from "../../Components/PrimaryHeader";
import Touch from "./Sections/Touch";
import Footer from "../../Components/Footer";
import FooterData from "../../Components/FooterData";
import ContactData from "./Sections/ContactData";
import PrimaryHeader from "../../Components/PrimaryHeader";
import Head from "../../assets/Contactpage/PNG/ContactHead.png";

const ContactUs = () => {
  return (
    <div className="">
      <PrimaryHeader title="Contact Us" backgroundImage={Head} />
      <div className=" px-0 rounded-[50px] md:rounded-[70px] py-10 bg-bg -my-14">
        <ContactData />
        <Touch />
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
