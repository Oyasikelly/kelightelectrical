// Overview Component for KelightElectrical Dashboard
// Using Framer Motion for Animations

import { motion } from "framer-motion";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
	FaTasks,
	FaCheckCircle,
	FaClock,
	FaDollarSign,
	FaBolt,
	FaUserTie,
} from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend);

const Overview = ({ onProfile }) => {
	const stats = [
		{
			title: "Total Requests",
			value: 125,
			bgColor: "bg-blue-100",
			textColor: "text-blue-600",
			icon: <FaTasks className="text-blue-600 text-4xl" />,
		},
		{
			title: "Completed Services",
			value: 95,
			bgColor: "bg-green-100",
			textColor: "text-green-600",
			icon: <FaCheckCircle className="text-green-600 text-4xl" />,
		},
		{
			title: "Pending Services",
			value: 30,
			bgColor: "bg-yellow-100",
			textColor: "text-yellow-600",
			icon: <FaClock className="text-yellow-600 text-4xl" />,
		},
		{
			title: "Revenue Generated",
			value: "$12,500",
			bgColor: "bg-purple-100",
			textColor: "text-purple-600",
			icon: <FaDollarSign className="text-purple-600 text-4xl" />,
		},
	];

	const additionalStats = [
		{
			title: "Top Service",
			value: "Electrical Wiring",
			bgColor: "bg-indigo-100",
			textColor: "text-indigo-600",
			icon: <FaBolt className="text-indigo-600 text-4xl" />,
		},
		{
			title: "Active Technicians",
			value: 15,
			bgColor: "bg-teal-100",
			textColor: "text-teal-600",
			icon: <FaUserTie className="text-teal-600 text-4xl" />,
		},
	];

	const containerVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				when: "beforeChildren",
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
	};

	const pieData = {
		labels: ["Completed Services", "Pending Services"],
		datasets: [
			{
				label: "Service Status",
				data: [95, 30],
				backgroundColor: ["#10B981", "#F59E0B"],
				borderWidth: 1,
			},
		],
	};

	const pieOptions = {
		plugins: {
			legend: {
				position: "bottom",
			},
		},
	};

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={containerVariants}
			className="p-4 sm:p-6 bg-white shadow-md rounded-xl lg:rounded-none lg:rounded-r-[1rem]">
			{/* Header */}
			<div className="flex flex-wrap justify-between items-center gap-4">
				<motion.h2
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="text-xl sm:text-2xl font-bold text-gray-800">
					Overview
				</motion.h2>
				<div className="flex items-center gap-3">
					<motion.span className="text-sm sm:text-base break-all">
						@exampleemail.com
					</motion.span>
					<div
						onClick={() => onProfile("account_settings")}
						className="cursor-pointer w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-full border-4 border-blue-400 overflow-hidden">
						<img
							className="w-full h-full object-cover"
							src="/assets/testimonial3.jpg"
							alt="profile"
						/>
					</div>
				</div>
			</div>

			{/* Intro */}
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.5 }}
				className="text-gray-600 my-4 text-sm sm:text-base">
				Welcome to the dashboard! Monitor your business metrics and gain
				insights into key operations.
			</motion.p>

			{/* Stats Grid */}
			<motion.div
				initial="hidden"
				animate="visible"
				variants={containerVariants}
				className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{stats.map((stat, index) => (
					<motion.div
						key={index}
						variants={itemVariants}
						className={`p-4 sm:p-6 min-h-[120px] rounded-lg ${stat.bgColor} shadow-md flex flex-col sm:flex-row items-center`}>
						<div className="mb-2 sm:mb-0 sm:mr-4">{stat.icon}</div>
						<div className="text-center sm:text-left">
							<p
								className={`text-sm sm:text-lg font-semibold ${stat.textColor}`}>
								{stat.title}
							</p>
							<h3 className="text-xl sm:text-2xl font-bold mt-1">
								{stat.value}
							</h3>
						</div>
					</motion.div>
				))}
			</motion.div>

			{/* Additional Stats */}
			<motion.div
				initial="hidden"
				animate="visible"
				variants={containerVariants}
				className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
				{additionalStats.map((stat, index) => (
					<motion.div
						key={index}
						variants={itemVariants}
						className={`p-4 sm:p-6 min-h-[120px] rounded-lg ${stat.bgColor} shadow-md flex flex-col sm:flex-row items-center`}>
						<div className="mb-2 sm:mb-0 sm:mr-4">{stat.icon}</div>
						<div className="text-center sm:text-left">
							<p
								className={`text-sm sm:text-lg font-semibold ${stat.textColor}`}>
								{stat.title}
							</p>
							<h3 className="text-xl sm:text-2xl font-bold mt-1">
								{stat.value}
							</h3>
						</div>
					</motion.div>
				))}
			</motion.div>

			{/* Buttons */}
			<motion.div
				className="mt-8 flex flex-col sm:flex-row gap-4"
				initial="hidden"
				animate="visible"
				variants={containerVariants}>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="flex-1 px-6 py-3 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700">
					View Detailed Report
				</motion.button>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="flex-1 px-6 py-3 bg-gray-600 text-white rounded shadow-md hover:bg-gray-700">
					Refresh Data
				</motion.button>
			</motion.div>

			{/* Chart */}
			<motion.div
				className="mt-10"
				initial="hidden"
				animate="visible"
				variants={containerVariants}>
				<h3 className="text-lg sm:text-xl font-semibold mb-4">
					Performance Chart
				</h3>
				<motion.div
					className="p-4 bg-gray-100 rounded shadow-md flex justify-center items-center w-full md:w-1/2 mx-auto"
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.6 }}>
					<Pie
						data={pieData}
						options={pieOptions}
					/>
				</motion.div>
			</motion.div>

			{/* Footer Banner */}
			<motion.div
				className="mt-12 text-center bg-indigo-50 p-4 rounded-lg shadow-md"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6 }}>
				<p className="text-indigo-600 text-base sm:text-lg font-semibold">
					"Serving over 500+ satisfied clients this year!"
				</p>
			</motion.div>
		</motion.div>
	);
};

export default Overview;
