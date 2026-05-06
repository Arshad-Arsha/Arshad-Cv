"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TypeWriter from "@/components/TypeWriter";

const education = [
  {
    period: "Jul 2019 — Apr 2022",
    degree: "Bachelor of Computer Application",
    short: "BCA",
    institution: "ISBM University",
    location: "India",
    description: "Completed Bachelor of Computer Application with a focus on web technologies, software development, database management, and computer science fundamentals.",
    tags: ["Computer Science", "Web Technologies", "Software Development", "Database Management"],
  },
];

const languages = [
  { name: "Malayalam", level: "Mother Tongue", pct: 100 },
  { name: "English", level: "C2 Listening · C1 Reading & Writing", pct: 90 },
  { name: "Hindi", level: "B2 Reading · B1 Listening", pct: 65 },
];

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-32 md:py-48 px-6 overflow-hidden"
      style={{ position: "relative", zIndex: 10, background: "rgba(5,5,5,0.46)" }}
    >
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] rounded-full bg-white/[0.012] blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="hero-label mb-4 block">Academic Background</span>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extralight tracking-[-0.04em] text-heading leading-[1.05]">
            <TypeWriter text="Education" cursor />
          </h2>
          <div className="mt-6 flex items-center gap-4 text-white/30">
            <div className="w-12 h-[1px] bg-white/15" />
            <span className="text-xs tracking-[0.2em] uppercase">ISBM University · 2019 – 2022</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Degree card — takes 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -60, scale: 0.95 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="glass glow-border rounded-3xl p-8 md:p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {/* Degree badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-8"
                >
                  <span className="text-lg font-light text-white/60">{edu.short}</span>
                </motion.div>

                <div className="text-[11px] tracking-[0.25em] uppercase text-white/25 mb-2">{edu.period}</div>
                <h3 className="text-2xl font-light text-heading mb-1 tracking-tight">{edu.degree}</h3>
                <p className="text-sm text-white/40 tracking-[0.12em] uppercase mb-6">{edu.institution} · {edu.location}</p>
                <p className="text-sm text-white/45 leading-relaxed mb-8 font-light">{edu.description}</p>

                <div className="flex flex-wrap gap-2">
                  {edu.tags.map((tag, ti) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + ti * 0.07 }}
                      className="px-2.5 py-1 rounded-full text-[10px] tracking-wider uppercase bg-white/[0.04] border border-white/[0.07] text-white/40"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="text-xs text-white/30 tracking-widest uppercase">Graduated April 2022</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages — takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.94 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Languages card */}
            <div className="glass glow-border rounded-3xl p-8 relative overflow-hidden flex-1">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/12 to-transparent" />
              <div className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-6">Languages</div>

              <div className="flex flex-col gap-6">
                {languages.map((lang, i) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                  >
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-light text-white/70">{lang.name}</span>
                      <span className="text-[10px] text-white/25">{lang.pct}%</span>
                    </div>
                    <div className="h-[2px] w-full rounded-full bg-white/[0.07] overflow-hidden mb-1">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-white/55 to-white/20"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.pct}%` } : { width: 0 }}
                        transition={{ duration: 1.1, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                    <div className="text-[10px] text-white/25 font-light">{lang.level}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interests card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="glass glow-border rounded-3xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-4">Interests</div>
              <div className="flex flex-wrap gap-2">
                {["⚽ Football", "✈️ Travelling", "💻 Tech Trends", "🎨 UI Design"].map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
                    className="px-3 py-1.5 rounded-full text-xs bg-white/[0.04] border border-white/[0.07] text-white/45"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
