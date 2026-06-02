import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  ["/", "Úvod"],
  ["/sluzby", "Služby"],
  ["/cenik", "Ceník"],
  ["/kurzy", "Kurzy"],
  ["/kontakt", "Kontakt"],
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-body font-medium text-[24px] text-white mb-2">
              Iveta Jansíková
            </p>
            <p className="font-body text-[14px] text-white/50 mb-4">
              Váš salón krásy ve Světlé nad Sázavou
            </p>
            <p className="font-body text-[14px] text-white/40 leading-relaxed">
              Profesionální péče o ruce, nohy a pleť s více než 20 lety zkušeností.
            </p>
          </div>

          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.2em] text-white/40 mb-5">
              Rychlé odkazy
            </p>
            <ul className="space-y-3">
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-[14px] text-white/60 hover:text-violet transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.2em] text-white/40 mb-5">
              Kontakt
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 font-body text-[14px]">
                <MapPin size={16} className="mt-0.5 shrink-0 text-violet" strokeWidth={1} />
                Revoluční 49, 582 91 Světlá nad Sázavou
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-violet" strokeWidth={1} />
                <a href="tel:736401118" className="font-body text-[14px] text-white/60 hover:text-violet transition-colors">
                  736 401 118
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-violet" strokeWidth={1} />
                <a href="mailto:iveta.jansikova@seznam.cz" className="font-body text-[14px] text-white/60 hover:text-violet transition-colors">
                  iveta.jansikova@seznam.cz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 font-body text-[12px] text-white/30 text-center">
          © 2025 Iveta Jansíková. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
}

