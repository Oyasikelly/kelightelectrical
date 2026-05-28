"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaClock, FaTag, FaCalendarAlt } from "react-icons/fa";
import Blogs from "@/lib/blogs";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const blog = Blogs.find((b: any) => b.slug === resolvedParams.slug);
  if (!blog) notFound();

  const related = Blogs.filter((b: any) => b.slug !== blog.slug && b.category === blog.category).slice(0, 3);
  const others = Blogs.filter((b: any) => b.slug !== blog.slug).slice(0, 3);
  const suggestions = related.length >= 2 ? related : others;

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section
        className="relative h-[55vh] min-h-[360px] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url('${blog.image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-blue-300 text-sm mb-4 hover:text-white transition-colors"
            >
              <FaArrowLeft /> Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-3">
              <span className="flex items-center gap-1">
                <FaTag className="text-blue-400" /> {blog.category}
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> {blog.date}
              </span>
              <span className="flex items-center gap-1">
                <FaClock /> {blog.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {blog.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article */}
          <motion.article
            className="lg:col-span-2"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-600 leading-relaxed mb-10 p-6 bg-white rounded-2xl border-l-4 border-blue-500 shadow-sm"
            >
              {blog.description}
            </motion.p>

            {/* YouTube Video Embed */}
            {blog.video && (
              <motion.div variants={fadeUp} className="mb-10">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100 aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${blog.video}`}
                    title={blog.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </motion.div>
            )}
            <div className="space-y-8">
              {blog.content.map((section: any, i: number) => (
                <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-800 mb-3">{section.heading}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.body}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-3">Need Professional Help?</h3>
              <p className="text-blue-100 mb-6">
                KelightElectrical provides expert electrical services across Effurun, Delta and surroundings.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Contact Us Today
              </Link>
            </motion.div>
          </motion.article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-gray-800 text-lg mb-4">Related Articles</h3>
              <ul className="space-y-4">
                {suggestions.map((b: any) => (
                  <li key={b.slug}>
                    <Link href={b.link} className="group block">
                      <div
                        className="h-28 rounded-xl bg-cover bg-center mb-2 overflow-hidden"
                        style={{ backgroundImage: `url('${b.image}')` }}
                      />
                      <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors leading-snug">
                        {b.title}
                      </p>
                      <span className="text-xs text-gray-400 mt-1 block">{b.readTime}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-700 mb-3">Quick Contact</h4>
                <p className="text-sm text-gray-500 space-y-1">
                  <span className="block">📞 +234 906 831 8254</span>
                  <span className="block">📧 Kelightelectrical@gmail.com</span>
                  <span className="block">📍 Effurun, Delta, Nigeria</span>
                </p>
                <Link
                  href="/contact"
                  className="mt-4 block w-full text-center bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
