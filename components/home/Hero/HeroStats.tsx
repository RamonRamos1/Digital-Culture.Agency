import {
  Megaphone,
  MonitorSmartphone,
  Bot,
  ShoppingCart,
} from "lucide-react";

const ITEMS = [
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Google Ads · Meta Ads",
  },
  {
    icon: MonitorSmartphone,
    title: "Software",
    description: "Web · CRM · ERP",
  },
  {
    icon: Bot,
    title: "Automatización",
    description: "IA · Bots · APIs",
  },
  {
    icon: ShoppingCart,
    title: "Marketplace",
    description: "Mercado Libre",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4">
      {ITEMS.map((item) => (
        <div
          key={item.title}
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-sm
            p-5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-dc-blue/40
            hover:bg-dc-blue/5
          "
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-dc-blue/10">
            <item.icon
              size={22}
              className="text-dc-blue"
              strokeWidth={1.8}
            />
          </div>

          <h3 className="font-display text-sm font-semibold">
            {item.title}
          </h3>

          <p className="mt-2 text-xs leading-6 text-dc-muted">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}