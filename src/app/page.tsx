"use client";

import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { GlowCard } from "@/components/ui/spotlight-card";
import { motion } from "framer-motion";
import { Mail, FileText, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden bg-slate-950 font-sans">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SmokeBackground smokeColor="#06b6d4" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-5 py-20 w-full">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-200 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          FAISAL AWAD <br /> Computer Technology Engineer
        </motion.h1>

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
            <GlowCard customSize={true} glowColor="green" className="flex flex-col items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer w-full md:w-64 h-64">
              <MessageCircle size={64} className="mb-4 text-green-400" />
              <h2 className="text-2xl font-bold">WhatsApp</h2>
              <p className="text-slate-400 mt-2 text-center text-sm">Chat with me directly</p>
            </GlowCard>
          </a>

          {/* CV Card */}
          <a href="/Faisal_Awad_Resume.docx" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto outline-none">
            <GlowCard customSize={true} glowColor="purple" className="flex flex-col items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer w-full md:w-64 h-64">
              <FileText size={64} className="mb-4 text-purple-400" />
              <h2 className="text-2xl font-bold">My CV</h2>
              <p className="text-slate-400 mt-2 text-center text-sm">View my experience</p>
            </GlowCard>
          </a>

          {/* Email Card */}
          <a href="mailto:fisal.awad.1995@gmail.com" className="w-full md:w-auto outline-none">
            <GlowCard customSize={true} glowColor="blue" className="flex flex-col items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer w-full md:w-64 h-64">
              <Mail size={64} className="mb-4 text-blue-400" />
              <h2 className="text-2xl font-bold">Email</h2>
              <p className="text-slate-400 mt-2 text-center text-sm">Send me a message</p>
            </GlowCard>
          </a>
        </motion.div>
      </div>
    </main>
  );
}
