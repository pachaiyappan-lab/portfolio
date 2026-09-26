import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Code, Terminal, CheckCircle2 } from 'lucide-react';
import { codingProfilesData } from '../../data/codingProfiles';

export default function CodingProfiles() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="coding" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">// 05. PROBLEM SOLVING & BENCHMARKS</span>
        <h2 className="section-title">
          Coding <span className="gradient-text">Profiles</span>
        </h2>
        <p className="section-subtitle">
          Rigorous algorithmic training, competitive programming platforms, and open-source contributions.
        </p>
      </div>

      {/* Grid of Profile Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}
      >
        {codingProfilesData.map((profile) => (
          <motion.div
            key={profile.platform}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="glass-panel"
            style={{
              padding: '26px',
              borderRadius: 'var(--radius-lg)',
              background: 'rgba(15, 17, 28, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'border-color 0.25s, box-shadow 0.25s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = profile.color;
              e.currentTarget.style.boxShadow = `0 15px 40px rgba(0,0,0,0.6), 0 0 25px ${profile.color}33`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)';
            }}
          >
            <div>
              {/* Header: Platform & Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: `${profile.color}20`,
                      border: `1px solid ${profile.color}66`,
                      color: profile.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '16px'
                    }}
                  >
                    {profile.platform.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#ffffff', margin: 0 }}>
                      {profile.platform}
                    </h3>
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      @{profile.username}
                    </span>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '3px 8px',
                    borderRadius: '999px',
                    background: `${profile.color}15`,
                    border: `1px solid ${profile.color}44`,
                    color: profile.color
                  }}
                >
                  {profile.badge}
                </span>
              </div>

              {/* Tagline */}
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>
                {profile.tagline}
              </p>

              {/* Stats Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${profile.stats.length}, 1fr)`,
                  gap: '8px',
                  padding: '12px 10px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  marginBottom: '18px',
                  textAlign: 'center'
                }}
              >
                {profile.stats.map((s, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: profile.color, fontFamily: 'var(--font-heading)' }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights Pill list */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                {profile.highlights.map((h, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <CheckCircle2 size={11} color={profile.color} />
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Profile CTA Link */}
            <a
              href={profile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${profile.color}22`;
                e.currentTarget.style.borderColor = profile.color;
                e.currentTarget.style.color = profile.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              <span>View Verified Profile</span>
              <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
