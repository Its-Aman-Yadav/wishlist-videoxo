"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { joinWaitlist } from "@/app/actions";

interface WaitlistFormProps {
  buttonText?: string;
}

export default function WaitlistForm({ buttonText = "Join Waitlist" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    try {
      const response = await joinWaitlist(email);
      if (response.success) {
        setStatus("success");
        setMessage(response.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(response.message);
      }
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative z-10 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-500">
            <Mail className="h-5 w-5" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="Enter your email address..."
            disabled={status === "submitting" || status === "success"}
            className="w-full pl-12 pr-4 py-3.5 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-200 backdrop-blur-md text-sm sm:text-base"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className="relative overflow-hidden group px-6 py-3.5 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_20px_rgba(255,92,0,0.25)] hover:shadow-[0_4px_25px_rgba(255,92,0,0.4)] disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98] text-sm sm:text-base shrink-0"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Joining...</span>
            </>
          ) : (
            <>
              <span>{buttonText}</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`mt-3 flex items-center gap-2 text-sm justify-center ${
              status === "success" ? "text-emerald-400" : "text-rose-400"
            }`}
          >
            {status === "success" && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />}
            <span className="font-medium text-center">{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
