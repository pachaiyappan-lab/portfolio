export const skillsData = {
  categories: [
    {
      name: "Frontend",
      accent: "#00f0ff",
      description: "Crafting fluid, high-frame-rate user interfaces with modern reactive paradigms.",
      skills: [
        { name: "React.js", level: "Expert", experience: "3+ yrs", icon: "Atom", highlight: true },
        { name: "JavaScript (ES6+)", level: "Expert", experience: "4+ yrs", icon: "FileCode", highlight: true },
        { name: "Three.js / R3F", level: "Advanced", experience: "2+ yrs", icon: "Box", highlight: true },
        { name: "Framer Motion", level: "Advanced", experience: "2+ yrs", icon: "Sparkles", highlight: true },
        { name: "HTML5 & Semantic SEO", level: "Expert", experience: "4+ yrs", icon: "Code2" },
        { name: "CSS3 / Modern Styling", level: "Expert", experience: "4+ yrs", icon: "Palette" },
        { name: "Tailwind CSS", level: "Advanced", experience: "3+ yrs", icon: "Layers" }
      ]
    },
    {
      name: "Backend",
      accent: "#9d4edd",
      description: "Robust, decoupled API services, high concurrency, and event-driven architectures.",
      skills: [
        { name: "Node.js", level: "Advanced", experience: "3+ yrs", icon: "Server", highlight: true },
        { name: "Express.js", level: "Advanced", experience: "3+ yrs", icon: "Cpu" },
        { name: "Python", level: "Advanced", experience: "3+ yrs", icon: "Terminal", highlight: true },
        { name: "Django", level: "Intermediate", experience: "1.5 yrs", icon: "Workflow" },
        { name: "RESTful & GraphQL APIs", level: "Advanced", experience: "2.5 yrs", icon: "Network" },
        { name: "Microservices", level: "Intermediate", experience: "1.5 yrs", icon: "Component" }
      ]
    },
    {
      name: "Database & Cloud",
      accent: "#f72585",
      description: "High-integrity relational and distributed document data persistence systems.",
      skills: [
        { name: "MongoDB", level: "Advanced", experience: "2.5 yrs", icon: "Database", highlight: true },
        { name: "PostgreSQL", level: "Advanced", experience: "2+ yrs", icon: "HardDrive", highlight: true },
        { name: "MySQL", level: "Advanced", experience: "3+ yrs", icon: "Database" },
        { name: "Redis Caching", level: "Intermediate", experience: "1 yr", icon: "Zap" },
        { name: "Supabase & Firebase", level: "Advanced", experience: "2+ yrs", icon: "Cloud" }
      ]
    },
    {
      name: "DevOps & Tools",
      accent: "#3b82f6",
      description: "Industrial developer workflows, versioning, automated testing, and CI/CD pipelines.",
      skills: [
        { name: "Git & GitHub", level: "Expert", experience: "4+ yrs", icon: "GitBranch", highlight: true },
        { name: "Docker", level: "Intermediate", experience: "1.5 yrs", icon: "Container", highlight: true },
        { name: "VS Code & Neovim", level: "Expert", experience: "4+ yrs", icon: "Laptop" },
        { name: "Postman", level: "Advanced", experience: "3+ yrs", icon: "Send" },
        { name: "Vite & Webpack", level: "Advanced", experience: "2.5 yrs", icon: "Flame" },
        { name: "Linux CLI", level: "Advanced", experience: "3+ yrs", icon: "Terminal" }
      ]
    },
    {
      name: "AI & Emerging Tech",
      accent: "#10b981",
      description: "Autonomous reasoning agents, semantic retrieval pipelines, and machine vision.",
      skills: [
        { name: "Generative AI & LLMs", level: "Advanced", experience: "1.5 yrs", icon: "BrainCircuit", highlight: true },
        { name: "RAG Architectures", level: "Intermediate", experience: "1 yr", icon: "Workflow", highlight: true },
        { name: "Computer Vision & OpenCV", level: "Intermediate", experience: "1.5 yrs", icon: "Eye" },
        { name: "Machine Learning (Scikit)", level: "Intermediate", experience: "2 yrs", icon: "TrendingUp" },
        { name: "Vector Databases (Pinecone/Chroma)", level: "Intermediate", experience: "1 yr", icon: "Search" }
      ]
    }
  ],
  // 3D Orbital representation configuration
  orbitNodes: [
    { name: "React", color: "#00f0ff", distance: 2.4, speed: 0.8, size: 0.35, desc: "Component architecture & state orchestration" },
    { name: "Three.js", color: "#ffffff", distance: 3.2, speed: 0.6, size: 0.38, desc: "WebGL shaders, meshes & 3D camera controls" },
    { name: "Node.js", color: "#22c55e", distance: 4.0, speed: 0.5, size: 0.34, desc: "Asynchronous backend runtimes & event loops" },
    { name: "Python", color: "#fbbf24", distance: 4.8, speed: 0.4, size: 0.36, desc: "Data pipelines, ML models & algorithmic services" },
    { name: "MongoDB", color: "#10b981", distance: 5.6, speed: 0.35, size: 0.32, desc: "Flexible document datastores & clustering" },
    { name: "Docker", color: "#38bdf8", distance: 6.4, speed: 0.3, size: 0.33, desc: "Containerized environments & reliable deployment" },
    { name: "AI / LLM", color: "#f43f5e", distance: 7.2, speed: 0.25, size: 0.38, desc: "Vector indexing & intelligent agent inference" }
  ]
};
