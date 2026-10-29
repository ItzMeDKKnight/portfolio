import type { Project } from "../types/content";
import { el } from "../utils/dom";
import { arrowUpRightIcon, githubIcon, svgIcon } from "./icons";
import { createTechIcon } from "./tech-icon";

/**
 * One card in the "Selected work" grid.
 * Shows the cover with name + tags; hovering (or tapping on touch screens)
 * reveals the description, tech stack and links.
 */
export function createProjectCard(project: Project): HTMLElement {
  const links = el("div", { class: "card-links" }, [
    project.repoUrl && externalLink(project.repoUrl, [svgIcon(githubIcon), " Code"]),
    project.liveUrl && externalLink(project.liveUrl, ["View ", svgIcon(arrowUpRightIcon)]),
  ]);

  const card = el("article", { class: "project-card", tabindex: 0, "aria-label": project.name }, [
    el("div", { class: "card-cover" }, [
      el("img", { src: project.cover, alt: `${project.name} cover`, loading: "lazy", decoding: "async" }),
    ]),
    el("div", { class: "card-overlay" }, [
      el("div", { class: "card-info" }, [
        el("h3", {}, [project.name]),
        el(
          "div",
          { class: "card-tags" },
          project.tags.slice(0, 2).map((tag) => el("span", { class: "tag" }, [tag])),
        ),
      ]),
      el("div", { class: "card-details" }, [
        el("div", { class: "card-details-inner" }, [
          el("p", { class: "card-description" }, [project.description]),
          el("div", { class: "card-footer" }, [
            el("div", { class: "card-stack" }, project.stack.map(createTechIcon)),
            links,
          ]),
        ]),
      ]),
    ]),
  ]);

  // Tap/click toggles the details (needed on touch screens without hover).
  card.addEventListener("click", (event) => {
    if ((event.target as Element).closest("a")) return;
    card.classList.toggle("is-open");
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.classList.toggle("is-open");
    }
  });

  return card;
}

function externalLink(href: string, children: (Node | string)[]): HTMLAnchorElement {
  return el("a", { href, target: "_blank", rel: "noopener noreferrer" }, children);
}
