"use client";
import { motion } from "framer-motion";
import {
  FaBolt, FaTools, FaShieldAlt, FaUsers,
  FaAward, FaHandsHelping, FaLeaf, FaLightbulb,
  FaCheckCircle, FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  { name: "Oyasi Kelly", role: "CEO & Founder", img: "/assets/team-member1.jpg", bio: "Certified electrical engineer with 8+ years of industry experience." },
  { name: "Jane Smith", role: "Project Manager", img: "/assets/team-member2.jpg", bio: "Expert in coordinating complex multi-site electrical installations." },
  { name: "Chris Adams", role: "Safety Officer", img: "/assets/team-member3.jpg", bio: "Ensures every project meets the highest safety and compliance standards." },
];

const whyUs = [
  { icon: <FaBolt className="text-blue-500 text-3xl" />, title: "Expertise", desc: "Over 8 years of hands-on experience in all areas of electrical work." },
  { icon: <FaTools className="text-blue-500 text-3xl" />, title: "Quality Service", desc: "We use only certified, premium materials and proven techniques." },
  { icon: <FaShieldAlt className="text-blue-500 text-3xl" />, title: "Safety First", desc: "Every project is executed in full compliance with safety codes." },
  { icon: <FaUsers className="text-blue-500 text-3xl" />, title: "Customer Focus", desc: "Our team is dedicated to exceeding your expectations every time." },
];

const coreValues = [
  { icon: <FaLightbulb className="text-yellow-500 text-3xl" />, title: "Innovation", desc: "We stay ahead by adopting the latest electrical technologies and methods." },
  { icon: <FaAward className="text-orange-400 text-3xl" />, title: "Excellence", desc: "Every project must meet the highest standards — no exceptions." },
  { icon: <FaHandsHelping className="text-green-500 text-3xl" />, title: "Customer Satisfaction", desc: "We listen, adapt, and deliver exactly what our clients need." },
  { icon: <FaLeaf className="text-teal-500 text-3xl" />, title: "Sustainability", desc: "Eco-friendly practices are embedded in every solution we provide." },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "300+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "100%", label: "Safety Compliant" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function AboutPage() {
  return (
    <main className="bg-gray-50">

      {/* ─── Hero ─── */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight"
          >
            About KelightElectrical
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Delivering excellence in electrical solutions since our establishment — powering homes, businesses, and industries across Nigeria.
          </motion.p>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-blue-600">{s.value}</div>
                <div className="text-gray-500 text-sm mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who We Are ─── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-5">
              Your Trusted Electrical Partner
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              At KelightElectrical, we are passionate about delivering reliable, safe, and efficient electrical services. Our experienced team combines technical expertise with genuine dedication to every client we serve.
            </p>
            <p className="text-gray-500 leading-relaxed">
              From a single socket repair to a complete solar installation, we bring the same level of care and professionalism to every job. Based in Effurun, Delta State, we serve residential, commercial, and industrial clients throughout Nigeria.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-blue-600 text-white font-semibold px-7 py-3 rounded-xl hover:bg-blue-700 transition-colors text-center">
                Work With Us
              </Link>
              <Link href="/services" className="border-2 border-blue-600 text-blue-600 font-semibold px-7 py-3 rounded-xl hover:bg-blue-50 transition-colors text-center">
                Our Services
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/assets/slide1.jpg" alt="KelightElectrical team at work" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-blue-600 text-white p-5 rounded-2xl shadow-lg">
              <p className="text-3xl font-extrabold">8+</p>
              <p className="text-blue-100 text-sm">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { label: "Our Mission", text: "To power your world with reliable, innovative, and safe electrical solutions — exceeding customer expectations through outstanding, tailored service." },
            { label: "Our Vision", text: "To become the most trusted electrical services company in Nigeria, shaping a brighter, more sustainable, and energy-efficient future for every community we serve." },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white/10 backdrop-blur rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-4">{item.label}</h3>
              <p className="text-blue-100 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Our Edge</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Why Choose KelightElectrical</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Meet the Team ─── */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">The People</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Meet Our Team</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Our professionals handle every project with skill, precision, and genuine care.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-56 overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-gray-800 text-lg">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mt-1">{member.role}</p>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Core Values ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">What We Stand For</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Our Core Values</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                {v.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Contact KelightElectrical today for a free consultation and discover how we can serve you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
              Get in Touch
            </Link>
            <a href="tel:+2349068318254" className="flex items-center justify-center gap-2 border-2 border-white/60 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">
              <FaPhoneAlt /> +234 906 831 8254
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
