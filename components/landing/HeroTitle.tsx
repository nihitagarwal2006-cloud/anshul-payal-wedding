import { SITE } from "@/data/site";

export default function HeroTitle() {
  return (
    <>
      <p className="script text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-yellow-300">
        Welcome To The Wedding Of
      </p>

      <h1
        className="
          mt-6
          font-bold
          text-white
          leading-tight
          drop-shadow-[0_5px_20px_rgba(0,0,0,0.5)]
          text-5xl
          sm:text-6xl
          md:text-7xl
          lg:text-[120px]
        "
      >
        <span className="block md:inline">
          {SITE.couple.groom}
        </span>

        <span className="block md:inline text-yellow-400 md:mx-4">
          ✦
        </span>

        <span className="block md:inline">
          {SITE.couple.bride}
        </span>
      </h1>
    </>
  );
}