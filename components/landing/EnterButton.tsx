"use client";

import { motion } from "framer-motion";

interface EnterButtonProps {
  onClick?: () => void;
}

export default function EnterButton({
  onClick,
}: EnterButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="
      shine
      group
      relative
      overflow-hidden
      rounded-full
      px-10
      py-4
      font-semibold
      text-lg
      text-black
      bg-gradient-to-r
      from-yellow-300
      via-yellow-400
      to-yellow-500
      shadow-[0_0_30px_rgba(255,215,0,0.45)]
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_0_45px_rgba(255,215,0,0.75)]
      "
    >
      <span
        className="
        absolute
        inset-0
        -translate-x-full
        group-hover:translate-x-full
        transition-transform
        duration-1000
        bg-gradient-to-r
        from-transparent
        via-white/40
        to-transparent
        "
      />

      <span className="relative z-10 tracking-wide uppercase">
        ✨ Enter Celebration
      </span>
    </motion.button>
  );
}