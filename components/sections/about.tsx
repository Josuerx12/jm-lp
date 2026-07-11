import { ChessRook } from "lucide-react";
import Image from "next/image";
import Button from "../ui/button";

const contents = [
  "Pré-campanhas",
  "Campanhas eleitorais",
  "Mandatos parlamentares",
  "Estruturação de projetos políticos",
];

const About = () => {
  return (
    <section className="relative">
      <div className="absolute -top-14 -left-80">
        <Image
          src="/images/elements/peca.png"
          alt="peça de xadrez"
          width={250}
          height={500}
          loading="eager"
          className="z-40! pointer-events-none rotate-25"
        />
      </div>

      <div>
        <h3 className="max-w-md text-lg sm:text-xl md:text-3xl lg:text-4xl text-white">
          Quem é Jônatas Manhães
        </h3>

        <p className="max-w-md mt-6 text-lg md:text-xl">
          Sou consultor e estrategista de marketing político, com atuação direta
          na construção de campanhas, mandatos e projetos políticos. Trabalho
          com:
        </p>

        <div className="max-w-[550px] mt-6 grid grid-cols-2 gap-4">
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

        <p className="max-w-md mt-6 text-lg md:text-xl">
          Minha atuação não se limita à comunicação. Ela envolve leitura de
          cenário, definição estratégica e construção de posicionamento
          competitivo. <br />
          Integro{" "}
          <span className="text-(--color-green)">
            comunicação digital, produção estratégica de conteúdo, articulação
            territorial e mobilização política.
          </span>
        </p>
        <p className="max-w-md mt-6 text-lg md:text-xl">
          No pleito de 2024, atuei na estratégia de campanhas que alcançaram
          primeiro e segundo lugar em votação no mesmo município, além de
          participar da construção de uma das campanhas mais emblemáticas do
          país, responsável pela eleição da vereadora mais jovem do Brasil.
        </p>
        <p className="max-w-lg mt-6 text-lg md:text-xl">
          Meu trabalho é orientado por uma premissa simples: <br />{" "}
          <b>sem estratégia, não existe campanha competitiva.</b>
        </p>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />

      <div className="flex items-start gap-10">
        <div className="w-full rounded max-w-md md:min-h-125 flex justify-center items-center bg-linear-90 from-[#080808] to-[#171717] border border-[#1C1C1C] p-10">
          <div className="flex items-start h-full gap-4">
            <div className="flex flex-col gap-4">
              <ChessRook className="items-start" />
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
      </div>
    </section>
  );
};

export default About;
