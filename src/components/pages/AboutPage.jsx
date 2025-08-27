"use client";
import { motion } from "framer-motion";
import { FaBolt, FaTools, FaShieldAlt, FaUsers } from "react-icons/fa";
import { FaAward, FaHandsHelping, FaLeaf, FaLightbulb } from "react-icons/fa";

const teamMembers = [
	{
		name: "Jane Smith",
		role: "Project Manager",
		img: "/assets/team-member2.jpg",
	},
	{
		name: "Oyasi Kelly",
		role: "CEO",
		img: "/assets/team-member1.jpg",
	},
	{
		name: "Chris Adams",
		role: "Safety Officer",
		img: "/assets/team-member3.jpg",
	},
];

export default function AboutPage() {
	return (
		<div className="bg-gray-50">
			{/* Hero Section */}
			<div className="relative bg-blue-400 text-white py-20">
				<div className="container mx-auto px-4 text-center max-w-7xl">
					<motion.h1
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-4xl font-bold sm:text-5xl">
						About KelightElectrical
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="mt-4 text-lg sm:text-xl">
						Delivering Excellence in Electrical Solutions Since 5 years of
						Establishment.
					</motion.p>
				</div>
			</div>

			{/* About Us Section */}
			<div className="container mx-auto py-16 px-6 lg:px-20 max-w-7xl">
				<h2 className="text-3xl font-bold text-center text-gray-800 sm:text-4xl">
					Who We Are
				</h2>
				<p className="mt-6 text-center text-gray-600 leading-relaxed sm:text-lg">
					At KelightElectrical, we are passionate about delivering reliable,
					safe, and efficient electrical services. Our experienced team is
					committed to providing innovative solutions for homes, businesses, and
					industrial projects.
				</p>
			</div>

			{/* Mission and Vision */}
			<section className="space-y-12 mb-12 flex flex-col items-center justify-center">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center max-w-7xl">
					<h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
					<p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
						Our mission is to power your world with reliable, innovative, and
						safe electrical solutions. We strive to exceed customer expectations
						by delivering outstanding services tailored to their unique needs.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center max-w-7xl">
					<h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
					<p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
						To become a trusted leader in the electrical industry, shaping a
						brighter and more sustainable future for communities around the
						globe.
					</p>
				</motion.div>
			</section>

			{/* Why Choose Us Section */}
			<div className="bg-blue-50 py-16">
				<div className="container max-w-7xl mx-auto px-6 lg:px-20">
					<h2 className="text-3xl font-bold text-center text-gray-800 sm:text-4xl">
						Why Choose Us
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
						<div className="text-center space-y-4">
							<FaBolt className="text-blue-600 text-5xl mx-auto" />
							<h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
								Expertise
							</h3>
							<p className="text-gray-600 sm:text-base">
								Over 8 years of experience in the electrical industry.
							</p>
						</div>
						<div className="text-center space-y-4">
							<FaTools className="text-blue-600 text-5xl mx-auto" />
							<h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
								Quality Service
							</h3>
							<p className="text-gray-600 sm:text-base">
								We use top-notch tools and techniques for every project.
							</p>
						</div>
						<div className="text-center space-y-4">
							<FaShieldAlt className="text-blue-600 text-5xl mx-auto" />
							<h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
								Safety First
							</h3>
							<p className="text-gray-600 sm:text-base">
								Ensuring safety and compliance in all our services.
							</p>
						</div>
						<div className="text-center space-y-4">
							<FaUsers className="text-blue-600 text-5xl mx-auto" />
							<h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
								Customer Focused
							</h3>
							<p className="text-gray-600 sm:text-base">
								Dedicated to exceeding customer expectations.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Meet the Team Section */}
			<div className="container mx-auto py-16 px-6 lg:px-20 max-w-7xl md">
				<h2 className="text-3xl font-bold text-center text-gray-800 sm:text-4xl">
					Meet the Team
				</h2>
				<p className="mt-6 text-center text-gray-600 leading-relaxed sm:text-lg">
					Our team of professionals ensures that your project is handled with
					the utmost care and expertise.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
					{/* Example Team Member */}
					{teamMembers.map((teamMember) => (
						<div
							key={teamMember.name}
							className="text-center space-y-4">
							<img
								src={`${teamMember.img}`}
								alt={`${teamMember.name}`}
								className="w-40 h-40 mx-auto rounded-full object-cover"
							/>
							<h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
								{teamMember.name}
							</h3>
							<p className="text-gray-600 sm:text-base">{teamMember.role}</p>
						</div>
					))}
				</div>
			</div>
			{/* Core Values */}
			<section className="space-y-12 p-4 flex flex-col items-center justify-center">
				<div className="max-w-7xl">
					<h2 className="text-3xl mb-6 font-bold text-gray-800 text-center">
						Our Core Values
					</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="flex flex-col items-center space-y-4">
							<FaLightbulb className="text-blue-500 text-4xl" />
							<h3 className="text-xl font-semibold text-gray-700">
								Innovation
							</h3>
							<p className="text-gray-600 text-center">
								We stay ahead of the curve by adopting the latest technology and
								methods in the electrical field.
							</p>
						</div>
						<div className="flex flex-col items-center space-y-4">
							<FaAward className="text-yellow-500 text-4xl" />
							<h3 className="text-xl font-semibold text-gray-700">
								Excellence
							</h3>
							<p className="text-gray-600 text-center">
								Our commitment to quality ensures that every project meets the
								highest standards.
							</p>
						</div>
						<div className="flex flex-col items-center space-y-4">
							<FaHandsHelping className="text-green-500 text-4xl" />
							<h3 className="text-xl font-semibold text-gray-700">
								Customer Satisfaction
							</h3>
							<p className="text-gray-600 text-center">
								We prioritize the needs of our clients and ensure they are happy
								with our services.
							</p>
						</div>
						<div className="flex flex-col items-center space-y-4">
							<FaLeaf className="text-teal-500 text-4xl" />
							<h3 className="text-xl font-semibold text-gray-700">
								Sustainability
							</h3>
							<p className="text-gray-600 text-center">
								Eco-friendly practices are at the heart of everything we do.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
