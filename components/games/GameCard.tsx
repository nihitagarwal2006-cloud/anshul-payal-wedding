"use client";

import { motion } from "framer-motion";

interface GameCardProps {
  emoji: string;
  title: string;
  description: string;
  onClick: () => void;
}

export default function GameCard({
  emoji,
  title,
  description,
  onClick,
}: GameCardProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        y: -6,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={onClick}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-yellow-500/30
      bg-white/5
      backdrop-blur-xl
      p-8
      text-left
      transition-all
      duration-300
      hover:border-yellow-300
      hover:shadow-[0_0_35px_rgba(255,215,0,0.25)]
      "
    >
      <div className="text-6xl">{emoji}</div>

      <h3 className="mt-5 text-2xl font-bold text-yellow-300">
        {title}
      </h3>

      <p className="mt-3 text-gray-300">
        {description}
      </p>

      <div className="mt-8 flex items-center text-yellow-300 font-semibold">
        Play Now →
      </div>

      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition
        bg-gradient-to-r
        from-transparent
        via-yellow-300/5
        to-transparent
        "
      />
    </motion.button>
  );
}