# Liquid Quiet Circuitry Portfolio

## Build

- Upgrade the global post-introduction canvas into a smooth rainbow particle-wave field that reacts continuously to pointer movement, creates larger click shockwaves, and becomes a static spectrum grid when reduced motion is enabled.
- Keep the kero video strictly inside the full-height introduction, move its source and scrub settings into a reusable configuration module, preserve desktop horizontal scrubbing, and retain touch-device autoplay looping.
- Convert the navigation, About, Arsenal, Experience, Projects, and new document sections to highly transparent liquid-glass surfaces so the spectrum remains visible behind them.

## Content and sections

- Add Resume to the navigation and place a liquid-glass resume summary directly after About, including the specified honors and project accomplishments.
- Update About copy and expand Arsenal details exactly as provided.
- Add Certifications between Arsenal and Experience as an accessible curved carousel with four credential cards, keyboard-friendly controls, and a full-screen document preview dialog.
- Expand Experience to four entries by adding the Hillsborough Community College A.A. entry and animate the timeline spine/nodes on scroll.
- Expand Projects to four sticky cards, including Voltex E-Commerce Analytics Dashboard, and update numbering and technology labels.
- Preserve the existing marquee and footer structure while correcting the contact address to `hello@sho.dev`.

## Document handling

- Since no CV or certificate PDFs are currently available, show clear “Coming soon” states for download and preview actions instead of creating or linking fake files.
- Structure the document data so real PDF assets can be connected without redesigning the interface after upload.

## Technical details

