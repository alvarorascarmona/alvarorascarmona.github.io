(function () {
  "use strict";

  // Close mobile nav when a link is clicked
  const mobileNav = document.querySelector(".nav-mobile");
  if (mobileNav) {
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.removeAttribute("open");
      });
    });
  }

  // Close mobile nav on Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileNav && mobileNav.hasAttribute("open")) {
      mobileNav.removeAttribute("open");
    }
  });

  // Close mobile nav when clicking outside
  document.addEventListener("click", function (e) {
    if (
      mobileNav &&
      mobileNav.hasAttribute("open") &&
      !mobileNav.contains(e.target)
    ) {
      mobileNav.removeAttribute("open");
    }
  });

  // Subtle header shadow on scroll
  const header = document.querySelector(".site-header");
  if (header) {
    let ticking = false;
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(function () {
            header.classList.toggle("is-scrolled", window.scrollY > 12);
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  // Research accordion: only one open at a time
  const accordion = document.getElementById("research-accordion");
  if (accordion) {
    const items = accordion.querySelectorAll(".accordion-item");

    items.forEach(function (item) {
      const trigger = item.querySelector(".accordion-trigger");
      const panel = item.querySelector(".accordion-panel");
      if (!trigger || !panel) return;

      trigger.addEventListener("click", function () {
        const isOpen = item.classList.contains("is-open");

        // Close all
        items.forEach(function (other) {
          other.classList.remove("is-open");
          const t = other.querySelector(".accordion-trigger");
          const p = other.querySelector(".accordion-panel");
          if (t) t.setAttribute("aria-expanded", "false");
          if (p) p.hidden = true;
        });

        // Open clicked if it was closed
        if (!isOpen) {
          item.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
          panel.hidden = false;
          setTimeout(function () {
            item.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }, 50);
        }
      });
    });
  }
})();
