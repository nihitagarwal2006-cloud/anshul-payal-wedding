import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      <Image
        src="/assets/backgrounds/hero-palace1.png"
        alt="Royal Palace"
        fill
        priority
        className="object-cover animate-[zoomHero_30s_ease-in-out_infinite_alternate]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Golden Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,210,90,0.12),transparent_70%)]" />

    </div>
  );
}