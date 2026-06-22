"use client";

import { useEffect, useState } from "react";
import Ring from "./Ring";
import ResultModal from "./ResultModal";
import PlayerDetailsModal from "./PlayerDetailsModal";
import { saveRingScore } from "@/lib/playerService";

interface Props {
  onBack: () => void;
}

export default function FindTheRing({ onBack }: Props) {
  const GAME_TIME = 30;

  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);

  // Game starts only after entering details
  const [playing, setPlaying] = useState(false);

  const [showPlayerModal, setShowPlayerModal] = useState(true);

  const [playerName, setPlayerName] = useState("");
  const [playerTeam, setPlayerTeam] = useState<
    "Ladke Wale" | "Ladki Wale"
  >("Ladke Wale");

  const [ringPosition, setRingPosition] = useState({
    x: 50,
    y: 50,
  });

  function randomPosition() {
    const x = Math.random() * 80 + 5;
    const y = Math.random() * 70 + 10;

    setRingPosition({
      x,
      y,
    });
  }

  useEffect(() => {
    randomPosition();
  }, []);

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

  // Save score when game finishes
  useEffect(() => {
    async function saveScore() {
      if (!playing && timeLeft === 0) {
        try {
          await saveRingScore(
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

  function handleRingClick() {
    if (!playing) return;

    setScore((prev) => prev + 10);

    randomPosition();
  }

  function restartGame() {
    setScore(0);
    setTimeLeft(GAME_TIME);
    setPlaying(true);
    randomPosition();
  }

  function handleStart(
    name: string,
    team: "Ladke Wale" | "Ladki Wale"
  ) {
    setPlayerName(name);
    setPlayerTeam(team);

    setShowPlayerModal(false);

    setScore(0);
    setTimeLeft(GAME_TIME);
    randomPosition();

    setPlaying(true);
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#130d07] to-black">

      {showPlayerModal && (
        <PlayerDetailsModal onStart={handleStart} />
      )}

      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6">

        <button
          onClick={onBack}
          className="rounded-xl border border-yellow-500/30 px-5 py-2 text-yellow-300 transition hover:bg-yellow-500/20"
        >
          ← Lobby
        </button>

        <h1 className="text-4xl font-bold text-yellow-300">
          💍 Find The Rings
        </h1>

        <div className="rounded-xl border border-yellow-500/30 px-5 py-2 text-yellow-300">
          ⏱ {timeLeft}s
        </div>

      </div>

      {/* Score */}
      <div className="text-center text-3xl font-bold text-white">
        Score : {score}
      </div>

      {/* Game Area */}
      <div className="relative mt-10 h-[75vh] w-full overflow-hidden">

        {playing && (
          <Ring
            x={ringPosition.x}
            y={ringPosition.y}
            onClick={handleRingClick}
          />
        )}

      </div>

      {!playing && !showPlayerModal && (
        <ResultModal
          score={score}
          onRestart={restartGame}
          onBack={onBack}
        />
      )}

    </section>
  );
}