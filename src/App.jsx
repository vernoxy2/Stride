import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Logo from "./assets/Logo.svg";


// Lazy load pages
const Home = lazy(() => import("./Pages/Home/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./Pages/ContactUs/ContactUs"));
const Sitemap = lazy(() => import("./Pages/Sitemap/Sitemap"));

const MannatResidency = lazy(() =>
  import("./Pages/Projects/Mannat Residency/MannatResidency")
);
const OrangeCity = lazy(() =>
  import("./Pages/Projects/Orange City/OrangeCity")
);
const StrideReality = lazy(() =>
  import("./Pages/Projects/Aura/Aura")
);

// Other components
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./Pages/Projects/Components/ScrollToTop";
import GoToTop from "./Components/GoToTop";
import WhatsAppIcon from "./Components/WhatsAppIcon";
import LazyImage from "./Components/LazyImage";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: true,
      delay: 400,
      offset: 80,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Wrap Routes with Suspense */}
      <Suspense
        fallback={
            <div className="flex flex-col justify-center items-center h-screen text-xl space-y-5">

              <LazyImage src={Logo} alt="" loading="lazy" className="animate-pulse h-1/6"/>
              <p>Loading...</p>

            </div>
          }
      >
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/projects">
            <Route path="orange_city" element={<OrangeCity />} />
            <Route path="mannat_residency" element={<MannatResidency />} />
            <Route
              path="aura-redefine_living"
              element={<StrideReality />}
            />
          </Route>

          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </Suspense>

      {/* Floating Buttons */}
      <WhatsAppIcon />
      <GoToTop />
    </BrowserRouter>
  );
};

export default App;
