import { motion } from "framer-motion";
import founder from "@/assets/services/founder.asset.json";
import business from "@/assets/services/business.asset.json";
import seo from "@/assets/services/seo.asset.json";
import content from "@/assets/services/content.asset.json";
import pr from "@/assets/services/pr.asset.json";
import performance from "@/assets/services/performance.asset.json";
import leads from "@/assets/services/leads.asset.json";
import ai from "@/assets/services/ai.asset.json";

const services = [
  { img: founder.url, name: "Founder Branding", desc: "Engineer authority for founders & executives." },
  { img: business.url, name: "Business Branding", desc: "Identity systems that command premium trust." },
  { img: seo.url, name: "SEO", desc: "Rank, dominate, and own your category in search." },
  { img: content.url, name: "Content Strategy", desc: "Editorial systems that compound attention." },
  { img: pr.url, name: "PR & Media", desc: "Earn coverage in publications that matter." },
  { img: performance.url, name: "Performance Marketing", desc: "Paid systems that turn spend into revenue." },
  { img: leads.url, name: "Lead Generation", desc: "Predictable pipelines of qualified buyers." },
  { img: ai.url, name: "AI Automation", desc: "Intelligent systems that scale growth on autopilot." },
];

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-brand-mist/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Services</p>
          <h2 className="mt-4 font-display font-extrabold tracking-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            Services We Offer
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Eight disciplines, one growth engine — engineered to make ambitious brands impossible to ignore.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-card border border-border transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(30,58,138,0.15),0_12px_40px_-8px_rgba(30,58,138,0.12)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-center transition-transform duration-700 group-hover:scale-105 object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-foreground">{s.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-inset ring-primary/20" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
