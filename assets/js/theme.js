(() => {
  const yearEl = document.getElementById("y");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggleBtn = document.getElementById("navToggle");
  const nav = document.getElementById("site-nav");

  if (!toggleBtn || !nav) return;

  const closeNav = () => {
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("aria-label", "Open menu");
    nav.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const openNav = () => {
    toggleBtn.setAttribute("aria-expanded", "true");
    toggleBtn.setAttribute("aria-label", "Close menu");
    nav.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    if (isOpen) closeNav();
    else openNav();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeNav());
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) closeNav();
  });
})();
