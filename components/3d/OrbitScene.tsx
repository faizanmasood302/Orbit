'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { OrbitGlobe } from './OrbitGlobe';
import { AIOrb } from './AIOrb';
import { CameraRig } from './CameraRig';

export function OrbitScene() {
  return (
    <div className="w-full h-full" style={{ touchAction: 'none' }}>

      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 6], fov: 45, near: 0.1, far: 100 }}
      >
        <ambientLight intensity={0.25} />
        <pointLight position={[10, 10, 10]}   intensity={1.5} color="#4F46E5" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7C3AED" />
        <pointLight position={[0, 5, -5]}      intensity={0.3} color="#a78bfa" />

        <Suspense fallback={null}>
          <OrbitGlobe />
          <AIOrb />
        </Suspense>

        {/* Camera driven by Zustand cameraTarget */}
        <CameraRig />

        {/* Manual drag enabled; zoom locked (FR1) */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minDistance={4}
          maxDistance={8}
          rotateSpeed={0.6}
          dampingFactor={0.08}
          enableDamping
        />
      </Canvas>
    </div>
  );
}
