"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] py-12 px-6 overflow-hidden">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
          className="flex items-center gap-3">
          <div className="w-5 h-[1px] bg-white/15" />
          <span className="text-xs tracking-[0.2em] uppercase text-white/25">© 2026 Mohammed Arshad P P</span>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[10px] tracking-[0.3em] uppercase text-white/15">
          Front-End &amp; MERN Stack Developer · Kozhikode, Kerala
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3">
          <a href="https://mhd-arshad-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer"
            className="text-xs tracking-[0.2em] uppercase text-white/25 hover:text-white/50 transition-colors">Portfolio</a>
          <div className="w-5 h-[1px] bg-white/15" />
        </motion.div>
      </div>
    </footer>
  );
}
