import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Sparkles } from 'lucide-react';
import { socialsData } from '../../data/socials';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from '../common/BrandIcons';

export default function SocialLinks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Github': return <GithubIcon size={24} />;
      case 'Linkedin': return <LinkedinIcon size={24} />;
      case 'Twitter': return <TwitterIcon size={24} />;
      case 'Instagram': return <InstagramIcon size={24} />;
      case 'Youtube': return <YoutubeIcon size={24} />;
      case 'Mail': return <Mail size={24} />;
      default: return <Sparkles size={24} />;
    }
  };

  return (
    <section className="section-container" style={{ paddingBottom: '40px' }}>
      <div className="section-header" style={{ marginBottom: '40px' }}>
        <span className="section-tag">// 07. DIGITAL FOOTPRINT & COMMUNITY</span>
        <h2 className="section-title">
          Connect & <span className="gradient-text">Follow</span>
        </h2>
        <p className="section-subtitle">
          Find me sharing open source code, architectural thoughts, design experiments, and engineering streams.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          maxWidth: '1080px',
          margin: '0 auto'
        }}
      >
        {socialsData.map((social, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <motion.a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="glass-panel"
              style={{
                padding: '20px 24px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                background: 'rgba(15, 17, 28, 0.7)',
                border: `1px solid ${isHovered ? social.color : 'rgba(255, 255, 255, 0.08)'}`,
                boxShadow: isHovered ? `0 12px 35px rgba(0,0,0,0.6), 0 0 20px ${social.hoverGlow}` : 'none',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Icon Container with 3D Tilt Rotation */}
              <motion.div
                animate={{
                  rotateY: isHovered ? 18 : 0,
                  rotateX: isHovered ? -10 : 0,
                  scale: isHovered ? 1.15 : 1
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: `${social.color}20`,
                  border: `1px solid ${social.color}55`,
                  color: social.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {getIcon(social.icon)}
              </motion.div>

              {/* Text Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 700 }}>
                    {social.platform}
                  </h4>
                  <ExternalLink size={14} color="var(--text-muted)" />
                </div>
                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: social.color, marginBottom: '4px' }}>
                  {social.username}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {social.label}
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
