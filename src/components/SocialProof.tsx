"use client";

import { motion } from "framer-motion";
import { Users, Star, ArrowUpRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  category: "Creator" | "Founder" | "Marketer";
  avatar: string;
  metric: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Rivera",
    role: "Faceless Creator @HistoryLoop",
    category: "Creator",
    avatar: "AR",
    metric: "+120K followers in 30 days",
    quote: "Creating vertical shorts used to take me hours of voice recording and editing. With VideoXO, I just write down a concept, and it generates a viral-ready video in less than a minute. My output has tripled!"
  },
  {
    name: "Sarah Chen",
    role: "Founder, SaaSFlow",
    category: "Founder",
    avatar: "SC",
    metric: "10x organic pipeline growth",
    quote: "We needed to push content to build our organic presence, but hiring editors was too expensive. VideoXO allows us to turn product features and dev updates into engaging shorts immediately. The cost-to-value ratio is insane."
  },
  {
    name: "Marcus Brodie",
    role: "Growth Director, AdScale Agency",
    category: "Marketer",
    avatar: "MB",
    metric: "4.2x ad click-through rate",
    quote: "Short-form video is the best ad format right now, but scaling production is hard. We use VideoXO to test dozens of different visual hooks and script scripts in minutes. It has completely transformed our test cycle."
  }
];

export default function SocialProof() {
  return (
    <section id="audience-section" className="relative py-20 lg:py-28 overflow-hidden border-b border-zinc-900">
      {/* Decorative center blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-medium text-accent mb-4">
            <Users className="h-3.5 w-3.5" />
            <span>Target Audience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Built for creators, founders, and marketers
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Whether you want to build a faceless audience, generate inbound leads, or run high-converting visual ads, VideoXO has you covered.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {testimonials.map((t, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left h-full relative"
              >
                <div>
                  {/* Category & Stars */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold text-accent px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 tracking-wide">
                      {t.category}
                    </span>
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </blockquote>
                </div>

                {/* Profile & Metric */}
                <div className="border-t border-white/5 pt-5 mt-auto flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-xs text-white">
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white leading-none">{t.name}</h4>
                      <span className="text-[10px] text-zinc-500 mt-1 block">{t.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 whitespace-nowrap">
                    <span>{t.metric}</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
