import Background from "@/components/landing/Background";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Timeline from "@/components/timeline/Timeline";
import GamesSection from "@/components/games/GamesSection";
import Footer from "@/components/layout/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="relative">
      <MusicPlayer />
      <Background />

      <Navbar />

      <Hero />

      <Timeline />

      <GamesSection />

      <Footer />
    </main>
  );
}