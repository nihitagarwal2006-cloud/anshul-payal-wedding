"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 40 });

export default function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-yellow-300"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, -40, 40],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}