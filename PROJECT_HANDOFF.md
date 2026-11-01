# Technical Handoff Report — DRC-deforestion

Prepared for: another AI assistant (ChatGPT) to evaluate, improve, debug, and plan further development.
Source inspected: `C:\Users\pc\Documents\PROJET WEB\MYSELF\DRC-deforestion` (git worktree, branch `main`).
Constraint honored: no project files were modified, created, deleted, or moved; no dependencies installed; no commands run that could change the project.

---

## 1. Project Overview

| Item | Detail |
|---|---|
| Name | `DRC-deforestion` (repository: `josiaskiesse17-commits/DRC-deforestion`) |
| Purpose | Public-awareness / education website about urban growth, charcoal production, uncontrolled agriculture, and deforestation in the Democratic Republic of Congo (Congo Basin), plus consequences (floods, temperature rise, forest loss, endangered species, water scarcity) and solutions (reforestation, renewables, education, green infrastructure). |
| Target users | General public, students, communities in DRC; framed as a NASA Space Apps Challenge 2025 submission ("Team Kinshasa Green"). |
| Main problem solved | Raises awareness of how urban growth (e.g. Kinshasa, Beni), charcoal dependence, and unplanned agriculture drive deforestation in the Congo Basin; provides simple calculators for tree-planting impact and forest-loss projection. |
| Technologies | HTML5, inline CSS, vanilla JavaScript, Chart.js (loaded via CDN from `cdn.jsdelivr.net`). |
| Frameworks / libraries | None beyond Chart.js CDN. No build system, no package manager, no transpiler. |
| Current stage | Early prototype / single-page static site. Functionally complete as a read-only informational page, but all data is hardcoded and there is no persistence or backend. |
| Architecture | Single-file client-side SPA: `index.html` contains markup, styles (in `<style>`), and scripts (in `<script>`). Charts and DOM manipulation are imperatively wired inline. No separation of concerns, no modules, no routing. |

---

## 2. Project Structure

```
DRC-deforestion/
├── .git/                 (git metadata; remote origin = github.com/josiaskiesse17-commits/DRC-deforestion.git)
├── index.html            (only source file: markup + CSS + JS)
├── README.md             (3-line team description)
└── PROJECT_HANDOFF.md    (this report, to be written)
```

### Important files and responsibilities

- **`index.html`** — The entire application. Contains:
  - 7 content sections (`urban-growth`, `charcoal-fabric`, `uncontrolled-agriculture`, `deforestation`, `consequences`, `charcoal`, `solutions`).
  - Inline CSS (~21 rules) for layout, image comparison, slideshows, and chart containers.
  - 7 Chart.js chart instances (flood, temperature, forest cover, charcoal use, animal population, water access, future forest loss projection).
  - Image-compare slider logic (`initComparisons`).
  - Slideshow auto-rotation (`startSlideshows`, 5s interval).
  - Two calculators: `calculateTrees()` (tree-planting impact) and `calculateFutureLoss()` (forest-loss projection).
- **`README.md`** — Team description only ("Green kin", software engineering/polytechnic students + graphic designers). No setup, usage, or contribution instructions.

### How components interact

Everything runs in the browser on page load:
1. `window.onload = initComparisons` initializes the before/after image slider for the urban-growth section.
2. `startSlideshows()` cycles `.slideshow-container` images every 5 seconds.
3. Seven `new Chart(...)` calls render static datasets immediately.
4. User input in `#plant-trees` / `#project-loss` triggers `calculateTrees()` / `calculateFutureLoss()` which read inputs, compute against hardcoded constants, and write results to DOM nodes + redraw/replace a Chart.js instance.

No component interaction across pages (single page), no API calls, no state persistence.

---

## 3. Features and Functionality

### Implemented features

