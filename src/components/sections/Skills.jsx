import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, Box, BrainCircuit, Cloud, Code2, Cpu, Database, Eye, FileCode, Flame, GitBranch, HardDrive, Layers, Network, Palette, Search, Server, Sparkles, Terminal, TrendingUp, Workflow, Zap } from 'lucide-react';
import { skillsData } from '../../data/skills';
import SkillOrbit from '../3d/SkillOrbit';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Atom': return <Atom size={18} />;
      case 'FileCode': return <FileCode size={18} />;
      case 'Box': return <Box size={18} />;
      case 'Sparkles': return <Sparkles size={18} />;
      case 'Code2': return <Code2 size={18} />;
      case 'Palette': return <Palette size={18} />;
      case 'Layers': return <Layers size={18} />;
      case 'Server': return <Server size={18} />;
      case 'Cpu': return <Cpu size={18} />;
      case 'Terminal': return <Terminal size={18} />;
      case 'Workflow': return <Workflow size={18} />;
      case 'Network': return <Network size={18} />;
      case 'Database': return <Database size={18} />;
      case 'HardDrive': return <HardDrive size={18} />;
      case 'Zap': return <Zap size={18} />;
      case 'Cloud': return <Cloud size={18} />;
      case 'GitBranch': return <GitBranch size={18} />;
      case 'BrainCircuit': return <BrainCircuit size={18} />;
      case 'Eye': return <Eye size={18} />;
      case 'TrendingUp': return <TrendingUp size={18} />;
      case 'Search': return <Search size={18} />;
      case 'Flame': return <Flame size={18} />;
      default: return <Code2 size={18} />;
    }
  };

  const currentCategory = skillsData.categories[activeCategory];

  return (
    <section id="skills" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">// 02. TECHNICAL MATRIX</span>
        <h2 className="section-title">
          Skills & <span className="gradient-text">Competencies</span>
        </h2>
        <p className="section-subtitle">
          An interactive inventory of programming languages, modern frameworks, and cloud systems I leverage daily.
        </p>
      </div>

      {/* 3D Celestial Orbital Visualization Container */}
      <div
        className="glass-panel"
        style={{
          marginBottom: '50px',
          overflow: 'hidden',
          position: 'relative',
          padding: '10px',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          boxShadow: '0 15px 45px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 240, 255, 0.12)'
        }}
      >
        <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00f0ff' }} />
              <h3 style={{ fontSize: '1.05rem', color: '#ffffff', letterSpacing: '0.04em' }}>
                3D Tech Celestial System
              </h3>
            </div>
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              LIVE WEBGL SIMULATION
            </span>
          </div>
        </div>

        <SkillOrbit />
      </div>

      {/* Categorized Skills System */}
      <div>
        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '32px'
          }}
        >
          {skillsData.categories.map((cat, idx) => {
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(idx)}
                style={{
                  position: 'relative',
                  padding: '10px 20px',
                  borderRadius: '999px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-heading)',
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  background: isActive ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${isActive ? cat.accent : 'rgba(255, 255, 255, 0.08)'}`,
                  boxShadow: isActive ? `0 0 20px ${cat.accent}44` : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
              {currentCategory.description}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '16px'
              }}
            >
              {currentCategory.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -4, borderColor: currentCategory.accent }}
                  transition={{ duration: 0.2 }}
                  className="glass-panel"
                  style={{
                    padding: '18px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    background: 'rgba(15, 17, 28, 0.65)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px'
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: `${currentCategory.accent}18`,
                      border: `1px solid ${currentCategory.accent}44`,
                      color: currentCategory.accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {getSkillIcon(skill.icon)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                      <h4 style={{ fontSize: '0.95rem', color: '#ffffff' }}>
                        {skill.name}
                      </h4>
                      {skill.highlight && (
                        <span style={{ fontSize: '10px', color: currentCategory.accent }}>★</span>
                      )}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      <span>{skill.level}</span>
                      <span>{skill.experience}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
