"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { weddingData } from "../data/weddingData";

export default function Gallery() {
  const { gallery } = weddingData;
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (photoIndex === null) return;
    setPhotoIndex((prev) => (prev === 0 ? gallery.length - 1 : (prev ?? 0) - 1));
  }, [photoIndex, gallery.length]);

  const handleNext = useCallback(() => {
    if (photoIndex === null) return;
    setPhotoIndex((prev) => (prev === gallery.length - 1 ? 0 : (prev ?? 0) + 1));
  }, [photoIndex, gallery.length]);

  // Close lightbox on Escape, navigate with arrow keys
  useEffect(() => {
    if (photoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPhotoIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [photoIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="relative py-24 px-4 bg-luxury-cream overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-script text-4xl text-luxury-gold block mb-2">Moments of Love</span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-emerald font-bold tracking-wide">
            Our Gallery
          </h2>
          <div className="h-[1px] w-24 bg-luxury-gold/50 mx-auto mt-4" />
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {gallery.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setPhotoIndex(index)}
              className="relative break-inside-avoid rounded-2xl overflow-hidden gold-border-thin shadow-md cursor-pointer group bg-luxury-emerald/5"
            >
              {/* Aspect Ratio Sizing Trick for Masonry */}
              <div
                className={`relative w-full overflow-hidden ${
                  index % 3 === 0 ? "h-64" : index % 3 === 1 ? "h-96" : "h-80"
                }`}
              >
                <Image
                  src={photo.url}
                  alt={photo.caption}
                  fill
                  sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-luxury-emerald-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/80 flex items-center justify-center text-luxury-emerald-dark transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-white text-base md:text-lg text-center mt-3 tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {photo.caption}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Slider Modal */}
        <AnimatePresence>
          {photoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-luxury-emerald-dark/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
            >
              {/* Close Button */}
              <button
                onClick={() => setPhotoIndex(null)}
                className="absolute top-6 right-6 z-55 text-luxury-gold hover:text-luxury-gold-light p-2 cursor-pointer focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 z-55 text-luxury-gold hover:text-luxury-gold-light p-2 cursor-pointer focus:outline-none rounded-full bg-luxury-emerald/20 border border-luxury-gold/20"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Large Image Container */}
              <motion.div
                key={photoIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl max-h-[80vh] w-full h-[60vh] flex flex-col items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={gallery[photoIndex].url}
                    alt={gallery[photoIndex].caption}
                    fill
                    className="object-contain rounded-lg"
                    sizes="100vw"
                    priority
                  />
                </div>
                
                {/* Caption text */}
                <div className="absolute bottom-[-40px] text-center mt-4">
                  <p className="font-serif text-lg text-luxury-gold-light tracking-wide">
                    {gallery[photoIndex].caption}
                  </p>
                  <p className="font-sans text-xs text-luxury-beige/60 mt-1">
                    {photoIndex + 1} of {gallery.length}
                  </p>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 z-55 text-luxury-gold hover:text-luxury-gold-light p-2 cursor-pointer focus:outline-none rounded-full bg-luxury-emerald/20 border border-luxury-gold/20"
                aria-label="Next Image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
