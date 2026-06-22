"use client";

import { motion } from "framer-motion";

const petals = Array.from({ length: 25 });

export default function Petals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xl text-pink-300"
          initial={{
            y: -100,
            x: Math.random() * 1000,
            rotate: 0,
            opacity: 0.8,
          }}
          animate={{
            y: 1200,
            rotate: 360,
            x: Math.random() * 1000,
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