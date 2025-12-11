import React, { useState, useEffect } from "react";
import Header from "./Sections/Header";
import WhoWeAre from "./Sections/WhoWeAre";
import Commitment from "./Sections/Commitment";
import PeopalSay from "./Sections/PeopalSay";
import Enquiry from "./Sections/Enquiry";
import Footer from "../../Components/Footer";
import ProOverview from "./Sections/ProOverview";
import OurProjects from "./Sections/OurProjects";
import Popup from "../../Components/Popup";
import PopupImg from "../../assets/HomePage/PNG/HomePopup.png"

const Home = () => {
 const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Check if popup has been shown in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      setShowPopup(true);
      sessionStorage.setItem("hasSeenPopup", "true"); // Mark as seen for this session
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Header />

      {/* Popup */}
      {showPopup && (
        <Popup closePopup={closePopup} PopupImg={PopupImg} BtnText="Book a Free Visit" />
      )}

      <section
        className="relative space-y-20 py-10 md:py-14 lg:py-20 bg-bg
                   before:absolute before:h-12 before:w-full before:bg-bg before:-top-12 before:content-[''] before:rounded-t-[33px] before:md:rounded-t-[66px]
                   after:absolute after:h-12 after:w-full after:bg-bg after:-bottom-12 after:content-[''] after:rounded-b-[33px] after:md:rounded-b-[66px] after:z-[1]"
      >
        <WhoWeAre />
        <OurProjects />
        <Commitment />
        <PeopalSay />
        <Enquiry />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
