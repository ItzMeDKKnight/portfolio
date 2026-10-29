import type { Project } from "../types/content";

const GITHUB = "https://github.com/ItzMeDKKnight";

/**
 * Projects shown in the "Selected work" grid, in display order.
 * The first PROJECTS_VISIBLE are shown; the rest sit behind "+ N more projects".
 */
export const PROJECTS_VISIBLE = 6;

export const projects: Project[] = [
  {
    name: "J.A.R.V.I.S.",
    cover: "assets/images/projects/jarvis-cover.svg",
    tags: ["AI Voice Assistant", "Bilingual"],
    stack: ["python", "claude", "electron", "javascript", "sqlite", "threejs"],
    description:
      "Iron Man's J.A.R.V.I.S., built for real. A privacy-first voice assistant for Windows that understands English, Hindi and Hinglish, with an offline wake word, local speech-to-text and text-to-speech, and Claude-powered reasoning. It opens apps, searches the web, shows code in a side panel and remembers you across restarts, all behind a glowing arc-reactor HUD.",
    repoUrl: `${GITHUB}/JARVIS`,
  },
  {
    name: "InTabPDF",
    cover: "assets/images/projects/intabpdf-cover.svg",
    tags: ["Open Source", "Privacy-first"],
    stack: ["python", "javascript", "html", "css", "claude"],
    description:
      "A free, open-source take on iLovePDF with every premium feature unlocked. 32 PDF tools (merge, split, compress, convert, edit, sign, OCR, redact, compare, AI summarise and translate) that run entirely on your own machine. No uploads, no accounts, no limits, no watermarks.",
    repoUrl: `${GITHUB}/ITabPDF`,
  },
  {
    name: "EduPulse",
    cover: "assets/images/projects/edupulse-cover.svg",
    tags: ["EdTech", "AI Monitoring"],
    stack: ["typescript", "react", "supabase", "postgresql", "claude"],
    description:
      "An AI-based parent–student monitoring app for local universities. It has separate dashboards for admins, teachers, students and parents, with attendance, grades, assignments and quizzes in one place, performance charts, live notifications and Claude-generated progress reports, all backed by Supabase with row-level security.",
    repoUrl: `${GITHUB}/EduPulse`,
  },
  {
    name: "Fruit Ninja: OpenCV",
    cover: "assets/images/projects/fruit-ninja-cover.svg",
    tags: ["Computer Vision", "Game"],
    stack: ["python", "opencv", "mediapipe", "pygame"],
    description:
      "A camera-based Fruit Ninja clone where your fingertip is the blade. Real-time MediaPipe hand tracking with smoothed motion, glowing blade trails, physics-based fruit slicing, combos, bombs with screen shake, difficulty that ramps up over time, and procedurally synthesised sound.",
    repoUrl: `${GITHUB}/Fruit-Ninja---OpenCV`,
  },
];
