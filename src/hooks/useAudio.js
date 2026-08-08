import { useState, useEffect } from 'react';
import { soundFX } from '../utils/audio';

export function useAudio() {
  const [isMuted, setIsMuted] = useState(() => soundFX.getIsMuted());

  useEffect(() => {
    const unsubscribe = soundFX.subscribe((muted) => {
      setIsMuted(muted);
    });
    return unsubscribe;
  }, []);

  const toggleMute = () => {
    const newMuted = soundFX.toggleMute();
    if (!newMuted) {
      soundFX.playClick();
    }
    return newMuted;
  };

  const setMuted = (muted) => {
    return soundFX.setMuted(muted);
  };

  return {
    isMuted,
    toggleMute,
    setMuted,
    playClick: () => soundFX.playClick(),
    playKeypress: () => soundFX.playKeypress(),
    playModalOpen: () => soundFX.playModalOpen(),
    playModalClose: () => soundFX.playModalClose(),
    playSuccess: () => soundFX.playSuccess(),
    playHover: () => soundFX.playHover(),
    playError: () => soundFX.playError(),
  };
}

export default useAudio;
