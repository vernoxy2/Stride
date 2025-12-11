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
    submenu: [
      { id: 31, title: "Aura", url: "/projects/aura-redefine_living" },
      { id: 32, title: "Orange City", url: "/projects/orange_city" },
      { id: 33, title: "Mannat Residency", url: "/projects/mannat_residency" },
    ],
  },
  { id: 4, title: "Contact Us", url: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const location = useLocation();

  return (
    <nav className="absolute left-1/2 -translate-x-1/2 top-3 md:top-5 w-full z-50 container">
      <div className="flex justify-between items-center bg-white rounded-full h-full py-2 md:p-1">
        {/* Left side */}
        <div className="flex items-center gap-8 lg:gap-20">
          <Link to="/" className="flex items-center">
            <img src={nevlogo} alt="logo" className="ml-4 h-7 md:h-10" />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8 relative h-full">
            {navLinks.map((link) => {
              const isActive = link.submenu
                ? location.pathname.startsWith("/projects")
                : location.pathname === link.url;

              const hasSubmenu = link.submenu;

              return (
                <li
                  key={link.id}
                  className="relative group"
                  onMouseEnter={() => hasSubmenu && setDesktopDropdown(link.id)}
                  onMouseLeave={() => hasSubmenu && setDesktopDropdown(null)}
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
                    {hasSubmenu && <ChevronDown size={18} />}
                  </Link>

                  {/* Desktop Dropdown */}
                  {hasSubmenu && desktopDropdown === link.id && (
                    <ul className="absolute left-0 top-full m-1 bg-white shadow-lg rounded-xl w-48 py-2">
                      {link.submenu.map((sub) => (
                        <li key={sub.id}>
                          <Link
                            to={sub.url}
                            className="block px-4 py-2 text-secondary hover:bg-gray-100 hover:text-stride"
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

        {/* Desktop CTA */}
        <Link to="/contact" className="hidden md:block">
          <button className="bg-secondary  text-white px-5 py-2 rounded-full hover:bg-stride transition-colors">
            Get In Touch
          </button>
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 bg-stride rounded-xl text-white mr-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} className="" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg w-full rounded-3xl border border-gray-300 shadow-xl mt-1">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => {
              const hasSubmenu = link.submenu;

              // FIXED isActive logic
              const isActive = hasSubmenu
                ? location.pathname.startsWith(link.url) // e.g. "/projects"
                : location.pathname === link.url;

              return (
                <li key={link.id} className="w-full text-center">
                  {hasSubmenu ? (
                    // Toggle submenu
                    <button
                      className={`w-full flex justify-center items-center gap-2 text-lg transition-colors duration-200 ${
                        isActive
                          ? "text-stride font-bold"
                          : "text-secondary hover:text-stride"
                      }`}
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === link.id ? null : link.id
                        )
                      }
                    >
                      {link.title}
                      <ChevronDown size={18} />
                    </button>
                  ) : (
                    // Normal navigation
                    <Link
                      to={link.url}
                      className={`w-full flex justify-center items-center gap-1 text-lg transition-colors duration-200 ${
                        isActive
                          ? "text-stride font-bold"
                          : "text-secondary hover:text-stride"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  )}

                  {/* Submenu (only opens on click — NOT based on pathname) */}
                  {hasSubmenu && mobileDropdown === link.id && (
                    <ul className="flex flex-col items-center mt-2 space-y-2">
                      {link.submenu.map((sub) => (
                        <li key={sub.id}>
                          <Link
                            to={sub.url}
                            className="text-secondary hover:text-stride"
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
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

