"use client";

import { motion } from "framer-motion";

interface ThankYouModalProps {
  onClose: () => void;
  onBack: () => void;
}

export default function ThankYouModal({
  onClose,
  onBack,
}: ThankYouModalProps) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md px-6">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.8,
        }}
        transition={{
          duration: 0.35,
        }}
        className="w-full max-w-md rounded-3xl border border-yellow-500/30 bg-[#1b1208] p-8 text-center shadow-[0_0_40px_rgba(255,215,0,0.2)]"
      >
        <div className="text-7xl">❤️</div>

        <h2 className="mt-5 text-4xl font-bold text-yellow-300">
          Thank You!
        </h2>

        <p className="mt-5 text-lg leading-8 text-gray-300">
          Your blessing has been received.
          <br />
          The couple truly appreciates your love and wishes.
        </p>

        <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">
          <p className="text-yellow-200">
            ✨ Your kind words will become a cherished memory for the bride and groom.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <button
            type="button"
            onClick={onClose}
            className="
              rounded-xl
              bg-gradient-to-r
              from-yellow-500
              to-yellow-300
              py-3
              text-lg
              font-bold
              text-black
              transition
              hover:scale-105
            "
          >
            ❤️ Write Another Blessing
          </button>

          <button
            type="button"
            onClick={onBack}
            className="
              rounded-xl
              border
              border-yellow-500/30
              py-3
              text-lg
              font-semibold
              text-yellow-300
              transition
              hover:bg-yellow-500/10
            "
          >
            🏠 Back To Lobby
          </button>
        </div>
      </motion.div>
    </div>
  );
}