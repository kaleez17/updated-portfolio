import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code2, Mail, Rocket, Zap, Cpu } from 'lucide-react';

const Navbar = ({ startShowcase, scrollTo }) => {
  const navLinks = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Skills', id: 'skills', icon: Cpu },
    { name: 'Projects', id: 'projects', icon: Code2 },
    { name: 'Contact', id: 'contact', icon: Mail }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-4 md:py-5 md:px-16 backdrop-blur-xl border-b border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="text-lg md:text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer flex items-center gap-2"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <Zap className="text-cyan-400" size={16} /> portfolio
          </div>

          <ul className="hidden md:flex gap-10 text-gray-400 font-bold uppercase text-[9px] tracking-[0.4em]">
            {navLinks.map(link => (
              <li key={link.id} className="hover:text-cyan-400 cursor-pointer transition-all" onClick={() => scrollTo(link.id)}>
                {link.name}
              </li>
            ))}
            <li 
              className="text-white bg-purple-600 px-4 py-1 rounded-full cursor-pointer hover:bg-purple-500 transition-all flex items-center gap-2"
              onClick={startShowcase}
            >
              <Rocket size={12} /> SHOWCASE
            </li>
          </ul>

          <div className="md:hidden">
            <button onClick={startShowcase} className="p-2.5 bg-purple-600 rounded-xl text-white">
              <Rocket size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dock */}
      <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] w-[90%] max-w-[400px]">
        <div className="flex justify-around items-center bg-black/80 backdrop-blur-2xl border border-white/10 p-4 rounded-[28px] shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="flex flex-col items-center gap-1 group"
            >
              <div className="p-2 rounded-xl group-hover:text-cyan-400 text-gray-400 transition-all">
                <link.icon size={22} />
              </div>
              <span className="text-[6px] font-black uppercase tracking-widest text-gray-500 group-hover:text-cyan-400">
                {link.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;