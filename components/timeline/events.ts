export interface Event {
  id: number;
  icon: string;
  title: string;
  date: string;
  time: string;
  venue: string;
}

export const events: Event[] = [
  {
    id: 1,
    icon: "🌸",
    title: "Mayra Ki Bahar",
    date: "2 July 2026",
    time: "12:15 PM onwards",
    venue: "Imperial Hall, Agra Exotica, Surat",
  },
  {
    id: 2,
    icon: "🪔",
    title: "Tilak",
    date: "2 July 2026",
    time: "6:00 PM onwards",
    venue: "Imperial Hall, Agra Exotica, Surat",
  },
  {
    id: 3,
    icon: "🎶",
    title: "Sangeet Night",
    date: "2 July 2026",
    time: "7:15 PM onwards",
    venue: "Imperial Hall, Agra Exotica, Surat",
  },
  {
    id: 4,
    icon: "💛",
    title: "Haldi & Carnival",
    date: "3 July 2026",
    time: "12:00 PM onwards",
    venue: "Crystal Hall, Agra Exotica, Surat",
  },
  {
    id: 5,
    icon: "🎉",
    title: "Reception",
    date: "3 July 2026",
    time: "8:00 PM onwards",
    venue: "Crystal Hall, Agra Exotica, Surat",
  },
];