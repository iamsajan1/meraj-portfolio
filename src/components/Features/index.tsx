import SectionTitle from "../Common/SectionTitle";
import { CheckCircle } from "lucide-react";

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-20 md:py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Modern Abstract Pattern Background - Full Width Edge to Edge */}
      <div className="pointer-events-none absolute left-0 top-0 right-0 w-full h-full z-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-50 dark:opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 960"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="goldWave" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5c242" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M0,200 C400,100 800,300 1440,150 L1440,0 L0,0 Z" fill="url(#goldWave)" />
          <path d="M0,600 C300,500 900,700 1440,500 L1440,960 L0,960 Z" fill="url(#goldWave)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Choose Your Investment Track"
          paragraph="Tailored plans to match your financial goals."
          center
        />

        <div className="overflow-x-auto mt-12 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <table className="w-full border-collapse text-sm md:text-base text-left">
            <thead className="bg-yellow-50 dark:bg-dark text-yellow-700 dark:text-yellow-300">
              <tr>
                <th className="px-6 py-5 font-semibold uppercase">Lock-in</th>
                <th className="px-6 py-5 font-semibold uppercase">Return (Monthly)</th>
                <th className="px-6 py-5 font-semibold uppercase">ROI</th>
                <th className="px-6 py-5 font-semibold uppercase">Sharing</th>
                <th className="px-6 py-5 font-semibold uppercase">Exit</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {[
                ["6 months", "3.5%", "21%", "65/35", "5 Pent"],
                ["1 year", "4%", "43%", "70/30", "No Pent"],
                ["2 years", "5%", "120%", "75/25", "No Pent"]
              ].map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-yellow-50 dark:hover:bg-dark/40 transition"
                >
                  {row.map((cell, i) => (
                    <td key={i} className="px-6 py-5">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-6 mt-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-gray-800 dark:text-white">
          {[
            "Minimum Investment: ₹50,000",
            "Payout: Monthly or Compounded",
            "Capital Agreement Provided",
            "50% – Forex Trading (SMC)",
            "30% – Prop Firm Funded Accounts",
            "20% – Reserve (Liquidity Buffer)",
            "Risk Control in Place",
            "Monthly Snapshot Shared"
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <CheckCircle className="text-yellow-500 mt-1" size={20} />
              <span className="leading-snug font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;