"use strict";
(() => {
  // src/data/achievements.ts
  var achievements = [
    {
      title: "Hackathon Finalist",
      detail: "Google Developer Groups on Campus Hackathon",
      year: "2026",
      icon: "\u{1F3C6}",
      tint: "#3bb4f2"
    },
    {
      title: "Online Round Qualified",
      detail: "Smart India Hackathon (SIH)",
      year: "2026",
      icon: "\u{1F680}",
      tint: "#a78bfa"
    }
  ];

  // src/utils/dom.ts
  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (value === void 0 || value === false) continue;
      node.setAttribute(key, value === true ? "" : String(value));
    }
    for (const child of children) {
      if (child === null || child === void 0 || child === false) continue;
      node.append(child);
    }
    return node;
  }
  function mustFind(selector, root = document) {
    const found = root.querySelector(selector);
    if (!found) throw new Error(`Missing element: ${selector}`);
    return found;
  }

  // src/sections/achievements-section.ts
  function renderAchievementsSection() {
    const list = mustFind("#achievement-list");
    for (const item of achievements) {
      const card = el("article", { class: "achievement-card" }, [
        el("span", { class: "achievement-icon", "aria-hidden": "true" }, [item.icon]),
        el("div", { class: "achievement-text" }, [
          el("h3", {}, [item.title]),
          el("p", {}, [item.detail])
        ]),
        el("span", { class: "achievement-year" }, [item.year])
      ]);
      card.style.setProperty("--tint", item.tint);
      list.append(card);
    }
  }

  // src/data/profile.ts
  var profile = {
    name: "Ansh Anand Mutatkar",
    title: "Full Stack Developer",
    tagline: "I rarely leave an idea as just an idea.",
    bio: [
      "I'm Ansh, a full stack developer who turns ideas into products people actually use, from privacy-first desktop tools to AI voice assistants and computer-vision games.",
      "I care about the whole journey: clean interfaces up front, reliable systems behind them, and code that stays easy to grow. Right now I'm sharpening Java, DSA, system design and DevOps."
    ],
    githubUrl: "https://github.com/ItzMeDKKnight",
    // Placeholder contact details — replace with your own.
    contact: {
      email: "anshoistcsea@gmail.com",
      website: "www.reallygreatsite.com",
      closingNote: "Stay curious, continue learning, and keep building meaningful, secure, and impactful digital solutions for the modern web."
    }
  };

  // src/sections/profile-section.ts
  function renderProfile() {
    const text = {
      name: profile.name,
      title: profile.title,
      tagline: profile.tagline,
      email: profile.contact.email,
      website: profile.contact.website,
      "closing-note": profile.contact.closingNote,
      year: String((/* @__PURE__ */ new Date()).getFullYear())
    };
    document.querySelectorAll("[data-profile]").forEach((node) => {
      const field = node.dataset.profile ?? "";
      if (field === "bio") {
        node.replaceChildren(...profile.bio.map((line) => el("p", {}, [line])));
      } else if (field === "github") {
        node.href = profile.githubUrl;
      } else if (field in text) {
        node.textContent = text[field];
      }
    });
    document.querySelectorAll("[data-profile-link]").forEach((link) => {
      const kind = link.dataset.profileLink;
      if (kind === "email") link.href = `mailto:${profile.contact.email}`;
      if (kind === "website") link.href = `https://${profile.contact.website.replace(/^https?:\/\//, "")}`;
    });
  }

  // src/data/tech-icons.ts
  var DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
  var techIcons = {
    python: { label: "Python", src: `${DEVICON}/python/python-original.svg` },
    javascript: { label: "JavaScript", src: `${DEVICON}/javascript/javascript-original.svg` },
    typescript: { label: "TypeScript", src: `${DEVICON}/typescript/typescript-original.svg` },
    java: { label: "Java", src: `${DEVICON}/java/java-original.svg` },
    c: { label: "C", src: `${DEVICON}/c/c-original.svg` },
    cpp: { label: "C++", src: `${DEVICON}/cplusplus/cplusplus-original.svg` },
    html: { label: "HTML5", src: `${DEVICON}/html5/html5-original.svg` },
    css: { label: "CSS3", src: `${DEVICON}/css3/css3-original.svg` },
    react: { label: "React", src: `${DEVICON}/react/react-original.svg` },
    nodejs: { label: "Node.js", src: `${DEVICON}/nodejs/nodejs-original.svg` },
    electron: { label: "Electron", src: `${DEVICON}/electron/electron-original.svg` },
    postgresql: { label: "PostgreSQL", src: `${DEVICON}/postgresql/postgresql-original.svg` },
    sqlite: { label: "SQLite", src: `${DEVICON}/sqlite/sqlite-original.svg` },
    supabase: { label: "Supabase", src: `${DEVICON}/supabase/supabase-original.svg` },
    opencv: { label: "OpenCV", src: `${DEVICON}/opencv/opencv-original.svg` },
    pygame: { label: "Pygame", src: "assets/icons/pygame.svg" },
    mediapipe: { label: "MediaPipe", src: "assets/icons/mediapipe.svg" },
    claude: { label: "Claude API", src: "assets/icons/claude.svg" },
    aws: { label: "AWS", src: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    git: { label: "Git", src: `${DEVICON}/git/git-original.svg` },
    github: { label: "GitHub", src: `${DEVICON}/github/github-original.svg` },
    vercel: { label: "Vercel", src: `${DEVICON}/vercel/vercel-original.svg` },
    vscode: { label: "VS Code", src: `${DEVICON}/vscode/vscode-original.svg` },
    intellij: { label: "IntelliJ IDEA", src: `${DEVICON}/intellij/intellij-original.svg` },
    linux: { label: "Linux", src: `${DEVICON}/linux/linux-original.svg` },
    threejs: { label: "Three.js", src: `${DEVICON}/threejs/threejs-original.svg` }
  };

  // src/components/tech-icon.ts
  function createTechIcon(key) {
    const icon = techIcons[key];
    return el("span", { class: "tech-icon", "data-label": icon.label, title: icon.label }, [
      el("img", { src: icon.src, alt: icon.label, loading: "lazy", decoding: "async" })
    ]);
  }
  function createTechChip(key) {
    const icon = techIcons[key];
    return el("li", { class: "tech-chip" }, [
      el("img", { src: icon.src, alt: "", loading: "lazy", decoding: "async" }),
      icon.label
    ]);
  }

  // src/data/skills.ts
  var skillHighlights = [
    {
      title: "Programming Foundations",
      text: "Strong grip on programming logic, data structures and algorithms, used to build efficient, maintainable and scalable applications in Python, Java, TypeScript and C/C++."
    },
    {
      title: "Full Stack Delivery",
      text: "End-to-end product building: responsive front-ends in React and plain HTML/CSS/TS, APIs and services in Node.js and Python, and desktop apps with Electron."
    },
    {
      title: "Systems & AI Integration",
      text: "Designing databases, wiring up LLMs like Claude, and adding real-time computer vision, all shipped with debugging, optimisation and security in mind."
    }
  ];
  var skillGroups = [
    { title: "Languages", skills: ["python", "typescript", "javascript", "java", "c", "cpp"] },
    { title: "Frontend", skills: ["react", "html", "css", "electron", "threejs"] },
    { title: "Backend & Data", skills: ["nodejs", "postgresql", "supabase", "sqlite"] },
    { title: "AI & Computer Vision", skills: ["claude", "opencv", "mediapipe", "pygame"] },
    { title: "Cloud & DevOps", skills: ["aws", "git", "github", "vercel", "linux"] }
  ];

  // src/sections/skills-section.ts
  function renderSkillsSection() {
    const highlights = mustFind("#skill-highlights");
    for (const item of skillHighlights) {
      highlights.append(
        el("article", { class: "text-block" }, [el("h3", {}, [item.title]), el("p", {}, [item.text])])
      );
    }
    const groups = mustFind("#skill-groups");
    for (const group of skillGroups) {
      groups.append(
        el("div", { class: "skill-group" }, [
          el("h4", {}, [group.title]),
          el("ul", { class: "chip-list" }, group.skills.map(createTechChip))
        ])
      );
    }
  }

  // src/data/tools.ts
  var toolCategories = [
    {
      title: "Development Environment",
      text: "Code editors and IDEs used for writing, organising and maintaining clean, structured source code efficiently.",
      tools: ["vscode", "intellij", "claude"]
    },
    {
      title: "Version Control",
      text: "Version control and hosting that track changes, support collaboration and preserve project history reliably.",
      tools: ["git", "github", "vercel"]
    },
    {
      title: "Development Frameworks",
      text: "Frameworks and libraries that enable faster development, better structure and scalable application architecture.",
      tools: ["react", "nodejs", "electron", "opencv"]
    }
  ];

  // src/sections/tools-section.ts
  function renderToolsSection() {
    const list = mustFind("#tool-list");
    for (const category of toolCategories) {
      list.append(
        el("article", { class: "tool-row" }, [
          el("div", { class: "tool-row-title" }, [el("h3", {}, [category.title]), el("span", { class: "accent-pill" })]),
          el("div", { class: "tool-row-body" }, [
            el("p", {}, [category.text]),
            el("ul", { class: "chip-list" }, category.tools.map(createTechChip))
          ])
        ])
      );
    }
  }

  // src/components/icons.ts
  var githubIcon = `<svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;
  var arrowUpRightIcon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>`;
  function svgIcon(markup) {
    const template = document.createElement("template");
    template.innerHTML = markup.trim();
    return template.content.firstElementChild;
  }

  // src/components/project-card.ts
  function createProjectCard(project) {
    const links = el("div", { class: "card-links" }, [
      project.repoUrl && externalLink(project.repoUrl, [svgIcon(githubIcon), " Code"]),
      project.liveUrl && externalLink(project.liveUrl, ["View ", svgIcon(arrowUpRightIcon)])
    ]);
    const card = el("article", { class: "project-card", tabindex: 0, "aria-label": project.name }, [
      el("div", { class: "card-cover" }, [
        el("img", { src: project.cover, alt: `${project.name} cover`, loading: "lazy", decoding: "async" })
      ]),
      el("div", { class: "card-overlay" }, [
        el("div", { class: "card-info" }, [
          el("h3", {}, [project.name]),
          el(
            "div",
            { class: "card-tags" },
            project.tags.slice(0, 2).map((tag) => el("span", { class: "tag" }, [tag]))
          )
        ]),
        el("div", { class: "card-details" }, [
          el("div", { class: "card-details-inner" }, [
            el("p", { class: "card-description" }, [project.description]),
            el("div", { class: "card-footer" }, [
              el("div", { class: "card-stack" }, project.stack.map(createTechIcon)),
              links
            ])
          ])
        ])
      ])
    ]);
    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
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
  function externalLink(href, children) {
    return el("a", { href, target: "_blank", rel: "noopener noreferrer" }, children);
  }

  // src/data/projects.ts
  var GITHUB = "https://github.com/ItzMeDKKnight";
  var PROJECTS_VISIBLE = 6;
  var projects = [
    {
      name: "J.A.R.V.I.S.",
      cover: "assets/images/projects/jarvis-cover.svg",
      tags: ["AI Voice Assistant", "Bilingual"],
      stack: ["python", "claude", "electron", "javascript", "sqlite", "threejs"],
      description: "Iron Man's J.A.R.V.I.S., built for real. A privacy-first voice assistant for Windows that understands English, Hindi and Hinglish, with an offline wake word, local speech-to-text and text-to-speech, and Claude-powered reasoning. It opens apps, searches the web, shows code in a side panel and remembers you across restarts, all behind a glowing arc-reactor HUD.",
      repoUrl: `${GITHUB}/JARVIS`
    },
    {
      name: "InTabPDF",
      cover: "assets/images/projects/intabpdf-cover.svg",
      tags: ["Open Source", "Privacy-first"],
      stack: ["python", "javascript", "html", "css", "claude"],
      description: "A free, open-source take on iLovePDF with every premium feature unlocked. 32 PDF tools (merge, split, compress, convert, edit, sign, OCR, redact, compare, AI summarise and translate) that run entirely on your own machine. No uploads, no accounts, no limits, no watermarks.",
      repoUrl: `${GITHUB}/ITabPDF`
    },
    {
      name: "EduPulse",
      cover: "assets/images/projects/edupulse-cover.svg",
      tags: ["EdTech", "AI Monitoring"],
      stack: ["typescript", "react", "supabase", "postgresql", "claude"],
      description: "An AI-based parent\u2013student monitoring app for local universities. It has separate dashboards for admins, teachers, students and parents, with attendance, grades, assignments and quizzes in one place, performance charts, live notifications and Claude-generated progress reports, all backed by Supabase with row-level security.",
      repoUrl: `${GITHUB}/EduPulse`
    },
    {
      name: "Fruit Ninja: OpenCV",
      cover: "assets/images/projects/fruit-ninja-cover.svg",
      tags: ["Computer Vision", "Game"],
      stack: ["python", "opencv", "mediapipe", "pygame"],
      description: "A camera-based Fruit Ninja clone where your fingertip is the blade. Real-time MediaPipe hand tracking with smoothed motion, glowing blade trails, physics-based fruit slicing, combos, bombs with screen shake, difficulty that ramps up over time, and procedurally synthesised sound.",
      repoUrl: `${GITHUB}/Fruit-Ninja---OpenCV`
    }
  ];

  // src/sections/work-section.ts
  function renderWorkSection() {
    const grid = mustFind("#work-grid");
    const allReposLink = mustFind("#all-repos-link");
    allReposLink.href = `${profile.githubUrl}?tab=repositories`;
    const cards = projects.map(createProjectCard);
    cards.forEach((card, index) => {
      if (index >= PROJECTS_VISIBLE) card.hidden = true;
      grid.append(card);
    });
    const hiddenCount = projects.length - PROJECTS_VISIBLE;
    if (hiddenCount <= 0) return;
    const button = el("button", { class: "show-more", type: "button", "aria-expanded": "false" });
    const setLabel = (expanded) => {
      button.textContent = expanded ? "Show less \u2191" : `+ ${hiddenCount} more projects \u2192`;
      button.setAttribute("aria-expanded", String(expanded));
    };
    setLabel(false);
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") !== "true";
      cards.slice(PROJECTS_VISIBLE).forEach((card) => card.hidden = !expanded);
      setLabel(expanded);
    });
    grid.after(button);
  }

  // src/ui/navbar.ts
  function initNavbar() {
    const header = mustFind(".site-header");
    const toggle = mustFind(".nav-toggle");
    const links = Array.from(document.querySelectorAll(".nav-links a"));
    const setOpen = (open) => {
      header.classList.toggle("is-menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    links.forEach((link) => link.addEventListener("click", () => setOpen(false)));
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const sections = links.map((link) => document.querySelector(link.hash)).filter((section) => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          links.forEach((link) => link.classList.toggle("is-active", link.hash === `#${entry.target.id}`));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
  }

  // src/ui/scroll-reveal.ts
  function initScrollReveal() {
    const targets = document.querySelectorAll(".reveal");
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
      { threshold: 0.12 }
    );
    targets.forEach((target) => observer.observe(target));
  }

  // src/main.ts
  function start() {
    document.documentElement.classList.add("js");
    renderProfile();
    renderWorkSection();
    renderSkillsSection();
    renderToolsSection();
    renderAchievementsSection();
    initNavbar();
    initScrollReveal();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