| Feature | Location | Notes |
|---|---|---|
| Before/after image comparison slider (Kinshasa/Beni 2000 vs 2008) | `index.html:36-39`, JS `initComparisons` `187-208` | Mouse + touch support. |
| Auto-rotating image slideshows | `index.html:47-51,59-63,70-74`, JS `startSlideshows` `212-224` | 3 slideshows; 5s interval; hardcoded external image URLs. |
| Chart: Flood events (line) | `index.html:87`, JS `179` | Hardcoded data `[2,3,5,6,8,10]`. |
| Chart: Avg temperature (line) | `index.html:91`, JS `180` | Hardcoded data. |
| Chart: Forest cover % (line) | `index.html:95`, JS `181` | Hardcoded `[40,35,30,22,15,10]`. |
| Chart: Charcoal use (bar) | `index.html:122`, JS `182` | Hardcoded data. |
| Chart: Endangered species population (line) | `index.html:110`, JS `183` | Hardcoded data. |
| Chart: Clean water access % (line) | `index.html:115`, JS `184` | Hardcoded data. |
| Tree-planting calculator | `index.html:150-155`, JS `calculateTrees` `227-234` | Uses `kinshasaPopulation = 15000000`; converts trees to hectares (`/1000`). |
| Future forest-loss projection calculator | `index.html:99-106`, JS `calculateFutureLoss` `238-260` | Linear extrapolation from `forestCoverData`; renders dynamic Chart.js line chart. |
| Global Forest Watch iframe (DRC dashboard) | `index.html:77` | Embedded third-party dashboard (`globalforestwatch.org/dashboards/country/COD/`). |
| External source attribution links | throughout | NASA, FAO, GFW, NOAA, IUCN, UNICEF, etc. |

### Partially implemented / unfinished features

- **Charts use hardcoded, illustrative data** — no real data source, no API integration, no live updates. Labels claim sources (NASA, GFW, FAO, IUCN, UNICEF) but values are fabricated example numbers.
- **`calculateFutureLoss`** recomputes from `forestCoverData` but never updates the source array; projection resets on reload.
- **Two sections overlap conceptually**: `charcoal-fabric` (line 45) and `charcoal` (line 120) both cover charcoal production/deforestation with redundant content and separate charts/text.
- **No navigation** between sections (pure scrolling page).
- **No interactivity beyond the two calculators and image slider/slideshow.**

### Planned features

- None documented. `README.md` contains only a team description. No roadmap, issues, or feature list found in the repository (only 3 files exist; no `TODO`, `CONTRIBUTING`, `docs`, or `AGENTS.md`).

### Main user workflows

1. **Browse awareness content**: user scrolls through sections, views before/after slider, slideshows, charts, and reads text with source links.
2. **Tree-planting calculation**: enter "trees per person" in `#plant-trees`, click Calculate → result shows total trees and hectares recovered (formula: `population * treesPerPerson / 1000`).
3. **Forest-loss projection**: enter "years ahead" in `#project-loss`, click Show Projection → linear extrapolation of forest cover % and hectares lost; a dynamic line chart is drawn.
4. **Explore live data (external)**: interact with the embedded Global Forest Watch iframe.

---

## 4. Architecture and Code Quality

### Architecture / design patterns

- **Single-file monolith** — no separation of HTML/CSS/JS, no modules, no components, no framework.
- **Imperative DOM manipulation** — all chart creation and calculator logic is inline in `<script>`, invoked at load or via `onclick` HTML attributes (`onclick="calculateTrees()"`, `onclick="calculateFutureLoss()"`).
- **No state management** — state lives in DOM values and a few module-scope constants (`kinshasaPopulation`, `totalForestHectares`, `yearsData`, `forestCoverData`, `futureChart`).
- **No navigation/routing** — single page, anchor-free sections.
- **No dependency injection** — Chart.js is a global (`Chart`) loaded from CDN.
- **No abstraction layers** — data, presentation, and logic are coupled.

### Data flow

`hardcoded constants` → `Chart.js config objects` → `canvas elements`. User inputs (`<input>`) → `parseInt` → arithmetic → `innerText` updates + Chart.js redraw. No data leaves the browser; nothing is persisted.

