"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { clsx } from "clsx";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const navOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500",
          scrolled
            ? "bg-[rgba(5,5,5,0.85)] backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-sm font-light tracking-[0.35em] uppercase text-white/70 hover:text-white/95 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            M A
          </motion.a>

          {/* Center name — desktop only */}
          <motion.div
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-3"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-4 h-[1px] bg-white/15" />
            {/* <span className="text-[10px] tracking-[0.35em] uppercase text-white/30 font-light">
              M A &nbsp;·&nbsp; Mohammed Arshad
            </span> */}
            <div className="w-4 h-[1px] bg-white/15" />
          </motion.div>

          {/* Desktop links */}
          <motion.ul
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-[11px] tracking-[0.2em] uppercase text-white/35 hover:text-white/80 transition-colors duration-300 font-light"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="/Mohammed_Arshad_CV.docx"
                download
                className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] tracking-[0.2em] uppercase text-white/50 hover:bg-white/[0.05] hover:text-white hover:border-white/25 transition-all duration-300 font-light"
              >
                CV <span className="text-emerald-400/70">↓</span>
              </a>
            </li>
          </motion.ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1px] bg-white/50 origin-center"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-[1px] bg-white/50"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1px] bg-white/50 origin-center"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-0 z-40 bg-[rgba(5,5,5,0.97)] backdrop-blur-xl flex flex-col items-center justify-center gap-10 md:hidden"
        initial={false}
        animate={menuOpen ? { opacity: 1, pointerEvents: "all" } : { opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.4 }}
      >
        {navLinks.map((link, i) => (
            <motion.button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              initial={false}
              animate={
                menuOpen
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.4, delay: menuOpen ? i * 0.07 : 0 }}
              className="text-2xl font-extralight tracking-[0.15em] uppercase text-white/60 hover:text-white/95 transition-colors duration-300"
            >
              {link.label}
            </motion.button>
          ))}

          <motion.a
            href="/Mohammed_Arshad_CV.docx"
            download
            initial={false}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: menuOpen ? navLinks.length * 0.07 : 0 }}
            className="mt-6 px-8 py-3 rounded-full border border-white/10 text-xs tracking-[0.3em] uppercase text-white/40 hover:text-white hover:border-white/20 transition-all bg-white/[0.02]"
          >
            Download CV <span className="text-emerald-400/80 ml-1">↓</span>
          </motion.a>
      </motion.div>
    </>
  );
}
