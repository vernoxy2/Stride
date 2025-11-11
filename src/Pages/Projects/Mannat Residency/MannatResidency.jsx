import React from "react";
import PrimaryHeader from "../../../Components/PrimaryHeader";
import Head from "../../../assets/ProjectPage/Mannat/PNG/MannatHead.png";
import Foot from "../../../assets/ProjectPage/Mannat/PNG/MannatFoot.png";

import Footer from "../../../Components/Footer";
import PrimaryLocation from "../Components/PrimaryLocation";
import Logo from "../../../assets/MannatLogo.svg";
import PrimaryMedia from "../Components/PrimaryMedia";

import Media1 from "../../../assets/ProjectPage/Mannat/Media/Media1.png";
import Media2 from "../../../assets/ProjectPage/Mannat/Media/Media2.png";
import Media3 from "../../../assets/ProjectPage/Mannat/Media/Media3.png";
import Media4 from "../../../assets/ProjectPage/Mannat/Media/Media4.png";
import PrimaryAmenities from "../Components/PrimaryAmenities";

const MannatImages = [Media1, Media2, Media3, Media4];

import Bus from "../../../assets/ProjectPage/OrangeCity/SVG/bus.svg";
import PrimaryDescription from "../Components/PrimaryDescription";
import PrimaryFeatures from "../Components/PrimaryFeatures";

const amenitiesList = [
  {
    id: 1,
    img: Bus,
    title: "Drop of zone",
  },
  {
    id: 2,
    img: Bus,
    title: "Drop of zone",
  },
  {
    id: 3,
    img: Bus,
    title: "Drop of zone",
  },
  {
    id: 4,
    img: Bus,
    title: "Drop of zone",
  },
];

const projectDescription = `
Located opposite Vastu Vila on Hasot Road, Ankleshwar, Orange City
offers thoughtfully designed residential spaces with modern construction
standards and premium finishes. The project features
earthquake-resistant RCC frame structures, ensuring safety and
durability.
`;

const keyDetails = [
  {
    id: 1,
    title: "Prime Location:",
    info: "Opposite Vastu Vila, Hasot Road, Ankleshwar.",
  },
  {
    id: 2,
    title: "Modern Living:",
    info: "Thoughtfully designed homes with premium finishes.",
  },
  {
    id: 3,
    title: "Safety First:",
    info: "Earthquake-resistant RCC frame structure.",
  },
  {
    id: 4,
    title: "Quality Construction:",
    info: "Durable materials and superior workmanship.",
  },
  {
    id: 5,
    title: "Comfort & Convenience:",
    info: "Residences planned for a premium lifestyle.",
  },
];

import Layers from "../../../assets/ProjectPage/Mannat/Features/layers.svg";
import Hoding from "../../../assets/ProjectPage/Mannat/PNG/HodingImg.png";

const featuresList = [
  {
    id: 1,
    img: Layers,
    title: "Flooring",
    desc: "24”×48” vitrified tiles in living, kitchen, and bedrooms.",
  },
  {
    id: 2,
    img: Layers,
    title: "Walls",
    desc: "Acrylic emulsion paint on internal walls for a premium finish.",
  },
  {
    id: 3,
    img: Layers,
    title: "Doors",
    desc: "Main door with teak wood frame and decorative laminate finish.",
  },
  {
    id: 4,
    img: Layers,
    title: "Windows",
    desc: "Powder-coated aluminum sliding windows with mosquito mesh.",
  },
];

const MannatResidency = () => {
  return (
    <div>
      <PrimaryHeader title="Mannat Residency" backgroundImage={Head} />
      <section
        className="bg-bg relative
  before:absolute before:h-10 before:w-full before:bg-bg before:-top-10 before:content-[''] before:rounded-t-[66px]
  after:absolute after:h-10 after:w-full after:bg-bg after:-bottom-10 after:content-[''] after:rounded-b-[66px] after:z-[1]"
      >
        <PrimaryFeatures data={featuresList} projectName="Mannat Residency" address={<>Behind Decent Hotel, <br /> Nr. GIDC Bus Station, Ankleshwar, Gujarat.</>} image={Hoding} />
        <PrimaryDescription data={keyDetails} description={projectDescription} />
        <PrimaryAmenities data={amenitiesList} />
        <PrimaryMedia data={MannatImages} />
        <PrimaryLocation
          logo={Logo}
          locationDetails={
            <>
              <span className="text-stride">Mannat Residency,</span> <br />
              Behind Decent Hotel, <br />
              Nr. GIDC Bus Station, <br /> Ankleshwar, Gujarat.
            </>
          }
          mapSrc={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1532.4935549157722!2d73.00077447576817!3d21.621094103448577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023003a25ed0b%3A0x671dffce73280a66!2sMannat%20Residency!5e1!3m2!1sen!2sin!4v1762840068368!5m2!1sen!2sin"
          }
        />
      </section>
      <Footer backgroundImage={Foot} />
    </div>
  );
};

export default MannatResidency;
