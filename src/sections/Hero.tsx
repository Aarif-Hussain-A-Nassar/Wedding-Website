"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Stable constant outside the component — never changes, never causes effect re-runs
const TARGET_DATE = new Date("2026-09-19T10:30:00+05:30").getTime();

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = TARGET_DATE - Date.now();
      
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const mountTimer = setTimeout(() => {
      setIsMounted(true);
      setTimeLeft(calculateTimeLeft());
    }, 0);

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(mountTimer);
    };
  }, []); // ✅ No deps needed — TARGET_DATE is a stable module-level constant

  // Framer motion variants — memoized so object identity is stable across renders
  const containerVariants: Variants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  }), []);

  const itemVariants: Variants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  }), []);

  const timerCard = (value: number, label: string) => (
    <div className="flex flex-col items-center justify-center w-20 h-24 md:w-28 md:h-32 rounded-2xl glass-card border border-luxury-gold/30 shadow-md">
      <span className="font-serif text-3xl md:text-5xl font-bold text-gold-gradient tracking-tight">
        {isMounted ? String(value).padStart(2, "0") : "--"}
      </span>
      <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-luxury-emerald/75 mt-2 font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-24 pb-16">
      {/* Background Decorative Floral SVGs (Soft & Subtle) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] select-none flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-[80vw] h-[80vw] max-w-[600px] text-luxury-gold animate-slow-spin">
          <path
            d="M 50,0 Q 55,25 75,25 Q 75,35 50,50 Q 25,35 25,25 Q 45,25 50,0 M 100,50 Q 75,55 75,75 Q 65,75 50,50 Q 65,25 75,25 Q 75,45 100,50 M 50,100 Q 45,75 25,75 Q 25,65 50,50 Q 75,65 75,75 Q 55,75 50,100 M 0,50 Q 25,45 25,25 Q 35,25 50,50 Q 35,75 25,75 Q 25,55 0,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col items-center max-w-4xl"
      >
        {/* Soft floral icon or separator */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
          <div className="h-[1px] w-8 md:w-16 bg-luxury-gold/40" />
          <Heart className="w-4 h-4 text-luxury-gold fill-luxury-gold/20 animate-pulse" />
          <div className="h-[1px] w-8 md:w-16 bg-luxury-gold/40" />
        </motion.div>

        {/* Arabic Bismillah Calligraphy */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex flex-col items-center gap-1.5"
        >
          <div className="font-serif text-2xl md:text-3xl text-luxury-gold-dark tracking-wider select-none font-medium" >
            بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
          </div>
          <p className="font-sans text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-luxury-gold-dark/80 font-semibold leading-relaxed">
            In the Name of Allah, The Most Gracious, The Most Merciful
          </p>
        </motion.div>
 
        {/* Invitation Wording */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-[10px] md:text-xs tracking-[0.22em] uppercase text-luxury-emerald/90 mb-8 max-w-xl leading-relaxed font-semibold px-4"
        >
          We cordially invite your esteemed presence &<br className="hidden md:inline" /> blessings with family<br />
          on the auspicious occasion of the marriage of
        </motion.p>
 
        {/* Names & Parentage details */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-5 mb-8 w-full"
        >
          {/* Groom */}
          <div className="flex flex-col items-center">
            <h1 className="font-serif text-4xl md:text-6xl text-gold-gradient tracking-wide font-bold filter drop-shadow-sm">
              Aarif Hussain
            </h1>
            <p className="font-sans text-[9px] md:text-[11px] tracking-[0.22em] uppercase text-luxury-gold-dark/75 font-semibold mt-1">
              Son of Nassar A & Kamaruneesa PM
            </p>
          </div>
 
          {/* Ampersand */}
          <div className="font-script text-3xl md:text-4xl text-luxury-gold-dark select-none">
            &
          </div>
 
          {/* Bride */}
          <div className="flex flex-col items-center">
            <h1 className="font-serif text-4xl md:text-6xl text-gold-gradient tracking-wide font-bold filter drop-shadow-sm">
              Nafla Nazar
            </h1>
            <p className="font-sans text-[9px] md:text-[11px] tracking-[0.22em] uppercase text-luxury-gold-dark/75 font-semibold mt-1">
              Daughter of Nazar T Y & Zeena Nazar
            </p>
          </div>
        </motion.div>
 
        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-serif italic text-lg md:text-xl text-luxury-emerald/80 max-w-xl mb-8 px-4 leading-relaxed font-light"
        >
          &ldquo;A journey of love, faith and togetherness.&rdquo;
        </motion.p>
 
        {/* Couple Arch Illustration (Nikkah specific) */}
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-[300px] h-44 md:max-w-[400px] md:h-56 mb-10 pointer-events-none overflow-hidden"
        >
          <Image
            src="/images/nikkah-arch-couple.png"
            alt="Aarif & Nafla under Nikkah Wedding Arch Sketch"
            fill
            sizes="(max-w-768px) 100vw, 400px"
            className="object-contain mix-blend-multiply opacity-85 hover:scale-[1.02] transition-transform duration-700 ease-out"
            priority
          />
        </motion.div>
 
        {/* Live Countdown Timer */}
        <motion.div variants={itemVariants} className="flex justify-center gap-3 md:gap-5 mb-10">
          {timerCard(timeLeft.days, "Days")}
          {timerCard(timeLeft.hours, "Hours")}
          {timerCard(timeLeft.minutes, "Mins")}
          {timerCard(timeLeft.seconds, "Secs")}
        </motion.div>
 
        {/* Invitation Quote */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-[9px] md:text-[11px] tracking-[0.18em] uppercase text-luxury-gold-dark/90 max-w-xl leading-relaxed mb-8 font-medium px-4"
        >
          We would like to invite you to celebrate with us the most<br className="hidden md:inline" /> special day of our lives. It would be an honour to have you<br className="hidden md:inline" /> present at this important moment
        </motion.p>
 
        {/* Event details summary */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center font-sans tracking-[0.15em] text-xs uppercase text-luxury-gold-dark border-t border-luxury-gold/25 pt-6 w-full max-w-md"
        >
          <span className="font-semibold">Saturday, September 19, 2026</span>
          <span className="text-[10px] text-luxury-emerald/65 mt-1 font-medium">Kochi, Kerala</span>
        </motion.div>

        {/* Elegant Animated Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-16 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.getElementById("couple")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-luxury-emerald/50">Scroll Down</span>
          <div className="w-5 h-8 border border-luxury-emerald/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-luxury-gold rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
