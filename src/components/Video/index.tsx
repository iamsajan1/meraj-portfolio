"use client";

import Image from "next/image";
import { Rocket, ShieldCheck, TrendingUp } from "lucide-react";

export default function Video() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 -z-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full opacity-40 dark:opacity-20"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="patternGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5c242" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#patternGold)"
            d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,85.3C672,64,768,64,864,80C960,96,1056,128,1152,149.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
          Why Investors Trust Us
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Your capital is managed with precision and integrity — backed by legal agreements,
          transparent reports, and expert trading across multiple markets.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Rocket className="text-yellow-500 mb-4" size={36} />
            <h4 className="text-xl font-semibold text-dark dark:text-white mb-2">
              Fast Capital Growth
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Enjoy monthly ROI from 3.5% to 5% with lock-in flexibility for 6 months to 2 years.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="text-yellow-500 mb-4" size={36} />
            <h4 className="text-xl font-semibold text-dark dark:text-white mb-2">
              Full Legal Assurance
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Capital agreement and reporting ensure your investment is always protected and tracked.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <TrendingUp className="text-yellow-500 mb-4" size={36} />
            <h4 className="text-xl font-semibold text-dark dark:text-white mb-2">
              Diversified Strategy
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              We operate across Forex, Prop Firms, and Reserve pools for balanced, consistent results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
