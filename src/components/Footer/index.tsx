"use client";

import { Linkedin, Mail, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SimpleDialog from "../SimpleDialog";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white pt-20 text-gray-900 transition-colors duration-300 md:pt-24 lg:pt-32 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-yellow-100">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Logo & Description */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <div className="flex items-center">
                  <Image
                    src="/images/logo/logo3.png"
                    alt="AhmadFX Logo"
                    width={100}
                    height={40}
                    className=""
                  />
                  <span className="text-2xl font-bold text-[#b59459]">
                    Ahmad FX Team
                  </span>
                </div>
              </Link>
              <p className="mb-6 text-base text-gray-700 hover:text-[#b59459] dark:text-white">
                Empowering traders with insights, analysis, and proven
                strategies. Join our journey in mastering the forex markets.
              </p>
              <p className="mb-2 text-sm text-gray-800 dark:text-white">
                <a
                  href="tel:+918052835237"
                  className="flex items-center gap-2 hover:text-[#b59459]"
                >
                  <Phone className="h-5 w-5" />
                  <span>+918052835237</span>
                </a>
              </p>
              <p className="text-sm text-gray-800 dark:text-white">
                <a
                  href="mailto:ahmadfxinvestor@gmail.com"
                  className="flex items-center gap-2 hover:text-[#b59459]"
                >
                  <Mail className="h-5 w-5" />
                  ahmadfxinvestor@gmail.com
                </a>
              </p>
              <div className="mt-6 flex items-center gap-5 text-gray-700 dark:text-white">
                <a
                  href="https://www.facebook.com/share/16YqaXerqT/"
                  aria-label="Facebook"
                  className="hover:text-[#b59459]"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 10-11.625 9.875v-7h-2v-2.875h2V9.5c0-2.02 1.193-3.125 3.022-3.125.875 0 1.796.156 1.796.156v2h-1.012c-.998 0-1.312.625-1.312 1.266v1.531h2.25L16 14.875h-2v7A10.002 10.002 0 0022 12z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/Meraj547?t=YmpY-RrP-HXyR2kaPQbWBQ&s=03"
                  aria-label="Twitter"
                  className="hover:text-[#b59459]"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37c-.85.51-1.78.88-2.78 1.08a4.27 4.27 0 00-7.29 3.89c-3.55-.18-6.71-1.88-8.82-4.48a4.28 4.28 0 001.32 5.7 4.24 4.24 0 01-1.93-.53v.05c0 2.12 1.51 3.89 3.5 4.29-.37.1-.77.15-1.18.15-.28 0-.57-.02-.84-.08a4.27 4.27 0 003.99 2.97A8.57 8.57 0 012 19.54 12.06 12.06 0 008.29 21c7.54 0 11.67-6.24 11.67-11.65 0-.18 0-.35-.01-.52a8.35 8.35 0 002.05-2.13z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="hover:text-[#b59459]"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/80528835237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#25D366]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="hover:text-[#b59459]"
                  >
                    <path d="M20.52 3.48A11.83 11.83 0 0 0 12 0a11.83 11.83 0 0 0-8.52 3.48A11.83 11.83 0 0 0 0 12a11.83 11.83 0 0 0 3.48 8.52A11.83 11.83 0 0 0 12 24a11.83 11.83 0 0 0 8.52-3.48A11.83 11.83 0 0 0 24 12a11.83 11.83 0 0 0-3.48-8.52ZM12 22a9.94 9.94 0 0 1-5.1-1.38l-.36-.22-3.8 1 1-3.8-.22-.36A10 10 0 1 1 12 22Zm5.56-7.44c-.3-.15-1.76-.86-2.03-.96s-.47-.15-.67.15-.77.96-.95 1.15-.35.22-.65.07a8.18 8.18 0 0 1-2.4-1.48 8.93 8.93 0 0 1-1.65-2.06c-.17-.3 0-.46.13-.6.13-.13.3-.35.45-.52a2 2 0 0 0 .3-.5.52.52 0 0 0 0-.52c-.07-.15-.67-1.62-.92-2.2s-.47-.52-.67-.52h-.57a1.1 1.1 0 0 0-.82.38 3.45 3.45 0 0 0-1.1 2.6c0 1.53 1.1 3 1.25 3.22s2.18 3.32 5.3 4.52c.74.32 1.32.5 1.77.64a4.78 4.78 0 0 0 2.18.13c.67-.1 2.05-.84 2.33-1.66s.28-1.52.2-1.66-.27-.2-.57-.35Z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/meraj-ahmad-131a8721a"
                  className="hover:text-[#b59459]"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://t.me/YourTelegramUsername"
                  aria-label="Telegram"
                  className="hover:text-[#b59459]"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M21.05 2.53L2.58 10.39c-.63.26-.62.96-.11 1.18l4.87 1.89 1.82 5.83c.24.75.63.93 1.28.57l2.54-1.88 4.26 3.14c.78.43 1.34.21 1.53-.72l2.76-13.01c.28-1.34-.5-1.93-1.48-1.46zM9.45 14.6l-.3 3.09 1.21-2.02 5.68-5.11-7.57 4.16c.02.01.03.02.03.03l.95-.15z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-lg font-semibold text-gray-800 dark:text-[#b59459]">
                Quick Links
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog" className="text-sm hover:text-[#b59459]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm hover:text-[#b59459]"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm hover:text-[#b59459]">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-lg font-semibold text-gray-800 dark:text-[#b59459]">
                Legal
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-sm hover:text-[#b59459]">
                    TOS
                  </Link>
                </li>

                <li>
                  <SimpleDialog
                    label="Refund Policy"
                    title="Refund Policy"
                    content={
                      <>
                        Early withdrawal of funds prior to the agreed investment
                        term will incur a{" "}
                        <strong>10% principal deduction</strong> as an early
                        exit penalty. This is clearly outlined in the investor
                        agreement to ensure fairness, stability, and protection
                        of overall fund performance.
                      </>
                    }
                  />
                </li>

                <li>
                  <SimpleDialog
                    label="Privacy & policy"
                    title="Privacy & Fund Security"
                    content={
                      <>
                        Your funds are safeguarded with institutional-level
                        practices. We operate in collaboration with licensed
                        hedge fund partners and employ robust risk management
                        protocols to protect your capital. There is no exposure
                        to unauthorized third-party access or speculative
                        trading. In the event of any rare technical disruption,
                        appropriate compensation will be offered based on the
                        investor agreement. All personal information is kept
                        strictly confidential in accordance with data protection
                        laws. We do not share, sell, or disclose client data to
                        any external party without written consent.
                      </>
                    }
                  />
                </li>
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-lg font-semibold text-gray-800 dark:text-[#b59459]">
                Support
              </h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-sm hover:text-[#b59459]"
                  >
                    Open Support Ticket
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm hover:text-[#b59459]">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm hover:text-[#b59459]">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-8 border-t border-[#b59459]"></div>

        <p className="text-center text-sm text-gray-700 dark:text-[#b59459]">
          &copy; {new Date().getFullYear()} Ahmad FX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
