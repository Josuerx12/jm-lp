import {
  CircleGauge,
  MessageSquareWarning,
  SearchX,
  Workflow,
} from "lucide-react";
import Image from "next/image";

const problems = [
  { icon: Workflow, text: "Falhas estruturais" },
  { icon: MessageSquareWarning, text: "Gargalos de comunicação" },
  { icon: CircleGauge, text: "Ausência de posicionamento" },
  { icon: SearchX, text: "Erros estratégicos invisíveis" },
];

const paths = [
  "Estruturar seu posicionamento",
  "Construir presença política real",
  "Organizar sua comunicação",
  "Aumentar sua capacidade de mobilização",
];

const Diagnosis = () => {
  return (
    <section className="flex relative min-h-[165.125vw] flex-col text-white lg:min-h-[80.52vw] lg:justify-center lg:py-20">
      <div className="lg:grid lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20">
        <h2 className="mx-auto max-w-72 text-center text-2xl leading-tight font-bold sm:max-w-lg lg:mx-0 lg:max-w-sm lg:text-start lg:text-4xl">
          Antes de qualquer estratégia, existe um problema que precisa ser
          entendido.
        </h2>

        <div className="mt-7 grid gap-2 lg:mt-0 lg:gap-4">
          {problems.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex min-h-14 items-center gap-3 rounded-sm bg-[#202020]/95 p-2 backdrop-blur-sm lg:min-h-18 lg:gap-4 lg:p-3.5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-[#303030] text-green-system lg:size-12">
                <Icon size={21} strokeWidth={2} aria-hidden="true" />
              </span>
              <p className="text-sm text-white/70 lg:text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 grid items-center gap-5 border-t border-white/20 pt-6 lg:mt-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:pt-12">
        <p className="mx-auto max-w-72 text-center text-sm leading-snug text-white/85 lg:mx-0 lg:max-w-sm lg:text-start lg:text-base lg:leading-relaxed">
          Sem diagnóstico, qualquer ação vira tentativa. Por isso, o primeiro
          passo do meu trabalho é entender profundamente o cenário para então
          definir direção.
        </p>
        <a
          href="#contact"
          className="inline-flex min-h-10 w-full items-center justify-center rounded-md bg-green-system px-6 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-green-system/85 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green-system lg:min-h-14 lg:max-w-lg lg:justify-self-start lg:px-7 lg:py-4"
        >
          Agendar consultoria estratégica
        </a>
      </div>
      <div className="lg:absolute w-full lg:-bottom-92 lg:left-1/2 lg:-translate-x-1/2 lg:z-10">
        <DiagnosisCta />
      </div>
    </section>
  );
};

export const DiagnosisCta = () => {
  return (
    <section className="relative z-10 pt-12 lg:-mt-59 lg:pt-0">
      <Image
        src="/images/elements/peca.png"
        alt="Peça de xadrez"
        width={394}
        height={703}
        className="pointer-events-none absolute -top-25 -left-27 z-20 hidden h-auto w-55 rotate-4 lg:block xl:-left-32 xl:w-64"
      />

      <div className="mx-auto mb-10 w-full max-w-5xl rounded-[32px] bg-green-system px-6 py-10 text-center text-secondary sm:px-10 lg:mb-0 lg:rounded-[48px] lg:px-16 lg:py-14">
        <h3 className="text-2xl leading-tight font-bold sm:text-3xl">
          Se você quer disputar de verdade,
          <br className="hidden sm:block" /> precisa começar antes.
        </h3>
        <p className="mt-3 text-sm sm:text-base">
          Campanhas eleitorais competitivas não começam na eleição.
          <br className="hidden sm:block" /> Começam na estratégia.
        </p>
        <p className="mt-4 text-sm font-semibold">Se você quer:</p>
        <div className="mx-auto mt-5 grid max-w-3xl gap-2 sm:grid-cols-2">
          {paths.map((path) => (
            <span
              key={path}
              className="rounded-full bg-[#acd800] px-5 py-2 text-sm"
            >
              {path}
            </span>
          ))}
        </div>
        <p className="mt-7 text-sm">O próximo passo é simples.</p>
        <a
          href="#contact"
          className="mx-auto mt-5 inline-flex min-h-14 w-full max-w-md items-center justify-center rounded-md bg-secondary px-7 py-4 text-sm font-semibold text-green-system transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-secondary"
        >
          Agendar consultoria estratégica
        </a>
      </div>
    </section>
  );
};

export default Diagnosis;
