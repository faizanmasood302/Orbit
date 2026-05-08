import { useThemeStore } from './modules/theme';
import { useGlobeStore } from './modules/globe';

// Combined store for backward compatibility
export const useOrbitStore = () => {
  const themeStore = useThemeStore();
  const globeStore = useGlobeStore();

  return {
    currentSection: globeStore.currentSection,
    isTransitioning: globeStore.isTransitioning,
    cameraTarget: globeStore.cameraTarget,
    theme: themeStore.theme,
    setSection: globeStore.setSection,
    spinGlobeTo: globeStore.spinGlobeTo,
    toggleTheme: themeStore.toggleTheme,
    setTransitioning: globeStore.setTransitioning,
  };
};

// Export individual stores for direct use
export { useThemeStore, useGlobeStore };
