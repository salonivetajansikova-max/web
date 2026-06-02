import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Služby — Pedikúra, Manikúra, Kosmetika | Iveta Jansíková",
  description:
    "Přehled všech nabízených služeb — pedikúra, manikúra, kosmetika, modeláž nehtů, depilace, hydrodermobrazie.",
};

const services = [
  {
    id: "pedikura",
    label: "Pedikúra",
    heading: "Zdravé a krásné nohy",
    desc: "Péče o nohy je základem vašeho pohodlí i sebevědomí. Nabízím kompletní péči — od klasické mokré pedikúry přes přístrojovou pedikúru Sachú až po kant pedikúru pro ty, kteří vyžadují to nejlepší.",
    items: ["Kant pedikúra", "Mokrá pedikúra", "Kombinovaná pedikúra", "Přístrojová pedikúra (Sachú)", "Ošetření kuřích ok", "Ošetření zarostlého nehtu", "Tamponáda zarostlého nehtu", "Gel-lak na nohy", "Thajská masáž nohou", "Parafínový zábal"],
    price: "od 580 Kč",
    img: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80&auto=format",
  },
  {
    id: "manikura",
    label: "Manikúra",
    heading: "Dokonalá péče o ruce",
    desc: "Krásné ruce jsou vaší vizitkou. Nabízím klasickou manikúru, gel-lak i luxusní P-Shine lesk. Součástí ošetření je péče o kůžičku, tvarování nehtů a hydratace.",
    items: ["Klasická manikúra", "Gel-lak", "P-Shine (japonský lesk)", "Parafínový zábal", "Lakování", "Zdobení"],
    price: "od 380 Kč",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80&auto=format",
  },
  {
    id: "kosmetika",
    label: "Kosmetika",
    heading: "Profesionální péče o pleť",
    desc: "Profesionální péče o pleť s využitím prémiových produktů CHRISTINA. Nabízím celková ošetření přizpůsobená vašemu typu pokožky, hydrodermobrazie a lash lifting.",
    items: ["Celkové ošetření pleti CHRISTINA", "Hydrodermobrazie – vodíkové ošetření", "Lash lifting (řasy)", "Lash lifting (obočí)", "Masáž obličeje", "Barvení řas", "Barvení obočí + úprava", "Úprava obočí"],
    price: "od 180 Kč",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&auto=format",
    highlight: "Novinka: Hydrodermobrazie — nejšetrnější metoda hloubkového čištění pleti. Vodíkové ošetření vhodné pro všechny typy pleti. Od 850 Kč.",
  },
  {
    id: "modelaz",
    label: "Modeláž nehtů",
    heading: "Krásné nehty, které vydrží",
    desc: "Profesionální modeláž gelových nehtů s dlouhotrvajícím výsledkem. Nabízím nové sety i doplnění, včetně kreativního zdobení.",
    items: ["Gelové nehty — nové", "Doplnění gelových nehtů", "Gel-lak", "Gel-lak doplnění", "Zdobení dle výběru"],
    price: "od 460 Kč",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80&auto=format",
  },
  {
    id: "depilace",
    label: "Depilace",
    heading: "Hladká pokožka na dlouho",
    desc: "Šetrná depilace voskem pro dlouhotrvající efekt hladké pokožky. Ošetřuji obličej i tělo — podpaží, ruce, nohy i třísla.",
    items: ["Celý obličej", "Horní ret", "Obočí", "Lícní kosti", "Podpaží", "Třísla", "Ruce celé / 1/2", "Nohy celé / 1/2"],
    price: "od 90 Kč",
    img: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80&auto=format",
  },
];

export default function SluzbyPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-10 border-t border-gold mb-4" />
          <SectionLabel text="Přehled služeb" />
          <h1 className="font-heading text-[clamp(36px,4vw,54px)] text-dark">Naše služby</h1>
          <p className="font-body text-[15px] text-gray mt-3">Komplexní péče o ruce, nohy a pleť</p>
        </div>
      </section>

      {/* Střídavé bloky */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-cream"}`}
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Foto */}
            <div className={`overflow-hidden ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.img}
                alt={s.label}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Text */}
            <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
              <div className="w-10 border-t border-gold mb-4" />
              <SectionLabel text={s.label} />
              <h2 className="font-body font-medium text-[clamp(24px,2.5vw,34px)] text-dark leading-tight mb-5">
                {s.heading}
              </h2>
              <p className="font-body text-[15px] text-gray leading-[1.75] mb-6">{s.desc}</p>

              {s.highlight && (
                <div className="bg-gold/10 border-l-2 border-gold px-5 py-4 mb-6">
                  <p className="font-body text-[14px] text-dark">{s.highlight}</p>
                </div>
              )}

              <ul className="space-y-2 mb-8">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-[14px] text-dark">
                    <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-6">
                <Button href={`/cenik#${s.id}`} variant="outline">
                  Zobrazit ceny →
                </Button>
                <span className="font-body text-[13px] text-gray uppercase tracking-[0.1em]">
                  {s.price}
                </span>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-gold py-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="font-body font-medium text-[28px] mb-4">Máte zájem?</h2>
          <p className="font-body text-[15px] text-white/80 mb-8">
            Objednávky přijímám telefonicky nebo e-mailem.
          </p>
          <Button href="/kontakt" variant="outline-white">Kontaktovat</Button>
        </div>
      </section>
    </>
  );
}
