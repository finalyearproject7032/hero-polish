"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import L00 from "@/assets/hero-cards/L00_B.asset.json";
import L01 from "@/assets/hero-cards/L01_R.asset.json";
import L02 from "@/assets/hero-cards/L02_A.asset.json";
import L03 from "@/assets/hero-cards/L03_N.asset.json";
import L04 from "@/assets/hero-cards/L04_D.asset.json";
import L05 from "@/assets/hero-cards/L05_F.asset.json";
import L06 from "@/assets/hero-cards/L06_R.asset.json";
import L07 from "@/assets/hero-cards/L07_A.asset.json";
import L08 from "@/assets/hero-cards/L08_V.asset.json";
import L09 from "@/assets/hero-cards/L09_I.asset.json";
import L10 from "@/assets/hero-cards/L10_S.asset.json";
import L11 from "@/assets/hero-cards/L11_I.asset.json";
import L12 from "@/assets/hero-cards/L12_B.asset.json";
import L13 from "@/assets/hero-cards/L13_I.asset.json";
import L14 from "@/assets/hero-cards/L14_L.asset.json";
import L15 from "@/assets/hero-cards/L15_I.asset.json";
import L16 from "@/assets/hero-cards/L16_T.asset.json";
import L17 from "@/assets/hero-cards/L17_Y.asset.json";
import L18 from "@/assets/hero-cards/L18_excl.asset.json";

export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface CardTarget {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
}

const IMG_WIDTH = 64;
const IMG_HEIGHT = 90;

function FlipCard({ src, target }: { src: string; target: CardTarget }) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 will-change-transform"
      style={{ width: IMG_WIDTH, height: IMG_HEIGHT, marginLeft: -IMG_WIDTH / 2, marginTop: -IMG_HEIGHT / 2 }}
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{ type: "spring", stiffness: 80, damping: 18, mass: 0.6 }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-white ring-2 ring-[hsl(180_95%_55%)]/70 shadow-[0_0_14px_rgba(34,211,238,0.55),0_0_28px_rgba(34,211,238,0.25)]">
        <img src={src} alt="" className="h-full w-full object-cover object-center" draggable={false} loading="eager" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-white/5" />
      </div>
    </motion.div>
  );
}

const IMAGES: string[] = [
  L00.url, L01.url, L02.url, L03.url, L04.url, L05.url, L06.url, L07.url, L08.url, L09.url,
  L10.url, L11.url, L12.url, L13.url, L14.url, L15.url, L16.url, L17.url, L18.url,
];
const TOTAL_IMAGES = IMAGES.length;
const MAX_SCROLL = 3000;

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

