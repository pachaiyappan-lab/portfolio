import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Send, Mail, MapPin, Sparkles, MessageSquare, User, AtSign, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/personalInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate backend dispatch or EmailJS service
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Trigger celebratory cyber confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#9d4edd', '#f72585', '#10b981']
        });
      } catch (err) {
        // Fallback silently
      }

      // Also trigger mailto fallback option if user wishes
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi ${personalInfo.name},\n\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">// 08. TRANSMIT TRANSMISSION</span>
        <h2 className="section-title">
          Let's Build Something <span className="gradient-text">Together</span>
        </h2>
        <p className="section-subtitle">
          Have an exciting project, architectural challenge, or collaboration in mind? Drop a transmission below.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          maxWidth: '1120px',
          margin: '0 auto'
        }}
      >
        {/* Left: Contact Info & Status Card */}
        <div
          className="glass-panel"
          style={{
            padding: '36px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(20, 22, 38, 0.75), rgba(11, 12, 20, 0.9))',
            border: '1px solid rgba(0, 240, 255, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Sparkles size={16} color="var(--accent-cyan)" />
              <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                COMMUNICATION DISPATCH
              </span>
            </div>

            <h3 style={{ fontSize: '1.75rem', color: '#ffffff', fontWeight: 800, marginBottom: '16px' }}>
              Direct Transmission
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
              I'm always open to discussing new engineering projects, creative 3D concepts, internship positions, and collaborative technical frontiers.
            </p>

            {/* Info details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(0, 240, 255, 0.1)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    EMAIL ADDRESS
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 600 }}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(157, 78, 221, 0.1)',
                    border: '1px solid rgba(157, 78, 221, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#c77dff'
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    GEOGRAPHIC LOCATION
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 600 }}>
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick email CTA button */}
          <div style={{ marginTop: '36px' }}>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              <Mail size={16} />
              <span>Open Mail Client</span>
            </a>
          </div>
        </div>

        {/* Right: Interactive Form */}
        <div
          className="glass-panel"
          style={{
            padding: '36px',
            borderRadius: '24px',
            background: 'rgba(15, 17, 28, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <form onSubmit={handleSubmit} noValidate>
            {/* Name Input */}
            <div style={{ marginBottom: '20px' }}>
              <label
                htmlFor="name"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px'
                }}
              >
                <User size={14} color="var(--accent-cyan)" />
                YOUR NAME
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Satoshi Nakamoto"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'rgba(5, 5, 8, 0.7)',
                  border: `1px solid ${errors.name ? '#f43f5e' : 'rgba(255, 255, 255, 0.12)'}`,
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent-cyan)';
                  e.target.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.2)';
                }}
                onBlur={(e) => {
                  if (!errors.name) {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              />
              {errors.name && (
                <span style={{ fontSize: '0.78rem', color: '#f43f5e', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={12} /> {errors.name}
                </span>
              )}
            </div>

            {/* Email Input */}
            <div style={{ marginBottom: '20px' }}>
              <label
                htmlFor="email"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px'
                }}
              >
                <AtSign size={14} color="var(--accent-purple)" />
                EMAIL ADDRESS
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="satoshi@bitcoin.org"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'rgba(5, 5, 8, 0.7)',
                  border: `1px solid ${errors.email ? '#f43f5e' : 'rgba(255, 255, 255, 0.12)'}`,
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent-purple)';
                  e.target.style.boxShadow = '0 0 15px rgba(157, 78, 221, 0.2)';
                }}
                onBlur={(e) => {
                  if (!errors.email) {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              />
              {errors.email && (
                <span style={{ fontSize: '0.78rem', color: '#f43f5e', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={12} /> {errors.email}
                </span>
              )}
            </div>

            {/* Subject Input */}
            <div style={{ marginBottom: '20px' }}>
              <label
                htmlFor="subject"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px'
                }}
              >
                <Sparkles size={14} color="var(--accent-pink)" />
                SUBJECT / TOPIC
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Next-Gen 3D Web Project / Role Inquiry"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'rgba(5, 5, 8, 0.7)',
                  border: `1px solid ${errors.subject ? '#f43f5e' : 'rgba(255, 255, 255, 0.12)'}`,
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent-pink)';
                  e.target.style.boxShadow = '0 0 15px rgba(247, 37, 133, 0.2)';
                }}
                onBlur={(e) => {
                  if (!errors.subject) {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              />
              {errors.subject && (
                <span style={{ fontSize: '0.78rem', color: '#f43f5e', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={12} /> {errors.subject}
                </span>
              )}
            </div>

            {/* Message Textarea */}
            <div style={{ marginBottom: '24px' }}>
              <label
                htmlFor="message"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px'
                }}
              >
                <MessageSquare size={14} color="#10b981" />
                TRANSMISSION MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your vision, timeline, tech stack, and goals..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'rgba(5, 5, 8, 0.7)',
                  border: `1px solid ${errors.message ? '#f43f5e' : 'rgba(255, 255, 255, 0.12)'}`,
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#10b981';
                  e.target.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.2)';
                }}
                onBlur={(e) => {
                  if (!errors.message) {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              />
              {errors.message && (
                <span style={{ fontSize: '0.78rem', color: '#f43f5e', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={12} /> {errors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '1rem',
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="spin-animation" />
                  <span>TRANSMITTING DISPATCH...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Transmission</span>
                </>
              )}
            </button>

            {/* Success message banner */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    marginTop: '16px',
                    padding: '12px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    color: '#34d399',
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <CheckCircle2 size={16} />
                  <span>Transmission dispatched successfully! Check your mail client to verify.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}
