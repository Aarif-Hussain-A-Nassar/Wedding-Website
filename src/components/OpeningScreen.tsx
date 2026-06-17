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
          className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-cream select-none overflow-hidden"
        >
          {/* Inner Golden border */}
          <div className="absolute inset-4 md:inset-8 border border-luxury-gold/30 rounded-sm pointer-events-none">
            <CornerOrnament className="top-2 left-2" />
            <CornerOrnament className="top-2 right-2 rotate-90" />
            <CornerOrnament className="bottom-2 left-2 -rotate-90" />
            <CornerOrnament className="bottom-2 right-2 rotate-180" />
          </div>

          {/* Soft background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luxury-gold/10 blur-[120px] rounded-full pointer-events-none" />

          {/* Content container */}
          <div className="z-10 px-4 md:px-6 max-w-2xl text-center flex flex-col items-center justify-center py-4">
            {/* Arabic Bismillah Calligraphy */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 flex flex-col items-center gap-1.5"
            >
              <div className="font-serif text-2xl md:text-3xl lg:text-4xl text-luxury-gold-dark tracking-wider select-none font-medium">
                بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
              </div>
              <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-luxury-gold-dark/80 font-semibold leading-relaxed">
                In the Name of Allah
              </p>
              <p className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-luxury-gold-dark/80 font-semibold leading-relaxed">
                The Most Gracious and the Most Merciful
              </p>
            </motion.div>

            {/* Invitation Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="font-sans text-[11px] md:text-[13px] tracking-[0.22em] uppercase text-luxury-emerald/90 mb-8 max-w-xl leading-relaxed font-semibold"
            >
              We cordially invite your esteemed presence &<br className="hidden md:inline" /> blessings with family<br />
              on the auspicious occasion of the marriage of
            </motion.p>

            {/* Names & Parents details */}
            <div className="flex flex-col items-center gap-5 mb-8 w-full">
              {/* Groom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="flex flex-col items-center"
              >
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-gold-gradient tracking-wide font-semibold filter drop-shadow-sm">
                  Aarif Hussain
                </h1>
                <p className="font-sans text-[9px] md:text-[11px] tracking-[0.22em] uppercase text-luxury-gold-dark/75 font-semibold mt-1">
                  Son of Nassar A & Kamaruneesa PM
                </p>
              </motion.div>

              {/* Ampersand */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 1.1 }}
                className="font-script text-3xl md:text-4xl text-luxury-gold-dark select-none"
              >
                &
              </motion.div>

              {/* Bride */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 1.3 }}
                className="flex flex-col items-center"
              >
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-gold-gradient tracking-wide font-semibold filter drop-shadow-sm">
                  Nafla Nazar
                </h1>
                <p className="font-sans text-[9px] md:text-[11px] tracking-[0.22em] uppercase text-luxury-gold-dark/75 font-semibold mt-1">
                  Daughter of Nazar T Y & Zeena Nazar
                </p>
              </motion.div>
            </div>

            {/* Special Day Invitation Quote */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ duration: 1.2, delay: 1.6 }}
              className="font-sans text-[10px] md:text-[12px] tracking-[0.2em] uppercase text-luxury-gold-dark/90 max-w-xl leading-relaxed mb-8 font-medium border-t border-luxury-gold/20 pt-6"
            >
              We would like to invite you to celebrate with us the most<br className="hidden md:inline" /> special day of our lives. It would be an honour to have you<br className="hidden md:inline" /> present at this important moment
            </motion.p>

            {/* Date line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1.2, delay: 1.8 }}
              className="mb-8 border-y border-luxury-gold/30 py-2 px-6"
            >
              <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-luxury-emerald font-semibold">
                Saturday, September 19, 2026
              </p>
            </motion.div>

            {/* Animated Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 2.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOpen}
              className="relative px-8 py-3.5 bg-transparent border border-luxury-gold text-luxury-emerald hover:text-luxury-cream hover:bg-luxury-emerald font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-semibold rounded-full cursor-pointer transition-all duration-500 ease-out shadow-md overflow-hidden group flex items-center gap-3"
            >
              {/* Button shimmer */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              
              <MailOpen className="w-4 h-4" />
              Open Invitation
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
