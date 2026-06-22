"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TeamScore from "./TeamScore";
import PlayerCard from "./PlayerCard";

import {
  getLeaderboard,
  getTeamScores,
} from "@/lib/playerService";

interface Props {
  onBack: () => void;
}

interface Player {
  id: string;
  name: string;
  team: "Ladke Wale" | "Ladki Wale";
  ringScore: number;
  flowerScore: number;
  totalScore: number;
}

export default function Leaderboard({ onBack }: Props) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [teams, setTeams] = useState({
    ladke: 0,
    ladki: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const leaderboard = await getLeaderboard();
        const teamScores = await getTeamScores();

        setPlayers(leaderboard);
        setTeams(teamScores);
      } catch (error) {
        console.error("Failed to load leaderboard:", error);
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, []);

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#120b06] to-black">
        <div className="text-2xl font-bold text-yellow-300">
          Loading Leaderboard...
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#120b06] to-black px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <button
          onClick={onBack}
          className="mb-10 rounded-xl border border-yellow-500/30 px-5 py-2 text-yellow-300 hover:bg-yellow-500/10"
        >
          ← Back To Lobby
        </button>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="text-6xl">👑</div>

          <h1 className="mt-4 text-5xl font-bold text-yellow-300">
            Royal Leaderboard
          </h1>

          <p className="mt-4 text-gray-300">
            Wedding Games Championship
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-8 md:grid-cols-3">

          <TeamScore
            team="Ladke Wale"
            score={teams.ladke}
          />

          <div className="flex flex-col items-center justify-center">
            <div className="text-6xl">⚔️</div>

            <p className="mt-4 uppercase tracking-[6px] text-yellow-300">
              VS
            </p>
          </div>

          <TeamScore
            team="Ladki Wale"
            score={teams.ladki}
          />

        </div>

        <div className="mt-20">

          <h2 className="mb-8 text-center text-4xl font-bold text-yellow-300">
            🏆 Top Players
          </h2>

          {players.length === 0 ? (
            <div className="text-center text-xl text-gray-400">
              No players have played yet.
            </div>
          ) : (
            <div className="space-y-5">
              {players.map((player, index) => (
                <PlayerCard
                  key={player.id}
                  rank={index + 1}
                  name={player.name}
                  score={player.totalScore}
                  team={player.team}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}