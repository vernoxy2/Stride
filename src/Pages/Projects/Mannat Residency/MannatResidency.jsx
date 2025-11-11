import React from "react";
// Import Components
import PrimaryHeader from "../../../Components/PrimaryHeader";
import Footer from "../../../Components/Footer";
// Import Primary Components
import PrimaryFeatures from "../Components/PrimaryFeatures";
import PrimaryDescription from "../Components/PrimaryDescription";
import PrimaryAmenities from "../Components/PrimaryAmenities";
import PrimaryMedia from "../Components/PrimaryMedia";
import PrimaryLocation from "../Components/PrimaryLocation";
// Import Images
import Logo from "../../../assets/MannatLogo.svg";
import Head from "../../../assets/ProjectPage/Mannat/PNG/MannatHead.png";
import Foot from "../../../assets/ProjectPage/Mannat/PNG/MannatFoot.png";
import Hoding from "../../../assets/ProjectPage/Mannat/PNG/HodingImg.png";
// Import Media images
import { MannatMedia } from "../../../Data/MannatData/MannatMedia";

// Import Mannat Data
import { MannatAmenitiesList } from "../../../Data/MannatData/MannatAmenitiesList";
import { MannatKeyDetailsList } from "../../../Data/MannatData/MannatKeyDetailsList";
import { MannatFeaturesList } from "../../../Data/MannatData/MannatFeaturesList";

const projectDescription = `Located opposite Vastu Vila on Hasot Road, Ankleshwar, Orange City offers thoughtfully designed residential spaces with modern construction standards and premium finishes. The project features earthquake-resistant RCC frame structures, ensuring safety and durability.`;

const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1532.4935549157722!2d73.00077447576817!3d21.621094103448577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023003a25ed0b%3A0x671dffce73280a66!2sMannat%20Residency!5e1!3m2!1sen!2sin!4v1762840068368!5m2!1sen!2sin";
const MannatResidency = () => {
  return (
    <div>
      <PrimaryHeader title="Mannat Residency" backgroundImage={Head} />
      <section
        className="bg-bg relative
  before:absolute before:h-10 before:w-full before:bg-bg before:-top-10 before:content-[''] before:rounded-t-[66px]
  after:absolute after:h-10 after:w-full after:bg-bg after:-bottom-10 after:content-[''] after:rounded-b-[66px] after:z-[1]"
      >
        <PrimaryFeatures
          data={MannatFeaturesList}
          projectName="Mannat Residency"
          address={
            <>
              Behind Decent Hotel, <br /> Nr. GIDC Bus Station, Ankleshwar,
              Gujarat.
            </>
          }
          image={Hoding}
        />
        <PrimaryDescription
          data={MannatKeyDetailsList}
          description={projectDescription}
        />
        <PrimaryAmenities data={MannatAmenitiesList} />
        <PrimaryMedia data={MannatMedia} />
        <PrimaryLocation
          logo={Logo}
          locationDetails={
            <>
              <span className="text-stride">Mannat Residency,</span> <br />
              Behind Decent Hotel, <br />
              Nr. GIDC Bus Station, <br /> Ankleshwar, Gujarat.
            </>
          }
          mapSrc={mapSrc}
        />
      </section>
      <Footer backgroundImage={Foot} />
    </div>
  );
};

export default MannatResidency;
