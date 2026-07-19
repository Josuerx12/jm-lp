import { Check } from "lucide-react";
import Image from "next/image";

import Button from "../ui/button";

const contents = [
  "Pré-campanhas",
  "Campanhas eleitorais",
  "Mandatos parlamentares",
  "Estruturação de projetos políticos",
];

const activities = [
  {
    title: "Planejamento estratégico de campanha",
    description:
      "Definição de posicionamento, públicos prioritários e direção eleitoral.",
  },
  {
    title: "Posicionamento e identidade política",
    description:
      "Clareza sobre quem você é, o que defende e como será percebido.",
  },
  {
    title: "Estratégia digital e conteúdo",
    description:
      "Planejamento da presença online com foco em construção de autoridade e conexão com o eleitor.",
  },
  {
    title: "Estruturação de pré-campanha",
    description:
      "Construção de reputação, visibilidade e base antes da disputa começar.",
  },
  {
    title: "Estratégia de comunicação política",
    description: "Organização do discurso, narrativa e presença pública.",
  },
];

const About = () => {
  return (
    <section className="relative">
      <div className="absolute -top-14 -left-64 hidden lg:block">
        <Image
          src="/images/elements/peca.png"
          alt="peça de xadrez"
          width={250}
          height={500}
          loading="eager"
          className="z-40! pointer-events-none rotate-25"
        />
      </div>

      <div className="pt-[108vw] text-center md:py-32 md:text-start lg:pt-32">
        <h2 className="mx-auto max-w-md text-2xl text-white md:mx-0 md:text-3xl lg:text-4xl">
          Quem é Jônatas Manhães
        </h2>

        <p className="mx-auto mt-3 max-w-72 text-sm leading-snug md:mx-0 md:mt-6 md:max-w-md md:text-xl md:leading-relaxed">
          Sou consultor e estrategista de marketing político, com atuação direta
          na construção de campanhas, mandatos e projetos políticos. Trabalho
          com:
        </p>

        <div className="mx-auto mt-5 grid max-w-60 grid-cols-1 gap-2 md:mx-0 md:mt-6 md:max-w-137.5 md:grid-cols-2 md:gap-4">
          {contents.map((content) => (
            <Button
              className="min-h-8! rounded-full! px-3! py-1.5! text-xs! text-(--color-green)! md:min-h-12! md:px-4! md:py-2! md:text-sm!"
              variant="secondary"
              key={content}
            >
              {content}
            </Button>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-72 text-sm leading-snug md:mx-0 md:max-w-md md:text-xl md:leading-relaxed">
          Minha atuação não se limita à comunicação. Ela envolve leitura de
          cenário, definição estratégica e construção de posicionamento
          competitivo. <br />
          Integro{" "}
          <span className="text-(--color-green)">
            comunicação digital, produção estratégica de conteúdo, articulação
            territorial e mobilização política.
          </span>
        </p>
        <p className="mx-auto mt-5 max-w-72 text-sm leading-snug md:mx-0 md:mt-6 md:max-w-md md:text-xl md:leading-relaxed">
          No pleito de 2024, atuei na estratégia de campanhas que alcançaram
          primeiro e segundo lugar em votação no mesmo município, além de
          participar da construção de uma das campanhas mais emblemáticas do
          país, responsável pela eleição da vereadora mais jovem do Brasil.
        </p>
        <p className="mx-auto mt-5 max-w-72 text-sm leading-snug md:mx-0 md:mt-6 md:max-w-lg md:text-xl md:leading-relaxed">
          Meu trabalho é orientado por uma premissa simples: <br />{" "}
          <b>sem estratégia, não existe campanha competitiva.</b>
        </p>
      </div>
      <hr className="my-10 hidden md:block md:my-16" />

      <div className="mt-16 flex flex-col items-center gap-2.5 md:mt-0 md:items-stretch md:gap-6 lg:flex-row lg:items-start lg:gap-10">
        <div className="relative flex w-[72%] items-center justify-center rounded border border-[#1C1C1C] bg-linear-to-r from-[#171717] to-[#080808] p-4 md:w-full md:p-10 lg:min-h-125 lg:max-w-md">
          <div className="absolute -top-2.5 left-5 h-5 w-16 rounded bg-(--color-green) shadow-[0_0_2px_var(--color-green),0_0_8px_var(--color-green),0_0_20px_var(--color-green)] md:-top-4 md:left-10 md:h-9 md:w-28" />
          <div className="flex items-start h-full gap-4">
            <div className="flex flex-col gap-2 md:gap-4">
              <Image
                src="/images/elements/torre.png"
                alt="Torre"
                width={41}
                height={41}
                className="size-6 md:size-10"
              />
              <p className="text-sm leading-tight font-semibold text-(--color-green) md:text-xl lg:text-2xl">
                Consultoria em estratégia política e eleitoral
              </p>

              <p className="text-xs leading-snug md:text-lg md:leading-normal lg:text-xl">
                Atuo diretamente na estruturação estratégica de projetos
                políticos, organizando comunicação, posicionamento e atuação
                eleitoral.
              </p>
            </div>
          </div>
        </div>

        <div className="grid w-[72%] grid-cols-1 gap-2.5 pb-12 md:w-full md:grid-cols-2 md:gap-6 md:pb-32">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="relative flex items-center justify-center rounded border border-[#1C1C1C] bg-linear-to-r from-[#171717] to-[#080808] p-3.5 md:p-10"
            >
              <div className="flex items-start h-full gap-4">
                <div className="grid grid-cols-[14px_1fr] gap-x-2 gap-y-1 md:flex md:flex-col md:gap-4">
                  <div className="flex size-3.5 items-center justify-center rounded-full border border-(--color-green) md:size-6">
                    <Check size={8} className="md:size-3" />
                  </div>
                  <p className="text-sm leading-tight font-semibold text-white md:text-lg md:text-(--color-green) lg:text-xl">
                    {activity.title}
                  </p>

                  <p className="col-start-2 text-xs leading-snug text-white/75 md:text-base md:leading-normal lg:text-lg">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
