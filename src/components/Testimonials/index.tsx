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
    name: "Musharof Chy",
    designation: "Founder @TailGrids",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Founder @UIdeck",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Sarah Bennet",
    designation: "Investor",
    content:
      "Ahmad FX Team truly transformed my passive income. Transparent, safe, and very professional.",
    image: "/images/testimonials/auth-04.png",
    star: 5,
  },
  {
    id: 5,
    name: "Kunal Kapoor",
    designation: "Entrepreneur",
    content:
      "The monthly ROI and clear reporting are game-changers. Highly recommend!",
    image: "/images/testimonials/auth-05.png",
    star: 5,
  },
];

// ✅ Strongly typed Framer Motion variants
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
      ease: "easeOut", // ✅ Use string literal value
    },
  },
};

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 3;

  const handleNext = () => {
    if (startIndex + itemsPerView < testimonialData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

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
            {testimonialData
              .slice(startIndex, startIndex + itemsPerView)
              .map((testimonial) => (
                <motion.div key={testimonial.id} variants={cardVariant}>
                  <SingleTestimonial testimonial={testimonial} />
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
