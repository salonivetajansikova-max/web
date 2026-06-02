export default function SectionLabel({ text, light = false, white = false }: { text: string; light?: boolean; white?: boolean }) {
  return (
    <p
      className={`text-[11px] uppercase tracking-[0.2em] font-body font-medium mb-3 ${
        white ? "text-white" : light ? "text-violet-light" : "text-violet"
      }`}
    >
      — {text} —
    </p>
  );
}
