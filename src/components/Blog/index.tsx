"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { motion } from "framer-motion";

// Pop-up animation variant
import { Variants } from "framer-motion";

const popup = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (i: number): any => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};


const Blog = () => {
  return (
    <section
      id="blog"
      className="relative py-20 md:py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Golden Pattern Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 960"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="goldDotsBlog"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
            >
              <circle cx="50" cy="50" r="2" fill="#f5c242" fillOpacity="0.25" />
              <path d="M0 50 H100" stroke="#f5c242" strokeOpacity="0.1" strokeWidth="0.5" />
              <path d="M50 0 V100" stroke="#f5c242" strokeOpacity="0.1" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1440" height="960" fill="url(#goldDotsBlog)" />
        </svg>
      </div>

      <div className="container">
        {/* Section Title with Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={popup}
          custom={0}
        >
          <SectionTitle
            title="Latest Insights from Our Team"
            paragraph="Stay up to date with news, market updates, strategies, and insights directly from the Ahmad FX Team."
            center
          />
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={popup}
              custom={index + 1}
            >
              <SingleBlog blog={blog} />
            </motion.div>
          ))}
        </div>

        {/* View All Blogs Button */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={popup}
          custom={blogData.length + 1}
        >
          <a
            href="/blog"
            className="inline-block rounded-full border border-yellow-500 bg-yellow-500 px-8 py-3 text-white font-semibold transition hover:bg-transparent hover:text-yellow-500"
          >
            View All Blogs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
