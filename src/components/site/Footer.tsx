export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 font-extrabold tracking-tight text-lg">
              <span className="inline-block size-7 rounded-lg bg-brand-gradient shadow-glow" />
              <span className="text-gradient">BRANDFRA</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              The Complete Visibility & Growth Partner. We make ambitious brands impossible to ignore.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#work" className="hover:text-primary">Our Work</a>
            <a href="#clients" className="hover:text-primary">Clients</a>
            <a href="#testimonials" className="hover:text-primary">Testimonials</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
        </div>
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} BRANDFRA. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Think it · Brand it · Live it</p>
        </div>
      </div>
    </footer>
  );
}
