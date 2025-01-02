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
      "Inspect your faulty sockets to identify the root cause of the problem.",
  },
  {
    num: 2,
    title: "Preparation",
    description:
      "Prepare the necessary tools and parts required for repair or replacement.",
  },
  {
    num: 3,
    title: "Repair",
    description:
      "Fix or replace the damaged sockets, ensuring proper wiring and functionality.",
  },
  {
    num: 4,
    title: "Testing",
    description:
      "Test the repaired sockets to ensure they are safe and fully operational.",
  },
];

const clientInfo = [
  {
    img: "/assets/TestimonialSocket1.jpg",
    name: "Jane R.",
    testimonial:
      "Quick and efficient! They fixed my faulty sockets in no time. Highly recommend!",
  },

  {
    img: "/assets/testimonialSocket2.jpeg",
    name: "Chris T.",
    testimonial:
      "Professional and reliable service. My sockets are now working perfectly!",
  },
];

const SocketRepairs = () => {
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
        style={{ backgroundImage: 'url("/assets/socket-repairs-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold mb-4">Socket Repairs</h1>
          <p className="text-lg mb-6">
            Reliable socket repair services to ensure your safety and
            convenience.
          </p>
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="contact">Schedule Repair</Link>
          </motion.button>
        </div>
      </motion.header>

      {/* Service Overview */}
      <motion.article
        variants={fadeIn}
        className="text-gray-700 space-y-6 mt-8"
      >
        <p>
          Faulty sockets can pose serious risks to your safety. Our team of
          experts ensures thorough repairs to restore functionality while
          adhering to safety standards.
        </p>

        {/* Benefits Section */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Our Socket Repair Services?
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
            Comprehensive inspection to address all issues effectively
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
            Professional and timely repairs for all types of sockets
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
            Guaranteed safety and reliability with each repair
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
            Keep your home or office safe with our expert socket repair
            services. Get in touch with us today!
          </p>
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact">Schedule Repair</Link>
          </motion.button>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default SocketRepairs;
