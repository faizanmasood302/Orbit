import { create } from 'zustand';

export type Section = 'about' | 'offerings' | 'stories' | 'connect' | 'impact' | null;

// Camera targets per section [x, y, z]
export const SECTION_CAMERAS: Record<NonNullable<Section>, [number, number, number]> = {
  about:     [-3.5, 2,   5],
  offerings: [3.5,  2,   5],
  stories:   [4.5,  0,   3],
  connect:   [2.5,  -2,  5],
  impact:    [-2.5, -2,  5],
};
export const HOME_CAMERA: [number, number, number] = [0, 0, 6];

interface GlobeStore {
  currentSection: Section;
  isTransitioning: boolean;
  cameraTarget: [number, number, number];
  setSection: (section: Section) => void;
  spinGlobeTo: (section: Section) => void;
  setTransitioning: (v: boolean) => void;
}

export const useGlobeStore = create<GlobeStore>((set) => ({
  currentSection: null,
  isTransitioning: false,
  cameraTarget: HOME_CAMERA,

  setSection: (section) => set({ currentSection: section }),

  spinGlobeTo: (section) => {
    const target = section ? SECTION_CAMERAS[section] : HOME_CAMERA;
    set({ currentSection: section, cameraTarget: target, isTransitioning: true });
    // Clear transitioning flag after animation completes
    setTimeout(() => set({ isTransitioning: false }), 1500);
  },

  setTransitioning: (v) => set({ isTransitioning: v }),
}));