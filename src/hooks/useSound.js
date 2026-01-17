import { useCallback } from 'react';

export default function useSound(soundPath) {
  const play = useCallback(() => {
    try {
      const audio = new Audio(soundPath);
      audio.volume = 0.5;
      audio.currentTime = 0;
      audio.play().catch(e => console.error("Audio play failed", e));
    } catch (error) {
      console.error("Audio Error", error);
    }
  }, [soundPath]);

  return play;
}