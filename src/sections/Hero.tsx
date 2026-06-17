"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Heart } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Hero() {
  const targetDate = new Date("2026-09-19T10:30:00+05:30").getTime(); // Indian Standard Time
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate - Date.now();
      
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
  }, [targetDate]);

  // Framer motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

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

        {/* Heading */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-luxury-gold-dark font-semibold mb-3"
        >
          Save The Date
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl md:text-8xl text-gold-gradient tracking-wide mb-4 font-bold select-none drop-shadow-sm"
        >
          Aarif & Nafla
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-serif italic text-lg md:text-2xl text-luxury-emerald/80 max-w-xl mb-12 px-4 leading-relaxed font-light"
        >
          &ldquo;A journey of love, faith and togetherness.&rdquo;
        </motion.p>

        {/* Live Countdown Timer */}
        <motion.div variants={itemVariants} className="flex justify-center gap-3 md:gap-5 mb-16">
          {timerCard(timeLeft.days, "Days")}
          {timerCard(timeLeft.hours, "Hours")}
          {timerCard(timeLeft.minutes, "Mins")}
          {timerCard(timeLeft.seconds, "Secs")}
        </motion.div>

        {/* Event details summary */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center font-sans tracking-[0.15em] text-xs uppercase text-luxury-gold-dark"
        >
          <span>Saturday, September 19, 2026</span>
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
