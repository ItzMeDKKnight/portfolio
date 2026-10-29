/**
 * Fades elements marked with the "reveal" class in as they scroll into view.
 * Skipped entirely when the visitor prefers reduced motion.
 */
export function initScrollReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.12 },
  );
  targets.forEach((target) => observer.observe(target));
}
