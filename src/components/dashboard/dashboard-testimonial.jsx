import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Jane Doe",
    feedback:
      "KelightElectrical provided outstanding service! They resolved my issues quickly and professionally. I’m so impressed with their expertise and attention to detail.",
    rating: 5,
    photo: "/assets/testimonial1.jpg",
    title: "Homeowner",
  },
  {
    name: "John Smith",
    feedback:
      "Professional and reliable! The team is exceptional, and their work exceeded my expectations. Highly recommend KelightElectrical for any electrical needs.",
    rating: 4.5,
    photo: "/assets/testimonial2.jpg",
    title: "Business Owner",
  },
  {
    name: "Gidieon M.A",
    feedback:
      "Absolutely phenomenal! KelightElectrical’s service was prompt, and the staff was very courteous. They went above and beyond to ensure everything was perfect.",
    rating: 4,
    photo: "/assets/testimonial3.jpg",
    title: "Facility Manager",
  },
  {
    name: "Bright L.L",
    feedback:
      "Absolutely phenomenal! KelightElectrical’s service was prompt, and the staff was very courteous. They went above and beyond to ensure everything was perfect.",
    rating: 3.5,
    photo: "/assets/testimonial4.jpg",
    title: "Facility Manager",
  },
  {
    name: "Rechael E.A",
    feedback:
      "Absolutely phenomenal! KelightElectrical’s service was prompt, and the staff was very courteous. They went above and beyond to ensure everything was perfect.",
    rating: 5,
    photo: "/assets/testimonial5.jpg",
    title: "Facility Manager",
  },
  {
    name: "James Ayo",
    feedback:
      "Absolutely phenomenal! KelightElectrical’s service was prompt, and the staff was very courteous. They went above and beyond to ensure everything was perfect.",
    rating: 5,
    photo: "/assets/testimonial6.jpg",
    title: "Facility Manager",
  },
  {
    name: "Michael M.M",
    feedback:
      "Absolutely phenomenal! KelightElectrical’s service was prompt, and the staff was very courteous. They went above and beyond to ensure everything was perfect.",
    rating: 5,
    photo: "/assets/testimonial7.jpg",
    title: "Facility Manager",
  },
];

const Testimonial = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 p-8 md:p-16">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">
        Hear from Our Happy Clients
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="p-6 bg-white rounded-lg shadow-xl"
          >
            <div className="relative mb-4">
              <FaQuoteLeft className="text-indigo-200 text-4xl absolute -top-4 -left-4" />
              <p className="relative text-gray-600 italic leading-relaxed z-10">
                {testimonial.feedback}
              </p>
            </div>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4 shadow-md"
              />
              <div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-indigo-500">{testimonial.title}</p>
                <div className="flex text-yellow-400 mt-2">
                  {Array.from({ length: Math.floor(testimonial.rating) }).map(
                    (_, i) => (
                      <FaStar key={i} />
                    )
                  )}
                  {testimonial.rating % 1 !== 0 && <FaStarHalfAlt />}
                  {Array.from({
                    length: 5 - Math.ceil(testimonial.rating),
                  }).map((_, i) => (
                    <FaStar key={`empty-${i}`} className="text-gray-300" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
