"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, ShieldCheck, TrendingUp } from "lucide-react";

export default function Video() {
  return (
    <section className="relative py-20 md:py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Stylish Golden Dot and Line Pattern Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 960"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="goldFancyPattern"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
            >
              <circle cx="50" cy="50" r="2" fill="#f5c242" fillOpacity="0.3" />
              <path d="M0 50 H100" stroke="#f5c242" strokeOpacity="0.1" strokeWidth="0.5" />
              <path d="M50 0 V100" stroke="#f5c242" strokeOpacity="0.1" strokeWidth="0.5" />
              <path d="M0 0 L100 100" stroke="#f5c242" strokeOpacity="0.05" strokeWidth="1" />
              <path d="M100 0 L0 100" stroke="#f5c242" strokeOpacity="0.05" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1440" height="960" fill="url(#goldFancyPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-20 lg:gap-32">
        {/* Left Content */}
        <motion.div
          className="max-w-xl text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-6 leading-tight"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Empower Your Investment Journey
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We help you grow capital confidently with compounding returns,
            secure legal backing, and diversified fund management. Start
            building wealth smarter.
          </motion.p>

          <div className="space-y-4">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Rocket className="text-yellow-500" size={24} />
              <span className="text-dark dark:text-white font-medium">
                Up to 120% ROI with compounding plans
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <ShieldCheck className="text-yellow-500" size={24} />
              <span className="text-dark dark:text-white font-medium">
                Capital protected by legal agreements
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="text-yellow-500" size={24} />
              <span className="text-dark dark:text-white font-medium">
                Diversified strategy: Forex + Prop Firms
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image Stack */}
        <motion.div
          className="relative w-full max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative h-[500px]">
            <motion.div
              className="absolute top-0 left-0 w-3/5 h-3/5 z-20 rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-400"
              initial={{ rotate: -5, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/hero/hero9.jpg"
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-0 w-3/5 h-3/5 z-10 rounded-xl overflow-hidden shadow-xl border-2 border-yellow-500"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/hero/hero10.jpg"
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-[320px] z-30 rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-300"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/hero/hero11.jpg"
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