### Code quality concerns

- **Tight coupling**: HTML IDs (`#plant-trees`, `#project-lors`, `#treesPerPerson`, `#yearsAhead`) are referenced by name in JS; renaming breaks functionality silently.
- **Duplicate logic**: `calculateTrees` and `calculateFutureLoss` both perform input validation (`if(!value||value<=0){alert(...);return;}`) identically.
- **Duplicate sections**: charcoal covered twice (`charcoal-fabric` and `charcoal`).
- **Magic numbers**: `kinshasaPopulation = 15000000`, `totalForestHectares = 200000`, `/1000` hectare conversion, annual loss slope — all undocumented, hardcoded.
- **Global namespace pollution**: functions and chart instances (`futureChart`) are window globals.
- **No error handling**: invalid input triggers `alert`; missing DOM elements would throw uncaught; Chart.js CDN failure is not handled.
- **Inline event handlers** in HTML (`onclick=`) mixed with `addEventListener` in JS.
- **No linting, formatting, or type checking** configured.

---

## 5. Database and Data Management

- **Database**: None. No backend, no ORM, no persistence layer.
- **Tables/collections/models/repositories**: None.
- **Authentication/authorization**: None. No login, no users, no access control.
- **Data validation**: Minimal — truthiness and `<=0` checks in the two calculators only. No range validation, no sanitization.
- **Security rules**: None applicable (no server). External image URLs and iframe load third-party content (potential mixed-content/privacy considerations).
- **Error handling**: `alert()` for invalid numeric input; uncaught exceptions possible elsewhere.
- **Data persistence/synchronization**: None. All state is volatile (page reload resets everything).
- **External data**: None fetched live. All chart data hardcoded. Third-party content: NASA/GFW/Mongabay/Getty/Bing image URLs, GFW iframe, Chart.js CDN.

---

## 6. Dependencies and Configuration

### Dependencies

| Dependency | How loaded | Purpose |
|---|---|---|
| Chart.js | `<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>` (line 171) | All chart rendering. Version unpinned (latest). |

No `package.json`, `requirements.txt`, `Gemfile`, or equivalent. No locally installed dependencies.

### Environment variables / configuration

- None. No `.env`, no config files, no build-time configuration.
- No secrets present in the codebase. No API keys, passwords, or tokens found. (Variable names/locations: N/A — nothing to report.)

### External services relied upon (unauthenticated, read-only)

- `cdn.jsdelivr.net` — Chart.js library.
- `eoimages.gsfc.nasa.gov`, `imgs.mongabay.com`, `congoinconversation.fondationcarmignac.com`, `nasa.gov`, `media.gettyimages.com`, `content.globalforestwatch.org`, `th.bing.com`, `tse*.mm.bing.net`, `a-z-animals.com`, `www.green.earth`, `unicef.org/drcongo` — image assets.
- `globalforestwatch.org/dashboards/country/COD/` — embedded iframe dashboard.
- `chart.js` CDN is a single point of failure and a privacy/uptime dependency; unpinned version may receive breaking updates.

---

## 7. Testing and Reliability

- **Existing tests**: None found. No test files, no test framework, no CI configuration.
- **Build/execution**: No build system. Executed by opening `index.html` in a browser. Verifiable status: file is syntactically complete HTML; cannot verify runtime behavior without opening in a browser (which is read-only and permissible, but not performed as a command that changes the project).
- **Known/suspected issues**:
  - Chart.js CDN unpinned → potential breaking changes.
  - Hardcoded illustrative data presented as sourced factual data (misrepresentation risk).
  - `futureChart` global not cleaned up on navigation (no navigation exists, so minor).
  - No accessibility attributes (aria, role, alt text present on most images but charts/canvases lack accessible alternatives).
  - Images are hotlinked from third parties; many may break or be blocked.
