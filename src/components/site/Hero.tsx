import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/brandfra-logo.png";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 size-[420px] rounded-full bg-brand-gradient opacity-20 blur-3xl animate-float-slow" />
        <div className="absolute top-32 right-[-120px] size-[480px] rounded-full bg-brand-gradient opacity-15 blur-3xl animate-float-slow" style={{ animationDelay: "2.5s" }} />
        <div className="absolute bottom-[-80px] left-1/3 size-[360px] rounded-full bg-brand-gradient opacity-10 blur-3xl animate-float-slow" style={{ animationDelay: "5s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          src={logo}
          alt="BRANDFRA logo"
          className="mx-auto mb-10 h-12 lg:h-14 w-auto"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full glass-nav px-4 py-1.5 text-xs font-medium text-primary mb-8"
        >
          <Sparkles size={14} />
          Think it. Brand it. Live it.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display font-extrabold tracking-[-0.04em] text-[clamp(2.75rem,8vw,7rem)] leading-[0.95]"
        >
          <span className="block text-foreground">WE MAKE YOU</span>
          <span className="block text-gradient">VISIBLE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-8 max-w-2xl text-balance text-lg lg:text-xl text-muted-foreground"
        >
          The Complete Branding & Growth Partner for Businesses and Individuals.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-3 max-w-xl text-sm lg:text-base text-muted-foreground/80"
        >
          We help founders, executives, professionals, and enterprises become impossible to ignore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px]"
          >
            <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition" />
            Book Your Brand Visibility Audit
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full glass-nav px-6 py-3.5 text-sm font-semibold text-primary hover:bg-secondary transition"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
