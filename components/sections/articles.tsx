import Image from "next/image";

type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  imagePath: `/images/articles/${string}`;
  href: string;
};

const articles: Article[] = Array.from({ length: 6 }, (_, index) => ({
  slug: `posicionamento-politico-${index + 1}`,
  category: index % 2 === 0 ? "PRÉ-CAMPANHA" : "ELEIÇÕES",
  title: "O que é e como ter um posicionamento político em linguagem simples",
  excerpt:
    "Posicionamento político não é o que você pensa. É o que as pessoas lembram quando escutam seu nome.",
  imagePath: "/images/articles/article-example.jpg",
  href: "#",
}));

const filters = ["ELEIÇÕES", "PRÉ-CAMPANHA", "MARKETING POLÍTICO"];

const Articles = () => {
  return (
    <section className="py-20 text-secondary md:py-28">
      <div className="lg:mt-92 flex items-center justify-between gap-6 border-b border-black/15 pb-7">
        <h2 className="max-w-xl text-2xl leading-tight font-bold sm:text-3xl md:text-[38px]">
          Artigos, análises e estratégias
          <br className="hidden sm:block" /> sobre comunicação política
        </h2>
        <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-secondary sm:size-16">
          <Image
            src="/images/icons/notepad-pen.svg"
            alt=""
            width={30}
            height={30}
            aria-hidden="true"
          />
        </span>
      </div>

      <nav className="mt-7 flex flex-wrap gap-2" aria-label="Categorias">
        {filters.map((filter, index) => (
          <span
            key={filter}
            className={`rounded-full px-5 py-1.5 text-xs font-semibold tracking-[0.12em] ${
              index === 0
                ? "bg-secondary text-green-system"
                : "bg-[#dedede] text-secondary/65"
            }`}
          >
            {filter}
          </span>
        ))}
      </nav>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {articles.map((article) => (
          <article key={article.slug}>
            <a
              href={article.href}
              className="group relative block aspect-[408/582] overflow-hidden rounded-[24px] bg-secondary focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-green-system"
            >
              <Image
                src={article.imagePath}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover object-[50%_32%] transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <span className="inline-flex rounded-full bg-green-system px-3 py-1 text-xs font-semibold tracking-wide text-secondary">
                  {article.category}
                </span>
                <h3 className="mt-3 text-lg leading-tight font-semibold sm:text-xl">
                  {article.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/80">
                  {article.excerpt}
                </p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Articles;
