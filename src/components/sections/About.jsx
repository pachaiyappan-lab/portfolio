import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, BookOpen, Briefcase, Code, Compass, GraduationCap, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

function StatCounter({ targetValue, suffix }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    const increment = targetValue / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetValue]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="about" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">// 01. ORIGIN & PHILOSOPHY</span>
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          Bridging design aesthetics and high-performance engineering to forge memorable digital landscapes.
        </p>
      </div>

      {/* Main Grid: Avatar & Bio */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '60px'
        }}
      >
        {/* Holographic Avatar Card */}
        <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            className="glass-panel"
            style={{
              position: 'relative',
              padding: '24px',
              maxWidth: '380px',
              width: '100%',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(20, 22, 36, 0.7), rgba(11, 12, 20, 0.9))',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 240, 255, 0.15)'
            }}
          >
            {/* Visual Avatar Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingTop: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'radial-gradient(circle at 50% 40%, rgba(157, 78, 221, 0.3) 0%, rgba(5, 5, 8, 0.9) 75%)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Futuristic Cyber Avatar Mesh Graphic */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '20px'
                }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(0, 240, 255, 0.4)',
                      '0 0 40px rgba(157, 78, 221, 0.6)',
                      '0 0 20px rgba(0, 240, 255, 0.4)'
                    ],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00f0ff, #9d4edd)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '44px',
                    fontWeight: 900,
                    color: '#050508',
                    marginBottom: '16px',
                    border: '3px solid rgba(255, 255, 255, 0.4)'
                  }}
                >
                  {personalInfo.name.charAt(0)}
                </motion.div>

                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '4px' }}>
                  {personalInfo.name}
                </h3>
                <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                  {personalInfo.role}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                  📍 {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Micro Terminal Bar below avatar */}
            <div
              style={{
                marginTop: '16px',
                padding: '10px 14px',
                borderRadius: '10px',
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <span>STATUS:</span>
              <span style={{ color: '#10b981' }}>ONLINE & CODING</span>
            </div>
          </div>
        </motion.div>

        {/* Narrative & Bio */}
        <motion.div variants={itemVariants}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <Sparkles size={16} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff' }}>
              {personalInfo.about.greeting}
            </h3>
          </div>

          <h4 style={{ fontSize: '1.15rem', color: 'var(--accent-purple)', fontWeight: 600, marginBottom: '18px' }}>
            {personalInfo.about.subheading}
          </h4>

          {personalInfo.about.paragraphs.map((p, idx) => (
            <p key={idx} style={{ marginBottom: '16px', fontSize: '1rem', lineHeight: 1.7 }}>
              {p}
            </p>
          ))}

          {/* Core Philosophy Pills */}
          <div style={{ marginTop: '28px' }}>
            <h5 style={{ fontSize: '0.9rem', color: '#ffffff', letterSpacing: '0.08em', marginBottom: '12px' }}>
              CORE BELIEFS:
            </h5>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {personalInfo.about.philosophy.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '12px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem', display: 'block' }}>
                    {item.title}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Metrics Bar */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '60px'
        }}
      >
        {personalInfo.stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="glass-panel"
            style={{
              padding: '24px 20px',
              textAlign: 'center',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div
              style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                fontFamily: 'var(--font-heading)',
                marginBottom: '4px'
              }}
              className="gradient-text"
            >
              <StatCounter targetValue={stat.value} suffix={stat.suffix} />
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Experience & Education Dual Columns */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}
      >
        {/* Experience Column */}
        <motion.div variants={itemVariants} className="glass-panel" style={{ padding: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <Briefcase size={20} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff' }}>Professional Experience</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {personalInfo.about.experience.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  borderLeft: '2px solid rgba(0, 240, 255, 0.4)',
                  paddingLeft: '16px',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '-5px',
                    top: '4px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#00f0ff'
                  }}
                />
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                  {exp.period}
                </span>
                <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: '2px 0 4px' }}>
                  {exp.role}
                </h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-purple)', marginBottom: '8px' }}>
                  {exp.company}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Column */}
        <motion.div variants={itemVariants} className="glass-panel" style={{ padding: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <GraduationCap size={20} color="var(--accent-purple)" />
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff' }}>Academic Education</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {personalInfo.about.education.map((edu, idx) => (
              <div
                key={idx}
                style={{
                  borderLeft: '2px solid rgba(157, 78, 221, 0.5)',
                  paddingLeft: '16px',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '-5px',
                    top: '4px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#9d4edd'
                  }}
                />
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#c77dff' }}>
                  {edu.period}
                </span>
                <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: '2px 0 4px' }}>
                  {edu.degree}
                </h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  {edu.institution}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {edu.highlights}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
