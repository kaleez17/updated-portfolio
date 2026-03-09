import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, OrbitControls, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';

const PlanetNode = ({ distance, size, color, speed, offset, hasRings }) => {
  const planetRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    planetRef.current.position.x = Math.cos(t) * distance;
    planetRef.current.position.z = Math.sin(t) * distance;
    planetRef.current.rotation.y += 0.01;
  });

  return (
    <group>
      <Torus args={[distance, 0.005, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="white" transparent opacity={0.05} />
      </Torus>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
        {hasRings && (
          <Torus args={[size * 1.8, 0.02, 2, 100]} rotation={[Math.PI / 2.5, 0, 0]}>
            <meshStandardMaterial color={color} transparent opacity={0.4} />
          </Torus>
        )}
      </mesh>
    </group>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent pt-20">
      {/* SOLAR SYSTEM ENGINE */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 20, 35], fov: 45 }} alpha={true}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[0, 0, 0]} intensity={12} color="#ffaa00" />
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
              <Sphere args={[1.8, 100, 100]}>
                <MeshDistortMaterial color="#ff7700" emissive="#ff3300" emissiveIntensity={5} distort={0.4} speed={2} />
              </Sphere>
              <PlanetNode distance={5} size={0.2} color="#999999" speed={0.7} offset={0} /> 
              <PlanetNode distance={8} size={0.35} color="#e3bb76" speed={0.5} offset={2} />
              <PlanetNode distance={11} size={0.38} color="#2271b3" speed={0.35} offset={4} />
              <PlanetNode distance={15} size={0.7} color="#d39c7e" speed={0.15} offset={5} />
              <PlanetNode distance={20} size={0.6} color="#c5ab6e" speed={0.1} offset={3} hasRings={true} />
            </Float>
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.2} />
          </Suspense>
        </Canvas>
      </div>

      {/* RE-SIZED HUD OVERLAY */}
      <div className="container mx-auto px-6 z-10 pointer-events-none text-center md:text-left">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
           {/* LOGO SIZE: Adjusted from 14vw to 10vw for a smaller look */}
           <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-black text-white tracking-tighter leading-[0.8] uppercase">
            Kalee z<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">.DEV</span>
          </h1>
          
          <p className="text-gray-400 text-xs md:text-lg mt-6 max-w-xl font-bold uppercase tracking-[0.3em] leading-relaxed mx-auto md:mx-0 opacity-80">
            Web Dev from <span className="text-white">Ramanathapuram</span> <br />
            M.Sc IT Specialist
          </p>

          <div className="mt-10 flex justify-center md:justify-start gap-4">
            <div className="w-12 h-px bg-cyan-500/50 self-center" />
            <span className="text-[8px] text-cyan-400 font-black tracking-[1.5em] uppercase">தீதும் நன்றும் பிறர் தர வாரா </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;