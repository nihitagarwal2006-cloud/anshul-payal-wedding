"use client";

import { useState } from "react";
import ThankYouModal from "./ThankYouModal";

interface Props {
  onBack: () => void;
}

export default function BlessingWall({ onBack }: Props) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleSubmit() {
    if (!name.trim() || !message.trim()) return;

    // Firebase will be added later

    setShowModal(true);

    setName("");
    setMessage("");
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#120b06] to-black px-6 py-20">

      <div className="mx-auto max-w-2xl">

        <button
          onClick={onBack}
          className="mb-8 rounded-xl border border-yellow-500/30 px-5 py-2 text-yellow-300 hover:bg-yellow-500/10"
        >
          ← Back To Lobby
        </button>

        <div className="rounded-3xl border border-yellow-500/30 bg-white/5 backdrop-blur-xl p-10">

          <div className="text-center">

            <div className="text-6xl">
              ❤️
            </div>

            <h1 className="mt-5 text-5xl font-bold text-yellow-300">
              Blessing Wall
            </h1>

            <p className="mt-4 text-gray-300">
              Leave your heartfelt wishes for the beautiful couple.
            </p>

          </div>

          <div className="mt-10">

            <label className="text-yellow-200">
              Your Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-3 w-full rounded-xl border border-yellow-500/30 bg-black/20 px-4 py-3 text-white outline-none focus:border-yellow-400"
            />

          </div>

          <div className="mt-8">

            <label className="text-yellow-200">
              Your Blessing
            </label>

            <textarea
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your blessings..."
              className="mt-3 w-full rounded-xl border border-yellow-500/30 bg-black/20 px-4 py-4 text-white outline-none resize-none focus:border-yellow-400"
            />

          </div>

          <button
            onClick={handleSubmit}
            disabled={!name.trim() || !message.trim()}
            className="mt-10 w-full rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-300 py-4 text-lg font-bold text-black transition hover:scale-105 disabled:opacity-40"
          >
            ❤️ Send Blessing
          </button>

        </div>

      </div>

      {showModal && (
        <ThankYouModal
          onClose={() => setShowModal(false)}
          onBack={onBack}
        />
      )}

    </section>
  );
}