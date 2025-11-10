import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import nevlogo from "../assets/NavLogo.svg";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About Us", url: "/about" },
  { 
    id: 3, 
    title: "Projects", 
    url: "/projects/orange_city",
    submenu: [
      { id: 31, title: "Stride Reality", url: "/projects/stride_reality" },
      { id: 32, title: "Orange City", url: "/projects/orange_city" },
      { id: 33, title: "Mannat Residency", url: "/projects/mannat_residency" },
    ],
  },
  { id: 4, title: "Contact Us", url: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="md:absolute top-5 left-0 w-full z-50">
      <div className="container px-1.5 w-11/12 flex justify-between items-center bg-white rounded-full h-full">
        <div className="flex items-center gap-8 lg:gap-20 ">
          {/* Logo */}
          <div>
            <img src={nevlogo} alt="logo" className="ml-4" />
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8 relative h-full">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.url;
              return (
                <li
                  key={link.id}
                  className="relative group "
                  onMouseEnter={() => link.submenu && setDropdownOpen(link.id)}
                  onMouseLeave={() => link.submenu && setDropdownOpen(null)}
                >
                  <Link
                    to={link.url}
                    className={`flex items-center gap-1 text-xl font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-stride border-b-2 border-stride pb-[1px]"
                        : "text-secondary hover:text-stride"
                    }`}
                  >
                    {link.title}
                    {link.submenu && <ChevronDown size={18} />}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.submenu && dropdownOpen === link.id && (
                    <ul className="absolute left-0 top-full m-1 bg-white shadow-lg rounded-xl w-48 py-2">
                      {link.submenu.map((sub) => (
                        <li key={sub.id}>
                          <Link
                            to={sub.url}
                            className="block px-4 py-2 text-secondary hover:bg-gray-100 hover:text-stride transition-colors"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-secondary text-white px-5 py-1.5 rounded-full hover:bg-stride transition-colors">
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
              const hasSubmenu = !!link.submenu;
              return (
                <li key={link.id} className="w-full text-center">
                  <button
                    className={`w-full flex justify-center items-center gap-2 text-lg transition-colors duration-200 ${
                      isActive
                        ? "text-stride font-bold"
                        : "text-secondary hover:text-stride"
                    }`}
                    onClick={() => {
                      if (hasSubmenu) {
                        setDropdownOpen(dropdownOpen === link.id ? null : link.id);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  >
                    {link.title}
                    {hasSubmenu && <ChevronDown size={18} />}
                  </button>

                  {/* Mobile Submenu */}
                  {hasSubmenu && dropdownOpen === link.id && (
                    <ul className="flex flex-col items-center mt-2 space-y-2">
                      {link.submenu.map((sub) => (
                        <li key={sub.id}>
                          <Link
                            to={sub.url}
                            className="text-secondary hover:text-stride transition-colors"
                            onClick={() => setMenuOpen(false)}
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
