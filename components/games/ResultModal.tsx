"use client";

import { motion } from "framer-motion";

interface ResultModalProps {
  score: number;
  onRestart: () => void;
  onBack: () => void;
}

export default function ResultModal({
  score,
  onRestart,
  onBack,
}: ResultModalProps) {
  let message = "";

  if (score >= 250) {
    message = "👑 Royal Champion!";
  } else if (score >= 180) {
    message = "🎉 Amazing Performance!";
  } else if (score >= 120) {
    message = "👏 Great Job!";
  } else if (score >= 60) {
    message = "🌸 Nice Try!";
  } else {
    message = "💍 Better Luck Next Time!";
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md px-6">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-yellow-500/30
        bg-[#1b1208]
        p-8
        text-center
        shadow-[0_0_45px_rgba(255,215,0,0.2)]
        "
      >
        <div className="text-6xl">
          🏆
        </div>

        <h2 className="mt-5 text-4xl font-bold text-yellow-300">
          Time's Up!
        </h2>

        <p className="mt-4 text-xl text-gray-300">
          {message}
        </p>

        <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">
          <p className="text-gray-400">
            Final Score
          </p>

          <h1 className="mt-2 text-6xl font-bold text-yellow-300">
            {score}
          </h1>

          <p className="mt-3 text-gray-300">
            {Math.floor(score / 10)} Rings Found 💍
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <button
            onClick={onRestart}
            className="
            rounded-xl
            bg-gradient-to-r
            from-yellow-500
            to-yellow-300
            py-3
            text-lg
            font-bold
            text-black
            transition
            hover:scale-105
            "
          >
            🔄 Play Again
          </button>

          <button
            onClick={onBack}
            className="
            rounded-xl
            border
            border-yellow-500/30
            py-3
            text-lg
            font-semibold
            text-yellow-300
            transition
            hover:bg-yellow-500/10
            "
          >
            🏠 Back To Lobby
          </button>
        </div>
      </motion.div>
    </div>
  );
}