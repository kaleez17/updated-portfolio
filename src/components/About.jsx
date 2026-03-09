import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Target, ExternalLink } from 'lucide-react';

const FlipCard = ({ icon: Icon, title, front, back, color, mapUrl }) => (
  <div className="group h-[220px] w-full perspective-1000">
    <motion.div className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-y-180">
      {/* Front Side */}
      <div className="absolute inset-0 backface-hidden bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-xl p-8 flex items-center gap-6">
        <div className={`p-5 rounded-3xl bg-${color}/10 text-${color}`}><Icon size={36} /></div>
        <div>
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] mb-1">{title}</p>
          <h4 className="text-white font-black text-xl uppercase tracking-tighter">{front}</h4>
        </div>
      </div>
      
      {/* Back Side (The Launcher) */}
      <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-cyan-900/60 to-purple-900/60 border border-white/20 rounded-[40px] backdrop-blur-2xl p-8 flex flex-col justify-center items-center text-center">
        <p className="text-cyan-400 font-black text-[10px] uppercase tracking-widest mb-2">Location Verified</p>
        <p className="text-white text-[11px] font-bold leading-relaxed uppercase mb-6 px-4">{back}</p>
        
        {/* FIX: Use real Google Maps URLs here */}
        <a 
          href={mapUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white text-black font-black rounded-2xl text-[10px] uppercase tracking-widest hover:bg-cyan-400 transition-all active:scale-95 shadow-xl"
        >
          Launch Map <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  </div>
);

const About = () => (
  <div className="container mx-auto max-w-6xl py-32 px-6">
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-20 items-center">
      <div className="w-full space-y-12">
        <div className="relative group">
          <h2 className="text-[clamp(3rem,12vw,7rem)] font-black text-white tracking-tighter uppercase leading-[0.8] relative z-10">
            About <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 animate-gradient-x">
              Archive
            </span>
          </h2>
          <span className="absolute -top-4 -left-2 text-[clamp(3.5rem,14vw,8rem)] font-black text-white/5 uppercase tracking-tighter select-none -z-10 group-hover:text-cyan-500/30 transition-colors">
            IDENTITY
          </span>
          <div className="w-20 h-1 bg-cyan-500 mt-6 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
        </div>

        <div className="space-y-6">
          <FlipCard 
            icon={GraduationCap} 
            title="Academic Profile" 
            front="M.Sc IT (2023)" 
            back="Master of Science in IT - Madurai Kamaraj University" 
            color="cyan-400"
            mapUrl="https://maps.app.goo.gl/yhnSq4n3vpKWeHqE8" 
          />
          <FlipCard 
            icon={MapPin} 
            title="Current Location" 
            front="Chennai" 
            back="Based in the Tech Hub: Chennai, Tamil Nadu" 
            color="purple-500"
            mapUrl="https://maps.app.goo.gl/ENfjQaM3VLHxpVvT7" 
          />
          <FlipCard 
            icon={MapPin} 
            title="Native Coordinates" 
            front="Ramanathapuram" 
            back="Born in Ramanathapuram, the land of Kalam" 
            color="purple-500" 
            mapUrl="https://maps.app.goo.gl/vKmbGDyZ9PWVXfgq7" 
          />
        </div>
      </div>

      <motion.div 
        whileHover={{ rotateY: 15, rotateX: -10 }} 
        className="p-12 rounded-[60px] bg-black/40 border border-white/10 backdrop-blur-3xl text-center shadow-[0_0_50px_rgba(6,182,212,0.1)] relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <Target className="text-cyan-400 mb-8 mx-auto group-hover:scale-110 transition-transform" size={60} />
        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">Strategic Goal</h3>
        <p className="text-gray-400 font-bold uppercase tracking-[0.3em] leading-relaxed text-[10px]">
          Architecting digital universes by merging raw IT logic with cinematic UI.
        </p>
      </motion.div>
    </div>
  </div>
);

export default About;