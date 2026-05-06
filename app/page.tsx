"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import InteractiveShowcase from "@/components/InteractiveShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Dynamically import the heavy canvas hero (no SSR)
const FaceScroll = dynamic(() => import("@/components/FaceScroll"), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full flex items-center justify-center bg-[#050505]">
      <div className="text-[10px] tracking-[0.35em] uppercase text-white/20 animate-pulse">
        Initializing
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="relative bg-[#050505] overflow-x-hidden">
      <Navbar />

      {/* 1. Hero scrollytelling — 400vh canvas sequence */}
      <FaceScroll />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* 2. About */}
      <About />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* 3. Experience */}
      <Experience />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* 4. Education */}
      <Education />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* 4. Skills */}
      <Skills />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* 5. Projects */}
      <Projects />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* 6. Interactive Showcase */}
      <InteractiveShowcase />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* 7. Contact */}
      <Contact />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
