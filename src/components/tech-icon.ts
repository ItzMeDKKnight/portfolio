import { techIcons } from "../data/tech-icons";
import type { TechKey } from "../types/content";
import { el } from "../utils/dom";

/** Small logo tile with a hover tooltip, used on project cards. */
export function createTechIcon(key: TechKey): HTMLElement {
  const icon = techIcons[key];
  return el("span", { class: "tech-icon", "data-label": icon.label, title: icon.label }, [
    el("img", { src: icon.src, alt: icon.label, loading: "lazy", decoding: "async" }),
  ]);
}

/** Pill with logo and label, used in the skills and tools sections. */
export function createTechChip(key: TechKey): HTMLElement {
  const icon = techIcons[key];
  return el("li", { class: "tech-chip" }, [
    el("img", { src: icon.src, alt: "", loading: "lazy", decoding: "async" }),
    icon.label,
  ]);
}
