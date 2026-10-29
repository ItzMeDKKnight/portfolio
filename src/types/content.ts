/**
 * Shapes of all the content shown on the site.
 * Every file in src/data/ exports values that follow these types.
 */

/** Keys of the technology icons defined in src/data/tech-icons.ts */
export type TechKey =
  | "python"
  | "javascript"
  | "typescript"
  | "java"
  | "c"
  | "cpp"
  | "html"
  | "css"
  | "react"
  | "nodejs"
  | "electron"
  | "postgresql"
  | "sqlite"
  | "supabase"
  | "opencv"
  | "pygame"
  | "mediapipe"
  | "claude"
  | "aws"
  | "git"
  | "github"
  | "vercel"
  | "vscode"
  | "intellij"
  | "linux"
  | "threejs";

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  /** Short, 2–4 sentence introduction shown in the About section */
  bio: string[];
  githubUrl: string;
  contact: ContactDetails;
}

export interface ContactDetails {
  email: string;
  website: string;
  closingNote: string;
}

export interface Project {
  name: string;
  /** Path to the cover image, relative to index.html */
  cover: string;
  /** Up to two tags are shown on the card */
  tags: string[];
  stack: TechKey[];
  description: string;
  repoUrl?: string;
  liveUrl?: string;
}

export interface SkillGroup {
  title: string;
  skills: TechKey[];
}

export interface SkillHighlight {
  title: string;
  text: string;
}

export interface ToolCategory {
  title: string;
  text: string;
  tools: TechKey[];
}

export interface Achievement {
  title: string;
  detail: string;
  year: string;
  /** Emoji or short symbol shown inside the tinted icon tile */
  icon: string;
  /** CSS colour used for the icon tile glow */
  tint: string;
}

export interface TechIcon {
  label: string;
  /** Image URL for the icon (devicon CDN or a local asset) */
  src: string;
}
