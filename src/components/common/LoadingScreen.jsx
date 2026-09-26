import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/personalInfo';

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('BOOTING SYSTEM CORE...');

  useEffect(() => {
    const statuses = [
      { at: 15, text: 'LOADING NEURAL SHADERS...' },
      { at: 40, text: 'ORBITING TECH MATRICES...' },
      { at: 70, text: 'SPAWNING 3D VIEWPORT...' },
      { at: 90, text: 'SYNCHRONIZING INTERFACE...' },
      { at: 100, text: 'SYSTEM ONLINE' }
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onLoadingComplete) onLoadingComplete();
          }, 350);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        const currentNext = next > 100 ? 100 : next;
        const matchingStatus = statuses.slice().reverse().find(s => currentNext >= s.at);
        if (matchingStatus) setStatusText(matchingStatus.text);
        return currentNext;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.08,
        filter: 'blur(16px)',
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#050508',
        zIndex: 99998,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        overflow: 'hidden'
      }}
    >
      {/* Background glow orb */}
      <div
        style={{
          position: 'absolute',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(157, 78, 221, 0.08) 50%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '420px', width: '100%' }}>
        {/* Cyber Logo Mark */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '64px',
            height: '64px',
            margin: '0 auto 24px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(157, 78, 221, 0.2))',
            border: '1px solid rgba(0, 240, 255, 0.4)',
            boxShadow: '0 0 25px rgba(0, 240, 255, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            color: '#00f0ff'
          }}
        >
          {personalInfo.name.charAt(0)}
        </motion.div>

        {/* Developer Name */}
        <motion.h2
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            letterSpacing: '0.15em',
            marginBottom: '8px',
            fontFamily: 'var(--font-heading)'
          }}
          className="gradient-text"
        >
          {personalInfo.name}
        </motion.h2>

        <p style={{
          fontSize: '0.85rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          marginBottom: '32px'
        }}>
          {statusText}
        </p>

        {/* Progress Bar Container */}
        <div style={{
          width: '100%',
          height: '6px',
          background: 'rgba(255, 255, 255, 0.06)',
          borderRadius: '999px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          marginBottom: '16px'
        }}>
          <motion.div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #00f0ff, #9d4edd)',
              boxShadow: '0 0 15px #00f0ff',
              borderRadius: '999px',
              transition: 'width 0.15s ease'
            }}
          />
        </div>

        {/* Numeric Counter */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <span>INITIALIZING</span>
          <span style={{ color: '#00f0ff', fontWeight: 600 }}>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
