"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    image: "/assets/testimonial1.jpg",
    feedback: "KelightElectrical transformed my workspace with their exceptional wiring service. Highly recommend!",
    role: "Business Owner",
    rating: 5,
  },
  {
    name: "Jane Smith",
    image: "/assets/testimonial2.jpg",
    feedback: "Amazing service! The lighting installation was done perfectly, on time, and within budget.",
    role: "Homeowner",
    rating: 5,
  },
  {
    name: "Samuel Bright",
    image: "/assets/testimonial3.jpg",
    feedback: "Top-notch professionals! I couldn't be happier with the electrical maintenance they provided.",
    role: "Facility Manager",
    rating: 5,
  },
  {
    name: "Maria Green",
    image: "/assets/testimonial4.jpg",
    feedback: "Their attention to detail and customer service is unmatched. Great work on our surge protection!",
    role: "Restaurant Owner",
    rating: 4,
  },
  {
    name: "Chike Okoro",
    image: "/assets/testimonial5.jpg",
    feedback: "Fantastic job with the solar panel installation in my home. Highly skilled team!",
    role: "Homeowner",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="mx-auto w-full max-w-7xl relative pb-10">
      <Slider {...settings} className="testimonial-slider px-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-3 pb-8 pt-4">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col relative mt-6">
              
              {/* Floating Avatar */}
              <div className="absolute -top-8 left-8 w-16 h-16 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.srcset = "";
                    target.src = "https://ui-avatars.com/api/?name=" + testimonial.name + "&background=EBF4FF&color=3B82F6";
                  }}
                />
              </div>

              {/* Quote Icon */}
              <FaQuoteLeft className="absolute top-6 right-6 text-gray-100 text-4xl" />

              <div className="pt-8 flex-1">
                <div className="flex gap-1 mb-4 text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < testimonial.rating ? "opacity-100" : "opacity-30"} />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed italic relative z-10">
                  "{testimonial.feedback}"
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-50">
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-blue-500 text-xs font-medium uppercase tracking-wider mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
