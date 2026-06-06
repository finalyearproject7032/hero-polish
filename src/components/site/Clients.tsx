const clients = ["TechSHA", "SYLORA AI", "ATS Verify", "Vibe", "Brandfra"];

export function Clients() {
  const row = [...clients, ...clients, ...clients, ...clients];
  return (
    <section id="clients" className="py-24 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Clients</p>
        <h2 className="mt-4 font-display font-extrabold tracking-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
          Trusted By Visionary Brands
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          We've helped founders, startups, and enterprises become impossible to ignore.
        </p>
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex w-max animate-marquee gap-16 px-8">
          {row.map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[200px] h-20 rounded-2xl border border-border bg-white shadow-card px-8"
            >
              <span className="font-display font-extrabold text-xl tracking-tight text-gradient whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
