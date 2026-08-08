// Central Static Data Store for Cyberpunk Portfolio
export const portfolioData = {
  personal: {
    name: "ALEXANDER_VEX",
    alias: "VEX // DEV_UNIT_09",
    title: "SENIOR FULL-STACK & CYBER ARCHITECT",
    status: "AVAILABLE_FOR_HIRE // ONLINE",
    bio: "Specializing in high-performance web applications, cloud architecture, and security-hardened systems. Crafting resilient digital experiences at the intersection of modern front-end design and backend engineering.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    location: "JAKARTA // INDONESIA (UTC+7)",
    experienceYears: "6+ YEARS",
    systemStatus: "100% OPERATIONAL",
    securityClearance: "LEVEL_4 // AUTHORIZED",
    resumeUrl: "#",
  },

  specs: [
    { label: "CORE_STACK", value: "React, Node.js, TypeScript, Go" },
    { label: "CLOUD_NODE", value: "AWS / Docker / Kubernetes" },
    { label: "DATABASES", value: "PostgreSQL, Redis, MongoDB" },
    { label: "UI_STYLE", value: "Cyberpunk / Glassmorphism / Dark UI" },
  ],

  skills: {
    frontend: [
      { name: "React.js / Next.js", level: 95, icon: "Code2" },
      { name: "TypeScript / ES6+", level: 90, icon: "FileCode" },
      { name: "CSS3 / TailWind / Cyber UI", level: 92, icon: "Palette" },
      { name: "HTML5 & Web Performance", level: 98, icon: "Globe" },
    ],
    backend: [
      { name: "Node.js / Express / Fastify", level: 88, icon: "Server" },
      { name: "Go (Golang)", level: 80, icon: "Cpu" },
      { name: "REST & GraphQL APIs", level: 92, icon: "Network" },
      { name: "PostgreSQL & Prisma", level: 85, icon: "Database" },
    ],
    devopsSecurity: [
      { name: "Docker & Kubernetes", level: 82, icon: "Container" },
      { name: "CI/CD Pipelines (GitHub Actions)", level: 86, icon: "GitBranch" },
      { name: "Cloud Infrastructure (AWS/GCP)", level: 78, icon: "Cloud" },
      { name: "Web Security & Penetration Testing", level: 84, icon: "ShieldCheck" },
    ]
  },

  projects: [
    {
      id: "cyber-vault",
      title: "CYBER_VAULT // Encrypted Cloud Asset Manager",
      category: "FULLSTACK",
      description: "A zero-knowledge encrypted cloud storage interface with real-time file sharing, access logs, and biometrics auth simulation.",
      longDescription: "CyberVault provides end-to-end encrypted storage for high-security assets. Built using Web Crypto API, React, and Node.js microservices with audit trail logging.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Node.js", "WebCrypto", "Tailwind", "Docker"],
      highlights: ["AES-256-GCM encryption in browser", "Audit trail & IP logs", "Drag & Drop instant upload", "Zero-knowledge security"],
      demoUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/example/cyber-vault"
    },
    {
      id: "neural-mesh",
      title: "NEURAL_MESH // AI Monitoring & Metrics Dashboard",
      category: "FRONTEND",
      description: "Real-time AI telemetry panel featuring interactive node maps, model accuracy metrics, and customizable chart widgets.",
      longDescription: "High-density data visualization web app for AI cluster monitoring. Includes SVG canvas graph rendering, WebSocket live feeds, and custom dark mode themes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Chart.js", "WebSockets", "CSS Grid"],
      highlights: ["Real-time WebSocket telemetry", "Canvas node mesh renderer", "Custom alert thresholds", "Mobile responsive layout"],
      demoUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/example/neural-mesh"
    },
    {
      id: "synth-wave-api",
      title: "SYNTH_WAVE // High-Throughput REST Gateway",
      category: "BACKEND",
      description: "Low-latency microservices API gateway built with Go and Redis caching, capable of handling 50k requests/sec.",
      longDescription: "Microservices gateway designed for ultra-fast request routing, rate limiting, and JWT authentication verification across distributed clusters.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      tags: ["Go", "Redis", "Docker", "PostgreSQL", "Prometheus"],
      highlights: ["50,000+ RPS latency < 5ms", "Token bucket rate limiting", "Distributed tracing support", "Prometheus metrics export"],
      demoUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/example/synth-wave-api"
    },
    {
      id: "matrix-os",
      title: "MATRIX_OS // Web-Based Cyber Terminal & IDE",
      category: "AI_CYBER",
      description: "In-browser virtual terminal operating system with embedded file manager, code execution sandbox, and command history.",
      longDescription: "An interactive browser desktop environment built in React that simulates a high-tech terminal OS with full command parsing and customizable themes.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Xterm.js", "WebAssembly", "CSS Modules"],
      highlights: ["Extensible CLI parser engine", "Virtual file system (VFS)", "Custom sound & theme effects", "Zero latency interaction"],
      demoUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/example/matrix-os"
    }
  ],

  experience: [
    {
      period: "2024 - PRESENT",
      role: "LEAD CYBERFRONT ARCHITECT",
      company: "NEXUS_SYSTEMS // TOKYO / REMOTE",
      description: "Architecting high-scale frontend infrastructure, security protocols, and real-time dashboard systems for enterprise clients.",
      skills: ["React", "TypeScript", "Micro-frontends", "CI/CD"]
    },
    {
      period: "2022 - 2024",
      role: "SENIOR FULL-STACK ENGINEER",
      company: "CYBER_DYNAMICS LABS",
      description: "Developed cloud-native APIs, WebSockets backend services, and interactive reactive UI dashboards with 99.9% uptime.",
      skills: ["Node.js", "Go", "PostgreSQL", "React", "Docker"]
    },
    {
      period: "2020 - 2022",
      role: "FRONTEND DEVELOPER",
      company: "SYNTH_TECH SOLUTIONS",
      description: "Built responsive single-page web applications, design component systems, and integrated third-party REST services.",
      skills: ["JavaScript", "React", "CSS3/Sass", "REST APIs"]
    }
  ],

  socials: [
    { name: "GITHUB", url: "https://github.com", icon: "Github", handle: "@alexander-vex" },
    { name: "LINKEDIN", url: "https://linkedin.com", icon: "Linkedin", handle: "in/alexander-vex" },
    { name: "TWITTER / X", url: "https://twitter.com", icon: "Twitter", handle: "@vex_cyber" },
    { name: "DISCORD", url: "#", icon: "MessageSquare", handle: "vex_unit#0009" },
    { name: "EMAIL", url: "mailto:vex.cyber.dev@gmail.com", icon: "Mail", handle: "vex.cyber.dev@gmail.com" }
  ]
};
