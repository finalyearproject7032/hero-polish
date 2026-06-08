"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

import sh1 from "@/assets/shuffle/sh1.webp.asset.json";
import sh2 from "@/assets/shuffle/sh2.webp.asset.json";
import sh3 from "@/assets/shuffle/sh3.webp.asset.json";
import sh4 from "@/assets/shuffle/sh4.webp.asset.json";
import sh5 from "@/assets/shuffle/sh5.webp.asset.json";
import sh6 from "@/assets/shuffle/sh6.webp.asset.json";
import sh7 from "@/assets/shuffle/sh7.webp.asset.json";
import sh8 from "@/assets/shuffle/sh8.webp.asset.json";
import sh9 from "@/assets/shuffle/sh9.webp.asset.json";
import sh10 from "@/assets/shuffle/sh10.webp.asset.json";
import sh11 from "@/assets/shuffle/sh11.webp.asset.json";

type Square = { id: number; src: string };

const squareData: Square[] = [
  sh1, sh2, sh3, sh4, sh5, sh6, sh7, sh8, sh9, sh10, sh11,
  sh1, sh2, sh3, sh4, sh5,
].map((a, i) => ({ id: i + 1, src: a.url }));

const shuffle = (array: Square[]) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState<Square[]>(() => shuffle(squareData).slice(0, 16));

  useEffect(() => {
    const tick = () => {
      setSquares(shuffle(squareData).slice(0, 16));
      timeoutRef.current = setTimeout(tick, 3200);
    };
    timeoutRef.current = setTimeout(tick, 3200);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="grid grid-cols-4 grid-rows-4 h-[450px] gap-2"
    >
      {squares.map((sq, i) => (
        <div key={i} className="relative w-full h-full overflow-hidden rounded-xl bg-neutral-100">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={sq.id}
              src={sq.src}
              alt=""
              loading="lazy"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.7,
                delay: i * 0.025,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
};

export const ShuffleHero = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "w-full px-6 py-16 md:py-24 lg:py-28 grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto bg-white",
        className,
      )}
    >
      <div>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="block mb-4 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-blue-600"
        >
          Your Digital Growth Partner
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[0.95] text-neutral-900"
        >
          We make you <span className="text-gradient">visible.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-neutral-600 my-6 max-w-lg"
        >
          Branding • Marketing • Automation
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          whileHover={{ y: -2 }}
          className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-7 py-3.5 text-sm md:text-base font-semibold text-white shadow-glow transition"
        >
          Book Your Free Audit
        </motion.a>
      </div>
      <ShuffleGrid />
    </section>
  );
};

export default ShuffleHero;
