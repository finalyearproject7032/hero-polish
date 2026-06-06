import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { User, Building2, Megaphone, FileText, Search, BarChart3, Magnet, Cpu } from "lucide-react";

const pillars = [
  { icon: User, label: "Founder Branding" },
  { icon: Building2, label: "Business Branding" },
  { icon: Megaphone, label: "PR & Media" },
  { icon: FileText, label: "Content Systems" },
  { icon: Search, label: "SEO" },
  { icon: BarChart3, label: "Performance Marketing" },
  { icon: Magnet, label: "Lead Generation" },
  { icon: Cpu, label: "AI Automation" },
];

const metrics = [
  { v: 25000, suffix: "+", label: "Leads Generated" },
  { v: 480, suffix: "+", label: "Campaigns Managed" },
  { v: 120, suffix: "+", label: "Brands Built" },
  { v: 350, suffix: "+", label: "PR Features" },
  { v: 42, suffix: "M+", label: "Revenue Generated" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1800;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export function WhyAndMetrics() {
  return (
    <>
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Why BRANDFRA</p>
              <h2 className="mt-4 font-display font-extrabold tracking-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
                A single partner for every<br /> layer of visibility.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-md">
                We replace the agency stack with one calibrated team that engineers brand, demand, and growth in lockstep.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-card hover:shadow-glow hover:-translate-y-0.5 transition"
                >
                  <div className="size-10 rounded-xl grid place-items-center bg-secondary text-primary group-hover:bg-brand-gradient group-hover:text-primary-foreground transition">
                    <p.icon size={18} />
                  </div>
                  <span className="font-semibold text-sm">{p.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-hero">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Growth Metrics</p>
            <h2 className="mt-4 font-display font-extrabold tracking-tight text-[clamp(1.75rem,4vw,3rem)] leading-[1.05]">
              Numbers we've put on the board.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-3xl glass shadow-soft p-6 lg:p-8 text-center">
                <div className="font-display font-extrabold text-3xl lg:text-5xl text-gradient tracking-tight">
                  <Counter to={m.v} suffix={m.suffix} />
                </div>
                <div className="mt-2 text-xs lg:text-sm font-medium text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
