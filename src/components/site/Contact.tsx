import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent, type ReactNode } from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

const whoOptions = ["Founder", "Startup", "Business", "Enterprise"];
const budgetOptions = ["< $2K / mo", "$2K – $5K / mo", "$5K – $15K / mo", "$15K+ / mo"];
const serviceOptions = [
  "Founder Branding", "Business Branding", "SEO", "Content",
  "PR & Media", "Performance Marketing", "Lead Generation", "AI Automation",
];

export function Contact() {
  const [step, setStep] = useState(0);
  const [who, setWho] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [services, setServices] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const toggleService = (s: string) =>
    setServices((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const canNext =
    (step === 0 && who) ||
    (step === 1 && budget) ||
    (step === 2 && services.length > 0) ||
    (step === 3 && name && email);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-brand-mist/40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Contact</p>
          <h2 className="mt-4 font-display font-extrabold tracking-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            Book your strategy call.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Four quick steps. We'll review your brand and reply within 24 hours.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-white border border-border shadow-card p-6 lg:p-10">
          <div className="flex items-center gap-2 mb-8">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex-1">
                <div className={`h-1.5 rounded-full transition-all ${i <= step ? "bg-brand-gradient" : "bg-border"}`} />
              </div>
            ))}
          </div>

          {done ? (
            <div className="text-center py-14">
              <div className="mx-auto size-14 rounded-full bg-brand-gradient grid place-items-center text-primary-foreground">
                <Check />
              </div>
              <h3 className="mt-6 font-display font-bold text-2xl">You're on the list.</h3>
              <p className="mt-2 text-muted-foreground">A BRANDFRA strategist will reach out within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                >
                  {step === 0 && (
                    <div>
                      <Label index={1} title="Who are you?" />
                      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
                        {whoOptions.map((o) => (
                          <Option key={o} selected={who === o} onClick={() => setWho(o)}>{o}</Option>
                        ))}
                      </div>
                    </div>
                  )}
                  {step === 1 && (
                    <div>
                      <Label index={2} title="Monthly budget" />
                      <div className="mt-6 grid sm:grid-cols-2 gap-3">
                        {budgetOptions.map((o) => (
                          <Option key={o} selected={budget === o} onClick={() => setBudget(o)}>{o}</Option>
                        ))}
                      </div>
                    </div>
                  )}
                  {step === 2 && (
                    <div>
                      <Label index={3} title="Services you need" sub="Select all that apply" />
                      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {serviceOptions.map((o) => (
                          <Option key={o} selected={services.includes(o)} onClick={() => toggleService(o)}>{o}</Option>
                        ))}
                      </div>
                    </div>
                  )}
                  {step === 3 && (
                    <div>
                      <Label index={4} title="Book your strategy call" />
                      <div className="mt-6 grid sm:grid-cols-2 gap-4">
                        <input
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Full name"
                          className="rounded-xl border border-border bg-white px-4 py-3.5 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition"
                        />
                        <input
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Work email"
                          className="rounded-xl border border-border bg-white px-4 py-3.5 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex items-center justify-between">
                <button
                  type="button"
                  disabled={step === 0}
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-muted-foreground disabled:opacity-30 hover:text-foreground transition"
                >
                  <ArrowLeft size={16} /> Back
                </button>
                {step < 3 ? (
                  <button
                    type="button"
                    disabled={!canNext}
                    onClick={() => setStep((s) => s + 1)}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >
                    Continue <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!canNext}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-40 transition"
                  >
                    Book Audit <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Label({ index, title, sub }: { index: number; title: string; sub?: string }) {
  return (
    <div>
      <div className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Step {index} / 4</div>
      <h3 className="mt-2 font-display font-bold text-2xl lg:text-3xl tracking-tight">{title}</h3>
      {sub && <p className="mt-1 text-sm text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Option({ children, selected, onClick }: { children: ReactNode; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative text-left rounded-2xl border px-4 py-4 text-sm font-semibold transition ${
        selected
          ? "border-transparent bg-brand-gradient text-primary-foreground shadow-glow"
          : "border-border bg-white text-foreground hover:border-primary/40 hover:bg-secondary"
      }`}
    >
      {children}
      {selected && (
        <span className="absolute top-2.5 right-2.5 size-5 rounded-full bg-white/20 grid place-items-center">
          <Check size={12} />
        </span>
      )}
    </button>
  );
}
