"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lightbulb, 
  FileText, 
  Volume2, 
  Image as ImageIcon, 
  Type, 
  Play, 
  Check, 
  Smartphone,
  Heart,
  MessageCircle,
  Share2,
  Loader2
} from "lucide-react";

interface Step {
  id: number;
  label: string;
  icon: any;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    label: "Idea",
    icon: Lightbulb,
    description: "Type a simple idea or prompt.",
  },
  {
    id: 2,
    label: "Script",
    icon: FileText,
    description: "AI writes a high-retention script.",
  },
  {
    id: 3,
    label: "Voice",
    icon: Volume2,
    description: "Generate natural AI voiceovers.",
  },
  {
    id: 4,
    label: "Visuals",
    icon: ImageIcon,
    description: "Synthesize high-quality B-roll.",
  },
  {
    id: 5,
    label: "Captions",
    icon: Type,
    description: "Auto-add dynamic captions.",
  },
  {
    id: 6,
    label: "Video",
    icon: Play,
    description: "One-click export to post.",
  },
];

export default function ProductPreview() {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPlaying) return;

    autoPlayTimer.current = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length ? 1 : prev + 1));
    }, 4500);

    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isPlaying]);

  const handleStepClick = (id: number) => {
    setIsPlaying(false); // Pause auto-rotation when user interacts
    setActiveStep(id);
  };

  // Content render for the active preview step
  const renderPreviewContent = () => {
    switch (activeStep) {
      case 1: // Idea
        return (
          <div className="flex flex-col justify-between h-full p-6 text-left">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-accent uppercase tracking-wider">
                <Lightbulb className="h-4 w-4 animate-pulse" />
                <span>AI Prompt Analyzer</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Start with an idea</h4>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Describe what you want your short video to be about in plain English. No complexity required.
              </p>
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
              <div className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 relative overflow-hidden">
                <div className="flex items-center gap-1.5 text-zinc-500 text-xs mb-3 border-b border-zinc-900 pb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-[10px]">prompt_input.sh</span>
                </div>
                <div className="font-mono text-sm text-zinc-300 min-h-[60px] flex items-start">
                  <span className="text-accent mr-2">&gt;</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-accent"
                    style={{ display: "inline-block", verticalAlign: "bottom" }}
                  >
                    A modern docu-style story about how coffee conquered the world.
                  </motion.span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
              <span>Optimizing prompt for TikTok & Reels...</span>
              <span className="font-mono text-emerald-400">Ready</span>
            </div>
          </div>
        );

      case 2: // Script
        return (
          <div className="flex flex-col justify-between h-full p-6 text-left">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-accent uppercase tracking-wider">
                <FileText className="h-4 w-4" />
                <span>Retention-Optimized Script</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Engineered to hook users</h4>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                VideoXO writes complete scripts with psychological triggers, visual prompts, and rhythmic timing.
              </p>
            </div>

            <div className="flex-grow overflow-y-auto max-h-[190px] pr-2 space-y-3 font-sans text-xs scrollbar-thin">
              <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-3">
                <span className="text-[10px] font-bold text-accent tracking-wider uppercase">0:00 - 0:03 • Hook</span>
                <p className="text-zinc-200 mt-1 font-medium italic">"This seed rules your entire morning. But how did it cross oceans to do it?"</p>
                <div className="mt-2 text-[10px] text-zinc-500 border-t border-zinc-900 pt-1.5">
                  <span className="font-semibold text-zinc-400">Visual:</span> Close-up slow motion of a roasted coffee bean breaking in half.
                </div>
              </div>

              <div className="bg-zinc-950/40 border border-zinc-900/60 rounded-lg p-3 opacity-70">
                <span className="text-[10px] font-bold text-zinc-500 tracking-wider uppercase">0:03 - 0:08 • Core Story</span>
                <p className="text-zinc-300 mt-1 font-medium italic">"It started in 15th-century Sufi monasteries. Monks drank it to stay awake for midnight prayers."</p>
                <div className="mt-2 text-[10px] text-zinc-500 border-t border-zinc-900/40 pt-1.5">
                  <span className="font-semibold text-zinc-400">Visual:</span> Ancient parchment painting showing coffee drinking under starlight.
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 pt-2 border-t border-zinc-900">
              <span>Word Count: 145 words</span>
              <span className="text-accent font-semibold">Score: 98% (High Retention)</span>
            </div>
          </div>
        );

      case 3: // Voice
        return (
          <div className="flex flex-col justify-between h-full p-6 text-left">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-accent uppercase tracking-wider">
                <Volume2 className="h-4 w-4" />
                <span>Ultra-Realistic Voiceover</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Human-grade narrative voices</h4>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Choose from a curated collection of deep, natural voices with perfect pacing, inflection, and breathing.
              </p>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-3">
              {/* Voice Card 1 */}
              <div className="flex items-center justify-between bg-accent/10 border border-accent/30 rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Volume2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">James</h5>
                    <p className="text-[10px] text-accent font-medium">Deep, Cinematic Storyteller</p>
                  </div>
                </div>
                {/* Waveform Animation */}
                <div className="flex items-end gap-0.5 h-6">
                  {[4, 8, 12, 10, 16, 6, 12, 4, 8, 14, 10, 6].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [h, h * 0.3, h] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08 }}
                      className="w-[2px] bg-accent rounded-full"
                      style={{ height: h }}
                    />
                  ))}
                </div>
              </div>

              {/* Voice Card 2 */}
              <div className="flex items-center justify-between bg-zinc-950/60 border border-zinc-900 rounded-xl p-3 opacity-60">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                    <Volume2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-zinc-300">Sophia</h5>
                    <p className="text-[10px] text-zinc-500">Energetic, Friendly Creator</p>
                  </div>
                </div>
                <div className="flex items-end gap-0.5 h-6">
                  {[2, 2, 2, 2, 2].map((h, i) => (
                    <div key={i} className="w-[2px] bg-zinc-800 rounded-full h-[3px]" />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
              <span>Dynamic breathing & inflection active</span>
              <span className="text-emerald-400 font-semibold">100% Synced</span>
            </div>
          </div>
        );

      case 4: // Visuals
        return (
          <div className="flex flex-col justify-between h-full p-6 text-left">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-accent uppercase tracking-wider">
                <ImageIcon className="h-4 w-4" />
                <span>AI Visual Generator</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Stunning 4K short clips</h4>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                Generates relevant background scenes, B-roll, and maps that keep viewers glued to the screen.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 flex-1">
              <div className="relative rounded-lg overflow-hidden border border-zinc-800 group bg-zinc-950 aspect-[4/3] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,92,0,0.2),transparent_70%)]"></div>
                <div className="z-20 text-center p-2">
                  <span className="text-[9px] font-bold text-accent uppercase block mb-1">Scene 1</span>
                  <span className="text-[10px] text-white font-medium">Ethiopian Coffee Highlands</span>
                </div>
                <div className="absolute bottom-2 right-2 z-20">
                  <Check className="h-3.5 w-3.5 text-accent" />
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-zinc-800 group bg-zinc-950 aspect-[4/3] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]"></div>
                <div className="z-20 text-center p-2">
                  <span className="text-[9px] font-bold text-zinc-400 uppercase block mb-1">Scene 2</span>
                  <span className="text-[10px] text-zinc-300 font-medium">Istanbul Coffee House</span>
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-15 backdrop-blur-[1px]">
                  <div className="flex flex-col items-center gap-1">
                    <Loader2 className="h-4 w-4 animate-spin text-accent" />
                    <span className="text-[8px] text-zinc-400">Rendering...</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
              <span>Resolving cinematic camera motion...</span>
              <span className="font-mono text-accent">50% Done</span>
            </div>
          </div>
        );

      case 5: // Captions
        return (
          <div className="flex flex-col justify-between h-full p-6 text-left">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-accent uppercase tracking-wider">
                <Type className="h-4 w-4" />
                <span>Micro-Captions Engine</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">High-engagement fonts & styling</h4>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                Automatically formats text in pop-style captions with colors, shadows, and word highlights.
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center bg-zinc-950 border border-zinc-900 rounded-xl p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,92,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,92,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
              
              <div className="text-center font-sans tracking-tighter">
                <span className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-2 font-mono">Simulating Caption Style</span>
                <h3 className="text-2xl font-black italic text-white uppercase leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                  THIS <span className="text-accent underline decoration-4 underline-offset-4 decoration-accent">SEED</span> RULES YOUR
                </h3>
                <h3 className="text-2xl font-black italic text-[#FFE500] uppercase leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                  ENTIRE MORNING
                </h3>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
              <span>Preset: "TikTok Viral Gold"</span>
              <span className="text-emerald-400 font-semibold">Active</span>
            </div>
          </div>
        );

      case 6: // Video
        return (
          <div className="flex flex-col justify-between h-full p-6 text-left">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-accent uppercase tracking-wider">
                <Play className="h-4 w-4" />
                <span>Final Output</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Ready to post everywhere</h4>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                Export and schedule to TikTok, Instagram Reels, and YouTube Shorts in one smooth action.
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center gap-3 w-full">
                <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white">Video Rendered & Exported</h5>
                  <p className="text-xs text-zinc-400 mt-0.5">High-definition 1080x1920 MP4 is ready.</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2 w-full">
              <button className="flex-1 py-2 px-3 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg text-xs font-medium hover:text-white hover:border-zinc-700 transition-all">
                Download MP4
              </button>
              <button className="flex-1 py-2 px-3 bg-accent text-white rounded-lg text-xs font-medium hover:bg-accent-hover transition-all shadow-[0_0_15px_rgba(255,92,0,0.2)]">
                Auto-Publish
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="preview-section" className="relative py-20 lg:py-28 overflow-hidden border-b border-zinc-900">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Title Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            How VideoXO builds your shorts
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            A linear workflow that handles everything. From typing your initial thought to holding a rendered viral video in hand.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Steps Timeline (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
            {steps.map((step) => {
              const StepIcon = step.icon;
              const isSelected = activeStep === step.id;
              
              return (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900/90 border-accent/40 shadow-[0_0_20px_rgba(255,92,0,0.04)]"
                      : "bg-zinc-950/40 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/40"
                  }`}
                >
                  {/* Step Progress Line Indicator */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeStepLine"
                      className="absolute left-0 top-0 bottom-0 w-[4px] bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
                    isSelected 
                      ? "bg-accent/15 text-accent" 
                      : "bg-zinc-900 text-zinc-500 group-hover:text-zinc-300"
                  }`}>
                    <StepIcon className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-semibold transition-colors duration-300 ${
                        isSelected ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                      }`}>
                        {step.label}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-600">0{step.id}</span>
                    </div>
                    <p className={`text-xs mt-1 transition-colors duration-300 leading-normal ${
                      isSelected ? "text-zinc-300" : "text-zinc-500 group-hover:text-zinc-400"
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Simulated Preview Box & Phone mockup (Right Column) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Action/UI panel */}
            <div className="md:col-span-7 glass-panel rounded-3xl overflow-hidden flex flex-col justify-between min-h-[350px] relative shadow-2xl">
              {/* Top Bar Decoration */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-zinc-900/30">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Process Monitor</span>
                </div>
                <div className="text-[10px] font-mono text-zinc-500 bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800">
                  Step {activeStep}/6
                </div>
              </div>

              {/* Dynamic Content Area */}
              <div className="flex-grow bg-zinc-900/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="h-full"
                  >
                    {renderPreviewContent()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Simulated Phone Video Mockup */}
            <div className="md:col-span-5 flex items-center justify-center">
              <div className="relative w-[180px] sm:w-[200px] aspect-[9/16] rounded-[28px] border-4 border-zinc-800 bg-[#07080a] shadow-2xl overflow-hidden flex flex-col justify-between p-3 select-none">
                
                {/* Speaker/Camera notch */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-zinc-800 rounded-full z-30"></div>

                {/* Video background simulator */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 -z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,92,0,0.1)_0%,transparent_100%)] -z-20"></div>

                {/* Video UI Overlay */}
                <div className="flex justify-between items-start pt-3 z-10">
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded-full border border-white/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></div>
                    <span className="text-[8px] font-bold text-white tracking-wide uppercase">VideoXO AI</span>
                  </div>
                </div>

                {/* Simulated Caption Overlays on Phone based on Step */}
                <div className="flex-1 flex items-center justify-center p-2 z-10">
                  <AnimatePresence mode="wait">
                    {activeStep >= 2 && (
                      <motion.div
                        key={activeStep}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="text-center font-sans tracking-tight"
                      >
                        {activeStep === 2 && (
                          <span className="text-[10px] font-bold italic text-white uppercase bg-black/60 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                            "This seed rules..."
                          </span>
                        )}
                        {activeStep === 3 && (
                          <span className="text-[10px] font-bold italic text-white uppercase bg-black/60 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                            🎙️ James Voiceover...
                          </span>
                        )}
                        {activeStep === 4 && (
                          <div className="rounded-lg overflow-hidden border border-white/10 w-28 aspect-video bg-zinc-950 flex items-center justify-center text-[8px] text-zinc-400">
                            ☕ Image Rendered
                          </div>
                        )}
                        {activeStep === 5 && (
                          <span className="text-[10px] font-black italic text-accent uppercase leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] bg-black/40 px-1">
                            THIS SEED RULES!
                          </span>
                        )}
                        {activeStep === 6 && (
                          <div className="flex flex-col items-center gap-1.5">
                            <div className="h-7 w-7 rounded-full bg-accent/20 flex items-center justify-center text-accent animate-bounce">
                              <Play className="h-3.5 w-3.5 fill-accent text-accent" />
                            </div>
                            <span className="text-[9px] font-bold text-white uppercase drop-shadow">
                              Ready to post
                            </span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Right side interaction buttons */}
                <div className="absolute right-2.5 bottom-12 flex flex-col gap-2.5 items-center z-10 text-white">
                  <div className="flex flex-col items-center">
                    <div className="h-7 w-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:text-accent transition-colors cursor-pointer border border-white/5">
                      <Heart className="h-3.5 w-3.5 fill-accent text-accent" />
                    </div>
                    <span className="text-[7px] mt-0.5 font-medium">45.2K</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-7 w-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:text-accent transition-colors cursor-pointer border border-white/5">
                      <MessageCircle className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-[7px] mt-0.5 font-medium">892</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-7 w-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:text-accent transition-colors cursor-pointer border border-white/5">
                      <Share2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-[7px] mt-0.5 font-medium">Share</span>
                  </div>
                </div>

                {/* Creator info overlay */}
                <div className="w-full text-left z-10 bg-gradient-to-t from-black/80 to-transparent p-1 pt-4">
                  <span className="text-[8px] font-bold text-white">@videoxo_ai</span>
                  <p className="text-[7px] text-zinc-300 line-clamp-2 mt-0.5">
                    How coffee rules the morning. Created entirely with VideoXO AI in 30 seconds! ☕⚡
                  </p>
                  <div className="h-1.5 w-full bg-zinc-900 rounded-full mt-2 overflow-hidden">
                    <motion.div
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                      className="h-full bg-accent"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
