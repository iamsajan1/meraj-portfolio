"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaShieldAlt,
  FaLock,
  FaCheckCircle,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaUserTie size={22} />,
    title: "Expert Leadership",
    description:
      "Led by Meraj Ahmad with 5+ years of successful XAUUSD trading, backed by a real performance history.",
  },
  {
    icon: <FaShieldAlt size={22} />,
    title: "MT5 Live Trade Visibility",
    description:
      "All investments are connected to MT5 accounts, allowing investors to track trades live — with full transparency.",
  },
  {
    icon: <FaLock size={22} />,
    title: "Legally Signed Investor Agreement",
    description:
      "Each investor signs a formal agreement before funding. No verbal promises — just documented protection.",
  },
  {
    icon: <FaCheckCircle size={22} />,
    title: "Monthly ROI Proofs",
    description:
      "We share verified monthly ROI screenshots and payout proofs to maintain trust and consistency.",
  },
  {
    icon: <FaChartLine size={22} />,
    title: "Risk-Managed Growth",
    description:
      "Our goal is not just profit, but consistent returns with controlled risk — no gambling.",
  },
  {
    icon: <FaGlobe size={22} />,
    title: "Global-Scale Vision",
    description:
      "Starting in India, Ahmad FX is planning regulated expansion into Dubai and Singapore.",
  },
];

export default function WhyChooseUs() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0d0d0d] text-gray-800 dark:text-white py-27 ">
      {/* Hero Image with Text Overlay */}
      <section className="relative w-full h-[400px] md:h-[500px] mb-20">
        <Image
          src="/images/hero/hero10.jpg"
          alt="Why Choose Us"
          fill
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60 z-10 flex items-center justify-center text-center px-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-white"
            >
              Why Choose Ahmad FX Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 text-lg text-gray-200 max-w-xl mx-auto"
            >
              A transparent, trusted, and long-term investment model — built to grow wealth responsibly.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Reason Blocks */}
      <section className="max-w-4xl mx-auto px-6 py-10 space-y-12">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white dark:bg-[#181818] bg-opacity-80 dark:bg-opacity-90 p-6 rounded-xl border border-gray-200 dark:border-[#333] shadow-md backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="text-[#b59459] mt-1">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
