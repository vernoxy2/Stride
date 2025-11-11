import React from "react";
import PrimaryHeader from "../../../Components/PrimaryHeader";
import Head from "../../../assets/ProjectPage/OrangeCity/PNG/OrangeCityHead.png";
import Foot from "../../../assets/ProjectPage/OrangeCity/PNG/OrangeCityFooter.png";
import Footer from "../../../Components/Footer";
import PrimaryComponent from "../Components/PrimaryLocation";
import Logo from "../../../assets/OrangeLogo.svg";
import PrimaryMedia from "../Components/PrimaryMedia";

import Media1 from "../../../assets/ProjectPage/OrangeCity/PNG/MediaImgs/Media1.png";
import Media2 from "../../../assets/ProjectPage/OrangeCity/PNG/MediaImgs/Media2.png";
import Media3 from "../../../assets/ProjectPage/OrangeCity/PNG/MediaImgs/Media3.png";
import Media4 from "../../../assets/ProjectPage/OrangeCity/PNG/MediaImgs/Media4.png";
import Media5 from "../../../assets/ProjectPage/OrangeCity/PNG/MediaImgs/Media5.png";
import Media6 from "../../../assets/ProjectPage/OrangeCity/PNG/MediaImgs/Media6.png";
import Media7 from "../../../assets/ProjectPage/OrangeCity/PNG/MediaImgs/Media7.png";
import PrimaryAmenities from "../Components/PrimaryAmenities";

const OrangeImages = [Media1, Media2, Media3, Media4, Media5, Media6, Media7];

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
import Hoding from "../../../assets/ProjectPage/OrangeCity/PNG/HodingImg.png";


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

const OrangeCity = () => {
  return (
    <div className="">
      <PrimaryHeader title="Orange City" backgroundImage={Head} />
      <section
        className="bg-bg relative
  before:absolute before:h-10 before:w-full before:bg-bg before:-top-10 before:content-[''] before:rounded-t-[66px]
  after:absolute after:h-10 after:w-full after:bg-bg after:-bottom-10 after:content-[''] after:rounded-b-[66px] after:z-[1]"
      >
        <PrimaryFeatures data={featuresList} projectName="Orange City" address={<>Opposite Vastu Vila, <br /> Hasot Road, Ankleshwar, Gujarat.</>} image={Hoding} />
        <PrimaryDescription data={keyDetails} description={projectDescription} />
        <PrimaryAmenities data={amenitiesList} />
        <PrimaryMedia data={OrangeImages} />
        <PrimaryComponent mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1099.7535702140315!2d72.98515565285153!3d21.644421604227073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be027e62440c351%3A0x7aa3c296a4bc6ec2!2sOrange%20City!5e1!3m2!1sen!2sin!4v1762839645198!5m2!1sen!2sin"} logo={Logo}
          locationDetails={
            <>
              <span className="text-stride">Orange City</span> opposite Vastu
              Vila, <br className="hidden xl:block" /> Hasot Road, Ankleshwar
            </>
          }
        />
      </section>

      <Footer backgroundImage={Foot} />
    </div>
  );
};

export default OrangeCity;
