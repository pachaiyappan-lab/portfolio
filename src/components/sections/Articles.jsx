import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, Clock, Sparkles } from 'lucide-react';
import { articlesData } from '../../data/articles';

export default function Articles() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="articles" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">// 04. THOUGHT LEADERSHIP & WRITING</span>
        <h2 className="section-title">
          Published <span className="gradient-text">Articles</span>
        </h2>
        <p className="section-subtitle">
          Engineering breakdowns, architectural insights, and practical guides on modern web development, 3D graphics, and AI pipelines.
        </p>
      </div>

      {/* Articles Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px'
        }}
      >
        {articlesData.map((article) => (
          <motion.article
            key={article.id}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="glass-panel"
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              background: 'rgba(15, 17, 28, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              transition: 'border-color 0.25s, box-shadow 0.25s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = article.accent;
              e.currentTarget.style.boxShadow = `0 15px 40px rgba(0,0,0,0.6), 0 0 25px ${article.accent}33`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)';
            }}
          >
            {/* Thumbnail */}
            <div style={{ position: 'relative', width: '100%', height: '190px', overflow: 'hidden' }}>
              <img
                src={article.thumbnail}
                alt={article.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(5, 5, 8, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: article.accent,
                  border: `1px solid ${article.accent}55`
                }}
              >
                {article.category}
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              {/* Meta row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Calendar size={13} />
                  {article.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Clock size={13} />
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.18rem', color: '#ffffff', lineHeight: 1.35, marginBottom: '10px' }}>
                {article.title}
              </h3>

              {/* Excerpt */}
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px', flex: 1 }}>
                {article.excerpt}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      color: 'var(--text-muted)'
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Read button */}
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingTop: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span style={{ fontSize: '0.85rem', color: article.accent, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Read Article
                  <ArrowRight size={14} />
                </span>
                <BookOpen size={15} color="var(--text-muted)" />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
