import { createFileRoute } from "@tanstack/react-router";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Boxes,
  Braces,
  Database,
  Gauge,
  Download,
  FileText,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { HERO_VIDEO_CONFIG } from "@/config/heroVideo";
import resumeDocument from "../resume/Resume.pdf?url";
import voltexDocument from "../docs/Voltex Electronics Retail (DA Project).pdf?url";
import supplyChainReport from "../docs/MAD_Duong-Thanh-Hieu_supplychain.pdf?url";
import supplyChainPresentation from "../docs/SupplyChain Powerpoint.pdf?url";
import bicycleDashboard from "../docs/data excel/Bicycle_Dashboard_Excel.html?url";
import dataAnalystBootcampCert from "../certificate/udemy certificate.pdf?url";
import sqlAdvancedCert from "../certificate/sql_advanced certificate.pdf?url";
import dataAnalytics101Cert from "../certificate/Data_101.pdf?url";
import powerBiAiCert from "../certificate/powerbi-sho.pdf?url";
import excelAiCert from "../certificate/Certificate - AI-Powered Excel for Data Analytics - Sho Duong - EXC000057.pdf?url";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sho Duong — Data Analyst & BI Portfolio" },
      {
        name: "description",
        content: "Sho Duong transforms complex data into clear business intelligence through analytics, dashboards, and modern data systems.",
      },
      { property: "og:title", content: "Sho Duong — Data Analyst & BI Portfolio" },
      {
        property: "og:description",
        content: "Selected data engineering, BI, analytics, and visualization work by Sho Duong.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

type ProjectAction = { label: string; href: string; variant: "primary" | "secondary" };

const projects: Array<{ number: string; category: string; title: string; tone: string; label: string; actions: ProjectAction[] }> = [
  {
    number: "01",
    category: "SQL Server, Stored Procedures, T-SQL, Star Schema",
    title: "Enterprise Data Warehouse",
    tone: "champagne",
    label: "Medallion Architecture",
    actions: [{ label: "View Repository", href: "https://github.com/ShoDuong/SQL-warehouse-project", variant: "primary" }],
  },
  {
    number: "02",
    category: "Power BI, DAX, Python, Excel",
    title: "Voltex E-Commerce Analytics Dashboard",
    tone: "violet",
    label: "E-Commerce Intelligence",
    actions: [{ label: "View Documentation", href: voltexDocument, variant: "primary" }],
  },
  {
    number: "03",
    category: "Power BI, Python, Excel, Claude AI MCP",
    title: "Supply Chain & Sales Analytics Suite",
    tone: "green",
    label: "Sales Intelligence",
    actions: [
      { label: "View Report", href: supplyChainReport, variant: "primary" },
      { label: "View Presentation", href: supplyChainPresentation, variant: "secondary" },
    ],
  },
  {
    number: "04",
    category: "Excel, Pivot Tables, XLOOKUP, Chart.js",
    title: "Bicycle Sales Dashboard",
    tone: "blue",
    label: "Excel Dashboard",
    actions: [{ label: "View Interactive Dashboard", href: bicycleDashboard, variant: "primary" }],
  },
];

const journey = [
  { period: "2026 — PRESENT", title: "Business Analyst Intern", org: "AperioHub", description: "Managing data workflows, interactive reporting, and client intake architectures for decision-ready operations.", active: true },
  { period: "2026", title: "Front Desk Associate & Salon Manager", org: "Tina Nail Art", description: "Owned appointment scheduling systems, client intake workflows, and front-desk operations management.", active: false },
  { period: "2026", title: "Computer Science B.S.", org: "University of South Florida", description: "Graduated May 2026 with Dean's List Honors and an NSF STEM Scholarship.", active: false },
  { period: "PRE-MEDICAL", title: "Associate in Arts (A.A.)", org: "Hillsborough Community College", description: "Completed interdisciplinary pre-medical studies and an Associate in Arts degree.", active: false },
];

const credentials = [
  { title: "Complete Data Analyst Bootcamp", issuer: "Udemy", date: "June 2026", document: dataAnalystBootcampCert },
  { title: "SQL Advanced", issuer: "HackerRank", date: "June 2026", document: sqlAdvancedCert },
  { title: "Data Analytics 101", issuer: "Professional Credential", date: "July 2026", document: dataAnalytics101Cert },
  { title: "Agentic AI in Power BI", issuer: "Professional Credential", date: "August 2026", document: powerBiAiCert },
  { title: "Agentic AI in Excel", issuer: "The Future Analyst Academy", date: "August 2026", document: excelAiCert },
];

function useTypewriter(text: string) {
  const [value, setValue] = useState("");
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (reducedMotion) { setValue(text); return; }
    let index = 0;
    let deleting = false;
    let timer = 0;
    const tick = () => {
      if (!deleting) {
        index += 1;
        setValue(text.slice(0, index));
        if (index === text.length) { deleting = true; timer = window.setTimeout(tick, 1500); return; }
      } else {
        index -= 1;
        setValue(text.slice(0, index));
        if (index === 0) { deleting = false; timer = window.setTimeout(tick, 500); return; }
      }
      timer = window.setTimeout(tick, deleting ? 45 : 75);
    };
    timer = window.setTimeout(tick, 450);
    return () => window.clearTimeout(timer);
  }, [text, reducedMotion]);
  return value;
}

function DotMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    let frame = 0;
    let width = 0;
    let height = 0;
    let points: Array<{ x: number; y: number; hue: number }> = [];
    const pointer = { x: -9999, y: -9999, px: -9999, py: -9999, velocity: 0 };
    const waves: Array<{ x: number; y: number; start: number; strength: number; hue: number }> = [];
    const spacing = 24;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      points = [];
      for (let y = spacing / 2; y < height + spacing; y += spacing) {
        for (let x = spacing / 2; x < width + spacing; x += spacing) {
          points.push({ x, y, hue: (x / Math.max(width, 1)) * 280 + (y / Math.max(height, 1)) * 80 });
        }
      }
    };

    const draw = (now: number) => {
      context.clearRect(0, 0, width, height);
      for (let index = waves.length - 1; index >= 0; index -= 1) {
        const wave = waves[index];
        if (wave && now - wave.start > 1700) waves.splice(index, 1);
      }
      for (const point of points) {
        const distance = Math.hypot(point.x - pointer.x, point.y - pointer.y);
        const proximity = Math.max(0, 1 - distance / 170);
        let energy = proximity * (0.48 + Math.min(pointer.velocity / 45, 0.5));
        let shiftX = 0;
        let shiftY = 0;
        let waveHue = point.hue + now * 0.018;
        for (const wave of waves) {
          const age = now - wave.start;
          const radius = age * (wave.strength > 1 ? 0.46 : 0.24);
          const waveDistance = Math.hypot(point.x - wave.x, point.y - wave.y);
          const pulse = Math.max(0, 1 - Math.abs(waveDistance - radius) / (wave.strength > 1 ? 56 : 38)) * Math.max(0, 1 - age / 1700);
          energy += pulse * wave.strength;
          if (waveDistance > 0) {
            shiftX += ((point.x - wave.x) / waveDistance) * pulse * 7;
            shiftY += ((point.y - wave.y) / waveDistance) * pulse * 7;
          }
          if (pulse > 0.08) waveHue = wave.hue + waveDistance * 0.25;
        }
        const alpha = reducedMotion ? 0.2 : Math.min(0.24 + energy * 0.72, 0.92);
        const radius = 1.05 + Math.min(energy, 1.8) * 1.8;
        context.beginPath();
        context.fillStyle = `hsla(${waveHue % 360}, 88%, 68%, ${alpha})`;
        context.shadowColor = `hsla(${waveHue % 360}, 92%, 68%, ${Math.min(energy, 0.65)})`;
        context.shadowBlur = energy * 12;
        context.arc(point.x + shiftX, point.y + shiftY, radius, 0, Math.PI * 2);
        context.fill();
      }
      context.shadowBlur = 0;
      pointer.velocity *= 0.9;
      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    };

    const onMove = (event: PointerEvent) => {
      const distance = Math.hypot(event.clientX - pointer.px, event.clientY - pointer.py);
      pointer.velocity = Number.isFinite(distance) ? distance : 0;
      pointer.px = pointer.x = event.clientX;
      pointer.py = pointer.y = event.clientY;
      if (waves.length === 0 || performance.now() - (waves.at(-1)?.start ?? 0) > 58) {
        waves.push({ x: event.clientX, y: event.clientY, start: performance.now(), strength: 0.68, hue: (event.clientX / Math.max(width, 1)) * 360 });
      }
    };
    const onDown = (event: PointerEvent) => waves.push({ x: event.clientX, y: event.clientY, start: performance.now(), strength: 1.7, hue: (performance.now() * 0.08) % 360 });

    resize();
    window.addEventListener("resize", resize);
    if (!reducedMotion) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerdown", onDown, { passive: true });
      frame = window.requestAnimationFrame(draw);
    } else draw(performance.now());
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />;
}

