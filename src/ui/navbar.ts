import { mustFind } from "../utils/dom";

/**
 * Navbar behaviour:
 *  - the hamburger opens/closes the menu on small screens
 *  - the link for the section currently in view gets the active underline
 *  - the bar gets a solid background once the page is scrolled
 */
export function initNavbar(): void {
  const header = mustFind(".site-header");
  const toggle = mustFind<HTMLButtonElement>(".nav-toggle");
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-links a"));

  const setOpen = (open: boolean) => {
    header.classList.toggle("is-menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  links.forEach((link) => link.addEventListener("click", () => setOpen(false)));

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const sections = links
    .map((link) => document.querySelector<HTMLElement>(link.hash))
    .filter((section): section is HTMLElement => section !== null);

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach((link) => link.classList.toggle("is-active", link.hash === `#${entry.target.id}`));
      }
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
}
