// ================= SKILLS =================

import reactLogo from "../assets/react.svg";
import htmlLogo from "../assets/html5.svg";
import cssLogo from "../assets/css3.svg";
import jsLogo from "../assets/js.svg";
import pythonLogo from "../assets/python.svg";
import djangoLogo from "../assets/django.svg";
import bootstrapLogo from "../assets/bootstrap.svg";
import mysqlLogo from "../assets/mysql.svg";
import nodejsLogo from "../assets/nodejs.svg";
import gitLogo from "../assets/git.svg";
import githubLogo from "../assets/github.svg";
import githubCopilotLogo from "../assets/copilot.png";
import chatgptLogo from "../assets/chatgpt.webp";
import claudeLogo from "../assets/claude.svg";
import dockerLogo from "../assets/docker.svg";
import awsLogo from "../assets/aws.svg";
import restApiLogo from "../assets/rest-api.svg";
import postgresqlLogo from "../assets/postgresql.svg";

import Blockchain from "../assets/images/Blockchain.avif";
import Edunexus from "../assets/images/Edunexus.avif";
import Portfolio from "../assets/images/Portfolio.avif";
import Domio from "../assets/images/Domio.avif";
import Ideaflux from "../assets/images/Ideaflux.avif";
import Wellscope from "../assets/images/Wellscope.webp";

export const skills = [
  { name: "React", icon: reactLogo, type: "Frontend Library", category: "Frontend" },
  { name: "JavaScript", icon: jsLogo, type: "Language", category: "Frontend" },
  { name: "HTML", icon: htmlLogo, type: "Markup", category: "Frontend" },
  { name: "CSS", icon: cssLogo, type: "Style", category: "Frontend" },
  { name: "Bootstrap", icon: bootstrapLogo, type: "UI Framework", category: "Frontend" },
  { name: "Python", icon: pythonLogo, type: "Language", category: "Backend" },
  { name: "Django", icon: djangoLogo, type: "Framework", category: "Backend" },
  { name: "Node.js", icon: nodejsLogo, type: "Runtime", category: "Backend" },
  { name: "REST API", icon: restApiLogo, type: "Backend", category: "Backend" },
  { name: "MySQL", icon: mysqlLogo, type: "Database", category: "Database" },
  { name: "PostgreSQL", icon: postgresqlLogo, type: "Database", category: "Database" },
  { name: "Git", icon: gitLogo, type: "Version Control", category: "Tools" },
  { name: "GitHub", icon: githubLogo, type: "Repository", category: "Tools", invert: true },
  { name: "Docker", icon: dockerLogo, type: "Containerization", category: "Cloud/DevOps" },
  { name: "AWS", icon: awsLogo, type: "Cloud", category: "Cloud/DevOps" },
  { name: "ChatGPT", icon: chatgptLogo, type: "AI Tool", category: "AI Tools" },
  { name: "Claude", icon: claudeLogo, type: "AI Tool", category: "AI Tools" },
  { name: "GitHub Copilot", icon: githubCopilotLogo, type: "AI Tool", category: "AI Tools", invert: true },
];

// ================= SERVICES =================
export const services = [
  {
    title: "Full Stack Developer",
    icon: pythonLogo,
  },
  {
    title: "Frontend Developer",
    icon: reactLogo,
  },
  {
    title: "UI/UX Designer",
    icon: cssLogo,
  },
];

