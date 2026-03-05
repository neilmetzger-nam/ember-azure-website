"use client";

import { useEffect, useRef } from "react";

export default function EmberParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "ember-particle";

      const size = Math.random() * 4 + 2;
      const x = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 2;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}%`;
      particle.style.bottom = "0";
      particle.style.background = Math.random() > 0.3 ? "#e85d04" : "#c9a84c";
      particle.style.boxShadow = `0 0 ${size * 2}px ${
        Math.random() > 0.3 ? "#e85d04" : "#c9a84c"
      }`;
      particle.style.animationDuration = `${duration}s, 0.5s`;
      particle.style.animationDelay = `${delay}s, ${delay}s`;

      container.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, (duration + delay) * 1000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
