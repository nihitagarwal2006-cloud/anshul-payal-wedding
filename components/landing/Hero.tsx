"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import GuestModal from "@/components/ui/GuestModal";
import MusicPlayer, { playWeddingMusic } from "@/components/MusicPlayer";

import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import EnterButton from "./EnterButton";
import Petals from "./Petals";
import Particles from "./Particles";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);
  const [guestName, setGuestName] = useState("");

  function handleContinue(name: string, team: string) {
    console.log({
      name,
      team,
    });

    setGuestName(name);
    setOpenModal(false);
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Music */}
      <MusicPlayer />

      <div className="absolute inset-0 bg-black/35" />

      <Particles />
      <Petals />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center px-6 -mt-20"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-yellow-400/10 blur-[140px] -z-10" />

        {guestName && (
          <div className="mb-6 inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-yellow-200 backdrop-blur">
            🌸 Welcome, <b>{guestName}</b>
          </div>
        )}

        <HeroTitle />

        <div className="mt-6">
          <HeroSubtitle />
        </div>

        <div className="mt-10">
          <EnterButton
            onClick={() => {
              playWeddingMusic();
              setOpenModal(true);
            }}
          />
        </div>
      </motion.div>

      <ScrollIndicator />

      <GuestModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onContinue={handleContinue}
      />
    </section>
  );
}