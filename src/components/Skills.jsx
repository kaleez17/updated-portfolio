import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Code, Terminal, Database, PenTool, Cpu } from 'lucide-react';

const Skills = () => {
  const techStack = [
    { name: "HTML", icon: Globe, color: "#E34F26", delay: 0 },
    { name: "CSS", icon: Layout, color: "#1572B6", delay: -3.33 },
    { name: "Vanilla JS", icon: Code, color: "#F7DF1E", delay: -6.66 },
    { name: "Node.js", icon: Terminal, color: "#339933", delay: -10 },
    { name: "SQL", icon: Database, color: "#00758F", delay: -13.33 },
    { name: "UI/UX", icon: PenTool, color: "#FF61F6", delay: -16.66 }
  ];

  // YOUR MATHEMATICAL INFINITY PATH
  const pathData = "M400,200 C550,50 750,50 750,200 C750,350 550,350 400,200 C250,50 50,50 50,200 C50,350 250,350 400,200";

  return (
    <section id="skills" className="relative z-[30] w-full min-h-screen py-20 md:py-32 overflow-hidden flex flex-col items-center justify-center bg-transparent">
      
      {/* GHOST HEADING */}
      {/* GHOST HEADING: UPDATED FOR HOVER COLOR */}
<div className="relative mb-20 md:mb-32 flex flex-col items-center text-center group">
  <h2 className="text-[clamp(2.5rem,10vw,7rem)] font-black text-white tracking-tighter uppercase leading-[0.8] relative z-10 pointer-events-none">
    SKILLS <br /> 
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
      VORTEX
    </span>
  </h2>

  {/* FIX: Removed -z-10, added group-hover:text-cyan-500/40 and duration-500 */}
  <span className="absolute -top-6 text-[clamp(3.5rem,15vw,9rem)] font-black text-white/5 uppercase tracking-tighter select-none z-0 transition-all duration-500 group-hover:text-cyan-500/30 group-hover:scale-110 cursor-default">
    POWER
  </span>
  
  <div className="w-24 h-1 bg-cyan-500 mt-8 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6)]" />
</div>

      {/* THE VORTEX ENGINE */}
      <div className="relative w-full max-w-[800px] h-[300px] md:h-[400px]">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] scale-[0.4] sm:scale-[0.7] md:scale-100 origin-center">
          
          {/* CENTER HUB */}
          <div className="absolute top-[200px] left-[400px] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3">
            <div className="p-6 rounded-full bg-black/90 border border-cyan-500/30 backdrop-blur-3xl shadow-[0_0_60px_rgba(34,211,238,0.4)] animate-pulse">
              <Cpu className="text-cyan-400" size={40} />
            </div>
            <span className="text-[10px] font-black text-white uppercase tracking-[0.6em] bg-black/80 px-6 py-2 rounded-full border border-white/10 backdrop-blur-xl whitespace-nowrap">
              M.Sc IT Specialist
            </span>
          </div>

          {/* THE STRONG NEON PATH LAYER */}
          <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <defs>
              <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Background Glow Path */}
            <path 
              d={pathData} 
              fill="none" 
              stroke="#22d3ee" 
              strokeWidth="6" 
              className="opacity-20"
              filter="url(#neon-glow)"
            />
            
            {/* Main Visible Path (Strong Layer) */}
            <path 
              d={pathData} 
              fill="none" 
              stroke="white" 
              strokeWidth="2.5" 
              className="opacity-40"
              strokeDasharray="15,10"
            />
          </svg>

          {/* ICONS MOVING ON PATH */}
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 md:w-28 md:h-28"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: tech.delay
              }}
              style={{
                offsetPath: `path('${pathData}')`,
                top: 0,
                left: 0,
                margin: 0
              }}
            >
              <div className="group relative flex flex-col items-center justify-center w-full h-full p-2">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-125 border border-white/10 backdrop-blur-xl"
                  style={{ 
                    background: `radial-gradient(circle at 30% 30%, ${tech.color}, #000)`,
                    boxShadow: `0 0 35px ${tech.color}60`
                  }}
                >
                  <tech.icon size={24} className="text-white drop-shadow-lg" />
                </div>
                
                <span className="mt-3 text-[10px] font-black text-white/80 uppercase tracking-tighter text-center bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center opacity-30">
        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-white">Front End Developer</p>
      </div>
    </section>
  );
};

export default Skills;
