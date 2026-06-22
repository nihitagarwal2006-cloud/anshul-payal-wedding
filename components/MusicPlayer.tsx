"use client";

import { useEffect, useRef } from "react";

let audio: HTMLAudioElement | null = null;

export function playWeddingMusic() {
  if (!audio) return;

  audio.volume = 0.4;

  audio.play().catch((err) => {
    console.log("Music blocked:", err);
  });
}

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audio = audioRef.current;
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/assets/music/wedding.mp3"
      loop
      preload="auto"
    />
  );
}