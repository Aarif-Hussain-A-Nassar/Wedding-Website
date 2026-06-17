"use client";

import React from "react";
import { Calendar, Clock, MapPin, Map, CalendarPlus } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { weddingData } from "../data/weddingData";

export default function Events() {
  const { ceremony, reception } = weddingData.events;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: customDelay, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section id="events" className="relative py-28 px-4 bg-luxury-beige/40 overflow-hidden">
      {/* Background radial soft light flares */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="font-script text-4xl text-luxury-gold block mb-2">Save the Timings</span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-emerald font-bold tracking-wide">
            Wedding Celebrations
          </h2>
          {/* Rub el Hizb (Islamic Star) Divider */}
          <div className="flex items-center justify-center gap-3 mt-4 text-luxury-gold/60">
            <div className="h-[0.5px] w-16 bg-luxury-gold/30" />
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.5] shrink-0">
              <rect x="5" y="5" width="14" height="14" transform="rotate(0 12 12)" />
              <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
            <div className="h-[0.5px] w-16 bg-luxury-gold/30" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          
          {/* Nikkah Card */}
          <motion.div
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            variants={cardVariants}
            className="relative flex flex-col justify-between p-8 md:p-10 rounded-[2.5rem] glass-card border border-luxury-gold/25 hover:border-luxury-gold/50 shadow-2xl hover:shadow-luxury-gold/5 transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
          >
            {/* Elegant Inner Double Border */}
            <div className="absolute inset-2 border border-luxury-gold/15 rounded-[2rem] pointer-events-none" />
            <div className="absolute inset-2.5 border border-dashed border-luxury-gold/10 rounded-[1.9rem] pointer-events-none" />

            <div className="relative z-10">
              {/* Card Title Label */}
              <div className="text-center mb-6">
                <span className="font-script text-3xl text-luxury-gold block">The Nikkah</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-luxury-emerald-dark tracking-wide mt-1">
                  {ceremony.title}
                </h3>
              </div>

              {/* Islamic Arched Frame for Venue Sketch */}
              <div className="relative w-full h-48 mb-8 rounded-[120px_120px_20px_20px] overflow-hidden border border-luxury-gold/25 bg-white/40 p-1.5 shadow-md">
                <div className="relative w-full h-full rounded-[112px_112px_15px_15px] overflow-hidden bg-luxury-cream/35 flex items-center justify-center">
                  <Image
                    src="/images/venue-town-hall-colored.png"
                    alt="Nehru Memorial Town Hall Sketch"
                    fill
                    sizes="(max-w-768px) 100vw, 380px"
                    className="object-contain scale-[1.5] mix-blend-multiply opacity-85 group-hover:scale-[1.6] transition-transform duration-700 ease-out"
                    style={{ filter: "contrast(1.15) brightness(1.08)" }}
                  />
                </div>
              </div>

              {/* Rub el Hizb Separator */}
              <div className="flex items-center justify-center gap-3 mb-6 text-luxury-gold/40">
                <div className="h-[0.5px] w-12 bg-luxury-gold/20" />
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.5]">
                  <rect x="5" y="5" width="14" height="14" transform="rotate(0 12 12)" />
                  <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" />
                </svg>
                <div className="h-[0.5px] w-12 bg-luxury-gold/20" />
              </div>

              {/* Details List */}
              <div className="space-y-4 mb-6">
                {/* Date Row */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/30 border border-luxury-gold/10 hover:bg-white/50 hover:border-luxury-gold/25 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold-dark shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="font-sans text-[10px] tracking-widest text-luxury-gold-dark uppercase font-bold block">Date</span>
                    <span className="font-sans text-sm md:text-base text-luxury-emerald-dark font-semibold">{ceremony.date}</span>
                  </div>
                </div>

                {/* Time Row */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/30 border border-luxury-gold/10 hover:bg-white/50 hover:border-luxury-gold/25 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold-dark shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="font-sans text-[10px] tracking-widest text-luxury-gold-dark uppercase font-bold block">Time</span>
                    <span className="font-sans text-sm md:text-base text-luxury-emerald-dark font-semibold">{ceremony.time}</span>
                  </div>
                </div>

                {/* Venue Row */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/30 border border-luxury-gold/10 hover:bg-white/50 hover:border-luxury-gold/25 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold-dark shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="font-sans text-[10px] tracking-widest text-luxury-gold-dark uppercase font-bold block">Venue</span>
                    <span className="font-sans text-xs md:text-sm text-luxury-emerald-dark font-semibold leading-relaxed block">{ceremony.venue}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="relative z-10 grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-luxury-gold/15">
              {ceremony.calendarLink && (
                <a
                  href={ceremony.calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-transparent border border-luxury-gold/40 hover:border-luxury-gold text-luxury-emerald-dark hover:bg-luxury-gold/10 text-xs tracking-widest uppercase rounded-full transition-all duration-300 font-sans cursor-pointer font-bold text-center"
                >
                  <CalendarPlus className="w-4 h-4 text-luxury-gold-dark shrink-0" />
                  Calendar
                </a>
              )}
              <a
                href={ceremony.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-gold-gradient hover:brightness-105 text-luxury-emerald-dark text-xs tracking-widest uppercase rounded-full transition-all duration-300 font-sans cursor-pointer font-bold text-center shadow-md hover:shadow-lg hover:shadow-luxury-gold/10"
              >
                <Map className="w-4 h-4 shrink-0" />
                View Maps
              </a>
            </div>
          </motion.div>

          {/* Reception Card */}
          <motion.div
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            variants={cardVariants}
            className="relative flex flex-col justify-between p-8 md:p-10 rounded-[2.5rem] glass-card border border-luxury-gold/25 hover:border-luxury-gold/50 shadow-2xl hover:shadow-luxury-gold/5 transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
          >
            {/* Elegant Inner Double Border */}
            <div className="absolute inset-2 border border-luxury-gold/15 rounded-[2rem] pointer-events-none" />
            <div className="absolute inset-2.5 border border-dashed border-luxury-gold/10 rounded-[1.9rem] pointer-events-none" />

            <div className="relative z-10">
              {/* Card Title Label */}
              <div className="text-center mb-6">
                <span className="font-script text-3xl text-luxury-gold block">The Feast</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-luxury-emerald-dark tracking-wide mt-1">
                  {reception.title}
                </h3>
              </div>

              {/* Islamic Arched Frame for Venue Sketch */}
              <div className="relative w-full h-48 mb-8 rounded-[120px_120px_20px_20px] overflow-hidden border border-luxury-gold/25 bg-white/40 p-1.5 shadow-md">
                <div className="relative w-full h-full rounded-[112px_112px_15px_15px] overflow-hidden bg-luxury-cream/35 flex items-center justify-center">
                  <Image
                    src="/images/venue-convention-colored.png"
                    alt="M K Convention Centre Sketch"
                    fill
                    sizes="(max-w-768px) 100vw, 380px"
                    className="object-contain scale-[1.5] mix-blend-multiply opacity-85 group-hover:scale-[1.6] transition-transform duration-700 ease-out"
                    style={{ filter: "contrast(1.15) brightness(1.08)" }}
                  />
                </div>
              </div>

              {/* Rub el Hizb Separator */}
              <div className="flex items-center justify-center gap-3 mb-6 text-luxury-gold/40">
                <div className="h-[0.5px] w-12 bg-luxury-gold/20" />
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.5]">
                  <rect x="5" y="5" width="14" height="14" transform="rotate(0 12 12)" />
                  <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" />
                </svg>
                <div className="h-[0.5px] w-12 bg-luxury-gold/20" />
              </div>

              {/* Details List */}
              <div className="space-y-4 mb-6">
                {/* Date Row */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/30 border border-luxury-gold/10 hover:bg-white/50 hover:border-luxury-gold/25 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold-dark shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="font-sans text-[10px] tracking-widest text-luxury-gold-dark uppercase font-bold block">Date</span>
                    <span className="font-sans text-sm md:text-base text-luxury-emerald-dark font-semibold">{reception.date}</span>
                  </div>
                </div>

                {/* Time Row */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/30 border border-luxury-gold/10 hover:bg-white/50 hover:border-luxury-gold/25 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold-dark shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="font-sans text-[10px] tracking-widest text-luxury-gold-dark uppercase font-bold block">Time</span>
                    <span className="font-sans text-sm md:text-base text-luxury-emerald-dark font-semibold">{reception.time}</span>
                  </div>
                </div>

                {/* Venue Row */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/30 border border-luxury-gold/10 hover:bg-white/50 hover:border-luxury-gold/25 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center text-luxury-gold-dark shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="font-sans text-[10px] tracking-widest text-luxury-gold-dark uppercase font-bold block">Venue</span>
                    <span className="font-sans text-xs md:text-sm text-luxury-emerald-dark font-semibold leading-relaxed block">{reception.venue}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="relative z-10 grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-luxury-gold/15">
              {reception.calendarLink && (
                <a
                  href={reception.calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-transparent border border-luxury-gold/40 hover:border-luxury-gold text-luxury-emerald-dark hover:bg-luxury-gold/10 text-xs tracking-widest uppercase rounded-full transition-all duration-300 font-sans cursor-pointer font-bold text-center"
                >
                  <CalendarPlus className="w-4 h-4 text-luxury-gold-dark shrink-0" />
                  Calendar
                </a>
              )}
              <a
                href={reception.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-gold-gradient hover:brightness-105 text-luxury-emerald-dark text-xs tracking-widest uppercase rounded-full transition-all duration-300 font-sans cursor-pointer font-bold text-center shadow-md hover:shadow-lg hover:shadow-luxury-gold/10"
              >
                <Map className="w-4 h-4 shrink-0" />
                View Maps
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
