import { ChevronDown } from "lucide-react";

import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Process from "@/components/sections/process";
import Strategy from "@/components/sections/strategy";
import Results from "@/components/sections/results";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-[url('/images/bg/bg1.png')] bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <div className="min-h-screen py-32 bg-linear-to-b from-[#060606] to-[#0B0B0B]">
        <Strategy />
      </div>
      <div className="min-h-screen bg-[url('/images/bg/bg2.png')] bg-cover bg-no-repeat bg-center">
        <About />
      </div>
      <div
        id="process"
        className="relative rounded-[81px] py-32 bg-green-system"
      >
        <a
          href="#process"
          aria-label="Ir para a seção de processo"
          className="absolute left-1/2 -top-18 z-20 -translate-x-1/2"
        >
          <div className="relative flex h-24 w-44 items-start justify-center overflow-hidden ">
            <div className="absolute -bottom-10 h-28 w-32 rounded-t-full bg-green-system" />
            <span className="relative animate-bounce mt-9 flex h-10 w-10 z-20 items-center justify-center rounded-full bg-[#080808] text-green-system">
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