- **Areas with insufficient testing**: Everything — zero test coverage.
- **Potential performance/security/scalability issues**: Large unoptimized external images; no lazy loading; multiple full-page slideshows running `setInterval` concurrently; unpinned third-party CDN; embedded iframe from external domain.

---

## 8. UI/UX Analysis

### Main screens / navigation

Single long-scrolling page with sections:
1. Header (title + mission statement).
2. Urban Growth (before/after slider, Beni/Virunga focus).
3. Charcoal Production (slideshow, text).
4. Uncontrolled Agriculture (slideshow).
5. Deforestation in the Congo Basin (slideshow + GFW iframe).
6. Environmental Consequences (Floods, Temperature Rise, Forest Loss, Projected Forest Loss calculator, Endangered Animals, Water Problems — each with chart/image).
7. Charcoal Production & Deforestation (charcoal chart) — redundant with section 3.
8. Solutions (Reforestation, Renewable Energy, Educate Communities, Green Infrastructure + tree calculator).
9. Footer (sources + NASA Space Apps Challenge 2025 credit).

### Inconsistencies / weaknesses

- **Responsiveness**: `canvas` has `max-width:100%`; `.img-comp-container` fixed `height:400px`; iframe fixed `height:600px`. No media queries; likely poor on small screens.
- **Accessibility**: Canvases are not keyboard-accessible and lack ARIA labels; charts convey data only visually. Color is the sole encoding in some charts (no patterns/labels on bars).
- **Design consistency**: Fonts fallback to Arial; sections have inline `style` attributes mixed with the `<style>` block; redundant charcoal section creates visual repetition.
- **Unfinished-feeling areas**: Charts have hardcoded dummy data; calculators produce unrounded/raw numbers; some images lack `alt` context; `alt` on the urban slider says "Kinshasa 2000"/"Kinshasa 2020" but text references Beni — mismatch.
- **Assumption check**: Nothing is "broken" from inspection; the page is functionally complete as a static demo. Unfinished-ness refers to data authenticity and feature scope, not runtime defects.

---

## 9. Development History and Current State

- **Git history** (branch `main`, 15 commits): Initial commit `ddb3625`, README added `46a756e`, then a series of "Update index.html" commits between 2025-10-05, and a final commit `544b629` on 2026-03-15 with message "This is part of my practice exercices for the github foundation certification".
- **Remote**: `origin https://github.com/josiaskiesse17-commits/DRC-deforestion.git`; branch `main` is up to date; working tree clean.
- **Recent changes**: The last commit (2026-03-15) was a Git Foundation certification practice exercise, not necessarily feature work.
- **TODOs / FIXMEs / documentation**: None found in code. `README.md` is a 3-line team description with no setup/dev instructions.
- **Ongoing work / incomplete implementations**: No active branches; no issue tracker visible in repo contents. The project appears inactive since March 2026.
- **Important existing decisions/constraints to preserve**:
  - Single-file static page (no build step) — easy to deploy anywhere (GitHub Pages, etc.).
  - NASA Space Apps Challenge 2025 context (footer credit).
  - Topic scope: DRC deforestation awareness/education.
  - Chart.js as the only library.

---

## 10. Improvement Opportunities

### Critical bugs and security issues

1. **Hardcoded illustrative data presented as sourced facts** (`index.html:173-184`) — charts claim NASA/GFW/FAO/IUCN/UNICEF sources but contain fabricated example numbers. Fix: replace with real sourced data or clearly mark as illustrative. *High impact on credibility.*
2. **Unpinned Chart.js CDN** (`index.html:171`) — breaking changes possible; no integrity/subresource integrity hash. Fix: pin version and add `integrity` + `crossorigin`. *Medium.*
3. **No input sanitization beyond `<=0` check** (`index.html:227-234,238-260`) — non-numeric strings pass `!value` guard in some cases (`parseInt` returns NaN → comparison false → proceeds). Fix: `Number.isFinite` validation. *Low-medium.*

### Architectural improvements

