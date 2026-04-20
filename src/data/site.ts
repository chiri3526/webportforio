import type { Category, Project, Skill } from "../types/content";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "ai", label: "AI" },
  { key: "mobile", label: "Mobile" },
];

export const skills: Skill[] = [
  { id: "react", name: "React", icon: "code" },
  { id: "node", name: "Node.js", icon: "server" },
  { id: "typescript", name: "TypeScript", icon: "spark" },
  { id: "postgres", name: "PostgreSQL", icon: "database" },
  { id: "aws", name: "AWS", icon: "cloud" },
  { id: "tailwind", name: "Tailwind", icon: "layout" },
];

export const projects: Project[] = [
  {
    id: "password-generator",
    title: "PasswordGenerator",
    description: "A web app for generating random passwords based on selected rules.",
    tags: ["React", "Typescript", "Firebase", "Astro"],
    category: "frontend",
    image: "/images/project-password-generator.png",
    url: "https://passwordgenerator35.netlify.app/",
    featured: true,
  },
  {
    id: "travelplan",
    title: "travelplan",
    description: "A travel planning app that helps organize destinations and schedules.",
    tags: ["React", "Typescript", "Material UI", "Firebase"],
    category: "frontend",
    image: "/images/project-travelplan.svg",
    url: "https://travelplan35.netlify.app/",
    featured: true,
  },
  {
    id: "takatabi",
    title: "takatabi",
    description: "A travel website designed to showcase destinations and experiences.",
    tags: ["React", "Typescript", "microCMS"],
    category: "frontend",
    image: "/images/project-cognito.svg",
    url: "https://takatabi.net/",
    featured: false,
  },
  {
    id: "sishutu",
    title: "sishutu",
    description: "An expense tracking app for recording daily spending in a simple way.",
    tags: ["React", "Typescript", "Material UI", "Firebase"],
    category: "frontend",
    image: "/images/project-vault.svg",
    url: "https://sishutsu.netlify.app/",
    featured: false,
  },
  {
    id: "udon",
    title: "udon",
    description: "A Google Apps Script and JavaScript web project published as a web app.",
    tags: ["GAS", "JavaScript"],
    category: "frontend",
    image: "/images/project-gridops.svg",
    url: "https://script.google.com/macros/s/AKfycby0egrhJvzn5AX1rqNt60HOeVMj92xxE9f3wcK1E--icxgwYK1NwcUGNSHIkQBs5ermOg/exec",
    featured: false,
  },
];

export const highlights = [
  {
    id: "password-generator",
    image: "/images/highlight-dashboard.svg",
    title: "PasswordGenerator",
    tags: ["Utility", "JavaScript"],
    description: "Quickly creates secure passwords with adjustable rules and length.",
  },
  {
    id: "travelplan",
    image: "/images/highlight-fashion.svg",
    title: "travelplan",
    tags: ["Travel", "Planning"],
    description: "Keeps travel ideas and schedules organized in one clean interface.",
  },
];
