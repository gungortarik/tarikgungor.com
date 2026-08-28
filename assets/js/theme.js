(() => {
  const yearEl = document.getElementById("y");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("site-nav");

  if (navToggle && siteNav) {
    const closeNav = () => {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
      siteNav.classList.remove("is-open");
      document.body.style.overflow = "";
    };

    const openNav = () => {
      navToggle.setAttribute("aria-expanded", "true");
      navToggle.setAttribute("aria-label", "Close menu");
      siteNav.classList.add("is-open");
      document.body.style.overflow = "hidden";
    };

    navToggle.addEventListener("click", () => {
      if (siteNav.classList.contains("is-open")) closeNav();
      else openNav();
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeNav());
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) closeNav();
    });
  }
})();
