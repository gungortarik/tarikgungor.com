(() => {
  const yearEl = document.getElementById("y");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById("navToggle");
  const navRight = document.querySelector(".nav-right");

  if (navToggle && navRight) {
    const closeNav = () => {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
      navRight.classList.remove("is-open");
      document.body.style.overflow = "";
    };

    const openNav = () => {
      navToggle.setAttribute("aria-expanded", "true");
      navToggle.setAttribute("aria-label", "Close menu");
      navRight.classList.add("is-open");
      document.body.style.overflow = "hidden";
    };

    navToggle.addEventListener("click", () => {
      if (navRight.classList.contains("is-open")) closeNav();
      else openNav();
    });

    navRight.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeNav());
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) closeNav();
    });
  }

  const themeBtn = document.getElementById("themeToggle");
  const iconEl = themeBtn?.querySelector(".icon");
  const labelEl = themeBtn?.querySelector(".label");

  const applyTheme = (mode) => {
    const isLight = mode === "light";
    document.body.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
    if (iconEl) iconEl.textContent = isLight ? "☀" : "☾";
    if (labelEl) labelEl.textContent = isLight ? "Light" : "Dark";
  };

  const saved = localStorage.getItem("theme");
  applyTheme(saved === "light" ? "light" : "dark");

  themeBtn?.addEventListener("click", () => {
    const next = document.body.classList.contains("light") ? "dark" : "light";
    applyTheme(next);
  });
})();
