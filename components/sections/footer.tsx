import { Camera, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

const contacts = [
  { icon: MessageCircle, label: "WhatsApp", href: "#contact" },
  { icon: Mail, label: "E-mail", href: "mailto:contato@jonatasmanhaes.com.br" },
  { icon: Camera, label: "Instagram", href: "#contact" },
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
            {contacts.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-sm bg-green-system text-secondary transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green-system"
              >
                <Icon size={21} strokeWidth={2.4} aria-hidden="true" />
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

      <div className="border-t border-white/10 py-4 text-center text-[10px] text-white/45">
        Todos os direitos Reservados | Jônatas Manhães
      </div>
    </footer>
  );
};

export default Footer;
