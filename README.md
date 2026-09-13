# Sho Duong Portfolio

Bản prompt này đã được xử lý để video background chạy cố định (fixed) xuyên suốt toàn bộ trang web, giúp đồng bộ giao diện dark mode và hiệu ứng từ trên xuống dưới.

Markdown
# Sho Duong — Personal Data Analyst & BI Portfolio

## Overview

Build a single-page, dark-themed portfolio landing page for "Sho Duong" (Data Analyst & BI Specialist) using React 18, TypeScript, Vite, Framer Motion, and Tailwind CSS.

The layout consists of a full-screen mouse-scrubbed video Hero section, followed by a vertical scroll experience with scroll-reactive animations, scroll-revealed text, and sticky-stacking project cards. 

**IMPORTANT:** The background video is fixed across the entire page (z-index: 0) to ensure full background synchronization throughout all sections.

---

## Fonts & Global Setup

Load fonts in `index.html`:
- Heading: `https://db.onlinewebfonts.com/c/5ac3fe7c6abd2f62067f266d89671492?family=HelveticaNowDisplay-Medium`
- Body / Accents: `https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700;900&display=swap`

Define CSS in `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-heading: 'HelveticaNowDisplay-Medium', 'Helvetica Neue', Arial, sans-serif;
  --font-body: 'Kanit', sans-serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
html, body, #root { background-color: #0C0C0C; }

body {
  font-family: var(--font-body);
  color: #D7E2EA;
  -webkit-font-smoothing: antialiased;
}

.hero-heading {
  background: linear-gradient(180deg, #646973 0%, #bbccd7 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
0. SYNCHRONIZED BACKGROUND VIDEO (Global fixed layer)
A full-screen <video> element rendered at the app root level: position: fixed; inset: 0; z-index: 0; object-fit: cover; object-position: center; opacity: 0.65;.

Video asset: Import and use local asset ./assets/video/kero.mp4 (import keroVideo from './assets/video/kero.mp4').

Attributes: muted, playsInline, preload="auto". Does NOT autoplay.

Mouse Scrubbing Logic: The video scrubs forward/backward based on horizontal mouse movement across the window (window.addEventListener('mousemove')). Track prevX, calculate delta = currentX - prevX, convert to time offset: (delta / window.innerWidth) * SENSITIVITY * video.duration with SENSITIVITY = 0.8. Clamp targetTime between 0 and video.duration. Queue seeks safely with onSeeked to avoid seek-flooding.

1. NAVBAR (fixed, z-index: 10)
Fixed to top, full width. Padding: px-5 sm:px-8 py-4 sm:py-5. Flex row, justify-between, items-center.

Logo (left): Flex row with gap-3. Text "Sho Duong" at text-[21px] sm:text-[26px] font-bold, white, using var(--font-heading). Beside it, a decorative asterisk ✳︎ at text-[25px] sm:text-[30px], white, select-none.

Desktop nav links (center, hidden below md): Flex row, gap-8 text-[18px] sm:text-[20px], white. Links: "About", "Services", "Projects" separated by commas , . Each link has hover:opacity-60 transition-opacity.

Desktop CTA (right, hidden below md): An anchor "Let's Connect" at text-[18px] sm:text-[20px], white, underline underline-offset-4 hover:opacity-60 transition-opacity.

Mobile hamburger (visible below md): 3 horizontal bars (w-6 h-[2px] bg-white), spacing gap-[5px]. Toggles a fullscreen mobile overlay (fixed inset-0 bg-black/90 backdrop-blur-md z-9).

2. HERO SECTION (z-index: 1)
Full h-screen, flex column. On mobile: justify-end pb-12. On md:: justify-center pb-0. Horizontal padding: px-5 sm:px-8 md:px-10.

Content container: max-w-2xl relative z-10 flex flex-col gap-5.

Badge Label:

Text: "Welcome to my Portfolio"

Styled: bg-gradient-to-r from-purple-900/60 to-purple-600/40 border border-purple-400/40 text-white font-medium px-4 py-2 rounded-md w-fit text-[14px] sm:text-[16px] tracking-wide backdrop-blur-sm.

Main Title:

Text using var(--font-heading): "Hi! I'm Sho Duong"

Styled: text-[48px] sm:text-[64px] md:text-[76px] font-bold text-white leading-tight tracking-tight drop-shadow-lg.

Typewriter Text (Job Title):

Text: "Data Analyst"

Rendered in a dark glass pill container: inline-block bg-black/50 border border-white/20 px-5 py-2 rounded-xl text-[24px] sm:text-[32px] font-semibold text-white w-fit backdrop-blur-md.

Custom useTypewriter hook: reveals 1 character every 60ms after 500ms delay. Includes a blinking white cursor (w-[2px] h-[1em] bg-white ml-1 animate-pulse).

Bio Paragraph:

Text: "I am a data analyst skilled in SQL, Python, Power BI, Snowflake, and Tableau. I turn data into actionable insights that support smarter decisions."

Styled: text-[16px] sm:text-[18px] text-gray-200 max-w-xl leading-relaxed mt-2 drop-shadow.

Action CTA:

Button: "Let’s Connect" with inline circular right-arrow icon (→).

Styled: inline-flex items-center gap-3 text-white text-[18px] sm:text-[20px] font-medium hover:opacity-80 transition-all cursor-pointer mt-4.

3. MARQUEE SECTION (z-index: 1)
Container: flex flex-col gap-3 py-20 relative z-10 bg-transparent.

Two horizontal rows of project GIF/image previews driven by vertical scroll position (window.scrollY).

Row 1 moves right on scroll (initialOffset={-200}), Row 2 moves left (initialOffset={200}).

Tiles: h-[270px] w-[420px] shrink-0 rounded-2xl object-cover border border-white/10 shadow-2xl.

4. ABOUT SECTION (z-index: 1)
Full-height section (min-h-screen relative flex items-center justify-center py-20 z-10).

4 Decorative elements: Positioned absolutely in the corners (3D icons/data graphics) with subtle floating/fadeIn logic.

Heading: hero-heading text-center font-black uppercase text-[clamp(3rem,12vw,160px)] -> "About Me".

Character-by-character Text Reveal (AnimatedText component):

Text: "With a strong foundation in Computer Science and Data Analytics, I focus on data modeling, interactive dashboard design, and business intelligence. I truly enjoy turning raw, complex data into clear metrics that help organizations stand out and make smarter decisions."

Uses useScroll to fade characters from opacity: 0.2 to 1.0 as the user scrolls through the paragraph.

5. SERVICES SECTION (z-index: 1)
White/Light contrast panel: relative z-10 bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[60px] py-24 px-6 md:px-12.

Heading: "Services" (text-center font-black uppercase text-[#0C0C0C] text-[clamp(3rem,12vw,160px)]).

Service List (5 Items):

01 — Data Analytics & ETL: Cleaning, transforming, and querying complex datasets using Python, SQL Server, and BigQuery.

02 — Power BI & DAX: Designing interactive dashboards and building custom business metrics with advanced DAX models.

03 — Business Intelligence Systems: Architecting scalable Star Schemas, Data Warehouses, and Medallion Data Pipelines.

04 — Automated AI Reporting: Creating automated data ingestion scripts and AI-driven reporting workflows.

05 — Web & Dashboard UI: Building responsive web-based visual analytics platforms using React and Tailwind CSS.

6. PROJECTS SECTION (Sticky-Stacking Cards) (z-index: 1)
Dark panel pulled over services: relative z-10 bg-[#0C0C0C]/90 backdrop-blur-md pt-24 pb-40 px-4 sm:px-8.

Heading: "Projects" (hero-heading text-center font-black uppercase text-[clamp(3rem,12vw,160px)]).

Sticky Card Stacking:

Track scroll with useScroll({ target: containerRef, offset: ['start start', 'end end'] }).

Cards stack on top of each other with sticky top-24 md:top-32 and scale down progressively (scale = 1 - (total - 1 - index) * 0.03).

3 Project Cards:

Project 01 — Enterprise Data Warehouse (Medallion Architecture) | Data Engineering & SQL

Project 02 — Supply Chain & Sales Analytics Suite | Power BI & DAX

Project 03 — Housing Market Intelligence Platform | BigQuery & Analytics

Each card features a top info bar (Number, Category, Title, "Live Project" button) and a bottom 2-column image grid showing project screenshots.

Key Dependencies
react, react-dom (^18.3.1)

framer-motion (^12.38.0)

lucide-react (^0.344.0)

tailwindcss, vite, typescript

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/185b2ac3-a32c-4859-b79c-58454e0c7847).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
