"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { Ebook } from "../cards/ebook";
import EbookCard from "../cards/ebook";

const ebooks: Ebook[] = [
  {
    slug: "o-jogo-comeca-antes",
    title: "Pré-campanha: O jogo começa antes",
    description:
      "Como começar a construção política antes do período eleitoral, organizar presença pública, criar reputação e preparar o terreno para uma candidatura competitiva.",
    idealFor: "pré-candidatos, assessores e lideranças em fase de preparação.",
    imagePath: "/images/e-books/o-jogo-comeca-antes.png",
    purchaseUrl: "#contact",
  },
];

const Ebooks = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    loop: false,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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
    <section className="py-20 text-white md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl leading-tight font-bold sm:text-3xl md:text-[40px]">
          Antes de contratar uma campanha,
          <br className="hidden sm:block" /> montar uma equipe ou começar a
          <br className="hidden sm:block" /> publicar,{" "}
          <span className="text-green-system">entenda o caminho.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-snug text-white/90 md:text-lg">
          A maioria dos erros políticos nasce antes da eleição começar: no
          posicionamento mal definido, na comunicação sem direção, na ausência
          de narrativa e na falta de leitura do eleitor.
        </p>
        <p className="mx-auto mt-3 max-w-lg text-base leading-snug text-white/90 md:text-lg">
          Os e-books foram criados para ajudar você a enxergar esses pontos{" "}
          <strong className="text-green-system">com mais clareza.</strong>
        </p>
      </div>

      <div className="mt-14 md:mt-20">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex -ml-4 sm:-ml-6">
            {ebooks.map((ebook) => (
              <EbookCard ebook={ebook} key={ebook.slug} />
            ))}
          </div>
        </div>

        <fieldset className="mt-8 flex justify-center gap-2">
          <legend className="sr-only">Controles do carrossel de e-books</legend>
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="E-book anterior"
            className="flex size-7 items-center justify-center rounded-full bg-white/55 text-secondary transition-opacity disabled:opacity-30"
          >
            <ChevronLeft size={18} strokeWidth={3} />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Próximo e-book"
            className="flex size-7 items-center justify-center rounded-full bg-white/55 text-secondary transition-opacity disabled:opacity-30"
          >
            <ChevronRight size={18} strokeWidth={3} />
          </button>
        </fieldset>
      </div>
    </section>
  );
};

export default Ebooks;
