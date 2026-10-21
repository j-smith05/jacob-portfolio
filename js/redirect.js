/*
 * redirect.js
 * Used only by 404.html. Pages and files moved into folders in Oct. 2026;
 * this forwards old links (bookmarks, resumes, shared URLs) to their new home.
 */
(function () {
  "use strict";

  var BASE = "/jacob-portfolio/";
  var MOVED = {
    "about.html": "pages/about.html",
    "projects.html": "pages/projects.html",
    "contact.html": "pages/contact.html",
    "style.css": "css/style.css",
    "og-image.png": "images/og-image.png",
    "LinkedInPP.JPG": "images/jacob-smith.jpg",
    "files/Jacob-Smith-Resume.pdf": "files/jacob-smith-resume.pdf",
    "files/Jacob-Smith-Cover-Letter.pdf": "files/jacob-smith-cover-letter.pdf"
  };

  var path = window.location.pathname;
  if (path.indexOf(BASE) !== 0) return;

  var target = MOVED[decodeURIComponent(path.slice(BASE.length))];
  if (target) {
    window.location.replace(BASE + target + window.location.hash);
  }
})();
