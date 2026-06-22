"use client";

import { motion } from "framer-motion";

interface TimelineCardProps {
  icon: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  index: number;
}

export default function TimelineCard({
  icon,
  title,
  date,
  time,
  venue,
  index,
}: TimelineCardProps) {
  const left = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: left ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative py-6 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8"
    >
      {/* ---------------- MOBILE ---------------- */}
      <div className="md:hidden flex gap-4">
        <div className="flex flex-col items-center">
          <div className="h-4 w-4 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(255,215,0,0.8)]" />
          <div className="mt-2 h-full w-[2px] bg-gradient-to-b from-yellow-400 to-transparent" />
        </div>

        <div className="flex-1 rounded-3xl border border-yellow-500/30 bg-white/5 p-5 backdrop-blur-xl">
          <div className="text-4xl">{icon}</div>

          <h3 className="mt-3 text-xl font-bold text-yellow-300">
            {title}
          </h3>

          <p className="mt-3 text-sm text-yellow-100">
            📅 {date}
          </p>

          <p className="mt-2 text-sm text-yellow-100">
            🕒 {time}
          </p>

          <p className="mt-2 text-sm text-gray-300">
            📍 {venue}
          </p>
        </div>
      </div>

      {/* ---------------- DESKTOP ---------------- */}

      <div className={`${left ? "hidden md:block" : "hidden"}`}>
        <div className="ml-auto max-w-md rounded-3xl border border-yellow-500/30 bg-white/5 p-6 backdrop-blur-xl transition hover:scale-105 hover:border-yellow-300">
          <div className="text-5xl">{icon}</div>

          <h3 className="mt-4 text-2xl font-bold text-yellow-300">
            {title}
          </h3>

          <p className="mt-4 text-yellow-100">📅 {date}</p>
          <p className="mt-2 text-yellow-100">🕒 {time}</p>
          <p className="mt-2 text-gray-300">📍 {venue}</p>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center">
        <div className="h-5 w-5 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.7)]" />
        <div className="h-44 w-[2px] bg-gradient-to-b from-yellow-400 to-transparent" />
      </div>

      <div className={`${left ? "hidden" : "hidden md:block"}`}>
        <div className="max-w-md rounded-3xl border border-yellow-500/30 bg-white/5 p-6 backdrop-blur-xl transition hover:scale-105 hover:border-yellow-300">
          <div className="text-5xl">{icon}</div>

          <h3 className="mt-4 text-2xl font-bold text-yellow-300">
            {title}
          </h3>

          <p className="mt-4 text-yellow-100">📅 {date}</p>
          <p className="mt-2 text-yellow-100">🕒 {time}</p>
          <p className="mt-2 text-gray-300">📍 {venue}</p>
        </div>
      </div>
    </motion.div>
  );
}