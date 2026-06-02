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

function LavenderSprig() {
  return (
    <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="6.5" y1="21" x2="6.5" y2="9" stroke="#8B7BA8" strokeWidth="1" strokeLinecap="round"/>
      <ellipse cx="6.5" cy="4.5" rx="2" ry="3" fill="#8B7BA8"/>
      <ellipse cx="3" cy="9" rx="1.6" ry="2.4" fill="#8B7BA8" transform="rotate(-22 3 9)"/>
      <ellipse cx="10" cy="9" rx="1.6" ry="2.4" fill="#8B7BA8" transform="rotate(22 10 9)"/>
      <ellipse cx="3.5" cy="13.5" rx="1.4" ry="2" fill="#B0A5C8" transform="rotate(-15 3.5 13.5)"/>
      <ellipse cx="9.5" cy="13.5" rx="1.4" ry="2" fill="#B0A5C8" transform="rotate(15 9.5 13.5)"/>
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 leading-tight">
          <LavenderSprig />
          <div>
            <span className="font-body font-medium text-[20px] text-dark block">Iveta Jansíková</span>
            <span className="font-body text-[10px] uppercase tracking-[0.15em] text-violet">
              Pedikúra · Manikúra · Kosmetika
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-body text-[12px] uppercase tracking-[0.1em] font-medium transition-colors duration-200 pb-0.5 ${
                pathname === l.href
                  ? "text-violet border-b-2 border-violet"
                  : "text-dark hover:text-violet"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-dark hover:text-violet transition-colors"
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
                  pathname === l.href ? "text-violet" : "text-dark hover:text-violet"
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

