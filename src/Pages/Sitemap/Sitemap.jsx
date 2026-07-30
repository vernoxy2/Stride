import React from "react";
import { Link } from "react-router-dom";
import PrimaryHeader from "../../Components/PrimaryHeader";
import Footer from "../../Components/Footer";
import Head from "../../assets/Contactpage/PNG/ContactHead.png";
import { useMetaTags } from "../../hooks/useMetaTags";
import {
  FiHome,
  FiInfo,
  FiPhoneCall,
  FiCompass,
  FiMapPin,
  FiMail,
  FiChevronRight,
  FiFileText,
  FiGlobe,
} from "react-icons/fi";
import { FaBuilding, FaTree, FaCity } from "react-icons/fa";

const mainPages = [
  {
    title: "Home",
    description: "Welcome to Stride Realty - Modern nature-inspired living spaces in Ankleshwar.",
    path: "/",
    icon: <FiHome className="text-stride text-xl" />,
  },
  {
    title: "About Us",
    description: "Our story, vision, commitment, and leadership in residential real estate.",
    path: "/about",
    icon: <FiInfo className="text-stride text-xl" />,
  },
  {
    title: "Contact Us",
    description: "Reach out to our team, get site visit assistance, or submit your inquiry.",
    path: "/contact",
    icon: <FiPhoneCall className="text-stride text-xl" />,
  },
  {
    title: "Sitemap",
    description: "Complete visual structure and navigation map of Stride Realty website.",
    path: "/sitemap",
    icon: <FiCompass className="text-stride text-xl" />,
  },
];

const projectPages = [
  {
    title: "Aura - Redefine Living",
    subtitle: "Opposite Garden City, Ankleshwar",
    description: "Elevated living with modern architecture, tranquil open spaces, and premium design.",
    path: "/projects/aura-redefine_living",
    icon: <FaBuilding className="text-stride text-xl" />,
  },
  {
    title: "Orange City",
    subtitle: "Hasot Road, Ankleshwar",
    description: "Refined luxury surrounded by lush greenery, play areas, and wellness spaces.",
    path: "/projects/orange_city",
    icon: <FaTree className="text-stride text-xl" />,
  },
  {
    title: "Mannat Residency",
    subtitle: "Near GIDC Bus Station, Ankleshwar",
    description: "Vibrant community living with modern design, iconic elevation, and top amenities.",
    path: "/projects/mannat_residency",
    icon: <FaCity className="text-stride text-xl" />,
  },
];

const developerLinks = [
  {
    title: "XML Sitemap (For Search Engines)",
    description: "Machine-readable XML sitemap file for Googlebot and crawlers.",
    path: "/sitemap.xml",
    external: true,
    icon: <FiFileText className="text-stride text-xl" />,
  },
  {
    title: "Robots.txt Directives",
    description: "Search engine crawler rules and sitemap indexing directives.",
    path: "/robots.txt",
    external: true,
    icon: <FiGlobe className="text-stride text-xl" />,
  },
];

