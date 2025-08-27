"use client";
import React from "react";
import {
	FaLightbulb,
	FaWrench,
	FaTools,
	FaBolt,
	FaFan,
	FaPlug,
	FaCogs,
	FaSolarPanel,
} from "react-icons/fa";

import { motion } from "framer-motion";

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
	{
		icon: <FaCogs className="text-gray-500 text-4xl" />,
		title: "Appliance Maintenance",
		description: "Keep your appliances running like new with our services.",
		link: "/services/appliance-maintenance",
	},
	{
		icon: <FaSolarPanel className="text-orange-500 text-4xl" />,
		title: "Solar Panel Installation",
		description: "Embrace sustainability with our solar solutions.",
		link: "/services/solar-panel-installation",
	},
];

const ServicesPage = () => {
	return (
		<div className="mx-auto space-y-16">
			{/* Hero Section */}
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center space-y-6 px-6">
				<h1 className="text-4xl md:text-5xl font-bold text-gray-800">
					Our Services
				</h1>
				<p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
					At KelightElectrical, we offer a wide range of services tailored to
					meet your electrical needs with precision and care.
				</p>
			</motion.div>

			<div className="flex flex-col items-center justify-center">
				{/* Services Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 items-justify-center gap-8 max-w-7xl px-6 ">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="bg-white shadow-lg rounded-lg p-6 text-center space-y-4 hover:shadow-2xl hover:scale-105 transform transition duration-300">
							<div>{service.icon}</div>
							<h3 className="text-xl font-semibold text-gray-700">
								{service.title}
							</h3>
							<p className="text-gray-600">{service.description}</p>
							<a
								href={service.link}
								className="text-blue-600 hover:underline">
								Learn More →
							</a>
						</motion.div>
					))}
				</div>
			</div>

			{/* CTA Section */}
			<section className=" text-center flex flex-col items-center justify-center space-y-6 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg shadow-md">
				<div className="max-w-7xl">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
						Have Questions? Get in Touch!
					</h2>
					<p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
						Our expert team is ready to assist you with all your electrical
						needs. Whether it's repairs, installations, or consultations, we’re
						here to help.
					</p>
					<a
						href="/contact"
						className="inline-block mt-4 px-8 py-3 bg-blue-400 text-white rounded-lg text-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
						Contact Us
					</a>
				</div>
			</section>
		</div>
	);
};

export default ServicesPage;
