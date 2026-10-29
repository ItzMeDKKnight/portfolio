import type { ToolCategory } from "../types/content";

/** Rows in the "Tools and Technologies" section. */
export const toolCategories: ToolCategory[] = [
  {
    title: "Development Environment",
    text: "Code editors and IDEs used for writing, organising and maintaining clean, structured source code efficiently.",
    tools: ["vscode", "intellij", "claude"],
  },
  {
    title: "Version Control",
    text: "Version control and hosting that track changes, support collaboration and preserve project history reliably.",
    tools: ["git", "github", "vercel"],
  },
  {
    title: "Development Frameworks",
    text: "Frameworks and libraries that enable faster development, better structure and scalable application architecture.",
    tools: ["react", "nodejs", "electron", "opencv"],
  },
];
