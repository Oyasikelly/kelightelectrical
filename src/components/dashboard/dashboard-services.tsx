// Services Component for KelightElectrical Dashboard
// Animated and User-Friendly
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
	FaStar,
	FaLightbulb,
	FaWrench,
	FaTools,
	FaBolt,
	FaFan,
	FaPlug,
	FaCogs,
	FaSolarPanel,
} from "react-icons/fa";
import { supabase } from "@/lib/supabase";
import useClientInfo from "@/context/ClientInfoContext";
// Rating Component
const Rating = ({ rating, onRatingChange }) => {
	return (
		<div className="flex justify-center items-center mb-4">
			{[...Array(5)].map((_, index) => (
				<motion.div
					key={index}
					className="cursor-pointer"
					whileHover={{ scale: 1.2 }}
					onClick={() => onRatingChange(index + 1)}>
					<FaStar
						className={`text-2xl ${
							index < rating ? "text-yellow-500" : "text-gray-400"
						}`}
					/>
				</motion.div>
			))}
		</div>
	);
};

const services = [
	{
		icon: <FaLightbulb className="text-5xl text-yellow-500" />,
		title: "Lighting Installation",
		description:
			"Expert installation of lighting systems for your home or office.",
		link: "/services/lighting",
		testimonialWriteup:
			"Transform your spaces with our efficient and aesthetically pleasing lighting solutions, tailored to your needs.",
	},
	{
		icon: <FaWrench className="text-5xl text-blue-600" />,
		title: "Wiring & Rewiring",
		description:
			"Safe and reliable wiring solutions for any residential or commercial project.",
		link: "/services/wiring",
		testimonialWriteup:
			"Ensure safety and reliability with our top-notch wiring and rewiring services.",
	},
	{
		icon: <FaTools className="text-5xl text-green-500" />,
		title: "Electrical Maintenance",
		description:
			"Regular maintenance to ensure the safety and efficiency of your electrical systems.",
		link: "/services/maintenance",
		testimonialWriteup:
			"Keep your systems running smoothly with our proactive maintenance plans.",
	},
	{
		icon: <FaBolt className="text-5xl text-orange-500" />,
		title: "Surge Protection",
		description: "Protect your devices with our high-quality surge protectors.",
		link: "/services/surge-protection",
		testimonialWriteup:
			"Safeguard your devices and appliances with our advanced surge protection solutions.",
	},
	{
		icon: <FaFan className="text-5xl text-purple-500" />,
		title: "Fan Installation",
		description: "Efficient and stylish fan installation for any space.",
		link: "/services/fan-installation",
		testimonialWriteup:
			"Stay cool and comfortable with our modern fan installation services.",
	},
	{
		icon: <FaPlug className="text-5xl text-red-500" />,
		title: "Socket Repairs",
		description:
			"Quick and reliable socket repair services for all your needs.",
		link: "/services/socket-repairs",
		testimonialWriteup:
			"Fix your electrical connections with our prompt and reliable socket repair services.",
	},
	{
		icon: <FaCogs className="text-gray-500 text-4xl" />,
		title: "Appliance Maintenance",
		description: "Keep your appliances running like new with our services.",
		link: "/services/appliance-maintenance",
		testimonialWriteup:
			"Extend the lifespan of your appliances with our expert maintenance services.",
	},
	{
		icon: <FaSolarPanel className="text-orange-500 text-4xl" />,
		title: "Solar Panel Installation",
		description: "Embrace sustainability with our solar solutions.",
		link: "/services/solar-panel-installation",
		testimonialWriteup:
			"Harness the power of the sun with our innovative solar panel installations.",
	},
];

