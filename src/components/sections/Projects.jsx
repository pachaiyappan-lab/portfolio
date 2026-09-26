import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/projects';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredProject = useMemo(() => {
    return projectsData.find((p) => p.featured) || projectsData[0];
  }, []);

  const otherProjects = useMemo(() => {
    return projectsData.filter((p) => !p.featured);
  }, []);

  const categories = useMemo(() => {
    const set = new Set(['All']);
    otherProjects.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, [otherProjects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return otherProjects;
    return otherProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, otherProjects]);

  return (
    <section id="projects" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">// 03. PRODUCTION SHOWCASE</span>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Real-world applications spanning AI-driven diagnostics, WebGL shaders, distributed vaults, and high-concurrency systems.
        </p>
      </div>

      {/* Primary Keystone / Featured Project */}
      <FeaturedProject project={featuredProject} />

      {/* Filter Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '36px'
        }}
      >
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                color: isActive ? '#ffffff' : 'var(--text-muted)',
                background: isActive ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${isActive ? 'rgba(0, 240, 255, 0.5)' : 'rgba(255, 255, 255, 0.08)'}`,
                boxShadow: isActive ? '0 0 15px rgba(0, 240, 255, 0.3)' : 'none',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Filtered Projects Grid with 3D Tilt Cards */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px'
        }}
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
