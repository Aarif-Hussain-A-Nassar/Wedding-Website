"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function Compliments() {
  const { compliments } = weddingData;

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: (idx: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section id="compliments" className="relative py-20 px-4 bg-luxury-cream overflow-hidden">
      {/* Decorative leaf motifs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.04),transparent_50%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="h-[1px] w-6 bg-luxury-gold/40" />
          <Sparkles className="w-4 h-4 text-luxury-gold" />
          <div className="h-[1px] w-6 bg-luxury-gold/40" />
        </div>
        
        <h2 className="font-serif text-3xl md:text-4xl text-luxury-emerald font-bold tracking-wide mb-10">
          With Best Compliments From
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {compliments.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="px-8 py-5 rounded-2xl glass-card border border-luxury-gold/25 shadow-md flex items-center justify-center min-w-[200px]"
            >
              <p className="font-serif text-lg md:text-xl font-medium text-luxury-emerald-dark">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
