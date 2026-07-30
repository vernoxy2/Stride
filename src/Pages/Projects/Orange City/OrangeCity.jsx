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
import PopupImg from "../../../assets/ProjectPage/OrangeCity/PNG/OrangePopupImg.png";

// PDF
import brochure from "../../../assets/ProjectPage/OrangeCity/OrangeCity.pdf";

// Data
import { OrangeFeaturesList } from "../../../Data/OrangeData/OrangeFeaturesList";
import { OrangeKeyDetailsList } from "../../../Data/OrangeData/OrangeKeyDetailsList";
import { OrangeAmenitiesList } from "../../../Data/OrangeData/OrangeAmenitiesList";
import { OrangeMedia } from "../../../Data/OrangeData/OrangeMedia";
import Slider from "../Components/SliderMedia";
import SliderMedia from "../Components/SliderMedia";
import { useMetaTags } from "../../../hooks/useMetaTags";

const projectDescription = `Experience refined luxury in Ankleshwar, surrounded by lush greenery, lively play areas, and a dedicated basketball court. A thoughtfully crafted haven offering modern amenities, serene landscapes, and joyful living for every family.`;

const MapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1099.7535702140315!2d72.98515565285153!3d21.644421604227073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be027e62440c351%3A0x7aa3c296a4bc6ec2!2sOrange%20City!5e1!3m2!1sen!2sin!4v1762839645198!5m2!1sen!2sin";

const OrangeCity = () => {
  useMetaTags({
    title: "Orange City | Premium Living Spaces in Ankleshwar by Stride Realty",
    description: "Experience refined luxury at Orange City Ankleshwar. Surrounded by lush greenery, modern amenities, play areas, and serene landscapes for comfortable family living.",
    keywords: "Orange City Ankleshwar, Orange City Stride Realty, luxury homes Hasot Road, flats in Ankleshwar",
    url: "https://striderealty.in/projects/orange_city"
  });

  return (
    <div>
      <PrimaryHeader backgroundImage={Head} />

      <section
        className="bg-bg relative space-y-0
          before:absolute before:h-12 before:w-full before:bg-bg before:-top-12 before:content-[''] before:rounded-t-[66px]
          after:absolute after:h-12 after:w-full after:bg-bg after:-bottom-12 after:content-[''] after:rounded-b-[66px] after:z-[1]"
      >
        <PrimaryFeatures

          brochure={brochure}
          PopupImg={PopupImg}
          PDFName="Orange Brochure.pdf"
          ProjectTitle="Orange City"
          data={OrangeFeaturesList}
          projectName="Orange City"
          address={
            <>
              Opposite Vastu Vila, <br className="hidden md:block" /> Hasot Road, Ankleshwar, Gujarat.
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
        {/* <SliderMedia/> */}

        <PrimaryLocation
          MapLink={"https://maps.app.goo.gl/ft2g2KmnscFzJ7S38"}
          mapSrc={MapSrc}
          logo={Logo}
          locationDetails={
            <>
              <span className="text-stride font-bold">Orange City</span>{" "}
              opposite Vastu Vila, <br className="hidden xl:block" /> Hasot
              Road, Ankleshwar
            </>
          }
        />
      </section>

      <Footer
        backgroundImage={Foot}
        BoldText={
          <>
            Welcome to the home <br className="hidden md:block" /> of your
            dreams.
          </>
        }
        text={
          <>
            discover your dream home-modern, spacious, and inviting{" "}
            <br className="hidden md:block" /> designed for comfort, style, and
            unforgettable memories.
          </>
        }
      />
    </div>
  );
};

export default OrangeCity;