function HeroVideo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const video = videoRef.current;
    if (!wrapper || !video) return;

    // Load the whole file into memory so seeks never wait on network range requests.
    let objectUrl: string | null = null;
    let cancelled = false;
    fetch(HERO_VIDEO_CONFIG.src)
      .then((response) => response.blob())
      .then((blob) => {
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        video.src = objectUrl;
      })
      .catch(() => {
        if (!cancelled) video.src = HERO_VIDEO_CONFIG.src;
      });

    if (reducedMotion) {
      return () => {
        cancelled = true;
        if (objectUrl) URL.revokeObjectURL(objectUrl);
      };
    }

    let target = 0;
    let displayed = 0;
    let seeking = false;
    let visible = true;
    let frame = 0;
    let previousX: number | null = null;
    const frameStep = 1 / 24;

    // Ease the displayed time toward the target each frame and only seek once the previous seek finished.
    const tick = () => {
      frame = 0;
      if (!visible || !video.duration) return;
      displayed += (target - displayed) * 0.22;
      if (Math.abs(target - displayed) < 0.002) displayed = target;
      if (!seeking && Math.abs(video.currentTime - displayed) >= frameStep / 2) {
        seeking = true;
        video.currentTime = displayed;
      }
      if (displayed !== target || seeking) frame = window.requestAnimationFrame(tick);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(tick);
    };

    const onMove = (event: MouseEvent) => {
      const previous = previousX;
      previousX = event.clientX;
      if (!visible || previous === null || !video.duration) return;
      const delta = event.clientX - previous;
      target = Math.min(video.duration, Math.max(0, target + (delta / window.innerWidth) * HERO_VIDEO_CONFIG.sensitivity * video.duration));
      schedule();
    };
    const onLoaded = () => {
      target = displayed = video.duration * 0.18;
      seeking = true;
      video.currentTime = displayed;
    };
    const onSeeked = () => {
      seeking = false;
      schedule();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
      if (visible) schedule();
    });
    observer.observe(wrapper);

    window.addEventListener("mousemove", onMove, { passive: true });
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("seeked", onSeeked);
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("mousemove", onMove);
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("seeked", onSeeked);
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [reducedMotion]);

  return (
    <div ref={wrapperRef} className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        poster={HERO_VIDEO_CONFIG.poster}
        className="h-full w-full object-cover opacity-95"
        style={{ objectPosition: HERO_VIDEO_CONFIG.objectPosition }}
      />
      <div className="absolute inset-0 bg-hero-mask" />
    </div>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Resume", "#resume"],
    ["Arsenal", "#arsenal"],
    ["Certifications", "#certifications"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/65 px-5 py-4 backdrop-blur-xl sm:px-8">
      <nav className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-5 lg:grid-cols-[1fr_auto_1fr]" aria-label="Primary navigation">
        <a href="#top" className="flex min-w-0 items-center gap-3 font-heading text-xl font-semibold text-foreground sm:text-2xl">
          <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-full border border-border bg-muted grayscale">
            <img src={HERO_VIDEO_CONFIG.poster} alt="Sho Duong portrait" className="h-full w-full object-cover" />
          </span>
          <span className="truncate transition-colors hover:text-champagne">Sho Duong</span>
          <span className="hidden font-mono text-[10px] font-medium text-muted-foreground sm:inline">✳︎ DATA ANALYST</span>
        </a>
        <div className="hidden items-center gap-5 text-sm text-secondary-foreground lg:flex">
          {links.map(([label, href], index) => (
            <span key={label} className="flex items-center gap-5">
              <a href={href} className="transition-colors hover:text-champagne">
                {label}
              </a>
              {index < links.length - 1 && <span className="text-muted-foreground">,</span>}
            </span>
          ))}
        </div>
        <a href="mailto:hello@sho.dev" className="hidden justify-self-end rounded-full bg-champagne px-5 py-2 text-sm font-semibold text-champagne-foreground transition-transform hover:scale-105 lg:inline-flex">
          Let's Connect
        </a>
        <Button type="button" variant="ghost" size="icon" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((current) => !current)} className="text-foreground lg:hidden">
          {open ? <X /> : <Menu />}
        </Button>
      </nav>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-full left-0 z-40 flex h-[calc(100dvh-73px)] w-screen flex-col items-center justify-center gap-7 border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="font-heading text-4xl text-foreground">
              {label}
            </a>
          ))}
          <a href="mailto:hello@sho.dev" className="mt-4 rounded-full bg-champagne px-6 py-3 font-semibold text-champagne-foreground">
            Let's Connect
          </a>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  const title = useTypewriter("Data Analyst");
  return (
    <section id="top" className="relative z-10 flex h-screen items-end overflow-hidden px-5 pb-12 pt-28 sm:px-8 md:items-center md:px-10 md:pb-0">
      <HeroVideo />
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 flex max-w-3xl flex-col items-start gap-5">
        <span className="rounded-full border border-border bg-background/55 px-3 py-1.5 font-mono text-[10px] text-secondary-foreground backdrop-blur-xl sm:text-xs">git commit -m &quot;init_sho_duong&quot;</span>
        <span className="rounded-md border border-champagne/30 bg-champagne/10 px-4 py-2 font-mono text-xs font-medium text-champagne backdrop-blur-xl sm:text-sm">Welcome to my Portfolio</span>
        <h1 className="font-heading text-5xl leading-[0.95] font-medium text-foreground sm:text-7xl md:text-[84px]">
          Hi! I'm <em className="hero-heading font-normal">Sho Duong</em>
        </h1>
        <div className="inline-flex items-center rounded-lg border border-border bg-background/60 px-5 py-2 font-mono text-2xl font-semibold text-champagne backdrop-blur-xl sm:text-3xl">
          {title}
          <span className="ml-1 inline-block h-[1em] w-0.5 animate-pulse bg-champagne" />
        </div>
        <p className="max-w-xl text-base leading-relaxed text-secondary-foreground drop-shadow-lg sm:text-lg">
          I am a data analyst skilled in SQL, Python, Power BI, Snowflake, and Tableau. I turn data into actionable insights that support smarter decisions.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <a href="mailto:hello@sho.dev" className="inline-flex items-center gap-3 rounded-full bg-champagne px-5 py-3 font-semibold text-champagne-foreground transition-transform hover:-translate-y-0.5">
            Let’s Connect <ArrowRight className="size-4" />
          </a>
          <a href={resumeDocument} download="Sho-Duong-Resume.pdf" className="inline-flex items-center gap-3 rounded-full border border-border bg-background/40 px-5 py-3 font-medium text-foreground backdrop-blur-xl transition-colors hover:border-champagne">
            Download CV <ArrowDownRight className="size-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function DashboardPreview({ project, compact = false }: { project: (typeof projects)[number]; compact?: boolean }) {
  const bars = [42, 68, 54, 83, 63, 76, 48, 71];
  return (
    <div className={`dashboard-preview tone-${project.tone} ${compact ? "h-52 w-[340px] sm:h-[270px] sm:w-[420px]" : "min-h-64 w-full"}`}>
      <div className="flex items-center justify-between border-b border-border/70 px-4 py-3 font-mono text-[10px] uppercase text-muted-foreground">
        <span>{project.label}</span>
        <span className="text-circuit">● live</span>
      </div>
      <div className="grid flex-1 grid-cols-[1fr_1.35fr] gap-3 p-4">
        <div className="flex flex-col gap-3">
          <div className="rounded border border-border bg-background/30 p-3">
            <span className="font-mono text-[9px] text-muted-foreground">TOTAL SIGNAL</span>
            <p className="mt-2 font-heading text-3xl text-foreground">84.6k</p>
          </div>
          <div className="grid flex-1 place-items-center rounded border border-border bg-background/30">
            <div className="donut" />
          </div>
        </div>
        <div className="flex items-end gap-2 rounded border border-border bg-background/30 p-4">
          {bars.map((height, index) => (
            <span key={index} style={{ height: `${height}%` }} className="min-h-2 flex-1 rounded-t-sm bg-current opacity-75" />
          ))}
        </div>
      </div>
    </div>
  );
}

