"use client";

import { motion } from "framer-motion";
import { Zap, ShieldAlert, Smartphone, Clock, Award } from "lucide-react";

interface BenefitCard {
  title: string;
  description: string;
  icon: any;
  visual: React.ReactNode;
}

export default function Benefits() {
  const benefitsData: BenefitCard[] = [
    {
      title: "Create videos in minutes",
      description: "Skip hours of recording, editing, and stitching. VideoXO turns your script into a finished video in under 60 seconds.",
      icon: Clock,
      visual: (
        <div className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl p-4 font-sans text-xs space-y-3.5">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Time Comparison</span>
          {/* Traditional Way */}
          <div className="space-y-1">
            <div className="flex justify-between text-zinc-400">
              <span>Traditional Editing</span>
              <span className="font-semibold text-zinc-300">~6 hours</span>
            </div>
            <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
              <div className="h-full bg-zinc-700 w-4/5 rounded-full"></div>
            </div>
          </div>
          {/* VideoXO Way */}
          <div className="space-y-1">
            <div className="flex justify-between text-accent">
              <span className="font-semibold">VideoXO AI Workflow</span>
              <span className="font-bold text-glow">30 seconds</span>
            </div>
            <div className="h-2.5 w-full bg-zinc-900 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-accent to-[#ff8533] rounded-full"
              ></motion.div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "No editing skills needed",
      description: "No timelines, keyframes, or audio syncing. Our AI automates transitions, B-roll matching, and audio leveling.",
      icon: Zap,
      visual: (
        <div className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl p-4 flex flex-col gap-2">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Automation Engine</span>
          <div className="flex flex-col gap-2 font-mono text-[10px]">
            <div className="flex items-center justify-between bg-zinc-900/50 p-2 rounded border border-zinc-800/40 text-emerald-400">
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                <span>Sync Audio & Voiceover</span>
              </div>
              <span className="text-[9px] bg-emerald-500/10 px-1 py-0.2 rounded border border-emerald-500/25">Auto-Done</span>
            </div>
            
            <div className="flex items-center justify-between bg-zinc-900/50 p-2 rounded border border-zinc-800/40 text-emerald-400">
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                <span>Generate Captions</span>
              </div>
              <span className="text-[9px] bg-emerald-500/10 px-1 py-0.2 rounded border border-emerald-500/25">Auto-Done</span>
            </div>

            <div className="flex items-center justify-between bg-zinc-900/50 p-2 rounded border border-zinc-800/40 text-accent">
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-ping"></div>
                <span>Apply Transitions & FX</span>
              </div>
              <span className="text-[9px] bg-accent/15 px-1 py-0.2 rounded border border-accent/35">Running</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Perfect for vertical formats",
      description: "Engineered specifically for short-form platforms. Outputs 9:16 layout optimized for TikTok, Instagram Reels, and YouTube Shorts.",
      icon: Smartphone,
      visual: (
        <div className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl p-4 flex items-center justify-around gap-2 text-zinc-400">
          <div className="flex flex-col items-center gap-1">
            <div className="h-8 px-2 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center font-bold text-[10px] text-white">TikTok</div>
            <span className="text-[9px] text-zinc-500">9:16 Ratio</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="h-8 px-2 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center font-bold text-[10px] text-white">Reels</div>
            <span className="text-[9px] text-zinc-500">Optimized</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="h-8 px-2 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center font-bold text-[10px] text-white">Shorts</div>
            <span className="text-[9px] text-zinc-500">Export Ready</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="benefits-section" className="relative py-20 lg:py-28 overflow-hidden border-b border-zinc-900 bg-zinc-950/10">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-medium text-accent mb-4">
            <Award className="h-3.5 w-3.5" />
            <span>Why Creators Choose VideoXO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            High quality. Low friction.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Say goodbye to complex timelines and recording bottlenecks. Publish daily and dominate short-form feeds effortlessly.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {benefitsData.map((benefit, index) => {
            const BenefitIcon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left h-full"
              >
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-accent mb-6">
                    <BenefitIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                </div>
                {/* Embedded Visual */}
                <div className="mt-auto">
                  {benefit.visual}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
