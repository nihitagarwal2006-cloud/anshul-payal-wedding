"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GuestModalProps {
  open: boolean;
  onClose: () => void;
  onContinue: (name: string, team: string) => void;
}

export default function GuestModal({
  open,
  onClose,
  onContinue,
}: GuestModalProps) {
  const [name, setName] = useState("");
  const [team, setTeam] = useState("Ladke Wale");

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-md rounded-3xl border border-yellow-400/30 bg-[#1b1208]/95 p-8 shadow-[0_0_40px_rgba(255,215,0,0.15)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 text-2xl text-yellow-300 hover:text-white transition"
            >
              ✕
            </button>

            {/* Heading */}
            <h2 className="text-center text-3xl font-bold text-yellow-300">
              👑 Welcome to the Royal Celebration
            </h2>

            <p className="mt-3 text-center text-gray-300">
              Please enter your details to begin your journey.
            </p>

            {/* Name */}
            <div className="mt-8">
              <label className="text-yellow-200 font-medium">
                Your Name
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="mt-2 w-full rounded-xl border border-yellow-500/30 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-yellow-300"
              />
            </div>

            {/* Team Selection */}
            <div className="mt-8">
              <p className="mb-4 text-center text-lg font-semibold text-yellow-200">
                Choose Your Side
              </p>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setTeam("Ladke Wale")}
                  className={`rounded-2xl border p-5 transition-all duration-300 ${
                    team === "Ladke Wale"
                      ? "border-yellow-400 bg-yellow-500/20 scale-105 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                      : "border-white/20 bg-white/5 hover:border-yellow-300"
                  }`}
                >
                  <div className="text-4xl">🤵</div>

                  <h3 className="mt-3 font-bold text-white">
                    Ladke Wale
                  </h3>

                  <p className="mt-1 text-sm text-gray-300">
                    Groom's Side
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setTeam("Ladki Wale")}
                  className={`rounded-2xl border p-5 transition-all duration-300 ${
                    team === "Ladki Wale"
                      ? "border-pink-400 bg-pink-500/20 scale-105 shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                      : "border-white/20 bg-white/5 hover:border-pink-300"
                  }`}
                >
                  <div className="text-4xl">👰</div>

                  <h3 className="mt-3 font-bold text-white">
                    Ladki Wale
                  </h3>

                  <p className="mt-1 text-sm text-gray-300">
                    Bride's Side
                  </p>
                </button>
              </div>
            </div>

            {/* Continue */}
            <button
              onClick={() => onContinue(name, team)}
              disabled={!name.trim()}
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 py-3 text-lg font-bold text-black transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue →
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}