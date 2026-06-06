import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const cases = [
  {
    brand: "TechSHA",
    title: "Scaled founder authority into a $4M pipeline",
    challenge: "Unknown founder in a noisy AI category with zero inbound.",
    strategy: "Founder-led thought leadership + LinkedIn engine + PR placements.",
    execution: "Editorial calendar, 12 PR features, sales-aligned content engine.",
    metrics: [
      { v: 412, suffix: "%", label: "Inbound Growth" },
      { v: 87, suffix: "", label: "Qualified Leads / mo" },
      { v: 4, suffix: "M+", label: "Pipeline Generated" },
    ],
    result: "Became the most-quoted founder in their category within 6 months.",
  },
  {
    brand: "SYLORA AI",
    title: "0 to category leader in 9 months",
    challenge: "Stealth AI startup needing rapid market positioning.",
    strategy: "Narrative architecture + SEO topical authority + paid acceleration.",
    execution: "Full website rebuild, 180 cornerstone articles, performance funnels.",
    metrics: [
      { v: 320, suffix: "K", label: "Monthly Organic" },
      { v: 6, suffix: "x", label: "CAC Efficiency" },
      { v: 1, suffix: ".8M", label: "ARR Added" },
    ],
    result: "Acquired 1,800 paying customers and Series A momentum.",
  },
  {
    brand: "ATS Verify",
    title: "Built a verified-trust brand at enterprise scale",
    challenge: "Crowded HR-tech market with low trust signals.",
    strategy: "Trust ecosystem: PR + case studies + executive branding.",
    execution: "C-suite content, 28 enterprise case studies, retargeting engine.",
    metrics: [
      { v: 9, suffix: "x", label: "Demo Conversions" },
      { v: 240, suffix: "%", label: "Enterprise Pipeline" },
      { v: 32, suffix: "", label: "Tier-1 Press Features" },
    ],
    result: "Closed three Fortune 500 contracts within two quarters.",
  },
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
          const dur = 1400;
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
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref} className="font-display font-extrabold text-3xl lg:text-4xl text-gradient">
      {val}
      {suffix}
    </span>
  );
}

export function CaseStudies() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Case Studies</p>
          <h2 className="mt-4 font-display font-extrabold tracking-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            Real Work. Real Numbers.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Selected engagements where visibility translated into measurable revenue.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.brand}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white shadow-card p-8 lg:p-12 transition hover:shadow-glow"
            >
              <div className="absolute -right-32 -top-32 size-96 rounded-full bg-brand-gradient opacity-0 group-hover:opacity-10 blur-3xl transition duration-700" />
              <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">{c.brand}</p>
                  <h3 className="mt-3 font-display font-bold text-2xl lg:text-3xl tracking-tight leading-tight">
                    {c.title}
                  </h3>
                  <dl className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-4 text-sm">
                    {[
                      ["Challenge", c.challenge],
                      ["Strategy", c.strategy],
                      ["Execution", c.execution],
                      ["Result", c.result],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{k}</dt>
                        <dd className="mt-1 text-foreground/85 leading-relaxed">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="flex lg:flex-col gap-6 lg:gap-4 lg:min-w-[200px] lg:pl-8 lg:border-l border-border">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <Counter to={m.v} suffix={m.suffix} />
                      <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
