import React, { useState, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Archive from './components/Archive';
import Projects from './components/projects';
import Contact from './components/Contact';

function MilkyWay() {
  const ref = useRef();
  const [sphere] = useState(() => {
    const arr = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const r = 25 + Math.random() * 45;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#ffffff" size={0.2} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
      </Points>
      <Stars radius={130} depth={50} count={6000} factor={7} saturation={0} fade speed={1.5} />
    </group>
  );
}

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  const startShowcase = async () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    for (const id of sections) {
      scrollTo(id);
      await new Promise(r => setTimeout(r, 2000));
    }
  };

  return (
    <main className="relative bg-[#010103] min-h-screen">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
          <Suspense fallback={null}><MilkyWay /></Suspense>
        </Canvas>
      </div>

      <div className="relative z-10">
        <Navbar startShowcase={startShowcase} scrollTo={scrollTo} />
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="archieve"><Archive /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </main>
  );
}

export default App;