"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Send, Sparkles, User, MessageSquare, RefreshCw } from "lucide-react";
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
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Helper to trigger theme-colored confetti
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#d4af37", "#4a3c31", "#f3e5ab", "#ffffff"],
    });
  };

  const fetchWishes = useCallback(async () => {
    setIsRefreshing(true);
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kdxaaiogauoqzdmkqghh.supabase.co';
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_ER90Jqyl29cT1zeI5YYKAw_WksFb6Y3';

    if (supabaseUrl && supabaseKey) {
      try {
        let res = await fetch(`${supabaseUrl}/rest/v1/wishes?select=*&order=created_at.desc`, {
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`
          }
        });
        
        if (!res.ok) {
          res = await fetch(`${supabaseUrl}/rest/v1/wishes?select=*&order=id.desc`, {
            headers: {
              'apikey': supabaseKey,
              'Authorization': `Bearer ${supabaseKey}`
            }
          });
        }
        
        if (res.ok) {
          const data = await res.json();
          setWishes(data);
          setIsRefreshing(false);
          return;
        }
      } catch (err) {
        console.error("[Wishes] Supabase fetch error:", err);
      }
    }

    // Fallback: Retrieve wishes from localStorage
    const saved = localStorage.getItem("wedding_wishes");
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch (err) {
        setWishes([]);
      }
    } else {
      setWishes([]);
    }
    setIsRefreshing(false);
  }, []);

  useEffect(() => {
    const mountTimer = setTimeout(() => {
      setIsMounted(true);
      fetchWishes();
    }, 0);

    return () => clearTimeout(mountTimer);
  }, [fetchWishes]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const newWish: Wish = {
      id: `wish-${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      date: new Date().toISOString().split("T")[0],
    };

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kdxaaiogauoqzdmkqghh.supabase.co';
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_ER90Jqyl29cT1zeI5YYKAw_WksFb6Y3';

    if (supabaseUrl && supabaseKey) {
      try {
        const res = await fetch(`${supabaseUrl}/rest/v1/wishes`, {
          method: 'POST',
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
          },
          body: JSON.stringify({
            id: newWish.id,
            name: newWish.name,
            message: newWish.message,
            date: newWish.date
          })
        });
        
        if (res.ok) {
          setWishes(prev => [newWish, ...prev]);
          setName("");
          setMessage("");
          setIsSubmitting(false);
          triggerConfetti();
          return;
        }
      } catch (err) {
        console.error("Supabase insert error:", err);
      }
    }

    // Fallback: Save to localStorage
    setTimeout(() => {
      const updatedWishes = [newWish, ...wishes];
      setWishes(updatedWishes);
      localStorage.setItem("wedding_wishes", JSON.stringify(updatedWishes));
      
      setName("");
      setMessage("");
      setIsSubmitting(false);
      triggerConfetti();
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
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-emerald font-bold tracking-wide flex items-center justify-center gap-3">
            Guest Wishes
            {isMounted && (
              <button
                onClick={fetchWishes}
                disabled={isRefreshing}
                className="p-2 ml-2 rounded-full bg-white/60 border border-luxury-gold/30 text-luxury-emerald hover:bg-white hover:text-luxury-emerald-dark hover:scale-105 transition-all shadow-sm"
                title="Refresh Wishes"
              >
                <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
              </button>
            )}
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
                  placeholder="Your name"
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
              {!isMounted ? (
                <div className="h-48 flex items-center justify-center font-sans text-sm text-luxury-emerald/40 italic">
                  Loading wishes...
                </div>
              ) : wishes.length > 0 ? (
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
                <div className="h-48 flex flex-col items-center justify-center font-sans text-sm text-luxury-emerald/50 italic border border-dashed border-luxury-gold/25 rounded-2xl bg-white/20 p-6 text-center">
                  <span>No wishes yet.</span>
                  <span className="text-xs text-luxury-emerald/40 mt-1 not-italic">Be the first to leave your blessings and warm wishes!</span>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
