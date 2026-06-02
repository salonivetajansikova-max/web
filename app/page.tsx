import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Footprints,
  Hand,
  Sparkles,
  Star,
  Scissors,
  Eye,
  Phone,
  Mail,
  MapPin,
  Check,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";

export const metadata: Metadata = {
  title: "Iveta Jansíková — Pedikúra, Manikúra, Kosmetika | Světlá nad Sázavou",
  description:
    "Profesionální pedikúra, manikúra, kosmetika a modeláž nehtů ve Světlé nad Sázavou. Více než 20 let zkušeností. Prémiové produkty Christina a KART.",
};

const services = [
  {
    icon: Footprints,
    title: "Pedikúra",
    description: "Kant, mokrá, kombinovaná i přístrojová pedikúra. Profesionální péče o zdraví a krásu nohou.",
    href: "/cenik#pedikura",
  },
  {
    icon: Hand,
    title: "Manikúra",
    description: "Klasická manikúra, gel-lak, P-Shine a parafínový zábal pro dokonale krásné ruce.",
    href: "/cenik#manikura",
  },
  {
    icon: Sparkles,
    title: "Kosmetika",
    description: "Komplexní péče o pleť s produkty CHRISTINA. Hydrodermobrazie, lash lifting a ošetření pleti.",
    href: "/cenik#kosmetika",
  },
  {
    icon: Star,
    title: "Modeláž nehtů",
    description: "Gelové nehty, gel-lak a profesionální zdobení. Krásné nehty s dlouhou životností.",
    href: "/cenik#modelaz",
  },
  {
    icon: Scissors,
    title: "Depilace",
    description: "Šetrná depilace voskem pro obličej i tělo. Hladká pokožka s dlouhotrvajícím efektem.",
    href: "/cenik#depilace",
  },
  {
    icon: Eye,
    title: "Lash lifting",
    description: "Trvalá na řasy a obočí, barvení. Výrazný pohled bez každodenního make-upu.",
    href: "/cenik#kosmetika",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=1400&q=80&auto=format&fit=crop"
            alt="Pedikúra — nohy ve vodě s květinami"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center text-white">
          <SectionLabel text="Světlá nad Sázavou" white />
          <h1 className="font-heading text-[clamp(42px,5vw,68px)] leading-tight mb-6 text-white">
            Péče o krásu vašich rukou a nohou
          </h1>
          <p className="font-body text-[16px] text-white/85 max-w-xl mx-auto mb-10 leading-relaxed">
            Profesionální pedikúra, manikúra, kosmetika a modeláž nehtů
            v příjemném soukromém salónu.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/cenik" variant="outline-white">Zobrazit ceník</Button>
            <Button href="/sluzby" variant="solid">Naše služby</Button>
          </div>
        </div>

        {/* Spodní info lišta */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/95">
          <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="tel:736401118" className="flex items-center gap-3 font-body text-[14px] text-dark hover:text-violet transition-colors justify-center md:justify-start">
              <Phone size={16} strokeWidth={1} className="text-violet" />
              736 401 118
            </a>
            <a href="mailto:iveta.jansikova@seznam.cz" className="flex items-center gap-3 font-body text-[14px] text-dark hover:text-violet transition-colors justify-center">
              <Mail size={16} strokeWidth={1} className="text-violet" />
              iveta.jansikova@seznam.cz
            </a>
            <div className="flex items-center gap-3 font-body text-[14px] text-dark justify-center md:justify-end">
              <MapPin size={16} strokeWidth={1} className="text-violet" />
              Revoluční 49, Světlá n. S.
            </div>
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-square overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/iveta.jpg"
              alt="Iveta Jansíková"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <SectionLabel text="O mně" />
            <h2 className="font-body font-medium text-[clamp(26px,3vw,38px)] leading-tight text-dark mb-6">
              Soukromý salón s osobním přístupem
            </h2>
            <p className="font-body text-[16px] text-gray leading-[1.75] mb-4">
              Jmenuji se Iveta Jansíková a péči o ruce, nohy a pleť se věnuji od roku 2001.
              Za tu dobu jsem pomohla stovkám klientek cítit se krásně a spokojeně.
            </p>
            <p className="font-body text-[16px] text-gray leading-[1.75] mb-8">
              Pracuji v příjemném soukromém salónu ve Světlé nad Sázavou, kde si každá klientka
              odnáší nejen výsledek, ale i pocit pohody a péče.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Prémiové produkty Christina & KART",
                "Individuální přístup ke každé klientce",
                "Své zkušenosti předávám dál jako lektorka pedikúry v Royal Academy v Jihlavě",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-[15px] text-dark">
                  <Check size={16} strokeWidth={1.5} className="text-violet shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/kontakt">Objednat se →</Button>
          </div>
        </div>
      </section>

      {/* PŘEHLED SLUŽEB */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="w-10 border-t border-violet mx-auto mb-4" />
            <SectionLabel text="Naše služby" />
            <h2 className="font-body font-medium text-[clamp(28px,3vw,40px)] text-dark">
              Komplexní péče o krásu
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/cenik" variant="solid">Kompletní ceník</Button>
          </div>
        </div>
      </section>

      {/* KONTAKTNÍ LIŠTA */}
      <section className="bg-violet py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
          <div>
            <Phone size={22} strokeWidth={1} className="mx-auto mb-3" />
            <p className="font-body text-[11px] uppercase tracking-[0.2em] mb-1 text-white/70">Zavolejte</p>
            <a href="tel:736401118" className="font-body font-medium text-[18px] hover:opacity-80 transition-opacity">
              736 401 118
            </a>
          </div>
          <div>
            <Mail size={22} strokeWidth={1} className="mx-auto mb-3" />
            <p className="font-body text-[11px] uppercase tracking-[0.2em] mb-1 text-white/70">Napište</p>
            <a href="mailto:iveta.jansikova@seznam.cz" className="font-body font-medium text-[16px] hover:opacity-80 transition-opacity">
              iveta.jansikova@seznam.cz
            </a>
          </div>
          <div>
            <MapPin size={22} strokeWidth={1} className="mx-auto mb-3" />
            <p className="font-body text-[11px] uppercase tracking-[0.2em] mb-1 text-white/70">Kde nás najdete</p>
            <p className="font-body font-medium text-[16px]">Revoluční 49, Světlá n. S.</p>
          </div>
        </div>
      </section>
    </>
  );
}

