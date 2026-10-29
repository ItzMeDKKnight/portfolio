/**
 * Entry point: renders every data-driven section, then starts the page behaviours.
 * Built into dist/main.js by `npm run build`.
 */
import { renderAchievementsSection } from "./sections/achievements-section";
import { renderProfile } from "./sections/profile-section";
import { renderSkillsSection } from "./sections/skills-section";
import { renderToolsSection } from "./sections/tools-section";
import { renderWorkSection } from "./sections/work-section";
import { initNavbar } from "./ui/navbar";
import { initScrollReveal } from "./ui/scroll-reveal";

function start(): void {
  document.documentElement.classList.add("js");

  renderProfile();
  renderWorkSection();
  renderSkillsSection();
  renderToolsSection();
  renderAchievementsSection();

  initNavbar();
  initScrollReveal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
