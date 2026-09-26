import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, FileText, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import MobileMenu from './MobileMenu';

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'articles', label: 'Articles' },
    { id: 'coding', label: 'Coding' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9000,
          padding: isScrolled ? '12px 24px' : '22px 24px',
          transition: 'padding 0.35s ease, background 0.35s ease',
          pointerEvents: 'none' // Allow canvas clicks around navbar
        }}
      >
        <div
          className={`section-container ${isScrolled ? 'glass-dock' : ''}`}
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '999px',
            pointerEvents: 'auto',
            transition: 'all 0.35s ease',
            backgroundColor: isScrolled ? 'rgba(11, 12, 20, 0.85)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(16px)' : 'none',
            border: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
            boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(0, 240, 255, 0.1)' : 'none'
          }}
        >
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('hero');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.25rem',
              letterSpacing: '0.08em',
              color: '#ffffff'
            }}
          >
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #00f0ff, #9d4edd)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#050508',
                fontWeight: 900,
                fontSize: '15px',
                boxShadow: '0 0 15px rgba(0, 240, 255, 0.6)'
              }}
            >
              {personalInfo.name.charAt(0)}
            </span>
            <span className="gradient-text">{personalInfo.name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: isScrolled ? 'transparent' : 'rgba(15, 17, 28, 0.6)',
              padding: '4px 8px',
              borderRadius: '999px',
              border: isScrolled ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)'
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                  }}
                  style={{
                    position: 'relative',
                    padding: '8px 16px',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    color: isActive ? '#ffffff' : 'var(--text-muted)',
                    transition: 'color 0.2s ease',
                    borderRadius: '999px',
                    textDecoration: 'none'
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '999px',
                        background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.18), rgba(157, 78, 221, 0.18))',
                        border: '1px solid rgba(0, 240, 255, 0.5)',
                        boxShadow: '0 0 15px rgba(0, 240, 255, 0.25)',
                        zIndex: -1
                      }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
            className="nav-actions"
          >
            <a
              href={personalInfo.resumePath}
              download="resume.pdf"
              className="btn-secondary"
              style={{
                padding: '8px 16px',
                fontSize: '0.85rem',
                borderRadius: '999px'
              }}
            >
              <FileText size={15} />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className="btn-primary"
              style={{
                padding: '8px 18px',
                fontSize: '0.85rem',
                borderRadius: '999px'
              }}
            >
              <Send size={14} />
              <span>Contact</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation"
              style={{
                display: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              className="mobile-menu-btn"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
        onNavigate={onNavigate}
      />

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .nav-actions a {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
