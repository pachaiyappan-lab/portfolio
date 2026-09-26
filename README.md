# 🚀 Premium 3D Futuristic Developer Portfolio

A cutting-edge, heavily animated, personal portfolio website built with **React**, **Three.js**, **React Three Fiber (R3F)**, **Framer Motion**, and **tsParticles**.

Designed with a dark cyberpunk / neo-futuristic visual identity, featuring interactive 3D WebGL scenes, celestial skill orbits, CSS 3D tilt cards, fluid gradient blurs, an animated diagnostic loading sequence, and comprehensive mobile responsiveness.

---

## 🛠️ Technology Stack

* **React 19** — Component architecture & reactivity
* **Three.js / React Three Fiber / Drei** — 3D interactive hero cyber-core, celestial skill orbits & keystone project diagnostic scanner
* **Framer Motion** — UI/page micro-animations, cursor springs, 3D tilt physics & staggered viewport animations
* **tsParticles** — Constellation particle background reacting to pointer repulsion
* **Vanilla CSS (Design Tokens)** — Cyberpunk color system, glassmorphism filters & custom cyber scrollbar
* **Canvas Confetti** — Interactive dispatch celebration

---

## 📂 Project Architecture

```
portfolio/
├── public/
│   ├── resume.pdf                       # ATS-optimized PDF resume for direct download/view
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── HeroScene.jsx            # 3D Cyber Core with gyro rings & dynamic lighting
│   │   │   ├── SkillOrbit.jsx           # 3D Celestial tech orbit with clickable inspection
│   │   │   └── FeaturedProject3D.jsx    # 3D Holographic crop diagnostic scanner
│   │   ├── common/
│   │   │   ├── BrandIcons.jsx           # Crisp SVGs for GitHub, LinkedIn, X, YouTube, LeetCode, etc.
│   │   │   ├── CustomCursor.jsx         # Magnetic dual-ring cursor (auto-disabled on mobile & touch)
│   │   │   ├── GradientBlobs.jsx        # Ambient glowing radial blur spheres
│   │   │   ├── LoadingScreen.jsx        # Cyber diagnostic boot sequence (0% to 100%)
│   │   │   ├── ParticleBackground.jsx   # Interactive tsParticles constellation
│   │   │   ├── ScrollProgress.jsx       # Neon scroll beam at top of viewport
│   │   │   └── WebGLFallback.jsx        # Graceful hardware-accelerated CSS 3D fallback
│   │   ├── layout/
│   │   │   ├── Navbar.jsx               # Floating glassmorphic dock with active pill indicator
│   │   │   ├── MobileMenu.jsx           # Fullscreen cyber overlay navigation
│   │   │   └── Footer.jsx               # Status indicator, quick links & social strip
│   │   └── sections/
│   │       ├── Hero.jsx                 # Kinetic text, role rotator, CTAs & 3D hero scene
│   │       ├── About.jsx                # Holographic avatar, viewport stat counters & timeline
│   │       ├── Skills.jsx               # 3D tech orbit + categorized skills matrix
│   │       ├── Projects.jsx             # Keystone showcase + filterable 3D tilt project cards
│   │       ├── FeaturedProject.jsx      # Keystone AI crop health project with live telemetry
│   │       ├── ProjectCard.jsx          # CSS 3D transform card with dynamic perspective tilt
│   │       ├── Articles.jsx             # Technical blog cards with read time & tags
│   │       ├── CodingProfiles.jsx       # Verified profiles (LeetCode, GitHub, GFG, CodeChef, Codeforces)
│   │       ├── Resume.jsx               # Document preview with direct PDF download & tab viewer
│   │       ├── CTA.jsx                  # 'Have an idea? Let's build it.' high-impact banner
│   │       ├── SocialLinks.jsx          # 3D reactive brand cards with glow tooltips
│   │       └── Contact.jsx              # Real-time validated dispatch form & mail client fallback
│   ├── data/
│   │   ├── personalInfo.js              # Name, bio, roles, education, stats & resume configuration
│   │   ├── skills.js                    # Categorized technical skills & 3D orbit configuration
│   │   ├── projects.js                  # Featured & technical project inventory
│   │   ├── codingProfiles.js            # Algorithmic platform stats & badges
│   │   ├── articles.js                  # Published engineering articles
│   │   └── socials.js                   # Social networks, URLs, and hover colors
│   ├── hooks/
│   │   ├── useReducedMotion.js          # Respects OS prefers-reduced-motion accessibility
│   │   └── useWebGLSupport.js           # Detects WebGL context availability
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                        # Design tokens, variables & glassmorphism utilities
├── index.html
└── package.json
```

---

## ⚡ How to Configure Your Information

All personal details, skills, projects, and links are completely data-driven:

1. **Personal Information & Bio**: Edit [`src/data/personalInfo.js`](file:///c:/Users/PACHAIYAPPAN/OneDrive/Documents/portfolio/src/data/personalInfo.js) to adjust your name, titles, bio, education, experience, and contact email.
2. **Skills & 3D Orbit**: Edit [`src/data/skills.js`](file:///c:/Users/PACHAIYAPPAN/OneDrive/Documents/portfolio/src/data/skills.js) to add or adjust categories (Frontend, Backend, AI, Database, Tools) and 3D orbiting satellites.
3. **Projects Showcase**: Edit [`src/data/projects.js`](file:///c:/Users/PACHAIYAPPAN/OneDrive/Documents/portfolio/src/data/projects.js) to add your project images, GitHub repositories, and live demo links.
4. **Coding Profiles**: Edit [`src/data/codingProfiles.js`](file:///c:/Users/PACHAIYAPPAN/OneDrive/Documents/portfolio/src/data/codingProfiles.js) to connect your LeetCode, GitHub, HackerRank, CodeChef, Codeforces, and GeeksforGeeks handles.
5. **Technical Articles**: Edit [`src/data/articles.js`](file:///c:/Users/PACHAIYAPPAN/OneDrive/Documents/portfolio/src/data/articles.js) to add your blog posts.
6. **Social Links**: Edit [`src/data/socials.js`](file:///c:/Users/PACHAIYAPPAN/OneDrive/Documents/portfolio/src/data/socials.js) to configure your LinkedIn, X/Twitter, Instagram, YouTube, and email links.
7. **Resume**: Replace [`public/resume.pdf`](file:///c:/Users/PACHAIYAPPAN/OneDrive/Documents/portfolio/public/resume.pdf) with your updated PDF resume at any time.

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build
npm run preview
```
