"use client";

import { motion } from "framer-motion";

interface BlessingCardProps {
  name: string;
  message: string;
}

export default function BlessingCard({
  name,
  message,
}: BlessingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className="
        rounded-3xl
        border
        border-yellow-500/20
        bg-white/5
        backdrop-blur-xl
        p-6
        shadow-lg
      "
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500/20 text-3xl">
          ❤️
        </div>

        <div>
          <h3 className="text-xl font-bold text-yellow-300">
            {name}
          </h3>

          <p className="text-sm text-gray-400">
            Wedding Guest
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-yellow-500/20 pt-5">
        <p className="whitespace-pre-wrap leading-8 text-gray-200">
          "{message}"
        </p>
      </div>
    </motion.div>
  );
}