"use client";
import React from "react";
import { motion } from "framer-motion";
import ServicesTestimonials from "@/app/testimonials/ServicesTestimonials";
import Link from "next/link";

const HOW_IT_WORKS = [
  {
    num: 1,
    title: "Assessment",
    description:
      "Evaluate your energy needs and property for optimal solar panel placement.",
  },
  {
    num: 2,
    title: "Design",
    description:
      "Create a customized solar system design tailored to your requirements.",
  },
  {
    num: 3,
    title: "Installation",
    description:
      "Install the solar panels and connect them to your power system.",
  },
  {
    num: 4,
    title: "Activation",
    description:
      "Activate the system and provide you with operational guidance.",
  },
];

const clientInfo = [
  {
    img: "/assets/TestimonialSolar1.jpg",
    name: "Jessica H.",
    testimonial:
      "The solar panel installation was seamless and professional. We're already saving on energy bills!",
  },

  {
    img: "/assets/TestimonialSolar2.jpg",
    name: "Samuel T.",
    testimonial:
      "They explained everything clearly and delivered excellent service. The system works perfectly!",
  },
];

const SolarPanelInstallation = () => {
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
        style={{ backgroundImage: 'url("/assets/solar-installation-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold mb-4">Solar Panel Installation</h1>
          <p className="text-lg mb-6">
            Harness the power of the sun with our expert solar panel
            installation services.
          </p>
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact">Book installation</Link>
          </motion.button>
        </div>
      </motion.header>

      {/* Service Overview */}
      <motion.article
        variants={fadeIn}
        className="text-gray-700 space-y-6 mt-8"
      >
        <p>
          Going solar is a smart investment for your home or business. Our team
          ensures a smooth transition to clean, renewable energy with efficient
          and reliable installations.
        </p>

        {/* Benefits Section */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Our Solar Panel Installation Services?
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
            Expert consultation and tailored designs for your needs
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
            High-quality solar panels and installation materials
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
            Reliable post-installation support and maintenance
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

        {/* Call to Action Section */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-600 mb-4">
            Start saving on energy costs and contribute to a greener future.
            Contact us to install your solar panel system today!
          </p>
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact">Book Installation</Link>
          </motion.button>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default SolarPanelInstallation;
