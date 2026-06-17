"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Global Layout Components
import OpeningScreen from "@/components/OpeningScreen";
import AudioPlayer from "@/components/AudioPlayer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import FloatingParticles from "@/components/FloatingParticles";

// Page Sections
import Hero from "@/sections/Hero";
import Couple from "@/sections/Couple";
import Events from "@/sections/Events";
import Family from "@/sections/Family";
import Compliments from "@/sections/Compliments";
import Gallery from "@/sections/Gallery";
import Wishes from "@/sections/Wishes";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Welcome & Cinematic Cover Overlay */}
      <OpeningScreen onOpen={() => setIsOpen(true)} />

      {/* Main Website - Mounts and reveals when "Open Invitation" is clicked */}
      <AnimatePresence>
        {isOpen && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-screen bg-luxury-cream text-luxury-emerald selection:bg-luxury-gold/30 selection:text-luxury-emerald-dark"
          >
            {/* Global Progress & Interactive Controls */}
            <ScrollProgress />
            <AudioPlayer />
            <BackToTop />

            {/* Canvas Sparkles Background */}
            <FloatingParticles />

            {/* Structured Page Sections */}
            <Hero />
            <Couple />
            <Events />
            <Family />
            <Compliments />
            <Gallery />
            <Wishes />
            <Contact />

            {/* Footer */}
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
