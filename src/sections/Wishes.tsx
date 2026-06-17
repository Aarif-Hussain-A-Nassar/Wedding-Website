"use client";

import React, { useState, useEffect } from "react";
import { Send, Sparkles, User, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { weddingData } from "../data/weddingData";
import { Wish } from "../types/wedding";

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => {
      setIsMounted(true);
      
      // Retrieve wishes from localStorage or fall back to weddingData initials
      const saved = localStorage.getItem("wedding_wishes");
      if (saved) {
        try {
          setWishes(JSON.parse(saved));
        } catch (err) {
          console.error(err);
          setWishes(weddingData.initialWishes);
        }
      } else {
        setWishes(weddingData.initialWishes);
        localStorage.setItem("wedding_wishes", JSON.stringify(weddingData.initialWishes));
      }
    }, 0);

    return () => clearTimeout(mountTimer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const newWish: Wish = {
      id: `wish-${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      date: new Date().toISOString().split("T")[0],
    };

    setTimeout(() => {
      const updatedWishes = [newWish, ...wishes];
      setWishes(updatedWishes);
      localStorage.setItem("wedding_wishes", JSON.stringify(updatedWishes));
      
      setName("");
      setMessage("");
      setIsSubmitting(false);

      // Celebration confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#d4af37", "#0b3d2c", "#f3e5ab", "#ffffff"],
      });
    }, 600);
  };

  return (
    <section id="wishes" className="relative py-24 px-4 bg-luxury-cream overflow-hidden">
      {/* Delicate background decorative element */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-luxury-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-script text-4xl text-luxury-gold block mb-2">Blessings & Love</span>
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-emerald font-bold tracking-wide">
            Guest Wishes
          </h2>
          <div className="h-[1px] w-24 bg-luxury-gold/50 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Wish Submission Form (2/5 size) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 p-6 md:p-8 rounded-3xl glass-card border border-luxury-gold/25 shadow-lg"
          >
            <h3 className="font-serif text-xl font-semibold text-luxury-emerald-dark mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              Send Your Blessings
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="guest-name" className="font-sans text-xs tracking-wider text-luxury-gold-dark uppercase font-semibold flex items-center gap-1.5">
                  <User className="w-3 h-3" />
                  Your Name
                </label>
                <input
                  id="guest-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="E.g., Faisal Rahman"
                  className="w-full px-4 py-3 rounded-xl border border-luxury-gold/20 bg-white/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-luxury-gold font-sans text-sm text-luxury-emerald placeholder-luxury-emerald/30 transition-all duration-300"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="guest-message" className="font-sans text-xs tracking-wider text-luxury-gold-dark uppercase font-semibold flex items-center gap-1.5">
                  <MessageSquare className="w-3 h-3" />
                  Your Message
                </label>
                <textarea
                  id="guest-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your warm wishes here..."
                  className="w-full px-4 py-3 rounded-xl border border-luxury-gold/20 bg-white/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-luxury-gold font-sans text-sm text-luxury-emerald placeholder-luxury-emerald/30 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 bg-gold-gradient hover:brightness-105 disabled:brightness-95 text-luxury-emerald-dark font-sans text-xs tracking-widest uppercase font-bold rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-luxury-emerald-dark border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Submit Wish
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Wishes List Container (3/5 size) */}
          <div className="lg:col-span-3 space-y-4 max-h-[500px] overflow-y-auto pr-2">
            <AnimatePresence mode="popLayout">
              {isMounted && wishes.length > 0 ? (
                wishes.map((wish) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    layout
                    className="p-6 rounded-2xl glass-card border border-luxury-gold/15 bg-white/40 shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-serif text-base md:text-lg font-semibold text-luxury-emerald-dark">
                        {wish.name}
                      </h4>
                      <span className="font-sans text-[10px] text-luxury-emerald/50">
                        {wish.date}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-luxury-emerald/85 leading-relaxed italic">
                      &ldquo;{wish.message}&rdquo;
                    </p>
                  </motion.div>
                ))
              ) : (
                <div className="h-48 flex items-center justify-center font-sans text-sm text-luxury-emerald/40 italic">
                  Loading wishes...
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
