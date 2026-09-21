import { Project, SkillCategory, TimelineItem, ServiceItem, ProcessStep, AchievementItem, QuickStat } from '../types';

export const PERSONAL_INFO = {
  name: "Zainab ",
  monogram: "Z",
  avatar: "/profile-logo.png",
  role: "AI Developer · Frontend AI Engineer",
  tagline: "Creative Technologist & Interface Craftsman",
  bioHeadline: "I build intelligent digital experiences that feel human.",
  bioSubheadline: "An AI developer focused on engineering intelligent applications, responsive interfaces, and meaningful digital experiences where machine capability meets human intuition.",
  availability: "AVAILABLE FOR INTERNSHIPS · COLLABORATION · PROJECTS",
  email: "zainabzia.021@gmail.com",
  whatsapp: "+92 332 1800795",
  whatsappRaw: "923321800795",
  github: "https://github.com/zainab021",
  linkedin: "https://linkedin.com/in/zainab-zia",
  location: "sialkot, PK · Available Worldwide (Remote)",
  aboutParagraphs: [
    "I am an Artificial Intelligence undergraduate and developer working at the intersection of modern machine learning and reactive frontend engineering. Rather than treating AI as a hidden black box, I design and build systems that make intelligent capabilities intuitive, responsive, and genuinely helpful.",
    "My work spans full-stack Python/FastAPI architectures, generative AI workflows, agentic tool-use, and modern React interfaces. I believe technology should feel as thoughtful as it is powerful — removing friction between human intent and software execution."
  ],
  currentlyExploring: [
    "AGENTIC AI WORKFLOWS",
    "REACTIVE FRONTEND ENGINEERING",
    "GENERATIVE MULTIMODAL INTERFACES",
    "STREAMING TOKEN UX",
    "HUMAN-AI COLLABORATIVE TOOLS"
  ]
};

