"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/hero/hero6.jpg",
  "/images/hero/hero7.jpg",
  "/images/hero/hero8.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    description: "",
    investmentGoal: "",
    riskTolerance: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle dialog open/close
  const openDialog = (e) => {
    e.preventDefault();
    setIsDialogOpen(true);
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    dialogRef.current?.close();
   
  };

  // Close dialog when clicking outside
  const handleDialogClick = (e) => {
    if (e.target === dialogRef.current) {
      closeDialog();
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // Replace with actual submission logic
    setFormData({
      name: "",
      email: "",
      amount: "",
      description: "",
      investmentGoal: "",
      riskTolerance: "",
    });
    closeDialog();
  };

  return (
    <section
      id="home"
      className="relative z-10 h-screen w-full overflow-hidden"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto h-full px-4 text-center flex flex-col justify-center items-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          SECURE YOUR FUTURE
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl text-yellow-400 font-medium mb-4 drop-shadow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          with passive monthly income
        </motion.h2>

        <motion.p
          className="max-w-2xl text-lg sm:text-xl text-white/90 mb-10 drop-shadow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          We help serious investors grow their wealth through proven trading strategies, smart risk management, and elite market insights.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Link
            download="InvestorModel"
            href="/InvestorModel.pdf"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-md shadow-md transition duration-300"
          >
            View Proposal PDF
          </Link>
          <button
            onClick={openDialog}
            className="border border-white text-white hover:border-yellow-500 hover:text-yellow-400 font-semibold px-8 py-4 rounded-md shadow-md transition duration-300"
          >
            Fill Investor Form
          </button>
        </motion.div>
      </div>

      {/* Dialog Form */}
      <dialog
        ref={dialogRef}
        onClick={handleDialogClick}
        className="fixed inset-0 m-auto max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 backdrop:bg-black/50 dark:backdrop:bg-black/70"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Investor Form
            </h2>
            <button
              type="button"
              onClick={closeDialog}
              className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          </div>

          {/* Investment Amount */}
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Investment Amount ($)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              required
              min="0"
              step="1000"
              className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          </div>

          {/* Investment Goal */}
          <div>
            <label htmlFor="investmentGoal" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Investment Goal
            </label>
            <select
              id="investmentGoal"
              name="investmentGoal"
              value={formData.investmentGoal}
              onChange={handleInputChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            >
              <option value="">Select a goal</option>
              <option value="retirement">Retirement</option>
              <option value="wealth">Wealth Building</option>
              <option value="income">Passive Income</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Risk Tolerance */}
          <div>
            <label htmlFor="riskTolerance" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Risk Tolerance
            </label>
            <select
              id="riskTolerance"
              name="riskTolerance"
              value={formData.riskTolerance}
              onChange={handleInputChange}
              required
              className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            >
              <option value="">Select risk level</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Investment Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
           
              className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              placeholder="Describe your investment objectives or any specific details..."
            />
          </div>

          {/* Form Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={closeDialog}
              className="px-6 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 font-semibold rounded-lg transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition"
            >
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </section>
  );
};

export default Hero;