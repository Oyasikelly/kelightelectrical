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
      "We evaluate your property's electrical system to identify areas vulnerable to power surges.",
  },
  {
    num: 2,
    title: "Surge Protector Selection",
    description:
      "We recommend and provide high-quality surge protection devices tailored to your needs.",
  },
  {
    num: 3,
    title: "Installation",
    description:
      "Our experts install surge protection systems, ensuring optimal placement for maximum protection.",
  },
  {
    num: 4,
    title: "Testing & Maintenance",
    description:
      "We test the installed systems to ensure functionality and provide maintenance guidance.",
  },
];

const clientInfo = [
  {
    img: "/assets/Testimonial5.jpg",
    name: "Emily W.",
    testimonial:
      "The team rewired my entire home with professionalism and care. Highly recommend!",
  },

  {
    img: "/assets/Testimonial3.jpg",
    name: "Mark L.",
    testimonial:
      "Fantastic work! The rewiring was completed quickly, and everything works perfectly.",
  },
];

const SurgeProtection = () => {
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
        style={{ backgroundImage: 'url("/assets/surge-protection-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold mb-4">Surge Protection</h1>
          <p className="text-lg mb-6">
            Protect your home and electronics from unexpected power surges with
            our expert solutions.
          </p>
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact">Get Protected Today</Link>
          </motion.button>
        </div>
      </motion.header>

      {/* Service Overview */}
      <motion.article
        variants={fadeIn}
        className="text-gray-700 space-y-6 mt-8"
      >
        <p>
          Power surges can cause serious damage to your electrical systems and
          devices. Our surge protection services ensure that your home or
          business is safeguarded against voltage spikes, providing peace of
          mind and long-lasting reliability.
        </p>

        {/* Benefits Section */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Our Surge Protection Services?
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
            Protect valuable electronics and appliances from voltage spikes
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
            Prevent costly repairs and system downtime caused by surges
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
            Ensure compliance with electrical safety standards and codes
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
            Don't leave your property unprotected. Contact us today to install
            reliable surge protection systems.
          </p>
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact">Get Protected Today</Link>
          </motion.button>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default SurgeProtection;
