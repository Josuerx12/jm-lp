import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Strategy from "@/components/sections/strategy";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-[url('/images/bg/bg1.png')] bg-cover bg-no-repeat">
        <Hero />
      </div>
      <Strategy />
      <div className="min-h-screen bg-[url('/images/bg/bg2.png')] bg-cover bg-no-repeat">
        <About />
      </div>
    </main>
  );
}
