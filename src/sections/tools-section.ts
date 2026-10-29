import { createTechChip } from "../components/tech-icon";
import { toolCategories } from "../data/tools";
import { el, mustFind } from "../utils/dom";

/** Fills the Tools and Technologies section, one row per category. */
export function renderToolsSection(): void {
  const list = mustFind("#tool-list");
  for (const category of toolCategories) {
    list.append(
      el("article", { class: "tool-row" }, [
        el("div", { class: "tool-row-title" }, [el("h3", {}, [category.title]), el("span", { class: "accent-pill" })]),
        el("div", { class: "tool-row-body" }, [
          el("p", {}, [category.text]),
          el("ul", { class: "chip-list" }, category.tools.map(createTechChip)),
        ]),
      ]),
    );
  }
}
