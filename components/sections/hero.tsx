import Image from "next/image";
import Button from "../ui/button";

const Hero = () => {
  return (
    <section>
      <div className="max-w-xl py-32">
        <Image src="/images/logo.png" alt="Logo" width={160} height={85} />
        <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          <span className="text-(--color-green)">
            Estratégia política, comunicação eleitoral e posicionamento
          </span>{" "}
          para <br /> quem quer vencer o jogo antes da eleição começar
        </h2>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white">
          Consultoria estratégica para pré-candidatos, candidatos e mandatos que
          precisam estruturar comunicação, narrativa e mobilização eleitoral com
          método, clareza e direção.
        </p>
        <Button className="mt-10 w-10/12">
          Agendar consultoria estratégica
        </Button>
      </div>
    </section>
  );
};

export default Hero;
