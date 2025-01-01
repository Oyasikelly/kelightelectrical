import Slider from "react-slick";
import {
  FaLightbulb,
  FaWrench,
  FaTools,
  FaBolt,
  FaFan,
  FaPlug,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLightbulb className="text-5xl text-yellow-500" />,
    title: "Lighting Installation",
    description:
      "Expert installation of lighting systems for your home or office.",
    link: "/services/lighting",
  },
  {
    icon: <FaWrench className="text-5xl text-blue-600" />,
    title: "Wiring & Rewiring",
    description:
      "Safe and reliable wiring solutions for any residential or commercial project.",
    link: "/services/wiring",
  },
  {
    icon: <FaTools className="text-5xl text-green-500" />,
    title: "Electrical Maintenance",
    description:
      "Regular maintenance to ensure the safety and efficiency of your electrical systems.",
    link: "/services/maintenance",
  },
  {
    icon: <FaBolt className="text-5xl text-orange-500" />,
    title: "Surge Protection",
    description: "Protect your devices with our high-quality surge protectors.",
    link: "/services/surge-protection",
  },
  {
    icon: <FaFan className="text-5xl text-purple-500" />,
    title: "Fan Installation",
    description: "Efficient and stylish fan installation for any space.",
    link: "/services/fan-installation",
  },
  {
    icon: <FaPlug className="text-5xl text-red-500" />,
    title: "Socket Repairs",
    description:
      "Quick and reliable socket repair services for all your needs.",
    link: "/services/socket-repairs",
  },
];

export default function ServicesSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time interval in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Our Services
      </h2>
      <div className="mt-8">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <a href={service.link}>
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold">{service.title}</h4>
                  <p className="mt-4 text-gray-600">{service.description}</p>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
