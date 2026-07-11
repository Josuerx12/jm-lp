import { X } from "lucide-react";
import Image from "next/image";

import Button from "../ui/button";

const strategies = [
  "Comunicação genérica",
  "Posicionamento confuso",
  "Ausência de narrativa",
  "Baixa conexão com o eleitor",
  "Mobilização inexistente",
];

const Strategy = () => {
  return (
    <section className="min-h-screen relative flex flex-col items-center text-center">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-xl max-w-3xl sm:text-3xl md:text-4xl font-bold text-white text-center">
          Política não se vence com intenção. <br />
          <span className="text-(--color-green)">Se vence com estrutura.</span>
        </h2>
        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-white">
          A maioria dos projetos políticos não fracassa por falta de vontade.
          Fracassa por falta de direção.
        </p>
        <p className="max-w-2xl text-md sm:text-lg md:text-xl text-white">
          Sem estratégia, o que acontece é previsível:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2">
        {strategies.map((strategy, index) => {
          const isLastOddItem =
            index === strategies.length - 1 && strategies.length % 2 !== 0;

          return (
            <Button
              variant="secondary"
              key={strategy}
              className={
                isLastOddItem
                  ? "sm:col-span-2 sm:justify-self-center sm:w-[calc(50%-0.75rem)]"
                  : ""
              }
            >
              {strategy}
            </Button>
          );
        })}
      </div>

      <div className="rounded-full text-zinc-950 bg-red-500 w-10 h-10 flex items-center justify-center my-10">
        <X />
      </div>

      <div className="flex justify-around gap-20 items-center">
        <p className="font-semibold sm:text-lg md:text-xl text-start">
          E no final, voto não vem.
        </p>
        <p className="max-w-xs sm:text-lg md:text-xl text-start">
          Estratégia política não é opcional.
          <br />É o que separa quem participa de quem disputa de verdade.
        </p>
      </div>
      <div className="absolute bottom-10 -right-80">
        <Image
          src="/images/elements/peca.png"
          alt="peça de xadrez"
          width={394}
          height={703}
          loading="eager"
          className="z-40 pointer-events-none blur-[4px]"
        />
      </div>
    </section>
  );
};

export default Strategy;
