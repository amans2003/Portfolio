import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

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
  avatarUrl: "/avatar.jpg",
  skillCategories: [
    {
      label: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "Kotlin"],
    },
    {
      label: "Frontend",
      items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "DaisyUI", "Bootstrap"],
    },
    {
      label: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs", "Socket.io", "JWT Auth"],
    },
    {
      label: "Databases",
      items: ["MongoDB", "MySQL", "Firebase", "Supabase"],
    },
    {
      label: "DevOps / Cloud",
      items: ["VPS Hosting", "Linux Server", "DNS / SSL", "Vercel", "Render", "CI/CD"],
    },
    {
      label: "AI / APIs",
      items: ["Google Gemini API", "Prompt Engineering", "RAG", "LLM Integration"],
    },
    {
      label: "Mobile",
      items: ["React Native", "Android (Kotlin/Java)"],
    },
    {
      label: "Tools",
      items: ["Git", "GitHub", "Postman", "VS Code", "Android Studio"],
    },
    {
      label: "Concepts",
      items: ["Data Structures & Algorithms", "OOP", "System Architecture"],
    },
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
        "Built a live multi-vendor e-commerce platform (MERN) with JWT auth, vendor dashboards, and order workflows. Managed VPS deployment, DNS/SSL, and REST API integration with mmc.group.",
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
        "Shipped the Rider Panel in React — real-time order tracking, delivery assignment, and Supabase live chat. Cut dispatch delays by ~30%.",
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
        "Built a responsive fintech web app covering IPO management and auth flows with pixel-perfect cross-browser UI across Chrome, Firefox, Safari, and Edge.",
    },
  ],
  education: [
    {
      school: "IEC University, HP",
      href: "https://iecuniversity.ac.in",
      degree: "Bachelor of Computer Applications (BCA) — Computer Science",
      cgpa: "7.2",
      logoUrl: "/iec-logo.png",
      start: "Sep 2022",
      end: "June 2025",
    },
  ],
  certifications: [
    {
      title: "Claude 101: Introduction to Claude",
      issuer: "Anthropic",
      description: "Foundations of LLM prompting, Claude's capabilities and safety principles.",
    },
    {
      title: "Building with the Claude API",
      issuer: "Anthropic",
      description: "Hands-on API integration, tool use, advanced prompt engineering, and production deployment.",
    },
  ],
  openSource: [
    {
      title: "MERN Projects Open Source Hub",
      description: "A curated collection of beginner-friendly MERN projects — open for contributions, PRs, and collaboration from the developer community.",
      href: "https://github.com/amans2003/MERN-Projects-Open-Source",
      role: "Maintainer" as const,
      logo: "https://avatars.githubusercontent.com/u/140417719?v=4",
      stars: "1",
    },
    {
      title: "DailyForge",
      description: "Open-source MERN productivity app for designing weekly routines with drag-and-drop scheduling, conflict detection, and reusable task libraries.",
      href: "https://github.com/amans2003/DailyForge",
      role: "Maintainer" as const,
      logo: "https://avatars.githubusercontent.com/u/140417719?v=4",
      stars: "—",
    },
    {
      title: "first-contributions",
      description: "Helped newcomers land their very first open source pull request — one of GitHub's most starred beginner repositories with 50k+ stars.",
      href: "https://github.com/firstcontributions/first-contributions",
      role: "Contributor" as const,
      logo: "https://avatars.githubusercontent.com/u/65816235?v=4",
      stars: "50k+",
    },
    {
      title: "React Projects for Beginners",
      description: "A community-driven repository designed to help beginners sharpen their React skills through open source collaboration.",
      href: "https://github.com/WebDevSimplified/React-projects-for-beginners",
      role: "Contributor" as const,
      logo: "https://avatars.githubusercontent.com/u/43813419?v=4",
      stars: "500+",
    },
  ],
  projects: [
    {
      title: "Gen AI Interview Report",
      href: "#",
      dates: "2024 – Present",
      active: true,
      description:
        "Upload a résumé + target role → receive an AI-generated report with ATS score, tailored questions, skill-gap analysis, and a learning roadmap. Powered by Gemini API with Zod validation against prompt injection.",
      technologies: ["MERN Stack", "Google Gemini API", "Zod", "PDF Generation", "Prompt Engineering"],
      links: [] as { type: string; href: string }[],
      image: "/projects/ai-interview.jpg",
      video: "",
    },
    {
      title: "Code Review AI Agent",
      href: "https://code-review-ai-agent-two.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "Multi-agent AI code audit console — Security, Performance, Clean Code, and Architecture reviewers roll up into one quality score. Real-time SSE streaming, Monaco Editor decorations, and GitHub OAuth.",
      technologies: ["MERN Stack", "Google Gemini API", "BullMQ", "Redis", "Monaco Editor", "SSE", "Passport.js"],
      links: [
        { type: "Website", href: "https://code-review-ai-agent-two.vercel.app/" },
        { type: "Source", href: "https://github.com/amans2003/Code-Review-AI-Agent" },
      ],
      image: "/projects/code-review.png",
      video: "",
    },
    {
      title: "DailyForge",
      href: "https://dailyforge-frontend-lhjq.onrender.com",
      dates: "2025",
      active: true,
      description:
        "Open-source MERN productivity app for designing weekly routines with drag-and-drop scheduling, reusable task libraries, conflict detection, and MongoDB Atlas persistence.",
      technologies: ["MERN Stack", "React 19", "@dnd-kit", "Tailwind CSS v4", "JWT", "MongoDB Atlas"],
      links: [
        { type: "Website", href: "https://dailyforge-frontend-lhjq.onrender.com" },
        { type: "Source", href: "https://github.com/amans2003/DailyForge" },
      ],
      image: "/projects/dailyforge.png",
      video: "",
    },
    {
      title: "PingMe — Real-Time Chat",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Production-ready chat app with Socket.io sub-second messaging, JWT auth, Cloudinary image storage, and 10+ switchable DaisyUI themes across desktop and mobile.",
      technologies: ["MERN Stack", "Socket.io", "Cloudinary", "JWT", "Tailwind CSS", "DaisyUI"],
      links: [] as { type: string; href: string }[],
      image: "/projects/pingme.jpg",
      video: "",
    },
    {
      title: "PomoGoo",
      href: "https://pomogoo.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Pomodoro productivity app with 25-min focus intervals, community leaderboards, and weekly/monthly challenges to keep users accountable. Deployed on Vercel.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      links: [
        { type: "Website", href: "https://pomogoo.vercel.app" },
        { type: "Source", href: "https://github.com/amans2003/pomogoo" },
      ],
      image: "/projects/pomogoo.png",
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
