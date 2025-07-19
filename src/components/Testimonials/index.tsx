"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Ankit Sharma",
    designation: "Investor, Delhi",
    content:
      "Investing with Ahmad FX Team was one of my best financial decisions. The returns are consistent and the support is very transparent.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Priya Mehta",
    designation: "Freelancer, Pune",
    content:
      "I started small but the monthly income has made a huge difference. I really like how professionally the team handles everything.",
    image: "/images/testimonials/testimonial2.jpg",
    star: 5,
  },
  {
    id: 3,
    name: "Rohit Verma",
    designation: "Business Owner, Jaipur",
    content:
      "Excellent experience. The MT5 tracking and regular reports make everything easy to understand, even if you're not a trader.",
    image: "/images/testimonials/testimonial4.jpg",
    star: 5,
  },
  {
    id: 4,
    name: "Sarah Bennet",
    designation: "Investor",
    content:
      "Ahmad FX Team truly transformed my passive income. Transparent, safe, and very professional.",
    image: "/images/testimonials/testimonial3.jpg",
    star: 5,
  },
  {
    id: 5,
    name: "Kunal Kapoor",
    designation: "Entrepreneur, Mumbai",
    content:
      "Getting monthly ROI without the stress of trading is a blessing. Highly recommended to anyone serious about long-term growth.",
    image: "/images/testimonials/testimonial5.jpg",
    star: 5,
  },
];

const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 3;

  const maxStartIndex = Math.max(testimonialData.length - itemsPerView, 0);

  const handleNext = () => {
    if (startIndex < maxStartIndex) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleTestimonials = testimonialData.slice(
    startIndex,
    startIndex + itemsPerView
  );

  // Ensure at least one item is always shown
  const paddedTestimonials = [
    ...visibleTestimonials,
    ...Array(Math.max(0, itemsPerView - visibleTestimonials.length)).fill(null),
  ];

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Investors Say"
          paragraph="Here's what our investors say about partnering with Ahmad FX Team."
          center
        />

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-4 mb-6">
            <button
              onClick={handlePrev}
              className="p-2 bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 rounded-full hover:bg-yellow-200 dark:hover:bg-yellow-700"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 rounded-full hover:bg-yellow-200 dark:hover:bg-yellow-700"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Testimonials Grid with Motion */}
          <motion.div
            className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {paddedTestimonials.map((testimonial, index) => (
              <motion.div key={index} variants={cardVariant}>
                {testimonial && <SingleTestimonial testimonial={testimonial} />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
