"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper to gradually fade in audio volume
const fadeInAudio = (audio: HTMLAudioElement, targetVolume: number = 0.4, durationMs: number = 2500) => {
  audio.volume = 0;
  const interval = 50;
  const step = targetVolume / (durationMs / interval);

  const fade = setInterval(() => {
    if (audio.paused) {
      clearInterval(fade);
      return;
    }
    if (audio.volume < targetVolume) {
      audio.volume = Math.min(targetVolume, audio.volume + step);
    } else {
      clearInterval(fade);
    }
  }, interval);
};

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.hidden) {
        audioRef.current.pause();
      } else if (isPlaying) {
        audioRef.current.play().catch((err) => console.error("Audio resume failed:", err));
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  useEffect(() => {
    // Instantiate audio object
    const audio = new Audio("/audio/wedding-nasheed.mp3");
    audio.loop = true;
    audio.volume = 0; // Start at 0 for fade-in
    audioRef.current = audio;

    // Listen to open invitation event
    const handleStartAudio = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setIsVisible(true);
          fadeInAudio(audio);
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

    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          fadeInAudio(audio);
        })
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
            className="w-12 h-12 flex items-center justify-center rounded-full glass-card-dark text-white hover:text-white/80 hover:scale-105 transition-all shadow-lg focus:outline-none border border-white/50"
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
