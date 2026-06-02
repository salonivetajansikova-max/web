import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Kontakt — Iveta Jansíková | Světlá nad Sázavou",
  description:
    "Kontaktní informace a mapa. Revoluční 49, Světlá nad Sázavou. Tel: 736 401 118.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-10 border-t border-gold mb-4" />
          <SectionLabel text="Kde nás najdete" />
          <h1 className="font-heading text-[clamp(36px,4vw,54px)] text-dark">Kontakt</h1>
        </div>
      </section>

      {/* Mapa + info */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Mapa 60% */}
          <div className="lg:col-span-3">
            <iframe
              title="Mapa salónu Iveta Jansíková"
              src="https://maps.google.com/maps?q=Revoluční+49+Světlá+nad+Sázavou&output=embed"
              className="w-full h-[480px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info 40% */}
          <div className="lg:col-span-2">
            <div className="w-10 border-t border-gold mb-4" />
            <SectionLabel text="Jak nás najdete" />
            <h2 className="font-body font-medium text-[clamp(22px,2.5vw,32px)] text-dark mb-10">
              Přijďte za námi
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={20} strokeWidth={1} className="text-gold shrink-0 mt-1" />
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[0.15em] text-gray mb-1">Adresa</p>
                  <p className="font-body text-[15px] text-dark leading-relaxed">
                    Revoluční 49<br />
                    582 91 Světlá nad Sázavou
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={20} strokeWidth={1} className="text-gold shrink-0 mt-1" />
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[0.15em] text-gray mb-1">Telefon</p>
                  <a href="tel:736401118" className="font-body text-[18px] text-dark hover:text-gold transition-colors">
                    736 401 118
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={20} strokeWidth={1} className="text-gold shrink-0 mt-1" />
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[0.15em] text-gray mb-1">E-mail</p>
                  <a href="mailto:iveta.jansikova@seznam.cz" className="font-body text-[15px] text-dark hover:text-gold transition-colors">
                    iveta.jansikova@seznam.cz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={20} strokeWidth={1} className="text-gold shrink-0 mt-1" />
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[0.15em] text-gray mb-1">Provozní doba</p>
                  <p className="font-body text-[15px] text-gray italic">Pouze na objednávku</p>
                </div>
              </div>
            </div>

            <a
              href="tel:736401118"
              className="mt-10 inline-block font-body text-[12px] uppercase tracking-[0.1em] bg-gold text-white border border-gold px-9 py-3.5 hover:bg-[#B8935A] transition-all duration-200"
            >
              Zavolat
            </a>
          </div>
        </div>
      </section>

      {/* Info lišta */}
      <section className="bg-cream py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-body text-[14px] text-gray leading-relaxed">
            Objednávky přijímám telefonicky nebo e-mailem.<br />
            Doporučuji se objednat předem — termíny bývají obsazeny.
          </p>
        </div>
      </section>
    </>
  );
}
