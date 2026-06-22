export interface PlayerScore {
  id: number;
  name: string;
  team: "Ladke Wale" | "Ladki Wale";
  ringScore: number;
  flowerScore: number;
}

export let leaderboardData: PlayerScore[] = [
  {
    id: 1,
    name: "Rahul",
    team: "Ladke Wale",
    ringScore: 18,
    flowerScore: 20,
  },
  {
    id: 2,
    name: "Priya",
    team: "Ladki Wale",
    ringScore: 16,
    flowerScore: 17,
  },
  {
    id: 3,
    name: "Amit",
    team: "Ladke Wale",
    ringScore: 14,
    flowerScore: 15,
  },
];

export function getLeaderboard() {
  return [...leaderboardData]
    .map((player) => ({
      ...player,
      totalScore: player.ringScore + player.flowerScore,
    }))
    .sort((a, b) => b.totalScore - a.totalScore);
}

export function updateRingScore(
  name: string,
  team: "Ladke Wale" | "Ladki Wale",
  score: number
) {
  const player = leaderboardData.find((p) => p.name === name);

  if (player) {
    player.ringScore = Math.max(player.ringScore, score);
  } else {
    leaderboardData.push({
      id: Date.now(),
      name,
      team,
      ringScore: score,
      flowerScore: 0,
    });
  }
}

export function updateFlowerScore(
  name: string,
  team: "Ladke Wale" | "Ladki Wale",
  score: number
) {
  const player = leaderboardData.find((p) => p.name === name);

  if (player) {
    player.flowerScore = Math.max(player.flowerScore, score);
  } else {
    leaderboardData.push({
      id: Date.now(),
      name,
      team,
      ringScore: 0,
      flowerScore: score,
    });
  }
}

export function getTeamScores() {
  let ladke = 0;
  let ladki = 0;

  leaderboardData.forEach((player) => {
    const total = player.ringScore + player.flowerScore;

    if (player.team === "Ladke Wale") {
      ladke += total;
    } else {
      ladki += total;
    }
  });

  return {
    ladke,
    ladki,
  };
}