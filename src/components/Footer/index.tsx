"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative pt-20 md:pt-24 lg:pt-32 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-hidden text-gray-900 dark:text-yellow-100">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Logo & Description */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
              <div className="flex items-center ">
                <Image
                  src="/images/logo/logo3.png"
                  alt="AhmadFX Logo"
                  width={100}
                  height={40}
                  className=""
                />
                <span className="text-[#b59459] font-bold text-2xl">Ahmad FX Team</span>
                
              </div>
                
                 
              </Link>
              <p className="mb-6 text-base text-gray-700 dark:text-white hover:text-[#b59459]">
                Empowering traders with insights, analysis, and proven strategies. Join our journey in mastering the forex markets.
              </p>
              <p className="mb-2 text-sm text-gray-800 dark:text-white">
                📞 <a href="tel:8052835237" className="hover:text-[#b59459]">8052835237</a>
              </p>
              <p className="text-sm text-gray-800 dark:text-white">
                ✉️ <a href="mailto:ahmadfxinvestor@gmail.com" className="hover:text-[#b59459]">ahmadfxinvestor@gmail.com</a>
              </p>
              <div className="flex items-center gap-5 mt-6 text-gray-700 dark:text-white">
                <a href="#" aria-label="Facebook" className="hover:text-[#b59459]">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.625 9.875v-7h-2v-2.875h2V9.5c0-2.02 1.193-3.125 3.022-3.125.875 0 1.796.156 1.796.156v2h-1.012c-.998 0-1.312.625-1.312 1.266v1.531h2.25L16 14.875h-2v7A10.002 10.002 0 0022 12z"/></svg>
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-[#b59459]">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37c-.85.51-1.78.88-2.78 1.08a4.27 4.27 0 00-7.29 3.89c-3.55-.18-6.71-1.88-8.82-4.48a4.28 4.28 0 001.32 5.7 4.24 4.24 0 01-1.93-.53v.05c0 2.12 1.51 3.89 3.5 4.29-.37.1-.77.15-1.18.15-.28 0-.57-.02-.84-.08a4.27 4.27 0 003.99 2.97A8.57 8.57 0 012 19.54 12.06 12.06 0 008.29 21c7.54 0 11.67-6.24 11.67-11.65 0-.18 0-.35-.01-.52a8.35 8.35 0 002.05-2.13z"/></svg>
                </a>
                <a href="#" aria-label="YouTube" className="hover:text-[#b59459]">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184a3.27 3.27 0 012.3 2.306C22.5 7.305 22.5 12 22.5 12s0 4.695-.585 6.51a3.269 3.269 0 01-2.3 2.306c-2.026.547-10.2.547-10.2.547s-8.174 0-10.2-.547a3.27 3.27 0 01-2.3-2.306C0 16.695 0 12 0 12s0-4.695.585-6.51A3.27 3.27 0 012.885 3.184C4.91 2.636 12 2.636 12 2.636s7.09 0 9.115.548zM9.545 15.568v-7.14l6.545 3.57-6.545 3.57z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-[#b59459]">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M4.983 3.5a2.5 2.5 0 11.001 5.001 2.5 2.5 0 01-.001-5.001zM2 8.5h4.5v13H2v-13zm6.5 0h4.75v1.771h.073c.73-1.378 2.516-2.823 5.177-2.823 3.657 0 4.25 2.846 4.25 6.369v7.683H20v-6.582c0-2.05-.038-4.692-2.86-4.692-2.863 0-3.302 2.232-3.302 4.542v6.732H8.5v-13z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-lg font-semibold text-gray-800 dark:text-[#b59459]">Quick Links</h2>
              <ul className="space-y-3">
                <li><Link href="/blog" className="text-sm hover:text-[#b59459]">Blog</Link></li>
                <li><Link href="/pricing" className="text-sm hover:text-[#b59459]">Pricing</Link></li>
                <li><Link href="/about" className="text-sm hover:text-[#b59459]">About</Link></li>
              </ul>
            </div>
          </div>

          {/* Legal */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-lg font-semibold text-gray-800 dark:text-[#b59459]">Legal</h2>
              <ul className="space-y-3">
                <li><Link href="/terms" className="text-sm hover:text-[#b59459]">TOS</Link></li>
                <li><Link href="/privacy" className="text-sm hover:text-[#b59459]">Privacy Policy</Link></li>
                <li><Link href="/refund-policy" className="text-sm hover:text-[#b59459]">Refund Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-lg font-semibold text-gray-800 dark:text-[#b59459]">Support</h2>
              <ul className="space-y-3">
                <li><Link href="/contact" className="text-sm hover:text-[#b59459]">Open Support Ticket</Link></li>
                <li><Link href="/faq" className="text-sm hover:text-[#b59459]">FAQs</Link></li>
                <li><Link href="/about" className="text-sm hover:text-[#b59459]">About Us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#b59459] my-8"></div>

        <p className="text-center text-sm text-gray-700 dark:text-[#b59459]">
          &copy; {new Date().getFullYear()} Ahmad FX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
