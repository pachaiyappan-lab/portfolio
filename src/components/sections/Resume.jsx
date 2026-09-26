import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

export default function Resume() {
  const resumeHighlights = [
    "Full Stack Web Architecture with React & Node.js",
    "WebGL & 3D Interactive Graphics with Three.js & R3F",
    "Generative AI & Computer Vision Integration",
    "Distributed Microservices & REST/GraphQL API Design",
    "Cloud Deployments, Containerization & CI/CD Pipelines"
  ];

  return (
    <section id="resume" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">// 06. CREDENTIALS & CURRICULUM VITAE</span>
        <h2 className="section-title">
          Professional <span className="gradient-text">Resume</span>
        </h2>
        <p className="section-subtitle">
          Verified academic trajectory, full-stack competencies, and technical project leadership summary.
        </p>
      </div>

      <div
        className="glass-panel"
        style={{
          borderRadius: '24px',
          padding: '40px',
          background: 'linear-gradient(135deg, rgba(17, 18, 29, 0.85), rgba(11, 12, 20, 0.95))',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 240, 255, 0.1)',
          maxWidth: '920px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}
        >
          {/* Document Preview Card */}
          <div
            style={{
              borderRadius: '16px',
              padding: '24px',
              background: 'rgba(5, 5, 8, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: 'inset 0 0 20px rgba(0, 240, 255, 0.05)',
              position: 'relative'
            }}
          >
            {/* Header of doc */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(0, 240, 255, 0.12)',
                  border: '1px solid rgba(0, 240, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)'
                }}
              >
                <FileText size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '2px' }}>
                  {personalInfo.name} — CV
                </h4>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                  PDF FORMAT • REVISED 2026
                </span>
              </div>
            </div>

            {/* Micro highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {resumeHighlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={14} color="#10b981" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <ShieldCheck size={14} color="#00f0ff" />
              <span>CRYPTOGRAPHICALLY VERIFIED & ATS-OPTIMIZED</span>
            </div>
          </div>

          {/* Action CTAs & Overview */}
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 800, marginBottom: '12px' }}>
              Download or View Curriculum Vitae
            </h3>
            
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>
              Detailed documentation outlining engineering accomplishments, architectural case studies, computer science coursework, and industrial experience.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {/* Actual PDF download link with download="resume.pdf" */}
              <a
                href={personalInfo.resumePath}
                download="resume.pdf"
                className="btn-primary"
                style={{ minWidth: '190px' }}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>

              {/* View PDF in new browser tab */}
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ minWidth: '170px' }}
              >
                <ExternalLink size={18} />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
