# MicoPortfolioPage

Mico Schalin's personal portfolio: a static site (plain HTML/CSS/JS, no build step, no dependencies). Hosted from this repo (GitHub Pages style — `index.html` at root).

## Goal of current work

Make the site clearly communicate **what Mico did in each project** (concrete personal contributions, tech, scope, team size, outcome) and **what Mico can do** (skills backed by evidence from projects). Mico will supply the real content — ask rather than invent facts, numbers, dates or claims. Never fabricate achievements.

## Run locally

Content is loaded with `fetch()`, so opening `index.html` directly (file://) shows empty sections. Serve the folder over HTTP:

```bash
python3 -m http.server 8000      # then open http://localhost:8000
# or: npx serve .                 (Node is installed via nvm)
```

No reload-on-save; refresh the browser (hard refresh if CSS seems cached).

## Structure

- `index.html` — landing page: quote, title, photo, quick links, About blurb, nav buttons (Projects, Skills; Resume/Career/Art are commented out). Loads ALL CSS incl. every project stylesheet.
- `Data/pages/*.html` — HTML fragments (no `<html>`/`<head>`) injected into `#data_selection_area` by `scripts/button_nav_selection.js` (`ContentNames` array ↔ `<name>-Button` ids).
- `Data/pages/projects.html` — project thumbnail buttons; `onClick="LoadProject(this, N)"` where N is the index into `ProjectNames` in `scripts/button_nav_proj.js` (NOT visual order).
- `Data/pages/projects/<name>.html` — one fragment per project, injected into `#project_data_area`. Each has its own `styles/project_styles/<name>.css` with prefixed ids (`hazardhaul_title`, `bitone_body`, ...).
- `Data/pages/careers/*.html` + `scripts/button_nav_career.js` — career tab (currently hidden). It also writes into `#project_data_area`.
- `styles/skeleton.css` (Skeleton grid framework), `styles/landing.css` (main theme, cascadia font), `styles/career.css`.
- Font Awesome 4.7 from cdnjs for icons; shields.io badges for project tags.

### Adding a project
1. Add `Data/pages/projects/<name>.html` (copy an existing one).
2. Add `styles/project_styles/<name>.css` and link it in `index.html`.
3. Append `<name>` to `ProjectNames` in `scripts/button_nav_proj.js`.
4. Add a button + thumbnail in `Data/pages/projects.html` with the matching index.

## Known issues (from code review, Oct 2026)

Bugs:
- `index.html`: commented-out Resume button points to `./Data/_My_Resume_No_Number.pdf`; real file is `Data/My_Resume_No_Number.pdf` (404 if re-enabled).
- `index.html`: `</body>` closes before `#bottom`, and the footer sits after `</html>` — invalid structure (browsers repair it).
- `index.html`: viewport meta is commented out → page is not mobile-friendly despite media queries.
- `index.html`: Projects/Skills buttons' inline `onClick` only sets `project_data_area` opacity to 0; the old project HTML stays in the DOM (invisible but still takes space below Skills).
- `Data/pages/projects.html` contains `<script src=button_nav_proj.js>` — scripts inserted via `innerHTML` never run, so it's dead (script is already loaded in index).
- `button_nav_selection.js`: sets `buttons[i].class` (not `className`) — does nothing; `TransitionDuration = 0` makes the fade/lock logic moot; forces `body.height = 200vh`.
- `hukkaputki.html` reuses id `itchio_link_bitone` (styling coupling).
- `bg_dots.js`: undeclared global `currentDist`.
- Project button for BitOne has id `damnorak-button` while others use project names.

Dead / unused files (safe to delete after confirming with Mico):
- `javascript/` folder (old, not referenced), `LandingStyle.css`, `scripts/quick_links.js` (loaded but no `#tooltip` element exists).
- `styles/project_styles/{15_puzzle,game_tech,vpa,mapex}.css` (no matching project pages).
- `Data/images/profile-pic.png` (1.5 MB, unused); `Data/pages/art.html`.
- `.idea/` exists locally (gitignored).

Content / presentation issues (most relevant to the goal):
- Lots of inline styles in `skills.html` and project pages — move to CSS classes.
- Project pages mix "what I did" with "what I learned"/"next goals"; recruiters want contributions + results first. Learning goals read as junior; consider trimming.
- No team size / role / duration on projects; Hukkaputki says "one of the core developers" but the role is vague.
- Skills list is not linked to projects (no evidence). Hours estimates ("700+ hours") are fine but could link to projects.
- `work.html` says "No ICT Jobs yet" (2025) — likely outdated; ask Mico for current work history.
- Typos: "i" lowercase throughout, "Restautant", "atmostphere", "whos".
- Footer year hard-coded `© 2025`.
- Quick links include personal Instagram; consider whether it belongs.
- Iframes have fixed 620×415 size (overflow on mobile) and no `title` attribute.
