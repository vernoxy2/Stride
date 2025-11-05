import React from "react";
import Header from "./Sections/Header";
import Touch from "./Sections/Touch";
import Footer from "./Sections/Footer";
import FooterData from "../../Components/FooterData";
import ContactData from "./Sections/ContactData";
import Head from "../../assets/Contactpage/PNG/ContactHead.png"

const ContactUs = () => {
  return (
    <div className="">
      <Header title="Contact Us" backgroundImage={Head} />
      <div className=" px-0 rounded-[70px] py-10 bg-bg -my-14">
        <ContactData />
        <Touch />
      </div>
      <Footer>
        <FooterData />
      </Footer>
    </div>
  );
};

export default ContactUs;
