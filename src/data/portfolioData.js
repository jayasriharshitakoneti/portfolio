export const personalInfo = {
  name: "Jaya Sriharshita Koneti",
  shortName: "Harshita",
  title: "Software Engineer",
  tagline: "Building scalable applications with AI-powered solutions",
  location: "Boston, MA",
  linkedin: "https://www.linkedin.com/in/jaya-sriharshita-koneti/",
  github: "https://github.com/jayasriharshitakoneti",
  resume: "/JayaSriharshitaKoneti.docx",
  profileImage: "/dp.jpg"
};

export const about = {
  description: [
    "Software Engineer pursuing my Master's in Computer Science at Northeastern University, specializing in scalable, AI-powered applications.",
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
  "Programming Languages": ["Java", "Python", "JavaScript", "Dart", "TypeScript", "C", "C#"],
  "Backend": ["Spring Boot", "Node.js", "Express.js", "Next.js", "Kafka", "Flask", "REST", "gRPC", "FastAPI", "JWT", "OAuth"],
  "Frontend": ["React", "Angular", "Flutter", "MaterialUI", "Tailwind", "Android", "HTML"],
  "Cloud & DevOps": ["AWS", "GCP", "Linux", "Docker", "Podman", "Kubernetes", "Terraform", "Git", "Jenkins"],
  "Databases": ["MySQL", "Oracle", "PostgreSQL", "SQLite", "MongoDB", "MSSQL", "Snowflake", "Neo4j", "Redis"],
  "Testing & Performance": ["Jest", "Mockito", "JUnit", "JMeter", "Grafana", "Dynatrace", "Splunk", "ELK Stack"],
  "AI/ML Tools": ["Groq", "Gemini", "Ollama", "Hugging Face", "LangChain4j", "GraphRAG", "n8n"],
  "AI Practices": ["Prompt Engineering", "MCP", "A2A Protocols", "Copilot", "Claude Code"]
};

export const experience = [
  {
    company: "Fidelity Investments",
    role: "Software Data Engineer",
    location: "Boston, MA",
    period: "Jul 2025 – Dec 2025",
    highlights: [
      "Built a Prompt Optimizer POC using Python and OpenAI APIs to refine prompts, recommend optimal LLMs per use case, reduce token usage, and improve Copilot output quality",
      "Generated multi-region synthetic PII datasets using OpenAI to validate third-party data masking APIs",
      "Automated Snowflake boilerplate generation utility for install and uninstall files, streamlining developer workflows",
      "Enforced organization-specific AI guardrails as part of GitHub Copilot Champions project",
      "Prepared, tuned, and indexed 1M+ Asset Management records using Neo4j and Snowflake for a GraphRAG-based GenAI tool",
      "Identified label inconsistencies across 20 datasets, reducing false anomaly reporting by 72%",
      "Built and maintained 11 web scrapers using Python ingesting 60+ GB/month across Google Reviews, Trends, ESG, and other datasets for audit and investment analytics"
    ]
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer",
    location: "Hyderabad, India",
    period: "Jan 2022 – Aug 2024",
    highlights: [
      "Brought in $60K/year savings by decommissioning OS instances and migrating workflows to AWS cloud infrastructure",
      "Automated 20+ customer service call lines using Elastic Stack (ELK) and AI, saving over 600 business hours with feedback",
      "Developed automated loan report generation system using Spring Boot (Java), serving multiple business flows under Archival services",
      "Solely led design and development of CodeBoosters UI using React, adopted by 20,000+ users for developer productivity",
      "Remediated 100+ critical security vulnerabilities including SQL injections and Cross-Site Scripting across all environments",
      "Managed end-to-end data migration, database purging using Oracle, and production deployments across multiple business flows",
      "Reduced printing costs by 21% across FAShip project by implementing IP and socket-based printing solutions using Java and C#",
      "Mentored 7 interns on Java, Spring Boot, internal tools, and dev workflows, accelerating their onboarding and project delivery",
      "Built an internal portal vulnerability scanning tool using Python, awarded runners-up in firm-wide innovation competition"
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
    description: "Founded an AI-powered platform enabling seamless modernization of legacy enterprise systems with zero downtime through automated code transformation and semantic analysis. Designing transformation pipelines for Java upgrades, framework migrations, and UI/API modernization using LLMs.",
    tech: ["React", "Vite", "Python", "LLMs", "AI"],
    period: "May 2025 – Present",
    github: null,
    live: "https://siliconagent.ai",
    featured: true
  },
  {
    title: "AI Prompt Optimizer",
    description: "Developed a web application using Python, Flask, and Groq's LLM API to convert vague prompts into optimized versions and recommend the best suited model for each task. Implemented prompt engineering techniques like Chain-of-Thought with JSON, YAML, and MD output support.",
    tech: ["Python", "Flask", "Groq API", "LLM"],
    period: "Dec 2025",
    github: "https://github.com/jayasriharshitakoneti/Prompt-Optimizer",
    live: null
  },
  {
    title: "PantryFlow",
    description: "Developed a voice-enabled Flutter diet assistant using Groq API and Claude Sonnet to generate personalized meal plans from available pantry ingredients. Integrated speech recognition and NLP for voice and text input, enabling low-latency conversational interaction.",
    tech: ["Flutter", "Groq API", "Claude Sonnet", "NLP"],
    period: "Aug 2025 – Nov 2025",
    github: "https://github.com/jayasriharshitakoneti/DietAppFlutter",
    live: null
  },
  {
    title: "Jeena",
    description: "A low-code web application generation tool developed using Spring, React.js, and MySQL that generates deployment-ready code for UI screens, backend, and database based on user inputs. Helps users bootstrap web application creation by reducing efforts by approximately 60%.",
    tech: ["Spring", "React", "MySQL"],
    period: "Jun 2022 – Dec 2024",
    github: "https://github.com/jayasriharshitakoneti/jeena-ui",
    githubBackend: "https://github.com/jayasriharshitakoneti/jeena-backend",
    live: null,
    hasResearch: true
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
  gpa: "3.7/4",
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
