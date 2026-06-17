"use client";

import React from "react";
import { Calendar, Clock, MapPin, Map, CalendarPlus } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { weddingData } from "../data/weddingData";

export default function Events() {
  const { ceremony, reception } = weddingData.events;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: customDelay, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section id="events" className="relative py-24 px-4 bg-luxury-beige/45 overflow-hidden">
      {/* Soft background texture details */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-script text-4xl text-luxury-gold block mb-2">Save the Timings</span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-emerald font-bold tracking-wide">
            Wedding Events
          </h2>
          <div className="h-[1px] w-24 bg-luxury-gold/50 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Ceremony Card */}
          <motion.div
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="flex flex-col justify-between p-8 rounded-3xl glass-card border border-luxury-gold/30 hover:border-luxury-gold/50 shadow-xl group transition-all duration-300"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="font-serif italic text-lg text-luxury-gold-dark font-medium">The Nikkah</span>
                <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold-dark border border-luxury-gold/25">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-luxury-emerald tracking-wide mb-6">
                {ceremony.title}
              </h3>

              {/* Venue Sketch Illustration */}
              <div className="relative w-full h-36 mb-6 rounded-2xl overflow-hidden border border-luxury-gold/15 bg-white/40 flex items-center justify-center p-2">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/venue-town-hall-v2.png"
                    alt="Nehru Memorial Town Hall Sketch"
                    fill
                    sizes="(max-w-768px) 100vw, 350px"
                    className="object-contain mix-blend-multiply opacity-80 hover:scale-103 transition-all duration-500"
                    style={{ filter: "contrast(1.15) brightness(1.08)" }}
                  />
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-luxury-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-xs tracking-wider text-luxury-gold-dark uppercase font-semibold">Date</p>
                    <p className="font-sans text-sm md:text-base text-luxury-emerald/90">{ceremony.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-luxury-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-xs tracking-wider text-luxury-gold-dark uppercase font-semibold">Time</p>
                    <p className="font-sans text-sm md:text-base text-luxury-emerald/90">{ceremony.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-luxury-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-xs tracking-wider text-luxury-gold-dark uppercase font-semibold">Venue</p>
                    <p className="font-sans text-sm md:text-base text-luxury-emerald/90 leading-relaxed">{ceremony.venue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-luxury-gold/15">
              {ceremony.calendarLink && (
                <a
                  href={ceremony.calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 bg-transparent border border-luxury-gold/40 hover:border-luxury-gold text-luxury-emerald hover:text-luxury-gold-dark text-xs tracking-wider uppercase rounded-full transition-all duration-300 font-sans cursor-pointer font-semibold"
                >
                  <CalendarPlus className="w-3.5 h-3.5" />
                  Calendar
                </a>
              )}
              <a
                href={ceremony.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-gold-gradient hover:brightness-105 text-luxury-emerald-dark text-xs tracking-wider uppercase rounded-full transition-all duration-300 font-sans cursor-pointer font-bold shadow-md"
              >
                <Map className="w-3.5 h-3.5" />
                View Maps
              </a>
            </div>
          </motion.div>

          {/* Reception Card */}
          <motion.div
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="flex flex-col justify-between p-8 rounded-3xl glass-card border border-luxury-gold/30 hover:border-luxury-gold/50 shadow-xl group transition-all duration-300"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="font-serif italic text-lg text-luxury-gold-dark font-medium">The Feast</span>
                <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold-dark border border-luxury-gold/25">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-luxury-emerald tracking-wide mb-6">
                {reception.title}
              </h3>

              {/* Venue Sketch Illustration */}
              <div className="relative w-full h-36 mb-6 rounded-2xl overflow-hidden border border-luxury-gold/15 bg-white/40 flex items-center justify-center p-2">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/venue-convention-v2.png"
                    alt="M K Convention Centre Sketch"
                    fill
                    sizes="(max-w-768px) 100vw, 350px"
                    className="object-contain mix-blend-multiply opacity-80 hover:scale-103 transition-all duration-500"
                    style={{ filter: "contrast(1.15) brightness(1.08)" }}
                  />
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-luxury-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-xs tracking-wider text-luxury-gold-dark uppercase font-semibold">Date</p>
                    <p className="font-sans text-sm md:text-base text-luxury-emerald/90">{reception.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-luxury-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-xs tracking-wider text-luxury-gold-dark uppercase font-semibold">Time</p>
                    <p className="font-sans text-sm md:text-base text-luxury-emerald/90">{reception.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-luxury-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-xs tracking-wider text-luxury-gold-dark uppercase font-semibold">Venue</p>
                    <p className="font-sans text-sm md:text-base text-luxury-emerald/90 leading-relaxed">{reception.venue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-luxury-gold/15">
              {reception.calendarLink && (
                <a
                  href={reception.calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 bg-transparent border border-luxury-gold/40 hover:border-luxury-gold text-luxury-emerald hover:text-luxury-gold-dark text-xs tracking-wider uppercase rounded-full transition-all duration-300 font-sans cursor-pointer font-semibold"
                >
                  <CalendarPlus className="w-3.5 h-3.5" />
                  Calendar
                </a>
              )}
              <a
                href={reception.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-gold-gradient hover:brightness-105 text-luxury-emerald-dark text-xs tracking-wider uppercase rounded-full transition-all duration-300 font-sans cursor-pointer font-bold shadow-md"
              >
                <Map className="w-3.5 h-3.5" />
                View Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
