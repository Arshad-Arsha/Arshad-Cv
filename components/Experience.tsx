"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TypeWriter from "@/components/TypeWriter";

const experiences = [
  {
    period: "Sep 2023 — Present",
    role: "Software Developer",
    company: "Posibolt Solutions Pvt. Ltd.",
    location: "Kozhikode, Kerala",
    description: "Architecting React modules serving 10,000+ daily active users. Spearheading migration from vanilla JS to React.js for enhanced component reusability. Optimizing bundle sizes via code-splitting and lazy loading in Vite. Maintaining 98% design fidelity converting Figma prototypes with Tailwind CSS and Bootstrap.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Bootstrap", "TypeScript", "Figma"],
  },
  {
    period: "Mar 2022 — Aug 2023",
    role: "Web Developer",
    company: "The Chandraz",
    location: "Malappuram, Kerala",
    description: "Deployed web applications for home care services reaching 5,000+ users. Translated 20+ Figma design prototypes into production-ready web components adhering to brand guidelines. Enhanced performance through strategic image optimization and asset minification.",
    tags: ["JavaScript", "HTML5", "CSS3", "Figma", "Responsive Design"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} id="experience"
      className="relative py-32 md:py-48 px-6 overflow-hidden"
      style={{ position: "relative", zIndex: 10, background: "rgba(5,5,5,0.46)" }}
    >
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[700px] rounded-full bg-white/[0.015] blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="hero-label mb-4 block">Career</span>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extralight tracking-[-0.04em] text-heading leading-[1.05]">
            <TypeWriter text="Experience" cursor />
          </h2>
          <div className="mt-6 flex items-center gap-4 text-white/30">
            <div className="w-12 h-[1px] bg-white/15" />
            <span className="text-xs tracking-[0.2em] uppercase">3+ Years · Frontend &amp; MERN Stack</span>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-0 md:left-[200px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/15 via-white/8 to-transparent"
            initial={{ scaleY: 0 }} animate={isInView ? { scaleY: 1 } : {}}
            style={{ originY: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="flex flex-col gap-16">
            {experiences.map((exp, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -80, scale: 0.95 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.85, delay: 0.3 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col md:flex-row gap-6 md:gap-0 pl-8 md:pl-0"
              >
                <div className="md:w-[200px] md:pr-10 flex-shrink-0">
                  <span className="text-[11px] tracking-widest uppercase text-white/30 block mb-1">{exp.period}</span>
                  <span className="text-[10px] text-white/20">{exp.location}</span>
                </div>

                <div className="hidden md:flex items-start justify-center w-0 relative">
                  <div className="absolute -left-[12px] top-[4px] flex items-center justify-center">
                    {/* Outer rotating colorful ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="absolute w-6 h-6 rounded-full p-[1px] flex items-center justify-center"
                      style={{ 
                        background: "conic-gradient(from 0deg, #4ade80, #f87171, #facc15, #c084fc, #4ade80)",
                        WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 1px))",
                        mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 1px))"
                      }}
                    />
                    
                    {/* Inner pulsing dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.18 }}
                      className="w-2.5 h-2.5 rounded-full bg-white/30 backdrop-blur-sm border border-white/20 relative z-10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-white"
                      />
                    </motion.div>
                  </div>
                </div>

                <div className="flex-1 md:pl-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.45 + i * 0.18 }}
                    className="glass glow-border rounded-2xl p-6 md:p-8 glass-hover group transition-all duration-500"
                  >
                    <div className="mb-1 text-xs tracking-[0.2em] uppercase text-white/30">{exp.company}</div>
                    <h3 className="text-xl font-light text-heading mb-3 tracking-tight">{exp.role}</h3>
                    <p className="text-sm text-white/45 leading-relaxed mb-6 font-light">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, ti) => (
                        <motion.span key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: 0.6 + i * 0.18 + ti * 0.05 }}
                          className="px-2.5 py-1 rounded-full text-[10px] tracking-wider uppercase bg-white/[0.04] border border-white/[0.07] text-white/40"
                        >{tag}</motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
