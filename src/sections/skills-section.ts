import { createTechChip } from "../components/tech-icon";
import { skillGroups, skillHighlights } from "../data/skills";
import { el, mustFind } from "../utils/dom";

/** Fills the Technical Skills section: three highlight blocks plus grouped icon chips. */
export function renderSkillsSection(): void {
  const highlights = mustFind("#skill-highlights");
  for (const item of skillHighlights) {
    highlights.append(
      el("article", { class: "text-block" }, [el("h3", {}, [item.title]), el("p", {}, [item.text])]),
    );
  }

  const groups = mustFind("#skill-groups");
  for (const group of skillGroups) {
    groups.append(
      el("div", { class: "skill-group" }, [
        el("h4", {}, [group.title]),
        el("ul", { class: "chip-list" }, group.skills.map(createTechChip)),
      ]),
    );
  }
}
