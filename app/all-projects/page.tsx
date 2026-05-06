"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects, personalWork } from "@/lib/projects";
import TypeWriter from "@/components/TypeWriter";

function ProjectCard({ p, index }: { p: any; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-3xl border border-white/[0.08] overflow-hidden cursor-pointer group hover:border-white/[0.18] transition-all duration-500"
      style={{ background: "rgba(11,11,11,0.6)" }}
    >
      <motion.div className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.4 }}
        style={{ background: `radial-gradient(ellipse at center, ${p.accent} 0%, transparent 70%)` }}
      />
      
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

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050505] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-all text-xs tracking-[0.3em] uppercase mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Work
        </Link>

        {/* Header */}
        <div className="mb-20">
          <span className="hero-label mb-4 block">Archive</span>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extralight tracking-[-0.04em] text-heading leading-[1.05] mb-6">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-white/40 max-w-2xl font-light leading-relaxed">
            A comprehensive list of every project I've developed, from client work and production-ready applications to experimental UI concepts and personal case studies.
          </p>
        </div>

        {/* Portfolio Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-light text-white/80 tracking-tight">Portfolio</h2>
            <div className="h-[1px] flex-1 bg-white/[0.06]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} p={p} index={i} />
            ))}
          </div>
        </div>

        {/* Personal Work Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-light text-white/80 tracking-tight">Personal Work</h2>
            <div className="h-[1px] flex-1 bg-white/[0.06]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalWork.map((p, i) => (
              <ProjectCard key={p.id} p={p} index={i + projects.length} />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-40 text-center border-t border-white/[0.06] pt-20 pb-10">
          <p className="text-white/20 text-[10px] tracking-[0.5em] uppercase mb-8">End of Archive</p>
          <Link 
            href="/#contact" 
            className="px-10 py-4 rounded-full bg-white text-black text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all inline-block"
          >
            Start a project
          </Link>
        </div>
      </div>
    </main>
  );
}
