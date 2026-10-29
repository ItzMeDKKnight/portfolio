import type { TechIcon, TechKey } from "../types/content";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

/** Label and logo for every technology referenced across the site. */
export const techIcons: Record<TechKey, TechIcon> = {
  python: { label: "Python", src: `${DEVICON}/python/python-original.svg` },
  javascript: { label: "JavaScript", src: `${DEVICON}/javascript/javascript-original.svg` },
  typescript: { label: "TypeScript", src: `${DEVICON}/typescript/typescript-original.svg` },
  java: { label: "Java", src: `${DEVICON}/java/java-original.svg` },
  c: { label: "C", src: `${DEVICON}/c/c-original.svg` },
  cpp: { label: "C++", src: `${DEVICON}/cplusplus/cplusplus-original.svg` },
  html: { label: "HTML5", src: `${DEVICON}/html5/html5-original.svg` },
  css: { label: "CSS3", src: `${DEVICON}/css3/css3-original.svg` },
  react: { label: "React", src: `${DEVICON}/react/react-original.svg` },
  nodejs: { label: "Node.js", src: `${DEVICON}/nodejs/nodejs-original.svg` },
  electron: { label: "Electron", src: `${DEVICON}/electron/electron-original.svg` },
  postgresql: { label: "PostgreSQL", src: `${DEVICON}/postgresql/postgresql-original.svg` },
  sqlite: { label: "SQLite", src: `${DEVICON}/sqlite/sqlite-original.svg` },
  supabase: { label: "Supabase", src: `${DEVICON}/supabase/supabase-original.svg` },
  opencv: { label: "OpenCV", src: `${DEVICON}/opencv/opencv-original.svg` },
  pygame: { label: "Pygame", src: "assets/icons/pygame.svg" },
  mediapipe: { label: "MediaPipe", src: "assets/icons/mediapipe.svg" },
  claude: { label: "Claude API", src: "assets/icons/claude.svg" },
  aws: { label: "AWS", src: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
  git: { label: "Git", src: `${DEVICON}/git/git-original.svg` },
  github: { label: "GitHub", src: `${DEVICON}/github/github-original.svg` },
  vercel: { label: "Vercel", src: `${DEVICON}/vercel/vercel-original.svg` },
  vscode: { label: "VS Code", src: `${DEVICON}/vscode/vscode-original.svg` },
  intellij: { label: "IntelliJ IDEA", src: `${DEVICON}/intellij/intellij-original.svg` },
  linux: { label: "Linux", src: `${DEVICON}/linux/linux-original.svg` },
  threejs: { label: "Three.js", src: `${DEVICON}/threejs/threejs-original.svg` },
};
