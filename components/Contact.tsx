// "use client";

// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Mail, Linkedin, Globe, Github, ArrowUpRight } from "lucide-react";
// import TypeWriter from "@/components/TypeWriter";

// const links = [
//   {
//     icon: <Mail className="w-4 h-4" />,
//     label: "Email",
//     value: "mohammedarshadpp123@gmail.com",
//     href: "mailto:mohammedarshadpp123@gmail.com",
//   },
//   {
//     icon: <Linkedin className="w-4 h-4" />,
//     label: "LinkedIn",
//     value: "linkedin.com/in/mohammed-arshad-p-p",
//     href: "https://www.linkedin.com/in/mohammed-arshad-p-p-349681246/",
//   },
//   {
//     icon: <Globe className="w-4 h-4" />,
//     label: "Portfolio",
//     value: "mhd-arshad-portfolio.vercel.app",
//     href: "https://mhd-arshad-portfolio.vercel.app/",
//   },
//   {
//     icon: <Github className="w-4 h-4" />,
//     label: "GitHub",
//     value: "github.com/mohammedarshad",
//     href: "https://github.com/",
//   },
// ];

// export default function Contact() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

//   return (
//     <section ref={sectionRef} id="contact"
//       className="relative py-32 md:py-48 px-6 overflow-hidden"
//       style={{ position: "relative", zIndex: 10, background: "rgba(5,5,5,0.46)" }}
//     >
//       <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
//         <div className="w-[700px] h-[400px] rounded-full bg-white/[0.025] blur-[120px]" />
//       </div>

//       <div className="max-w-4xl mx-auto relative z-10 text-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.85, y: 40 }}
//           animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
//           transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
//           className="mb-16"
//         >
//           <span className="hero-label mb-6 block">Kozhikode, Kerala · (+91) 8848614036</span>
//           <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extralight tracking-[-0.04em] text-heading leading-[1.05] mb-6">
//             Let&apos;s build something<br />
//             <span className="gradient-text">
//               <TypeWriter text="exceptional." cycleWords={["together.", "premium.", "exceptional."]} pauseMs={2000} cursor />
//             </span>
//           </h2>
//           <p className="text-base md:text-lg text-white/40 font-light max-w-md mx-auto leading-relaxed">
//             Open to frontend roles, freelance collaborations, and creative projects. Front-End &amp; MERN Stack Developer — 3+ years of production experience.
//           </p>
//         </motion.div>

//         <div className="flex flex-col items-center gap-4 mb-12">
//           {links.map((link, i) => (
//             <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 40, scale: 0.92 }}
//               animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
//               transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
//               whileHover={{ scale: 1.02, x: 4 }}
//               className="flex items-center gap-4 glass glass-hover rounded-2xl px-6 py-4 w-full max-w-sm group transition-all duration-300"
//             >
//               <span className="text-white/35 group-hover:text-white/70 transition-colors duration-300">{link.icon}</span>
//               <div className="flex flex-col items-start">
//                 <span className="text-[10px] tracking-[0.2em] uppercase text-white/25 mb-0.5">{link.label}</span>
//                 <span className="text-sm text-white/55 group-hover:text-white/80 transition-colors duration-300 font-light">{link.value}</span>
//               </div>
//               <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/60 ml-auto transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </motion.a>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
//           className="flex items-center justify-center gap-4"
//         >
//           <motion.a href="mailto:mohammedarshadpp123@gmail.com"
//             whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//             className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm bg-white text-black font-light hover:bg-white/90 transition-all duration-300"
//           >
//             Start a conversation <ArrowUpRight className="w-4 h-4" />
//           </motion.a>
//           <motion.a href="https://mhd-arshad-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer"
//             whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//             className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm border border-white/[0.1] text-white/60 hover:border-white/[0.2] hover:text-white/90 transition-all duration-300"
//           >
//             <Globe className="w-4 h-4" /> Live Portfolio
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Globe, Github, ArrowUpRight } from "lucide-react";
import TypeWriter from "@/components/TypeWriter";

const links = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
    value: "mohammedarshadpp123@gmail.com",
    href: "mailto:mohammedarshadpp123@gmail.com",
  },
  {
    icon: <Linkedin className="w-4 h-4" />,
    label: "LinkedIn",
    value: "linkedin.com/in/mohammed-arshad-p-p",
    href: "https://www.linkedin.com/in/mohammed-arshad-p-p-349681246/",
  },
  {
    icon: <Globe className="w-4 h-4" />,
    label: "Portfolio",
    value: "mhd-arshad-portfolio.vercel.app",
    href: "https://mohammed-arshad-qclt.vercel.app/",
  },
  {
    icon: <Github className="w-4 h-4" />,
    label: "GitHub",
    value: "github.com/mohammedarshad",
    href: "https://github.com/",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} id="contact"
      className="relative py-32 md:py-48 px-6 overflow-hidden"
      style={{ position: "relative", zIndex: 10, background: "rgba(5,5,5,0.46)" }}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[400px] rounded-full bg-white/[0.025] blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="hero-label mb-6 block">Kozhikode, Kerala · (+91) 8848614036</span>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extralight tracking-[-0.04em] text-heading leading-[1.05] mb-6">
            Let&apos;s build something<br />
            <span className="gradient-text">
              <TypeWriter text="exceptional." cycleWords={["together.", "premium.", "exceptional."]} pauseMs={2000} cursor />
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/40 font-light max-w-md mx-auto leading-relaxed">
            Open to frontend roles, freelance collaborations, and creative projects. Front-End &amp; MERN Stack Developer — 3+ years of production experience.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-4 mb-12">
          {links.map((link, i) => (
            <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, x: 4 }}
              className="flex items-center gap-4 glass glass-hover rounded-2xl px-6 py-4 w-full max-w-sm group transition-all duration-300"
            >
              <span className="text-white/35 group-hover:text-white/70 transition-colors duration-300">{link.icon}</span>
              <div className="flex flex-col items-start">
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/25 mb-0.5">{link.label}</span>
                <span className="text-sm text-white/55 group-hover:text-white/80 transition-colors duration-300 font-light">{link.value}</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/60 ml-auto transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4"
        >
          <motion.a href="mailto:mohammedarshadpp123@gmail.com"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm bg-white text-black font-light hover:bg-white/90 transition-all duration-300"
          >
            Start a conversation <ArrowUpRight className="w-4 h-4" />
          </motion.a>
          <motion.a href="https://mohammed-arshad-qclt.vercel.app/" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm border border-white/[0.1] text-white/60 hover:border-white/[0.2] hover:text-white/90 transition-all duration-300"
          >
            <Globe className="w-4 h-4" /> Live Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}