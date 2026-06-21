"use client";

import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { GlowCard } from "@/components/ui/spotlight-card";
import { motion } from "framer-motion";
import { Mail, FileText, MessageCircle } from "lucide-react";

const LinkedinIcon = ({ size = 24, className = "", strokeWidth = 1.5 }: { size?: number, className?: string, strokeWidth?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden bg-slate-950 font-sans">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SmokeBackground smokeColor="#06b6d4" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-5 py-20 w-full">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center"
        >
          <h1 className="bg-gradient-to-br from-white to-slate-400 py-2 bg-clip-text text-transparent font-black text-6xl md:text-8xl tracking-tighter uppercase drop-shadow-sm">
            FAISAL AWAD ISAM
          </h1>
          <p className="mt-4 font-medium text-slate-300 text-xl md:text-2xl tracking-wide">
            Computer Technology Engineer
          </p>
        </motion.div>

        {/* Contact Cards Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-16 flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-5xl px-4"
        >
          {/* WhatsApp Card */}
          <a href="https://wa.me/9647749737772" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto outline-none">
            <GlowCard customSize={true} glowColor="green" className="cursor-pointer w-full md:w-64 h-64">
              <div className="flex flex-col items-center justify-center h-full w-full text-slate-200 hover:text-white transition-colors">
                <MessageCircle size={56} className="mb-4 text-green-400" strokeWidth={1.5} />
                <h2 className="text-xl font-medium tracking-wide text-center">WhatsApp</h2>
                <p className="text-slate-400/80 font-light mt-2 text-center text-sm">Chat with me directly</p>
              </div>
            </GlowCard>
          </a>

          {/* CV Card */}
          <a href="/Faisal_Awad_Resume.docx" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto outline-none">
            <GlowCard customSize={true} glowColor="purple" className="cursor-pointer w-full md:w-64 h-64">
              <div className="flex flex-col items-center justify-center h-full w-full text-slate-200 hover:text-white transition-colors">
                <FileText size={56} className="mb-4 text-purple-400" strokeWidth={1.5} />
                <h2 className="text-xl font-medium tracking-wide text-center">My CV</h2>
                <p className="text-slate-400/80 font-light mt-2 text-center text-sm">View my experience</p>
              </div>
            </GlowCard>
          </a>

          {/* Email Card */}
          <a href="mailto:fisal.awad.1995@gmail.com" className="w-full md:w-auto outline-none">
            <GlowCard customSize={true} glowColor="blue" className="cursor-pointer w-full md:w-64 h-64">
              <div className="flex flex-col items-center justify-center h-full w-full text-slate-200 hover:text-white transition-colors">
                <Mail size={56} className="mb-4 text-blue-400" strokeWidth={1.5} />
                <h2 className="text-xl font-medium tracking-wide text-center">Email</h2>
                <p className="text-slate-400/80 font-light mt-2 text-center text-sm">Send me a message</p>
              </div>
            </GlowCard>
          </a>

          {/* LinkedIn Card */}
          <a href="https://www.linkedin.com/in/faisal-awad-4b9a4b1b1" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto outline-none">
            <GlowCard customSize={true} glowColor="blue" className="cursor-pointer w-full md:w-64 h-64">
              <div className="flex flex-col items-center justify-center h-full w-full text-slate-200 hover:text-white transition-colors">
                <LinkedinIcon size={56} className="mb-4 text-blue-400" strokeWidth={1.5} />
                <h2 className="text-xl font-medium tracking-wide text-center">LinkedIn</h2>
                <p className="text-slate-400/80 font-light mt-2 text-center text-sm">Connect with me</p>
              </div>
            </GlowCard>
          </a>
        </motion.div>
      </div>
    </main>
  );
}