function Marquee() {
  const { scrollY } = useScroll();
  const right = useTransform(scrollY, [0, 1800], [-220, 180]);
  const left = useTransform(scrollY, [0, 1800], [180, -220]);
  const cards = [...projects, ...projects];
  return (
    <section className="relative z-10 overflow-hidden py-20" aria-label="Project preview reel">
      <motion.div style={{ x: right }} className="mb-3 flex w-max gap-3">
        {cards.map((project, index) => (
          <DashboardPreview key={`top-${project.number}-${index}`} project={project} compact />
        ))}
      </motion.div>
      <motion.div style={{ x: left }} className="ml-[-420px] flex w-max gap-3">
        {[...cards].reverse().map((project, index) => (
          <DashboardPreview key={`bottom-${project.number}-${index}`} project={project} compact />
        ))}
      </motion.div>
    </section>
  );
}

function RevealText({ children }: { children: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.35"] });
  const words = useMemo(() => children.split(" "), [children]);
  return (
    <p ref={ref} className="max-w-3xl font-heading text-3xl leading-tight text-foreground sm:text-5xl">
      {words.map((word, index) => (
        <RevealWord key={`${word}-${index}`} word={word} index={index} total={words.length} progress={scrollYProgress} />
      ))}
    </p>
  );
}

function RevealWord({ word, index, total, progress }: { word: string; index: number; total: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [index / total, Math.min(1, index / total + 0.14)], [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.22em] inline-block">
      {word}
    </motion.span>
  );
}

function About() {
  return (
    <section id="about" className="relative z-10 border-y border-border bg-background/25 px-5 py-28 backdrop-blur-xl sm:px-8 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="group relative mx-auto w-full max-w-md">
          <div className="absolute inset-8 rounded-full bg-champagne/15 opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="portrait-frame relative aspect-[4/5] w-full rotate-[-2deg] overflow-hidden rounded-xl border border-champagne/30 bg-muted shadow-quiet transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.03]">
            <img src={HERO_VIDEO_CONFIG.poster} alt="Sho Duong creative portrait" className="absolute inset-0 z-10 h-full w-full object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0" />
            <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
              <p className="font-heading text-xl font-bold text-white">Sho Duong</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[#F7E2C0]">Data Analyst · BI Specialist</p>
            </div>
          </div>
          <p className="mt-6 pr-1 text-right font-mono text-xs tracking-wider text-gray-400">CURIOUS BY DESIGN ✳︎</p>
        </div>
        <div>
          <p className="mb-5 font-mono text-xs uppercase text-circuit">01 / About</p>
          <h2 className="mb-10 font-heading text-5xl leading-none text-foreground sm:text-7xl">
            Engineering Insights <em className="hero-heading font-normal">with Curiosity & Care</em>
          </h2>
          <RevealText>
            Data Analyst specializing in transforming raw numbers into clear, measurable business decisions. I architect end-to-end analytics systems using SQL, Power BI, Advanced DAX, and Data Modeling—delivering intuitive, scalable dashboards that empower teams to turn data into confident action.
          </RevealText>
        </div>
      </div>
    </section>
  );
}


function Resume() {
  const [open, setOpen] = useState(false);
  return (
    <section id="resume" className="relative z-10 px-5 py-24 sm:px-8">
      <div className="liquid-panel mx-auto max-w-6xl p-7 sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase text-circuit">02 / Resume</p>
            <h2 className="font-heading text-5xl leading-none text-foreground sm:text-7xl">Built for <em className="hero-heading font-normal">measurable impact.</em></h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-secondary-foreground">Computer Science graduate recognized on the Dean's List and supported by an NSF STEM Scholarship, with a focus on trusted analytics architecture and decision-ready reporting.</p>
            <ul className="mt-7 grid gap-3 font-mono text-xs text-foreground sm:grid-cols-3">
              <li className="liquid-inset">3-tier Medallion Enterprise Data Warehouse</li>
              <li className="liquid-inset">5-page Power BI Supply Chain suite</li>
              <li className="liquid-inset">BigQuery Housing Intelligence Platform</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button type="button" onClick={() => setOpen(true)} className="h-auto rounded-full px-5 py-3">
                Preview Resume <FileText />
              </Button>
              <a href={resumeDocument} download="Sho-Duong-Resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-5 py-3 text-sm font-medium text-foreground backdrop-blur-xl transition-colors hover:border-champagne">
                Download CV <Download className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <DocumentPreviewDialog open={open} onOpenChange={setOpen} title="Sho Duong — Resume" src={resumeDocument} />
    </section>
  );
}

function DocumentPreviewDialog({ open, onOpenChange, title, src }: { open: boolean; onOpenChange: (open: boolean) => void; title: string; src: string }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="liquid-modal max-w-5xl border-border p-3 sm:p-5">
        <DialogHeader className="px-3 pt-3">
          <div className="mb-5 grid size-14 place-items-center rounded-full border border-champagne/30 bg-champagne/10 text-champagne"><FileText /></div>
          <DialogTitle className="font-heading text-3xl text-foreground">{title}</DialogTitle>
        </DialogHeader>
        <div className="overflow-hidden rounded-md border border-border bg-background">
          <iframe src={src} title={title} className="h-[70vh] w-full bg-background" />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Proficiency({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref}>
      <div className="mb-2 flex justify-between font-mono text-xs">
        <span>{label}</span>
        <span className="text-circuit">{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-border">
        <motion.div initial={{ width: 0 }} animate={{ width: inView ? `${value}%` : 0 }} transition={{ duration: 1.1 }} className={`h-full rounded-full bg-circuit ${inView ? "circuit-pulse" : ""}`} />
      </div>
    </div>
  );
}

function Arsenal() {
  return (
    <section id="arsenal" className="relative z-10 bg-alt/25 px-5 py-28 backdrop-blur-lg sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <p className="mb-4 font-mono text-xs uppercase text-muted-foreground">Capabilities / toolkit</p>
          <h2 className="font-heading text-6xl text-foreground sm:text-8xl">Technical Arsenal</h2>
          <div className="mx-auto mt-6 h-px w-20 bg-champagne" />
        </header>
        <div className="grid auto-rows-[minmax(250px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-3">
          <article className="arsenal-card glow-runner">
            <Database className="text-champagne" />
            <div>
              <p className="arsenal-number">A / 01</p>
              <h3>Languages & Querying</h3>
              <p>Readable, auditable querying and analysis across relational and cloud warehouses.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "PostgreSQL", "MS SQL Server", "MySQL", "BigQuery", "DAX"].map((tech) => (
                  <span key={tech} className="tech-chip hover:border-champagne hover:text-champagne">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
          <article className="arsenal-card glow-runner">
            <BarChart3 className="text-circuit" />
            <div>
              <p className="arsenal-number">A / 02</p>
              <h3>Business Intelligence</h3>
              <p>Decision-ready reporting interfaces designed for clarity, speed, and confidence.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Power BI", "Calculated Measures", "TOTALMTD", "ALLEXCEPT", "Tableau", "Excel", "SUMIFS", "XLOOKUP", "INDEX MATCH", "Pivot Dashboards"].map((tech) => (
                  <span key={tech} className="tech-chip hover:border-circuit hover:text-circuit">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
          <article className="arsenal-card glow-runner">
            <Boxes className="text-signal-blue" />
            <div>
              <p className="arsenal-number">A / 03</p>
              <h3>Architecture & Modeling</h3>
              <p>Trusted models that scale from raw ingestion to curated business metrics.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Medallion Architecture", "Bronze/Silver/Gold", "Star Schemas", "ETL Pipelines"].map((tech) => (
                  <span key={tech} className="tech-chip hover:border-signal-blue hover:text-signal-blue">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
          <article className="arsenal-card glow-runner">
            <Braces className="text-signal-violet" />
            <div>
              <p className="arsenal-number">A / 04</p>
              <h3>Web & UI</h3>
              <p>Responsive analytics interfaces with polished interaction and visual hierarchy.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["JavaScript", "React", "HTML/CSS", "Bootstrap", "Three.js", "Tailwind CSS"].map((tech) => (
                  <span key={tech} className="tech-chip hover:border-signal-violet hover:text-signal-violet">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
          <article className="arsenal-card glow-runner">
            <Sparkles className="text-champagne" />
            <div>
              <p className="arsenal-number">A / 05</p>
              <h3>Developer & AI Tools</h3>
              <p>AI-assisted workflows and dependable delivery tooling for faster iteration.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Claude AI MCP", "GitHub Copilot", "Git/GitHub", "Jira", "Vercel", "Netlify"].map((tech) => (
                  <span key={tech} className="tech-chip hover:border-champagne hover:text-champagne">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
          <article className="arsenal-card glow-runner">
            <Gauge className="text-circuit" />
            <div>
              <p className="arsenal-number">A / 06</p>
              <h3>Proficiency Meters</h3>
              <div className="mt-8 space-y-6">
                <Proficiency label="Power BI & DAX" value={95} />
                <Proficiency label="SQL Querying" value={92} />
                <Proficiency label="Python Analytics" value={88} />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}


function Certifications() {
  const [active, setActive] = useState(0);
  const [preview, setPreview] = useState(false);
  const select = (direction: number) => setActive((current) => (current + direction + credentials.length) % credentials.length);
  return (
    <section id="certifications" className="relative z-10 overflow-hidden px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-14 text-center">
          <p className="mb-4 font-mono text-xs uppercase text-circuit">Certifications</p>
          <h2 className="font-heading text-5xl text-foreground sm:text-7xl">Professional Credentials</h2>
          <div className="mx-auto mt-6 h-px w-20 bg-champagne" />
        </header>
        <div className="relative mx-auto h-[390px] max-w-5xl [perspective:1200px]" aria-roledescription="carousel" aria-label="Professional credentials">
          {credentials.map((credential, index) => {
            const raw = index - active;
            const offset = raw > credentials.length / 2 ? raw - credentials.length : raw < -credentials.length / 2 ? raw + credentials.length : raw;
            const isActive = offset === 0;
            return (
              <motion.article
                key={credential.title}
                animate={{ x: `${offset * 58}%`, y: Math.abs(offset) * 34, rotateY: offset * -17, rotateZ: offset * 2.5, scale: isActive ? 1 : 0.82, opacity: Math.abs(offset) > 1 ? 0.28 : 0.78 }}
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
                className={`liquid-panel absolute left-1/2 top-0 flex h-[320px] w-[min(78vw,430px)] -translate-x-1/2 flex-col justify-between p-7 ${isActive ? "glow-runner z-20" : "pointer-events-none z-10"}`}
                aria-hidden={!isActive}
              >
                <div>
                  <div className="mb-10 flex items-center justify-between font-mono text-[10px] uppercase text-muted-foreground"><span>Credential {String(index + 1).padStart(2, "0")}</span><FileText className="text-champagne" /></div>
                  <p className="font-mono text-xs text-circuit">{credential.issuer} · {credential.date}</p>
                  <h3 className="mt-4 font-heading text-3xl leading-tight text-foreground">{credential.title}</h3>
                </div>
                {isActive && <Button type="button" onClick={() => setPreview(true)} className="w-fit rounded-full">Preview Certificate <FileText /></Button>}
              </motion.article>
            );
          })}
        </div>
        <div className="mt-2 flex items-center justify-center gap-4">
          <Button type="button" variant="outline" size="icon" onClick={() => select(-1)} aria-label="Previous certificate" className="rounded-full bg-background/30"><ArrowLeft /></Button>
          <span className="min-w-16 text-center font-mono text-xs text-muted-foreground">{active + 1} / {credentials.length}</span>
          <Button type="button" variant="outline" size="icon" onClick={() => select(1)} aria-label="Next certificate" className="rounded-full bg-background/30"><ArrowRight /></Button>
        </div>
      </div>
      <DocumentPreviewDialog open={preview} onOpenChange={setPreview} title={credentials[active]?.title ?? "Certificate"} src={credentials[active]?.document ?? resumeDocument} />
    </section>
  );
}

function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 0.8", "end 0.55"] });
  return (
    <section id="experience" className="relative z-10 bg-background/25 px-5 py-28 backdrop-blur-xl sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <p className="mb-4 font-mono text-xs uppercase text-circuit">Work Journey</p>
          <h2 className="font-heading text-5xl text-foreground sm:text-7xl">Work Journey & Experience</h2>
          <div className="mx-auto mt-6 h-px w-20 bg-champagne" />
        </header>
        <div ref={timelineRef} className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2" aria-hidden="true">
            <motion.span style={{ scaleY: scrollYProgress, transformOrigin: "top" }} className="absolute inset-0 bg-circuit" />
          </div>
          {journey.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-12%" }} className="relative pb-12 pl-14 last:pb-0 sm:grid sm:grid-cols-2 sm:gap-20 sm:pl-0">
              <motion.span initial={{ scale: 0.7 }} whileInView={{ scale: 1.25 }} viewport={{ once: true, margin: "-18%" }} className={`absolute left-4 top-2 z-10 size-3.5 -translate-x-1/2 rounded-full border sm:left-1/2 ${item.active ? "timeline-node-active circuit-pulse border-circuit bg-circuit" : "border-champagne/60 bg-background"}`} aria-hidden="true" />
              <div className={index % 2 === 1 ? "sm:col-start-2" : ""}>
                <div className="rounded-lg border border-border bg-card p-6 shadow-quiet backdrop-blur-xl">
                  <p className={`font-mono text-[10px] uppercase ${item.active ? "text-circuit" : "text-muted-foreground"}`}>{item.period}</p>
                  <h3 className="mt-3 font-heading text-3xl text-foreground">{item.title}</h3>
                  <p className="mt-1 font-mono text-xs text-champagne">@ {item.org}</p>
                  <p className="mt-4 leading-relaxed text-secondary-foreground">{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total, progress }: { project: (typeof projects)[number]; index: number; total: number; progress: MotionValue<number> }) {
  const reducedMotion = useReducedMotion();
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  return (
    <motion.article style={{ scale: reducedMotion ? 1 : scale, transformOrigin: "center top" }} className="project-stack-card relative mb-10 min-h-[70vh] overflow-hidden rounded-lg border border-border bg-card shadow-quiet backdrop-blur-xl md:sticky">
      <div className="grid gap-5 border-b border-border p-5 sm:p-7 lg:grid-cols-[70px_1fr_2fr_auto] lg:items-center">
        <span className="font-mono text-xs text-muted-foreground">{project.number} / 04</span>
        <span className="font-mono text-xs text-champagne">{project.category}</span>
        <h3 className="font-heading text-3xl text-foreground sm:text-4xl">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${action.variant === "primary" ? "border border-border text-foreground hover:border-champagne" : "border border-champagne/30 bg-champagne/10 text-champagne hover:border-champagne"}`}
            >
              {action.label} {action.variant === "primary" ? <ArrowRight className="size-4" /> : <FileText className="size-4" />}
            </a>
          ))}
        </div>
      </div>
      <div className="grid gap-4 p-4 sm:p-7 lg:grid-cols-2">
        <DashboardPreview project={project} />
        <DashboardPreview project={{ ...project, tone: index === 0 ? "blue" : index === 1 ? "champagne" : "green" }} />
      </div>
    </motion.article>
  );
}

function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <section id="projects" className="relative z-10 bg-background/35 px-4 pt-24 pb-40 backdrop-blur-lg sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-center font-mono text-xs text-muted-foreground">SELECTED WORK / 2023—2026</p>
        <h2 className="hero-heading mb-20 text-center font-heading text-7xl font-semibold sm:text-9xl">Projects</h2>
        <div ref={ref}>
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} total={projects.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-background/30 px-5 pt-24 pb-10 backdrop-blur-xl sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-border pb-16 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-3 font-mono text-xs text-circuit">AVAILABLE FOR SELECT PROJECTS</p>
            <h2 className="font-heading text-6xl leading-none text-foreground sm:text-8xl">
              Ready to <em className="hero-heading font-normal">collaborate?</em>
            </h2>
          </div>
          <a href="mailto:hello@sho.dev" className="inline-flex items-center gap-3 rounded-full bg-champagne px-6 py-3 font-semibold text-champagne-foreground">
            Let's Connect <Mail className="size-4" />
          </a>
        </div>
        <p className="pt-8 font-mono text-[10px] text-muted-foreground">© 2026 SHO DUONG · BUILT WITH CURIOSITY & CARE</p>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <main className="relative overflow-clip bg-background">
      <DotMatrix />
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Resume />
      <Arsenal />
      <Certifications />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
