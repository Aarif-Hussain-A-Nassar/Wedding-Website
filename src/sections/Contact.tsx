"use client";

import React from "react";
import { Phone, MessageSquare, HeartHandshake } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function Contact() {
  const { contacts } = weddingData;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  // Helper to format WhatsApp link
  const getWhatsAppLink = (phone: string, text: string) => {
    // Standardize phone: strip non-digits, prepend 91 for India if needed
    const cleanPhone = phone.replace(/\D/g, "");
    const formattedPhone = cleanPhone.startsWith("91") ? cleanPhone : `91${cleanPhone}`;
    return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(text)}`;
  };

  // Helper to format Tel link
  const getTelLink = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, "");
    return `tel:+91${cleanPhone}`;
  };

  return (
    <section id="contact" className="relative py-24 px-4 bg-luxury-cream overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-luxury-beige/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Header */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="h-[1px] w-6 bg-luxury-gold/40" />
          <HeartHandshake className="w-5 h-5 text-luxury-gold" />
          <div className="h-[1px] w-6 bg-luxury-gold/40" />
        </div>
        
        <h2 className="font-serif text-3xl md:text-5xl text-luxury-emerald font-bold tracking-wide mb-3">
          Contact Details
        </h2>
        <p className="font-serif italic text-base md:text-lg text-luxury-emerald/75 mb-12 max-w-md mx-auto">
          Should you have any queries regarding the venue, timings, or routes, feel free to reach out.
        </p>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {contacts.map((contact, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-6 md:p-8 rounded-3xl glass-card border border-luxury-gold/25 shadow-lg flex flex-col justify-between"
            >
              <div>
                <span className="font-sans text-[10px] tracking-wider text-luxury-gold-dark uppercase font-bold block mb-1">
                  RSVP & INQUIRIES
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-luxury-emerald-dark mb-4">
                  {contact.label}
                </h3>
                <p className="font-sans text-lg md:text-xl font-medium text-luxury-emerald mb-8 tracking-wider">
                  +91 {contact.phone}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* Call */}
                <a
                  href={getTelLink(contact.phone)}
                  className="flex items-center justify-center gap-2.5 py-3 px-4 bg-transparent border border-luxury-emerald/30 hover:border-luxury-gold text-luxury-emerald hover:text-luxury-gold-dark text-xs tracking-wider uppercase rounded-xl transition-all duration-300 font-sans cursor-pointer font-semibold"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  Call Now
                </a>

                {/* WhatsApp */}
                <a
                  href={getWhatsAppLink(contact.phone, contact.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-3 px-4 bg-luxury-emerald hover:bg-luxury-emerald-dark text-luxury-gold-light hover:text-luxury-gold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 font-sans cursor-pointer font-semibold shadow-sm border border-luxury-gold/20"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
