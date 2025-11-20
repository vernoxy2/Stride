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
import Head from "../../../assets/ProjectPage/Aura/AuraHead.png";
import Foot from "../../../assets/ProjectPage/OrangeCity/PNG/OrangeCityFooter.png";
import Hoding from "../../../assets/ProjectPage/Aura/HodingImg.png";
import Logo from "../../../assets/OrangeLogo.svg";

// Data
import { OrangeFeaturesList } from "../../../Data/OrangeData/OrangeFeaturesList";
import { AuraAmenitiesList } from "../../../Data/AuraData/AuraAmenitiesList";
import { AuraMedia } from "../../../Data/AuraData/AuraMedia";
import { AuraKeyDetailsList } from "../../../Data/AuraData/AuraKeyDetailsList";
import AutoScroll from "../Components/function";

const projectDescription = `Located opposite Vastu Vila on Hasot Road, Ankleshwar, Orange City offers thoughtfully designed residential spaces with modern constructionstandards and premium finishes. The project features earthquake-resistant RCC frame structures, ensuring safety and durability.`;

const MapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1099.7535702140315!2d72.98515565285153!3d21.644421604227073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be027e62440c351%3A0x7aa3c296a4bc6ec2!2sOrange%20City!5e1!3m2!1sen!2sin!4v1762839645198!5m2!1sen!2sin";


const Aura = () => {
  return (
     <div className="">
      <PrimaryHeader title="" backgroundImage={Head} />

      <section
        className="bg-bg relative
          before:absolute before:h-10 before:w-full before:bg-bg before:-top-10 before:content-[''] before:rounded-t-[66px]
          after:absolute after:h-10 after:w-full after:bg-bg after:-bottom-10 after:content-[''] after:rounded-b-[66px] after:z-[1]"
      >
        <PrimaryFeatures
        ProjectTitle="Aura "
          data={OrangeFeaturesList}
          projectName="Aura - Redefine Living"
          address={
            <>
              Survey no-612, <br /> opposite  gardencity, Ankleshwar
            </>
          }
          image={Hoding}
        />

        {/* <AutoScroll/> */}

        <PrimaryDescription
          data={AuraKeyDetailsList} // OrangeKeyDetailsList}
          description={projectDescription}
        />

        <PrimaryAmenities data={AuraAmenitiesList} />

        <PrimaryMedia data={AuraMedia} />

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
  )
}

export default Aura
