import SectionTitle from "../Common/SectionTitle";
import { CheckCircle } from "lucide-react";
const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-dark transition-colors duration-300">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Choose Your Investment Track"
          paragraph="Select a plan that matches your commitment level and financial goals."
          center
        />

        <div className="overflow-x-auto mt-10 rounded-2xl shadow-lg">
          <table className="w-full border-collapse text-sm md:text-base text-left">
            <thead className="bg-gray-100 dark:bg-dark/30 text-gray-700 dark:text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Lock-in</th>
                <th className="px-6 py-4 font-semibold">Return (Monthly)</th>
                <th className="px-6 py-4 font-semibold">ROI</th>
                <th className="px-6 py-4 font-semibold">Sharing</th>
                <th className="px-6 py-4 font-semibold">Exit</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-dark/40 transition">
                <td className="px-6 py-4">6 months</td>
                <td className="px-6 py-4">3.5%</td>
                <td className="px-6 py-4">21%</td>
                <td className="px-6 py-4">65/35</td>
                <td className="px-6 py-4">5 Pent</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-dark/40 transition">
                <td className="px-6 py-4">1 year</td>
                <td className="px-6 py-4">4%</td>
                <td className="px-6 py-4">43%</td>
                <td className="px-6 py-4">70/30</td>
                <td className="px-6 py-4">No Pent</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-dark/40 transition">
                <td className="px-6 py-4">2 years</td>
                <td className="px-6 py-4">5%</td>
                <td className="px-6 py-4">120%</td>
                <td className="px-6 py-4">75/25</td>
                <td className="px-6 py-4">No Pent</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-gray-800 dark:text-white">
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
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="text-yellow-500 mt-1" size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
