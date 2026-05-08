'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GlobeMarker } from './GlobeMarker';

// Convert lat/lon degrees to 3D point on unit sphere, scaled to radius r
function latLonToVec3(lat: number, lon: number, r: number): [number, number, number] {
  const phi   = (90 - lat)  * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return [
    -(r * Math.sin(phi) * Math.cos(theta)),
     (r * Math.cos(phi)),
     (r * Math.sin(phi) * Math.sin(theta)),
  ];
}

const MARKERS = [
  { section: 'about'     as const, label: 'About',    lat:  45, lon: -60,  color: '#4F46E5' },
  { section: 'offerings' as const, label: 'Services', lat:  40, lon:  60,  color: '#7C3AED' },
  { section: 'stories'   as const, label: 'Stories',  lat:   5, lon:  100, color: '#4F46E5' },
  { section: 'connect'   as const, label: 'Contact',  lat: -40, lon:  50,  color: '#7C3AED' },
  { section: 'impact'    as const, label: 'Impact',   lat: -35, lon: -70,  color: '#4F46E5' },
];

export function OrbitGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current)  meshRef.current.rotation.y  += delta * 0.08;
    if (glowRef.current)  glowRef.current.rotation.y  -= delta * 0.04;
    if (innerRef.current) innerRef.current.rotation.y += delta * 0.04;
  });

  return (
    <group>
      {/* Outer wireframe */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#4F46E5"
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Dark inner sphere */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[1.96, 32, 32]} />
        <meshStandardMaterial color="#08081a" transparent opacity={0.97} />
      </mesh>

      {/* Tilted glow ring */}
      <mesh ref={glowRef} rotation={[Math.PI / 3.5, 0.3, 0]}>
        <torusGeometry args={[2.25, 0.018, 8, 120]} />
        <meshStandardMaterial color="#7C3AED" emissive="#7C3AED" emissiveIntensity={2.5} />
      </mesh>

      {/* Equator ring */}
      <mesh>
        <torusGeometry args={[2.0, 0.01, 8, 120]} />
        <meshStandardMaterial color="#4F46E5" emissive="#4F46E5" emissiveIntensity={1.5} />
      </mesh>

      {/* Section markers */}
      {MARKERS.map((m) => (
        <GlobeMarker
          key={m.section}
          section={m.section}
          label={m.label}
          color={m.color}
          position={latLonToVec3(m.lat, m.lon, 2.08)}
        />
      ))}
    </group>
  );
}
