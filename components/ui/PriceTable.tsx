type PriceItem = { name: string; price: string };

export default function PriceTable({ items }: { items: PriceItem[] }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gray-light">
          <th className="text-left text-[11px] uppercase tracking-[0.1em] font-body font-medium text-gray py-3 px-4">
            Služba
          </th>
          <th className="text-right text-[11px] uppercase tracking-[0.1em] font-body font-medium text-gray py-3 px-4">
            Cena
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) =>
          item.price === "" ? (
            <tr key={i} className="bg-violet-light">
              <td colSpan={2} className="py-2 px-4 font-body font-medium text-[11px] uppercase tracking-[0.15em] text-violet">
                {item.name.replace(/—/g, "").trim()}
              </td>
            </tr>
          ) : (
            <tr
              key={i}
              className="border-b border-border hover:bg-cream transition-colors"
            >
              <td className="py-3 px-4 font-body text-[15px] text-dark">{item.name}</td>
              <td className="py-3 px-4 text-right font-body font-medium text-[15px] text-violet">
                {item.price === "dle výběru" ? (
                  <span className="italic text-gray text-[14px] font-body">{item.price}</span>
                ) : (
                  item.price
                )}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
