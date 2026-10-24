# Jacob Smith — Portfolio

Personal portfolio for Jacob Smith, a B.S. Computer Science (Cybersecurity Emphasis) student at Boise State University.

**Live site:** https://j-smith05.github.io/jacob-portfolio/

## Structure

```
jacob-portfolio/
├── index.html          # Home page (GitHub Pages serves this from the root)
├── 404.html            # Not-found page; also forwards old URLs to their new location
├── pages/              # Projects, About, Contact, and project write-up pages
├── css/style.css       # All styles, including light and dark themes
├── js/
│   ├── theme.js        # Applies a saved light/dark choice before the page paints
│   ├── main.js         # Interactive features (see below)
│   └── redirect.js     # Old-URL forwarding used by 404.html
├── files/              # Resume and recommendation letter PDFs
├── images/             # Profile photo, social preview image, favicon
├── .well-known/
│   └── security.txt    # How to report a security issue (RFC 9116)
└── .nojekyll           # Tells GitHub Pages to publish dot-folders like .well-known/
```

## Features

- Light and dark themes that follow the system setting, with a toggle that remembers the visitor's choice
- Project filter by category (Security, Networking, Web, Software)
- Typing effect on the home page, one-click email copy, scroll fade-ins, and a back-to-top button
- Fully usable without JavaScript, and animations are turned off for visitors who prefer reduced motion
- Strict Content-Security-Policy: no inline scripts or styles, and no third-party code
- Built with plain HTML, CSS, and JavaScript — no frameworks or build step

## Running locally

Open `index.html` directly in a browser, or serve it the way GitHub Pages does (from the parent folder, so the `/jacob-portfolio/` paths used by the 404 page resolve):

```bash
cd ..
python3 -m http.server 8000
# then visit http://localhost:8000/jacob-portfolio/
```
