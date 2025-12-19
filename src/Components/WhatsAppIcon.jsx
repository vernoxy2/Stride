import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  const phoneNumber = "918155004443"; // Replace with your number
  const message = "Hi, I want to know more about your services."; // Default message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-4 md:bottom-10 right-4 md:right-10
        bg-[#C09D78] text-white
        p-3 rounded-full
        shadow-lg
        hover:bg-secondary
        active:scale-95
        hover:scale-110
        transition-transform duration-300
        z-40
        flex items-center justify-center
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppIcon;
