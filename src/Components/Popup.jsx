import React from "react";
import { IoCloseCircle } from "react-icons/io5";

const Popup = ({ closePopup, PopupImg, BtnText, onSubmit }) => {
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted:", formData);

  //   setIsSubmitted(true);

  //   // Auto-close popup after 2 seconds
  //   setTimeout(() => {
  //     closePopup();
  //   }, 2000);
  // };
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form Submitted:", formData);

  setIsSubmitted(true);

  // ⬇️ ADD THIS LINE — triggers the PDF download
  onSubmit(formData);  

  setTimeout(() => {
    closePopup();
  }, 2000);
};
      
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div className="bg-white p-2 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full relative">
        
        {/* IMAGE */}
        <div>
          <img
            src={PopupImg}
            alt="Popup"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* CONTENT */}
        <div className="pe-2 relative flex flex-col justify-center">

          {/* IF SUBMITTED → SHOW THANK YOU MESSAGE */}
          {isSubmitted ? (
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-redhat font-semibold text-stride">
                Thank You!
              </h2>
              <p className="text-lg text-secondary">
                Your details have been submitted successfully.
              </p>
              <p className="text-base text-gray-500">
                Closing popup...
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-redhat font-semibold text-stride leading-snug">
                Explore Luxury, Comfort <br />
                & Convenience Across <br />
                Our Projects
              </h2>

              {/* FORM */}
              <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name*"
                  className="py-3 px-4 text-base"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name*"
                  className="py-3 px-4 text-base"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile No*"
                  className="py-3 px-4 text-base"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <button
                  type="submit"
                  className="bg-stride hover:bg-secondary duration-300 transition-colors text-xl font-bold text-white rounded-full py-3 font-helvetica px-4 mt-2 w-full"
                >
                  {BtnText}
                </button>
              </form>
            </>
          )}

          {/* CLOSE BUTTON */}
          {!isSubmitted && (
            <IoCloseCircle
              onClick={closePopup}
              className="absolute top-0 right-0.5 bg-white text-stride hover:text-secondary duration-300 transition-colors rounded-full text-3xl cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
