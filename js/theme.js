/*
 * theme.js
 * Runs in <head> before the page paints so a saved light/dark choice
 * is applied without a flash. With no saved choice, CSS follows the
 * visitor's system setting.
 */
(function () {
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
    }
  } catch (e) {
    // Storage blocked (private mode, etc.) — fall back to system theme.
  }
  document.documentElement.classList.add("js");
})();
