import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-[url('/images/bg1.png')] bg-cover bg-no-repeat bg-[position:center_20%]">
        <Hero />
      </div>
    </main>
  );
}