export const QUICK_STATS: QuickStat[] = [
  {
    label: "AI PROJECTS",
    value: "06+",
    subtext: "End-to-end intelligent applications"
  },
  {
    label: "TECHNOLOGIES",
    value: "10+",
    subtext: "Languages, frameworks & model APIs"
  },
  {
    label: "HACKATHONS",
    value: "03+",
    subtext: "Competitive innovation & sprints"
  },
  {
    label: "CURRENT FOCUS",
    value: "AI × FRONTEND",
    subtext: "Next-gen human-centered interfaces"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "forensix-zr",
    number: "01",
    name: "FORENSIX-ZR",
    tagline: "AI × Crime Intelligence & Case Investigation",
    category: "AI",
    description: "An AI-powered forensic crime investigation and case analysis platform combining semantic vector search, LLM conversational intelligence, and structured case logs.",
    longDescription: "ForensiX-ZR tackles the challenge of parsing through disparate evidence reports, witness testimonies, and criminal investigation logs. Using vector embeddings and context-aware LLM retrieval, investigators can query complex incident timelines, extract timeline correlations, and cross-reference ballistic or circumstantial data in natural language.",
    technologies: ["FastAPI", "Python", "PostgreSQL", "LangChain", "Vector DB", "React"],
    keyFeatures: [
      "Natural language case interrogation with multi-document RAG context",
      "Automated suspect and timeline extraction across unstructured police records",
      "Semantic similarity search across incident reports and ballistic archives",
      "Secure role-based access audit logs for forensic data integrity"
    ],
    architectureOverview: "FastAPI REST backend with LangChain document chunking and vector storage, connected to a high-contrast React investigative dashboard with token streaming.",
    githubUrl: "https://github.com/zainab021/ForensiX-ZR",
    liveUrl: "https://forensix-zr.demo.app",
    accentColor: "#B86CFF",
    imageTheme: "crime-ai"
  },
  {
    id: "clarioflow",
    number: "02",
    name: "ClarioFlow",
    tagline: "Behavioral AI Focus & Cognitive Control",
    category: "FRONTEND",
    description: "A digital distraction and focus-control platform utilizing real-time behavioral insights to reduce cognitive fatigue and keep deep workers in flow state.",
    longDescription: "ClarioFlow is an ergonomic productivity environment engineered to counter dopamine-driven digital interruptions. By analyzing task completion rhythms and user interaction patterns, the app dynamically adapts workspace density, silences intrusive stimuli, and provides unobtrusive reflective prompts.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Web Storage API", "Motion", "Chart.js"],
    keyFeatures: [
      "Intelligent focus intervals with adaptive cognitive load monitoring",
      "Minimalist distraction shield blocking high-friction tab switching",
      "Visual productivity rhythm heatmaps and weekly flow analytics",
      "Zero-latency client-side state machine with encrypted local persistence"
    ],
    architectureOverview: "Pure client-side single-page architecture built with React 18, utilizing requestAnimationFrame timing loops and localized metric computation.",
    githubUrl: "https://github.com/zainab021/ClarioFlow",
    liveUrl: "https://clarioflow.vercel.app",
    accentColor: "#FF8FD8",
    imageTheme: "focus-flow"
  },
  {
    id: "curait",
    number: "03",
    name: "CURAiT",
    tagline: "Healthcare Intelligence & Decision Support",
    category: "AI",
    description: "An AI-driven clinical decision-support prototype assisting healthcare teams with symptom triangulation, patient intake triaging, and biomedical research retrieval.",
    longDescription: "CURAiT bridges the gap between clinical intake forms and medical literature. Designed with doctor-in-the-loop safety constraints, the system extracts critical biomarkers from patient notes, cross-references differential diagnostic guidelines, and flags potential contraindications in medication regimens.",
    technologies: ["Python", "FastAPI", "Next.js", "Hugging Face Models", "PostgreSQL", "Tailwind CSS"],
    keyFeatures: [
      "Clinical entity recognition (NER) for symptoms, medications, and allergies",
      "Differential triage scoring categorized by urgency thresholds",
      "Citation-grounded summaries ensuring all advice references clinical trials",
      "Accessible patient intake portal with multi-language voice-to-text"
    ],
    architectureOverview: "Containerized Python microservice executing fine-tuned BioBERT inference, paired with a Next.js physician clinical workstation UI.",
    githubUrl: "https://github.com/zainab021/CURAiT",
    liveUrl: "https://curait-health.preview.dev",
    accentColor: "#CDB4FF",
    imageTheme: "health-ai"
  },
  {
    id: "unisync",
    number: "04",
    name: "UniSync",
    tagline: "Unified Academic Campus Management Hub",
    category: "FULL STACK",
    description: "A centralized academic synchronization platform streamlining student course registration, faculty scheduling, departmental announcements, and resource allocations.",
    longDescription: "UniSync modernizes fragmented higher-education tooling by integrating attendance logs, timetable clash resolution, grading workflows, and automated advisor notifications into a unified, responsive interface.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
    keyFeatures: [
      "Automated conflict-detection algorithm for student semester schedules",
      "Real-time departmental push notices and exam deadline alerts",
      "Faculty grade submission ledger with instant GPA computation",
      "Responsive design optimized for low-bandwidth campus network access"
    ],
    architectureOverview: "Express.js REST API with connection-pooled PostgreSQL, coupled with a responsive component library designed for high accessibility.",
    githubUrl: "https://github.com/zainab021/UniSync",
    liveUrl: "https://unisync-portal.app",
    accentColor: "#E89BFF",
    imageTheme: "unisync"
  },
  {
    id: "latent-canvas",
    number: "05",
    name: "LatentCanvas",
    tagline: "Generative AI Creative UI Playground",
    category: "EXPERIMENTS",
    description: "An interactive creative experiment allowing users to sculpt prompts across a 2D vector space, dynamically morphing generative styles in real-time.",
    longDescription: "LatentCanvas reimagines text-to-image prompting by treating keywords as physical gravity attractors in an interactive Cartesian plane. Moving prompt nodes dynamically recalculates blend weights and streams generative variations.",
    technologies: ["TypeScript", "Canvas API", "WebGL", "GenAI API", "Tailwind CSS"],
    keyFeatures: [
      "2D spatial prompt weighting with spring-physics nodal drag",
      "Real-time token interpolation and latent visual preview",
      "Exportable prompt graph recipes with reproducible seed parameters",
      "Smooth 60FPS canvas rendering with particle feedback loops"
    ],
    architectureOverview: "Lightweight HTML5 Canvas rendering context with vector math pipelines communicating with image generation endpoints.",
    githubUrl: "https://github.com/zainab021/LatentCanvas",
    liveUrl: "https://latent-canvas.art",
    accentColor: "#B86CFF",
    imageTheme: "neuro-canvas"
  }
];

