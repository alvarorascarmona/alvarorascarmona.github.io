/* script.js — compartido por index.html y skills.html
   Sin dependencias. La web funciona igual sin JavaScript (mejora progresiva). */
(() => {
  "use strict";

  /* 1. Año dinámico en los pies de página */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* 2. Menú móvil */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  if (toggle && nav) {
    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    };

    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));

    // Cierra al elegir un enlace
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });

    // Cierra con Escape y devuelve el foco al botón
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Cierra si se pasa a escritorio
    const desktop = window.matchMedia("(min-width: 781px)");
    const onChange = (e) => { if (e.matches) setOpen(false); };
    if (desktop.addEventListener) desktop.addEventListener("change", onChange);
    else if (desktop.addListener) desktop.addListener(onChange);
  }

  /* 3. Botón "Print" (solo se muestra si hay JS) */
  document.querySelectorAll("[data-print]").forEach((btn) => {
    btn.hidden = false;
    btn.addEventListener("click", () => window.print());
  });

  /* 4. Resalta en el menú la sección visible */
  const links = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const sections = new Map();
  links.forEach((a) => {
    const target = document.getElementById(a.getAttribute("href").slice(1));
    if (target) sections.set(target, a);
  });

  if ("IntersectionObserver" in window && sections.size) {
    const clear = () => links.forEach((l) => l.removeAttribute("aria-current"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          clear();
          sections.get(entry.target).setAttribute("aria-current", "location");
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((_, section) => observer.observe(section));

    // Al volver arriba del todo, no hay sección activa
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          if (window.scrollY < 120) clear();
          ticking = false;
        });
      },
      { passive: true }
    );
  }
})();
