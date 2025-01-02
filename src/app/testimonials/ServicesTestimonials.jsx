import React from "react";

const ServicesTestimonials = ({ clientImg, clientName, clientTestimonial }) => {
  return (
    <>
      {/* Testimonial 1 */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 flex items-center space-x-6">
        <img
          src={clientImg}
          alt="Testifier 1"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="italic text-gray-600">{clientTestimonial}</p>
          <span className="ml-4 text-gray-800 font-semibold">{clientName}</span>
        </div>
      </div>

      {/* Testimonial 2 */}
      {/* <div className="bg-white shadow-lg rounded-lg p-6 mb-6 flex items-center space-x-6">
        <img
        src="/assets/TestimonialSolar2.jpg"
        alt="Testifier 2"
        className="w-16 h-16 rounded-full object-cover"
        />
        <div>
        <p className="italic text-gray-600">
        "They explained everything clearly and delivered excellent service.
        The system works perfectly!"
        </p>
        <span className="ml-4 text-gray-800 font-semibold">Samuel T.</span>
        </div>
        </div> */}
    </>
  );
};

export default ServicesTestimonials;
