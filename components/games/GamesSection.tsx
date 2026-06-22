"use client";

import { useState } from "react";

import GamesLobby from "./GamesLobby";
import FindTheRing from "./FindTheRing";
import CatchFlowers from "./CatchFlowers";
import BlessingWall from "./BlessingWall";
import Leaderboard from "../leaderboard/Leaderboard";

export default function GamesSection() {
  const [game, setGame] = useState<string | null>(null);

  switch (game) {
    case "rings":
      return (
        <FindTheRing
          onBack={() => setGame(null)}
        />
      );

    case "flowers":
      return (
        <CatchFlowers
          onBack={() => setGame(null)}
        />
      );

    case "blessing":
      return (
        <BlessingWall
          onBack={() => setGame(null)}
        />
      );

    case "leaderboard":
      return (
        <Leaderboard
          onBack={() => setGame(null)}
        />
      );

    default:
      return (
        <GamesLobby
          onPlay={(selectedGame) =>
            setGame(selectedGame)
          }
        />
      );
  }
}