4. **Split `index.html` into HTML / CSS / JS modules** — separation of concerns. *High.*
5. **Extract data into a JSON/config structure** separate from rendering logic. *High.*
6. **Add a data-fetching layer** (real GFW/NASA API) to replace hardcoded data. *High (feature+credibility).*
7. **Unify the two charcoal sections** (`charcoal-fabric` line 45 and `charcoal` line 120). *Medium.*

### Code quality and maintainability

8. **DRY the calculator input validation** into a shared helper. *Medium.*
9. **Replace inline `onclick` with unobtrusive event listeners**. *Medium.*
10. **Add linting/formatting (ESLint/Prettier) and a type check** (TypeScript or JSDoc). *Medium.*
11. **Add comments/docstrings for magic numbers** (`kinshasaPopulation`, `totalForestHectares`, `/1000`). *Low.*

### Feature improvements

12. **Add real data integration** (Global Forest Watch API, NASA APIs) with fallback to cached/illustrative data clearly labeled. *High.*
13. **Add persistence** (localStorage) so calculator results and projection inputs survive reload. *Medium.*
14. **Add client-side navigation / section anchors** for long page. *Low.*

### UI/UX improvements

15. **Add media queries / responsive layout**; make canvases and iframe fluid. *High.*
16. **Add ARIA labels, role="img" with `aria-label` for charts, keyboard access**. *High.*
17. **Add lazy loading (`loading="lazy"`) for external images**; reduce slideshow interval overhead. *Medium.*
18. **Fix alt-text mismatch** (urban slider says Kinshasa but text discusses Beni/Virunga). *Low.*

### Performance and scalability

19. **Optimize image assets** (hotlinked full-size images; consider serving optimized copies). *Medium.*
20. **Destroy unused Chart.js instances** on page unload to avoid memory leaks. *Low.*

Priority order (impact × urgency): 1, 2, 4, 5, 6, 12, 15, 16, 3, 7, 8, 9, 10, 11, 13, 14, 17, 18, 19, 20.

---

## 11. Final Technical Handoff

### 1. Executive summary

`DRC-deforestion` is a single-page, static HTML awareness/education site about deforestation and urban growth in the Democratic Republic of Congo, submitted for the NASA Space Apps Challenge 2025 by "Team Kinshasa Green". It consists of exactly two files: `index.html` (the entire app — markup, inline CSS, inline vanilla JS using Chart.js via CDN) and `README.md` (a 3-line team description). There is no backend, database, build system, package manager, tests, or configuration. All chart data is hardcoded and illustrative. Functionally complete as a read-only demo, but not production-ready: data authenticity, responsiveness, accessibility, validation, and architecture all need work before scaling.

### 2. Complete technology stack

- HTML5
- CSS3 (inline, no preprocessor)
- Vanilla JavaScript (ES5-era syntax: `var`, function declarations, no modules)
- Chart.js (CDN, unpinned version, `https://cdn.jsdelivr.net/npm/chart.js`)
- No framework, no bundler, no package manager, no backend, no database, no testing framework.

### 3. Feature implementation status table

| Feature | Status | Evidence |
|---|---|---|
| Before/after image comparison slider | Implemented | `index.html:36-39`, JS `initComparisons` `187-208` |
| Auto-rotating slideshows (×3) | Implemented | `index.html:47-74`, JS `startSlideshows` `212-224` |
| Chart: Flood events | Implemented (hardcoded data) | `index.html:87`, JS `179` |
| Chart: Avg temperature | Implemented (hardcoded data) | `index.html:91`, JS `180` |
| Chart: Forest cover % | Implemented (hardcoded data) | `index.html:95`, JS `181` |
| Chart: Charcoal use | Implemented (hardcoded data) | `index.html:122`, JS `182` |
| Chart: Endangered species | Implemented (hardcoded data) | `index.html:110`, JS `183` |
| Chart: Clean water access | Implemented (hardcoded data) | `index.html:115`, JS `184` |
| Tree-planting calculator | Implemented | `index.html:150-155`, JS `calculateTrees` `227-234` |
| Future forest-loss projection calculator | Implemented | `index.html:99-106`, JS `calculateFutureLoss` `238-260` |
| Global Forest Watch embedded dashboard | Implemented | `index.html:77` |
| External source attribution | Implemented | throughout `index.html` |
| Real/live data integration | Not implemented | all data hardcoded |
| User authentication / accounts | Not implemented | none |
| Backend / API | Not implemented | none |
| Database / persistence | Not implemented | none |
| Tests | Not implemented | none |
| Responsive design | Partially | `max-width:100%` on canvas only; no media queries |
| Accessibility | Partially | most images have `alt`; canvases/charts not accessible |
| Navigation between sections | Not implemented | scroll-only single page |
| Section-anchor / deep linking | Not implemented | none |

