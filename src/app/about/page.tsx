"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      {/* Hero Section */}
      <section className="relative flex h-[70vh] w-full items-center justify-center bg-transparent text-center">
  {/* Background Image */}
  <Image
    src="/images/hero/hero1.jpg"
    alt="About Background"
    layout="fill"
    objectFit="cover"
    className="absolute inset-0"
  />

  {/* Blackish Overlay */}
  <div className="absolute inset-0 bg-black/20 z-0" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 max-w-3xl px-6"
  >
    <h1 className="mb-4 text-4xl font-bold text-yellow-600 sm:text-5xl dark:text-yellow-400">
      About Ahmad FX Investors
    </h1>
    <p className="text-lg text-white dark:text-white">
      Our journey, values, and vision to grow your wealth confidently.
    </p>
  </motion.div>
</section>

      {/* Who We Are */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/hero/hero1.jpg"
              alt="Our Team"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              Who We Are
            </h2>
            <p className="leading-relaxed text-gray-800 dark:text-white/80">
              We are a passionate team of finance professionals and market
              experts, committed to helping investors like you achieve long-term
              wealth. With over a decade of combined experience, our team has
              mastered trading, risk management, and portfolio growth strategies
              designed to produce stable monthly returns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 px-6 py-20 transition-colors duration-300 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h2
            className="mb-6 text-3xl font-bold text-yellow-600 dark:text-yellow-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Why Choose Ahmad FX?
          </motion.h2>
          <motion.p
            className="mx-auto mb-12 max-w-3xl text-gray-700 dark:text-white/80"
            initial={{ opacity: 10 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            With legal capital protection, high returns, and a diversified
            strategy (including Forex and Prop Firms), we stand out as your
            safest and most profitable investment partner.
          </motion.p>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Legal Capital Protection",
                icon: "/icons/shield.svg",
                desc: "Your investment is secured with legal agreements and transparent terms.",
              },
              {
                title: "Up to 120% ROI",
                icon: "/icons/growth.svg",
                desc: "Enjoy steady, compounding returns every month with our proven strategy.",
              },
              {
                title: "Diversified Fund Management",
                icon: "/icons/diversify.svg",
                desc: "We combine multiple revenue streams to reduce risk and increase gains.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="rounded-xl bg-white p-6 shadow-lg transition hover:shadow-yellow-500/20 dark:bg-gray-800"
              >
                <h3 className="mt-4 mb-2 text-xl font-semibold text-yellow-600 dark:text-yellow-400">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              Our Vision
            </h2>
            <p className="mb-6 leading-relaxed text-gray-800 dark:text-white/80">
              At Ahmad FX Investors, we envision a world where financial freedom
              is accessible to every serious investor. Our vision is not just
              about growing wealth—it’s about building a future you can trust.
            </p>
            <Link
              href="#contact"
              className="inline-block rounded-md bg-yellow-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-yellow-600"
            >
              Start Your Journey
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/hero/hero1.jpg"
              alt="Vision"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
