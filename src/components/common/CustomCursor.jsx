import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const prefersReduced = useReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch capability
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e) => {
      const target = e.target;
      const interactiveEl = target.closest('a, button, input, textarea, [data-cursor]');
      
      if (interactiveEl) {
        const cursorType = interactiveEl.getAttribute('data-cursor');
        if (cursorType === '3d') {
          setCursorVariant('three');
          setCursorText('ROTATE');
        } else if (cursorType === 'view') {
          setCursorVariant('view');
          setCursorText('VIEW');
        } else {
          setCursorVariant('hover');
          setCursorText('');
        }
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || prefersReduced || !isVisible) {
    return null;
  }

  const variants = {
    default: {
      width: 32,
      height: 32,
      borderColor: 'rgba(0, 240, 255, 0.45)',
      backgroundColor: 'rgba(0, 240, 255, 0.05)',
      borderWidth: '1.5px',
      scale: 1
    },
    hover: {
      width: 52,
      height: 52,
      borderColor: 'rgba(157, 78, 221, 0.9)',
      backgroundColor: 'rgba(157, 78, 221, 0.15)',
      borderWidth: '2px',
      scale: 1.15
    },
    three: {
      width: 68,
      height: 68,
      borderColor: 'rgba(0, 240, 255, 0.9)',
      backgroundColor: 'rgba(0, 240, 255, 0.2)',
      borderWidth: '2px',
      scale: 1.2
    },
    view: {
      width: 60,
      height: 60,
      borderColor: 'rgba(247, 37, 133, 0.9)',
      backgroundColor: 'rgba(247, 37, 133, 0.2)',
      borderWidth: '2px',
      scale: 1.1
    }
  };

  return (
    <>
      {/* Outer spring-smoothed ring */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(1px)'
        }}
        animate={variants[cursorVariant]}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {cursorText && (
          <span style={{
            fontSize: '9px',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: '#ffffff',
            textShadow: '0 0 6px rgba(0, 240, 255, 0.9)'
          }}>
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center sharp laser dot */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: 5,
          height: 5,
          borderRadius: '50%',
          backgroundColor: '#00f0ff',
          boxShadow: '0 0 10px #00f0ff, 0 0 15px #9d4edd',
          pointerEvents: 'none',
          zIndex: 100000
        }}
      />
    </>
  );
}
