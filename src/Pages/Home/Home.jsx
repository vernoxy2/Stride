import React from "react";
import Header from "./Sections/Header";
import WhoWeAre from "./Sections/WhoWeAre";
import SelectProject from "./Sections/SelectProject";
import Commitment from "./Sections/Commitment";
import PeopalSay from "./Sections/PeopalSay";
import Enquiry from "./Sections/Enquiry";
import Footer from "../../Components/Footer";
import PrimaryHeader from "../../Components/PrimaryHeader";
import Head from "../../assets/HomePage/PNG/Head.png";
import ProOverview from "./Sections/ProOverview";

const Home = () => {
  return (
    <div>
      {/* Home Page */}
      <Header />
      <div className=" px-0 rounded-[70px]  bg-bg -my-14 py-28">
        <WhoWeAre />
        <SelectProject />
        <Commitment />
        <PeopalSay />
        <Enquiry />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
