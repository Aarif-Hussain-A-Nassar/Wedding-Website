"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Instantiate audio object
    const audio = new Audio("https://assets.mixkit.co/music/preview/mixkit-delicate-piano-461.mp3");
    audio.loop = true;
    audio.volume = 0.4; // Soft background volume
    audioRef.current = audio;

    // Listen to open invitation event
    const handleStartAudio = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setIsVisible(true);
        })
        .catch((err) => {
          console.warn("Audio autoplay blocked or failed:", err);
          // Still show controls so user can manually play
          setIsVisible(true);
        });
    };

    window.addEventListener("play-wedding-music", handleStartAudio);

    return () => {
      window.removeEventListener("play-wedding-music", handleStartAudio);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error(err));
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Visual Audio Wave */}
          {isPlaying && (
            <div className="flex items-end gap-0.5 h-4 px-2 py-1 bg-luxury-emerald/80 border border-luxury-gold/30 rounded-full backdrop-blur-md">
              {[0, 1, 2, 3].map((bar) => (
                <motion.div
                  key={bar}
                  animate={{
                    height: ["30%", "100%", "30%"],
                  }}
                  transition={{
                    duration: 0.6 + bar * 0.15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="w-0.5 bg-luxury-gold rounded-full"
                />
              ))}
            </div>
          )}

          {/* Floating Control Button */}
          <button
            onClick={togglePlay}
            className="w-12 h-12 flex items-center justify-center rounded-full glass-card-dark text-luxury-gold hover:text-luxury-gold-light hover:scale-105 transition-all shadow-lg focus:outline-none border border-luxury-gold"
            aria-label="Toggle background music"
          >
            {isPlaying ? (
              <Volume2 className="w-5 h-5 animate-pulse" />
            ) : (
              <VolumeX className="w-5 h-5 text-gray-400" />
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
