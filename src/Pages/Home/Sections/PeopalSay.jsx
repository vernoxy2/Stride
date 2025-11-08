import React from "react";
import Slider from "react-slick";


const PeopleSay = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    
  };

  const testimonials = [
    {
      text: "Loved working with your team on our basement remodel! Looking forward to partnering again on future projects.",
      name: "Manish Patel",
      role: "Service Provider"
    },
    {
      text: "The team was amazing to work with on our basement remodel! I’m really happy with the results and will absolutely be using them again for future projects!",
      name: "Sarah Lee",
      role: "Homeowner"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-stride/30 to-transparent ">
      <div className="flex flex-col w-full max-w-2xl text-center container mx-auto py-12 px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4 flex">
              <h2 className="font-medium text-stride mb-4">{testimonial.text}</h2>
              <p className="font-medium">{testimonial.name}</p>
              <hr />
              <p className="text-sm font-normal">{testimonial.role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PeopleSay;
