/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: content is static and defined in this file */
import Image from "next/image";

const data = [
  {
    iconPath: "/images/icons/medal.svg",
    text: "Campanhas com <b>primeiro e segundo lugar</b> em votação no mesmo cenário.",
  },
  {
    iconPath: "/images/icons/star.svg",
    text: "Participação na <b>construção da vereadora mais jovem do Brasil.</b>",
  },
  {
    iconPath: "/images/icons/gear.svg",
    text: "Atuação direta na <b>estruturação de posicionamento e comunicação.</b>",
  },
];

const Results = () => {
  return (
    <section className="text-center py-20 md:py-32">
      <h2 className="text-2xl leading-tight sm:text-[40px] font-bold text-white">
        Resultados não são discurso.
        <br className="hidden sm:block" />
        São construção.
      </h2>
      <p className="mt-4 text-base sm:text-2xl text-white">
        Experiência prática em campanhas e <br className="hidden sm:block" />
        projetos políticos.
      </p>

      <div className="flex flex-col justify-between gap-4 sm:gap-6 my-12 md:my-16 lg:flex-row">
        {data.map((item) => (
          <div
            key={item.text}
            className="flex flex-col min-h-64 lg:min-h-83.75 rounded-[32px] sm:rounded-[50px] items-start justify-center gap-6 w-full p-6 sm:p-10 bg-[#121212]"
          >
            <div className="flex justify-center items-center w-20 h-20 rounded-full bg-green-system shadow-[0_0_2px_var(--color-green),0_0_8px_var(--color-green),0_0_20px_var(--color-green)]">
              <Image
                src={item.iconPath}
                alt={`Ícone representando ${item.text}`}
                width={44}
                height={44}
              />
            </div>
            <p
              className="text-base md:text-xl text-white text-start"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </div>
        ))}
      </div>

      <p className="text-base md:text-xl text-white">
        O que diferencia uma campanha não é o volume de conteúdo.
      </p>
      <b className="text-base md:text-xl">É a estratégia por trás dele.</b>
    </section>
  );
};

export default Results;
