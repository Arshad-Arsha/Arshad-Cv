"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import TypeWriter from "@/components/TypeWriter";
import { projects, personalWork } from "@/lib/projects";

function ProjectCard({ p, index, isInView }: { p: any; index: number; isInView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-3xl border border-white/[0.08] overflow-hidden cursor-pointer group hover:border-white/[0.18] transition-all duration-500"
      style={{ background: "rgba(11,11,11,0.6)" }}
    >
      <motion.div className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.4 }}
        style={{ background: `radial-gradient(ellipse at center, ${p.accent} 0%, transparent 70%)` }}
      />
      
      {/* Abstract Preview */}
      <div className="relative h-40 overflow-hidden bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-center">
        <motion.div 
          animate={{ scale: hovered ? 1.1 : 1, opacity: hovered ? 0.2 : 0.08 }}
          transition={{ duration: 0.8 }}
          className="text-[7rem] font-black tracking-tighter select-none"
          style={{ color: p.accent || "white" }}
        >
          {String(p.id).padStart(2, "0")}
        </motion.div>
        
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        
        <div className="absolute top-4 right-4 z-20">
          <motion.div 
            animate={{ rotate: hovered ? 45 : 0 }}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70"
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.div>
        </div>
      </div>

      <div className="p-6 md:p-8 relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 px-2 py-0.5 rounded border border-white/10 bg-white/[0.02]">
            {p.category || "Project"}
          </span>
        </div>
        <h3 className="text-xl font-light text-heading mb-3 tracking-tight">{p.title}</h3>
        <p className="text-sm text-white/45 leading-relaxed mb-6 font-light h-12 line-clamp-2">{p.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {p.stack.map((tag: string) => (
            <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] tracking-wider uppercase bg-white/[0.04] border border-white/[0.07] text-white/40">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href={p.demo} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300">
            Explore Live <ExternalLink className="w-3 h-3" />
          </a>
          <a href={p.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-300">
            <Github className="w-3.5 h-3.5" /> Source
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section ref={sectionRef} id="projects"
      className="relative py-32 md:py-48 px-6 overflow-hidden"
      style={{ position: "relative", zIndex: 10, background: "rgba(5,5,5,0.46)" }}
    >
      <div className="pointer-events-none absolute -left-48 bottom-1/4 w-[500px] h-[500px] rounded-full bg-white/[0.01] blur-[120px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <span className="hero-label mb-4 block">Selected Works</span>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extralight tracking-[-0.04em] text-heading leading-[1.05]">
            Featured <span className="gradient-text"><TypeWriter text="Portfolio" cursor /></span>
          </h2>
          <p className="mt-6 text-sm text-white/35 max-w-lg mx-auto font-light leading-relaxed">
            A curated selection of my production work and design explorations.{" "}
            <Link href="/all-projects"
              className="text-white/55 hover:text-white/80 underline underline-offset-4 transition-colors">
              View all projects →
            </Link>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} isInView={isInView} />
          ))}
        </div>

        {!showAll && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <button 
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full border border-white/10 text-[11px] tracking-[0.3em] uppercase text-white/40 hover:text-white hover:border-white/25 transition-all bg-white/[0.02]"
            >
              See More Projects
            </button>
          </motion.div>
        )}

        {/* Personal Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-40 mb-20 text-center"
        >
          <span className="hero-label mb-4 block">Case Studies</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-[-0.04em] text-heading">
            Personal <span className="text-white/40">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalWork.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} isInView={true} />
          ))}
        </div>

        {/* Bottom CTA to All Projects */}
        <div className="mt-32 text-center">
          <Link 
            href="/all-projects" 
            className="text-white/30 hover:text-white transition-all text-[10px] tracking-[0.4em] uppercase underline underline-offset-8"
          >
            View Complete Archive (All {projects.length + personalWork.length} Projects) →
          </Link>
        </div>
      </div>
    </section>
  );
}
