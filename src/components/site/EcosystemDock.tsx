import { motion, useMotionValue, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { User, Building2, Search, FileText, Megaphone, BarChart3, Magnet, TrendingUp } from "lucide-react";

const items = [
  { icon: User, label: "Founder Branding" },
  { icon: Building2, label: "Business Branding" },
  { icon: Search, label: "SEO" },
  { icon: FileText, label: "Content" },
  { icon: Megaphone, label: "PR" },
  { icon: BarChart3, label: "Performance Marketing" },
  { icon: Magnet, label: "Lead Generation" },
  { icon: TrendingUp, label: "Business Growth" },
];

function DockItem({ mx, icon: Icon, label }: { mx: MotionValue<number>; icon: typeof User; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mx, (v) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return 9999;
    return v - (rect.x + rect.width / 2);
  });
  const size = useTransform(distance, [-140, 0, 140], [56, 88, 56]);

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        className="grid place-items-center rounded-2xl bg-white shadow-card border border-border"
      >
        <Icon className="text-primary" />
      </motion.div>
      <span className="text-[10px] lg:text-xs font-medium text-muted-foreground text-center max-w-[90px]">{label}</span>
    </div>
  );
}

export function EcosystemDock() {
  const mx = useMotionValue(Infinity);
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">The Ecosystem</p>
        <h2 className="mt-4 font-display font-extrabold tracking-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
          Everything Your Brand Needs.<br />
          <span className="text-gradient">One Growth Ecosystem.</span>
        </h2>

        <div className="relative mt-16">
          <div className="absolute inset-0 bg-hero rounded-3xl -z-10" />
          <motion.div
            onMouseMove={(e) => mx.set(e.clientX)}
            onMouseLeave={() => mx.set(Infinity)}
            className="mx-auto flex items-end justify-center gap-3 lg:gap-5 px-4 py-10 overflow-x-auto"
          >
            {items.map((it) => (
              <DockItem key={it.label} mx={mx} icon={it.icon} label={it.label} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
