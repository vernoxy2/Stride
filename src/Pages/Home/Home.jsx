import React, { useState, useEffect } from "react";
import Header from "./Sections/Header";
import WhoWeAre from "./Sections/WhoWeAre";
import Commitment from "./Sections/Commitment";
import PeopalSay from "./Sections/PeopalSay";
import Enquiry from "./Sections/Enquiry";
import Footer from "../../Components/Footer";
import OurProjects from "./Sections/OurProjects";
import Popup from "../../Components/Popup";
import PopupImg from "../../assets/HomePage/PNG/HomePopup.png";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 200);

    // Show popup only once per session
    if (!sessionStorage.getItem("hasSeenPopup")) {
      setShowPopup(true);
      sessionStorage.setItem("hasSeenPopup", "true");
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Header />
      <section className="relative space-y-20 py-10 md:py-14 lg:py-20 bg-bg
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

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-b-4 border-gray-200"></div>
        </div>
      )}

      {!loading && showPopup && (
        <Popup closePopup={() => setShowPopup(false)} PopupImg={PopupImg} BtnText="Book a Free Visit" />
      )}
    </div>
  );
};

export default Home;
