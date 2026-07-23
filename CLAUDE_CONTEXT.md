# Portfolio Project Context

## Project Overview
React + Vite portfolio website for Jaya Sriharshita Koneti (Harshita), with a separate blog section.

## Tech Stack
- **Framework:** React + Vite
- **Routing:** react-router-dom v7 (BrowserRouter; routes `/`, `/blog`, `/blog/:slug`)
- **Styling:** CSS with custom properties
- **Animations:** Framer Motion
- **Icons:** React Icons (Feather)

## Design System

### Fonts (Google Fonts)
| Font | CSS Variable | Usage |
|------|--------------|-------|
| Syne | `--font-display` | Display/Headlines |
| Space Grotesk | `--font-heading` | Headings/Navigation |
| Inter | `--font-body` | Body text |
| Fira Code | `--font-mono` | Code/Labels/Badges |

### Color Palette (Majestic Green)
- Primary: `#10b981`
- Secondary: `#059669`
- Tertiary: `#34d399`

### Theme Support
- Dark mode (default): `#0a0a0a` background
- Light mode: `#ffffff` background
- Toggle in Navbar with localStorage persistence
- Script in index.html prevents theme flash on load

## Key Features Implemented
1. **Bento Grid Hero** - Modern dashboard-style layout
2. **Light/Dark Theme Toggle** - With system preference detection
3. **Clean Typography** - Mixed fonts for unique look
4. **Responsive Design** - Mobile-first approach
5. **Simplified Contact Section** - Removed form, shows social cards only
6. **Blog** - Separate `/blog` route with category filter, date sort, and a like/upvote button (counts in `localStorage`)
7. **Router-aware Navbar** - Section links smooth-scroll on home; navigate-home-then-scroll from other routes; `Blog` link highlights when active

## Routing
- `/` → `Home` (renders the original single-page section list)
- `/blog` → `Blog` (index: filter-by-category chips + sort-by-date dropdown)
- `/blog/:slug` → `BlogPost` (hero image, points, pull-quote, callout, like button)
- `*` → redirect to `/`
- `Navbar` and `Footer` persist across routes; `ScrollToTop` resets scroll on navigation.
- Navbar section links use `navigate('/', { state: { scrollTo: id } })` when not on home; `Home` reads `location.state.scrollTo` to perform the scroll.

## File Structure
```
src/
├── components/
│   ├── Navbar.jsx/css     # Nav + theme toggle + Blog link (router-aware)
│   ├── Hero.jsx/css       # Bento grid layout
│   ├── About.jsx/css
│   ├── Skills.jsx/css     # 8 skill categories
│   ├── Experience.jsx/css
│   ├── Projects.jsx/css
│   ├── Publications.jsx/css
│   ├── Certifications.jsx/css
│   ├── Contact.jsx/css    # Social cards only (no form)
│   ├── Footer.jsx/css
│   ├── Home.jsx           # Home route (section list + scroll-to)
│   ├── Blog.jsx/css       # Blog index (filter + sort)
│   ├── BlogPost.jsx/css   # Single post (hero image, points, like)
│   └── ScrollToTop.jsx    # Resets scroll on route change
├── hooks/
│   └── useLikes.js        # localStorage-backed likes per post slug
├── data/
│   └── portfolioData.js   # All content data (incl. blogPosts)
├── index.css              # Global styles + theme variables
├── App.jsx                # Route table
└── main.jsx               # Wraps App in <BrowserRouter>

public/
├── dp.jpg                 # Profile photo
├── JayaSriharshitaKoneti.docx  # Resume
├── favicon.svg
├── blog/day1.webp         # Blog post hero image
└── _redirects             # Netlify SPA fallback
```

## Data Structure (portfolioData.js)
- `personalInfo` - Name, title, links, resume path
- `about` - Description paragraphs, highlights (stats)
- `skills` - 8 categories with arrays of skills
- `experience` - Fidelity, JPMorgan, ASM
- `projects` - SiliconAgent.ai, Prompt Optimizer, PantryFlow, Jeena
- `publications` - IEEE and IJRASET papers
- `certifications` - 6 certifications
- `education` - NEU details with coursework
- `blogPosts` - Array of `{ slug, title, date, readTime, category, likes (seed), image, imageAlt, excerpt, tags[], intro[], points[{title,body}], closing, question }`

## Skills Categories (must match Skills.jsx categoryConfig)
1. Programming Languages
2. Backend
3. Frontend
4. Cloud & DevOps
5. Databases
6. Testing & Performance
7. AI/ML Tools
8. AI Practices

## Commands
```bash
yarn install    # Install dependencies
yarn dev        # Start dev server (http://localhost:5173)
yarn build      # Production build
```

## Session History Summary
1. Built initial portfolio with dark theme
2. Added animations, particle background, glassmorphism
3. Changed color palette from purple to green
4. Added floating badges around profile (GenAI, Python, MySQL, Java)
5. Removed personal contact info for privacy
6. Added contact form with EmailJS + spam protection
7. Redesigned to fix "AI template" look:
   - Added mixed typography (4 fonts)
   - Implemented bento grid Hero
   - Removed particle background
   - Simplified styling
8. Removed contact form, kept social cards only
9. Implemented light/dark theme toggle
10. Updated all content from new resume (docx)
11. Fixed Skills.jsx to support 8 categories
12. Added blog: react-router-dom routing, Blog index (filter/sort), BlogPost (hero image, like), ScrollToTop, router-aware Navbar; first post (C#/.NET vs Java/Spring Boot)

## Notes
- Resume file: `JayaSriharshitaKoneti.docx` in public folder
- Profile image: `dp.jpg` in public folder
- Use `yarn` instead of `npm` to avoid issues
- Blog likes are local-only (localStorage, seeded per post) — no backend. Swap `useLikes.js` for an API if a backend is added.
- SPA fallback: `public/_redirects` (Netlify) and `vercel.json` (Vercel) so direct visits to `/blog` don't 404. `vite.config.js` uses `base: './'`.
