const toggle = document.getElementById("theme-toggle");
let currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.setAttribute("data-theme", "dark");
}

toggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
