export const personalInfo = {
  name: "Jaya Sriharshita Koneti",
  shortName: "Harshita",
  title: "Software Engineer",
  tagline: "Building enterprise-scale systems and AI-powered applications",
  location: "Boston, MA · Open to Relocation",
  website: "https://www.koneti.in",
  linkedin: "https://www.linkedin.com/in/jaya-sriharshita-koneti/",
  github: "https://github.com/jayasriharshitakoneti",
  resume: "/JayaSriharshitaKoneti.docx",
  profileImage: "/dp.jpg"
};

export const about = {
  description: [
    "Software Engineer with an MS in Computer Science from Northeastern University, specializing in scalable, AI-powered applications.",
    "3+ years of experience at major fintech companies including JPMorgan Chase and Fidelity Investments, with expertise in full-stack development, cloud architecture, and AI/ML integration.",
    "Founder of SiliconAgent.ai, an AI platform for modernizing legacy enterprise systems with zero downtime."
  ],
  highlights: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Research Papers", value: "2" },
    { label: "Certifications", value: "6+" }
  ]
};

export const skills = {
  "Programming Languages": ["Python", "Java", "JavaScript", "TypeScript", "C#"],
  "Backend": ["Spring Boot", "Node.js", "Next.js", "FastAPI", "Flask", ".NET", "REST", "gRPC", "Kafka", "JWT", "OAuth"],
  "Frontend": ["React", "Angular", "Flutter", "MaterialUI", "Tailwind", "Android", "HTML"],
  "Cloud & DevOps": ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Linux", "Podman", "Git"],
  "Databases": ["Snowflake", "Neo4j", "PostgreSQL", "Oracle", "MSSQL", "MongoDB", "MySQL", "SQLite", "Redis", "Pinecone", "FAISS"],
  "Testing & Performance": ["Jest", "Playwright", "Mockito", "JUnit", "JMeter", "Grafana", "Dynatrace", "Splunk", "ELK Stack"],
  "AI/ML Tools": ["OpenAI", "Bedrock", "Groq", "Gemini", "LangChain", "LangChain4j", "GraphRAG", "RAG", "Hugging Face", "Ollama", "Pandas", "NumPy", "n8n"],
  "AI Practices": ["Prompt Engineering", "Multi-Agent Orchestration", "MCP", "A2A Protocols", "Copilot", "Claude Code"]
};

export const experience = [
  {
    company: "Fidelity Investments",
    role: "Software Engineer",
    location: "Boston, MA",
    period: "Jul 2025 – Dec 2025",
    highlights: [
      "Built and deployed a GraphRAG pipeline (Neo4j, Snowflake, OpenAI) with vector embeddings and semantic retrieval across 1M+ Asset Management records, enabling relationship-aware investment analytics",
      "Built a Prompt Optimizer using Python and OpenAI APIs, applying 5 prompt engineering techniques across 6 LLMs to cut prompt iteration and token waste, generating structured JSON variants with ~5s latency",
      "Generated 50K+ multi-region synthetic PII datasets via LLM-based augmentation to stress-test data masking APIs, ensuring financial privacy compliance",
      "Established AI governance practices (auditing, responsible-AI standards), reaching ~99% approved-stack compliance",
      "Applied data cleaning and feature engineering across 20 financial datasets, reducing false anomaly reporting by 72%",
      "Automated Snowflake DDL boilerplate generation, saving ~10 hrs/week of developer time",
      "Engineered 11 production web scrapers (Python, Playwright, Selenium) ingesting 60+ GB/month of Google Reviews, Trends, and ESG data for audit and investment analytics"
    ]
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer",
    location: "Hyderabad, India",
    period: "Jan 2022 – Aug 2024",
    highlights: [
      "Architected migration of on-prem MSSQL databases to AWS, designing the system architecture and data migration strategy, saving $60K/year in infrastructure cost",
      "Designed Oracle DB partitioning with a 90-day sliding window on active data synced to a historical archive, reducing loan report generation from 25+ mins to under 1 min across 2B+ records",
      "Automated 20+ customer service call lines using Elastic Stack (ELK) and AI, saving 600+ business hours annually through intelligent routing and NLP-driven feedback analysis",
      "Led end-to-end design and launch of CodeBoosters (React), a developer productivity platform adopted by 20,000+ users",
      "Developed an automated loan report generation system (Spring Boot) serving 20+ business flows under Archival Services, cutting manual reporting effort by 40%",
      "Engineered IP and socket-based printing infrastructure for the FAShip archiving system, enabling location-independent printing of 1M+ pages/year across teams",
      "Built an internal portal vulnerability scanning tool (Python), recognized runners-up in a firm-wide innovation competition",
      "Remediated 100+ critical security vulnerabilities (SQL injection, XSS) across all environments, improving audit readiness and regulatory compliance",
      "Mentored 7 interns on Java, Spring, and financial technology workflows, accelerating onboarding and project delivery"
    ]
  },
  {
    company: "ASM Career Solutions",
    role: "Mobile Development Intern",
    location: "Remote",
    period: "Jun 2020 – Aug 2020",
    highlights: [
      "Developed an Android app using SQLite for interview preparation with customized quizzes and leaderboard"
    ]
  }
];

