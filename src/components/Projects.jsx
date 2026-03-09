import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, ExternalLink } from 'lucide-react';

const projects = [
  { title: "PRIVATE AI", link: "https://kaleez17.github.io/private_AI/", desc: "Secure Personal AI System" },
  { title: "VIGIL OS", link: "https://kaleez17.github.io/VIGIL-OS/", desc: "Futuristic System Interface" },
  { title: "NEXUS OS", link: "https://kaleez17.github.io/NEXUS-OS/", desc: "Task Management Ecosystem" },
  { title: "AEGIS NEURAL", link: "https://kaleez17.github.io/AEGIS-NEURAL-NETWORK/", desc: "Neural Network Visualization" },
  { title: "VIGIL QUANTUM", link: "https://kaleez17.github.io/VIGIL-QUANTOM-DASBOARD/", desc: "Data Monitoring HUD" },
  { title: "REVERSE MARKET", link: "https://kaleez17.github.io/reverse_marketplace/", desc: "Bidding Logic Platform" },
  { title: "DASHBOARD PRO", link: "https://kaleez17.github.io/Dashboard/", desc: "Professional Admin Panel" },
  { title: "FLAMES PREDICTOR", link: "https://kaleez17.github.io/flames-predictor/", desc: "Logic Algorithm Tool" },
  { title: "MOOD COMPANION", link: "https://kaleez17.github.io/mood-companion/", desc: "Emotional AI Tracker" },
  { title: "MEMORY KEEPER", link: "https://kaleez17.github.io/memory-keeper/", desc: "Digital Security Vault" },
  { title: "APPOINTMENT SITE", link: "https://kaleez17.github.io/appointment_booking_site/", desc: "Advanced Booking Web" }
];

const Projects = () => (
  <section id="projects" className="relative z-[30] container mx-auto max-w-7xl py-32 px-6">
    {/* --- GHOST HEADING: PROJECTS --- */}
    <div className="relative mb-24 flex flex-col items-center text-center group">
      <h2 className="text-[clamp(3rem,12vw,7rem)] font-black text-white tracking-tighter uppercase leading-[0.8] relative z-10">
        accomplished<br /> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          missions
        </span>
      </h2>
      <span className="absolute -top-6 text-[clamp(4rem,15vw,9rem)] font-black text-white/5 uppercase tracking-tighter select-none -z-10 group-hover:text-cyan-500/10 transition-colors">
        DATA
      </span>
      <div className="w-24 h-1 bg-cyan-500 mt-8 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6)] animate-pulse" />
      <p className="text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px] mt-6">
        11 Active Deployments • M.Sc IT
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {projects.map((p, i) => (
        <div key={i} className="group h-[380px] w-full [perspective:1200px]">
          <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
            <div className="absolute inset-0 w-full h-full rounded-[45px] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center p-8 [backface-visibility:hidden]">
              <div className="p-5 bg-cyan-400/10 rounded-3xl text-cyan-400 mb-6 shadow-lg"><Cpu size={40} /></div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter text-center">{p.title}</h3>
            </div>
            <div className="absolute inset-0 w-full h-full rounded-[45px] bg-gradient-to-br from-cyan-950 to-black border border-cyan-500/40 backdrop-blur-2xl p-10 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <Sparkles className="text-cyan-400 mb-6" size={28} />
              <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-10">{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer" className="w-full py-4 bg-white text-black font-black rounded-2xl text-[10px] uppercase tracking-[0.3em] hover:bg-cyan-400 transition-all shadow-xl flex items-center justify-center gap-2">
                Launch Node <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;