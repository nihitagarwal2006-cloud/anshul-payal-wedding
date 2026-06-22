"use client";

import { events } from "./events";
import TimelineCard from "./TimelineCard";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <section
      id="events"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="uppercase tracking-[8px] text-yellow-300 text-sm">
          Celebrate With Us
        </p>

        <h2 className="mt-4 text-5xl md:text-6xl font-bold text-yellow-300">
          Wedding Events
        </h2>

        <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

        <p className="mt-6 max-w-2xl mx-auto text-gray-300">
          Every ceremony is a beautiful chapter in our celebration.
          We can't wait to celebrate each special moment with you.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="mt-20 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <TimelineCard
            key={event.id}
            icon={event.icon}
            title={event.title}
            date={event.date}
            time={event.time}
            venue={event.venue}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}