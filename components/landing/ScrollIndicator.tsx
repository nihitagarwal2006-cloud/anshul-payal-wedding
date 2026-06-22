"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-yellow-300"
    >
      <p className="text-sm tracking-widest">
        Scroll to Explore
      </p>

      <div className="text-3xl mt-2">
        ↓
      </div>
    </motion.div>
  );
}