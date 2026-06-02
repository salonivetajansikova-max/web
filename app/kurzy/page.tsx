import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Award, Clock, BookOpen } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Kurzy pedikúry — Iveta Jansíková",
  description: "Iveta Jansíková jako lektorka Royal Academy — rekvalifikační kurz pedikéra a nehtové designérky. MŠMT akreditace.",
};

const additionalCourses = [
  {
    title: "Ošetření zarostlých nehtů a aplikace nehtových špon",
    price: "4 200 Kč",
    desc: "Intenzivní kurz zaměřený na problematiku zarostlých nehtů a jejich ošetření pomocí nehtových špon.",
  },
  {
    title: "Suchá pedikúra",
    price: "3 800 Kč",
    desc: "Specializovaný kurz přístrojové suché pedikúry bez použití vody.",
  },
  {
    title: "Thajská masáž nohou a plosek",
    price: "3 900 Kč",
    desc: "Kurz tradiční thajské masážní techniky nohou a plosek.",
  },
];

export default function KurzyPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-10 border-t border-violet mb-4" />
          <SectionLabel text="Výuka & Vzdělávání" />
          <h1 className="font-body font-medium text-[clamp(36px,4vw,54px)] text-dark">Kurzy pedikúry</h1>
          <p className="font-body text-[16px] text-gray mt-4 max-w-xl leading-[1.75]">
            Vedle své práce v salónu předávám více než dvacetiletou praxi dál jako lektorka
            akreditovaných kurzů na Royal Academy.
          </p>
        </div>
      </section>

      {/* Hlavní kurz */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="w-10 border-t border-violet mb-4" />
            <SectionLabel text="Royal Academy" />
            <h2 className="font-body font-medium text-[clamp(24px,2.5vw,36px)] leading-tight text-dark mb-6">
              Rekvalifikační kurz:<br />
              Pedikérka a nehtová designérka
            </h2>
            <p className="font-body text-[15px] text-gray leading-[1.75] mb-5">
              Vyučuji komplexní rekvalifikační kurz akreditovaný Ministerstvem školství (MŠMT),
              ve kterém studenti ovládnou kompletní péči o nohy — od mokré pedikúry přes kant
              pedikúru až po řešení problémových stavů nehtů. Součástí kurzu je i modeláž nehtů.
            </p>
            <p className="font-body text-[15px] text-gray leading-[1.75] mb-10">
              Studenti pracují s profesionálním vybavením a kosmetickými produkty od první lekce.
              Důraz kladu na praktické dovednosti, estetiku výsledku a individuální přístup
              ke klientovi.
            </p>
            <a
              href="https://royalacademy.cz/kurz-pedikersky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-[12px] uppercase tracking-[0.1em] bg-violet text-white px-9 py-3.5 hover:opacity-90 transition-opacity duration-200"
            >
              Více o kurzu na Royal Academy <ExternalLink size={14} strokeWidth={1} />
            </a>
          </div>

          <div className="space-y-4">
            {[
              { icon: Award, label: "Akreditace", value: "MŠMT-10694/2023-2", sub: "Zkoušky autorizuje MZDR" },
              { icon: Clock, label: "Délka kurzu", value: "3 měsíce" },
              { icon: BookOpen, label: "Cena", value: "19 000 Kč" },
            ].map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="bg-cream border border-border p-6 flex gap-4 items-start">
                <Icon className="text-violet shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[0.15em] text-gray mb-1">{label}</p>
                  <p className="font-body font-medium text-[16px] text-dark">{value}</p>
                  {sub && <p className="font-body text-[13px] text-gray mt-0.5">{sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doplňkové kurzy */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="w-10 border-t border-violet mb-4" />
            <SectionLabel text="Specializace" />
            <h2 className="font-body font-medium text-[clamp(24px,2.5vw,36px)] text-dark">Doplňkové kurzy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalCourses.map((c) => (
              <div key={c.title} className="bg-white border border-border p-8">
                <h3 className="font-body font-medium text-[17px] text-dark mb-3 pb-4 border-b border-border">{c.title}</h3>
                <p className="font-body text-[14px] text-gray leading-[1.75] mb-6">{c.desc}</p>
                <p className="font-body font-medium text-[18px] text-violet">{c.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://royalacademy.cz/kurz-pedikersky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-[12px] uppercase tracking-[0.1em] border border-violet text-violet px-9 py-3.5 hover:bg-violet hover:text-white transition-all duration-200"
            >
              Přejít na Royal Academy <ExternalLink size={14} strokeWidth={1} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="w-10 border-t border-violet mb-4" />
            <h2 className="font-body font-medium text-[clamp(24px,2.5vw,36px)] text-white mb-4">Zajímá vás kurz?</h2>
            <p className="font-body text-[15px] text-white/60 leading-[1.75]">
              Pro více informací nebo přihlášení navštivte stránky Royal Academy, nebo mě
              kontaktujte přímo.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <a
              href="https://royalacademy.cz/kurz-pedikersky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-[12px] uppercase tracking-[0.1em] bg-violet text-white px-9 py-3.5 hover:opacity-90 transition-opacity duration-200"
            >
              Royal Academy <ExternalLink size={14} strokeWidth={1} />
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center font-body text-[12px] uppercase tracking-[0.1em] border border-white text-white px-9 py-3.5 hover:bg-white hover:text-dark transition-all duration-200"
            >
              Kontaktovat
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