export const SKILL_GROUPS: SkillCategory[] = [
  {
    title: "AI & MACHINE LEARNING",
    description: "Algorithms, foundation models, and agent architectures",
    skills: [
      { name: "Python", highlight: "Primary Language" },
      { name: "AI APIs (Gemini, Claude, OpenAI)", highlight: "Integration" },
      { name: "Generative AI", highlight: "Text & Multimodal" },
      { name: "Model Experimentation", highlight: "Evaluation" },
      { name: "Prompt Engineering", highlight: "System Design" },
      { name: "Agentic Workflows", highlight: "Tool-Use & RAG" },
      { name: "Vector Databases", highlight: "Embeddings" }
    ]
  },
  {
    title: "FRONTEND ENGINEERING",
    description: "Responsive, accessible, and high-performance interfaces",
    skills: [
      { name: "React", highlight: "Core Library" },
      { name: "Next.js", highlight: "Full Stack UI" },
      { name: "TypeScript", highlight: "Type-Safe Development" },
      { name: "Tailwind CSS", highlight: "Utility Styling" },
      { name: "JavaScript (ESNext)", highlight: "Modern Standards" },
      { name: "HTML5 / Semantic Web", highlight: "Accessibility" },
      { name: "Motion & Micro-interactions", highlight: "Cinematic UI" }
    ]
  },
  {
    title: "BACKEND & ARCHITECTURE",
    description: "Scalable server runtimes, data pipelines, and APIs",
    skills: [
      { name: "FastAPI", highlight: "High-Speed Async" },
      { name: "Node.js & Express", highlight: "REST Services" },
      { name: "RESTful API Design", highlight: "Contract-First" },
      { name: "Serverless Architecture", highlight: "Cloud Functions" },
      { name: "Authentication & JWT", highlight: "Security" }
    ]
  },
  {
    title: "DATABASE & PERSISTENCE",
    description: "Structured relational models and vector storage",
    skills: [
      { name: "PostgreSQL", highlight: "Relational DB" },
      { name: "SQL Querying", highlight: "Complex Joins & Indexes" },
      { name: "Vector Stores", highlight: "Semantic Search" },
      { name: "Prisma & ORMs", highlight: "Data Modeling" }
    ]
  },
  {
    title: "TOOLS & WORKFLOWS",
    description: "Version control, agentic tooling, and developer environments",
    skills: [
      { name: "Git & GitHub", highlight: "Version Control" },
      { name: "VS Code", highlight: "Primary IDE" },
      { name: "Claude Code", highlight: "AI-Assisted Dev" },
      { name: "Linux & Bash", highlight: "CLI & Tooling" },
      { name: "Vite & Build Tooling", highlight: "Modern Bundlers" }
    ]
  }
];

