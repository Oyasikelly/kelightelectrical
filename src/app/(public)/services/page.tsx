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
            Comprehensive electrical solutions for homes, businesses, and industries across Effurun, Delta and beyond.
          </p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <ServicesGrid />
      </section>

      {/* Detailed Service List */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Service Details & Pricing</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Click any service below to see what&apos;s included, how it works, and pricing information.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ServicesLib.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex gap-5 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-2xl">
                    💡
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    View details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us for a free consultation. Our team will diagnose your needs and recommend the right solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+2349068318254"
              className="border-2 border-white/60 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              +234 906 831 8254
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