const Services = ({ handleLinkClick }) => {
	const [selectedService, setSelectedService] = useState(null);
	const [serviceRating, setServiceRating] = useState(0);
	const {
		id: user_id,
		name: user_name,
		profilePicture,
	} = useClientInfo().clientInfo || {};
	const [loading, setLoading] = useState(false);
	const containerVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.2,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
		hover: {
			scale: 1.05,
			boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
			transition: { duration: 0.3 },
		},
	};

	const [formData, setFormData] = useState({
		title: "",
		testimonial: "",
		service: "",
		rating: 0,
	});

	useEffect(() => {
		if (selectedService) {
			setFormData((prev) => ({
				...prev,
				service: selectedService.title,
				rating: serviceRating,
			}));
		}
	}, [selectedService, serviceRating]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	async function handleTestimonialSubmit(e) {
		e.preventDefault();
		console.log("Testimonial Submitted:", formData);

		// reset form UI
		setFormData({ title: "", testimonial: "", service: "", rating: 0 });
		setServiceRating(0);
		setSelectedService(null);

		setLoading(true);
		try {
			// 1. Fetch existing testimonials for this user
			const { data: existing, error: fetchError } = await supabase
				.from("testimonials")
				.select("services, testimonies, ratings")
				.eq("id", user_id)
				.single();

			if (fetchError && fetchError.code !== "PGRST116") {
				console.error("Error fetching existing testimonials:", fetchError);
				return;
			}

			// 2. Merge new testimonial with existing arrays
			let updatedServices = existing?.services ?? [];
			let updatedTestimonies = existing?.testimonies ?? [];
			let updatedRatings = existing?.ratings ?? [];

			if (!updatedServices.includes(formData.service)) {
				updatedServices.push(formData.service);
				updatedTestimonies.push(formData.testimonial);
				updatedRatings.push(formData.rating);
			} else {
				// If service already exists, update its testimonial + rating
				const index = updatedServices.indexOf(formData.service);
				updatedTestimonies[index] = formData.testimonial;
				updatedRatings[index] = formData.rating;
			}

			// 3. Upsert back into the table
			const { error } = await supabase.from("testimonials").upsert(
				{
					id: user_id,
					name: user_name,
					services: updatedServices,
					testimonies: updatedTestimonies,
					img: profilePicture || "",
					ratings: updatedRatings,
					title: formData.title || "Valued Customer",
				},
				{ onConflict: "id" }
			);
		} catch (error) {
			console.error("Error submitting testimonial:", error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			{loading && <div className="loading-overlay">Submitting...</div>}
			<motion.div
				initial="hidden"
				animate="visible"
				variants={containerVariants}
				className="p-8 bg-gray-50 min-h-screen">
				<motion.h2
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className="text-3xl font-bold text-center text-gray-800 mb-8">
					Our Services
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="text-center text-gray-600 mb-12">
					We offer a wide range of professional electrical services tailored to
					meet your specific needs. From installation to maintenance, our team
					ensures quality and reliability at every step.
				</motion.p>

				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
					variants={containerVariants}>
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover="hover"
							className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center cursor-pointer"
							onClick={() => setSelectedService(service)}>
							<div className="mb-4">{service.icon}</div>
							<h3 className="text-xl font-semibold text-gray-800 mb-2">
								{service.title}
							</h3>
							<p className="text-gray-600 mb-4">{service.description}</p>
						</motion.div>
					))}
				</motion.div>

				{selectedService && (
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
						onClick={() => setSelectedService(null)}>
						<motion.div
							initial={{ y: -50 }}
							animate={{ y: 0 }}
							className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center relative"
							onClick={(e) => e.stopPropagation()}>
							<button
								className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
								onClick={() => setSelectedService(null)}>
								&times;
							</button>
							<div className="mb-4">{selectedService.icon}</div>
							<h3 className="text-2xl font-bold text-gray-800 mb-4">
								{selectedService.title}
							</h3>
							<p className="text-gray-600 mb-6">
								{selectedService.testimonialWriteup}
							</p>

							<Rating
								rating={serviceRating}
								onRatingChange={setServiceRating}
							/>

							<form
								className="text-left mb-4"
								onSubmit={handleTestimonialSubmit}>
								<div>
									<label className="block text-gray-700 font-medium mb-2">
										Who are you?
									</label>

									<input
										type="text"
										name="title"
										value={formData.title}
										placeholder="Enter who you are"
										className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
										onChange={handleChange}
									/>
								</div>
								<div>
									<label
										htmlFor="testimonial"
										className="block text-gray-700 font-medium mb-2">
										Share your experience:
									</label>
									<textarea
										id="testimonial"
										rows="4"
										name="testimonial"
										value={formData.testimonial}
										onChange={handleChange}
										className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
										placeholder="Write your testimonial here..."></textarea>
								</div>

								<button
									type="submit"
									className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
									Submit Testimonial
								</button>
							</form>
							<button
								className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
								onClick={() => handleLinkClick("service_requests")}>
								Proceed to Request Service
							</button>
						</motion.div>
					</motion.div>
				)}

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className="mt-16 text-center">
					<motion.button
						onClick={() => handleLinkClick("contact")}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						className="px-8 py-4 bg-green-600 text-white text-lg rounded-lg shadow-md hover:bg-green-700">
						Contact Us Today
					</motion.button>
				</motion.div>
			</motion.div>
		</>
	);
};

export default Services;
