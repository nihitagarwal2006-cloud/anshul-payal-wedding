import { SITE } from "@/data/site";

export default function HeroTitle() {
  return (
    <>
      <p className="script text-5xl md:text-6xl text-yellow-300">
        Welcome To The Wedding Of
      </p>

      <h1
        className="
        mt-8
        font-bold
        leading-none
        text-white
        text-6xl
        md:text-8xl
        lg:text-[120px]
        drop-shadow-[0_5px_20px_rgba(0,0,0,0.5)]
        "
      >
        {SITE.couple.groom}

        <span className="mx-5 text-yellow-400">
          ✦
        </span>

        {SITE.couple.bride}
      </h1>
    </>
  );
}