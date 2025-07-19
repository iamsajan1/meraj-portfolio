"use client";

import { motion } from "framer-motion";
import { FaBitcoin, FaEthereum, FaCoins } from "react-icons/fa";
import { SiDogecoin, SiLitecoin, SiTether } from "react-icons/si";

export default function CryptoBundle() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white py-24 md:py-32 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <svg
          viewBox="0 0 1440 320"
          className="h-full w-full opacity-30 dark:opacity-10"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="goldWave" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5c242" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#goldWave)"
            d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,85.3C672,64,768,64,864,80C960,96,1056,128,1152,149.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L0,0Z"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 text-4xl font-extrabold text-[#b59459] md:text-5xl"
        >
          Future-Proof Your Wealth with Crypto
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-base text-gray-700 md:text-lg dark:text-gray-300"
        >
          Explore our managed crypto bundles — crafted for long-term growth
          across top assets like Bitcoin, Ethereum, and trending altcoins. Built
          like SIPs, secured with expertise.
        </motion.p>

        {/* Coin Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-wrap items-center justify-center gap-6 text-3xl md:text-4xl"
        >
          <FaBitcoin className="text-yellow-500" title="Bitcoin" />
          <FaEthereum className="text-blue-500" title="Ethereum" />
          <SiDogecoin className="text-pink-400" title="Dogecoin" />
          <SiLitecoin className="text-gray-400" title="Litecoin" />
          <SiTether className="text-green-500" title="Tether" />
          <FaCoins className="text-purple-500" title="Altcoins" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Tailored crypto bundles managed by professionals",
            "Top asset exposure: BTC, ETH, meme coins & more",
            "Low advisory cost, high return strategies",
            "Monthly reports & performance dashboards",
            "DeFi, staking, farming integrated with security",
            "Wallet flexibility: custodial & personal options",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                rotateX: -4,
                rotateY: 4,
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex rounded-xl border border-yellow-300 bg-yellow-50 p-6 text-left shadow-md transition hover:shadow-lg dark:border-yellow-300 dark:bg-yellow-100/10"
            >
              <p className="text-sm leading-relaxed text-gray-800 dark:text-yellow-100">
                <span className="mr-2 font-bold text-[#b59459]">●</span>
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
