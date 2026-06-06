import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type Pkg = {
  name: string;
  features?: string[];
  description?: string;
  price: string;
  popular?: boolean;
};

type Category = {
  title: string;
  subtitle?: string;
  packages: Pkg[];
};

const categories: Category[] = [
  {
    title: "Management Packages",
    subtitle: "End-to-end execution across your highest-leverage channels.",
    packages: [
      {
        name: "Google Services",
        features: ["Google SEO", "Google Business Profile (GMB) Content", "Blog Management", "Google Analytics Setup & Reporting"],
        price: "₹50,000 – ₹1,50,000",
      },
      {
        name: "Social Media Management",
        features: ["Social Media Strategy", "Content Creation", "Reels Production", "Branding & Engagement"],
        price: "₹30,000 – ₹50,000",
      },
      {
        name: "Content Management",
        features: ["Content Strategy", "Content Creation", "Reels & Short-form Content", "Content Calendar Management"],
        price: "Custom Pricing",
      },
      {
        name: "Complete Digital Presence",
        features: ["Google Services", "Social Media Management", "Content Management", "Unified Digital Strategy"],
        price: "₹2,00,000",
        popular: true,
      },
      {
        name: "Digital Presentation",
        features: ["Dedicated Account Manager", "Website Development Support", "Instagram Management", "Content & Engagement Handling"],
        price: "₹15,000 – ₹30,000",
      },
      {
        name: "Digital Office",
        features: ["AI Automation Solutions", "Workflow Optimization", "Custom Digital Systems", "Business Process Automation"],
        price: "Custom Pricing",
      },
    ],
  },
  {
    title: "Action Plans",
    subtitle: "Targeted campaigns engineered for measurable growth.",
    packages: [
      {
        name: "Digital Outreach Plan",
        features: ["Audience Growth Strategy", "Lead Generation Planning", "Outreach Campaign Design"],
        price: "Custom Pricing",
      },
      {
        name: "Office Outreach Plan",
        features: ["Local Marketing Strategy", "Offline Client Engagement Plan", "Community Outreach Framework"],
        price: "Custom Pricing",
      },
      {
        name: "Performance Marketing",
        features: ["Paid Ads Strategy", "Lead Generation Campaigns", "Conversion Optimization", "ROI Tracking"],
        price: "Custom Pricing",
      },
    ],
  },
  {
    title: "Brand Foundations",
    subtitle: "Identity, PR, and long-term brand stewardship.",
    packages: [
      {
        name: "Branding Kit",
        features: ["Logo Design", "Brand Profile Development", "Brand Guidelines", "Color Palette Creation"],
        price: "₹10,000 – ₹15,000",
      },
      {
        name: "PR Management",
        description: "Professional public relations management and media outreach services.",
        price: "Custom Pricing",
      },
      {
        name: "Brand Management",
        description: "Strategic consulting and long-term brand development support.",
        price: "₹35,000 – ₹50,000",
      },
    ],
  },
];

function scrollToContact() {
  const el = document.getElementById("consultation");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function PackageCard({ pkg, index }: { pkg: Pkg; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -8 }}
      className={`group relative flex flex-col rounded-3xl border bg-white p-7 shadow-card transition ${
        pkg.popular ? "border-primary/40 ring-2 ring-primary/20" : "border-border"
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white shadow-glow">
            <Sparkles className="h-3 w-3" /> Most Popular
          </span>
        </div>
      )}

      <h3 className="font-display text-xl font-bold text-foreground">{pkg.name}</h3>

      {pkg.description && (
        <p className="mt-3 text-sm text-muted-foreground">{pkg.description}</p>
      )}

      {pkg.features && (
        <ul className="mt-5 space-y-3">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-7 flex-1" />

      <div className="mt-2">
        <div className="rounded-2xl border border-border bg-secondary/60 px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Investment</p>
          <p className="mt-1 font-display text-lg font-bold text-gradient">{pkg.price}</p>
        </div>
        <Button
          onClick={scrollToContact}
          className={`mt-4 w-full ${pkg.popular ? "bg-brand-gradient hover:opacity-95" : ""}`}
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
}

export function Packages() {
  return (
    <section id="packages" className="relative py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Pricing & Packages</p>
          <h2 className="mt-4 font-display font-extrabold tracking-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            Digital Marketing Agency <span className="text-gradient">Services & Packages</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Choose the right digital marketing solution for your business. From branding and social media management to complete digital presence, we provide scalable solutions for every stage of growth.
          </p>
        </div>

        {categories.map((cat) => (
          <div key={cat.title} className="mt-20">
            <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">{cat.title}</h3>
                {cat.subtitle && <p className="mt-2 text-muted-foreground max-w-2xl">{cat.subtitle}</p>}
              </div>
              <div className="hidden md:block h-px flex-1 ml-8 bg-gradient-to-r from-border to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.packages.map((p, i) => (
                <PackageCard key={p.name} pkg={p} index={i} />
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-24 relative overflow-hidden rounded-3xl bg-brand-gradient p-10 md:p-16 text-center shadow-glow">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
          <div className="relative">
            <h3 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Ready to Grow Your Brand?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-white/85 text-lg">
              Let's discuss your goals and create a customized digital marketing strategy for your business.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="mt-8 bg-white text-primary hover:bg-white/90 px-8 h-12 text-base font-semibold"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
