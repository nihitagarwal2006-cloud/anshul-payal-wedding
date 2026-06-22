"use client";

import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;

      audioRef.current.play().catch(() => {
        console.log("Autoplay was blocked by the browser.");
      });
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/wedding.mp3"
      loop
    />
  );
}