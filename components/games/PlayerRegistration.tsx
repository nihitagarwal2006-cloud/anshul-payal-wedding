"use client";

import { useState } from "react";

interface Props {
  name: string;
  team: "Ladke Wale" | "Ladki Wale" | "";
  onNameChange: (name: string) => void;
  onTeamChange: (team: "Ladke Wale" | "Ladki Wale") => void;
}

export default function PlayerRegistration({
  name,
  team,
  onNameChange,
  onTeamChange,
}: Props) {
  return (
    <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl">

      <div className="text-center">
        <div className="text-5xl">🎮</div>

        <h2 className="mt-4 text-3xl font-bold text-yellow-300">
          Register To Play
        </h2>

        <p className="mt-3 text-gray-300">
          Enter your details once and enjoy all the wedding games.
        </p>
      </div>

      <div className="mt-8">
        <label className="text-yellow-300 font-semibold">
          Your Name
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Enter your name"
          className="mt-2 w-full rounded-xl border border-yellow-500/30 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
        />
      </div>

      <div className="mt-8">
        <label className="text-yellow-300 font-semibold">
          Choose Your Team
        </label>

        <div className="mt-4 grid grid-cols-2 gap-5">

          <button
            onClick={() => onTeamChange("Ladke Wale")}
            className={`rounded-2xl border p-5 transition ${
              team === "Ladke Wale"
                ? "border-yellow-400 bg-yellow-500/20"
                : "border-white/20 bg-white/5"
            }`}
          >
            <div className="text-4xl">🤵</div>

            <p className="mt-3 text-lg font-bold text-white">
              Ladke Wale
            </p>
          </button>

          <button
            onClick={() => onTeamChange("Ladki Wale")}
            className={`rounded-2xl border p-5 transition ${
              team === "Ladki Wale"
                ? "border-yellow-400 bg-yellow-500/20"
                : "border-white/20 bg-white/5"
            }`}
          >
            <div className="text-4xl">👰</div>

            <p className="mt-3 text-lg font-bold text-white">
              Ladki Wale
            </p>
          </button>

        </div>
      </div>

      {name && team && (
        <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-center">
          <p className="text-lg font-semibold text-green-300">
            ✅ Ready to Play, {name}!
          </p>
        </div>
      )}

    </div>
  );
}