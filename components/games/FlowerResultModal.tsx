"use client";

import { motion } from "framer-motion";

interface FlowerResultModalProps {
  score: number;
  onRestart: () => void;
  onBack: () => void;
}

export default function FlowerResultModal({
  score,
  onRestart,
  onBack,
}: FlowerResultModalProps) {
  let message = "";

  if (score >= 200) {
    message = "👑 Royal Gardener!";
  } else if (score >= 150) {
    message = "🌸 Flower Master!";
  } else if (score >= 100) {
    message = "💐 Great Catch!";
  } else if (score >= 50) {
    message = "🌼 Nice Try!";
  } else {
    message = "🌷 Keep Practicing!";
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-md rounded-3xl border border-pink-400/30 bg-[#1b1208] p-8 text-center shadow-[0_0_40px_rgba(255,192,203,0.25)]"
      >
        <div className="text-6xl">🌸</div>

        <h2 className="mt-5 text-4xl font-bold text-pink-300">
          Time's Up!
        </h2>

        <p className="mt-4 text-xl text-gray-300">
          {message}
        </p>

        <div className="mt-8 rounded-2xl border border-pink-400/20 bg-pink-500/10 p-5">
          <p className="text-gray-400">
            Final Score
          </p>

          <h1 className="mt-2 text-6xl font-bold text-pink-300">
            {score}
          </h1>

          <p className="mt-3 text-gray-300">
            {Math.floor(score / 5)} Flowers Collected 🌸
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <button
            type="button"
            onClick={onRestart}
            className="rounded-xl bg-gradient-to-r from-pink-500 to-pink-300 py-3 text-lg font-bold text-black transition hover:scale-105"
          >
            🔄 Play Again
          </button>

          <button
            type="button"
            onClick={onBack}
            className="rounded-xl border border-pink-400/30 py-3 text-lg font-semibold text-pink-300 transition hover:bg-pink-500/10"
          >
            🏠 Back To Lobby
          </button>
        </div>
      </motion.div>
    </div>
  );
}