- Keep TanStack Start, React 19, Framer Motion, Tailwind v4, current semantic tokens, and existing typography.
- Use semantic color and glass tokens in the global stylesheet; avoid hardcoded colors in page markup.
- Keep interactions responsive and accessible, lock page scroll while the document dialog is open, and include reduced-motion fallbacks.
- Verify metadata, compilation, desktop and mobile layout, carousel/dialog behavior, pointer waves, and absence of visible overlap.Bản plan đã được tinh chỉnh hoàn toàn chính xác theo đúng ý bạn, làm rõ cơ chế hiển thị **liquid-glass xuyên thấu**, hiệu ứng **sóng ngũ sắc tương tác theo con trỏ chuột**, thêm nút xem **PDF/Preview cho Certifications & Resume**, cũng như chuẩn hóa dữ liệu cho **4 dự án thật** và **4 mốc Work Journey**.
    

  Dưới đây là bản **Master Implementation Plan** hoàn chỉnh để bạn gửi thẳng cho AI/Lovable thực thi:
    

  # Liquid Quiet Circuitry Portfolio — Master Execution Plan
  ## 1. Hero & Background Architecture
  - **Confined Hero Video:** Restrict `kero.mp4` strictly inside the Hero section (`h-screen overflow-hidden relative z-0`). Abstract video source and scrubbing sensitivity into a central configuration module (`src/config/heroVideo.ts`). Keep desktop horizontal mouse scrubbing (`SENSITIVITY = 0.8` with `onSeeked` queueing) and touch-device autoplay looping.
    &nbsp;
  - **Dynamic Typewriter Loop:** Configure the `"Data Analyst"` typewriter hook to type, pause, backspace/delete, and retype infinitely with a blinking Champagne cursor.
    &nbsp;
  - **Global Multi-Color Interactive Wave Canvas:**
      

    - Position an interactive `<canvas>` (`position: fixed; inset: 0; z-index: 0; pointer-events: auto;`) behind all sections below the Hero.
      &nbsp;
    - **Pointer Tracking:** Continuously generate fluid rainbow spectrum waves (Cyan, Magenta, Gold, Lime, Purple) following pointer movement (`mousemove`).
      &nbsp;
    - **Click Action:** Mouse clicks trigger expanding radial shockwave pings.
      &nbsp;
    - **Reduced Motion:** Fallback to a static faint spectrum grid when `prefers-reduced-motion` is enabled.
      &nbsp;
  ## 2. Liquid-Glass UI System
  - Apply liquid-glassmorphism styling (`backdrop-blur-xl bg-white/[0.03]` or `bg-black/[0.25]` with `border border-white/10`) across Navbar, About, Resume, Arsenal, Certifications, Experience, Projects, and Footer.
    &nbsp;
  - Ensure all card background panels remain semi-transparent so the underlying rainbow wave field is continuously visible without being obscured.
    &nbsp;
  ## 3. Section Breakdown & Content Integration
  ### A. Navigation
  - Links: `About`, `Resume`, `Arsenal`, `Certifications`, `Experience`, `Projects`.
    &nbsp;
  - Retain accessible mobile dropdown (`backdrop-blur-xl`) and Champagne Cream pill button **"Let's Connect"**.
    &nbsp;
  ### B. About Section
  - **Updated Text:**
      

    > *"I'm Sho Duong, a Data Analyst focused on turning raw numbers into practical decisions, polished narratives, and measurable impact. My work spans Power BI Architecture, Data Modeling, Advanced DAX, and SQL—building analytics systems that feel intuitive, trusted, and scalable. I'm especially interested in data-driven storytelling: helping teams move from dashboards to decisions with clarity and confidence."*
    >
    > &nbsp;
  - **Interactive Portrait:** 4:5 rotated card (`-2deg`) that straightens (`rotate-0`), colorizes, scales up gently, reveals a floating glass name card, and casts a Champagne glow halo on hover.
    &nbsp;
  ### C. Resume Section (New Section Immediately After About)
  - Liquid-glass container featuring academic honors (Dean's List, NSF STEM Scholarship) and key data modeling accomplishments.
    &nbsp;
  - Action button: **"Download Full CV (PDF) ⬇"** linked to `src/docs/resume.pdf` (with a clean fallback preview modal if the file is pending).
    &nbsp;
  ### D. Technical Arsenal (6 Granular Bento Cards)
  - **1. Languages & Querying:** Python (Pandas, NumPy, Matplotlib, Seaborn), SQL (PostgreSQL, MS SQL Server, MySQL, BigQuery), DAX.
    &nbsp;
  - **2. Business Intelligence:** Power BI (Calculated Measures, TOTALMTD, ALLEXCEPT), Tableau, Excel (SUMIFS, XLOOKUP, INDEX MATCH, Pivot Dashboards).
    &nbsp;
  - **3. Data Warehousing:** Medallion Architecture (Bronze/Silver/Gold), Star Schemas, ETL Pipelines.
    &nbsp;
  - **4. Web & UI:** JavaScript, React, HTML/CSS, Bootstrap, Three.js, Tailwind CSS.
    &nbsp;
  - **5. Developer & AI Tools:** Claude AI MCP, GitHub Copilot, Git/GitHub, Jira, Netlify, Vercel.
    &nbsp;
  - **6. Proficiency Meters:** Circuit Green progress bars (`Power BI & DAX` - 95%, `SQL Querying` - 92%, `Python Analytics` - 88%).
    &nbsp;
  ### E. Certifications Section (3D Arc Flow Carousel & PDF Viewer)
  - Curved 3D Arc Flow Carousel featuring 4 credential cards:
      

    1. *Complete Data Analyst Bootcamp* (Udemy, June 2026) -> `src/docs/credentials/cert-data-analyst.pdf`
      &nbsp;
    2. *SQL Advanced* (HackerRank, June 2026) -> `src/docs/credentials/cert-sql-advanced.pdf`
      &nbsp;
    3. *Data Analytics 101* (July 2026) -> `src/docs/credentials/cert-data-101.pdf`
      &nbsp;
    4. *Agentic AI in Power BI* (August 2026) -> `src/docs/credentials/cert-agentic-ai-powerbi.pdf`
      &nbsp;
  - Active card button: **"Open Certificate PDF 📄"**.
    &nbsp;
  - Full-screen Lightbox Dialog: Displays PDF preview modal (`<iframe src="...">`) with keyboard navigation (ESC key to close, scroll-lock enabled).
    &nbsp;
  ### F. Work Journey & Experience Timeline
  - 3D vertical timeline with continuous hairline spine expanding on scroll and connector nodes glowing Circuit Green upon intersection.
    &nbsp;
  - **4 Entries:**
      

    1. **2026 — Present:** Business Analyst Intern @ AperioHub
      &nbsp;
    2. **2026:** Front Desk Associate & Salon Manager @ Tina Nail Art
      &nbsp;
    3. **2026:** B.S. in Computer Science @ University of South Florida (Dean's List, NSF STEM Scholarship)
      &nbsp;
    4. **Pre-Medical:** Associate in Arts (A.A.) Degree @ Hillsborough Community College
      &nbsp;
  ### G. Featured Projects (4 Sticky Stacking Cards)
  - Progressive scaling (`scale = 1 - (total - 1 - index) * 0.03`) using Framer Motion `useScroll` stuck at `top-24`.
    &nbsp;
  - **4 Projects:**
      

    1. **Project 01 — Enterprise Data Warehouse (Medallion Architecture)** | SQL Server, Stored Procedures, T-SQL, Star Schema Modeling
      &nbsp;
    2. **Project 02 — Voltex E-Commerce Analytics Dashboard** | Power BI, DAX, Python, Excel
      &nbsp;
    3. **Project 03 — Supply Chain & Sales Analytics Suite** | Power BI, Python, Excel, Claude AI MCP
      &nbsp;
    4. **Project 04 — Housing Market Intelligence Platform** | Google BigQuery, Power BI, Advanced DAX
      &nbsp;
  ### H. Footer & Contact
  - Contact address updated to `hello@sho.dev` (with mailto action).
    &nbsp;
  - Retain circular stat badges beside the serif collaboration CTA.
  ## 4. File Structure Setup for Assets & Documents
  Plaintext
  ```
  src/
  ├── assets/
  │   ├── video/              # kero.mp4
  │   └── certs/              # Certificate thumbnails (.png / .webp)
  ├── config/
  │   └── heroVideo.ts        # Hero video path and sensitivity config
  └── docs/
      ├── resume.pdf          # Sho Duong's CV PDF
      └── credentials/        # PDF files for certificates
          ├── cert-data-analyst.pdf
          ├── cert-sql-advanced.pdf
          ├── cert-data-101.pdf
          └── cert-agentic-ai-powerbi.pdf

  ```