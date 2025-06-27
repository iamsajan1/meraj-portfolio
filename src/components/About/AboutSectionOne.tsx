"use client";

import Image from "next/image";
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
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-6 leading-tight">
            Empower Your Investment Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10">
            We help you grow capital confidently with compounding returns, secure legal backing, and diversified fund management. Start building wealth smarter.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Rocket className="text-yellow-500" size={24} />
              <span className="text-dark dark:text-white font-medium">Up to 120% ROI with compounding plans</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-yellow-500" size={24} />
              <span className="text-dark dark:text-white font-medium">Capital protected by legal agreements</span>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="text-yellow-500" size={24} />
              <span className="text-dark dark:text-white font-medium">Diversified strategy: Forex + Prop Firms</span>
            </div>
          </div>
        </div>

        {/* Right Image Stack - New Dynamic Layout */}
        <div className="relative w-full max-w-xl">
          <div className="relative h-[500px]">
            <div className="absolute top-0 left-0 w-3/5 h-3/5 z-20 rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-400">
              <Image
                src="/images/hero/hero1.jpg"
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3/5 h-3/5 z-10 rounded-xl overflow-hidden shadow-xl border-2 border-yellow-500">
              <Image
                src="/images/hero/hero2.jpg"
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-[320px] z-30 rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-300">
              <Image
                src="/images/hero/hero3.jpg"
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
