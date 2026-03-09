import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useRef } from 'react';

const AnimatedSphere = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const { clock } = state;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.5;
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
      <MeshDistortMaterial
        color="#3d1c56"
        attach="material"
        distort={0.5}
        speed={2}
      />
    </Sphere>
  );
};

export default function Scene() {
  return (
    <div className="h-[500px] w-full">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}