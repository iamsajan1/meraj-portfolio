"use client";

import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Handle dialog open/close
  const openDialog = () => {
    setIsDialogOpen(true);
    setSubmitStatus("idle");
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    dialogRef.current?.close();
  };

  // Close dialog when clicking outside
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      closeDialog();
    }
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Initialize EmailJS with your public key
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'kumarSantosh.iict06a@gmail.com'
        }
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(closeDialog, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
            d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,85.3C672,64,768,64,864,80C960,96,1056,128,1152,149 creatively.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <motion.div
              className="mb-12 text-center"
              variants={formVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="mb-4 text-3xl md:text-4xl font-extrabold text-[#b59459] dark:text-yellow-100">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-10 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Our support team will get back to you ASAP via email with expert guidance on your investment queries.
              </p>
              <motion.button
                onClick={openDialog}
                className="rounded-lg bg-yellow-500 px-9 py-4 text-base font-semibold text-white shadow-lg hover:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-400 transition-all duration-200"
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                Open Support Form
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Dialog Form */}
        <dialog
          ref={dialogRef}
          onClick={handleDialogClick}
          className="fixed inset-0 m-auto max-w-lg w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 backdrop:bg-black/60 dark:backdrop:bg-black/75 transition-all duration-300"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-[#b59459] dark:text-yellow-100">
                Submit a Support Ticket
              </h2>
              <button
                type="button"
                onClick={closeDialog}
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition-transform hover:scale-110"
                aria-label="Close"
                disabled={isSubmitting}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 mb-4 text-green-800 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
              >
                Thank you! Your ticket has been submitted successfully.
              </motion.div>
            )}
            
            {submitStatus === "error" && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 mb-4 text-red-800 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              >
                There was an error submitting your ticket. Please try again.
              </motion.div>
            )}

            {/* Form fields remain the same as before */}
            {/* Name */}
            <motion.div variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
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
                disabled={isSubmitting}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-3 text-base text-gray-800 dark:text-yellow-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200 disabled:opacity-70"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
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
                disabled={isSubmitting}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-3 text-base text-gray-800 dark:text-yellow-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200 disabled:opacity-70"
              />
            </motion.div>

            {/* Phone */}
            <motion.div variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
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
                disabled={isSubmitting}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-3 text-base text-gray-800 dark:text-yellow-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200 disabled:opacity-70"
              />
            </motion.div>

            {/* Subject */}
            <motion.div variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
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
                disabled={isSubmitting}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-3 text-base text-gray-800 dark:text-yellow-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200 disabled:opacity-70"
              >
                <option value="">Select a subject</option>
                <option value="investment_inquiry">Investment Inquiry</option>
                <option value="account_management">Account Management</option>
                <option value="support">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            {/* Message */}
            <motion.div variants={inputVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>
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
                disabled={isSubmitting}
                className="w-full resize-none rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-3 text-base text-gray-800 dark:text-yellow-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200 disabled:opacity-70"
              ></textarea>
            </motion.div>

            {/* Form Buttons */}
            <div className="flex justify-end gap-4">
              <motion.button
                type="button"
                onClick={closeDialog}
                className="px-6 py-2.5 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-semibold rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.7 }}
                disabled={isSubmitting}
              >
                Cancel
              </motion.button>
              <motion.button
                type="submit"
                className="px-6 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-32"
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : "Submit Ticket"}
              </motion.button>
            </div>
          </form>
        </dialog>
      </div>
    </section>
  );
};

export default Contact;