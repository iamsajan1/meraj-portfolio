"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
  FaRegMoneyBillAlt,
  FaLock,
  FaWallet,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const plans = [
  {
    period: "6 Months",
    roi: "3%",
    withdrawal: "Maturity Period",
    penalty: "18%",
    badge: "Starter",
    icon: <FaWallet />,
  },
  {
    period: "1 Year",
    roi: "4%",
    withdrawal: "Maturity Period",
    penalty: "48%",
    badge: "Growth",
    icon: <FaLock />,
  },
  {
    period: "2 Years",
    roi: "5%",
    withdrawal: "Maturity Period",
    penalty: "120%",
    badge: "Pro",
    icon: <FaRegMoneyBillAlt />,
  },
];

const faqs = [
  {
    q: "What is the minimum investment?",
    a: "₹50,000 is the minimum to get started.",
  },
  {
    q: "Is this passive income?",
    a: "Yes. You don’t need to trade — we manage everything.",
  },
  {
    q: "Where can I see trades?",
    a: "All trades are visible through your MT5 real account.",
  },
];

export default function InvestmentPlans() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f5f5f5] to-white dark:from-[#111] dark:to-[#1a1a1a] py-20 px-4">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 mb-20 h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-5xl font-extrabold text-[#b59459] mb-4">
            Flexible Investment Plans
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Earn passive income monthly with verified ROI, transparent trading
            via MT5, and risk-controlled strategies.
          </p>
        </motion.div>

        {/* Enhanced Image Section */}
       <div className="lg:w-1/2 flex justify-center relative">
  {/* Background glow (square blur) */}
  <div className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] bg-[#b59459]/20 rounded-2xl blur-2xl z-0 shadow-inner" />

  {/* Framed image */}
  <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] z-10 rounded-2xl overflow-hidden border-4 border-[#b59459]/30 shadow-xl">
    <Image
      src="/images/hero/hero11.jpg"
      fill
      alt="Investment Hero"
      className="object-cover"
    />
  </div>

</div>

      </section>

      {/* Investment Plans */}
      <section
        id="plans"
        className="max-w-7xl mx-auto mb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative rounded-2xl p-6 border dark:border-[#333] bg-gradient-to-br from-white to-[#fdf7f1] dark:from-[#1a1a1a] dark:to-[#111] shadow-xl overflow-hidden"
          >
            <span className="absolute top-4 right-4 bg-[#b59459] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              {plan.badge}
            </span>

            <div className="text-[#b59459] text-4xl mb-4">{plan.icon}</div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {plan.period}
            </h3>

            <div className="border-t border-[#b59459]/30 my-3" />

            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>
                <strong>ROI:</strong> {plan.roi} per month
              </li>
              <li>
                <strong>Withdrawals:</strong> {plan.withdrawal}
              </li>
              <li>
                <strong>Early Exit Fee:</strong> {plan.penalty} of principal
              </li>
              <li>
                <strong>Min Investment:</strong> ₹50,000
              </li>
              <li>
                <strong>Platform:</strong> MT5 Real Account
              </li>
            </ul>
          </motion.div>
        ))}
      </section>

      {/* Trust & Security */}
      <section className="max-w-5xl mx-auto text-center mb-24">
        <h3 className="text-3xl font-bold text-[#b59459] mb-10">
          Why Trust Ahmad FX Team?
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "MT5 Real Trades",
              icon: <FaShieldAlt size={28} />,
              desc: "You can view live trades through your MT5 account.",
            },
            {
              title: "Investor Agreement",
              icon: <FaLock size={28} />,
              desc: "Each investor signs a formal agreement before funding.",
            },
            {
              title: "Verified Payouts",
              icon: <FaCheckCircle size={28} />,
              desc: "We provide monthly ROI proofs and transparent records.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white dark:bg-[#1f1f1f] p-6 rounded-xl shadow border dark:border-[#333]"
            >
              <div className="text-[#b59459] mb-4">{item.icon}</div>
              <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto mb-10">
        <h3 className="text-3xl font-bold text-center text-[#b59459] mb-8">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#1e1e1e] rounded-lg shadow overflow-hidden border dark:border-gray-700"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="font-medium text-gray-800 dark:text-white">
                  {faq.q}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {openFAQ === idx ? "−" : "+"}
                </span>
              </button>
              {openFAQ === idx && (
                <div className="px-6 pb-4 text-gray-700 dark:text-gray-300 text-sm">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
