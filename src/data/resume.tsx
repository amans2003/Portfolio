import { Icons } from "@/components/icons";
import { Database, HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Aman Singh",
  initials: "AS",
  url: "https://github.com/amans2003",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  title: "Full Stack Developer",
  pronouns: "he/him",
  status: "Open to Work",
  timezone: "Asia/Kolkata",
  timezoneLabel: "IST",
  description:
    "Full-Stack Developer & AI Enthusiast. I love crafting delightful user experiences and shipping products people care about. Always learning, always building.",
  summary:
    "I'm a [BCA graduate from IEC University, HP](/#education) with hands-on experience building production-grade full-stack applications. I've worked across the MERN stack, AI/LLM integrations, and real-time systems — from [fintech web apps to e-commerce platforms and AI-powered tools](/#work). I'm passionate about clean architecture, developer tooling, and leveraging AI to solve real problems. Currently [building at Holstein](/#work) and always looking for the next challenge.",
  avatarUrl: "/baby.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "MongoDB", icon: Database },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
   contact: {
    email: "amaninternsingh2003@gmail.com",
    tel: "+917439064694",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/amans2003",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/amans2003",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/amans2003",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:amaninternsingh2003@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Holstein",
      href: "#",
      badges: ["Full-time"] as string[],
      location: "Remote",
      title: "Software Developer — Full Stack",
      logoUrl: "",
      start: "Oct 2025",
      end: "Present",
      description:
        "Engineered a production-grade multi-vendor e-commerce platform (MERN stack) from the ground up, encompassing JWT authentication, vendor dashboards, product lifecycle management, and a complete order-workflow module — currently live and processing real transactions. Managed VPS deployment, domain configuration (DNS), and server maintenance for multiple company web properties. Led end-to-end system architecture including MongoDB schema design, cross-platform REST API integration with mmc.group, query optimisation, and cloud deployment using Vercel and Render. Built and maintained responsive web applications using React.js and Firebase, improving page-load performance through code splitting, asset optimisation, and component memoisation.",
    },
    {
      company: "SnapGro",
      href: "#",
      badges: [] as string[],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "May 2025",
      end: "Aug 2025",
      description:
        "Architected and shipped the Rider Panel in React.js — secure login, real-time order tracking, and intelligent delivery assignment that reduced dispatch delays by ~30%. Designed and integrated a RESTful API layer connecting admin and rider systems, enabling dynamic order management and an auditable end-to-end delivery workflow. Implemented real-time chat and live order-status updates via Supabase, improving admin-to-rider coordination and meaningfully cutting issue-resolution time.",
    },
    {
      company: "Bluestoke Fintech",
      href: "#",
      badges: ["Internship"] as string[],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "",
      start: "Sep 2024",
      end: "Feb 2025",
      description:
        "Delivered a fully responsive fintech web application (HTML5, CSS3, JavaScript) covering Home, Sign Up, Sign In, Manage IPO, and Forgot Password flows with seamless navigation. Enforced cross-browser compatibility (Chrome, Firefox, Safari, Edge) and collaborated with the team lead to ensure pixel-perfect, accessible UX across all screen sizes.",
    },
  ],
    education: [
    {
      school: "IEC University, HP",
      href: "https://iecuniversity.ac.in",
      degree: "Bachelor of Computer Applications (BCA) — Computer Science | CGPA: 7.2",
      logoUrl: "",
      start: "Sep 2022",
      end: "June 2025",
    },
  ],
   certifications: [
    {
      title: "Claude 101: Introduction to Claude",
      issuer: "Anthropic",
      description:
        "Foundations of LLM prompting, Claude's capabilities and safety principles.",
    },
    {
      title: "Building with the Claude API",
      issuer: "Anthropic",
      description:
        "Hands-on API integration, tool use, advanced prompt engineering, and production deployment.",
    },
  ],
  projects: [
    {
      title: "Gen AI Interview Report Platform",
      href: "#",
      dates: "2024 – Present",
      active: true,
      description:
        "An AI-powered career tool where users upload a PDF résumé with a target role and receive a fully personalised interview report — ATS score, tailored questions, skill-gap analysis, and a learning roadmap. Integrated Google Gemini-3-Flash API with structured prompt engineering to generate consistent, high-quality outputs at scale. Implemented résumé parsing + Zod schema validation to sanitise all data before AI processing, preventing malformed inputs and prompt-injection attacks.",
      technologies: [
        "MERN Stack",
        "Google Gemini API",
        "Zod",
        "PDF Generation",
        "Prompt Engineering",
      ],
      links: [] as { type: string; href: string }[],
      image: "",
      video: "",
    },
    {
      title: "Code Review AI Agent",
      href: "https://code-review-ai-agent-two.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "A production-grade multi-agent AI code auditing console built with the MERN stack. Features specialized AI agents simulating Security, Performance, Clean Code, and Architecture reviewers that consolidate into an overall code quality score. Supports real-time log streaming via Server-Sent Events (SSE), Monaco Editor with line-by-line issue decorations, PDF/Markdown report exports, an AI Chat sidebar for file-level Q&A, and a dual-mode engine that falls back to local pattern matching if no Gemini API key is provided. GitHub OAuth login via Passport.js with a Developer Demo Login bypass.",
      technologies: [
        "MERN Stack",
        "Google Gemini API",
        "BullMQ",
        "Redis",
        "Monaco Editor",
        "Socket.io / SSE",
        "Passport.js",
        "Tailwind CSS",
        "Framer Motion",
        "Recharts",
      ],
      links: [
        { type: "Website", href: "https://code-review-ai-agent-two.vercel.app/" },
        { type: "Source", href: "https://github.com/amans2003/Code-Review-AI-Agent" },
      ],
      image: "",
      video: "",
    },
    {
      title: "PingMe — Real-Time Chat Application",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "A production-ready chat app with Socket.io powering sub-second instant messaging and JWT-based stateless authentication for secure, scalable session management. Integrated Cloudinary for profile image storage/CDN delivery and Axios for clean, error-handled API communication with React Toast notifications. Designed a fully responsive UI with 10+ switchable DaisyUI themes, ensuring a polished experience on both desktop and mobile.",
      technologies: [
        "MERN Stack",
        "Socket.io",
        "Cloudinary",
        "JWT",
        "Tailwind CSS",
        "DaisyUI",
      ],
      links: [] as { type: string; href: string }[],
      image: "",
      video: "",
    },
  ],
  hackathons: [] as {
    title: string;
    dates: string;
    location: string;
    description: string;
    image?: string;
    win?: string;
    links: { title: string; href: string }[];
  }[],
};