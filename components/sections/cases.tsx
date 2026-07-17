"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Target } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const cases = [
  {
    initials: "TR",
    color: "#f41ba7",
    title: "Thiago Rangel — Deputado Federal | Eleições 2022",
    description:
      "Atuação estratégica na comunicação e no posicionamento político durante a campanha eleitoral de 2022, contribuindo para o fortalecimento da presença digital, construção narrativa e mobilização eleitoral. A campanha consolidou Thiago Rangel como uma das principais lideranças políticas emergentes da região, alcançando expressiva votação e forte conexão popular.",
  },
  {
    initials: "TR",
    color: "#7357ff",
    title: "Thamires Rangel — Vereadora | Eleições 2024",
    description:
      "Atuação estratégica na comunicação e no posicionamento político durante a campanha eleitoral de 2024, contribuindo para o fortalecimento da presença digital, construção narrativa e mobilização eleitoral. A campanha consolidou Thamires Rangel como uma das principais lideranças políticas emergentes da região, alcançando expressiva votação e forte conexão popular.",
  },
  {
    initials: "KC",
    color: "#ff6b35",
    title: "Kassia Carvalho — Vereadora | Eleições 2024",
    description:
      "Atuação direta na estruturação de posicionamento, comunicação e estratégia territorial durante a campanha de 2024. A construção política combinou presença digital, narrativa consistente e aproximação popular, ampliando a identificação com o eleitorado.",
  },
  {
    initials: "JM",
    color: "#168f72",
    title: "Projetos políticos — Estratégia e posicionamento",
    description:
      "Planejamento estratégico aplicado à construção de reputação, presença pública e comunicação política, conectando cenário, discurso e atuação para transformar projetos em campanhas competitivas.",
  },
];

const Cases = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi, updateButtons]);

  return (
    <section className="relative py-20 text-secondary">
      <div className="grid items-start gap-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[348px_minmax(0,1fr)] xl:gap-16">
        <div className="relative z-20">
          <span className="inline-flex min-w-24 justify-center rounded-full bg-secondary px-5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-green-system">
            CASES
          </span>

          <h2 className="mt-5 max-w-88 text-3xl leading-[1.08] font-bold sm:text-[38px]">
            Estratégia aplicada em{" "}
            <span className="bg-green-system px-1 leading-tight">
              campanhas reais
            </span>
          </h2>
          <p className="mt-6 max-w-82 text-base leading-relaxed">
            Cada campanha possui um cenário, um desafio e uma dinâmica eleitoral
            diferente.
          </p>

          <div className="mt-9 max-w-88 rounded-lg bg-[#e9e9e9] p-7 sm:p-9">
            <Target size={30} strokeWidth={2.4} aria-hidden="true" />
            <p className="mt-4 text-sm leading-relaxed">
              Ao longo da trajetória, Jônatas Manhães participou da construção
              estratégica de projetos políticos marcados por posicionamento,
              comunicação e mobilização eleitoral, atuando{" "}
              <strong>
                diretamente no fortalecimento da presença pública e da
                competitividade das campanhas.
              </strong>
            </p>
          </div>
        </div>

        <div className="min-w-0">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-4 sm:-ml-5">
              {cases.map((item) => (
                <article
                  key={item.title}
                  className="min-w-0 flex-[0_0_88%] pl-4 sm:flex-[0_0_48%] sm:pl-5 xl:flex-[0_0_35%]"
                >
                  <div className="flex h-full min-h-145 flex-col rounded-4xl bg-[#d9d9d9] p-5 sm:min-h-151 sm:rounded-[38px] sm:p-6">
                    <div className="case-pattern relative aspect-[1.08] overflow-hidden rounded-2xl bg-white"></div>

                    <h3 className="mt-6 text-lg leading-tight font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 line-clamp-8 text-[13px] leading-tight">
                      {item.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-auto flex min-h-10 items-center justify-center rounded-md bg-[#171717] px-5 py-3 text-sm text-green-system transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                    >
                      Quero acessar
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <fieldset className="mt-5 flex gap-2">
            <legend className="sr-only">Controles do carrossel</legend>
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              aria-label="Case anterior"
              className="flex size-7 items-center justify-center rounded-full bg-[#b5b5b5] text-white transition-opacity disabled:opacity-35"
            >
              <ChevronLeft size={18} strokeWidth={3} />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              aria-label="Próximo case"
              className="flex size-7 items-center justify-center rounded-full bg-[#b5b5b5] text-white transition-opacity disabled:opacity-35"
            >
              <ChevronRight size={18} strokeWidth={3} />
            </button>
          </fieldset>
        </div>
      </div>
    </section>
  );
};

export default Cases;
