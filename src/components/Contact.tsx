"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
 
const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // Replace with API call
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  // Animation variants
  const formVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const inputVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
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

      <div className="container mx-auto px-6">
        <div className="-mx-4 flex flex-wrap  justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <motion.div
              className="mb-12 rounded-2xl bg-white dark:bg-gray-800 px-8 py-11 sm:p-12 lg:mb-5 lg:px-10 xl:p-14 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              variants={formVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="mb-4 text-3xl md:text-4xl font-extrabold text-[#b59459] dark:text-yellow-100">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-10 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our support team will get back to you ASAP via email with expert guidance on your investment queries.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <motion.div className="mb-8" variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-800 dark:text-yellow-100"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-3 text-base text-gray-800 dark:text-yellow-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                      />
                    </motion.div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <motion.div className="mb-8" variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-800 dark:text-yellow-100"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-3 text-base text-gray-800 dark:text-yellow-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                      />
                    </motion.div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <motion.div className="mb-8" variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-800 dark:text-yellow-100"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-3 text-base text-gray-800 dark:text-yellow-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                      />
                    </motion.div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <motion.div className="mb-8" variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-gray-800 dark:text-yellow-100"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-3 text-base text-gray-800 dark:text-yellow-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="investment_inquiry">Investment Inquiry</option>
                        <option value="account_management">Account Management</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>
                  </div>
                  <div className="w-full px-4">
                    <motion.div className="mb-8" variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-800 dark:text-yellow-100"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Describe your query or investment goals..."
                        required
                        className="w-full resize-none rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-3 text-base text-gray-800 dark:text-yellow-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                      ></textarea>
                    </motion.div>
                  </div>
                  <div className="w-full px-4">
                    <motion.button
                      type="submit"
                      className="rounded-lg bg-yellow-500 px-9 py-4 text-base font-semibold text-white shadow-lg hover:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-400 transition-all duration-200"
                      variants={inputVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.7 }}
                    >
                      Submit Ticket
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;