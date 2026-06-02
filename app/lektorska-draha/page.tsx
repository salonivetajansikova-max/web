import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Award, Calendar, Clock, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Lektorská dráha | Iveta Jansíková",
  description: "Iveta Jansíková jako lektorka Royal Academy — rekvalifikační kurz pedikéra a nehtové designérky.",
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

export default function LektorskaPage() {
  return (
    <>
      <section className="bg-cream py-20 border-b border-blush">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-muted mb-3">Vzdělávám budoucí odborníky</p>
          <h1 className="font-heading text-5xl text-salon">Lektorská dráha</h1>
          <p className="text-muted mt-4 max-w-xl leading-relaxed">
            Vedle své práce v salónu předávám více než dvacetiletou praxi dál jako lektorka
            akreditovaných kurzů na Royal Academy.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted mb-3">Royal Academy</p>
              <h2 className="font-heading text-4xl text-salon mb-6">
                Rekvalifikační kurz: Pedikérka a nehtová designérka
              </h2>
              <p className="text-muted leading-relaxed mb-5">
                Vyučuji komplexní rekvalifikační kurz akreditovaný Ministerstvem školství (MŠMT),
                ve kterém studenti ovládnou kompletní péči o nohy — od mokré pedikúry přes kant
                pedikúru až po řešení problémových stavů nehtů. Součástí kurzu je i modeláž nehtů.
              </p>
              <p className="text-muted leading-relaxed mb-10">
                Studenti pracují s profesionálním vybavením a kosmetickými produkty od první lekce.
                Důraz kladu na praktické dovednosti, estetiku výsledku a individuální přístup
                ke klientovi.
              </p>
              <a
                href="https://royalacademy.cz/kurz-pedikersky"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-rose text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-salon transition-colors duration-200"
              >
                Více o kurzu na Royal Academy <ExternalLink size={13} />
              </a>
            </div>

            <div className="space-y-4">
              {[
                { icon: Award, label: "Akreditace", value: "MŠMT-10694/2023-2", sub: "Zkoušky autorizuje MZDR" },
                { icon: Clock, label: "Délka kurzu", value: "3 měsíce" },
                { icon: BookOpen, label: "Cena", value: "19 000 Kč" },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="bg-cream p-6 rounded-sm flex gap-4 items-start">
                  <Icon className="text-rose shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted mb-1">{label}</p>
                    <p className="text-salon">{value}</p>
                    {sub && <p className="text-sm text-muted mt-0.5">{sub}</p>}
                  </div>
                </div>
              ))}
              <div className="bg-cream p-6 rounded-sm flex gap-4 items-start">
                <Calendar className="text-rose shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted mb-3">Nejbližší termíny 2026</p>
                  <div className="flex flex-wrap gap-2">
                    {["Leden", "Březen", "Červenec", "Září"].map((m) => (
                      <span key={m} className="px-3 py-1 bg-blush text-salon text-sm">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-muted mb-3">Specializace</p>
            <h2 className="font-heading text-4xl text-salon">Doplňkové kurzy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalCourses.map((c) => (
              <div key={c.title} className="bg-white p-8 rounded-sm">
                <h3 className="font-heading text-xl text-salon mb-3">{c.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{c.desc}</p>
                <p className="text-rose">{c.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://royalacademy.cz/kurz-pedikersky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-salon text-salon px-8 py-3 text-xs uppercase tracking-widest hover:bg-salon hover:text-white transition-colors duration-200"
            >
              Přejít na Royal Academy <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-blush py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-heading text-4xl text-salon mb-4">Zajímá vás kurz?</h2>
            <p className="text-muted leading-relaxed">
              Pro více informací nebo přihlášení navštivte stránky Royal Academy, nebo mě
              kontaktujte přímo.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <a
              href="https://royalacademy.cz/kurz-pedikersky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rose text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-salon transition-colors duration-200"
            >
              Royal Academy <ExternalLink size={13} />
            </a>
            <Link
              href="/kontakt"
              className="inline-block border border-salon text-salon px-8 py-3 text-xs uppercase tracking-widest hover:bg-salon hover:text-white transition-colors duration-200"
            >
              Kontaktovat
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