### 4. Most important architectural observations

- Everything is in one file (`index.html`); no separation of concerns, no modules, no components.
- Chart.js is a global loaded from an unpinned CDN; all chart data is hardcoded in `index.html:173-184`.
- State lives in module-scope constants and DOM values; nothing persists across reloads.
- Logic is invoked via inline HTML `onclick` attributes plus `window.onload`; mixing of patterns.
- Two sections (`charcoal-fabric` at line 45, `charcoal` at line 120) cover the same topic redundantly.
- No validation beyond a truthiness/`<=0` guard in the two calculators.

### 5. Prioritized list of identified problems

1. Hardcoded illustrative data mislabeled as sourced facts (`index.html:173-184`) — credibility risk.
2. Unpinned Chart.js CDN without SRI (`index.html:171`) — supply-chain/breaking-change risk.
3. No tests, no linting, no type checking — quality risk across the entire codebase.
4. No responsive breakpoints / media queries — poor mobile experience.
5. Charts and canvases lack ARIA/keyboard accessibility — exclusion risk.
6. Redundant charcoal sections (`index.html:45`, `index.html:120`) — maintenance debt.
7. Weak input validation (`parseInt` NaN edge case) — `index.html:227-234,238-260`.
8. Tightly coupled HTML IDs referenced by name in JS — fragility on refactor.
9. No persistence — all user input lost on reload.
10. Hotlinked external images with no lazy loading — performance/reliability risk.

### 6. Files particularly important to understand the project

- `index.html` — the entire application (268 lines). This is the only file to study.
- `README.md` — team context only (3 lines); no technical documentation.
- `.git/` — history shows the last meaningful commit was a Git certification practice exercise (2026-03-15); project appears inactive.

### 7. Constraints, requirements, and decisions future development must preserve

- Single-file, zero-build deployment model (easy to host on GitHub Pages / static hosts).
- NASA Space Apps Challenge 2025 attribution in footer (`index.html:168`) — preserve credit.
- Topic scope: DRC / Congo Basin deforestation, urban growth, charcoal, agriculture, consequences, solutions.
- Chart.js remains the charting library (unless a deliberate migration is decided).
- No secrets are stored in the repo; do not introduce API keys or tokens into client-side code.

### 8. Anything important another AI assistant should know before proposing changes

- The repo contains only `index.html`, `README.md`, and `.git`. There is no `package.json`, no build script, no test suite, no CI/CD, no docs beyond the 3-line README, and no open issues visible in the working tree.
- Do not assume data accuracy: all chart figures are illustrative and unsourced in code. Any feature proposal involving real data must address where the data comes from (e.g., GFW API, NASA API) and how it is labeled.
- The page runs entirely client-side; proposals requiring a backend, database, or auth represent a change in project category, not an incremental addition.
- When proposing edits, reference line numbers in `index.html` (e.g., `index.html:187-208` for the slider) since there are no other source files.
- The user has explicitly forbidden modifying, creating, deleting, or moving project files and running dependency/install commands. `PROJECT_HANDOFF.md` is being written as the deliverable report only.

---