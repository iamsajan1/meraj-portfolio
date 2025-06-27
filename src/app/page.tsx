import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
 import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
 import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmad FX Team",
  description: "Secure your future with Ahmad FX Team - the leading forex trading team. Join us for expert guidance, innovative strategies, and a community of successful traders.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <AboutSectionOne />
      <Testimonials />
       <Blog />
      <Contact />
    </>
  );
}
