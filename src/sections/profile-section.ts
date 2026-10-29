import { profile } from "../data/profile";
import { el } from "../utils/dom";

/**
 * Writes profile values (name, title, bio, contact) into the page.
 * Any element with data-profile="<field>" receives the matching value.
 */
export function renderProfile(): void {
  const text: Record<string, string> = {
    name: profile.name,
    title: profile.title,
    tagline: profile.tagline,
    email: profile.contact.email,
    website: profile.contact.website,
    "closing-note": profile.contact.closingNote,
    year: String(new Date().getFullYear()),
  };

  document.querySelectorAll<HTMLElement>("[data-profile]").forEach((node) => {
    const field = node.dataset.profile ?? "";
    if (field === "bio") {
      node.replaceChildren(...profile.bio.map((line) => el("p", {}, [line])));
    } else if (field === "github") {
      (node as HTMLAnchorElement).href = profile.githubUrl;
    } else if (field in text) {
      node.textContent = text[field];
    }
  });

  document.querySelectorAll<HTMLAnchorElement>("[data-profile-link]").forEach((link) => {
    const kind = link.dataset.profileLink;
    if (kind === "email") link.href = `mailto:${profile.contact.email}`;
    if (kind === "website") link.href = `https://${profile.contact.website.replace(/^https?:\/\//, "")}`;
  });
}
