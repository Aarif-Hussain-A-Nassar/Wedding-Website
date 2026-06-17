"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  alphaSpeed: number;
  color: string;
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const colors = [
      "rgba(212, 175, 55, 0.25)",  // Gold
      "rgba(243, 229, 171, 0.2)",  // Gold light
      "rgba(170, 124, 17, 0.15)",  // Gold dark
      "rgba(251, 251, 248, 0.3)",  // Cream / Ivory
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (isInitial = false): Particle => {
      const size = Math.random() * 4 + 1; // particles between 1px and 5px
      return {
        x: Math.random() * canvas.width,
        y: isInitial ? Math.random() * canvas.height : canvas.height + 10,
        size,
        speedX: (Math.random() - 0.5) * 0.2, // very slow drift
        speedY: -(Math.random() * 0.4 + 0.1), // slowly floating up
        alpha: Math.random() * 0.6 + 0.1,
        alphaSpeed: (Math.random() - 0.5) * 0.005,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    const init = () => {
      resizeCanvas();
      particles = Array.from({ length: 45 }, () => createParticle(true));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, idx) => {
        // Draw particle
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        
        // Add subtle shadow glow
        ctx.shadowBlur = p.size * 2;
        ctx.shadowColor = p.color;
        
        ctx.fill();
        ctx.restore();

        // Update positions
        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha += p.alphaSpeed;

        // Bounce alpha or restrict range
        if (p.alpha <= 0.05 || p.alpha >= 0.8) {
          p.alphaSpeed = -p.alphaSpeed;
        }

        // Keep alpha within bounds
        p.alpha = Math.max(0.01, Math.min(0.8, p.alpha));

        // Recycle particle if it moves off top or sides
        if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10) {
          particles[idx] = createParticle(false);
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
