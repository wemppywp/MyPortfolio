import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import portfolioImg from '@/public/Portfoliowebsite.png'

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

export const experiencesData = [
    {
        title: "Intership at PT Digitdata Terminal Evolution",
        location: "Medan, Indonesia",
        description:
            "Interned as an Android developer, where I learned and helped employees in developing IoT features.",
        icon: React.createElement(LuGraduationCap),
        date: "Feb 2018 - April 2018",
    },
    {
        title: "Software Developer",
        location: "Jakarta, Indonesia",
        description:
            "I worked as a Software Developer for 5 years in Mobile Development (Native java, React Native) and Web Development(.Net MVC, Reactjs, PHP). I also upskilled to the full stack and System Analyst. I'm open to new opportunities.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - Present",
    },
    {
        title: "System Analyst",
        location: "Jakarta, Indonesia",
        description:
            "For several applications, I am also a system analyst to carry out analysis regarding applications that will be enhanced according to the needs of the user/business analyst. I'm open to new opportunities.",
        icon: React.createElement(CgWorkAlt),
        date: "2023",
    },
] as const;

export const projectsData = [
    {
        title: "Portfolio Website",
        description:
            "This is my personal project, apart from that, this is learning new technology for me",
        tags: ["React", "Next.js", "Farmer", "Tailwind"],
        imageUrl: portfolioImg,
    },
    {
        title: "Mobile Attendance System",
        description:
            "My final project as a student, a mobile attendance system using QR Code and Location.",
        tags: ["Native Java", "QR Code", "Fingerprint", "Location Provider", "REST API"],
        imageUrl: rmtdevImg,
    },
    {
        title: "OneCircle Mobile App",
        description:
            "A Freelancer mobile app, it is used to help freelancers publish/sell services in various fields and also help clients to communicate with freelancers.",
        tags: ["Native Java", "REST API", "LARAVEL", "Notification", "Message"],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    ".Net MVC",
    "Native Java",
    "React Native",
    "Processmaker",
    "PHP",
    "Figma",
    "Database",
    "SQL Server",
    "MySql",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Python",
    "Framer Motion",
] as const;