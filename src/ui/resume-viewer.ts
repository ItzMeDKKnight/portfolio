import { mustFind } from "../utils/dom";

/**
 * Resume viewer:
 *  - links marked [data-resume-open] open the PDF in a full-screen <dialog>
 *  - the PDF only loads the first time the viewer opens
 *  - browsers that can't show PDFs inline (most phones) keep the plain link,
 *    which opens the file in a new tab
 */
export function initResumeViewer(): void {
  const dialog = mustFind<HTMLDialogElement>(".resume-viewer");
  const frame = mustFind<HTMLIFrameElement>("iframe", dialog);
  const triggers = document.querySelectorAll<HTMLAnchorElement>("[data-resume-open]");

  const canShowInline = typeof dialog.showModal === "function" && navigator.pdfViewerEnabled === true;
  if (!canShowInline) return;

  const open = () => {
    if (!frame.src) frame.src = frame.dataset.src ?? "";
    dialog.showModal();
    document.documentElement.classList.add("is-viewer-open");
  };

  triggers.forEach((trigger) =>
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      open();
    }),
  );

  mustFind("[data-resume-close]", dialog).addEventListener("click", () => dialog.close());

  // Clicking the dimmed backdrop (outside the panel) closes the viewer
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => document.documentElement.classList.remove("is-viewer-open"));
}
