import { ChevronDown } from "lucide-react";

import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Process from "@/components/sections/process";
import Results from "@/components/sections/results";
import Strategy from "@/components/sections/strategy";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-[url('/images/bg/bg1.png')] bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <div className="min-h-screen py-20 md:py-32 bg-linear-to-b from-[#060606] to-[#0B0B0B]">
        <Strategy />
      </div>
      <div className="min-h-screen bg-[url('/images/bg/bg2.png')] bg-cover bg-no-repeat bg-center">
        <About />
      </div>
      <div
        id="process"
        className="relative rounded-[32px] py-20 md:rounded-[81px] md:py-32 bg-green-system"
      >
        <a
          href="#process"
          aria-label="Ir para a seção de processo"
          className="absolute left-1/2 -top-14 z-20 -translate-x-1/2 md:-top-18"
        >
          <div className="relative flex h-20 w-36 items-start justify-center overflow-hidden md:h-24 md:w-44">
            <div className="absolute -bottom-10 h-28 w-32 rounded-t-full bg-green-system" />
            <span className="relative animate-bounce mt-7 flex h-10 w-10 z-20 items-center justify-center rounded-full bg-[#080808] text-green-system md:mt-9">
              <ChevronDown size={22} strokeWidth={3} />
            </span>
          </div>
        </a>

        <Process />
      </div>
      <Results />
    </main>
  );
}
