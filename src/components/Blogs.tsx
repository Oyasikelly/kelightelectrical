"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import BlogsData from "@/lib/blogs";
import { FaClock, FaArrowRight } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function BlogPostsSection() {
  // Show only top 3 blogs for the preview
  const recentBlogs = BlogsData.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {recentBlogs.map((blog, i) => (
        <motion.article
          key={blog.slug}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          {/* Thumbnail */}
          <div className="relative h-48 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${blog.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="bg-white/90 backdrop-blur text-blue-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {blog.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
              <span className="flex items-center gap-1 font-medium">
                <FaClock className="text-blue-400" /> {blog.readTime}
              </span>
              <span>•</span>
              <span>{blog.date}</span>
            </div>

            <h3 className="font-bold text-gray-800 text-lg mb-2 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
              {blog.title}
            </h3>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
              {blog.description}
            </p>

            <Link
              href={blog.link}
              className="mt-auto inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all"
            >
              Read Article <FaArrowRight />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
