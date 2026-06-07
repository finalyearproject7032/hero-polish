import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, X } from "lucide-react";
import whatsmarketing from "@/assets/case-studies/cs_whatsmarketing.asset.json";
import hanz from "@/assets/case-studies/cs_hanz.asset.json";
import dayschedule from "@/assets/case-studies/cs_dayschedule.asset.json";
import hashtechinfo from "@/assets/case-studies/cs_hashtechinfo.asset.json";

type Study = {
  client: string;
  industry: string;
  description: string;
  results: { icon: string; label: string }[];
  pdf: string;
  accent: string;
};

const studies: Study[] = [
  {
    client: "WhatsMarketing",
    industry: "B2B SaaS Marketing",
    description:
      "Generated a predictable pipeline of product demo bookings through targeted campaigns and conversion-focused funnel optimization.",
    results: [
      { icon: "🎯", label: "1,979 Product Demos" },
      { icon: "💰", label: "₹147 Cost Per Lead" },
      { icon: "📈", label: "₹2.9L Budget Managed" },
    ],
    pdf: whatsmarketing.url,
    accent: "from-blue-500/30 to-purple-500/30",
  },
  {
    client: "HANZ",
    industry: "IT Services & App Development",
    description:
      "Built a reliable lead generation system for a US-based technology company to create consistent business opportunities.",
    results: [
      { icon: "🇺🇸", label: "6 Qualified US Appointments" },
      { icon: "📈", label: "20% Conversion Rate" },
      { icon: "💰", label: "₹12,000 Campaign Budget" },
    ],
    pdf: hanz.url,
    accent: "from-cyan-500/30 to-blue-500/30",
  },
  {
    client: "DaySchedule",
    industry: "Appointment Scheduling Software",
    description:
      "Improved messaging, optimized the landing page, and implemented a structured lead generation funnel for a SaaS platform.",
    results: [
      { icon: "🎯", label: "11 Product Demos" },
      { icon: "💰", label: "₹393 Cost Per Lead" },
      { icon: "👥", label: "6 Paying Customers" },
    ],
    pdf: dayschedule.url,
    accent: "from-purple-500/30 to-pink-500/30",
  },
  {
    client: "HashTechInfo",
    industry: "Career Services & Job Placement",
    description:
      "Created a scalable appointment-generation system that delivered qualified prospects directly into the sales pipeline.",
    results: [
      { icon: "📞", label: "26 Qualified Appointments" },
      { icon: "💰", label: "₹350 Per Appointment" },
      { icon: "🚀", label: "2–3 Converted Clients" },
    ],
    pdf: hashtechinfo.url,
    accent: "from-emerald-500/30 to-cyan-500/30",
  },
];

export function CaseStudies() {
  const [active, setActive] = useState<Study | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="work" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Case Studies</p>
          <h2 className="mt-4 font-display font-extrabold tracking-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            Proven Results
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Real campaigns. Real businesses. Real growth.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {studies.map((s, i) => (
            <motion.article
              key={s.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-card transition-all duration-300 hover:shadow-glow"
            >
              <div className={`pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700`} />
              <div className="relative">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-primary uppercase">
                  {s.industry}
                </p>
                <h3 className="mt-2 font-display font-extrabold text-2xl lg:text-3xl tracking-tight">
                  {s.client}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {s.results.map((r) => (
                    <li
                      key={r.label}
                      className="flex items-center gap-3 rounded-xl bg-secondary/60 px-3.5 py-2.5 text-sm font-semibold text-foreground"
                    >
                      <span className="text-base">{r.icon}</span>
                      {r.label}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setActive(s)}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px]"
                >
                  View Case Study
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="relative flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-primary uppercase">
                    {active.industry}
                  </p>
                  <h4 className="font-display font-bold text-lg">{active.client}</h4>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={active.pdf}
                    download
                    className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary/70 transition"
                  >
                    <Download size={14} /> Download
                  </a>
                  <button
                    onClick={() => setActive(null)}
                    aria-label="Close"
                    className="inline-flex size-9 items-center justify-center rounded-full bg-secondary hover:bg-secondary/70 transition"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
              <iframe
                src={`${active.pdf}#view=FitH`}
                title={`${active.client} case study`}
                className="h-full w-full flex-1 bg-neutral-100"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
