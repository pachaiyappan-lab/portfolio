import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

export default function CTA({ onNavigate }) {
  return (
    <section className="section-container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div
        className="glass-panel"
        style={{
          borderRadius: '28px',
          padding: '60px 32px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(20, 22, 38, 0.9) 0%, rgba(11, 12, 20, 0.95) 100%)',
          border: '1px solid rgba(0, 240, 255, 0.35)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 240, 255, 0.15)'
        }}
      >
        {/* Ambient Center Glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(157, 78, 221, 0.1) 50%, transparent 70%)',
            filter: 'blur(70px)',
            pointerEvents: 'none'
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(0, 240, 255, 0.1)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              marginBottom: '20px'
            }}
          >
            <Sparkles size={14} color="#00f0ff" />
            <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
              LET'S CREATE SOMETHING EXTRAORDINARY
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              lineHeight: 1.15
            }}
          >
            Have an idea? <br />
            <span className="gradient-text">Let's build it.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '36px'
            }}
          >
            Whether it's an immersive 3D web application, high-accuracy AI computer vision model, or resilient full-stack microservice, let's turn your vision into reality.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center'
            }}
          >
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary"
              style={{ minWidth: '190px' }}
            >
              <span>Let's Work Together</span>
              <ArrowRight size={17} />
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-secondary"
              style={{ minWidth: '160px' }}
            >
              <Mail size={17} />
              <span>Email Me</span>
            </a>

            <button
              onClick={() => onNavigate('projects')}
              className="btn-secondary"
              style={{ minWidth: '160px' }}
            >
              <span>View Projects</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
