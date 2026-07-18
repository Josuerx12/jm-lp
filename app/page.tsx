import { ChevronDown } from "lucide-react";
import Image from "next/image";

import About from "@/components/sections/about";
import Articles from "@/components/sections/articles";
import Cases from "@/components/sections/cases";
import Diagnosis from "@/components/sections/diagnosis";
import Ebooks from "@/components/sections/ebooks";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Process from "@/components/sections/process";
import Results from "@/components/sections/results";
import Strategy from "@/components/sections/strategy";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-[url('/images/bg/bg1-mobile.png')] lg:bg-[url('/images/bg/bg1.png')] bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <div className="min-h-screen py-20 md:py-32 bg-linear-to-b from-[#060606] to-[#0B0B0B]">
        <Strategy />
      </div>
      <div className="min-h-screen bg-[url('/images/bg/bg-2-3-mobile.png')] lg:bg-[url('/images/bg/bg2.png')] bg-cover bg-no-repeat bg-center">
        <About />
      </div>
      <div
        id="process"
        className="relative rounded-4xl py-20 md:rounded-[81px] md:py-32 bg-green-system"
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
      <div
        id="cases"
        className="relative overflow-hidden rounded-4xl bg-[#f4f4f4]  md:rounded-[81px] md:py-28"
      >
        <Cases />
        <Image
          src="/images/elements/peca.png"
          alt="Peça de xadrez"
          width={394}
          height={703}
          className="pointer-events-none absolute -bottom-20 -left-24 z-10 hidden h-auto w-72 rotate-20 lg:block"
        />
      </div>
      <div
        id="ebooks"
        className="bg-[radial-gradient(circle_at_50%_30%,#111_0%,#080808_48%,#060606_100%)]"
      >
        <Ebooks />
      </div>
      <div
        id="diagnosis"
        className="bg-[#071008] bg-[url('/images/bg/bg3.png')] bg-cover bg-[position:30%_center] bg-no-repeat lg:bg-[length:1920px_1546px] lg:bg-center"
      >
        <Diagnosis />
      </div>
      <div id="articles" className="bg-[#f4f4f4]">
        <Articles />
      </div>
      <Footer />
    </main>
  );
}
