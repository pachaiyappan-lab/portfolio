import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { socialsData } from '../../data/socials';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from '../common/BrandIcons';
import HeroScene from '../3d/HeroScene';

export default function Hero({ onNavigate }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const getSocialIcon = (icon) => {
    switch (icon) {
      case 'Github': return <GithubIcon size={18} />;
      case 'Linkedin': return <LinkedinIcon size={18} />;
      case 'Twitter': return <TwitterIcon size={18} />;
      case 'Instagram': return <InstagramIcon size={18} />;
      case 'Youtube': return <YoutubeIcon size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '60px',
        overflow: 'hidden'
      }}
    >
      <div className="section-container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '40px'
          }}
        >
          {/* LEFT COLUMN: Animated Intro, Roles, & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(0, 240, 255, 0.08)',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)',
                marginBottom: '24px'
              }}
            >
              <Terminal size={14} color="#00f0ff" />
              <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                WELCOME TO MY DIGITAL MATRIX
              </span>
            </motion.div>

            {/* Greeting & Name */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '16px'
              }}
            >
              Hi, I'm <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Role Rotator */}
            <div
              style={{
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                overflow: 'hidden'
              }}
            >
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.45 }}
                style={{
                  fontSize: 'clamp(1.25rem, 3.2vw, 1.9rem)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  color: '#9d4edd',
                  textShadow: '0 0 15px rgba(157, 78, 221, 0.5)'
                }}
              >
                {personalInfo.titles[roleIndex]}
              </motion.div>
            </div>

            {/* Short Tagline */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '540px',
                marginBottom: '36px'
              }}
            >
              {personalInfo.tagline}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '38px'
              }}
            >
              <button
                onClick={() => onNavigate('projects')}
                className="btn-primary"
                style={{ minWidth: '180px' }}
              >
                <span>View My Work</span>
                <ArrowRight size={17} />
              </button>

              <a
                href={personalInfo.resumePath}
                download="resume.pdf"
                className="btn-secondary"
                style={{ minWidth: '180px' }}
              >
                <Download size={17} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Interactive Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                CONNECT:
              </span>
              <div style={{ display: 'flex', gap: '10px' }}>
                {socialsData.slice(0, 5).map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = social.color;
                      e.currentTarget.style.boxShadow = `0 0 15px ${social.hoverGlow}`;
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Three.js Interactive 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '440px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Ambient Background Aura */}
            <div
              style={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 240, 255, 0.18) 0%, rgba(157, 78, 221, 0.12) 50%, transparent 70%)',
                filter: 'blur(60px)',
                pointerEvents: 'none'
              }}
            />

            {/* Three.js Canvas Container */}
            <div
              style={{
                width: '100%',
                height: '100%',
                minHeight: '460px',
                position: 'relative',
                zIndex: 2
              }}
            >
              <HeroScene />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
