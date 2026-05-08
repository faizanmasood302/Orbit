'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useGlobeStore } from '@/store/orbit';

/** Smoothly lerps the camera to the Zustand cameraTarget on every frame */
export function CameraRig() {
  const { camera } = useThree();
  const cameraTarget = useGlobeStore((s) => s.cameraTarget);
  const targetVec = useRef(new THREE.Vector3(...cameraTarget));

  useFrame(() => {
    targetVec.current.set(...cameraTarget);
    camera.position.lerp(targetVec.current, 0.06);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
