"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    // Spawn particles
    const spawnParticle = (): Particle => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0002,
      vy: -Math.random() * 0.0003 - 0.0001,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      life: Math.random(),
    });

    particlesRef.current = Array.from({ length: 60 }, spawnParticle);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let frame = 0;
    const draw = () => {
      frame++;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Mouse glow
      const gx = mouseRef.current.x * w;
      const gy = mouseRef.current.y * h;
      const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, 300);
      grad.addColorStop(0, "rgba(255,255,255,0.04)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Update and draw particles
      particlesRef.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.003;

        // Attract slightly to mouse
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 0.3) {
          p.vx += dx * 0.00002;
          p.vy += dy * 0.00002;
        }

        if (p.life <= 0 || p.y < -0.05 || p.x < -0.05 || p.x > 1.05) {
          particlesRef.current[i] = spawnParticle();
          return;
        }

        const alpha = Math.min(1, p.life * 3) * p.opacity;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

const words = [
  "Obsessing",
  "Crafting",
  "Building",
  "Designing",
  "Engineering",
  "Innovating",
];

function CyclingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="gradient-text inline-block"
    >
      {words[index]}
    </motion.span>
  );
}

export default function InteractiveShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Parallax blobs */}
      <motion.div
        style={{ y: y1 }}
        className="pointer-events-none absolute left-1/4 top-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[100px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute right-1/4 bottom-1/4 w-[300px] h-[300px] rounded-full bg-white/[0.015] blur-[80px]"
      />

      {/* Horizontal scrolling text banner */}
      <div className="overflow-hidden py-8 mb-20 border-y border-white/[0.05]">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="text-[clamp(1rem,2vw,1.4rem)] font-light tracking-[0.2em] uppercase text-white/10"
            >
              React · Next.js · TypeScript · Framer Motion · Canvas · Tailwind ·
              UI Engineering · Interactive Design ·&nbsp;
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Central text reveal */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero-label mb-6 block">Philosophy</span>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extralight tracking-[-0.04em] text-heading leading-[1.05] mb-6">
              Always <CyclingWord />
              <br />
              on detail.
            </h2>
            <p className="text-base md:text-lg text-white/40 font-light max-w-xl mx-auto leading-relaxed">
              Every pixel, every interaction, every animation — crafted with intention.
              Premium frontend engineering for the discerning web.
            </p>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: "⚡",
              title: "Performance",
              desc: "60fps animations, optimized rendering, zero layout shift.",
            },
            {
              icon: "✦",
              title: "Aesthetics",
              desc: "Awwwards-level design systems with purposeful motion.",
            },
            {
              icon: "∞",
              title: "Interaction",
              desc: "Magnetic, responsive, alive — every element has intention.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass glass-hover glow-border rounded-2xl p-6 text-center"
            >
              <div className="text-3xl mb-4 text-white/60">{item.icon}</div>
              <h3 className="text-sm font-medium text-heading mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-white/35 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
