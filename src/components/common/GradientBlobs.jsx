import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function GradientBlobs() {
  const prefersReduced = useReducedMotion();

  const orbVariants = prefersReduced
    ? {}
    : {
        animate1: {
          x: [0, 50, -40, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.9, 1],
          transition: {
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        },
        animate2: {
          x: [0, -60, 40, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.85, 1.1, 1],
          transition: {
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        },
        animate3: {
          x: [0, 30, -50, 0],
          y: [0, 50, -20, 0],
          scale: [1, 1.2, 0.95, 1],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }
      };

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      {/* Top Left Neon Cyan/Blue Orb */}
      <motion.div
        variants={orbVariants}
        animate={!prefersReduced ? 'animate1' : undefined}
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: '55vw',
          height: '55vw',
          maxWidth: '750px',
          maxHeight: '750px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: 0.8
        }}
      />

      {/* Center-Right Purple/Violet Orb */}
      <motion.div
        variants={orbVariants}
        animate={!prefersReduced ? 'animate2' : undefined}
        style={{
          position: 'absolute',
          top: '30%',
          right: '-15%',
          width: '50vw',
          height: '50vw',
          maxWidth: '700px',
          maxHeight: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(157, 78, 221, 0.14) 0%, rgba(247, 37, 133, 0.06) 50%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.75
        }}
      />

      {/* Bottom Center Emerald/Cyan Orb for Contact / CTA */}
      <motion.div
        variants={orbVariants}
        animate={!prefersReduced ? 'animate3' : undefined}
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '20%',
          width: '45vw',
          height: '45vw',
          maxWidth: '650px',
          maxHeight: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.09) 0%, rgba(0, 240, 255, 0.05) 50%, transparent 70%)',
          filter: 'blur(95px)',
          opacity: 0.7
        }}
      />
    </div>
  );
}
