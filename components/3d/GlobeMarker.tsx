'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { useGlobeStore } from '@/store/orbit';
import type { Section } from '@/store/modules/globe';

interface GlobeMarkerProps {
  position: [number, number, number];
  label: string;
  section: NonNullable<Section>;
  color?: string;
}

export function GlobeMarker({ position, label, section, color = '#7C3AED' }: GlobeMarkerProps) {
  const meshRef  = useRef<THREE.Mesh>(null);
  const ringRef  = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const spinGlobeTo    = useGlobeStore((s) => s.spinGlobeTo);
  const isTransitioning = useGlobeStore((s) => s.isTransitioning);

  useFrame((_, delta) => {
    if (!meshRef.current || !ringRef.current) return;
    // Pulse scale
    const base = hovered ? 1.4 : 1.0;
    meshRef.current.scale.lerp(new THREE.Vector3(base, base, base), 0.12);
    // Spin ring
    ringRef.current.rotation.z += delta * (hovered ? 3 : 1.2);
    ringRef.current.rotation.x += delta * 0.5;
  });

  function handleClick() {
    if (isTransitioning) return;
    spinGlobeTo(section);
  }

  return (
    <group position={position}>
      {/* Core orb */}
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerEnter={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerLeave={() => { setHovered(false); document.body.style.cursor = 'default'; }}
      >
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 3 : 1.5}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Spinning ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.22, 0.015, 8, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 2 : 0.8}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* HTML label — always faces camera */}
      <Html
        center
        distanceFactor={6}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        <div
          style={{
            background: 'rgba(10,10,30,0.8)',
            border: `1px solid ${color}60`,
            borderRadius: 6,
            padding: '3px 8px',
            fontSize: 11,
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            marginTop: 28,
            opacity: hovered ? 1 : 0.7,
            transition: 'opacity 0.2s',
          }}
        >
          {label}
        </div>
      </Html>
    </group>
  );
}