export const KEY_MILESTONES: TimelineItem[] = [
  {
    year: "2022",
    title: "First Steps into Computing",
    role: "Matric — Computer Science (Government School)",
    category: "FOUNDATION",
    description: "Completed my matriculation from a government school with Computer Science as my major. This was where my passion for computers, programming logic, and technology first started.",
    details: [
      "Completed Matric in Computer Science from Government School",
      "Studied computer fundamentals and early algorithmic thinking",
      "Built the early foundation that sparked my journey into AI"
    ],
    status: "past",
    isKeyMilestone: true
  },
  {
    year: "2022–2024",
    title: "Exploring Technology Through ICS",
    role: "ICS — KIPS College, Ranger Road",
    category: "INTERMEDIATE",
    description: "Completed my first and second year of ICS at KIPS College on Ranger Road. This period helped me move beyond basic computer usage and develop a stronger interest in technology, mathematics, and programming.",
    details: [
      "Completed ICS at KIPS College (Ranger Road campus)",
      "Strengthened problem-solving, mathematics, and programming fundamentals",
      "Began coding beyond the classroom curriculum"
    ],
    status: "past",
    isKeyMilestone: true
  },
  {
    year: "2024–PRESENT",
    title: "BS in Artificial Intelligence",
    role: "BS Artificial Intelligence — UMT (University of Management & Technology)",
    category: "UNDERGRADUATE · ONGOING",
    description: "Currently pursuing my BS in Artificial Intelligence at UMT. Moving from fundamental algorithms, mathematics, and machine learning to building working AI applications, reactive web interfaces, and contributing to the Computer Science Society.",
    details: [
      "Enrolled in BS Artificial Intelligence at UMT (Sialkot)",
      "Studying AI algorithms, machine learning models, and data structures",
      "Participating in AI hackathons and university technical activities",
      "Active member of the Computer Science Society building practical software"
    ],
    status: "current",
    isKeyMilestone: true
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2022",
    title: "First Steps into Computing",
    role: "Matric — Computer Science (Government School)",
    category: "FOUNDATION",
    description: "Completed my matriculation from a government school with Computer Science as my major. This was where I first developed an interest in computers, programming, and technology.",
    details: [
      "Studied Computer Science fundamentals",
      "Developed my first understanding of programming and computational thinking",
      "Built the foundation that later led me toward Artificial Intelligence"
    ],
    status: "past",
    isKeyMilestone: true
  },
  {
    year: "2022 · SUMMER",
    title: "Building My Digital Foundations",
    role: "MS Office Intensive Training",
    category: "SUMMER",
    description: "During the summer, I took an intensive MS Office course to strengthen my practical computer skills.",
    details: [
      "Learned Microsoft Word, Excel, and PowerPoint",
      "Developed basic digital productivity and documentation skills",
      "Gained confidence working with everyday computer tools"
    ],
    status: "past"
  },
  {
    year: "2022–2024",
    title: "Exploring Technology Through ICS",
    role: "ICS — KIPS College, Ranger Road",
    category: "INTERMEDIATE",
    description: "After matriculation, I completed my first and second year of ICS at KIPS College on Ranger Road. This period helped me move beyond basic computer usage and develop a stronger interest in technology and programming.",
    details: [
      "Studied computer science and programming fundamentals",
      "Strengthened problem-solving and logical thinking",
      "Started exploring programming beyond the classroom"
    ],
    status: "past",
    isKeyMilestone: true
  },
  {
    year: "PRE-DEGREE",
    title: "My First Step Toward Web Development",
    role: "WordPress & Basic Web Development (Academy)",
    category: "EARLY EXPLORATION",
    description: "Before starting my BS in Artificial Intelligence, I explored WordPress through an academy to gain practical experience with websites and digital content.",
    details: [
      "Learned the fundamentals of WordPress",
      "Explored how websites are structured and managed",
      "Started experimenting with basic code and web customization",
      "Developed an early interest in frontend development"
    ],
    status: "past"
  },
  {
    year: "2024",
    title: "Starting My BS in Artificial Intelligence",
    role: "BS Artificial Intelligence — UMT (1st Year)",
    category: "UNDERGRADUATE",
    description: "I began my BS in Artificial Intelligence at UMT (University of Management and Technology), turning my general interest in technology into a formal academic journey. My studies introduced me to programming, mathematics, algorithms, data structures, and the fundamentals of Artificial Intelligence and Machine Learning.",
    details: [
      "Built stronger programming and problem-solving foundations",
      "Studied algorithms, data structures, mathematics, and AI concepts",
      "Began developing practical projects alongside academic learning"
    ],
    status: "past",
    isKeyMilestone: true
  },
  {
    year: "2025–2026",
    title: "From Learning to Building",
    role: "AI Projects, Hackathons & Practical Experience",
    category: "PRACTICAL SPRINT",
    description: "After completing my first year of BS AI at UMT, I started focusing more on practical experience. During university summers, I participated in hackathons and AI-focused activities where I learned how to turn ideas into working projects within limited time and team environments.",
    details: [
      "Participated in AI and technology hackathons",
      "Worked on collaborative university and competition projects",
      "Explored frontend development alongside AI",
      "Gained experience presenting and developing project ideas"
    ],
    status: "past"
  },
  {
    year: "2026 · CURRENT",
    title: "Growing Through Projects & Community",
    role: "BS Artificial Intelligence (UMT) · 2nd Year & CS Society",
    category: "CURRENT FOCUS",
    description: "While continuing my BS in Artificial Intelligence at UMT, I became involved in the Computer Science Society and worked on different projects with other students. This stage has been about moving from simply learning concepts to actually building things, experimenting with technologies, and understanding how AI can become part of useful digital products.",
    details: [
      "Completed my second year of BS Artificial Intelligence at UMT",
      "Became part of the Computer Science Society",
      "Worked on collaborative projects and technical activities",
      "Continued developing my frontend and AI development skills",
      "Exploring AI-assisted development, modern web technologies, and practical AI applications"
    ],
    status: "current",
    isKeyMilestone: true
  }
];

