"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailOpen } from "lucide-react";

interface OpeningScreenProps {
  onOpen: () => void;
}

// Elegant Corner Ornaments
const CornerOrnament = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={`absolute w-16 h-16 md:w-28 md:h-28 text-luxury-gold pointer-events-none opacity-80 ${className}`}
  >
    {/* Intricate Luxury Calligraphic Corner */}
    <path
      d="M 10,10 L 90,10 M 10,10 L 10,90 M 10,25 C 25,25 25,40 40,40 C 40,25 25,25 25,10 M 10,40 C 40,40 40,25 40,10 M 10,10 Q 50,50 90,90 M 20,10 Q 50,40 80,70 M 10,20 Q 40,50 70,80 M 10,60 C 20,60 20,80 30,80 C 30,70 20,60 10,60 M 60,10 C 60,20 80,20 80,30 C 70,30 60,20 60,10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="10" cy="10" r="3" fill="currentColor" />
    <circle cx="25" cy="25" r="2" fill="currentColor" />
    <circle cx="40" cy="40" r="1.5" fill="currentColor" />
  </svg>
);

export default function OpeningScreen({ onOpen }: OpeningScreenProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Dispatch event to play audio
    window.dispatchEvent(new Event("play-wedding-music"));
    // Delay calling the parent callback to allow completion of exit animations
    setTimeout(() => {
      onOpen();
    }, 1200); // Wait for the zoom-out/curtain animation
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] as const },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-emerald-dark select-none overflow-hidden"
        >
          {/* Inner Golden border */}
          <div className="absolute inset-4 md:inset-8 border border-luxury-gold/40 rounded-sm pointer-events-none">
            <CornerOrnament className="top-2 left-2" />
            <CornerOrnament className="top-2 right-2 rotate-90" />
            <CornerOrnament className="bottom-2 left-2 -rotate-90" />
            <CornerOrnament className="bottom-2 right-2 rotate-180" />
          </div>

          {/* Soft background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Content container */}
          <div className="z-10 px-6 max-w-2xl text-center flex flex-col items-center justify-center">
            {/* Arabic Bismillah Calligraphy Placeholder / Motif */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <span className="font-serif text-2xl md:text-3xl text-luxury-gold italic opacity-90 tracking-widest">
                ﷽
              </span>
            </motion.div>

            {/* Families line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase text-luxury-gold-light mb-4"
            >
              Together with their families
            </motion.p>

            {/* Invitation line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="font-serif italic text-base md:text-lg text-luxury-beige mb-8"
            >
              Invite you to celebrate the wedding of
            </motion.p>

            {/* Groom Name */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.9 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl text-gold-gradient tracking-wide mb-3 font-semibold filter drop-shadow"
            >
              Aarif Hussain
            </motion.h1>

            {/* Ampersand */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="font-script text-4xl md:text-6xl text-luxury-gold-light my-2 select-none"
            >
              &
            </motion.div>

            {/* Bride Name */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 1.4 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl text-gold-gradient tracking-wide mb-8 font-semibold filter drop-shadow"
            >
              Nafla Nazar
            </motion.h1>

            {/* Date line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1.2, delay: 1.7 }}
              className="mb-12 border-y border-luxury-gold/25 py-2 px-6"
            >
              <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-luxury-beige">
                Saturday, September 19, 2026
              </p>
            </motion.div>

            {/* Animated Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 2.0,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOpen}
              className="relative px-8 py-3.5 bg-transparent border border-luxury-gold text-luxury-gold hover:text-luxury-emerald hover:bg-luxury-gold font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-medium rounded-full cursor-pointer transition-all duration-500 ease-out shadow-lg shadow-black/30 overflow-hidden group flex items-center gap-3"
            >
              {/* Button shimmer */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              <MailOpen className="w-4 h-4" />
              Open Invitation
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
