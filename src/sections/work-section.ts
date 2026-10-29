import { createProjectCard } from "../components/project-card";
import { profile } from "../data/profile";
import { projects, PROJECTS_VISIBLE } from "../data/projects";
import { el, mustFind } from "../utils/dom";

/** Fills the "Selected work" grid and the "+ N more projects" toggle. */
export function renderWorkSection(): void {
  const grid = mustFind("#work-grid");
  const allReposLink = mustFind<HTMLAnchorElement>("#all-repos-link");
  allReposLink.href = `${profile.githubUrl}?tab=repositories`;

  const cards = projects.map(createProjectCard);
  cards.forEach((card, index) => {
    if (index >= PROJECTS_VISIBLE) card.hidden = true;
    grid.append(card);
  });

  const hiddenCount = projects.length - PROJECTS_VISIBLE;
  if (hiddenCount <= 0) return;

  const button = el("button", { class: "show-more", type: "button", "aria-expanded": "false" });
  const setLabel = (expanded: boolean) => {
    button.textContent = expanded ? "Show less ↑" : `+ ${hiddenCount} more projects →`;
    button.setAttribute("aria-expanded", String(expanded));
  };
  setLabel(false);

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") !== "true";
    cards.slice(PROJECTS_VISIBLE).forEach((card) => (card.hidden = !expanded));
    setLabel(expanded);
  });

  grid.after(button);
}
