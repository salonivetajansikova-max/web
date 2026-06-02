import Link from "next/link";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "outline" | "solid" | "outline-white";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  onClick,
  variant = "outline",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-block text-[12px] uppercase tracking-[0.1em] font-body font-medium px-9 py-3.5 transition-all duration-200 cursor-pointer";

  const variants = {
    outline:
      "border border-violet text-violet hover:bg-violet hover:text-white",
    solid:
      "bg-violet text-white border border-violet hover:bg-[#7A6A97] hover:border-[#7A6A97]",
    "outline-white":
      "border border-white text-white hover:bg-white hover:text-dark",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
