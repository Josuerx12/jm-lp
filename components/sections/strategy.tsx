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
    <section className="min-h-screen relative flex flex-col items-center justify-center text-center">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl max-w-3xl sm:text-3xl md:text-4xl font-bold text-white text-center">
          Política não se vence com intenção. <br className="hidden sm:block" />
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

      <div className="grid w-full grid-cols-1 gap-4 mt-10 sm:w-auto sm:grid-cols-2 sm:gap-6">
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

      <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-around sm:gap-20 sm:items-center">
        <p className="font-semibold sm:text-lg md:text-xl text-center sm:text-start">
          E no final, voto não vem.
        </p>
        <p className="max-w-sm sm:max-w-xs sm:text-lg md:text-xl text-center sm:text-start">
          Estratégia política não é opcional.
          <br />É o que separa quem participa de quem disputa de verdade.
        </p>
      </div>
      <div className="absolute bottom-10 -right-72 hidden lg:block">
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
