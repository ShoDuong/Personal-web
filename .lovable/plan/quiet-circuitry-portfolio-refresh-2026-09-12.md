# Quiet Circuitry Portfolio Refresh

## Build

- Confine the existing kero video to the full-height introduction only, at crisp opacity with a subtle bottom readability mask; keep desktop mouse scrubbing and use muted autoplay looping on touch devices.
- Update the fixed navigation to About, Arsenal, Experience, and Projects, preserving the accessible mobile overlay and Champagne contact action.
- Keep the two-row scroll-reactive project preview marquee directly after the introduction.

## Content and interactions

- Rework About with the supplied graduate/Dean's List copy and an interactive portrait that straightens, restores color, gently enlarges, reveals a glass name card, and gains a Champagne halo.
- Replace the current four-card Arsenal with six focused cards covering languages/querying, BI, architecture, web/UI, developer/AI tools, and animated proficiency meters.
- Remove Services and the code terminal, replacing them with a Work Journey & Experience vertical timeline containing the three supplied 2026 entries and a glowing present marker.
- Update the sticky project titles and technologies to match the revised three-project list, with Project 3 titled Enterprise Data Warehouse & SQL Analytics Platform; retain progressive stacking and reduced-motion behavior.
- Update the footer contact address to `hello@sho.dev` and keep the collaboration CTA and stat badges.

## Visual and technical details

- Apply the exact near-black, Champagne, Circuit Green, blue, violet, and text palette through semantic design tokens.
- Preserve Playfair Display, Kanit, and JetBrains Mono typography, refined glass surfaces, restrained motion, and responsive layouts.
- Add progressive sticky-card scaling using Framer Motion scroll progress, with stable mobile positioning and reduced-motion fallbacks.
- Verify metadata, successful compilation, and visible desktop/mobile behavior without overlap.# Quiet Circuitry Portfolio Refresh — Master Execution Plan
  ## 1. Hero & Background Architecture
  - **Hero Background:** Confine the `kero.mp4` video strictly inside the Hero section `h-screen overflow-hidden relative z-0`) at full crisp opacity with a soft bottom readability gradient mask.
  - **Hero Video Controls:** Enable desktop horizontal mouse scrubbing `SENSITIVITY = 0.8` with `onSeeked` queueing) and auto-fallback to a smooth hardware-accelerated muted autoplay loop on touch devices.
  - **Global Interactive Dot Matrix Canvas (Below Hero):** 
    - Render an interactive Canvas Dot Matrix background `position: fixed; inset: 0; z-index: 0; pointer-events: auto;`) covering all sections below the Hero.
    - Features an interactive grid of dots `Spacing: 26px`, `Base Opacity: 0.28`, `Color: #F7E2C0 / #6366F1`) that react to cursor movement and mouse clicks, creating expanding radial wave pings (Ripple/Amplitude effect). Includes a `prefers-reduced-motion` static fallback.
  ## 2. Navigation & Marquee
  - **Fixed Navigation:** Links for `About`, `Arsenal`, `Experience`, and `Projects`. Retain the accessible mobile overlay `backdrop-blur-xl`) and the Champagne Cream pill button **"Let's Connect"**.
  - **Project Marquee:** Directly beneath the Hero, retain the two-row scroll-reactive project preview marquee sliding in opposite directions on page scroll.
  ## 3. Section Breakdown & Content Refinement
  ### A. About Section
  - Use the updated graduate profile: B.S. in Computer Science at University of South Florida (May 2026, Dean's List Honors, NSF STEM Scholarship).
  - **Interactive Portrait:** Rotated 4:5 portrait card `-2deg`) that straightens `rotate-0`), transitions from grayscale to full color, gently scales up, reveals a floating glass name card, and casts an ambient Champagne glow halo on hover.
  ### B. Technical Arsenal (6-Card Bento Grid)
  - **Card 1 (Languages & Querying):** SQL (PostgreSQL, MS SQL Server, MySQL, BigQuery), Python (Pandas, NumPy, Matplotlib), DAX.
  - **Card 2 (Business Intelligence):** Power BI, Tableau, Excel (XLOOKUP, INDEX MATCH, Pivot Dashboards).
  - **Card 3 (Architecture & Modeling):** Medallion Architecture (Bronze/Silver/Gold), Star Schemas, ETL Pipelines.
  - **Card 4 (Web & UI):** JavaScript, React, HTML/CSS, Bootstrap, Three.js, Tailwind CSS.
  - **Card 5 (Developer & AI Tools):** Claude AI MCP, GitHub Copilot, Git/GitHub, Jira, Vercel, Netlify.
  - **Card 6 (Proficiency Meters):** Animated Circuit Green progress bars filling up on scroll `Power BI & DAX` - 95%, `SQL Querying` - 92%, `Python Analytics` - 88%).
  ### C. Work Journey & Experience Timeline
  - Replace Services & code terminal with a vertical timeline featuring a continuous hairline spine and connector nodes (top node glows Circuit Green = "PRESENT").
  - **Entry 1 (2026 - Present):** Business Analyst Intern @ AperioHub (Data workflows, interactive reporting, client intake systems).
  - **Entry 2 (2026):** Front Desk Associate & Salon Manager @ Tina Nail Art (Appointment scheduling, client intake workflows, front-desk operations).
  - **Entry 3 (2026):** B.S. in Computer Science @ University of South Florida (Graduated May 2026, Dean's List, NSF STEM Scholarship).
  ### D. Featured Projects (Sticky Stacking Cards)
  - Progressive scale-down effect `scale = 1 - (total - 1 - index) * 0.03`) using Framer Motion `useScroll` stuck at `top-24`.
  - **Project 1:** *Enterprise Data Warehouse (Medallion Architecture)* | SQL Server, ETL, Star Schema.
  - **Project 2:** *Supply Chain & Sales Analytics Suite* | Power BI, DAX, Python, Claude AI MCP.
  - **Project 3:** *Housing Market Intelligence Platform* | Google BigQuery, Power BI, DAX.
  ### E. Footer & Contact
  - Contact address updated to `hello@sho.dev` (and link to `Let's Connect`).
  - Retain circular stat badges `30+ Projects`, `5+ Years Experience`, `100% Precision`) beside the serif collaboration CTA.
  ## 4. Visual Tokens & Technical Compliance
  - **Palette:** Void Background `#050505`, Glass Card `rgba(255,255,255,0.04)`, Champagne Accent `#F7E2C0`, Circuit Green `#4ADE80`.
  - **Typography:** Playfair Display (Serif), Kanit (Sans), JetBrains Mono (Code/Eyebrows).
  - Zero overlap on mobile, fluid typography `clamp()`), and full responsive testing across all breakpoints.