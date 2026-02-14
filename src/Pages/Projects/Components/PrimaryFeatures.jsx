import React from "react";
import { BiSolidDownload } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import Popup from "../../../Components/Popup";
import LazyImage from "../../../Components/LazyImage";

const PrimaryFeatures = ({
  projectName = "",
  address = "",
  data = [],
  image = null,
  ProjectTitle = "",
  brochure = "",
  PDFName = "",
  PopupImg = null,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = brochure;
    link.download = PDFName; // Name of the downloaded file
    link.click();
  };

  const [ShowPopup, setShowPopup] = React.useState(false);

  const handleDownloadClick = () => {
    setShowPopup(true); // Open popup form
    console.log("btn click");
  };

  return (
    <div className="space-y-8 md:space-y-12 overflow-hidden">
      <div className="flex items-center gap-3 w-full">
        <hr className="flex-1 border-t-2 border-stride" />
        <h1 className="md:px-4 ">{ProjectTitle}</h1>
        <hr className="flex-1 border-t-2 border-stride" />
      </div>

      {/* Project Location */}
      <div
        data-aos="fade"
        className="container flex gap-3 items-start text-xl md:text-5xl"
      >
        <CiLocationOn className="text-stride mt-1 text-6xl" />
        <p>
          <span className="text-stride">{projectName} </span>
          {address && <>, {address}</>}
        </p>
      </div>

      {/* Title */}
      {data.length > 0 && (
        <div data-aos="fade-up" className="container space-y-8 md:space-y-12">
          <div className=" space-y-4 md:flex justify-between items-center">
            {" "}
            <h1>Specifications</h1>
            {/* Download btn */}
            <button
              onClick={handleDownloadClick}
              className="flex items-center gap-3 bg-secondary text-secondary p-1.5 pr-5  rounded-full active:bg-stride"
            >
              <BiSolidDownload className="bg-white p-2 text-3xl md:text-4xl lg:text-5xl rounded-full" />
              <p className="text-white text-base md:text-lg lg:text-xl">
                Download Brochure
              </p>
            </button>
          </div>
          <hr className="h-[1.5px] bg-[#d9d9d9]" />
        </div>
      )}

      {/* try */}
      <div className="overflow-hidden container md:px-0">
        <div style={{ animationDuration: '70s' }} className="flex animate-scroll w-fit">
          {[...data, ...data].map((item, index) => (
            <div
              key={item.id + "-" + index}
              className=" mx-1 flex-shrink-0 w-80  lg:w-96 "
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full border border-[#d9d9d9] p-6 flex-shrink-0">
                  <LazyImage
                    src={item.img}
                    alt={item.title}
                    className="w-4 md:w-8 lg:w-12"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-stride text-lg md:text-xl truncate">{item.title}</p>
                  <p className="text-gray-700 text-xs md:text-base lg:text-lg line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Image */}
      {image && (
        <div data-aos="fade" className="container pb-4 md:pb-8">
          <img
            src={image}
            alt={projectName}
            className="w-full object-cover rounded-xl shadow-md"
          />
        </div>
      )}
      {/* 👉 SHOW POPUP WHEN BUTTON IS CLICKED */}
      {ShowPopup && (
        <Popup
          HeadText={"Download the Project Brochure"}
          PopupImg={PopupImg}
          BtnText={"Download Brochure"}
          closePopup={() => setShowPopup(false)}
          onSubmit={handleDownload} // after submit, download brochure
        />
      )}
    </div>
  );
};

export default PrimaryFeatures;
