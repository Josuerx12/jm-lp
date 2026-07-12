/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
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
    <section className="text-center py-32">
      <h2 className="text-[40px] font-bold text-white">
        Resultados não são discurso.
        <br />
        São construção.
      </h2>
      <p className="text-2xl text-white">
        Experiência prática em campanhas e <br /> projetos políticos.
      </p>

      <div className="flex justify-between gap-6 *:flex-wrap my-16">
        {data.map((item) => (
          <div
            key={item.text}
            className="flex flex-col min-h-83.75 md:min-w-101.75 rounded-[50px] items-start justify-center gap-6 w-full p-10 bg-[#121212]"
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
              className="text-lg md:text-xl text-white text-start"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </div>
        ))}
      </div>

      <p className="text-lg md:text-xl text-white">
        O que diferencia uma campanha não é o volume de conteúdo.
      </p>
      <b className="text-lg md:text-xl">É a estratégia por trás dele.</b>
    </section>
  );
};

export default Results;