const Sitemap = () => {
  useMetaTags({
    title: "Sitemap | Stride Realty Ankleshwar",
    description: "Explore the complete visual sitemap of Stride Realty. Easily navigate through our residential projects in Ankleshwar, company information, and contact details.",
    keywords: "Sitemap Stride Realty, Ankleshwar real estate links, site navigation Stride Realty, project index Ankleshwar",
    url: "https://www.striderealty.com/sitemap",
  });

  return (
    <div>
      <PrimaryHeader title="Sitemap" backgroundImage={Head} />

      <section
        className="bg-bg relative py-12 md:py-16 lg:py-20
                   before:absolute before:h-12 before:w-full before:bg-bg before:-top-12 before:content-[''] before:rounded-t-[33px] before:md:rounded-t-[66px]
                   after:absolute after:h-12 after:w-full after:bg-bg after:-bottom-12 after:content-[''] after:rounded-b-[33px] after:md:rounded-b-[66px] after:z-[1]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header Description */}
          <div className="text-center max-w-3xl mx-auto space-y-3" data-aos="fade-up">
            <h2 className="text-stride font-bold font-redhat text-3xl md:text-4xl">
              Website Structure & Navigation
            </h2>
            <p className="text-secondary text-base md:text-lg">
              Explore all pages, residential projects, and official contact channels of Stride Realty Ankleshwar in one place.
            </p>
            <div className="w-24 h-1 bg-stride mx-auto rounded-full mt-2" />
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Pages Card */}
            <div
              data-aos="fade-up"
              className="bg-white rounded-[30px] p-6 md:p-8 border border-stride/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stride/15">
                  <div className="p-3 bg-stride/10 rounded-2xl">
                    <FiCompass className="text-stride text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-secondary font-bold text-xl md:text-2xl font-redhat">
                      Main Pages
                    </h3>
                    <p className="text-stride text-sm">Primary website navigation</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {mainPages.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="group flex items-start gap-4 p-4 rounded-2xl bg-bg/60 hover:bg-stride/10 border border-transparent hover:border-stride/30 transition-all duration-200"
                    >
                      <div className="mt-1 p-2 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-secondary font-bold group-hover:text-stride transition-colors text-base md:text-lg">
                            {item.title}
                          </h4>
                          <FiChevronRight className="text-stride opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-secondary/75 text-xs md:text-sm mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Residential Projects Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white rounded-[30px] p-6 md:p-8 border border-stride/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stride/15">
                  <div className="p-3 bg-stride/10 rounded-2xl">
                    <FaBuilding className="text-stride text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-secondary font-bold text-xl md:text-2xl font-redhat">
                      Our Residential Projects
                    </h3>
                    <p className="text-stride text-sm">Explore luxury living spaces in Ankleshwar</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {projectPages.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="group flex items-start gap-4 p-4 rounded-2xl bg-bg/60 hover:bg-stride/10 border border-transparent hover:border-stride/30 transition-all duration-200"
                    >
                      <div className="mt-1 p-2 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-secondary font-bold group-hover:text-stride transition-colors text-base md:text-lg">
                              {item.title}
                            </h4>
                            <span className="text-stride text-xs font-semibold">
                              {item.subtitle}
                            </span>
                          </div>
                          <FiChevronRight className="text-stride opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-secondary/75 text-xs md:text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Connect With Us Info */}
          <div className="pt-4">
            <div
              data-aos="fade-up"
              className="bg-white rounded-[30px] p-6 md:p-8 border border-stride/20 shadow-md hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stride/15">
                <div className="p-3 bg-stride/10 rounded-2xl">
                  <FiPhoneCall className="text-stride text-2xl" />
                </div>
                <div>
                  <h3 className="text-secondary font-bold text-xl font-redhat">
                    Connect With Us
                  </h3>
                  <p className="text-stride text-xs md:text-sm">Direct contact details & site location</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <a
                  href="https://maps.app.goo.gl/Sqxhzve5pVLM7r9D6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-secondary hover:text-stride transition-colors p-3 rounded-2xl bg-bg/60 hover:bg-stride/10 border border-transparent hover:border-stride/30"
                >
                  <FiMapPin className="text-stride text-xl shrink-0" />
                  <span>Survey No-612, Opposite Garden City, Ankleshwar.</span>
                </a>
                <a
                  href="tel:+919879011576"
                  className="flex items-center gap-3 text-secondary hover:text-stride transition-colors p-3 rounded-2xl bg-bg/60 hover:bg-stride/10 border border-transparent hover:border-stride/30"
                >
                  <FiPhoneCall className="text-stride text-xl shrink-0" />
                  <span>+91 98790 11576</span>
                </a>
                <a
                  href="mailto:striderealty1@gmail.com"
                  className="flex items-center gap-3 text-secondary hover:text-stride transition-colors p-3 rounded-2xl bg-bg/60 hover:bg-stride/10 border border-transparent hover:border-stride/30"
                >
                  <FiMail className="text-stride text-xl shrink-0" />
                  <span>striderealty1@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sitemap;