export const TIMELINE_SUMMARY = {
  headline: "How I Got Here.",
  subheadline: "A journey that started with basic computer skills and gradually grew into a passion for Artificial Intelligence, frontend development, and building practical digital products.",
  currentReflectionTitle: "Where I Am Now",
  currentReflectionText: "I am continuing to grow as an AI Developer and Frontend AI Engineer, combining what I have learned from computer science, AI, web development, hackathons, and collaborative projects. My current focus is on building practical AI-powered applications while improving my frontend engineering and product-building skills."
};

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "AI-Powered Applications",
    description: "Building practical, reliable software around modern LLM APIs, vector stores, and machine learning models rather than gimmick wrappers.",
    capabilities: ["RAG Systems & Vector Search", "LLM Prompt Architecture", "Streaming Token Interfaces", "Agentic Tool Calling"],
    icon: "Cpu"
  },
  {
    number: "02",
    title: "Frontend Experiences",
    description: "Crafting high-speed, responsive, and visually nuanced web interfaces with strict attention to layout rhythm, typography, and accessibility.",
    capabilities: ["React & TypeScript Development", "Tailwind CSS Design Systems", "Micro-Interactions & Motion", "Mobile-First Ergonomics"],
    icon: "Layout"
  },
  {
    number: "03",
    title: "AI × UX Architecture",
    description: "Translating unpredictable model outputs, latency periods, and confidence thresholds into transparent, trustworthy user experiences.",
    capabilities: ["Optimistic UI & Streaming States", "Confidence & Citation Indicators", "Fallbacks & Guardrail UX", "Human-in-the-Loop Controls"],
    icon: "Sparkles"
  },
  {
    number: "04",
    title: "Rapid Prototyping",
    description: "Taking ambiguous concepts from initial hypothesis to an interactive, deployable web prototype in compressed timeframes.",
    capabilities: ["Proof of Concept Builds", "Interactive Clickable Demos", "Hackathon Sprint Delivery", "User Feedback Validation"],
    icon: "Zap"
  },
  {
    number: "05",
    title: "Creative Technology",
    description: "Experimenting at the frontier of generative media, interactive canvases, and multimodal inputs to discover fresh interaction paradigms.",
    capabilities: ["HTML5 Canvas & Particle Dynamics", "Generative Visual Experimentation", "Novel Navigation Patterns", "Sound & Ambient Feedback"],
    icon: "Layers"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "UNDERSTAND",
    subtitle: "Problem Framing & Human Constraints",
    description: "Deconstructing the root challenge, user journey, and data requirements before writing a single line of code.",
    output: "User Story Matrix & Core Constraints"
  },
  {
    number: "02",
    title: "EXPLORE",
    subtitle: "Model Capabilities & Architecture",
    description: "Evaluating model suitability, prompt boundaries, latency trade-offs, and state synchronization methods.",
    output: "Technical Schema & Prototype Roadmap"
  },
  {
    number: "03",
    title: "BUILD",
    subtitle: "Frontend Craft & API Plumbing",
    description: "Developing robust component hierarchies, wiring asynchronous endpoints, and styling with strict spatial discipline.",
    output: "Full-Stack Functional Prototype"
  },
  {
    number: "04",
    title: "TEST",
    subtitle: "Latency, Edge Cases & Usability",
    description: "Validating error boundaries, connection drops, streaming timeouts, and accessibility contrast standards across all viewports.",
    output: "QA & Benchmark Report"
  },
  {
    number: "05",
    title: "ITERATE",
    subtitle: "Feedback & Ergonomic Tuning",
    description: "Refining micro-interactions, smoothing animation curves, trimming layout shifts, and polishing user copy.",
    output: "Optimized User Experience"
  },
  {
    number: "06",
    title: "SHIP",
    subtitle: "Production Readiness & Verification",
    description: "Deploying production-grade builds with clean telemetry, SEO tags, responsive testing, and maintainable documentation.",
    output: "Live, Functional Digital Product"
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "hec-genai",
    title: "HEC Generative AI Training Cohort",
    issuer: "Higher Education Commission (HEC)",
    year: "2025",
    category: "Specialized AI Cohort",
    description: "Selected for intensive national training covering state-of-the-art Generative AI architectures, prompt optimization, transformer mechanics, and ethical AI deployment.",
    badge: "Selected Cohort Fellow"
  },
  {
    id: "hackathon-finalist",
    title: "National AI Hackathon Finalist",
    issuer: "Competitive AI Innovation Sprint",
    year: "2025",
    category: "Technical Hackathon",
    description: "Achieved top placement by conceptualizing, architecting, and live-pitching an AI-assisted societal problem-solving prototype within a strict 36-hour sprint.",
    badge: "Top Finalist"
  },
  {
    id: "shark-tank",
    title: "Shark Tank Venture Participation",
    issuer: "University Entrepreneurship & Innovation Summit",
    year: "2025",
    category: "Venture Pitch & Product Strategy",
    description: "Collaborated in an executive student team pitching a commercially viable AI-driven productivity product to an evaluation panel of angel investors and tech founders.",
    badge: "Pitch Contender"
  },
  {
    id: "forage-virtual",
    title: "Software Engineering Virtual Experience",
    issuer: "Forage Industry Programs",
    year: "2024",
    category: "Industry Simulation",
    description: "Completed comprehensive practical modules encompassing agile workflows, data schema design, git team practices, and full-stack software problem solving.",
    badge: "Verified Completion"
  }
];
