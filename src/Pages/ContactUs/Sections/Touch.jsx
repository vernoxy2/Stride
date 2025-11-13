import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton";
import OrangeCity from "../../../assets/Contactpage/SVG/OrangeCity.svg";
import Mannat from "../../../assets/Contactpage/SVG/Mannat.svg";

const Touch = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Contact Form */}
        <div className="rounded-3xl space-y-5">
          <h1 className="text-stride font-helvetica ">Get In Touch</h1>

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

            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-5 pt-16">
              <div
                data-aos="fade-right"
                style={{
                  backgroundImage: `url(${Mannat})`,
                }}
                className="w-full h-[90px] bg-cover bg-center bg-no-repeat rounded-full"
              ></div>

              <div
                data-aos="fade-left"
                style={{
                  backgroundImage: `url(${OrangeCity})`,
                }}
                className="w-full h-[90px] bg-cover bg-center bg-no-repeat rounded-full"
              ></div>
            </div>
          </form>
        </div>

        {/* Right Column - Google Map */}
        <div className="w-full min-h-[400px] h-full">
          <iframe
            title="Google Map - Garden City Ankleshwar"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d925.0860124923506!2d73.03802368308857!3d21.596411349776336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSurvey%20No-612%2C%20Opposite%20Garden%20City%2C%20Ankleshwar.!5e1!3m2!1sen!2sin!4v1762333372166!5m2!1sen!2sin"
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
