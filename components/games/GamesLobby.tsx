"use client";

import { motion } from "framer-motion";
import GameCard from "./GameCard";

interface Props {
  onPlay: (game: string) => void;
}

export default function GamesLobby({ onPlay }: Props) {
  return (
    <section
      id="games"
      className="relative py-28 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="uppercase tracking-[8px] text-yellow-300 text-sm">
          Royal Arcade
        </p>

        <h2 className="mt-4 text-5xl font-bold text-yellow-300">
          Wedding Games
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-300">
          Play exciting games, earn points, and compete with your family!
        </p>
      </motion.div>

      <div className="mx-auto mt-20 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">

        <GameCard
          emoji="💍"
          title="Find The Rings"
          description="Find as many hidden rings as possible in 30 seconds."
          onClick={() => onPlay("rings")}
        />

        <GameCard
          emoji="🌸"
          title="Catch Flowers"
          description="Catch falling flowers before time runs out."
          onClick={() => onPlay("flowers")}
        />

        <GameCard
          emoji="🧠"
          title="Wedding Quiz"
          description="Coming Soon"
          onClick={() => {}}
        />

        <GameCard
          emoji="❤️"
          title="Blessing Wall"
          description="Leave your heartfelt wishes for the happy couple."
          onClick={() => onPlay("blessing")}
        />

        <GameCard
          emoji="👑"
          title="Leaderboard"
          description="See the top players and team rankings."
          onClick={() => onPlay("leaderboard")}
        />

      </div>
    </section>
  );
}