export const projects = [
  {
    title: "SiliconAgent.ai",
    description: "Founded an AI-powered platform for legacy enterprise system modernization — Java upgrades, framework migrations (Struts→Spring Boot, JSP→React), API transformation, and database migration. Designed a 6-stage pipeline alternating Language Server Protocol (LSP) analysis with multi-model AI orchestration (Claude, GPT-4o, Gemini, Llama) for compiler-level validation, directly targeting the hallucinated APIs and broken type contracts that plague pure AI-only migration. Up to 60% cost reduction versus manual, with zero-downtime deployment and automated rollback.",
    tech: ["Python", "LLMs", "LSP", "Multi-Agent", "AI"],
    period: "Jan 2026 – Mar 2026",
    github: null,
    live: "https://siliconagent.ai",
    featured: true
  },
  {
    title: "FinRAG",
    description: "A retrieval-augmented QA system for financial documents built on the FinQA dataset (86K+ chunks across 10K+ filing pages), using Groq for inference and Weaviate for vector retrieval. A hybrid BM25 + dense retrieval pipeline improved Recall@3 from 70.3% (BM25 only) to 74.7% (hybrid) via fusion-weight tuning. Led the hallucination-detection module — an LLM-as-a-judge verifier — with citation-grounded, few-shot/CoT prompt design to flag unsupported claims in generated answers.",
    tech: ["Python", "RAG", "Groq", "Weaviate", "LLM-as-a-Judge"],
    period: "Jul 2026 – Aug 2026",
    github: null,
    live: null
  },
  {
    title: "MIRA",
    description: "An AI mock interview platform where users upload a resume and job description, then practice through real-time voice interviews with AI-generated questions and follow-ups, and receive structured performance feedback. Calls route through a custom Gemini/Groq multi-model gateway with retry, token management, and latency/cost logging. Built on Next.js 15 + Supabase (row-level security on every table, encrypted API keys), orchestrated via a stateful 9-state agentic session engine, with an 11-stage CI/CD pipeline.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Gemini", "Groq"],
    period: "Jan 2026 – Apr 2026",
    github: null,
    live: "https://miraprep.vercel.app"
  },
  {
    title: "Codie",
    description: "An open-source Claude Code plugin that teaches data structures and algorithms through Socratic coaching — guiding users toward solutions with targeted questions instead of giving answers away. Integrates directly into a developer's Claude Code workflow, turning everyday coding practice into structured learning. Adopted by 100+ users — direct hands-on experience building and extending coding-agent tooling.",
    tech: ["Prompt Engineering", "Claude Code", "Algorithms", "TypeScript"],
    period: "Jun 2026",
    github: "https://github.com/jayasriharshitakoneti/codie-plugin",
    live: null
  },
  {
    title: "PackRight",
    description: "A collaborative trip-packing app combining AI-generated packing suggestions (Groq's Llama 3.1 70B) with a real-time kanban board for group travel. Teams claim and track items together via Supabase Realtime, with partial-quantity claiming and a fair auto-assignment algorithm for unclaimed items. 92%+ statement coverage with Jest unit/integration and Playwright E2E tests.",
    tech: ["Next.js", "TypeScript", "Supabase", "Groq"],
    period: "Mar 2026",
    github: "https://github.com/likhithreddy/packright",
    live: null
  },
  {
    title: "Stockfolio",
    description: "A stock portfolio management app applying core database concepts with simulated market data. Uses MySQL stored procedures and triggers to handle portfolio-update logic and data consistency at the database layer rather than purely in application code. Java Spring Boot backend with a React (Vite) frontend.",
    tech: ["Java", "Spring Boot", "MySQL", "React"],
    period: "Mar 2025 – Apr 2025",
    github: "https://github.com/jayasriharshitakoneti/stockportfolio-frontend",
    live: null
  },
  {
    title: "Jeena",
    description: "A low-code platform that generates ready-to-deploy frontend, backend, and database code from user choices, reducing application-creation effort by approximately 60%. Built with Spring Boot, React, and MySQL.",
    tech: ["Spring Boot", "React", "MySQL", "Full-Stack"],
    period: "Jul 2022 – Jun 2025",
    github: "https://github.com/jayasriharshitakoneti/jeena-ui",
    githubBackend: "https://github.com/jayasriharshitakoneti/jeena-backend",
    live: null,
    hasResearch: true
  },
  {
    title: "Face Mask Detection",
    description: "A real-time face mask detection system using OpenCV and a MobileNet-based classifier, optimized for lightweight, low-latency inference on live video streams — an early hands-on application of ML in a production-style real-time setting rather than a static notebook.",
    tech: ["Python", "OpenCV", "MobileNet", "Machine Learning"],
    period: "Jan 2022",
    github: "https://github.com/jayasriharshitakoneti/FaceMaskDetection",
    live: null
  }
];

