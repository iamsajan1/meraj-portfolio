"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="shadow-three dark:bg-gray-900 relative z-10 rounded-xl bg-white p-8 sm:p-11 lg:p-8 xl:p-11 text-gray-800 dark:text-yellow-100">
      <h3 className="mb-4 text-2xl leading-tight font-bold text-black dark:text-yellow-100">
        Subscribe for Forex Insights
      </h3>
      <p className="border-body-color/25 text-body-color mb-11 border-b pb-11 text-base leading-relaxed dark:border-yellow-300/25">
        Stay updated with the latest market trends, strategies, and expert tips. Directly to your inbox.
      </p>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="border-stroke focus:border-yellow-400 dark:text-yellow-100 mb-4 w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base outline-none dark:border-transparent dark:bg-gray-800 dark:focus:border-yellow-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border-stroke focus:border-yellow-400 dark:text-yellow-100 mb-4 w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base outline-none dark:border-transparent dark:bg-gray-800 dark:focus:border-yellow-500"
        />
        <input
          type="submit"
          value="Subscribe"
          className="bg-yellow-500 shadow-lg hover:bg-yellow-400 mb-5 flex w-full cursor-pointer items-center justify-center rounded-md px-9 py-4 text-base font-semibold text-white transition-all"
        />
        <p className="text-body-color dark:text-yellow-300 text-center text-sm leading-relaxed">
          We respect your privacy. No spam, ever.
        </p>
      </div>

      <div>
        {/* Decorative Patterns - Optional */}
        <span className="absolute top-7 left-2">
          {/* Add subtle golden SVG if needed */}
        </span>
        <span className="absolute bottom-24 left-1.5">
          {/* Add subtle golden SVG if needed */}
        </span>
        <span className="absolute top-[140px] right-2">
          {/* Add subtle golden SVG if needed */}
        </span>
        <span className="absolute top-0 right-0">
          {/* Add subtle golden SVG if needed */}
        </span>
      </div>
    </div>
  );
};

export default NewsLatterBox;
