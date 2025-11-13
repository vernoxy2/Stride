import React from "react";
// Components
import PrimaryHeader from "../../Components/PrimaryHeader";
import Footer from "../../Components/Footer";
// Primary Components
import ContactData from "./Sections/ContactData";
import Touch from "./Sections/Touch";
// Assets
import Head from "../../assets/Contactpage/PNG/ContactHead.png";

const ContactUs = () => {
  return (
    <div>
      <PrimaryHeader title="Contact Us" backgroundImage={Head} />
      <section
        className="bg-bg relative
                   before:absolute before:h-12 before:w-full before:bg-bg before:-top-12 before:content-[''] before:rounded-t-[33px] before:md:rounded-t-[66px]
                   after:absolute after:h-12 after:w-full after:bg-bg after:-bottom-12 after:content-[''] after:rounded-b-[33px] after:md:rounded-b-[66px] after:z-[1]"
      >
        <ContactData />
        <div className="py-2" />
        <Touch />
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
