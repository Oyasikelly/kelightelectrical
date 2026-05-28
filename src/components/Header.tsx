"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import NavbarLinks from "@/lib/NavbarLinks";

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu on route change
	useEffect(() => setMobileOpen(false), [pathname]);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-white/90 backdrop-blur-md shadow-md py-2"
					: "bg-white/70 backdrop-blur-sm py-3"
			}`}>
			<div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
				{/* Logo */}
				<Link
					href="/"
					className="flex items-center gap-2 group">
					<div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
						<Image
							src="/logo.png"
							alt="KelightElectrical Logo"
							width={40}
							height={40}
							className="w-full object-cover"
						/>
					</div>
					<div className="hidden sm:block">
						<span className="text-base font-bold text-gray-800 leading-none">
							Kelight
						</span>
						<span className="text-base font-bold text-blue-600 leading-none">
							Electrical
						</span>
					</div>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden lg:flex items-center gap-1">
					{NavbarLinks.map((item) => {
						const isActive = pathname === item.path;
						return (
							<Link
								key={item.path}
								href={item.path}
								className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
									isActive
										? "text-blue-600 bg-blue-50"
										: "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
								}`}>
								{item.name}
								{isActive && (
									<motion.div
										layoutId="nav-active"
										className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-blue-500 rounded-full"
									/>
								)}
							</Link>
						);
					})}
				</nav>

				{/* Desktop CTA */}
				<div className="hidden lg:flex items-center gap-3">
					<a
						href="https://wa.me/2349068318254"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 text-sm font-medium text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 px-3 py-1.5 rounded-lg transition-colors">
						<FaWhatsapp size={18} />
						WhatsApp
					</a>
					<Link
						href="/login"
						className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-50">
						Sign In
					</Link>
					<Link
						href="/sign-up"
						className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:bg-blue-700 transition-colors">
						Get Started
					</Link>
				</div>

				{/* Mobile Toggle */}
				<button
					className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label="Toggle menu">
					{mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
				</button>
			</div>

			{/* Mobile Drawer */}
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.25 }}
						className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden">
						<nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
							{NavbarLinks.map((item) => {
								const isActive = pathname === item.path;
								return (
									<Link
										key={item.path}
										href={item.path}
										className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
											isActive
												? "bg-blue-50 text-blue-600"
												: "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
										}`}>
										{item.name}
									</Link>
								);
							})}
							<div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
								<a
									href="https://wa.me/2349068318254"
									target="_blank"
									rel="noopener noreferrer"
									className="px-4 py-3 rounded-xl text-sm font-medium text-green-700 bg-green-50 hover:bg-green-100 transition-colors flex items-center justify-center gap-2">
									<FaWhatsapp size={18} /> Chat on WhatsApp
								</a>
								<Link
									href="/login"
									className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors text-center">
									Sign In
								</Link>
								<Link
									href="/sign-up"
									className="bg-blue-600 text-white text-sm font-semibold px-4 py-3 rounded-xl text-center hover:bg-blue-700 transition-colors">
									Get Started — It&apos;s Free
								</Link>
							</div>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
