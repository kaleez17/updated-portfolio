import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, Zap, BookOpen, School } from 'lucide-react';

const Archive = () => {
  const timeline = [
    {
      year: "2021 - 2023",
      title: "M.Sc Information Technology",
      org: "Madurai Kamaraj University",
      result: "73%",
      desc: "Advanced specialization in IT systems and architecture. Major academic comeback.",
      icon: Award,
      color: "#06b6d4"
    },
    {
      year: "2018 - 2021",
      title: "B.Sc Information Technology",
      org: "Madurai Kamaraj University",
      result: "61%",
      desc: "Foundational graduation in computing and software principles.",
      icon: GraduationCap,
      color: "#8b5cf6"
    },
    {
      year: "2016 - 2018",
      title: "Higher Secondary (12th)",
      org: "Syed Ammal Higher Secondary School",
      result: "56%",
      desc: "Completed HSC in English Medium. The turning point before entering IT.",
      icon: BookOpen,
      color: "#f97316"
    },
    {
      year: "2005 - 2016",
      title: "Secondary Education (UKG - 10th)",
      org: "Louis Levail Matriculation School",
      result: "82%",
      desc: "Strong foundational schooling in Ramanathapuram.",
      icon: School,
      color: "#22c55e"
    }
  ];

  return (
    <section id="archive" className="relative z-[30] w-full py-32 px-6 flex flex-col items-center">
      
      {/* GHOST HEADING: ARCHIVE */}
      <div className="relative mb-32 flex flex-col items-center text-center group">
        <h2 className="text-[clamp(3rem,12vw,7rem)] font-black text-white tracking-tighter uppercase leading-[0.8] relative z-10">
          SYSTEM <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            ARCHIVE
          </span>
        </h2>
        <span className="absolute -top-6 text-[clamp(4rem,15vw,9rem)] font-black text-white/5 uppercase tracking-tighter select-none -z-10 group-hover:text-purple-500/10 transition-colors">
          HISTORY
        </span>
        <div className="w-24 h-1 bg-purple-500 mt-8 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
      </div>

      <div className="relative max-w-5xl w-full">
        {/* Vertical Data Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 hidden md:block" />

        <div className="space-y-16">
          {timeline.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content Card */}
              <div className="w-full md:w-[46%] p-8 rounded-[40px] bg-black/60 border border-white/10 backdrop-blur-3xl hover:border-cyan-500/30 transition-all group shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 text-white group-hover:text-cyan-400 transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-black text-cyan-400 tracking-[0.3em] uppercase">{item.year}</span>
                      <span className="text-xs font-black text-white bg-white/10 px-3 py-1 rounded-full border border-white/5">{item.result}</span>
                    </div>
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-none mt-1">{item.title}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Zap size={10} className="text-purple-500" /> {item.org}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed italic opacity-70 group-hover:opacity-100 transition-opacity">"{item.desc}"</p>
              </div>

              {/* Central Connection Node */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white hidden md:flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)] z-20">
                <div className="w-2 h-2 rounded-full bg-black animate-ping" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Archive;