"use client";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaLightbulb, FaWrench, FaTools, FaBolt,
  FaFan, FaPlug, FaCogs, FaSolarPanel,
  FaCheckCircle, FaArrowLeft, FaPhoneAlt,
} from "react-icons/fa";
import Services from "@/lib/services";

const iconMap = {
  FaLightbulb: <FaLightbulb className="text-yellow-400 text-5xl" />,
  FaWrench: <FaWrench className="text-blue-400 text-5xl" />,
  FaTools: <FaTools className="text-green-400 text-5xl" />,
  FaBolt: <FaBolt className="text-orange-400 text-5xl" />,
  FaFan: <FaFan className="text-purple-400 text-5xl" />,
  FaPlug: <FaPlug className="text-red-400 text-5xl" />,
  FaCogs: <FaCogs className="text-gray-400 text-5xl" />,
  FaSolarPanel: <FaSolarPanel className="text-amber-400 text-5xl" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = Services.find((s: any) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] min-h-[400px] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url('${service.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-300 text-sm mb-4 hover:text-white transition-colors"
            >
              <FaArrowLeft /> Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-3">
              {iconMap[service.icon as keyof typeof iconMap]}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">{service.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Left: Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Service</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
            </motion.div>

            {/* Features */}
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">What&apos;s Included</h2>
              <ul className="space-y-3">
                {service.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0 text-lg" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* How It Works */}
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">How It Works</h2>
              <div className="space-y-6">
                {service.steps.map((step: any, i: number) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{step.title}</h3>
                      <p className="text-gray-500 mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.testimonials.map((t: any, i: number) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                  >
                    <p className="text-gray-600 italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                    <p className="font-semibold text-blue-600">— {t.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Sticky sidebar */}
          <motion.div variants={fadeUp} className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 sticky top-24">
              <div className="text-3xl font-bold text-blue-600 mb-1">{service.price}</div>
              <p className="text-sm text-gray-500 mb-6">{service.priceNote}</p>
              <Link
                href="/contact"
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Book This Service
              </Link>
              <a
                href="tel:+2349068318254"
                className="mt-3 flex items-center justify-center gap-2 w-full text-center border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                <FaPhoneAlt /> Call Us Now
              </a>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  📍 Effurun, Delta, Nigeria<br />
                  🕐 Mon – Sat, 8am – 6pm WAT
                </p>
              </div>
            </div>

            {/* Other Services */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-semibold text-gray-800 mb-4">Our Other Services</h3>
              <ul className="space-y-2">
                {Services.filter((s: any) => s.slug !== service.slug).slice(0, 5).map((s: any) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-blue-600 hover:text-blue-800 text-sm transition-colors"
                    >
                      → {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact KelightElectrical today for a free consultation and quote on {service.title.toLowerCase()}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+2349068318254"
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              +234 906 831 8254
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
