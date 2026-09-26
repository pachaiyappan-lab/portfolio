import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Send, X } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

export default function MobileMenu({ isOpen, onClose, navItems, activeSection, onNavigate }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.25 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9990,
            backgroundColor: 'rgba(5, 5, 8, 0.92)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px'
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={22} />
          </button>

          {/* Navigation Links */}
          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              textAlign: 'center'
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  variants={itemVariants}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                    onClose();
                  }}
                  style={{
                    fontSize: '1.75rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    textShadow: isActive ? '0 0 15px rgba(0, 240, 255, 0.6)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  {isActive && (
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
                  )}
                  {item.label}
                </motion.a>
              );
            })}

            {/* Mobile CTAs */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginTop: '32px',
                width: '100%',
                maxWidth: '260px'
              }}
            >
              <a
                href={personalInfo.resumePath}
                download="resume.pdf"
                className="btn-primary"
                style={{ width: '100%' }}
                onClick={onClose}
              >
                <FileText size={16} />
                <span>Resume PDF</span>
              </a>
              <a
                href="#contact"
                className="btn-secondary"
                style={{ width: '100%' }}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                  onClose();
                }}
              >
                <Send size={16} />
                <span>Let's Talk</span>
              </a>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
