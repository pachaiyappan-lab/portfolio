import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      zIndex: 9999,
      background: 'rgba(0, 0, 0, 0.4)',
      pointerEvents: 'none'
    }}>
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, #00f0ff 0%, #9d4edd 50%, #f72585 100%)',
          boxShadow: '0 0 12px rgba(0, 240, 255, 0.8), 0 0 20px rgba(157, 78, 221, 0.5)'
        }}
      />
    </div>
  );
}
