# Jacob Smith — Portfolio

Personal portfolio for Jacob Smith, a B.S. Computer Science (Cybersecurity Emphasis) student at Boise State University and Cybersecurity Resiliency Intern at St. Luke's Health System.

**Live site:** https://j-smith05.github.io/jacob-portfolio/

## Pages

- **Home** — intro, quick facts, featured project, and quotes from letters of recommendation
- **Projects** — coursework and team projects, filterable by category
- **About** — experience, education, skills, resume download, and the full letters of recommendation
- **Contact** — email, LinkedIn, and GitHub, plus what I'm looking for

## Structure

```
jacob-portfolio/
├── index.html          # Home page (GitHub Pages serves this from the root)
├── 404.html            # Not-found page; also forwards old URLs to their new location
├── pages/              # Projects, About, and Contact pages
├── css/style.css       # All styles; color tokens for light and dark themes are at the top
├── js/
│   ├── theme.js        # Applies a saved light/dark choice before the page paints
│   ├── main.js         # Interactive features (see below)
│   └── redirect.js     # Old-URL forwarding used by 404.html
├── files/              # Resume and recommendation letter PDFs
├── images/             # Headshot, social preview image, favicon
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

## Updating content

- **Resume:** replace `files/jacob-smith-resume.pdf` and update the "Updated" month in the Documents section of `pages/about.html`.
- **Letters of recommendation:** each letter's PDF goes in `files/recommendation-letter-<lastname>.pdf`, with personal phone numbers removed. Every letter has a short quote card on the home page and a card with a different passage and a link to the full PDF on the About page. Quotes are copied word for word from the letters.
- **Moved or renamed files:** add the old path to `MOVED` in `js/redirect.js` so existing links keep working.
- **`.well-known/security.txt`:** renew the `Expires` date before October 2027.

## Running locally

Open `index.html` directly in a browser, or serve it the way GitHub Pages does (from the parent folder, so the `/jacob-portfolio/` paths used by the 404 page resolve):

```bash
cd ..
python3 -m http.server 8000
# then visit http://localhost:8000/jacob-portfolio/
```
