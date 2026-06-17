"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function Couple() {
  const { groom, bride } = weddingData;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: customDelay, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section id="couple" className="relative py-24 px-4 bg-luxury-cream overflow-hidden">
      {/* Delicate top gradient overlay */}
      <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-luxury-beige/20 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-script text-4xl text-luxury-gold block mb-2">The Happy Couple</span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-emerald font-bold tracking-wide">
            Bride & Groom
          </h2>
          {/* Rub el Hizb Divider */}
          <div className="flex items-center justify-center gap-3 mt-4 text-luxury-gold/50">
            <div className="h-[0.5px] w-12 bg-luxury-gold/30" />
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.5]">
              <rect x="5" y="5" width="14" height="14" transform="rotate(0 12 12)" />
              <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" />
            </svg>
            <div className="h-[0.5px] w-12 bg-luxury-gold/30" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center">
          
          {/* Groom Monogram Card */}
          <motion.div
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="flex flex-col items-center text-center p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl glass-card border border-luxury-gold/25 shadow-lg group hover:shadow-xl transition-all duration-300"
          >
            {/* Elegant Monogram Seal */}
            <div className="relative w-28 h-28 sm:w-44 sm:h-44 md:w-64 md:h-64 rounded-full p-1.5 sm:p-2 border-2 border-luxury-gold/30 shadow-xl bg-white/40 flex items-center justify-center mb-4 sm:mb-8">
              {/* Outer Double Border simulation */}
              <div className="absolute inset-1.5 border border-luxury-gold/15 rounded-full pointer-events-none" />
              {/* Inner dashed ring with slow rotation */}
              <div className="absolute inset-3.5 border border-dashed border-luxury-gold/20 rounded-full pointer-events-none" style={{ animation: "spin 40s linear infinite" }} />
              {/* Central badge with gold gradient and emerald accent */}
              <div className="absolute inset-4 sm:inset-5 rounded-full bg-gradient-to-br from-luxury-cream to-luxury-beige border border-luxury-gold/25 flex items-center justify-center shadow-inner group-hover:scale-105 transition-all duration-700 ease-out">
                <span className="font-script text-[2rem] sm:text-[3.8rem] md:text-[4.5rem] text-gold-gradient select-none filter drop-shadow-[0_2px_4px_rgba(74,60,49,0.15)] leading-none pt-2 pr-4 pl-2">
                  A
                </span>
              </div>
            </div>

            <span className="font-sans text-[9px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-luxury-gold-dark font-bold mb-1 sm:mb-2">
              The Groom
            </span>
            <h3 className="font-serif text-sm sm:text-2xl md:text-3xl font-bold text-luxury-emerald-dark tracking-wide mb-2 sm:mb-4">
              {groom.name}
            </h3>

            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 text-luxury-emerald/60">
              <div className="h-[1px] w-4 sm:w-6 bg-luxury-gold/30" />
              <span className="font-serif italic text-[10px] sm:text-sm md:text-base">Son of</span>
              <div className="h-[1px] w-4 sm:w-6 bg-luxury-gold/30" />
            </div>

            <p className="font-sans text-[10px] sm:text-sm md:text-base text-luxury-emerald font-medium leading-relaxed">
              {groom.parents.father}
              <span className="block text-[9px] sm:text-xs md:text-sm text-luxury-emerald/65 font-normal my-0.5">&amp;</span>
              {groom.parents.mother}
            </p>
          </motion.div>

          {/* Bride Monogram Card */}
          <motion.div
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="flex flex-col items-center text-center p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl glass-card border border-luxury-gold/25 shadow-lg group hover:shadow-xl transition-all duration-300"
          >
            {/* Elegant Monogram Seal */}
            <div className="relative w-28 h-28 sm:w-44 sm:h-44 md:w-64 md:h-64 rounded-full p-1.5 sm:p-2 border-2 border-luxury-gold/30 shadow-xl bg-white/40 flex items-center justify-center mb-4 sm:mb-8">
              {/* Outer Double Border simulation */}
              <div className="absolute inset-1.5 border border-luxury-gold/15 rounded-full pointer-events-none" />
              {/* Inner dashed ring with slow rotation */}
              <div className="absolute inset-3.5 border border-dashed border-luxury-gold/20 rounded-full pointer-events-none" style={{ animation: "spin 40s linear infinite" }} />
              {/* Central badge with gold gradient and emerald accent */}
              <div className="absolute inset-4 sm:inset-5 rounded-full bg-gradient-to-br from-luxury-cream to-luxury-beige border border-luxury-gold/25 flex items-center justify-center shadow-inner group-hover:scale-105 transition-all duration-700 ease-out">
                <span className="font-script text-[2rem] sm:text-[3.8rem] md:text-[4.5rem] text-gold-gradient select-none filter drop-shadow-[0_2px_4px_rgba(74,60,49,0.15)] leading-none pt-2 pr-6 pl-2">
                  N
                </span>
              </div>
            </div>

            <span className="font-sans text-[9px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-luxury-gold-dark font-bold mb-1 sm:mb-2">
              The Bride
            </span>
            <h3 className="font-serif text-sm sm:text-2xl md:text-3xl font-bold text-luxury-emerald-dark tracking-wide mb-2 sm:mb-4">
              {bride.name}
            </h3>

            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 text-luxury-emerald/60">
              <div className="h-[1px] w-4 sm:w-6 bg-luxury-gold/30" />
              <span className="font-serif italic text-[10px] sm:text-sm md:text-base">Daughter of</span>
              <div className="h-[1px] w-4 sm:w-6 bg-luxury-gold/30" />
            </div>

            <p className="font-sans text-[10px] sm:text-sm md:text-base text-luxury-emerald font-medium leading-relaxed">
              {bride.parents.father}
              <span className="block text-[9px] sm:text-xs md:text-sm text-luxury-emerald/65 font-normal my-0.5">&amp;</span>
              {bride.parents.mother}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
