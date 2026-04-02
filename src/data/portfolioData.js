export const personalInfo = {
  name: "Jaya Sriharshita Koneti",
  shortName: "Harshita",
  title: "Software Engineer",
  tagline: "Building scalable applications with AI-powered solutions",
  location: "Boston, MA",
  linkedin: "https://www.linkedin.com/in/jaya-sriharshita-koneti/",
  github: "https://github.com/jayasriharshitakoneti",
  resume: "/JayaSriharshitaKoneti.pdf",
  profileImage: "/dp.jpg"
};

export const about = {
  description: [
    "I'm a Software Engineer pursuing my Master's in Computer Science at Northeastern University with a passion for building scalable, AI-powered applications.",
    "With 3+ years of experience at companies like JPMorgan Chase and Fidelity Investments, I've developed expertise in full-stack development, cloud architecture, and AI/ML integration.",
    "Currently, I'm the founder of SiliconAgent.ai, an AI-powered platform that enables seamless modernization of legacy enterprise systems."
  ],
  highlights: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Research Papers", value: "2" },
    { label: "Certifications", value: "6+" }
  ]
};

export const skills = {
  "Programming Languages": ["Java", "Python", "JavaScript", "TypeScript", "Dart", "C", "C#"],
  "Backend": ["Spring Boot", "Node.js", "Express.js", "Next.js", "Kafka", "Flask", "FastAPI", "gRPC", "REST"],
  "Frontend": ["React", "Angular", "Flutter", "HTML", "MaterialUI", "Tailwind", "Android"],
  "Cloud & DevOps": ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "Linux", "Git"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "Snowflake", "Neo4j", "Redis"],
  "AI/ML": ["Gemini", "Groq", "LangChain", "Ollama", "Hugging Face", "GraphRAG", "Prompt Engineering", "MCP"]
};

export const experience = [
  {
    company: "Fidelity Investments",
    role: "Software Data Engineer",
    location: "Boston, MA",
    period: "Jul 2025 – Dec 2025",
    highlights: [
      "Built a Prompt Optimizer POC to refine prompts, recommend optimal LLMs per use case, and improve Copilot output quality",
      "Generated multi-region synthetic PII datasets using OpenAI to validate third-party data masking APIs",
      "Built and maintained 11 web scrapers ingesting 60+ GB/month for audit and investment purposes",
      "Prepared, tuned, and indexed 1M+ Asset Management records for GraphRAG-based GenAI tool",
      "Identified label inconsistencies across 20 datasets, reducing false anomaly reporting by 72%"
    ]
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer",
    location: "Hyderabad, India",
    period: "Jan 2022 – Aug 2024",
    highlights: [
      "Brought in $60k/year savings by decommissioning OS instances & migrating workflows to cloud",
      "Automated 20+ customer service call lines using ELK Stack and AI, saving 600+ business hours",
      "Led design & development of CodeBoosters UI, used by 20,000+ users across the firm",
      "Fixed 100+ critical vulnerabilities involving SQL injections, Cross-Site scripting, and more",
      "Mentored 7 interns on internal tools and applications"
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
    description: "AI-powered platform that enables seamless modernization of legacy enterprise systems with zero downtime through automated code transformation and semantic analysis.",
    tech: ["Vite", "LLMs", "AI", "Java", "React"],
    period: "May 2025 – Present",
    github: "https://github.com/jayasriharshitakoneti/SiliconAgent",
    live: "https://siliconagent.ai",
    featured: true
  },
  {
    title: "AI Prompt Optimizer",
    description: "Web application using Python, Flask, and Groq's LLM API to convert vague prompts into optimized versions with Chain-of-Thought techniques.",
    tech: ["Python", "Flask", "Groq API", "LLM"],
    period: "Dec 2025",
    github: "https://github.com/jayasriharshitakoneti/AI-Prompt-Optimizer",
    live: null
  },
  {
    title: "PantryFlow",
    description: "Voice-enabled Flutter diet assistant using Groq API to generate personalized South Indian meal plans from available pantry ingredients.",
    tech: ["Flutter", "Groq API", "Claude", "NLP"],
    period: "Aug 2025 – Nov 2025",
    github: "https://github.com/jayasriharshitakoneti/PantryFlow",
    live: null
  },
  {
    title: "AI-Doctor",
    description: "Multimodal AI agent capable of processing text, speech, and image inputs to provide medical advice using Groq API.",
    tech: ["Flutter", "Groq API", "Speech-to-Text", "AI"],
    period: "Jan 2025 – Apr 2025",
    github: "https://github.com/jayasriharshitakoneti/AI-Doctor",
    live: null
  },
  {
    title: "Kambaz",
    description: "Canvas-style Learning Management System built with MERN stack featuring session-based authentication for concurrent logins.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    period: "Jan 2025 – Apr 2025",
    github: "https://github.com/jayasriharshitakoneti/Kambaz",
    live: null
  },
  {
    title: "StockFolio",
    description: "Stock portfolio system using MySQL with stored procedures, triggers, and role-based access for Admins and Investors.",
    tech: ["MySQL", "Spring", "React", "JDBC"],
    period: "Jan 2025 – Apr 2025",
    github: "https://github.com/jayasriharshitakoneti/StockFolio",
    live: null
  },
  {
    title: "Jeena (Weberator & Kore)",
    description: "Low-code web application generation tool that creates deployment-ready code for UI, backend, and database based on user inputs. Reduces development effort by ~60%.",
    tech: ["Spring", "React", "MySQL", "JHipster"],
    period: "Jun 2022 – Dec 2024",
    github: "https://github.com/jayasriharshitakoneti/Jeena",
    live: null,
    hasResearch: true
  }
];

export const publications = [
  {
    title: "Weberator: A Low Code Backend Generator Tool",
    publisher: "IEEE",
    date: "June 2024",
    description: "Research on bridging technical knowledge gaps for novice developers using JHipster-based solutions.",
    link: "https://ieeexplore.ieee.org/document/10649541"
  },
  {
    title: "Kore: A Friend in Web Development",
    publisher: "IJRASET",
    date: "July 2023",
    description: "Publication addressing web development assistance for beginners through automated code generation.",
    link: "https://www.ijraset.com/best-journal/kore-a-friend-in-web-development"
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
    date: "Nov 2023"
  },
  {
    name: "Data Structures and Algorithms Specialization",
    issuer: "UC San Diego (Coursera)",
    date: "Oct 2023"
  },
  {
    name: "Design Patterns",
    issuer: "University of Alberta (Coursera)",
    date: "Jun 2022"
  },
  {
    name: "Microservices and Serverless Development",
    issuer: "IBM (Coursera)",
    date: "Mar 2022"
  }
];

export const education = {
  degree: "Master of Science in Computer Science",
  university: "Northeastern University",
  location: "Boston, MA",
  graduation: "Aug 2026",
  gpa: "3.7/4",
  achievements: ["Graduate Leadership Institute Certification (Fall 2024)"]
};
