import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

export function Consultation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Avoid duplicate script
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://static-bundles.visme.co/forms/vismeforms-embed.js"]',
    );

    const handleLoaded = () => setLoading(false);

    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
      s.async = true;
      s.onload = handleLoaded;
      document.body.appendChild(s);
    } else {
      // script already there — give Visme a tick to render
      setTimeout(handleLoaded, 800);
    }

    // Fallback: hide spinner after 4s even if no callback
    const t = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="consultation" className="py-24 lg:py-32 bg-brand-mist/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Contact</p>
          <h2 className="mt-4 font-display font-extrabold tracking-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            Get a Free <span className="text-gradient">Consultation</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Tell us about your business goals and our team will get back to you with a customized digital marketing strategy.
          </p>
        </div>

        <div className="mx-auto mt-14 w-full max-w-[900px]">
          <div className="relative rounded-3xl border border-border bg-white p-4 md:p-6 shadow-card">
            {loading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-3xl bg-white/80 backdrop-blur-sm">
                <Loader2 className="h-7 w-7 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Loading form…</p>
              </div>
            )}
            <div ref={containerRef} className="min-h-[600px]">
              <div
                className="visme_d"
                data-title="Custom Contact Form"
                data-url="nmnewr83-custom-contact-form?sidebar=true"
                data-domain="forms"
                data-full-page="false"
                data-min-height="600px"
                data-form-id="184395"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
