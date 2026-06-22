"use client";

import { useState } from "react";

const links = [
  "Home",
  "Events",
  "Games",
  "Leaderboard",
  "Blessings",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/25 backdrop-blur-xl border-b border-yellow-400/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-yellow-300 tracking-widest">
          A ✦ P
        </h1>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <button
              key={link}
              className="
              relative
              text-yellow-100
              hover:text-yellow-300
              transition
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-yellow-300
              after:transition-all
              hover:after:w-full
              "
            >
              {link}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-yellow-300 text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-black/80">
          {links.map((link) => (
            <button
              key={link}
              className="text-left text-yellow-100 hover:text-yellow-300"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}