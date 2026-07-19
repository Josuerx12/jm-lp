import { Mail } from "lucide-react";
import Image from "next/image";

const contacts = [
  {
    icon: null,
    label: "WhatsApp",
    href: "#contact",
    externalIconPath: "/images/icons/whatsapp.svg",
  },
  {
    icon: Mail,
    label: "E-mail",
    href: "mailto:contato@jonatasmanhaes.com.br",
    externalIconPath: null,
  },
  {
    icon: null,
    label: "Instagram",
    href: "#contact",
    externalIconPath: "/images/icons/instagram.svg",
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0c0c0c] text-white">
      <section className="flex flex-col items-center justify-between gap-10 py-16 sm:flex-row md:py-20">
        <Image
          src="/images/logo.png"
          alt="Jônatas Manhães"
          width={260}
          height={138}
          className="h-auto w-52 sm:w-60"
        />

        <div className="flex items-center gap-5 sm:max-w-lg">
          <div className="flex flex-col gap-2">
            {contacts.map(({ icon: Icon, label, href, externalIconPath }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-sm bg-green-system text-secondary transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green-system"
              >
                {externalIconPath ? (
                  <Image
                    src={externalIconPath}
                    alt={label}
                    width={30}
                    height={30}
                    aria-hidden="true"
                  />
                ) : Icon ? (
                  <Icon size={21} strokeWidth={2} aria-hidden="true" />
                ) : null}
              </a>
            ))}
          </div>
          <p className="text-xl leading-tight font-semibold sm:text-2xl">
            Entre em contato para
            <br /> projetos, consultorias ou
            <br /> parcerias institucionais.
          </p>
        </div>
      </section>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/45">
        Todos os direitos Reservados | Jônatas Manhães
      </div>
    </footer>
  );
};

export default Footer;
