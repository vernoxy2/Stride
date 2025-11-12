import React from "react";

// Components
import PrimaryHeader from "../../../Components/PrimaryHeader";
import Footer from "../../../Components/Footer";
import PrimaryFeatures from "../Components/PrimaryFeatures";
import PrimaryDescription from "../Components/PrimaryDescription";
import PrimaryAmenities from "../Components/PrimaryAmenities";
import PrimaryMedia from "../Components/PrimaryMedia";
import PrimaryLocation from "../Components/PrimaryLocation";

// Assets
import Head from "../../../assets/ProjectPage/OrangeCity/PNG/OrangeCityHead.png";
import Foot from "../../../assets/ProjectPage/OrangeCity/PNG/OrangeCityFooter.png";
import Hoding from "../../../assets/ProjectPage/OrangeCity/PNG/HodingImg.png";
import Logo from "../../../assets/OrangeLogo.svg";

// Data
import { OrangeFeaturesList } from "../../../Data/OrangeData/OrangeFeaturesList";
import { OrangeKeyDetailsList } from "../../../Data/OrangeData/OrangeKeyDetailsList";
import { OrangeAmenitiesList } from "../../../Data/OrangeData/OrangeAmenitiesList";
import { OrangeMedia } from "../../../Data/OrangeData/OrangeMedia";

const projectDescription = `Located opposite Vastu Vila on Hasot Road, Ankleshwar, Orange City offers thoughtfully designed residential spaces with modern constructionstandards and premium finishes. The project features earthquake-resistant RCC frame structures, ensuring safety and durability.`;

const MapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1099.7535702140315!2d72.98515565285153!3d21.644421604227073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be027e62440c351%3A0x7aa3c296a4bc6ec2!2sOrange%20City!5e1!3m2!1sen!2sin!4v1762839645198!5m2!1sen!2sin";

  const OrangeCity = () => {
  return (
    <div>
      <PrimaryHeader title="Orange City" backgroundImage={Head} />

      <section
        className="bg-bg relative
          before:absolute before:h-12 before:w-full before:bg-bg before:-top-12 before:content-[''] before:rounded-t-[66px]
          after:absolute after:h-12 after:w-full after:bg-bg after:-bottom-12 after:content-[''] after:rounded-b-[66px] after:z-[1]"
      >
        <PrimaryFeatures
          data={OrangeFeaturesList}
          projectName="Orange City"
          address={
            <>
              Opposite Vastu Vila, <br /> Hasot Road, Ankleshwar, Gujarat.
            </>
          }
          image={Hoding}
        />

        <PrimaryDescription
          data={OrangeKeyDetailsList}
          description={projectDescription}
        />

        <PrimaryAmenities data={OrangeAmenitiesList} />

        <PrimaryMedia data={OrangeMedia} />

        <PrimaryLocation
          mapSrc={MapSrc}
          logo={Logo}
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
