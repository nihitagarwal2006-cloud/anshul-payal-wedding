"use client";

import { motion } from "framer-motion";

interface TeamScoreProps {
  team: "Ladke Wale" | "Ladki Wale";
  score: number;
}

export default function TeamScore({
  team,
  score,
}: TeamScoreProps) {
  const isLadke = team === "Ladke Wale";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-yellow-500/20
        bg-white/5
        backdrop-blur-xl
        p-8
        shadow-lg
      "
    >
      <div className="text-6xl">
        {isLadke ? "🤵" : "👰"}
      </div>

      <h2 className="mt-4 text-3xl font-bold text-yellow-300">
        {team}
      </h2>

      <p className="mt-6 text-5xl font-extrabold text-white">
        {score}
      </p>

      <p className="mt-2 text-yellow-300 uppercase tracking-[4px] text-sm">
        Team Points
      </p>
    </motion.div>
  );
}