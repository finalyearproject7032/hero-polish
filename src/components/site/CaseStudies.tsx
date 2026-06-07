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
    accent: "from-indigo-600 via-blue-600 to-violet-600",
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
    accent: "from-cyan-500 via-sky-600 to-blue-700",
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
    accent: "from-fuchsia-600 via-purple-600 to-pink-600",
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
    accent: "from-emerald-500 via-teal-600 to-cyan-700",
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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-7">
          {studies.map((s, i) => (
            <motion.article
              key={s.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl p-[1.5px] shadow-card transition-all duration-500 hover:shadow-[0_24px_60px_-12px_rgba(15,23,42,0.35)]"
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${s.accent} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* Inner card */}
              <div className="relative h-full rounded-[calc(1.5rem-1.5px)] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 overflow-hidden">
                {/* Glow orb */}
                <div className={`pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-gradient-to-br ${s.accent} opacity-40 group-hover:opacity-70 blur-3xl transition-all duration-700`} />
                {/* Subtle grid pattern */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:24px_24px]" />

                <div className="relative">
                  <div className="flex items-center gap-2">
                    <span className={`inline-block size-1.5 rounded-full bg-gradient-to-r ${s.accent}`} />
                    <p className="text-[10px] font-semibold tracking-[0.22em] text-white/70 uppercase">
                      {s.industry}
                    </p>
                  </div>
                  <h3 className="mt-3 font-display font-extrabold text-3xl lg:text-4xl tracking-tight text-white">
                    {s.client}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    {s.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-1 gap-2">
                    {s.results.map((r) => (
                      <li
                        key={r.label}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-sm px-3.5 py-2.5 text-sm font-semibold text-white/95 transition-colors group-hover:border-white/20 group-hover:bg-white/[0.09]"
                      >
                        <span className="text-base">{r.icon}</span>
                        {r.label}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setActive(s)}
                    className={`mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${s.accent} px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] transition-all hover:translate-y-[-1px] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)]`}
                  >
                    View Case Study
                    <ArrowRight size={16} />
                  </button>
                </div>
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
