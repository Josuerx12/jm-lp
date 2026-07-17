import Image from "next/image";

const data = [
  {
    iconPath: "/images/icons/share.svg",
    title: "Conectar",
    description:
      "Entender o eleitor, identificar demandas reais e gerar identificação.",
  },
  {
    iconPath: "/images/icons/connection.svg",
    title: "Engajar",
    description:
      "Transformar atenção em participação ativa através de comunicação estratégica.",
  },
  {
    iconPath: "/images/icons/union.svg",
    title: "Consolidar",
    description:
      "Converter engajamento em apoio político consistente e intenção de voto.",
  },
];

const Process = () => {
  return (
    <section className="text-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold">
          Toda campanha segue um processo.
          <br className="hidden sm:block" />O problema é que a maioria ignora
          isso.
        </h2>
        <p className="text-base sm:text-xl md:text-2xl mt-6">
          Minha metodologia está organizada em três etapas:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 my-12 mx-auto md:my-16 lg:grid-cols-3 lg:gap-5">
        {data.map((item) => (
          <div
            key={item.title}
            className="relative mx-auto flex aspect-square w-full max-w-80 justify-center items-center bg-secondary rounded-full lg:max-w-93.25"
          >
            <div className="flex max-w-[78%] flex-col justify-center items-center gap-3 sm:gap-4">
              <Image
                src={item.iconPath}
                alt={item.title}
                width={57}
                height={57}
              />
              <h3 className="text-primary text-3xl sm:text-5xl">
                {item.title}
              </h3>

              <p className="max-w-3xs text-sm sm:text-base lg:text-lg text-primary text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="font-semibold md:text-xl text-center">Isso não é teoria.</p>

      <p className="md:text-xl text-center">
        É a dinâmica real de campanhas que funcionam.
      </p>
    </section>
  );
};

export default Process;