export const publications = [
  {
    title: "Weberator: A Low Code Backend Generator Tool",
    publisher: "IEEE",
    date: "June 2024",
    description: "2023 IEEE Fifth International Conference on Advances in Electronics, Computers and Communications (ICAECC), Bengaluru, India, pp. 1-5",
    link: "https://ieeexplore.ieee.org/document/10560283"
  },
  {
    title: "Kore: A Friend in Web Development",
    publisher: "IJRASET",
    date: "July 2023",
    description: "International Journal for Research in Applied Science and Engineering Technology, vol. 11, no. 7, pp. 1634-1641",
    link: "https://ijraset.com/research-paper/kore-a-friend-in-web-development"
  }
];

export const certifications = [
  {
    name: "Amazon AWS Cloud Developer Associate",
    issuer: "Amazon Web Services",
    date: "Mar 2024"
  },
  {
    name: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle",
    date: "Jun 2023"
  },
  {
    name: "Meta Front-End Developer Professional",
    issuer: "Meta (Coursera)",
    date: "Jan – Nov 2023"
  },
  {
    name: "Data Structures and Algorithms Specialization",
    issuer: "UC San Diego (Coursera)",
    date: "Mar – Oct 2023"
  },
  {
    name: "Design Patterns",
    issuer: "University of Alberta (Coursera)",
    date: "Jun 2022"
  },
  {
    name: "Application Development using Microservices and Serverless",
    issuer: "IBM (Coursera)",
    date: "Mar 2022"
  }
];

export const education = {
  degree: "Master of Science in Computer Science",
  university: "Northeastern University",
  location: "Boston, MA",
  graduation: "Aug 2026",
  gpa: "3.83/4",
  achievements: ["Graduate Leadership Institute Certification (Fall 2024)"],
  coursework: [
    "Algorithms",
    "Database Management Systems",
    "Foundations of Artificial Intelligence",
    "Programming Paradigm Design",
    "Web Development",
    "Cloud Computing",
    "Natural Language Processing"
  ]
};

export const blogPosts = [
  {
    slug: "csharp-vs-java-springboot",
    title: "C# / .NET vs Java / Spring Boot — A Side-by-Side",
    date: "July 2026",
    readTime: "3 min read",
    category: "Engineering",
    likes: 24,
    image: "/blog/day1.webp",
    imageAlt: "C# .NET vs Java Spring: an enterprise ecosystem comparison (infographic)",
    excerpt: "Years into Java/Spring Boot, I started learning C#/.NET. I assumed it’d just be Java with different syntax. It’s not — and that’s the fun part.",
    tags: ["csharp", "dotnet", "java", "springboot", "softwareengineering"],
    intro: [
      "Dips into learning C#/.NET. Years into Java/Spring Boot. I assumed it’d just be Java with different syntax.",
      "It’s not — and that’s the fun part. A few things I’ve noticed, side by side:"
    ],
    points: [
      {
        title: "Streams vs LINQ",
        body: "Java Streams are explicit and composable, built step by step. LINQ reads like SQL. Same job, two clean ways to think about data."
      },
      {
        title: "Day-to-day ergonomics",
        body: "LINQ also just feels lightweight — day-to-day filtering, sorting, grouping read like one clean sentence instead of a day of operations."
      },
      {
        title: "Properties",
        body: "C# properties ({ get; set; }) fold getters/setters into one line. Java’s explicitness has its own place, but writing a class in C# feels noticeably lighter."
      },
      {
        title: "Global usings",
        body: "Global usings mean I write “using System;” once for the whole project instead of repeating imports in every file. Small thing, but it adds up."
      }
    ],
    closing: "Neither stack is “better.” They’re solving the same engineering problems with different philosophies — and having strong roots in one makes the other click faster, not slower. Still early. Plenty more to learn before it clicks fully.",
    question: "If you’ve worked across both — what’s your favorite from each?",
    comparison: {
      dotnet: {
        name: ".NET (C#)",
        features: [
          { icon: "FiGrid", text: "Microsoft Ecosystem" },
          { icon: "FiCloud", text: "Azure Integration" },
          { icon: "FiCode", text: "Visual Studio" },
          { icon: "FiBriefcase", text: "Strong Enterprise Support" },
          { icon: "FiZap", text: "High Performance" },
          { icon: "FiGlobe", text: "Cross-Platform (NET 8+)" },
          { icon: "FiCloudRain", text: "Web & Cloud (ASP.NET Core)" }
        ]
      },
      spring: {
        name: "Java Spring",
        features: [
          { icon: "FiUsers", text: "Vibrant Open Community" },
          { icon: "FiCpu", text: "Platform Independence (JVM)" },
          { icon: "FiServer", text: "Spring Boot & Microservices" },
          { icon: "FiLayers", text: "Modular Framework" },
          { icon: "FiPackage", text: "Rich Library Support" },
          { icon: "FiBox", text: "Vendor Neutrality" },
          { icon: "FiTrendingUp", text: "Cloud-Native Ready" }
        ]
      }
    }
  }
];
