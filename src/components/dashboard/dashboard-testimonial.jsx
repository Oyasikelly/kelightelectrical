import React, { use } from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from "react-icons/fa";
import useClientInfo from "@/context/ClientInfoContext";

// const testimonials = [
// 	{
// 		name: "Jane Doe",
// 		feedback:
// 			"KelightElectrical provided outstanding service! They resolved my issues quickly and professionally. I’m so impressed with their expertise and attention to detail.",
// 		rating: 5,
// 		photo: "/assets/testimonial1.jpg",
// 		title: "Homeowner",
// 	},
// 	{
// 		name: "John Smith",
// 		feedback:
// 			"Professional and reliable! The team is exceptional, and their work exceeded my expectations. Highly recommend KelightElectrical for any electrical needs.",
// 		rating: 4.5,
// 		photo: "/assets/testimonial2.jpg",
// 		title: "Business Owner",
// 	},
// 	{
// 		name: "Gidieon M.A",
// 		feedback:
// 			"Absolutely phenomenal! KelightElectrical’s service was prompt, and the staff was very courteous. They went above and beyond to ensure everything was perfect.",
// 		rating: 4,
// 		photo: "/assets/testimonial3.jpg",
// 		title: "Facility Manager",
// 	},
// 	{
// 		name: "Bright L.L",
// 		feedback:
// 			"Absolutely phenomenal! KelightElectrical’s service was prompt, and the staff was very courteous. They went above and beyond to ensure everything was perfect.",
// 		rating: 3.5,
// 		photo: "/assets/testimonial4.jpg",
// 		title: "Facility Manager",
// 	},
// 	{
// 		name: "Rechael E.A",
// 		feedback:
// 			"Absolutely phenomenal! KelightElectrical’s service was prompt, and the staff was very courteous. They went above and beyond to ensure everything was perfect.",
// 		rating: 5,
// 		photo: "/assets/testimonial5.jpg",
// 		title: "Facility Manager",
// 	},
// 	{
// 		name: "James Ayo",
// 		feedback:
// 			"Absolutely phenomenal! KelightElectrical’s service was prompt, and the staff was very courteous. They went above and beyond to ensure everything was perfect.",
// 		rating: 5,
// 		photo: "/assets/testimonial6.jpg",
// 		title: "Facility Manager",
// 	},
// 	{
// 		name: "Michael M.M",
// 		feedback:
// 			"Absolutely phenomenal! KelightElectrical’s service was prompt, and the staff was very courteous. They went above and beyond to ensure everything was perfect.",
// 		rating: 5,
// 		photo: "/assets/testimonial7.jpg",
// 		title: "Facility Manager",
// 	},
// ];

const Testimonial = () => {
	const { testimonials } = useClientInfo().clientInfo || {};

	const { img, name, ratings, services, testimonies, title } =
		testimonials[0] || {};

	console.log(img, name, ratings, services, testimonies, title);
	const cardVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: (i) => ({
			opacity: 1,
			scale: 1,
			transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
		}),
	};

	// Stars Helper
	function renderStars(rating) {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;
		const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

		for (let i = 0; i < fullStars; i++) {
			stars.push(<FaStar key={`full-${i}`} />);
		}

		if (hasHalfStar) {
			stars.push(<FaStarHalfAlt key="half" />);
		}

		for (let i = 0; i < emptyStars; i++) {
			stars.push(
				<FaStar
					key={`empty-${i}`}
					className="text-gray-300"
				/>
			);
		}

		return stars;
	}

	return (
		<div className="h-screen bg-gradient-to-r from-blue-100 to-indigo-200 p-8 md:p-16">
			<h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">
				Your Testimonials
			</h2>
			<div className="grid md:grid-cols-3 gap-8">
				{testimonials !== undefined ? (
					testimonials.flatMap((testimonial, index) =>
						testimonial.testimonies.map((msg, tIndex) => {
							const service = testimonial.services[tIndex]; // pick matching service by index
							const rating = Number(testimonial.ratings?.[tIndex] || 0);

							return (
								<motion.div
									key={`${index}-${tIndex}`}
									custom={index}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									variants={cardVariants}
									className="p-6 bg-white rounded-lg shadow-xl">
									<div className="relative mb-4">
										<FaQuoteLeft className="text-indigo-200 text-4xl absolute -top-4 -left-4" />
										<p className="relative text-gray-600 italic leading-relaxed z-10">
											{msg}
										</p>
									</div>
									<div className="flex items-center mt-4">
										<img
											src={testimonial.img}
											alt={testimonial.name}
											className="w-12 h-12 rounded-full mr-4 shadow-md"
										/>
										<div>
											<h3 className="font-semibold text-lg">
												{testimonial.name}
											</h3>
											<p className="text-sm text-indigo-500">
												{testimonial.title}
											</p>
											{service && (
												<p className="mt-2 text-sm text-gray-600">
													• {service}
												</p>
											)}
											<div className="flex text-yellow-400 mt-2">
												{renderStars(rating)}
											</div>
										</div>
									</div>
								</motion.div>
							);
						})
					)
				) : (
					<p className="text-center col-span-3 bg-gray-300">
						No testimonials available.
					</p>
				)}
			</div>
		</div>
	);
};

export default Testimonial;
