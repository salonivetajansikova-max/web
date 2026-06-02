export default function StatBlock({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center px-6">
      <div className="font-body font-medium text-[56px] leading-none text-violet font-light">{number}</div>
      <div className="text-[11px] uppercase tracking-[0.15em] font-body text-gray mt-2">{label}</div>
    </div>
  );
}

