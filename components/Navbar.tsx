"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Úvod" },
  { href: "/sluzby", label: "Služby" },
  { href: "/cenik", label: "Ceník" },
  { href: "/kurzy", label: "Kurzy" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <Link href="/" className="leading-tight">
          <span className="font-heading text-[20px] text-dark block">Iveta Jansíková</span>
          <span className="font-body text-[10px] uppercase tracking-[0.15em] text-gold">
            Pedikúra · Manikúra · Kosmetika
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-body text-[12px] uppercase tracking-[0.1em] font-medium transition-colors duration-200 pb-0.5 ${
                pathname === l.href
                  ? "text-gold border-b-2 border-gold"
                  : "text-dark hover:text-gold"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-dark hover:text-gold transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="absolute top-20 left-0 right-0 bg-white border-b border-border md:hidden shadow-md">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`font-body text-[13px] uppercase tracking-[0.1em] font-medium transition-colors ${
                  pathname === l.href ? "text-gold" : "text-dark hover:text-gold"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
