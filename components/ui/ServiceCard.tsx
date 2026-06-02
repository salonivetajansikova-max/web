import Link from "next/link";
import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <div className="bg-white border border-border p-8 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300">
      <Icon size={28} strokeWidth={1} className="text-violet mb-5" />
      <h3 className="font-body font-medium text-[18px] text-dark mb-3">{title}</h3>
      <p className="font-body text-[14px] text-gray leading-relaxed mb-5">{description}</p>
      <Link href={href} className="text-[13px] text-violet font-body font-medium hover:underline">
        Zobrazit ceník →
      </Link>
    </div>
  );
}
