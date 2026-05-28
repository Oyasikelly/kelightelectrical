"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaWhatsapp,
	FaBolt,
} from "react-icons/fa";
import NavbarLinks from "@/lib/NavbarLinks";
import ServicesLib from "@/lib/services";

const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-gray-300">
			{/* Main Footer */}
			<div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* Brand Column */}
					<div className="lg:col-span-1">
						<Link
							href="/"
							className="flex items-center gap-2 mb-4">
							<div className="w-9 h-9 rounded-lg flex items-center justify-center">
								<Image
									src="/logo.png"
									alt="KelightElectrical Logo"
									width={32}
									height={32}
									className="object-contain"
								/>
							</div>
							<span className="text-white font-bold text-lg">
								KelightElectrical
							</span>
						</Link>
						<p className="text-sm leading-relaxed text-gray-400 mb-5">
							A dynamic electrical servicing company delivering reliable,
							efficient, and professional electrical solutions for residential,
							commercial, and industrial needs.
						</p>
						{/* Social Links */}
						<div className="flex gap-3">
							{[
								{ icon: <FaFacebook />, href: "#", label: "Facebook" },
								{ icon: <FaTwitter />, href: "#", label: "Twitter" },
								{ icon: <FaInstagram />, href: "#", label: "Instagram" },
								{
									icon: <FaWhatsapp />,
									href: "https://wa.me/2349068318254",
									label: "WhatsApp",
								},
							].map(({ icon, href, label }) => (
								<a
									key={label}
									href={href}
									aria-label={label}
									target="_blank"
									rel="noopener noreferrer"
									className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
									{icon}
								</a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-white font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{NavbarLinks.map((link) => (
								<li key={link.path}>
									<Link
										href={link.path}
										className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
										{link.name}
									</Link>
								</li>
							))}
							<li>
								<Link
									href="/testimonials"
									className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
									Testimonials
								</Link>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="text-white font-semibold mb-4">Our Services</h3>
						<ul className="space-y-2">
							{ServicesLib.slice(0, 6).map((s) => (
								<li key={s.slug}>
									<Link
										href={`/services/${s.slug}`}
										className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
										{s.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact & Newsletter */}
					<div>
						<h3 className="text-white font-semibold mb-4">Get In Touch</h3>
						<ul className="space-y-3 mb-6">
							<li className="flex items-start gap-3 text-sm">
								<FaPhoneAlt className="text-blue-400 mt-0.5 flex-shrink-0" />
								<a
									href="tel:+2349068318254"
									className="text-gray-400 hover:text-blue-400 transition-colors">
									+234 906 831 8254
								</a>
							</li>
							<li className="flex items-start gap-3 text-sm">
								<FaEnvelope className="text-blue-400 mt-0.5 flex-shrink-0" />
								<a
									href="mailto:Kelightelectrical@gmail.com"
									className="text-gray-400 hover:text-blue-400 transition-colors break-all">
									Kelightelectrical@gmail.com
								</a>
							</li>
							<li className="flex items-start gap-3 text-sm">
								<FaMapMarkerAlt className="text-blue-400 mt-0.5 flex-shrink-0" />
								<span className="text-gray-400">
									Effurun, Delta State, Nigeria
								</span>
							</li>
						</ul>

						{/* Mini Newsletter */}
						<div>
							<p className="text-sm text-gray-400 mb-2">
								Get tips & updates in your inbox:
							</p>
							<div className="flex gap-2">
								<input
									type="email"
									placeholder="Your email"
									className="flex-1 bg-gray-800 border border-gray-700 text-sm text-white px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-500"
								/>
								<button className="bg-blue-600 text-white text-sm px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
									Go
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-gray-800">
				<div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
					<p>
						© {new Date().getFullYear()} KelightElectrical. All rights reserved.
					</p>
					<div className="flex gap-5">
						<Link
							href="/terms&conditions"
							className="hover:text-blue-400 transition-colors">
							Terms &amp; Conditions
						</Link>
						<Link
							href="/contact"
							className="hover:text-blue-400 transition-colors">
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
