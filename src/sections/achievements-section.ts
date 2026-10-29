import { achievements } from "../data/achievements";
import { el, mustFind } from "../utils/dom";

/** Fills the Achievements section with one tinted card per achievement. */
export function renderAchievementsSection(): void {
  const list = mustFind("#achievement-list");
  for (const item of achievements) {
    const card = el("article", { class: "achievement-card" }, [
      el("span", { class: "achievement-icon", "aria-hidden": "true" }, [item.icon]),
      el("div", { class: "achievement-text" }, [
        el("h3", {}, [item.title]),
        el("p", {}, [item.detail]),
      ]),
      el("span", { class: "achievement-year" }, [item.year]),
    ]);
    card.style.setProperty("--tint", item.tint);
    list.append(card);
  }
}
