'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function AIOrb() {
  const orbRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (orbRef.current) {
      const t = state.clock.elapsedTime;
      orbRef.current.position.x = Math.cos(t * 0.6) * 3;
      orbRef.current.position.y = Math.sin(t * 0.4) * 1;
      orbRef.current.position.z = Math.sin(t * 0.6) * 1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += 0.02;
      ringRef.current.rotation.z += 0.01;
    }
  });

  return (
    <group>
      <mesh ref={orbRef} position={[3, 0, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial
          color="#7C3AED"
          emissive="#7C3AED"
          emissiveIntensity={2}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh ref={ringRef} position={[3, 0, 0]}>
        <torusGeometry args={[0.4, 0.02, 8, 40]} />
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={1.5} />
      </mesh>
    </group>
  );
}
