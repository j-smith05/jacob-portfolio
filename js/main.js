/*
 * main.js
 * Progressive enhancements for the portfolio. Every feature checks that
 * its markup exists first, and the site is fully usable without JavaScript.
 */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Theme toggle (light / dark) ---------- */
  function currentTheme() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  // The button is in the HTML so the top bar never shifts; CSS draws the sun/moon icon.
  function initThemeToggle() {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;

    function render() {
      var label = currentTheme() === "dark" ? "Switch to light mode" : "Switch to dark mode";
      btn.setAttribute("aria-label", label);
      btn.title = label;
    }

    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        // Not saved, but still applied for this visit.
      }
      render();
    });

    render();
  }

  /* ---------- Typing effect in each page's banner label ---------- */
  function initTyping() {
    if (reduceMotion) return;
    document.querySelectorAll(".typed[data-words]").forEach(startTyping);
  }

  function startTyping(el) {
    var words = el.getAttribute("data-words").split("|");
    var wordIndex = 0;
    var charIndex = words[0].length;
    var deleting = true;

    el.classList.add("typing");
    el.setAttribute("aria-live", "off");

    function tick() {
      var word = words[wordIndex];
      if (deleting) {
        charIndex--;
        el.textContent = word.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(tick, 45);
      } else {
        word = words[wordIndex];
        charIndex++;
        el.textContent = word.slice(0, charIndex);
        if (charIndex === word.length) {
          deleting = true;
          setTimeout(tick, 2200);
          return;
        }
        setTimeout(tick, 85);
      }
    }

    setTimeout(tick, 2200);
  }

  /* ---------- Project filter on the projects page ---------- */
  // The filter bar is in the HTML (shown only when JS runs) so the projects never jump down.
  function initProjectFilter() {
    var bar = document.querySelector(".filter-bar");
    var status = document.querySelector(".filter-status");
    var cards = document.querySelectorAll(".project[data-category]");
    if (!bar || !cards.length) return;

    var buttons = bar.querySelectorAll(".filter-btn");

    function apply(key) {
      var shown = 0;
      cards.forEach(function (card) {
        var match = key === "all" || card.getAttribute("data-category").split(" ").indexOf(key) !== -1;
        card.hidden = !match;
        if (match) shown++;
      });
      buttons.forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-filter") === key ? "true" : "false");
      });
      if (status) status.textContent = "Showing " + shown + " of " + cards.length + " projects";
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.getAttribute("data-filter"));
      });
    });
  }

  /* ---------- Copy email button on the contact page ---------- */
  function initCopyEmail() {
    var item = document.querySelector("[data-copy]");
    var btn = item && item.querySelector(".copy-btn");
    if (!btn) return;
    if (!navigator.clipboard) {
      btn.remove();
      return;
    }

    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(item.getAttribute("data-copy")).then(
        function () {
          btn.textContent = "Copied!";
          btn.classList.add("copied");
          setTimeout(function () {
            btn.textContent = "Copy";
            btn.classList.remove("copied");
          }, 1800);
        },
        function () {
          btn.textContent = "Press \u2318C";
        }
      );
    });
  }

  /* ---------- Fade cards in as they scroll into view ---------- */
  function initReveal() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    var targets = document.querySelectorAll(".project, .card, .fact-card, .contact-item, .doc-link, .rec-card, .rec-placeholder");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px 60px 0px" }
    );

    targets.forEach(function (el) {
      // Anything visible on load shows immediately; only content below the fold fades in.
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  /* ---------- Back-to-top button ---------- */
  function initBackToTop() {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "back-to-top";
    btn.setAttribute("aria-label", "Back to top");
    btn.textContent = "↑";
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
    document.body.appendChild(btn);

    function update() {
      btn.classList.toggle("show", window.scrollY > 500);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ---------- Keep the footer year current ---------- */
  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---------- A hello for anyone who opens DevTools ---------- */
  function greet() {
    if (!window.console) return;
    console.log(
      "%cHi there, fellow inspector of source code! 👋",
      "font-size:14px;font-weight:600;"
    );
    console.log("This site uses plain HTML, CSS & JavaScript with a strict Content-Security-Policy.");
    console.log("Like what you see? Reach me at jesmith4405@icloud.com");
  }

  initThemeToggle();
  initTyping();
  initProjectFilter();
  initCopyEmail();
  initReveal();
  initBackToTop();
  initYear();
  greet();
})();
