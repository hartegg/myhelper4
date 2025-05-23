
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const root = document.documentElement;

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (icon) {
      icon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = localStorage.getItem("theme") || "light";
      const next = current === "light" ? "dark" : "light";
      setTheme(next);
    });
  }

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");
    setTheme(saved);
});