interface ScrollMorphHeroProps {
  eyebrow?: string;
  introTitle?: string;
  introHint?: string;
  arcTitle?: React.ReactNode;
  arcDescription?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function ScrollMorphHero({
  eyebrow = "Think it. Brand it. Live it.",
  introTitle = "We make you visible.",
  introHint = "SCROLL TO EXPLORE",
  arcTitle = (
    <>
      <span className="block text-foreground">WE MAKE YOU</span>
      <span className="block text-gradient">VISIBLE.</span>
    </>
  ),
  arcDescription = "The Complete Branding & Growth Partner for founders, executives, and enterprises ready to be impossible to ignore.",
  primaryCta = { label: "Book Your Visibility Audit", href: "#contact" },
  secondaryCta = { label: "Explore Services", href: "#services" },
}: ScrollMorphHeroProps) {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerSize({ width: entry.contentRect.width, height: entry.contentRect.height });
      }
    });
    observer.observe(el);
    setContainerSize({ width: el.offsetWidth, height: el.offsetHeight });
    return () => observer.disconnect();
  }, []);

  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (isMobile) {
      const onScroll = () => {
        const rect = container.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const progress = Math.min(Math.max(-rect.top / vh, 0), 1);
        const next = progress * MAX_SCROLL;
        scrollRef.current = next;
        virtualScroll.set(next);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const handleWheel = (e: WheelEvent) => {
      const next = scrollRef.current + e.deltaY;
      if ((e.deltaY > 0 && scrollRef.current < MAX_SCROLL) || (e.deltaY < 0 && scrollRef.current > 0)) {
        const clamped = Math.min(Math.max(next, 0), MAX_SCROLL);
        if (clamped > 0 && clamped < MAX_SCROLL) {
          e.preventDefault();
        }
        scrollRef.current = clamped;
        virtualScroll.set(clamped);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [virtualScroll, isMobile]);

  const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });
  const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const normalizedX = (relativeX / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 80);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, isMobile]);

  useEffect(() => {
    const t1 = setTimeout(() => setIntroPhase("line"), 500);
    const t2 = setTimeout(() => setIntroPhase("circle"), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const scatterPositions = useMemo(() => {
    return IMAGES.map(() => ({
      x: (Math.random() - 0.5) * 1500,
      y: (Math.random() - 0.5) * 1000,
      rotation: (Math.random() - 0.5) * 180,
      scale: 0.6,
      opacity: 0,
    }));
  }, []);

  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const u1 = smoothMorph.on("change", setMorphValue);
    const u2 = smoothScrollRotate.on("change", setRotateValue);
    const u3 = smoothMouseX.on("change", setParallaxValue);
    return () => {
      u1();
      u2();
      u3();
    };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  const introOpacity = useTransform(smoothMorph, [0, 0.4], [1, 0]);
  const introY = useTransform(smoothMorph, [0, 0.4], [0, -30]);
  const contentOpacity = useTransform(smoothMorph, [0.7, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.7, 1], [30, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className={`relative h-screen min-h-[560px] sm:min-h-[680px] w-full overflow-hidden bg-hero select-none ${isMobile ? "" : "touch-none"}`}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 size-[420px] rounded-full bg-brand-gradient opacity-20 blur-3xl animate-float-slow" />
        <div className="absolute top-32 right-[-120px] size-[480px] rounded-full bg-brand-gradient opacity-15 blur-3xl animate-float-slow" style={{ animationDelay: "2.5s" }} />
      </div>

      <motion.div
        style={{ opacity: introOpacity, y: introY }}
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6"
      >
        <div className="flex w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-[26rem] flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass-nav px-3.5 py-1.5 text-[10px] sm:text-xs font-medium text-primary">
            <Sparkles size={12} />
            {eyebrow}
          </div>
          <h1 className="mt-3 font-display font-extrabold tracking-[-0.035em] text-[clamp(1.5rem,3.6vw,2.75rem)] leading-[1] text-foreground">
            {introTitle}
          </h1>
          <p className="mt-3 text-xs sm:text-sm font-semibold text-foreground/85">
            Your Digital Growth Partner in{" "}
            <span
              className="font-extrabold"
              style={{
                background: "linear-gradient(90deg, #FF7A00, #FF8C42)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 18px rgba(255,122,0,0.25)",
              }}
            >
              Visakhapatnam
            </span>
          </p>
          <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground">
            Branding, Marketing &amp; Automation for Modern Businesses
          </p>
          <p className="mt-5 text-[10px] font-semibold tracking-[0.3em] text-muted-foreground">
            ↓ {introHint}
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="pointer-events-none absolute inset-x-0 bottom-[10%] z-10 flex flex-col items-center text-center px-6"
      >
        <h1 className="font-display font-extrabold tracking-[-0.04em] text-[clamp(2.25rem,7vw,5.5rem)] leading-[0.95]">
          {arcTitle}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base lg:text-lg text-muted-foreground">
          {arcDescription}
        </p>
        <div className="pointer-events-auto mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px]"
          >
            {primaryCta.label}
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </a>
          <a
            href={secondaryCta.href}
            className="inline-flex items-center gap-2 rounded-full glass-nav px-6 py-3.5 text-sm font-semibold text-primary hover:bg-secondary transition"
          >
            {secondaryCta.label}
          </a>
        </div>
      </motion.div>

      <div className="absolute inset-0">
        {IMAGES.map((src, i) => {
          let target: CardTarget = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

          if (introPhase === "scatter") {
            target = scatterPositions[i];
          } else if (introPhase === "line") {
            const lineSpacing = 72;
            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
            const lineX = i * lineSpacing - lineTotalWidth / 2;
            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
          } else {
            const isMobileCircle = containerSize.width < 768;
            const minDim = Math.min(containerSize.width, containerSize.height);

            const circleRadius = isMobileCircle
              ? Math.max(Math.min(containerSize.width * 0.38, 180), 130)
              : Math.min(minDim * 0.4, 400);
            const circleAngle = (i / TOTAL_IMAGES) * 360;
            const circleRad = (circleAngle * Math.PI) / 180;
            const circlePos = {
              x: Math.cos(circleRad) * circleRadius,
              y: Math.sin(circleRad) * circleRadius,
              rotation: circleAngle + 90,
            };

            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
            const arcRadius = baseRadius * (isMobileCircle ? 1.4 : 1.05);
            const arcApexY = containerSize.height * (isMobileCircle ? 0.3 : 0.22);
            const arcCenterY = arcApexY + arcRadius;

            const spreadAngle = isMobileCircle ? 100 : 130;
            const startAngle = -90 - spreadAngle / 2;
            const step = spreadAngle / (TOTAL_IMAGES - 1);

            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
            const maxRotation = spreadAngle * 0.8;
            const boundedRotation = -scrollProgress * maxRotation;

            const currentArcAngle = startAngle + i * step + boundedRotation;
            const arcRad = (currentArcAngle * Math.PI) / 180;

            const arcPos = {
              x: Math.cos(arcRad) * arcRadius + parallaxValue,
              y: Math.sin(arcRad) * arcRadius + arcCenterY - containerSize.height / 2,
              rotation: currentArcAngle + 90,
              scale: isMobileCircle ? 1.3 : 1.7,
            };

            const circleScale = isMobileCircle ? 0.7 : 1;
            target = {
              x: lerp(circlePos.x, arcPos.x, morphValue),
              y: lerp(circlePos.y, arcPos.y, morphValue),
              rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
              scale: lerp(circleScale, arcPos.scale, morphValue),
              opacity: 1,
            };
          }

          return <FlipCard key={i} src={src} target={target} />;
        })}
      </div>
    </section>
  );
}
