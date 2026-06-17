"use client";

import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-luxury-beige/45 text-luxury-emerald py-16 px-4 text-center overflow-hidden border-t border-luxury-gold/20">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-luxury-gold/5 blur-[50px] rounded-full pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
        {/* Calligraphic Flourish / Separator */}
        <div className="flex items-center gap-2 mb-6 text-luxury-gold/60">
          <div className="h-[0.5px] w-12 bg-luxury-gold/30" />
          <Heart className="w-4 h-4 text-luxury-gold fill-luxury-gold/10" />
          <div className="h-[0.5px] w-12 bg-luxury-gold/30" />
        </div>

        <p className="font-serif italic text-lg md:text-xl text-luxury-emerald/85 tracking-wide mb-3 px-4">
          &ldquo;Thank you for being part of our special day.&rdquo;
        </p>

        <h3 className="font-script text-4xl md:text-5xl text-gold-gradient my-4 select-none">
          Aarif & Nafla
        </h3>

        {/* In Sha Allah Section */}
        <div className="flex flex-col items-center mt-4 mb-6">
          <div className="h-[0.5px] w-16 bg-luxury-gold/30 mb-4" />
          <p className="font-serif italic text-2xl md:text-3xl text-luxury-gold-dark font-medium tracking-widest select-none">
            In Sha Allah
          </p>
        </div>

        <div className="h-[1px] w-16 bg-luxury-gold/20 my-4" />

        <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-luxury-emerald/50 font-semibold">
          © {new Date().getFullYear()} Aarif & Nafla. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
