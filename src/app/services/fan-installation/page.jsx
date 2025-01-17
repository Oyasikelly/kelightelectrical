"use client";
import React from "react";
import { motion } from "framer-motion";
import ServicesTestimonials from "@/app/testimonials/ServicesTestimonials";
import Link from "next/link";

const HOW_IT_WORKS = [
  {
    num: 1,
    title: "Consultation",
    description:
      "Discuss your fan installation needs, including the number and types of fans required.",
  },
  {
    num: 2,
    title: "Preparation",
    description:
      "Ensure the electrical connections and mounting areas are ready for installation.",
  },
  {
    num: 3,
    title: "Installation",
    description:
      "Professionally install your fans, ensuring they are secure and balanced.",
  },
  {
    num: 4,
    title: "Testing",
    description:
      "Test the fans to ensure smooth operation and proper functionality.",
  },
];

const clientInfo = [
  {
    img: "/assets/testimonial5.jpg",
    name: "Sarah T.",
    testimonial:
      "The team did an excellent job installing our ceiling fans. They work flawlessly!",
  },

  {
    img: "/assets/testimonial6.jpg",
    name: "John D.",
    testimonial:
      "Professional and efficient! Our fans were installed in no time. Highly recommended!",
  },
  {
    img: "/assets/testimonial7.jpg",
    name: "Mark Ayo.",
    testimonial:
      "Excellent service! The team was fast, friendly, and did a fantastic job installing our lighting. Very pleased with the results!",
  },
];
const FanInstallation = () => {
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
        style={{ backgroundImage: 'url("/assets/fan-installation-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold mb-4">Fan Installation</h1>
          <p className="text-lg mb-6">
            Reliable and professional ceiling fan installation for your comfort
            and convenience.
          </p>
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact">Schedule Installation</Link>
          </motion.button>
        </div>
      </motion.header>

      {/* Service Overview */}
      <motion.article
        variants={fadeIn}
        className="text-gray-700 space-y-6 mt-8"
      >
        <p>
          Proper ceiling fan installation is essential for your safety and
          comfort. Our experienced team ensures a seamless process, from
          preparing the electrical connections to testing the fan for optimal
          operation.
        </p>

        {/* Benefits Section */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Our Fan Installation Services?
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
            Expert installation for all fan types, including ceiling and
            wall-mounted fans
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
            Secure and balanced mounting to prevent wobbling
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
            Guaranteed satisfaction with functional and visually appealing
            installations
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
            Make your home more comfortable with our professional fan
            installation services. Contact us today!
          </p>
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact">Schedule Installation</Link>
          </motion.button>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default FanInstallation;