// ================= PROJECTS =================
export const projects = [
  {
    title: "E-Voting Web Application using Blockchain Technologies",
    description:
      "Tamper-proof e-voting platform leveraging blockchain data structures, cryptographic vote verification, secure audit trails, and tamper-resistant vote recording for electoral integrity.",
    image: Blockchain,
    techStack: ["Django", "Python", "Blockchain", "Solidity", "SQLite"],
    highlights: [
      "Built secure vote verification with blockchain-backed audit trails.",
      "Used SQLite for structured election and voter records.",
      "Designed to reduce single-authority manipulation risk.",
      "Status: Academic project with core workflow completed.",
    ],
    github: "https://github.com/your-username/e-voting-system",
  },

  {
    title: "EduNexus - Academic Networking & Placement Management System",
    description:
      "Three-tier academic portal with role-based access control, secure authentication, placement tracking, event coordination, alumni networking, and real-time notification systems.",
    image: Edunexus,
    techStack: ["Django", "Python", "MySQL", "RBAC", "JWT"],
    highlights: [
      "Implemented student, faculty, and alumni role-based access.",
      "Used MySQL with Django ORM for academic and placement data.",
      "Added authenticated workflows for dashboards and notifications.",
      "Status: Full-stack academic management modules completed.",
    ],
    github: "https://github.com/Aswinachu95/Edunexus.git",
  },

  {
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio showcasing projects, technical skills, professional experience, and contact information with dynamic theme switching and optimized asset loading.",
    image: Portfolio,
    techStack: ["React", "CSS", "UI Design"],
    highlights: [
      "Built responsive sections for projects, skills, experience, and contact.",
      "Added theme switching with persisted user preference.",
      "Optimized project images with lazy loading.",
      "Status: Live portfolio project under active improvement.",
    ],
    github: "https://github.com/your-username/portfolio",
  },

  {
    title: "Domio — Multi-Vendor Rental Marketplace",
    description:
      "Scalable multi-vendor rental marketplace with role-based access control, vendor dashboards, dynamic routing, optimized database queries, and efficient marketplace operations.",
    image: Domio,
    techStack: ["Python", "Django", "MySQL", "Bootstrap 5", "RBAC"],
    highlights: [
      "Created RBAC flows for vendors, customers, and management views.",
      "Used MySQL with optimized Django ORM queries.",
      "Built 10+ vendor dashboard workflows with dynamic routing.",
      "Improved average page load time through query optimization.",
    ],
    github: "https://github.com/Aswinachu95/Domio.git",
  },

  {
    title: "Ideaflux — Startup Idea Validation Platform",
    description:
      "Django web application with role-based access control, idea validation workflows, feedback mechanisms, and collaboration tools for startup ecosystem engagement.",
    image: Ideaflux,
    techStack: ["Python", "Django", "Bootstrap"],
    highlights: [
      "Designed RBAC authentication for founders, reviewers, and investors.",
      "Used ORM-driven database models for idea validation workflows.",
      "Added feedback and collaboration features for startup validation.",
      "Status: Django web app with core product workflow completed.",
    ],
    github: "https://github.com/Aswinachu95/Ideaflux.git",
  },
  {
    title: "Wellscope AI — Clinical Insights Platform",
    description:
      "AI-powered remote patient monitoring and health alert system with explainable ML models, secure data ingestion, NLP pipelines, and clinical dashboards.",
    image: Wellscope,
    techStack: ["React", "Django", "Python", "TensorFlow", "NLP", "Docker", "AWS", "PostgreSQL"],
    highlights: [
      "Integrated secure ETL pipelines to ingest and normalize electronic health records.",
      "Built explainable ML models and NLP pipelines for risk stratification and note summarization.",
      "Responsive React dashboard with patient timelines, interactive charts, and contextual explanations.",
      "Containerized deployments with Docker and CI/CD targeting AWS for scalable inference.",
      "Status: Prototype with core ML pipelines, dashboard, and API integrations complete.",
    ],
    github: "https://github.com/Aswinachu95/Wellscope-AI",
  },
];

// ================= EXPERIENCE =================
export const experiences = [
  {
    role: "FULL STACK DEVELOPER INTERN",
    company: "Hexcent Pvt Ltd",
    duration: "Jun 2025 - Feb 2026",
    points: [
      "Developed and deployed 5+ full-stack features using Django REST Framework and React.js within an Agile SDLC.",
      "Reduced API response time by 20% through Django ORM query optimization.",
      "Engineered 8 RESTful API endpoints with JWT-based authentication and integrated them into React.js frontend workflows.",
      "Debugged and resolved 15+ critical backend and frontend issues, improving application stability by 25%.",
    ],
  },
  {
    role: "WEB3 & BLOCKCHAIN INTERN",
    company: "Zindot Innovation",
    duration: "Jul 2023 - Aug 2023",
    points: [
      "Implemented 3 Solidity smart contract modules with transaction validation logic for a decentralized application.",
      "Evaluated 5 blockchain development tools including Hardhat and Web3.js.",
      "Documented blockchain architecture findings and applied them to an e-voting system.",
    ],
  },
];

// ================= EDUCATION =================
export const education = [
  {
    course: "B.Tech - Computer Science & Business Systems",
    institution: "JCT College of Engineering and Technology, Coimbatore",
    duration: "2021 - 2025",
    points: ["CGPA: 7.4"],
  },
  {
    course: "Higher Secondary - Computer Science",
    institution: "Sree Narayana Public School, Kollengode",
    duration: "2020 - 2021",
    points: ["Score: 70%"],
  },
];

// ================= CONTACT =================
export const contact = {
  email: "achujithu73@gmail.com",
  github: "https://github.com/Aswinachu95",
  linkedin: "https://www.linkedin.com/in/aswin-k-57a703288/",
};
