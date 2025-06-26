"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 h-screen w-full overflow-hidden"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={images[current]}
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto h-full px-4 text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          SECURE YOUR FUTURE
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-yellow-400 font-medium mb-4 drop-shadow">
          with passive monthly income
        </h2>
        <p className="max-w-2xl text-lg sm:text-xl text-white/90 mb-10 drop-shadow">
          We help serious investors grow their wealth through proven trading strategies, smart risk management, and elite market insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-md shadow-md transition duration-300"
          >
           View purposal Pdf
          </Link>
          <Link
            href="#about"
            className="border border-white text-white hover:border-yellow-500 hover:text-yellow-400 font-semibold px-8 py-4 rounded-md shadow-md transition duration-300"
          >
            Fill Investor Form
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;