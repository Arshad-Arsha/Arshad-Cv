"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import TypeWriter from "@/components/TypeWriter";
import { clsx } from "clsx";

const skillGroups = [
  {
    group: "Languages",
    items: [
      { name: "JavaScript (ES6+)", level: 96 },
      { name: "TypeScript", level: 88 },
      { name: "HTML5", level: 98 },
      { name: "CSS3 / SASS", level: 93 },
    ],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      { name: "React.js", level: 96 },
      { name: "Redux", level: 85 },
      { name: "Tailwind CSS", level: 96 },
      { name: "Bootstrap 5", level: 92 },
      { name: "Material UI", level: 82 },
    ],
  },
  {
    group: "MERN & Backend",
    items: [
      { name: "Node.js", level: 72 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 68 },
      { name: "RESTful APIs", level: 90 },
      { name: "JWT Auth", level: 80 },
    ],
  },
  {
    group: "Design & Tools",
    items: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 78 },
      { name: "Photoshop", level: 70 },
      { name: "Vite / npm", level: 88 },
    ],
  },
  {
    group: "AI & Productivity",
    items: [
      { name: "Prompt Engineering", level: 88 },
      { name: "GitHub Copilot", level: 85 },
      { name: "Cursor AI", level: 82 },
      { name: "Figma AI", level: 78 },
    ],
  },
  {
    group: "Architecture & UX",
    items: [
      { name: "React Hooks & Context", level: 92 },
      { name: "Responsive / Mobile-First", level: 97 },
      { name: "WCAG 2.1 Accessibility", level: 80 },
      { name: "Glassmorphism / 3D UI", level: 88 },
    ],
  },
];

function SkillItem({ name, level, index, isInView }: {
  name: string; level: number; index: number; isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group"
    >
      <div className="flex justify-between mb-1.5">
        <span className={clsx("text-sm font-light transition-colors duration-300", hovered ? "text-white/85" : "text-white/55")}>{name}</span>
        <span className="text-[10px] text-white/25">{level}%</span>
      </div>
      <div className="h-[2px] w-full rounded-full bg-white/[0.07] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-white/60 to-white/25"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: 0.2 + index * 0.035, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  let globalIdx = 0;

  return (
    <section ref={sectionRef} id="skills"
      className="relative py-32 md:py-48 px-6 overflow-hidden"
      style={{ position: "relative", zIndex: 10, background: "rgba(5,5,5,0.46)" }}
    >
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-white/[0.015] blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.93 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="hero-label mb-4 block">Capabilities</span>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extralight tracking-[-0.04em] text-heading leading-[1.05]">
            Skills &amp;{" "}
            <span className="gradient-text">
              <TypeWriter text="Tools" cycleWords={["React", "Canvas", "Motion", "AI", "Tools"]} pauseMs={1800} cursor />
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.75, delay: gi * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass glow-border rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="text-[10px] tracking-[0.25em] uppercase text-white/30 border-b border-white/[0.06] pb-3 mb-2">
                {group.group}
              </div>
              <div className="flex flex-col gap-4">
                {group.items.map((skill) => {
                  const idx = globalIdx++;
                  return <SkillItem key={skill.name} {...skill} index={idx} isInView={isInView} />;
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
