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
import Logo from "../../../assets/MannatLogo.svg";
import Head from "../../../assets/ProjectPage/Mannat/PNG/MannatHead.png";
import Foot from "../../../assets/ProjectPage/Mannat/PNG/MannatFoot.png";
import Hoding from "../../../assets/ProjectPage/Mannat/PNG/HodingImg.png";
import PopupImg from "../../../assets/ProjectPage/Mannat/PNG/MannatPopupImg.png";

// PDF
import brochure from "../../../assets/ProjectPage/Mannat/MannatBrochure.pdf";

// Data
import { MannatMedia } from "../../../Data/MannatData/MannatMedia";
import { MannatAmenitiesList } from "../../../Data/MannatData/MannatAmenitiesList";
import { MannatKeyDetailsList } from "../../../Data/MannatData/MannatKeyDetailsList";
import { MannatFeaturesList } from "../../../Data/MannatData/MannatFeaturesList";

const projectDescription = `Mannat Residency Ankleshwar delivers vibrant living with modern design, iconic elevation, and joyful amenities, offering a refreshing lifestyle where quality homes elevate comfort, fulfillment, and memorable moments in a welcoming community.`;

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1532.4935549157722!2d73.00077447576817!3d21.621094103448577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023003a25ed0b%3A0x671dffce73280a66!2sMannat%20Residency!5e1!3m2!1sen!2sin!4v1762840068368!5m2!1sen!2sin";

const MannatResidency = () => {
  return (
    <div>
      <PrimaryHeader  backgroundImage={Head} />

      <section
        className="bg-bg relative space-y-0
                   before:absolute before:h-12 before:w-full before:bg-bg before:-top-12 before:content-[''] before:rounded-t-[66px]
                   after:absolute after:h-12 after:w-full after:bg-bg after:-bottom-12 after:content-[''] after:rounded-b-[66px] after:z-[1]"
      >
        <PrimaryFeatures
          ProjectTitle="Mannat Residency"
          brochure={brochure}
          PopupImg={PopupImg}
          PDFName="Mannat Brochure.pdf"
          data={MannatFeaturesList}
          projectName="Mannat Residency"
          address={
            <>
              Behind Decent Hotel, <br className="hidden md:block" /> Nr. GIDC Bus Station, Ankleshwar,
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
        MapLink={"https://maps.app.goo.gl/v71h3R8JMPFQU9Nj9"}
          logo={Logo}
          locationDetails={
            <>
              <span className="text-stride font-bold">Mannat Residency,</span>{" "}
              <br />
              Behind Decent Hotel, <br className="sm:hidden lg:block" />
              Nr. GIDC Bus Station, <br className="hidden lg:block" />
              Ankleshwar, Gujarat.
            </>
          }
          mapSrc={mapSrc}
        />
      </section>

      <Footer
        backgroundImage={Foot}
        BoldText={
          <>
            Elegance meets comfort <br className="hidden md:block" /> in every
            room.{" "}
          </>
        }
        text={
          <>
            {" "}
            Where elegance meets comfort, every room invites warmth, style,{" "}
            <br className="hidden md:block" /> and effortless living for you and
            family.{" "}
          </>
        }
      />
    </div>
  );
};

export default MannatResidency;
