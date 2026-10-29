import type { SkillGroup, SkillHighlight } from "../types/content";

/** "Core hard skills" — the three text blocks in the Technical Skills section. */
export const skillHighlights: SkillHighlight[] = [
  {
    title: "Programming Foundations",
    text: "Strong grip on programming logic, data structures and algorithms, used to build efficient, maintainable and scalable applications in Python, Java, TypeScript and C/C++.",
  },
  {
    title: "Full Stack Delivery",
    text: "End-to-end product building: responsive front-ends in React and plain HTML/CSS/TS, APIs and services in Node.js and Python, and desktop apps with Electron.",
  },
  {
    title: "Systems & AI Integration",
    text: "Designing databases, wiring up LLMs like Claude, and adding real-time computer vision, all shipped with debugging, optimisation and security in mind.",
  },
];

/** Technology groups rendered as icon chips. */
export const skillGroups: SkillGroup[] = [
  { title: "Languages", skills: ["python", "typescript", "javascript", "java", "c", "cpp"] },
  { title: "Frontend", skills: ["react", "html", "css", "electron", "threejs"] },
  { title: "Backend & Data", skills: ["nodejs", "postgresql", "supabase", "sqlite"] },
  { title: "AI & Computer Vision", skills: ["claude", "opencv", "mediapipe", "pygame"] },
  { title: "Cloud & DevOps", skills: ["aws", "git", "github", "vercel", "linux"] },
];

