"use client";

import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

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
		<div className="flex flex-col fixed z-200 bottom-6 right-6 space-y-3">
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
