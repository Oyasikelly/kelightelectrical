"use client";

import React from "react";
import { FaArrowUp, FaArrowDown, FaWhatsapp } from "react-icons/fa";

const ScrollTo = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const scrollToBottom = () => {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: "smooth",
		});
	};

	return (
		<div className="flex flex-col fixed z-[200] bottom-6 right-6 space-y-3">
			{/* WhatsApp Floating Button */}
			<a
				href="https://wa.me/2349068318254"
				target="_blank"
				rel="noopener noreferrer"
				className="p-3 bg-green-500 text-white rounded-full shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:bg-green-600 hover:scale-110 hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] transition-all duration-300 flex items-center justify-center"
				aria-label="Chat on WhatsApp">
				<FaWhatsapp size={24} />
			</a>

			{/* Scroll to Top Button */}
			<button
				onClick={scrollToTop}
				className="p-3 bg-gray-200 text-white rounded-full shadow-lg hover:bg-blue-400 transition-all"
				aria-label="Scroll to Top">
				<FaArrowUp size={20} />
			</button>

			{/* Scroll to Bottom Button */}
			<button
				onClick={scrollToBottom}
				className="p-3 bg-gray-200 text-white rounded-full shadow-lg hover:bg-blue-400 transition-all"
				aria-label="Scroll to Bottom">
				<FaArrowDown size={20} />
			</button>
		</div>
	);
};

export default ScrollTo;
