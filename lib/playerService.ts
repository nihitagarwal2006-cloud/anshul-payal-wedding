import { db } from "./firebase";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";

export interface Player {
  name: string;
  team: "Ladke Wale" | "Ladki Wale";
  ringScore: number;
  flowerScore: number;
}

function playerId(name: string, team: string) {
  return `${name.trim().toLowerCase()}-${team
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")}`;
}

export async function saveRingScore(
  name: string,
  team: "Ladke Wale" | "Ladki Wale",
  score: number
) {
  const id = playerId(name, team);
  const ref = doc(db, "players", id);

  const snap = await getDoc(ref);

  if (snap.exists()) {
    const data = snap.data() as Player;

    await setDoc(ref, {
      ...data,
      ringScore: Math.max(data.ringScore ?? 0, score),
    });
  } else {
    await setDoc(ref, {
      name,
      team,
      ringScore: score,
      flowerScore: 0,
    });
  }
}

export async function saveFlowerScore(
  name: string,
  team: "Ladke Wale" | "Ladki Wale",
  score: number
) {
  const id = playerId(name, team);
  const ref = doc(db, "players", id);

  const snap = await getDoc(ref);

  if (snap.exists()) {
    const data = snap.data() as Player;

    await setDoc(ref, {
      ...data,
      flowerScore: Math.max(data.flowerScore ?? 0, score),
    });
  } else {
    await setDoc(ref, {
      name,
      team,
      ringScore: 0,
      flowerScore: score,
    });
  }
}

export async function getLeaderboard() {
  const snapshot = await getDocs(collection(db, "players"));

  const players = snapshot.docs.map((doc) => {
    const data = doc.data() as Player;

    return {
      id: doc.id,
      ...data,
      totalScore:
        (data.ringScore ?? 0) +
        (data.flowerScore ?? 0),
    };
  });

  players.sort((a, b) => b.totalScore - a.totalScore);

  return players;
}
export async function getTeamScores() {
  const players = await getLeaderboard();

  let ladke = 0;
  let ladki = 0;

  players.forEach((player) => {
    if (player.team === "Ladke Wale") {
      ladke += player.totalScore;
    } else {
      ladki += player.totalScore;
    }
  });

  return {
    ladke,
    ladki,
  };
}