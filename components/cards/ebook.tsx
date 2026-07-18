"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useId, useState } from "react";

export type Ebook = {
  slug: string;
  title: string;
  description: string;
  idealFor: string;
  imagePath: `/images/e-books/${string}`;
  purchaseUrl: string;
};

const EbookCard = ({ ebook }: { ebook: Ebook }) => {
  const [openMoreAbout, setOpenMoreAbout] = useState(false);
  const detailsId = useId();

  const handleOpenMoreAbout = () => {
    setOpenMoreAbout((prev) => !prev);
  };

  return (
    <article
      key={ebook.slug}
      className="min-w-0 flex-[0_0_92%] pl-4 sm:flex-[0_0_52%] sm:pl-6 lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]"
    >
      <div className="flex h-full min-h-131 flex-col items-center rounded-[30px] bg-[#151515] px-5 pt-5 pb-7 sm:min-h-143 sm:px-7">
        <div className="relative w-full max-w-68 aspect-[823/1078]">
          <Image
            src={ebook.imagePath}
            alt={`Capa do e-book ${ebook.title}`}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 44vw, (max-width: 1280px) 28vw, 270px"
            className="object-contain"
          />
        </div>

        <h3 className="mt-5 max-w-64 text-center text-base leading-tight font-medium sm:text-lg">
          {ebook.title}
        </h3>

        <button
          type="button"
          onClick={handleOpenMoreAbout}
          aria-expanded={openMoreAbout}
          aria-controls={detailsId}
          className="mt-4 w-fit mx-auto inline-flex items-center gap-1.5 self-start text-xs text-white/35 transition-colors hover:text-white/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-system sm:text-sm"
        >
          <ChevronDown
            size={15}
            strokeWidth={3}
            className={`text-green-system transition-transform duration-500 ease-out motion-reduce:transition-none ${
              openMoreAbout ? "rotate-180" : ""
            }`}
          />
          {openMoreAbout ? "Ocultar detalhes" : "Clique para saber mais"}
        </button>

        <div
          id={detailsId}
          className={`grid w-full transition-[grid-template-rows,opacity,margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            openMoreAbout
              ? "mt-5 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mx-auto flex max-w-72 flex-col gap-5 pb-6 text-center text-sm leading-[1.3] text-white/65 sm:text-base">
              <p>{ebook.description}</p>
              <p>
                <strong className="font-semibold text-green-system">
                  Ideal para:
                </strong>{" "}
                {ebook.idealFor}
              </p>
            </div>
          </div>
        </div>

        <a
          href={ebook.purchaseUrl}
          className="mt-auto flex min-h-12 w-full items-center justify-center rounded-full bg-green-system px-6 py-3 text-base font-semibold text-secondary transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green-system"
        >
          Comprar Ebook
        </a>
      </div>
    </article>
  );
};

export default EbookCard;
