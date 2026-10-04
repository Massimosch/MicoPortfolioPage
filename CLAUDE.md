# MicoPortfolioPage

Mico Schalin's portfolio: a static single-page site (plain HTML/CSS, a few lines of inline JS, no build step, no dependencies). Served from repo root (`index.html`).

## Goal

Show clearly **what Mico built in each project** (personal contribution, team size, duration, result) and **what Mico can do** (skills tiered by real usage, backed by projects). Mico supplies the facts: ask rather than invent numbers, dates, roles or claims.

Honesty rules learned so far:
- Mico is about to graduate, so present him as a developer, not a student.
- Don't claim third-party code as his. MS_Tools contains community code (Code Monkey utils, git-amend's UnityUtils extensions and ImprovedTimers), so describe it as "own code + curated utilities".
- For team projects, describe only Mico's part, and credit teammates where they built on it.

## Run locally

```bash
python3 -m http.server 8000 --bind 0.0.0.0   # http://localhost:8000, or http://<LAN-IP>:8000 from a phone
```

Opening `index.html` directly also works now (no fetch), but use the server to test on a phone.

## Structure

- `index.html`: the whole site. Sections: nav, hero, `#projects` (featured cards, "Currently building" grid, itch.io banner), `#skills` (tiers: Daily use / Comfortable with / Learning now), `#about` (text + timeline), `#contact`, footer. Inline script: footer year, click-to-load YouTube (`.video[data-yt]`), scroll reveal (`.reveal`).
- `styles/main.css`: all styles. Colour tokens are in `:root`. Each project card sets its own accent with `style="--p: #hex"`.
- `styles/fonts/cascadia.ttf`: mono font for labels.
- `Data/images/`: `portrait.png` (hero), `Mico.png` (favicon), `Overtail.png` (white-text logo for the dark theme), plus images used by archived cards.
- `Data/archive/`: project cards removed from the page (Hukkaputki, Damnorak). Paste one back into `#projects` to restore it.
- `Data/My_Resume_No_Number.pdf`: resume (not linked at the moment).

### Adding a project
Copy an `<article class="project ...">` block. Use `project-featured` for a wide two-column card, or put it inside `.project-grid` for half-width cards. Order inside a card: tagline, `.facts` chips (first ones `.hl`), "What I built" bullets (`ul.did`), links. Link it from the Skills "In practice" line if it proves a skill.

## Projects on the page (source repos in ~/Documents/git/_Unity)
- Hazard Haul: solo, Metropolia, Oct–Dec 2025, grade 5/5. `HazardHaul/`.
- Overtail: Metropolia team of 7, ~3 months, FF Tactics-like. Mico: input system (InputReader SO), Cinemachine camera, enemy AI foundation (BaseAction, MoveAction), repo setup. `overtail/`.
- MS_Tools: toolkit. Latest version is in `What-lies-below/Assets/MS_Tools`.
- In development: Unity DOTS RTS (`UnityDOTS/`, started from a DOTS course) and What Lies Below (`What-lies-below/`, built on TopDownEngine).
- Not shown: GameDevPracticeLab (course exercises).

## Open questions for Mico
- Hazard Haul timer system: written by Mico, or adapted from git-amend's ImprovedTimers?
- Graduation date (timeline says 2024 – 2026).
- Overtail public link/video; MS_Tools GitHub repo URL once it's created.
