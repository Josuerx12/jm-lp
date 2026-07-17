import Image from "next/image";
import Button from "../ui/button";

const Hero = () => {
  return (
    <section className="flex min-h-screen items-center">
      <div className="max-w-xl py-16 md:py-32">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={160}
          height={85}
          className="h-auto w-32 sm:w-40"
          priority
        />
        <h1 className="mt-8 text-[2rem] leading-[1.08] sm:text-4xl md:text-5xl font-bold text-white">
          <span className="text-(--color-green)">
            Estratégia política, comunicação eleitoral e posicionamento
          </span>{" "}
          para <br className="hidden sm:block" /> quem quer vencer o jogo antes
          da eleição começar
        </h1>
        <p className="mt-6 text-base leading-relaxed sm:text-xl md:text-2xl text-white">
          Consultoria estratégica para pré-candidatos, candidatos e mandatos que
          precisam estruturar comunicação, narrativa e mobilização eleitoral com
          método, clareza e direção.
        </p>
        <Button className="mt-8 w-full sm:mt-10 sm:w-10/12">
          Agendar consultoria estratégica
        </Button>
      </div>
    </section>
  );
};

export default Hero;
