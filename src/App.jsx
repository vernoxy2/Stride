import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Navbar from "./Components/Navbar";

// Define all pages for project sub-routes
import MannatResidency from "./Pages/Projects/Mannat Residency/MannatResidency";
import OrangeCity from "./Pages/Projects/Orange City/OrangeCity";
import StrideReality from "./Pages/Projects/Aura/Aura";

// Animation Library
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./Pages/Projects/Components/ScrollToTop";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: true,
      delay: 400,
      offset: 150,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/projects">
          <Route path="orange_city" element={<OrangeCity />} />
          <Route path="mannat_residency" element={<MannatResidency />} />
          <Route path="aura-redefine_living" element={<StrideReality />} />
        </Route>

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
