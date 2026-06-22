"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  onStart: (
    name: string,
    team: "Ladke Wale" | "Ladki Wale"
  ) => void;
}

export default function PlayerDetailsModal({
  onStart,
}: Props) {
  const [name, setName] = useState("");
  const [team, setTeam] = useState<
    "Ladke Wale" | "Ladki Wale" | ""
  >("");

  function handleStart() {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!team) {
      alert("Please select your team.");
      return;
    }

    onStart(name.trim(), team);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md rounded-3xl border border-yellow-500/30 bg-[#1a120c] p-8 shadow-2xl"
      >

        <div className="text-center">

          <div className="text-6xl">
            🎮
          </div>

          <h2 className="mt-4 text-3xl font-bold text-yellow-300">
            Before You Play
          </h2>

          <p className="mt-2 text-gray-300">
            Enter your details to join the leaderboard.
          </p>

        </div>

        <div className="mt-8">

          <label className="text-yellow-300 font-semibold">
            Your Name
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="mt-2 w-full rounded-xl border border-yellow-500/30 bg-black/20 px-4 py-3 text-white outline-none focus:border-yellow-400"
          />

        </div>

        <div className="mt-8">

          <label className="text-yellow-300 font-semibold">
            Select Your Team
          </label>

          <div className="mt-4 grid grid-cols-2 gap-4">

            <button
              onClick={() => setTeam("Ladke Wale")}
              className={`rounded-2xl border p-5 transition ${
                team === "Ladke Wale"
                  ? "border-yellow-400 bg-yellow-500/20"
                  : "border-white/20 bg-white/5"
              }`}
            >
              <div className="text-4xl">🤵</div>

              <p className="mt-2 font-bold text-white">
                Ladke Wale
              </p>
            </button>

            <button
              onClick={() => setTeam("Ladki Wale")}
              className={`rounded-2xl border p-5 transition ${
                team === "Ladki Wale"
                  ? "border-yellow-400 bg-yellow-500/20"
                  : "border-white/20 bg-white/5"
              }`}
            >
              <div className="text-4xl">👰</div>

              <p className="mt-2 font-bold text-white">
                Ladki Wale
              </p>
            </button>

          </div>

        </div>

        <button
          onClick={handleStart}
          className="mt-8 w-full rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-300 py-4 text-lg font-bold text-black transition hover:scale-[1.02]"
        >
          🎉 Start Playing
        </button>

      </motion.div>

    </div>
  );
}