import React from "react";
import Header from "./Sections/Header";
import WhoWeAre from "./Sections/WhoWeAre";
import Commitment from "./Sections/Commitment";
import PeopalSay from "./Sections/PeopalSay";
import Enquiry from "./Sections/Enquiry";
import Footer from "../../Components/Footer";
import Animation from "../../hooks/Animation";
import ProOverview from "./Sections/ProOverview";

const Home = () => {
  return (
    <div>
      <Header />
      <section
        className=" relative space-y-20 py-10 md:py-14 lg:py-20 bg-bg
                   before:absolute before:h-12 before:w-full before:bg-bg before:-top-12 before:content-[''] before:rounded-t-[33px] before:md:rounded-t-[66px]
                   after:absolute after:h-12 after:w-full after:bg-bg after:-bottom-12 after:content-[''] after:rounded-b-[33px] after:md:rounded-b-[66px] after:z-[1]"
      >
        <ProOverview />
        <WhoWeAre />
        <Animation />
        <Commitment />
        <PeopalSay />
        <Enquiry />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
