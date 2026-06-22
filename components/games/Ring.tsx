"use client";

import { motion } from "framer-motion";

interface RingProps {
  x: number;
  y: number;
  onClick: () => void;
}

export default function Ring({
  x,
  y,
  onClick,
}: RingProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{
        scale: 0,
        rotate: -180,
      }}
      animate={{
        scale: [1, 1.15, 1],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        scale: {
          duration: 0.8,
          repeat: Infinity,
        },
        rotate: {
          duration: 1.5,
          repeat: Infinity,
        },
      }}
      whileTap={{
        scale: 0.8,
      }}
      className="absolute select-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="
        flex
        h-20
        w-20
        items-center
        justify-center
        rounded-full
        bg-yellow-400/10
        shadow-[0_0_35px_rgba(255,215,0,0.45)]
        backdrop-blur-sm
        transition-all
        hover:scale-110
        "
      >
        <span
          className="
          text-6xl
          drop-shadow-[0_0_12px_rgba(255,215,0,0.8)]
          "
        >
          💍
        </span>
      </div>
    </motion.button>
  );
}