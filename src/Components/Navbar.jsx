import React, {  useState } from "react";
import { Link, useLocation } from "react-router-dom";
import nevlogo from "../assets/NavLogo.svg";
import { Menu, X } from "lucide-react"; // icons for mobile menu toggle

const navLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About Us", url: "/about" },
  { id: 3, title: "Projects", url: "/projects" },
  { id: 4, title: "Contact Us", url: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="md:absolute top-5 left-0 w-full z-50">
      <div className="container p-1.5 w-11/12 flex justify-between items-center  bg-white rounded-full">
        <div className="flex items-center gap-8  lg:gap-20">
          {/* Logo */}
          <div>
            <img src={nevlogo} alt="" className="ml-4"/>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.url; // ✅ Check if link matches current page
              return (
                <li key={link.id}>
                  <Link
                    to={link.url}
                    className={`text-xl font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-stride border-b-2 border-stride pb-[01px]"
                        : "text-secondary hover:text-stride"
                    }`}
                  >
                    {link.title}
                  </Link>  
                </li>
              );
            })}
          </ul>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <button className="bg-secondary text-white px-5 py-2 rounded-full hover:bg-stride transition-colors">
            Get In Touch
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#EBF1F3] w-full border-t border-gray-300">
           <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.url;
              return (
                <li key={link.id}>
                  <Link
                    to={link.url}
                    className={`text-lg transition-colors duration-200 ${
                      isActive
                        ? "text-stride font-bold"
                        : "text-secondary hover:text-stride"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
            <li>
              <button className="bg-secondary text-white px-5 py-2 rounded-full hover:bg-stride transition-colors">
            Get In Touch
          </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
