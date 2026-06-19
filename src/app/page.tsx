import Navbar from "@/components/Navbar";
import WaitlistForm from "@/components/WaitlistForm";
import ProductPreview from "@/components/ProductPreview";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import { Play, ShieldCheck, Zap, Heart, Video } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-foreground flex flex-col font-sans selection:bg-accent/30 selection:text-white overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-[800px] right-1/4 w-[500px] h-[500px] bg-[#ff8533]/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,92,0,0.015)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(255,92,0,0.015)_1.5px,transparent_1.5px)] bg-[size:40px_40px] pointer-events-none opacity-60 [mask-image:radial-gradient(ellipse_at_top,white_70%,transparent_100%)]"></div>

      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
          <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
            
            {/* Launching Soon Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-semibold text-accent mb-6 animate-fade-in shadow-[0_0_15px_rgba(255,92,0,0.05)]">
              <Play className="h-3 w-3 text-accent fill-accent animate-pulse" />
              <span>Launching Soon</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-3xl">
              Turn one idea into a <span className="bg-gradient-to-r from-accent to-[#ff8533] bg-clip-text text-transparent text-glow">ready-to-post</span> short video
            </h1>

            {/* Subheadline */}
            <p className="text-zinc-400 text-base sm:text-xl max-w-2xl mb-10 leading-relaxed font-normal">
              VideoXO creates scripts, voiceovers, visuals, captions, and exports your video in one smooth AI workflow.
            </p>

            {/* Waitlist Form */}
            <div className="w-full max-w-md mb-4">
              <WaitlistForm buttonText="Join Waitlist" />
            </div>

            {/* Trust Text */}
            <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium mt-1">
              <ShieldCheck className="h-4 w-4 text-emerald-500/80" />
              <span>No spam. Early users get launch credits.</span>
            </div>
            
          </div>
        </section>

        {/* Product Preview Card Section */}
        <ProductPreview />

        {/* Benefits Section */}
        <Benefits />

        {/* Social Proof Section */}
        <SocialProof />

        {/* Final CTA Section */}
        <section id="waitlist-section" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-zinc-900 bg-zinc-950/20">
          {/* Accent glow behind CTA card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none -z-10"></div>

          <div className="mx-auto max-w-4xl text-center">
            <div className="glass-panel rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
              {/* Corner decoration video logo */}
              <div className="absolute top-4 right-4 text-accent/25">
                <Video className="h-6 w-6" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Be first to try VideoXO
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
                Join the exclusive waitlist today. Get early access to the beta and free credits to create your first videos.
              </p>

              <div className="w-full max-w-md mx-auto mb-3">
                <WaitlistForm buttonText="Get Early Access" />
              </div>
              
              <span className="text-[10px] text-zinc-600 block mt-2">
                Join 2,400+ creators and marketers already in line.
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-zinc-950/60 border-t border-white/5">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500 font-medium">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-tr from-accent to-[#ff8533] flex items-center justify-center">
              <Video className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="font-bold text-white text-base">Video<span className="text-accent font-extrabold">XO</span></span>
          </div>
          
          <div className="flex items-center gap-1 text-xs">
            <span>© {new Date().getFullYear()} VideoXO. All rights reserved. Made with</span>
            <Heart className="h-3 w-3 text-accent fill-accent" />
            <span>for creators.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="mailto:hello@videoxo.ai" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
