import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { socialsData } from '../../data/socials';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from '../common/BrandIcons';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'articles', label: 'Articles' },
    { id: 'coding', label: 'Coding' },
    { id: 'contact', label: 'Contact' }
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Github': return <GithubIcon size={18} />;
      case 'Linkedin': return <LinkedinIcon size={18} />;
      case 'Twitter': return <TwitterIcon size={18} />;
      case 'Instagram': return <InstagramIcon size={18} />;
      case 'Youtube': return <YoutubeIcon size={18} />;
      case 'Mail': return <Mail size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: '#050508',
        position: 'relative',
        zIndex: 5,
        padding: '60px 24px 30px'
      }}
    >
      <div className="section-container" style={{ padding: 0 }}>
        {/* Top Tier */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '50px'
          }}
        >
          {/* Identity & Status */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #00f0ff, #9d4edd)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#050508',
                  fontWeight: 900,
                  fontSize: '16px'
                }}
              >
                {personalInfo.name.charAt(0)}
              </span>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }} className="gradient-text">
                {personalInfo.name}
              </span>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '20px', maxWidth: '320px' }}>
              Building intelligent, interactive digital experiences with code, creativity and curiosity.
            </p>

            {/* Status pill indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                color: '#34d399'
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  display: 'inline-block'
                }}
              />
              <span>{personalInfo.status}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px', color: '#ffffff' }}>
              Navigation
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.id);
                  }}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#00f0ff')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div>
            <h4 style={{ fontSize: '0.95rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px', color: '#ffffff' }}>
              Connect & Socials
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
              {socialsData.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = social.color;
                    e.currentTarget.style.boxShadow = `0 0 15px ${social.hoverGlow}`;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{
                padding: '8px 16px',
                fontSize: '0.82rem',
                borderRadius: '999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Tier / Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '24px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
            ENGINEERED WITH REACT, THREE.JS & FRAMER MOTION
          </div>
        </div>
      </div>
    </footer>
  );
}
