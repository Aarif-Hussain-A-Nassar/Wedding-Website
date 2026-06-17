"use client";

import React from "react";
import Image from "next/image";
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
      {/* Delicate gold foliage frame overlay for couple page */}
      <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-luxury-beige/20 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <span className="font-script text-4xl text-luxury-gold block mb-2">The Happy Couple</span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-emerald font-bold tracking-wide">
            Bride & Groom
          </h2>
          <div className="h-[1px] w-24 bg-luxury-gold/50 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Groom Card */}
          <motion.div
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="flex flex-col items-center text-center p-6 md:p-8 rounded-3xl glass-card border border-luxury-gold/25 shadow-lg group hover:shadow-xl transition-all duration-300"
          >
            {/* Elegant Portrait Frame */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full p-2 gold-border-double overflow-hidden shadow-inner bg-luxury-emerald/5 mb-8">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={groom.photo}
                  alt={groom.name}
                  fill
                  sizes="(max-w-768px) 256px, 288px"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            <span className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-luxury-gold-dark font-semibold mb-2">
              The Groom
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-luxury-emerald tracking-wide mb-4">
              {groom.name}
            </h3>

            <div className="flex items-center gap-2 mb-3 text-luxury-emerald/60">
              <div className="h-[1px] w-6 bg-luxury-gold/40" />
              <span className="font-serif italic text-sm md:text-base">Son of</span>
              <div className="h-[1px] w-6 bg-luxury-gold/40" />
            </div>

            <p className="font-sans text-sm md:text-base text-luxury-emerald font-medium leading-relaxed">
              {groom.parents.father}
              <span className="block text-xs md:text-sm text-luxury-emerald/65 font-normal my-0.5">&amp;</span>
              {groom.parents.mother}
            </p>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="flex flex-col items-center text-center p-6 md:p-8 rounded-3xl glass-card border border-luxury-gold/25 shadow-lg group hover:shadow-xl transition-all duration-300"
          >
            {/* Elegant Portrait Frame */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full p-2 gold-border-double overflow-hidden shadow-inner bg-luxury-emerald/5 mb-8">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={bride.photo}
                  alt={bride.name}
                  fill
                  sizes="(max-w-768px) 256px, 288px"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            <span className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-luxury-gold-dark font-semibold mb-2">
              The Bride
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-luxury-emerald tracking-wide mb-4">
              {bride.name}
            </h3>

            <div className="flex items-center gap-2 mb-3 text-luxury-emerald/60">
              <div className="h-[1px] w-6 bg-luxury-gold/40" />
              <span className="font-serif italic text-sm md:text-base">Daughter of</span>
              <div className="h-[1px] w-6 bg-luxury-gold/40" />
            </div>

            <p className="font-sans text-sm md:text-base text-luxury-emerald font-medium leading-relaxed">
              {bride.parents.father}
              <span className="block text-xs md:text-sm text-luxury-emerald/65 font-normal my-0.5">&amp;</span>
              {bride.parents.mother}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
