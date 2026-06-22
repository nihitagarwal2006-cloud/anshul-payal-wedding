"use client";

import { motion } from "framer-motion";

interface PlayerCardProps {
  rank: number;
  name: string;
  score: number;
  team: "Ladke Wale" | "Ladki Wale";
}

export default function PlayerCard({
  rank,
  name,
  score,
  team,
}: PlayerCardProps) {
  const medal =
    rank === 1
      ? "🥇"
      : rank === 2
      ? "🥈"
      : rank === 3
      ? "🥉"
      : `${rank}.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      whileHover={{ scale: 1.02 }}
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-yellow-500/20
        bg-white/5
        px-6
        py-5
        backdrop-blur-xl
      "
    >
      <div className="flex items-center gap-4">
        <div className="w-12 text-center text-3xl">
          {medal}
        </div>

        <div>
          <h3 className="text-lg font-bold text-yellow-300">
            {name}
          </h3>

          <p className="text-sm text-gray-400">
            {team}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-3xl font-bold text-white">
          {score}
        </p>

        <p className="text-sm text-yellow-300">
          pts
        </p>
      </div>
    </motion.div>
  );
}