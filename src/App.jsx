import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Projects from "./Pages/Projects/Projects";
import Navbar from "./Components/Navbar";

// Define all pages for project sub-routes
import MannatResidency from "./Pages/Projects/Mannat Residency/MannatResidency";
import OrangeCity from "./Pages/Projects/Orange City/OrangeCity";
import StrideReality from "./Pages/Projects/Aura/Aura";

// Animation Library
import AOS from 'aos';
import 'aos/dist/aos.css';



// Optional: Map navLinks to route components
const navLinks = [
  { id: 1, title: "Home", url: "/", component: <Home /> },
  { id: 2, title: "About Us", url: "/about", component: <AboutUs /> },
  {
    id: 3,
    title: "Projects",
    url: "/projects/stride_reality",
    component: <StrideReality />,
    submenu: [
      { id: 31, title: "Aura", url: "/projects/aura-redefine_living", component: <StrideReality /> },
      { id: 32, title: "Orange City", url: "/projects/orange_city", component: <OrangeCity /> },
      { id: 33, title: "Mannat Residency", url: "/projects/mannat_residency", component: <MannatResidency /> },
    ],
  },
  { id: 4, title: "Contact Us", url: "/contact", component: <ContactUs /> },
];

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: true,
      delay: 400,
      offset: 180
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {navLinks.map((link) => {
          const routes = [
            <Route key={link.id} path={link.url} element={link.component} />,
          ];

          // Add submenu routes if available
          if (link.submenu) {
            link.submenu.forEach((sub) => {
              routes.push(<Route key={sub.id} path={sub.url} element={sub.component} />);
            });
          }

          return routes;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
