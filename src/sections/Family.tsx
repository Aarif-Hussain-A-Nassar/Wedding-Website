"use client";

import React from "react";
import { Users, Home } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function Family() {
  const { groom, bride } = weddingData.family;

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: (customDelay: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, delay: customDelay, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section id="family" className="relative py-24 px-4 bg-luxury-cream overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-script text-4xl text-luxury-gold block mb-2">With Blessings Of</span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-emerald font-bold tracking-wide">
            Our Families
          </h2>
          <div className="h-[1px] w-24 bg-luxury-gold/50 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Groom's Family Card */}
          <motion.div
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="p-8 rounded-3xl glass-card border border-luxury-gold/20 shadow-md flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold border border-luxury-gold/20">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-luxury-emerald tracking-wide">
                  Groom&apos;s Family
                </h3>
              </div>

              {/* Parents details */}
              <div className="mb-6 space-y-2.5">
                <div>
                  <span className="font-sans text-[11px] tracking-wider text-luxury-gold-dark uppercase font-semibold block">Father</span>
                  <span className="font-sans text-base text-luxury-emerald font-medium">{groom.father}</span>
                </div>
                <div>
                  <span className="font-sans text-[11px] tracking-wider text-luxury-gold-dark uppercase font-semibold block">Mother</span>
                  <span className="font-sans text-base text-luxury-emerald font-medium">{groom.mother}</span>
                </div>
              </div>

              {/* Siblings details */}
              {groom.siblings && groom.siblings.length > 0 && (
                <div className="mt-5 pt-4 border-t border-luxury-gold/10 space-y-3">
                  <span className="font-sans text-[11px] tracking-wider text-luxury-gold-dark uppercase font-semibold block">Sibling</span>
                  {groom.siblings.map((sibling, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <p className="font-sans text-sm text-luxury-emerald font-semibold leading-normal">
                        {sibling.name}
                      </p>
                      {sibling.spouse && (
                        <p className="font-sans text-xs text-luxury-emerald/75 pl-3 leading-relaxed">
                          <span className="italic text-luxury-gold-dark mr-1.5">Wife:</span>
                          {sibling.spouse}
                        </p>
                      )}
                      {sibling.children && sibling.children.length > 0 && (
                        <p className="font-sans text-xs text-luxury-emerald/75 pl-3 leading-relaxed">
                          <span className="italic text-luxury-gold-dark mr-1.5">Son:</span>
                          {sibling.children.join(", ")}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Address box */}
            <div className="mt-6 pt-6 border-t border-luxury-gold/15 flex gap-3 items-start">
              <Home className="w-4.5 h-4.5 text-luxury-gold shrink-0 mt-1" />
              <div>
                <span className="font-sans text-[10px] tracking-wider text-luxury-gold-dark uppercase font-semibold block mb-1">Residence Address</span>
                <address className="not-italic font-sans text-sm text-luxury-emerald/75 leading-relaxed space-y-0.5">
                  {groom.address.map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  ))}
                </address>
              </div>
            </div>
          </motion.div>

          {/* Bride's Family Card */}
          <motion.div
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="p-8 rounded-3xl glass-card border border-luxury-gold/20 shadow-md flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold border border-luxury-gold/20">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-luxury-emerald tracking-wide">
                  Bride&apos;s Family
                </h3>
              </div>

              {/* Parents details */}
              <div className="mb-6 space-y-2.5">
                <div>
                  <span className="font-sans text-[11px] tracking-wider text-luxury-gold-dark uppercase font-semibold block">Father</span>
                  <span className="font-sans text-base text-luxury-emerald font-medium">{bride.father}</span>
                </div>
                <div>
                  <span className="font-sans text-[11px] tracking-wider text-luxury-gold-dark uppercase font-semibold block">Mother</span>
                  <span className="font-sans text-base text-luxury-emerald font-medium">{bride.mother}</span>
                </div>
              </div>

              {/* Siblings details */}
              {bride.siblings && bride.siblings.length > 0 && (
                <div className="mt-5 pt-4 border-t border-luxury-gold/10 space-y-3">
                  <span className="font-sans text-[11px] tracking-wider text-luxury-gold-dark uppercase font-semibold block">Sibling</span>
                  {bride.siblings.map((sibling, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <p className="font-sans text-sm text-luxury-emerald font-semibold leading-normal">
                        {sibling.name}
                      </p>
                      {sibling.spouse && (
                        <p className="font-sans text-xs text-luxury-emerald/75 pl-3 leading-relaxed">
                          <span className="italic text-luxury-gold-dark mr-1.5">Wife:</span>
                          {sibling.spouse}
                        </p>
                      )}
                      {sibling.children && sibling.children.length > 0 && (
                        <p className="font-sans text-xs text-luxury-emerald/75 pl-3 leading-relaxed">
                          <span className="italic text-luxury-gold-dark mr-1.5">Son:</span>
                          {sibling.children.join(", ")}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Address box */}
            <div className="mt-6 pt-6 border-t border-luxury-gold/15 flex gap-3 items-start">
              <Home className="w-4.5 h-4.5 text-luxury-gold shrink-0 mt-1" />
              <div>
                <span className="font-sans text-[10px] tracking-wider text-luxury-gold-dark uppercase font-semibold block mb-1">Residence Address</span>
                <address className="not-italic font-sans text-sm text-luxury-emerald/75 leading-relaxed space-y-0.5">
                  {bride.address.map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  ))}
                </address>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
