"use client";

import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    image: "/assets/testimonial1.jpg",
    feedback:
      "KelightElectrical transformed my workspace with their exceptional wiring service. Highly recommend!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    image: "/assets/testimonial2.jpg",
    feedback:
      "Amazing service! The lighting installation was done perfectly and on time.",
    rating: 4,
  },
  {
    name: "Samuel Bright",
    image: "/assets/testimonial3.jpg",
    feedback:
      "Top-notch professionals! I couldn't be happier with the electrical maintenance they provided.",
    rating: 5,
  },
  {
    name: "Maria Green",
    image: "/assets/testimonial4.jpg",
    feedback:
      "Their attention to detail and customer service is unmatched. Great work!",
    rating: 4,
  },
  // Add more testimonials as needed
];

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Rating Component
  const Rating = ({ rating }) => {
    const maxStars = 5;

    return (
      <div className="flex justify-center mt-4">
        {Array.from({ length: maxStars }, (_, i) =>
          i < rating ? (
            <FaStar key={i} className="text-yellow-400" />
          ) : (
            <FaRegStar key={i} className="text-gray-400" />
          )
        )}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-4 md:px-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Join our satisfied customers and experience top-tier electrical
          services.
        </p>
      </motion.div>

      {/* Testimonials Slider */}
      <div className="mt-12">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-transform"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="mx-auto rounded-full mb-4 border-4 border-blue-100 shadow-sm"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="mt-4 text-sm text-gray-600 italic">
                  "{testimonial.feedback}"
                </p>
                <Rating rating={testimonial.rating} />
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      {/* View All Testimonials Button */}
      <div className="mt-10 text-center">
        <motion.a
          href="/testimonials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          View All Testimonials
        </motion.a>
      </div>
    </div>
  );
}
