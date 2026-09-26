import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import FeaturedProject3D from '../3d/FeaturedProject3D';

export default function FeaturedProject({ project }) {
  if (!project) return null;

  return (
    <div
      className="glass-panel"
      style={{
        borderRadius: '24px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(16, 24, 39, 0.85), rgba(11, 12, 20, 0.95))',
        border: '1px solid rgba(16, 185, 129, 0.35)',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(16, 185, 129, 0.2)',
        marginBottom: '60px',
        position: 'relative'
      }}
    >
      {/* Top Banner Tag */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 28px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(0, 0, 0, 0.3)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={16} color="#10b981" />
          <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: '#34d399', letterSpacing: '0.1em' }}>
            KEYSTONE ARCHITECTURE PROJECT
          </span>
        </div>
        <span
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            padding: '3px 10px',
            borderRadius: '999px',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            color: '#10b981'
          }}
        >
          {project.category}
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
          gap: '30px',
          padding: '32px'
        }}
      >
        {/* Left: 3D Diagnostic Canvas & Imagery */}
        <div style={{ position: 'relative', minHeight: '340px' }}>
          <FeaturedProject3D />
        </div>

        {/* Right: Technical Specs, Metrics & CTAs */}
        <div>
          <h3
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              color: '#ffffff',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '10px'
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontSize: '1rem',
              color: '#34d399',
              fontWeight: 600,
              marginBottom: '16px'
            }}
          >
            {project.subtitle}
          </p>

          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '24px'
            }}
          >
            {project.longDescription || project.description}
          </p>

          {/* Metric Telemetry Counters */}
          {project.metrics && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '26px'
              }}
            >
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '12px 8px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#34d399', fontFamily: 'var(--font-heading)' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#34d399'
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.45)',
                color: '#ffffff'
              }}
            >
              <ExternalLink size={16} />
              <span>Launch Live System</span>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GithubIcon size={16} />
              <span>Inspect Source Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
