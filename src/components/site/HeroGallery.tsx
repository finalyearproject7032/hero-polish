import { lazy, Suspense } from "react";
import g1 from "@/assets/gallery/g1.webp.asset.json";
import g2 from "@/assets/gallery/g2.webp.asset.json";
import g3 from "@/assets/gallery/g3.webp.asset.json";
import g4 from "@/assets/gallery/g4.webp.asset.json";
import g5 from "@/assets/gallery/g5.webp.asset.json";
import g6 from "@/assets/gallery/g6.webp.asset.json";
import g7 from "@/assets/gallery/g7.webp.asset.json";
import g8 from "@/assets/gallery/g8.webp.asset.json";
import g9 from "@/assets/gallery/g9.webp.asset.json";
import g10 from "@/assets/gallery/g10.webp.asset.json";
import g11 from "@/assets/gallery/g11.webp.asset.json";

const InfiniteGallery = lazy(() => import("@/components/ui/3d-gallery-photography"));

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11].map((a) => ({
  src: a.url,
  alt: a.original_filename,
}));

export function HeroGallery() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[620px] overflow-hidden bg-white"
    >
      <div className="absolute inset-0">
        <Suspense fallback={<div className="h-full w-full bg-white" />}>
          <InfiniteGallery
            images={images}
            visibleCount={9}
            className="h-full w-full"
          />
        </Suspense>
      </div>

      {/* Soft white vignette to keep text readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.7) 100%)",
        }}
      />

      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-neutral-600">
          Your Digital Growth Partner
        </p>
        <h1 className="mt-4 font-display font-extrabold tracking-[-0.045em] text-neutral-900 text-[clamp(2.75rem,9vw,8rem)] leading-[0.9]">
          We make you <span className="text-gradient">visible.</span>
        </h1>
        <p className="mt-5 text-sm sm:text-base font-medium tracking-wide text-neutral-700">
          Branding · Marketing · Automation
        </p>

        <div className="pointer-events-auto mt-10">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:translate-y-[-1px] transition"
          >
            Explore Services
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-10 flex justify-center">
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-neutral-600">
          ↓ Scroll to Explore
        </p>
      </div>
    </section>
  );
}

export default HeroGallery;
