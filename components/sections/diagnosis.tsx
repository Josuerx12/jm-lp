import {
  CircleGauge,
  MessageSquareWarning,
  SearchX,
  Workflow,
} from "lucide-react";

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
    <section className="relative flex min-h-215 flex-col justify-between py-20 text-white md:min-h-241 md:py-24 lg:min-h-241">
      <div className="ml-auto w-full max-w-2xl lg:w-[58%]">
        <h2 className="max-w-lg text-3xl leading-[1.08] font-bold sm:text-4xl md:text-[42px]">
          Antes de qualquer estratégia, existe um problema que precisa ser
          entendido.
        </h2>

        <div className="mt-9 grid gap-3">
          {problems.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex min-h-16 items-center gap-4 rounded-sm bg-[#202020]/95 p-3.5 backdrop-blur-sm"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-[#303030] text-green-system">
                <Icon size={23} strokeWidth={2} aria-hidden="true" />
              </span>
              <p className="text-sm text-white/75 sm:text-base">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-9 grid items-center gap-6 border-t border-white/35 pt-8 sm:grid-cols-[1fr_auto]">
          <p className="max-w-sm text-sm leading-relaxed text-white/85 sm:text-base">
            Sem diagnóstico, qualquer ação vira tentativa. Por isso, o primeiro
            passo do meu trabalho é entender profundamente o cenário para então
            definir direção.
          </p>
          <a
            href="#contact"
            className="inline-flex min-h-14 items-center justify-center bg-green-system px-7 py-4 text-sm font-semibold text-secondary transition-colors hover:bg-green-system/85 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green-system"
          >
            Agendar consultoria estratégica
          </a>
        </div>
      </div>

      <div className="mx-auto mt-20 w-full max-w-4xl rounded-[32px] bg-green-system px-6 py-10 text-center text-secondary sm:px-10 md:rounded-[48px] md:px-16 md:py-12">
        <h3 className="text-2xl leading-tight font-bold sm:text-3xl">
          Se você quer disputar de verdade,
          <br className="hidden sm:block" /> precisa começar antes.
        </h3>
        <p className="mt-3 text-sm sm:text-base">
          Campanhas eleitorais competitivas não começam na eleição.
          <br className="hidden sm:block" /> Começam na estratégia.
        </p>
        <p className="mt-4 text-sm font-semibold">Se você quer:</p>
        <div className="mx-auto mt-5 grid max-w-2xl gap-2 sm:grid-cols-2">
          {paths.map((path) => (
            <span
              key={path}
              className="rounded-full bg-[#acd800] px-5 py-2 text-xs sm:text-sm"
            >
              {path}
            </span>
          ))}
        </div>
        <p className="mt-7 text-sm">O próximo passo é simples.</p>
        <a
          href="#contact"
          className="mx-auto mt-5 inline-flex min-h-14 w-full max-w-sm items-center justify-center rounded-md bg-secondary px-7 py-4 text-sm font-semibold text-green-system transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-secondary"
        >
          Agendar consultoria estratégica
        </a>
      </div>
    </section>
  );
};

export default Diagnosis;
