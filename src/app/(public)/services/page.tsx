import ServicesGrid from "@/components/Services";
import { motion } from "framer-motion";
import Link from "next/link";
import ServicesLib from "@/lib/services";

export const metadata = {
	title: "Our Services | KelightElectrical",
	description:
		"Explore KelightElectrical's complete range of electrical services — lighting, wiring, solar, maintenance, surge protection, and more.",
};

export default function ServicesPage() {
	return (
		<main className="bg-gray-50 min-h-screen">
			{/* Hero */}
			<section className="bg-gradient-to-br from-blue-700 to-blue-500 py-20 text-white text-center">
				<div className="max-w-3xl mx-auto px-6">
					<span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
						What We Offer
					</span>
					<h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
						Our Electrical Services
					</h1>
					<p className="text-blue-100 text-lg leading-relaxed">
						Comprehensive electrical solutions for homes, businesses, and
						industries across Effurun, Delta and beyond.
					</p>
				</div>
			</section>

			{/* Service Cards Grid */}
			<section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
				<ServicesGrid />
			</section>

			{/* CTA */}
			<section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white text-center">
				<div className="max-w-3xl mx-auto px-6">
					<h2 className="text-3xl font-bold mb-4">
						Not Sure Which Service You Need?
					</h2>
					<p className="text-blue-100 text-lg mb-8">
						Contact us for a free consultation. Our team will diagnose your
						needs and recommend the right solution.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/contact"
							className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
							Get Free Consultation
						</Link>
						<a
							href="tel:+2349068318254"
							className="border-2 border-white/60 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">
							+234 906 831 8254
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
