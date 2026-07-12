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
        <h2 className="text-xl sm:text-3xl md:text-[40px] font-bold">
          Toda campanha segue um processo.
          <br />O problema é que a maioria ignora isso.
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mt-6">
          Minha metodologia está organizada em três etapas:
        </p>
      </div>

      <div className="flex justify-between my-16 mx-auto">
        {data.map((item) => (
          <div
            key={item.title}
            className="relative flex-wrap w-93.25 h-93.25 flex justify-center items-center bg-secondary rounded-full"
          >
            <div className="flex flex-col justify-center items-center gap-4">
              <Image
                src={item.iconPath}
                alt={item.title}
                width={57}
                height={57}
              />
              <h6 className="text-primary text-5xl">{item.title}</h6>

              <p className="max-w-3xs lg:text-lg text-primary text-center">
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
