import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import PriceTable from "@/components/ui/PriceTable";
import { pricing } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Ceník — Iveta Jansíková",
  description:
    "Aktuální ceník pedikúry, manikúry, kosmetiky, modeláže nehtů a depilace. Světlá nad Sázavou.",
};

const tabs = [
  { key: "modelaz", label: "Modeláž nehtů" },
  { key: "pedikura", label: "Pedikúra" },
  { key: "manikura", label: "Manikúra" },
  { key: "kosmetika", label: "Kosmetika" },
  { key: "depilace", label: "Depilace" },
] as const;

export default function CenikPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-10 border-t border-violet mb-4" />
          <SectionLabel text="Přehled cen" />
          <h1 className="font-body font-medium text-[clamp(36px,4vw,54px)] text-dark">Ceník služeb</h1>
          <p className="font-body text-[15px] text-gray mt-3">
            Transparentní ceny bez skrytých poplatků
          </p>
        </div>
      </section>

      {/* Sticky tabs */}
      <div className="sticky top-20 z-40 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map((tab) => (
              <a
                key={tab.key}
                href={`#${tab.key}`}
                className="font-body text-[12px] uppercase tracking-[0.08em] whitespace-nowrap px-5 py-4 text-gray hover:text-violet transition-colors border-b-2 border-transparent hover:border-violet"
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Ceník sekce */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {tabs.map((tab) => {
          const section = pricing[tab.key];
          return (
            <div key={tab.key} id={tab.key} className="scroll-mt-32">
              <div className="w-10 border-t border-violet mb-4" />
              <SectionLabel text={section.label} />
              <h2 className="font-body font-medium text-[clamp(22px,2.5vw,32px)] text-dark mb-8">
                {section.label}
              </h2>
              <PriceTable items={section.items} />
            </div>
          );
        })}
      </div>

      {/* Poznámka */}
      <section className="bg-cream py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-body text-[14px] text-gray mb-2">
            Ceny jsou uvedeny včetně DPH. Platba v hotovosti.
          </p>
          <p className="font-body text-[14px] text-gray mb-8">
            Na objednávku volejte:{" "}
            <a href="tel:736401118" className="text-violet hover:underline">
              736 401 118
            </a>
          </p>
          <Link
            href="/kontakt"
            className="inline-block font-body text-[12px] uppercase tracking-[0.1em] bg-violet text-white border border-violet px-9 py-3.5 hover:bg-[#7A6A97] transition-all duration-200"
          >
            Objednat se
          </Link>
        </div>
      </section>
    </>
  );
}


