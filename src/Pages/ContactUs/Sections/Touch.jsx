import React, { useState } from "react";
import PrimaryButton from "../../../Components/PrimaryButton";
import OrangeCity from "../../../assets/Contactpage/SVG/OrangeCity.svg";
import Mannat from "../../../assets/Contactpage/SVG/Mannat.svg";
import Aura from "../../../assets/Contactpage/SVG/Aura.svg";

const projectData = [
  {
    name: "Aura",
    image: Aura,
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d925.0860124923506!2d73.03802368308857!3d21.596411349776336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSurvey%20No-612%2C%20Opposite%20Garden%20City%2C%20Ankleshwar.!5e1!3m2!1sen!2sin!4v1762333372166!5m2!1sen!2sin",
  },
  {
    name: "Mannat",
    image: Mannat,
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1532.4935549157722!2d73.00077447576817!3d21.621094103448577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023003a25ed0b%3A0x671dffce73280a66!2sMannat%20Residency!5e1!3m2!1sen!2sin!4v1762840068368!5m2!1sen!2sin",
  },
  {
    name: "Orange City",
    image: OrangeCity,
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1099.7535702140315!2d72.98515565285153!3d21.644421604227073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be027e62440c351%3A0x7aa3c296a4bc6ec2!2sOrange%20City!5e1!3m2!1sen!2sin!4v1762839645198!5m2!1sen!2sin",
  },
];

const Touch = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Contact Form */}
        <div className="rounded-3xl space-y-5">
          <h1 className="text-stride font-helvetica">Get In Touch</h1>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>

            <input type="email" placeholder="Email" required />
            <textarea
              cols="20"
              rows="6"
              placeholder="Message"
              required
            ></textarea>

            <PrimaryButton>Submit</PrimaryButton>

            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-8 pt-8">
              {projectData.map((project, index) => (
                <div
                  key={project.name}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  style={{
                    backgroundImage: `url(${project.image})`,
                    cursor: "pointer",
                    border:
                      selectedProjectIndex === index
                        ? "3px solid #1B2E3C" // highlight selected
                        : "none",
                  }}
                  className="w-full h-[90px] bg-cover bg-center bg-no-repeat rounded-full"
                  onClick={() => setSelectedProjectIndex(index)}
                ></div>
              ))}
            </div>
          </form>
        </div>

        {/* Right Column - Google Map */}
        <div className="w-full min-h-[400px] h-full">
          <iframe
            title={`Google Map - ${projectData[selectedProjectIndex].name}`}
            src={projectData[selectedProjectIndex].mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-3xl"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Touch;
