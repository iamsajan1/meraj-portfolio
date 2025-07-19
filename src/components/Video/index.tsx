"use client";

import { Rocket, ShieldCheck, TrendingUp, Briefcase, Globe, Wallet } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Video() {
  // Animation variants for cards
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full opacity-20 dark:opacity-10"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="patternGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5c242" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#patternGold)"
            d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,85.3C672,64,768,64,864,80C960,96,1056,128,1152,149.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#b59459] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Invest Confidently, Grow Globally
        </motion.h2>
        <motion.p
          className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We offer secure, professionally managed portfolios across Forex, Crypto, Prop Firms, and
          Commodities — backed by legal agreements, transparent reporting, and high-growth
          strategies. Our plans cater to long-term wealth creation with global market access.
        </motion.p>

        {/* Key Benefits */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <Rocket className="text-yellow-500 mb-4" size={40} />,
              title: "Capital Growth Plans",
              description: "Monthly ROI up to 5% with SIP-style futuristic investment tracks.",
            },
            {
              icon: <ShieldCheck className="text-yellow-500 mb-4" size={40} />,
              title: "Legal & Transparent",
              description: "Every investor signs a capital agreement with transparent monthly reporting.",
            },
            {
              icon: <TrendingUp className="text-yellow-500 mb-4" size={40} />,
              title: "Multi-Asset Strategy",
              description: "Exposure to Forex, Crypto, Oil, Metals, and Prop Firms for balanced growth.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
            >
              {benefit.icon}
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bonus Grid */}
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {[
            {
              icon: <Briefcase className="text-yellow-500 mb-4" size={40} />,
              title: "Account Management",
              description: "We fully manage your capital with trading expertise and disciplined execution.",
            },
            {
              icon: <Wallet className="text-yellow-500 mb-4" size={40} />,
              title: "Low Advisory Fees",
              description: "Grow wealth with minimal cost — maximum transparency and returns.",
            },
            {
              icon: <Globe className="text-yellow-500 mb-4" size={40} />,
              title: "Global Reach",
              description: "Trade international markets with expert diversification and guidance.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              {benefit.icon}
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}