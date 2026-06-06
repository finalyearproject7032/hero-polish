import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Clients", href: "#clients" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={false}
        animate={{
          width: scrolled ? "min(900px, 96%)" : "min(1100px, 100%)",
          paddingTop: scrolled ? 10 : 14,
          paddingBottom: scrolled ? 10 : 14,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className={`relative flex items-center justify-between rounded-full px-5 transition-colors glass-nav shadow-soft ${
          scrolled ? "" : "lg:bg-transparent lg:shadow-none lg:backdrop-blur-0"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 font-extrabold tracking-tight text-[1.05rem]">
          <span className="inline-block size-7 rounded-lg bg-brand-gradient shadow-glow" />
          <span className="text-gradient">BRANDFRA</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1 relative">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  onClick={() => setActive(l.href)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navlamp"
                      className="absolute inset-0 -z-10 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {l.label}
                  {isActive && (
                    <span className="absolute left-1/2 -top-1.5 -translate-x-1/2 h-1 w-8 rounded-full bg-brand-gradient blur-[2px]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition"
          >
            Book Audit
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center size-9 rounded-full glass-nav"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden absolute top-[calc(100%+8px)] left-0 right-0 glass-nav rounded-2xl p-3 shadow-soft"
            >
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block text-center rounded-full bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-primary-foreground"
                  >
                    Book Your Audit
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
