"use client";

import { motion } from "framer-motion";

interface FlowerProps {
  id: number;
  x: number;
  speed: number;
  emoji: string;
  onCatch: (id: number) => void;
  onMiss: (id: number) => void;
}

export default function Flower({
  id,
  x,
  speed,
  emoji,
  onCatch,
  onMiss,
}: FlowerProps) {
  return (
    <motion.button
      type="button"
      initial={{
        y: -120,
        opacity: 0,
      }}
      animate={{
        y: "85vh",
        opacity: 1,
      }}
      transition={{
        duration: speed,
        ease: "linear",
      }}
      onAnimationComplete={() => onMiss(id)}
      onClick={() => onCatch(id)}
      style={{
        position: "absolute",
        left: `${x}%`,
        top: 0,
        transform: "translateX(-50%)",
      }}
      whileTap={{
        scale: 0.8,
      }}
      whileHover={{
        scale: 1.15,
      }}
      className="select-none"
    >
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-pink-400/10
          backdrop-blur-sm
          shadow-[0_0_20px_rgba(255,192,203,0.35)]
        "
      >
        <span className="text-5xl">
          {emoji}
        </span>
      </div>
    </motion.button>
  );
}