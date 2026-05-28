"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Blogs from "@/lib/blogs";
import { FaClock, FaTag, FaArrowRight } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const categories = ["All", ...Array.from(new Set(Blogs.map((b) => b.category)))];

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-block bg-blue-600/80 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Electrical Tips & Insights
          </h1>
          <p className="text-gray-300 text-lg">
            Stay informed with expert guides on electrical safety, energy saving, smart homes, and more.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Blogs.map((blog, i) => (
            <motion.article
              key={blog.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${blog.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <FaClock className="text-blue-400" /> {blog.readTime}
                  </span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>

                <h2 className="font-bold text-gray-800 text-base mb-2 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
                  {blog.description}
                </p>

                <Link
                  href={blog.link}
                  className="mt-4 flex items-center gap-2 text-blue-600 text-sm font-semibold hover:gap-3 transition-all"
                >
                  Read Article <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-3">Never Miss an Update</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to get the latest electrical tips and KelightElectrical news directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl text-gray-800 text-sm focus:outline-none"
            />
            <button className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
