'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => {
      const size = Math.random() * 2 + 1;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 5;
      const initialX = `${Math.random() * 100}vw`;
      const initialY = `${Math.random() * 100}vh`;

      return {
        id: i,
        size,
        duration,
        delay,
        initialX,
        initialY,
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-accent/50"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.initialX,
            top: particle.initialY,
          }}
          animate={{
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: particle.duration,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
