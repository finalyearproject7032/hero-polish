import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const items = [
  {
    name: "Rahul Sharma",
    role: "Founder, TechSHA",
    quote:
      "BRANDFRA didn't market us — they architected the entire visibility system that turned our founder story into a revenue engine. We tripled inbound in a single quarter.",
  },
  {
    name: "Ananya Reddy",
    role: "CEO, SYLORA AI",
    quote:
      "Working with BRANDFRA feels like having an in-house growth, brand, and PR team operating with SaaS-level precision. Nothing they touch feels generic.",
  },
  {
    name: "Karthik Varma",
    role: "Director, ATS Verify",
    quote:
      "They are the rare partner who pairs editorial craft with hard performance metrics. Our enterprise pipeline now compounds month over month.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const t = items[i];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-brand-mist/40">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Testimonials</p>
        <h2 className="mt-4 font-display font-extrabold tracking-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
          What Our Clients Say
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">Real businesses. Real growth. Real results.</p>

        <div className="relative mt-14 rounded-3xl bg-white border border-border shadow-card p-10 lg:p-14 min-h-[320px]">
          <Quote className="mx-auto mb-6 text-primary" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
            >
              <p className="font-display text-xl lg:text-2xl leading-snug tracking-tight text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-3">
            <button onClick={prev} aria-label="Previous" className="size-10 rounded-full border border-border grid place-items-center hover:bg-secondary transition">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-brand-gradient" : "w-1.5 bg-border"}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="size-10 rounded-full border border-border grid place-items-center hover:bg-secondary transition">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
