"use client";

import { motion } from "framer-motion";

const petals = Array.from({ length: 25 });

export default function Petals() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10">
      {petals.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-xl"
          initial={{
            y: -100,
            x: Math.random() * window.innerWidth,
            rotate: 0,
            opacity: 0.8,
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: 360,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: 12 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "linear",
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
}