"use client";

import { useEffect, useState } from "react";
import Flower from "./Flower";
import FlowerResultModal from "./FlowerResultModal";
import PlayerDetailsModal from "./PlayerDetailsModal";
import { saveFlowerScore } from "@/lib/playerService";

interface Props {
  onBack: () => void;
}

interface FlowerType {
  id: number;
  x: number;
  speed: number;
  emoji: string;
}

const FLOWERS = ["🌸", "🌺", "🌼", "🌷", "💮", "🏵️"];

export default function CatchFlowers({ onBack }: Props) {
  const GAME_TIME = 30;

  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);

  // Start after player enters details
  const [playing, setPlaying] = useState(false);

  const [showPlayerModal, setShowPlayerModal] = useState(true);

  const [playerName, setPlayerName] = useState("");
  const [playerTeam, setPlayerTeam] = useState<
    "Ladke Wale" | "Ladki Wale"
  >("Ladke Wale");

  const [flowers, setFlowers] = useState<FlowerType[]>([]);

  // Countdown
  useEffect(() => {
    if (!playing) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setPlaying(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [playing]);

  // Spawn flowers
  useEffect(() => {
    if (!playing) return;

    const spawn = setInterval(() => {
      setFlowers((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x: Math.random() * 90,
          speed: 4 + Math.random() * 3,
          emoji:
            FLOWERS[
              Math.floor(Math.random() * FLOWERS.length)
            ],
        },
      ]);
    }, 700);

    return () => clearInterval(spawn);
  }, [playing]);

  // Save score when game ends
  useEffect(() => {
    async function saveScore() {
      if (!playing && timeLeft === 0) {
        try {
          await saveFlowerScore(
            playerName,
            playerTeam,
            score
          );
        } catch (err) {
          console.error("Failed to save score:", err);
        }
      }
    }

    saveScore();
  }, [playing, timeLeft, score, playerName, playerTeam]);

  function catchFlower(id: number) {
    if (!playing) return;

    setScore((prev) => prev + 5);

    setFlowers((prev) =>
      prev.filter((flower) => flower.id !== id)
    );
  }

  function removeFlower(id: number) {
    setFlowers((prev) =>
      prev.filter((flower) => flower.id !== id)
    );
  }

  function restartGame() {
    setScore(0);
    setFlowers([]);
    setTimeLeft(GAME_TIME);
    setPlaying(true);
  }

  function handleStart(
    name: string,
    team: "Ladke Wale" | "Ladki Wale"
  ) {
    setPlayerName(name);
    setPlayerTeam(team);

    setShowPlayerModal(false);

    setScore(0);
    setFlowers([]);
    setTimeLeft(GAME_TIME);

    setPlaying(true);
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#140d08] to-black">

      {showPlayerModal && (
        <PlayerDetailsModal onStart={handleStart} />
      )}

      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6">

        <button
          onClick={onBack}
          className="rounded-xl border border-yellow-500/30 px-5 py-2 text-yellow-300"
        >
          ← Lobby
        </button>

        <h1 className="text-4xl font-bold text-yellow-300">
          🌸 Catch Flowers
        </h1>

        <div className="rounded-xl border border-yellow-500/30 px-5 py-2 text-yellow-300">
          ⏱ {timeLeft}s
        </div>

      </div>

      <div className="text-center text-3xl font-bold text-white">
        Score : {score}
      </div>

      <div className="relative h-[80vh] overflow-hidden">

        {flowers.map((flower) => (
          <Flower
            key={flower.id}
            id={flower.id}
            x={flower.x}
            speed={flower.speed}
            emoji={flower.emoji}
            onCatch={catchFlower}
            onMiss={removeFlower}
          />
        ))}

      </div>

      {!playing && !showPlayerModal && (
        <FlowerResultModal
          score={score}
          onRestart={restartGame}
          onBack={onBack}
        />
      )}

    </section>
  );
}