"use client";

import React from "react";
import { Phone, MessageSquare, HeartHandshake, User } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function Contact() {
  const { contacts } = weddingData;

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Helper to format WhatsApp link
  const getWhatsAppLink = (phone: string, text: string) => {
    const cleanPhone = phone.replace(/\D/g, "");
    const formattedPhone = cleanPhone.startsWith("91") ? cleanPhone : `91${cleanPhone}`;
    return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(text)}`;
  };

  // Helper to format Tel link
  const getTelLink = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, "");
    return `tel:+91${cleanPhone}`;
  };

  const isGroomSide = (side?: string) => side === "Groom's Side";

  return (
    <section id="contact" className="relative py-24 px-4 bg-luxury-cream overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-gold/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-luxury-beige/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">

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

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {contacts.map((contact, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative p-6 md:p-8 rounded-3xl glass-card border border-luxury-gold/25 shadow-lg flex flex-col justify-between overflow-hidden group"
            >
              {/* Side color accent strip */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl ${
                  isGroomSide(contact.side)
                    ? "bg-gradient-to-r from-luxury-emerald/60 to-luxury-emerald"
                    : "bg-gradient-to-r from-luxury-gold/60 to-luxury-gold"
                }`}
              />

              <div>
                {/* Side badge */}
                {contact.side && (
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] tracking-wider uppercase font-bold px-3 py-1 rounded-full mb-4 ${
                      isGroomSide(contact.side)
                        ? "bg-luxury-emerald/10 text-luxury-emerald border border-luxury-emerald/25"
                        : "bg-luxury-gold/10 text-luxury-gold-dark border border-luxury-gold/30"
                    }`}
                  >
                    <User className="w-3 h-3 shrink-0" />
                    {contact.side}
                  </span>
                )}

                {/* Name */}
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-luxury-emerald-dark mb-2 group-hover:text-luxury-emerald transition-colors duration-300">
                  {contact.label}
                </h3>

                {/* Phone */}
                <p className="font-sans text-base md:text-lg font-medium text-luxury-emerald/70 mb-7 tracking-widest">
                  +91 {contact.phone}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                {/* Call */}
                <a
                  href={getTelLink(contact.phone)}
                  className="flex items-center justify-center gap-2 py-3 px-3 bg-transparent border border-luxury-emerald/30 hover:border-luxury-gold text-luxury-emerald hover:text-luxury-gold-dark text-xs tracking-wider uppercase rounded-xl transition-all duration-300 font-sans font-semibold"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  Call
                </a>

                {/* WhatsApp */}
                <a
                  href={getWhatsAppLink(contact.phone, contact.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 bg-luxury-emerald hover:bg-luxury-emerald-dark text-white text-xs tracking-wider uppercase rounded-xl transition-all duration-300 font-sans font-semibold shadow-sm border border-luxury-gold/20"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <p className="mt-10 font-serif italic text-sm text-luxury-emerald/50">
          Contacts 1 &amp; 2 — Groom&apos;s side &nbsp;·&nbsp; Contact 3 — Bride&apos;s side
        </p>
      </div>
    </section>
  );
}
