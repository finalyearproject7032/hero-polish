import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-gradient px-8 py-20 lg:py-28 text-center shadow-glow">
          <div aria-hidden className="pointer-events-none absolute inset-0 grid place-items-center">
            <span className="absolute size-40 rounded-full border border-white/30 animate-pulse-ring" />
            <span className="absolute size-40 rounded-full border border-white/30 animate-pulse-ring" style={{ animationDelay: "1s" }} />
            <span className="absolute size-40 rounded-full border border-white/30 animate-pulse-ring" style={{ animationDelay: "2s" }} />
          </div>
          <div className="relative">
            <h2 className="font-display font-extrabold tracking-tight text-white text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1]">
              Let's Build Your Brand.
            </h2>
            <p className="mt-5 text-white/85 text-lg max-w-xl mx-auto">
              Grow Your Business 3X Faster with the complete visibility & growth partner.
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary hover:bg-white/95 transition"
              >
                Book Your Brand Visibility Audit
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
            </div>
            <p className="mt-6 text-xs text-white/70 tracking-[0.18em] uppercase">
              Branding • PR • SEO • Content • Paid Ads
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
