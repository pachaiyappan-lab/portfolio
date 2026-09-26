import React from 'react';
import { motion } from 'framer-motion';

export default function WebGLFallback({ title = "3D Interactive Simulation" }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '380px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        background: 'radial-gradient(circle, rgba(17, 18, 29, 0.95) 0%, rgba(5, 5, 8, 0.98) 100%)',
        border: '1px solid rgba(0, 240, 255, 0.25)',
        boxShadow: 'inset 0 0 35px rgba(0, 240, 255, 0.1)',
        overflow: 'hidden'
      }}
    >
      {/* Outer spinning cyber ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          border: '2px dashed rgba(0, 240, 255, 0.4)',
          position: 'absolute'
        }}
      />

      {/* Counter-rotating inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{
          width: '190px',
          height: '190px',
          borderRadius: '50%',
          border: '1.5px solid rgba(157, 78, 221, 0.5)',
          position: 'absolute'
        }}
      />

      {/* Pulsing Core */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          boxShadow: [
            '0 0 20px rgba(0, 240, 255, 0.4)',
            '0 0 45px rgba(157, 78, 221, 0.7)',
            '0 0 20px rgba(0, 240, 255, 0.4)'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00f0ff, #9d4edd)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2
        }}
      >
        <span style={{ fontSize: '26px' }}>⚡</span>
      </motion.div>

      {/* Title & Graceful Notice */}
      <div style={{ marginTop: '160px', zIndex: 3, textAlign: 'center', padding: '0 20px' }}>
        <h4 style={{ fontSize: '1rem', color: '#ffffff', letterSpacing: '0.05em', marginBottom: '4px' }}>
          {title}
        </h4>
        <span style={{
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--accent-cyan)'
        }}>
          [CSS 3D HARDWARE FALLBACK ACTIVE]
        </span>
      </div>
    </div>
  );
}
