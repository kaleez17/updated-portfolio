import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Github, Linkedin, MessageCircle, Sparkles, ExternalLink } from 'lucide-react';

const Contact = () => {
  const socials = [
    { icon: Instagram, label: "Instagram", url: "https://instagram.com/your_username", color: "pink-600", desc: "Follow the Journey" },
    { icon: Mail, label: "Gmail", url: "mailto:your.email@gmail.com", color: "cyan-500", desc: "Official Inquiries" },
    { icon: MessageCircle, label: "WhatsApp", url: "https://wa.me/91637XXXXXXXX", color: "green-500", desc: "Direct Comms" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/yourprofile", color: "blue-600", desc: "Professional Network" },
    { icon: Github, label: "GitHub", url: "https://github.com/kaleez17", color: "gray-500", desc: "View Repositories" }
  ];

  return (
    <section className="relative z-[30] container mx-auto max-w-7xl py-32 px-6 pb-48">
      {/* --- GHOST HEADING: CONTACT --- */}
      <div className="relative mb-24 flex flex-col items-center text-center group">
        <h2 className="text-[clamp(3rem,12vw,8rem)] font-black text-white tracking-tighter uppercase leading-[0.8] relative z-10">
          ESTABLISH <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-white to-cyan-400 animate-gradient-x">
            CONTACT
          </span>
        </h2>
        <span className="absolute -top-8 text-[clamp(4.5rem,15vw,10rem)] font-black text-white/5 uppercase tracking-tighter select-none -z-10 group-hover:text-purple-500/10 transition-colors">
          LINK
        </span>
        <div className="w-32 h-1 bg-purple-500 mt-8 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
        <p className="text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px] mt-6">
          System Architect • Ramanathapuram Base
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
        {socials.map((social, i) => (
          <div key={i} className="group h-[280px] md:h-[320px] w-full [perspective:1200px]">
            <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
              <div className="absolute inset-0 w-full h-full rounded-[35px] md:rounded-[45px] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center p-6 md:p-8 [backface-visibility:hidden]">
                <div className={`p-4 md:p-6 bg-white/5 rounded-[25px] md:rounded-[30px] text-white group-hover:bg-${social.color} transition-all duration-500 shadow-lg`}>
                  <social.icon className="w-8 h-8 md:w-11 md:h-11" />
                </div>
                <h4 className="mt-6 md:mt-8 text-lg md:text-xl font-black text-white uppercase tracking-tighter text-center">{social.label}</h4>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-[35px] md:rounded-[45px] bg-gradient-to-br from-cyan-950 to-black p-8 md:p-10 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border border-cyan-500/40 flex flex-col justify-center items-center">
                <Sparkles className="text-cyan-400 mb-4 md:mb-6 w-6 h-6 md:w-7 md:h-7" />
                <p className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-8 md:mb-10 leading-relaxed">{social.desc}</p>
                <a href={social.url} target="_blank" rel="noreferrer" className="w-full py-3 md:py-4 bg-white text-black font-black rounded-xl md:rounded-2xl text-[9px] md:text-[10px] uppercase tracking-[0.3em] hover:bg-cyan-400 transition-all flex items-center justify-center gap-2">
                  Connect <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;