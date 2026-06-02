# Iveta Jansíková — Web salónu

Prezentační web pro soukromý kosmetický salón Ivety Jansíkové ve Světlé nad Sázavou.

## Technologie

- **Next.js 16** (App Router)
- **Tailwind CSS 4**
- **TypeScript**
- **Lucide React** (ikony)
- **Google Fonts** — Cormorant Garamond (nadpisy) + DM Sans (text)

## Spuštění lokálně

```bash
cd iveta-jansikova
npm install
npm run dev
```

Web běží na [http://localhost:3000](http://localhost:3000)

## Struktura projektu

```
iveta-jansikova/
├── app/
│   ├── layout.tsx                  # Root layout (Navbar + Footer)
│   ├── globals.css                 # Barvy, fonty
│   ├── page.tsx                    # Homepage
│   ├── sluzby/page.tsx             # Stránka služeb
│   ├── cenik/page.tsx              # Ceník
│   ├── o-mne/page.tsx              # O mně
│   ├── kontakt/page.tsx            # Kontakt + mapa
│   └── lektorska-draha/page.tsx   # Lektorská dráha (Royal Academy)
├── components/
│   ├── Navbar.tsx                  # Navigace (sticky, hamburger na mobilu)
│   └── Footer.tsx                  # Patička
└── public/
    └── images/
        └── iveta.jpg               # Portrét Ivety (O mně stránka)
```

## Stránky

| Stránka | URL | Popis |
|---------|-----|-------|
| Úvod | `/` | Hero, benefity, přehled služeb, Royal Academy blok |
| Služby | `/sluzby` | Detailní popis každé služby |
| Ceník | `/cenik` | Kompletní ceník s anchor navigací |
| O mně | `/o-mne` | Bio, certifikáty, produkty CHRISTINA a KART |
| Kontakt | `/kontakt` | Adresa, telefon, email, Google Maps |
| Lektorská dráha | `/lektorska-draha` | Kurzy na Royal Academy v Jihlavě |

## Barevná paleta

| Název | Hex | Použití |
|-------|-----|---------|
| Cream | `#FAF7F4` | Pozadí stránek |
| Blush | `#E8D5C4` | Zvýrazněné sekce |
| Rose | `#C4956A` | Tlačítka, akcenty |
| Dark | `#1a1210` | Nadpisy, hlavní text |
| Muted | `#5C4A42` | Popisné texty |

## Kontakt salónu

- **Adresa:** Revoluční 49, 582 91 Světlá nad Sázavou
- **Telefon:** 736 401 118
- **Email:** iveta.jansikova@seznam.cz

## Nasazení (Vercel)

1. Založ GitHub repozitář a pushni kód
2. Na [vercel.com](https://vercel.com) propoj GitHub repo
3. Vercel automaticky detekuje Next.js a nasadí web
4. Přidej vlastní doménu v nastavení projektu

## Co ještě doplnit před spuštěním

- [ ] Vlastní hero fotka (zatím placeholder z Unsplash)
- [ ] Fotky interiéru salónu
- [ ] Otevírací doba (zjistit od Ivety)
- [ ] Sociální sítě (pokud má)
- [ ] Případně logo salónu

## Podklady

Původní podklady (ceníky, certifikáty, fotky) jsou ve složce `../podklady/`.
