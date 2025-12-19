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
        fixed bottom-24 right-10
        bg-green-500 text-white
        p-2 rounded-full
        shadow-lg
        hover:bg-green-600
        hover:scale-110
        transition-transform duration-300
        z-50
        flex items-center justify-center
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppIcon;
