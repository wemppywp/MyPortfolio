import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  LuAreaChart,
  LuBriefcase,
  LuBrainCircuit,
  LuGraduationCap,
  LuLayers,
  LuMapPin,
  LuSmartphone,
} from "react-icons/lu";
import portfolioImg from "@/public/Portfoliowebsite.png";
import resultImg from "@/public/result.png";
import result1Img from "@/public/result1.png";
import result2Img from "@/public/result2.png";
import PetrolyticsImg from "@/public/Petrolytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const heroStats = [
  {
    value: "6+",
    label: "years delivering IT applications",
  },
  {
    value: "30%",
    label: "web performance improvement on enterprise projects",
  },
  {
    value: "60%",
    label: "faster deployment through automation initiatives",
  },
] as const;

export const spotlightCards = [
  {
    title: "Business-oriented execution",
    description:
      "I translate operational and business needs into scalable applications, clearer workflows, and practical technical decisions.",
    icon: React.createElement(LuBrainCircuit),
  },
  {
    title: "Full-stack and integration delivery",
    description:
      "Hands-on across web, mobile, API integration, database optimization, and release support for business-critical systems.",
    icon: React.createElement(LuLayers),
  },
  {
    title: "Performance, automation, and UX",
    description:
      "Focused on improving performance, deployment flow, system security, and user experience through measurable technical improvements.",
    icon: React.createElement(LuSmartphone),
  },
] as const;

export const quickFacts = [
  {
    label: "Role focus",
    value: "IT Application, system analysis, and full-stack delivery",
    icon: React.createElement(LuBriefcase),
  },
  {
    label: "Base",
    value: "Jakarta, Indonesia",
    icon: React.createElement(LuMapPin),
  },
  {
    label: "Current focus",
    value: "Scalable systems, API integration, and process automation",
    icon: React.createElement(LuAreaChart),
  },
] as const;

export const experiencesData = [
  {
    title: "Android Developer Intern",
    location: "Medan, Indonesia",
    description:
      "Contributed to native Android development for an IoT-based smart city project, including UI implementation, API consumption, and feature support for real-time monitoring.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2017 - Aug 2017",
  },
  {
    title: "IT Application",
    location: "Jakarta, Indonesia",
    description:
      "Built and maintained enterprise web and mobile solutions using C#, .NET Framework, React.js, Vue.js, React Native, Node.js, and PHP while improving performance, security, automation, and system integration.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2019 - Present",
  },
  {
    title: "System Analysis & Stakeholder Collaboration",
    location: "Jakarta, Indonesia",
    description:
      "Worked directly with business stakeholders to identify technical needs, present solution proposals, and align application improvements with operational goals.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Website",
    category: "Web Experience",
    year: "2026",
    description:
      "A personal portfolio app focused on clearer storytelling, stronger visual identity, and a more recruiter-friendly browsing experience.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    highlights: [
      "Redesigned the landing page with stronger hierarchy and a more premium editorial feel.",
      "Added project filtering so visitors can quickly focus on web or mobile work.",
      "Kept the experience responsive and lightweight for both desktop and mobile screens.",
    ],
    imageUrl: portfolioImg,
  },
  {
    title: "Petrolytics",
    category: "Web Experience",
    year: "2026",
    description:
      "A real-time Oil Production Analytics Platform that enables monitoring, tracking, and analysis of oil and gas production to support operational efficiency and data-driven decision-making.",
    tags: [
      "vite",
      "TypeScript",
      "recharts",
      "Drizzle",
      "PostgreSQL",
      "TimescaleDB",
      "Socket.IO",
    ],
    highlights: [
      "Designed to enable real-time tracking and monitoring of oil and gas production across multiple assets.",
      "Provides interactive dashboards and analytics to improve production visibility and operational decision-making.",
      "Implements data integration from multiple sources (e.g., sensors, APIs) for centralized and reliable data processing.",
      "Built with a scalable full-stack architecture, supporting high-volume time-series data handling.",
      "Demonstrates end-to-end system development, from data ingestion and processing to visualization and reporting.",
    ],
    imageUrl: PetrolyticsImg,
  },
  {
    title: "SmartFinance",
    category: "Mobile App",
    year: "Personal Project",
    description:
      "Developed a Smart Finance application with features for income and expense tracking, budgeting, savings goal management, and an AI-powered advisor to enhance financial planning and decision-making.",
    tags: ["Flutter", "Node.js", "Express.js", "Supabase", "REST API"],
    highlights: [
      "Designed to simplify tracking of income and expenses with an intuitive and user-friendly interface.",
      "Provides budgeting and savings goal features to help users manage and plan their finances effectively.",
      "Integrated with an AI-powered advisor to deliver personalized financial insights and recommendations.",
      "Built with a full-stack architecture, including custom API and database for scalable financial data management.",
      "Demonstrates end-to-end development, from mobile UI/UX to backend services and data processing.",
    ],
    imageUrl: result2Img,
  },
  {
    title: "TrackWallet",
    category: "Mobile App",
    year: "Personal Project",
    description:
      "A personal finance app built to track spending, manage wallet activity, and practice end-to-end mobile product development.",
    tags: ["Flutter", "Node.js", "Express.js", "MySQL", "REST API"],
    highlights: [
      "Designed to make daily expense logging and wallet tracking simpler.",
      "Backed by a custom API and database layer for full-stack learning.",
      "A good example of mobile UI work combined with backend integration.",
    ],
    imageUrl: resultImg,
  },
  {
    title: "My Shop",
    category: "Commerce App",
    year: "Personal Project",
    description:
      "An e-commerce style mobile app exploring product discovery, Firebase integration, and user-facing messaging flows.",
    tags: ["Flutter", "REST API", "Firebase", "Notifications", "Messaging"],
    highlights: [
      "Covers common commerce flows such as browsing, action feedback, and updates.",
      "Uses Firebase services to support modern app interactions.",
      "Built as a practical playground for mobile architecture and API consumption.",
    ],
    imageUrl: result1Img,
  },
] as const;

export const skillGroupsData = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "React.js",
      "Vue.js",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Mobile",
    items: ["React Native", "Native Android", "Java", "Flutter"],
  },
  {
    title: "Backend & Data",
    items: [
      "C#",
      ".NET Framework",
      "Node.js",
      "PHP",
      "SQL Server",
      "MySQL",
      "MongoDB",
      "Firebase",
      "REST API",
    ],
  },
  {
    title: "Workflow & Tools",
    items: [
      "AWS",
      "Azure DevOps",
      "GitHub",
      "TFS",
      "Postman",
      "Figma",
      "Git",
      "OAuth 2.0",
      "JWT",
    ],
  },
] as const;
