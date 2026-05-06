"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import TypeWriter from "@/components/TypeWriter";

function useCounter(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const inc = target / (duration / 16);
    const timer = setInterval(() => {
      start += inc;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);
  return count;
}

function StatCard({ value, suffix, label, isVisible, index }: {
  value: number; suffix: string; label: string; isVisible: boolean; index: number;
}) {
  const count = useCounter(value, isVisible);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.4 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="glass glass-hover rounded-2xl p-6 glow-border flex flex-col gap-1"
    >
      <div className="text-3xl font-light tracking-tight text-heading">
        {count}<span className="text-white/40">{suffix}</span>
      </div>
      <div className="text-xs tracking-widest uppercase text-white/35">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-12%" });

  return (
    <section ref={sectionRef} id="about"
      className="relative py-32 md:py-48 px-6 overflow-hidden"
      style={{ position: "relative", zIndex: 10, background: "rgba(5,5,5,0.46)" }}
    >
      <div className="pointer-events-none absolute -left-64 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT — slide from left */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="hero-label mb-4 block">About</span>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extralight tracking-[-0.04em] text-heading leading-[1.05]">
                <TypeWriter text="Mohammed Arshad" cursor={false} />
                <br />
                <span className="gradient-text">
                  <TypeWriter text="P P" cursor />
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-white/55 leading-relaxed font-light max-w-lg"
            >
              Results-driven Front-End Developer with <span className="text-white/80">3+ years</span> of experience building scalable, user-centric web applications. Specialized in React.js, performance optimization, and translating Figma prototypes into pixel-perfect interfaces while applying{" "}
              <span className="text-white/80 italic">Prompt Engineering</span> for AI-assisted workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 text-sm text-white/35"
            >
              <div className="w-8 h-[1px] bg-white/20" />
              <span className="tracking-[0.15em] uppercase text-[11px]">
                Front-End &amp; MERN Stack Developer · Kozhikode, Kerala
              </span>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <StatCard value={3}   suffix="+"    label="Years Exp."      isVisible={isInView} index={0} />
              <StatCard value={10}  suffix="K+"   label="Daily Users"     isVisible={isInView} index={1} />
              <StatCard value={20}  suffix="+"    label="Figma Prototypes" isVisible={isInView} index={2} />
            </div>
          </div>

          {/* RIGHT — zoom from right */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.92, filter: "blur(12px)" }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="glass glow-border rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-8">
                <span className="text-2xl font-light text-white/60">MA</span>
              </div>

              <h3 className="text-xl font-light text-heading mb-1 tracking-tight">Mohammed Arshad P P</h3>
              <p className="text-sm text-white/40 tracking-[0.12em] uppercase mb-6">
                Front-End &amp; MERN Stack Developer
              </p>

              {/* Key skills pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["React.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Figma"].map(s => (
                  <span key={s} className="px-3 py-1 rounded-full text-[11px] tracking-wider uppercase bg-white/[0.05] border border-white/[0.08] text-white/50">{s}</span>
                ))}
              </div>

              {/* Contact details */}
              <div className="space-y-2 mb-6 text-xs text-white/35 font-light">
                <div className="flex items-center gap-2">
                  <span className="text-white/20">✉</span>
                  <a href="mailto:mohammedarshadpp123@gmail.com" className="hover:text-white/60 transition-colors">mohammedarshadpp123@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/20">☎</span>
                  <span>(+91) 8848614036</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/20">📍</span>
                  <span>Ramanattukara, Kozhikode, Kerala 673633</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
                <div className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse" />
                <span className="text-xs text-white/35 tracking-widest uppercase">Open to opportunities</span>
              </div>
            </div>

            <motion.a
              href="/Mohammed_Arshad_CV.docx"
              download
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 glass rounded-2xl p-4 border border-white/[0.08] group hover:bg-white/[0.1] transition-all cursor-pointer z-20 pointer-events-auto"
            >
              <div className="text-xs text-white/35 tracking-widest uppercase mb-1 flex items-center gap-2">
                CV
                <motion.span
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-emerald-400/80"
                >
                  ↓
                </motion.span>
              </div>
              <div className="text-sm font-light text-white/70 group-hover:text-emerald-400/90 transition-colors">Download Document</div>
            </motion.a>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 border border-white/[0.08]"
            >
              <div className="text-xs text-white/35 tracking-widest uppercase mb-1">Education</div>
              <div className="text-sm font-light text-white/70">BCA · ISBM University</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
