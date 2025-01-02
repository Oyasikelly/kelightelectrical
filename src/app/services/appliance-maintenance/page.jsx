"use client";
import React from "react";
// import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
// import Testimonials from "@/app/testimonials/ApplianceMaintenanceTestimonials";
// import { ClientInfoContext } from "@/app/ClientInfoContext";
import ServicesTestimonials from "@/app/testimonials/ServicesTestimonials";
import Link from "next/link";

const HOW_IT_WORKS = [
  {
    num: 1,
    title: "Inspection",
    description:
      "Evaluate the condition of your appliances to identify any underlying issues.",
  },
  {
    num: 2,
    title: "Servicing",
    description:
      "Thorough cleaning, lubrication, and adjustment to ensure smooth operation.",
  },
  {
    num: 3,
    title: "Repairs",
    description:
      "Fix any identified issues with high-quality tools and genuine parts.",
  },
  {
    num: 4,
    title: "Testing",
    description:
      "Test the appliances to confirm they are functioning optimally.",
  },
];

const clientInfo = [
  {
    img: "/assets/testimonialAppliance3.jpg",
    name: "Jane Doe",
    testimonial: "Outstanding service!",
  },

  {
    img: "/assets/TestimonialAppliance2.jpg",
    name: "David M.",
    testimonial:
      "Quick and efficient service! My washing machine and fridge are running like new again.",
  },
];
const ApplianceMaintenance = () => {
  //   const { clientInfo, setClientInfo } = useContext(ClientInfoContext);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section with Overlay Image */}
      <motion.header
        variants={fadeIn}
        className="relative bg-cover bg-center h-96 text-center text-white"
        style={{
          backgroundImage: 'url("/assets/appliance-maintenance-bg.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold mb-4">Appliance Maintenance</h1>
          <p className="text-lg mb-6">
            Expert maintenance to prolong the lifespan of your appliances.
          </p>
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact">Schedule Maintenance</Link>
          </motion.button>
        </div>
      </motion.header>

      {/* Service Overview */}
      <motion.article
        variants={fadeIn}
        className="text-gray-700 space-y-6 mt-8"
      >
        <p>
          Regular appliance maintenance is essential to keep your home running
          smoothly. Our experienced technicians ensure your appliances stay in
          top-notch condition.
        </p>

        {/* Benefits Section */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Our Appliance Maintenance Services?
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <svg
              className="w-6 h-6 text-blue-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Comprehensive servicing for all major home appliances
          </li>
          <li className="flex items-center">
            <svg
              className="w-6 h-6 text-blue-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Preventive care to minimize the risk of breakdowns
          </li>
          <li className="flex items-center">
            <svg
              className="w-6 h-6 text-blue-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Affordable plans for regular maintenance
          </li>
        </ul>

        {/* How It Works Section */}
        <h2 className="text-2xl font-semibold text-gray-800">How It Works</h2>
        <div className="space-y-4">
          {HOW_IT_WORKS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center xl:items-start xl:flex-row gap-2"
            >
              <span className="font-semibold text-lg text-gray-700">
                {item.num}.
              </span>
              <h3 className="font-semibold text-lg text-gray-700">
                {item.title}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="my-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            What Our Clients Say
          </h2>
          {clientInfo.map((client, index) => (
            <div key={index}>
              <ServicesTestimonials
                clientImg={client.img}
                clientName={client.name}
                clientTestimonial={client.testimonial}
              />
            </div>
          ))}
        </div>
        {/* <Testimonials clientInfo={clientInfo} /> */}

        {/* Call to Action Section */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-600 mb-4">
            Extend the lifespan of your appliances with our professional
            maintenance services. Contact us today!
          </p>
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            Schedule Maintenance
          </motion.button>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default ApplianceMaintenance;
