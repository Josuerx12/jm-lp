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
    title: "Estratégia de comunicação política",
    description: "Organização do discurso, narrativa e presença pública.",
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

      <div className="py-20 md:py-32">
        <h2 className="max-w-md text-2xl sm:text-3xl lg:text-4xl text-white">
          Quem é Jônatas Manhães
        </h2>

        <p className="max-w-md mt-6 text-base leading-relaxed md:text-xl">
          Sou consultor e estrategista de marketing político, com atuação direta
          na construção de campanhas, mandatos e projetos políticos. Trabalho
          com:
        </p>

        <div className="max-w-137.5 mt-6 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4">
          {contents.map((content) => (
            <Button
              className="rounded-full! px-4! py-2! text-sm! text-(--color-green)!"
              variant="secondary"
              key={content}
            >
              {content}
            </Button>
          ))}
        </div>

        <p className="max-w-md mt-6 text-base leading-relaxed md:text-xl">
          Minha atuação não se limita à comunicação. Ela envolve leitura de
          cenário, definição estratégica e construção de posicionamento
          competitivo. <br />
          Integro{" "}
          <span className="text-(--color-green)">
            comunicação digital, produção estratégica de conteúdo, articulação
            territorial e mobilização política.
          </span>
        </p>
        <p className="max-w-md mt-6 text-base leading-relaxed md:text-xl">
          No pleito de 2024, atuei na estratégia de campanhas que alcançaram
          primeiro e segundo lugar em votação no mesmo município, além de
          participar da construção de uma das campanhas mais emblemáticas do
          país, responsável pela eleição da vereadora mais jovem do Brasil.
        </p>
        <p className="max-w-lg mt-6 text-base leading-relaxed md:text-xl">
          Meu trabalho é orientado por uma premissa simples: <br />{" "}
          <b>sem estratégia, não existe campanha competitiva.</b>
        </p>
      </div>
      <hr className="my-12 md:my-16" />

      <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:gap-10">
        <div className="w-full relative rounded lg:max-w-md lg:min-h-125 flex justify-center items-center bg-linear-to-r to-[#080808] from-[#171717] border border-[#1C1C1C] p-6 sm:p-10">
          <div className="absolute -top-4 left-10 w-28 h-9 bg-(--color-green) rounded shadow-[0_0_2px_var(--color-green),0_0_8px_var(--color-green),0_0_20px_var(--color-green)]" />
          <div className="flex items-start h-full gap-4">
            <div className="flex flex-col gap-4">
              <Image
                src="/images/elements/torre.png"
                alt="Torre"
                width={41}
                height={41}
              />
              <p className="font-semibold text-(--color-green) text-lg md:text-xl lg:text-2xl">
                Consultoria em estratégia política e eleitoral
              </p>

              <p className="text-lg lg:text-xl">
                Atuo diretamente na estruturação estratégica de projetos
                políticos, organizando comunicação, posicionamento e atuação
                eleitoral.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full pb-20 md:pb-32">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="relative rounded flex justify-center items-center bg-linear-to-r to-[#080808] from-[#171717] border border-[#1C1C1C] p-6 sm:p-10"
            >
              <div className="flex items-start h-full gap-4">
                <div className="flex flex-col gap-4">
                  <div className="w-6 h-6 flex justify-center items-center rounded-full border border-(--color-green)">
                    <Check size={12} />
                  </div>
                  <p className="font-semibold text-(--color-green) text-lg lg:text-xl">
                    {activity.title}
                  </p>

                  <p className="lg:text-lg">{activity.description}</p>
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
