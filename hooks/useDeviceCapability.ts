'use client';

import { useState } from 'react';

type DeviceTier = 'high' | 'mid' | 'low';

export function useDeviceCapability(): DeviceTier {
  const [tier] = useState<DeviceTier>(() => {
    if (typeof window === 'undefined') return 'high';

    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) return 'low';

    const renderer = (gl as WebGLRenderingContext)
      .getParameter((gl as WebGLRenderingContext).RENDERER)
      .toLowerCase();

    const lowEnd = ['mali-4', 'mali-3', 'adreno 3'];
    if (lowEnd.some((g) => renderer.includes(g))) return 'mid';

    const nav = navigator as { deviceMemory?: number };
    if (nav.deviceMemory && nav.deviceMemory < 2) return 'mid';

    return 'high';
  });

  return tier;
}
