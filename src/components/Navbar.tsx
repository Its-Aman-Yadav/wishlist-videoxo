"use client";

import { motion } from "framer-motion";
import { Video } from "lucide-react";

export default function Navbar() {
  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-accent to-[#ff8533] shadow-[0_0_15px_rgba(255,92,0,0.3)]">
              <Video className="h-5 w-5 text-white" />
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-tr from-accent to-accent-hover opacity-30 blur-sm -z-10 animate-pulse"></div>
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent font-sans">
              Video<span className="text-accent font-extrabold text-glow">XO</span>
            </span>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <button
              onClick={() => scrollToSection("preview-section")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("benefits-section")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("audience-section")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              For Creators
            </button>
          </nav>

          {/* CTA Button */}
          <div>
            <button
              onClick={scrollToWaitlist}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-all duration-300 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-accent/40 hover:bg-zinc-800/80 hover:shadow-[0_0_15px_rgba(255,92,0,0.1)] active:scale-[0.98] cursor-pointer"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
