"use client";

import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    let started = false;

    const playMusic = async () => {
      if (started || !audioRef.current) return;

      started = true;

      try {
        audioRef.current.volume = 0.4;
        await audioRef.current.play();
      } catch (e) {
        started = false;
      }
    };

    window.addEventListener("pointerdown", playMusic, { once: true });

    return () => {
      window.removeEventListener("pointerdown", playMusic);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/wedding.mp3"
      loop
      preload="auto"
    />
  );
}