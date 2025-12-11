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
import Foot from "../../../assets/ProjectPage/Aura/AuraFooter.webp";
import Hoding from "../../../assets/ProjectPage/Aura/HodingImg.png";
import Logo from "../../../assets/Navlogo2.svg";
import PopupImg from "../../../assets/ProjectPage/Aura/AuraPopup.png";

// PDF
import brochure from "../../../assets/ProjectPage/Aura/AuraBrochure.pdf";

// Data
import { OrangeFeaturesList } from "../../../Data/OrangeData/OrangeFeaturesList";
import { AuraAmenitiesList } from "../../../Data/AuraData/AuraAmenitiesList";
import { AuraMedia } from "../../../Data/AuraData/AuraMedia";
import { AuraKeyDetailsList } from "../../../Data/AuraData/AuraKeyDetailsList";
import AutoScroll from "../Components/function";

const projectDescription = `Located opposite Vastu Vila on Hasot Road, Ankleshwar, Orange City offers thoughtfully designed residential spaces with modern constructionstandards and premium finishes. The project features earthquake-resistant RCC frame structures, ensuring safety and durability.`;

const MapSrc =
  "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d925.0860124923506!2d73.03802368308857!3d21.596411349776336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSurvey%20No-612%2C%20Opposite%20Garden%20City%2C%20Ankleshwar.!5e1!3m2!1sen!2sin!4v1762333372166!5m2!1sen!2sin";

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
          brochure={brochure}
          PopupImg={PopupImg}
          projectName="Aura - Redefine Living"
          address={
            <>
              Survey no-612, <br className="hidden md:block" /> opposite
              gardencity, Ankleshwar
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
          MapLink={"https://maps.app.goo.gl/VDJaoPAkutk4nAx5A"}
          mapSrc={MapSrc}
          logo={Logo}
          locationDetails={
            <>
              <span className="text-stride">Stride Reality, </span>{" "}
              <br className="hidden xl:block" /> Survey no-612, opposite{" "}
              <br className="hidden xl:block" /> gardencity, Ankleshwar
            </>
          }
        />
      </section>

      <Footer
        backgroundImage={Foot}
        BoldText={
          <>
            Luxury and Comfort, Perfectly <br className="hidden md:block" />{" "}
            Combined
          </>
        }
        text={
          <>
            Elegance and relaxation come together seamlessly, redefining{" "}
            <br className="hidden md:block" /> the meaning of luxurious living.
          </>
        }
      />
    </div>
  );
};

export default Aura;
