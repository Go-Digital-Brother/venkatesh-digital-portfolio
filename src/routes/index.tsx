import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowUpRight, Camera, Mail, Phone, MapPin, MessageCircle, Linkedin, Target, Search, Share2,
  BarChart3, Users, Compass, FileSearch, Megaphone, MousePointerClick, CalendarDays, LayoutTemplate,
  LineChart, GraduationCap, ChevronDown, Sparkles, Menu, X,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import portrait from "@/assets/venkatesh-cutout.png";
import aboutImg from "@/assets/about-workspace.jpg";
import seoImg from "@/assets/seo-freelance.jpg";
import ResultsCharts from "@/components/ResultsCharts";
import vkLogo from "@/assets/vk_logo.png.asset.json";

const EMAIL = "kuppili.venkat@gmail.com";
const PHONE = "+918790009840";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Venkatesh Kuppili — Digital Marketing Strategist | SEO, AEO, GEO" },
      { name: "description", content: "Digital Marketing Strategist with 9+ years in paid ads, SEO, AEO, GEO and lead generation. Based in Hyderabad, India." },
      { property: "og:title", content: "Venkatesh Kuppili — Digital Marketing Strategist" },
      { property: "og:description", content: "Turning digital marketing strategies into measurable business growth." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "Person", name: "Venkatesh Kuppili",
        jobTitle: "Digital Marketing Strategist", email: `mailto:${EMAIL}`, telephone: "+91 8790009840",
        address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
        alumniOf: "Sasi Institute of Technology & Engineering",
        knowsAbout: ["Paid Ads", "SEO", "AEO", "GEO", "Google Ads", "Meta Ads", "Lead Generation", "OOH Marketing"],
      }),
    }],
  }),
  component: Index,
});

const NAV = [["About", "about"], ["Experience", "experience"], ["Skills", "skills"], ["Services", "services"], ["Work", "work"], ["Contact", "contact"]];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Results />
        <Skills />
        <Services />
        <Freelance />
        <Work />
        <Approach />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-navy-deep/85 backdrop-blur-xl py-3" : "py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="rounded-xl bg-white/95 p-1.5 shadow-lg shadow-black/20">
            <img src={vkLogo.url} alt="VK Growth Marketing logo" className="h-7 w-auto" />
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map(([l, id], i) => (
            <a key={id} href={`#${id}`} className="group flex items-center gap-3 px-3 text-xs font-medium uppercase tracking-[0.18em] text-navy-foreground/70 transition hover:text-navy-foreground">
              {i > 0 && <span className="size-1 bg-navy-foreground/40" />}{l}
            </a>
          ))}
        </nav>
        <Button asChild variant="hero" size="sm" className="hidden md:inline-flex"><a href="#contact">Let's Connect</a></Button>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="text-navy-foreground md:hidden">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="mx-6 mt-3 grid gap-1 rounded-2xl bg-navy-deep p-4 md:hidden">
          {NAV.map(([l, id]) => <a key={id} onClick={() => setOpen(false)} href={`#${id}`} className="rounded-lg px-3 py-2 text-navy-foreground/80 hover:bg-navy">{l}</a>)}
        </nav>
      )}
    </header>
  );
}

const METRICS = [["9+", "Years of Experience"], ["1,000+", "Monthly Leads"], ["32%", "Increase in Qualified Leads"], ["17%", "Reduction in CPL"]];
const RIBBON = ["Paid Ads", "SEO", "AEO", "GEO", "Google Ads", "Meta Ads", "Lead Generation", "OOH Marketing", "Camera Handling", "Analytics"];
const ORBIT = [
  { icon: Target, t: "Google Ads", s: "Up to ₹10L / mo" },
  { icon: Search, t: "SEO · AEO · GEO", s: "Search visibility" },
  { icon: Users, t: "Lead Gen", s: "1,000+ monthly" },
  { icon: LineChart, t: "Qualified Leads", s: "+32%" },
  { icon: BarChart3, t: "Cost per Lead", s: "−17%" },
  { icon: Share2, t: "Social", s: "8 brands managed" },
];

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero text-navy-foreground">
      <div className="grid-lines absolute inset-0 -z-10" />
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-6 pb-40 pt-32 lg:grid-cols-[1.15fr_1fr] lg:pb-32">
        <div className="relative z-10">
          <p className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
            <span className="size-2 animate-pulse rounded-full bg-accent" /> Venkatesh Kuppili · Hyderabad
          </p>
          <h1 className="animate-rise font-heading text-[clamp(2.4rem,5.6vw,5rem)] font-extrabold uppercase leading-[0.92]" style={{ animationDelay: ".1s" }}>
            <span className="block whitespace-nowrap pl-[10%]">Strategy that</span>
            <span className="flex justify-between gap-4"><span>Drives</span><span className="text-brand">Growth.</span></span>
          </h1>
          <p className="animate-rise mt-6 font-heading text-lg font-semibold text-navy-foreground/90 md:text-xl" style={{ animationDelay: ".2s" }}>
            Building Digital Growth Through Strategy, Performance & Innovation.
          </p>
          <p className="animate-rise mt-4 max-w-lg text-sm uppercase leading-relaxed tracking-wide text-navy-foreground/60" style={{ animationDelay: ".3s" }}>
            Digital Marketing Strategist · Paid Ads · SEO · AEO · GEO — 9+ years turning campaigns into measurable business results.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: ".4s" }}>
            <Button asChild variant="hero" size="lg"><a href="#work">View My Portfolio <ArrowUpRight /></a></Button>
            <Button asChild variant="glass" size="lg"><a href="#experience">My Experience <ArrowUpRight /></a></Button>
            <Button asChild variant="ghostLight" size="lg"><a href="#contact">[ Let's Connect ]</a></Button>
          </div>
          <div className="animate-rise mt-12 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl glass sm:grid-cols-4" style={{ animationDelay: ".5s" }}>
            {METRICS.map(([n, l]) => (
              <div key={l} className="bg-navy-deep/40 p-4">
                <div className="font-heading text-2xl font-extrabold text-brand">{n}</div>
                <div className="mt-1 text-[11px] leading-tight text-navy-foreground/60">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
          <div className="absolute left-1/2 top-[45%] size-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand opacity-40 blur-3xl" />
          <div className="absolute left-1/2 top-[45%] size-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy-foreground/10" />
          <div className="animate-orbit absolute left-1/2 top-[45%] size-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/30" />
          <img src={portrait} alt="Venkatesh Kuppili, Digital Marketing Strategist" className="relative z-10 mx-auto h-full w-auto object-contain object-bottom drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_75%,transparent)]" />
          {ORBIT.map((o, i) => {
            const pos = ["left-0 top-[8%]", "right-0 top-[3%]", "-left-6 top-[38%]", "-left-2 top-[64%]", "-right-4 top-[46%]", "-right-2 bottom-[12%]"][i];
            return (
              <div key={o.t} className={`animate-float absolute z-20 hidden items-center gap-3 rounded-xl glass px-3 py-2 shadow-elegant sm:flex ${pos}`} style={{ animationDelay: `${i * 0.7}s` }}>
                <span className="grid size-8 place-items-center rounded-lg bg-brand"><o.icon className="size-4" /></span>
                <div><div className="text-xs font-semibold">{o.t}</div><div className="text-[11px] text-navy-foreground/60">{o.s}</div></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute -left-10 -right-10 bottom-14 -rotate-3 border-y border-navy-foreground/15 bg-navy-foreground py-3 text-navy">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-heading text-sm font-bold uppercase tracking-[0.2em]">
          {[...RIBBON, ...RIBBON, ...RIBBON, ...RIBBON].map((r, i) => <span key={i} className="flex items-center gap-8">{r}<span className="text-primary">■■</span></span>)}
        </div>
      </div>
      <a href="#about" aria-label="Scroll" className="absolute bottom-2 left-1/2 -translate-x-1/2 text-navy-foreground/50"><ChevronDown className="animate-bounce" /></a>
    </section>
  );
}

function SectionHead({ k, title, dark, n }: { k: string; title: string; dark?: boolean; n?: string }) {
  return (
    <div className="reveal relative mb-14 max-w-3xl">
      {n && <span aria-hidden className={`pointer-events-none mb-3 block select-none font-heading text-6xl font-extrabold leading-none md:text-7xl ${dark ? "text-navy-foreground/10" : "text-outline"}`}>{n}</span>}
      <p className="relative mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent"><span className="h-px w-10 bg-brand" />{k}</p>
      <h2 className={`relative font-heading text-3xl font-extrabold md:text-5xl ${dark ? "text-navy-foreground" : "text-navy"}`}>{title}</h2>
    </div>
  );
}

function About() {
  const areas = [[Target, "Paid Ads"], [Search, "SEO, AEO & GEO"], [Users, "Lead Generation"], [Compass, "Integrated Marketing Plans"], [BarChart3, "KPI Analysis"], [Share2, "Multi-brand Campaigns"], [Megaphone, "OOH Marketing"], [Camera, "Camera Handling"], [Sparkles, "Content Creation"]] as const;
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <SectionHead n="01" k="About Me" title="Practical, customer-focused, data-driven." />
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="reveal relative overflow-hidden rounded-3xl bg-hero p-8 text-navy-foreground lg:col-span-5 lg:row-span-2">
          <div className="grid-lines absolute inset-0" />
          <img src={aboutImg} alt="Marketing analytics workspace with dashboards" loading="lazy" width={1024} height={1280} className="relative h-80 w-full rounded-2xl object-cover transition duration-700 hover:scale-105" />
          <div className="relative mt-5">
            <p className="font-heading text-2xl font-bold">Venkatesh Kuppili</p>
            <p className="text-sm text-navy-foreground/70">Digital Marketing Strategist · Hyderabad</p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              {[["9+", "Years"], ["5", "Companies"], ["10+", "Campaigns"]].map(([n, l]) => <div key={l} className="rounded-xl glass p-3"><div className="font-heading text-xl font-extrabold text-brand">{n}</div><div className="text-[11px] text-navy-foreground/60">{l}</div></div>)}
            </div>
          </div>
        </div>
        <div className="reveal rounded-3xl border bg-card p-8 shadow-elegant lg:col-span-7">
          <p className="font-heading text-2xl font-semibold leading-snug text-navy">Results-driven Digital Marketing professional with over <span className="text-brand">9 years</span> of experience in digital strategy, paid ads, SEO, SEM, lead generation, GEO and AEO.</p>
          <p className="mt-5 text-muted-foreground">I build integrated marketing plans, optimise campaigns through KPI analysis and coordinate cross-functional teams — from hands-on ad operations and SEO to multi-brand initiatives across healthcare, technology and B2B/B2C sectors.</p>
          <blockquote className="mt-6 border-l-2 border-accent pl-4 italic text-navy">"Understand the business first, let data guide decisions, and keep improving until the numbers move."</blockquote>
        </div>
        <div className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7">
          {areas.map(([I, a]) => (
            <div key={a} className="ring-brand group rounded-2xl border bg-card p-5 transition hover:-translate-y-1 hover:shadow-elegant">
              <I className="size-5 text-primary transition group-hover:text-accent" />
              <p className="mt-3 font-heading text-sm font-bold text-navy">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const JOBS = [
  { c: "HealthOnUs Technologies Private Limited", r: "Assistant Manager", d: "Nov 2024 – Sep 2026", b: ["Managed integrated digital marketing across SEO, GEO, AEO, paid advertising, social media and content.", "Managed 10+ campaigns.", "Increased qualified leads by 32%.", "Reduced CPL by 17%.", "Generated 1,000+ monthly leads.", "Managed Google Ads budgets up to ₹10 lakh monthly.", "Managed healthcare, technology and finance marketing initiatives.", "Led content planning, reporting and campaign optimisation."] },
  { c: "AMTZ Limited", r: "Consultant C", d: "Jun 2024 – Oct 2024", b: ["Managed digital marketing, SEO, SEM and paid social.", "Planned daily social media content for eight internal companies.", "Managed Facebook, Instagram, LinkedIn and X campaigns.", "Coordinated with design, development and product teams."] },
  { c: "ATAI Labs Pvt. Ltd.", r: "Digital Marketing Executive", d: "Apr 2022 – May 2024", b: ["Managed B2B technology and industrial marketing.", "Executed SEO, Google Ads and social media campaigns.", "Managed website optimisation, content and reporting."] },
  { c: "IBST Pvt. Ltd.", r: "Digital Marketing Pro", d: "Aug 2020 – Apr 2022", b: ["Managed B2B and B2C marketing campaigns.", "Executed SEO, PPC, email and social media marketing.", "Mentored interns.", "Led a team in designing and developing a software product."] },
  { c: "Digital IT Hub Software Solutions", r: "Senior Digital Marketing Analyst", d: "Aug 2017 – Aug 2020", b: ["Managed Google, Facebook, YouTube and TikTok advertising.", "Executed SEO and link-building strategies.", "Managed websites and social media.", "Delivered digital marketing training through Andhra Pradesh State Skill Development Corporation.", "Promoted to Senior Digital Marketing Analyst in October 2019."] },
];

function Experience() {
  const [sel, setSel] = useState(0);
  const j = JOBS[sel];
  return (
    <section id="experience" className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="grid-lines absolute inset-0" />
      <div className="pointer-events-none absolute -right-40 top-20 size-[32rem] rounded-full bg-brand opacity-20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead n="02" k="Experience" title="A career built on measurable results." dark />
          <p className="reveal mb-14 max-w-sm text-navy-foreground/70">Nine years, five companies — tap a role to explore it.</p>
        </div>
        <div className="mb-8 flex gap-1 overflow-x-auto rounded-2xl glass p-1.5">
          {JOBS.map((x, i) => (
            <button key={x.c} onClick={() => setSel(i)} className={`min-w-40 flex-1 rounded-xl px-4 py-3 text-left transition ${i === sel ? "bg-brand shadow-glow" : "hover:bg-navy-foreground/10"}`}>
              <span className="block text-[11px] uppercase tracking-widest opacity-70">{x.d.split(" – ")[0]}</span>
              <span className="block truncate font-heading text-sm font-bold">{x.c.split(" ")[0]} {x.c.split(" ")[1] ?? ""}</span>
            </button>
          ))}
        </div>
        <div key={sel} className="grid animate-rise gap-5 lg:grid-cols-[1fr_1.5fr]">
          <div className="relative overflow-hidden rounded-3xl bg-brand p-8 shadow-glow">
            <span aria-hidden className="absolute -right-4 -top-8 font-heading text-[10rem] font-extrabold leading-none opacity-15">{String(JOBS.length - sel).padStart(2, "0")}</span>
            <p className="relative text-xs uppercase tracking-[0.2em] opacity-80">{j.d}</p>
            <h3 className="relative mt-3 font-heading text-3xl font-extrabold">{j.r}</h3>
            <p className="relative mt-2 opacity-85">{j.c}</p>
            <div className="relative mt-8 h-1.5 overflow-hidden rounded-full bg-navy-foreground/20"><div className="h-full rounded-full bg-navy-foreground" style={{ width: `${((JOBS.length - sel) / JOBS.length) * 100}%` }} /></div>
            <p className="relative mt-2 text-xs opacity-75">Career stage {JOBS.length - sel} of {JOBS.length}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {j.b.map((x, i) => (
              <li key={x} className="ring-brand flex gap-3 rounded-2xl glass p-4 text-sm text-navy-foreground/85 transition hover:-translate-y-0.5">
                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-navy-foreground/10 font-heading text-xs font-bold text-accent">{i + 1}</span>{x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="relative overflow-hidden bg-navy-deep text-navy-foreground">
      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <SectionHead k="Results in numbers" title="Growth you can see on a chart." dark />
        <ResultsCharts />
        <p className="mt-4 text-xs text-navy-foreground/50">Monthly trend and channel split are illustrative; headline figures reflect real results.</p>
      </div>
    </section>
  );
}

function Freelance() {
  return (
    <section id="freelance" className="mx-auto max-w-7xl px-6 py-28">
      <div className="reveal grid overflow-hidden rounded-[2rem] bg-hero text-navy-foreground shadow-elegant lg:grid-cols-2">
        <div className="relative p-10 md:p-14">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold"><span className="size-2 animate-pulse rounded-full bg-accent" />Available for freelance projects</span>
          <h2 className="mt-6 font-heading text-3xl font-extrabold md:text-5xl">I'm a freelancer, <span className="text-brand">ready to take your project.</span></h2>
          <p className="mt-5 text-navy-foreground/75">One of the best SEO services you can hire — technical SEO, content, AEO and GEO that gets you found on Google and AI search, backed by paid ads that convert.</p>
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
            {["SEO audits & fixes", "AEO & GEO for AI search", "Google & Meta Ads", "Lead generation funnels"].map((x) => <li key={x} className="flex items-center gap-2"><Sparkles className="size-4 text-accent" />{x}</li>)}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="hero"><a href="#contact">Start a Project <ArrowUpRight /></a></Button>
            <Button asChild size="lg" variant="glass"><a href={`https://wa.me/${PHONE.replace("+", "")}`} target="_blank" rel="noreferrer">WhatsApp Me</a></Button>
          </div>
        </div>
        <img src={seoImg} alt="SEO growth illustration" loading="lazy" width={1280} height={960} className="h-full min-h-72 w-full object-cover" />
      </div>
    </section>
  );
}

const SKILLS = [
  { i: Target, t: "Paid Ads", s: ["Google Ads", "Meta Ads", "PPC", "Performance Max", "Shopping Campaigns", "Lead Generation"] },
  { i: Search, t: "SEO & Search", s: ["Technical SEO", "On-page SEO", "Off-page SEO", "Keyword Research", "GEO", "AEO"] },
  { i: Share2, t: "Social Media", s: ["LinkedIn", "Instagram", "Social Media Management", "Content Calendars", "Content Creation"] },
  { i: BarChart3, t: "Analytics", s: ["Google Analytics", "GTM", "Conversion Tracking", "Web Analytics", "KPI Reporting", "Performance Analysis"] },
  { i: Camera, t: "Creative & Offline", s: ["Camera Handling", "Photo & Video Shoots", "OOH Marketing", "Hoardings & Outdoor Media"] },
  { i: Users, t: "Management", s: ["Digital Marketing Strategy", "Cross-functional Collaboration", "Team Mentoring", "Campaign Management", "Email Marketing"] },
];

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-28">
      <SectionHead n="03" k="Skills & Expertise" title="Full-funnel marketing capability." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((k, i) => {
          const big = i === 0;
          return (
            <div key={k.t} className={`reveal ring-brand group relative overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1 ${big ? "bg-hero text-navy-foreground" : "border bg-card shadow-elegant"}`}>
              {big && <div className="grid-lines absolute inset-0" />}
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand text-primary-foreground transition group-hover:rotate-6"><k.i /></span>
                  <span className={`font-heading text-sm font-bold ${big ? "text-navy-foreground/40" : "text-muted-foreground"}`}>0{i + 1}</span>
                </div>
                <h3 className={`mt-6 font-heading font-bold ${big ? "text-3xl" : "text-xl text-navy"}`}>{k.t}</h3>
                {big && <p className="mt-3 text-navy-foreground/70">Google Ads budgets up to ₹10 lakh monthly, generating 1,000+ leads every month.</p>}
                <div className={`mt-5 flex flex-wrap gap-2`}>{k.s.map((x) => <span key={x} className={`rounded-full px-3 py-1 text-xs ${big ? "glass" : "bg-secondary text-secondary-foreground"}`}>{x}</span>)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const SERVICES = [
  { i: Compass, t: "Digital Marketing Strategy & Consulting", d: "Integrated plans aligned with business goals and budgets." },
  { i: FileSearch, t: "Website Audit", d: "Technical, content and conversion review with clear priorities." },
  { i: Search, t: "SEO, AEO & GEO Strategy", d: "Visibility across search engines and AI-powered answers." },
  { i: Megaphone, t: "Google Ads and Meta Ads", d: "Planning, setup and ongoing optimisation of paid campaigns." },
  { i: MousePointerClick, t: "Lead Generation & Conversion Tracking", d: "Funnels and accurate tracking that capture qualified leads." },
  { i: Share2, t: "Social Media Marketing & Management", d: "Consistent, on-brand presence across key platforms." },
  { i: CalendarDays, t: "Content Calendar & Content Strategy", d: "Planned content that supports search and campaigns." },
  { i: LayoutTemplate, t: "Website and Landing Page Optimisation", d: "Faster, clearer pages built to convert visitors." },
  { i: Camera, t: "OOH Marketing & Shoots", d: "Outdoor campaigns plus hands-on camera work for brand content." },
  { i: BarChart3, t: "Marketing Analytics & Reporting", d: "GA4, GTM and KPI dashboards that inform decisions." },
];

function Services() {
  return (
    <section id="services" className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <SectionHead n="04" k="Services" title="How I can help your business grow." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <a href="#contact" key={s.t} className={`${i < 2 ? "lg:col-span-2" : ""} reveal ring-brand group relative flex flex-col overflow-hidden rounded-3xl bg-card p-7 transition hover:-translate-y-1 hover:shadow-elegant`}>
              <span className="absolute -right-10 -top-10 size-32 rounded-full bg-brand opacity-0 blur-2xl transition group-hover:opacity-30" />
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary transition group-hover:bg-brand group-hover:text-primary-foreground"><s.i className="size-5" /></span>
                <span className="font-heading text-xs font-bold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 font-heading text-lg font-bold text-navy">{s.t}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.d}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary opacity-0 transition group-hover:opacity-100">Enquire <ArrowUpRight className="size-3.5" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  { t: "Healthcare Digital Marketing", c: "HealthOnUs", tags: ["Integrated", "Healthcare", "Lead Gen"], d: "Integrated marketing across SEO, GEO, AEO, paid ads, social and content to drive healthcare lead generation.", r: ["32% growth in qualified leads", "17% reduction in CPL"] },
  { t: "Google Ads Performance Campaigns", c: "Performance", tags: ["Google Ads", "Budgets"], d: "End-to-end campaign management, bid and budget optimisation with continuous reporting.", r: ["Monthly budgets up to ₹10 lakh", "1,000+ monthly leads"] },
  { t: "SEO & Website Optimisation", c: "Search", tags: ["Technical SEO", "Content"], d: "Technical SEO, keyword research, content optimisation and website audits to strengthen organic visibility.", r: ["Technical SEO & audits", "Keyword & content optimisation"] },
  { t: "B2B Technology Marketing", c: "ATAI Labs", tags: ["B2B", "SEO", "Paid"], d: "B2B and industrial marketing combining SEO, paid campaigns and digital brand development.", r: ["SEO & Google Ads execution", "Digital brand development"] },
  { t: "Multi-brand Digital Marketing", c: "AMTZ", tags: ["Social", "Coordination"], d: "Coordinated digital marketing and daily social media for eight internal companies across major platforms.", r: ["8 internal companies", "Facebook, Instagram, LinkedIn & X"] },
];

function Work() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-28">
      <SectionHead n="05" k="Featured Work" title="Case studies & projects." />
      <div className="grid gap-4">
        {PROJECTS.map((p, i) => (
          <div key={p.t} className={`reveal ring-brand overflow-hidden rounded-3xl border transition ${open === i ? "bg-hero text-navy-foreground shadow-elegant" : "bg-card hover:-translate-y-0.5"}`}>
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center gap-6 p-6 text-left md:p-8" aria-expanded={open === i}>
              <span className="font-heading text-3xl font-extrabold text-brand">0{i + 1}</span>
              <div className="flex-1">
                <p className={`text-xs uppercase tracking-[0.2em] ${open === i ? "text-accent" : "text-muted-foreground"}`}>{p.c}</p>
                <h3 className={`font-heading text-xl font-bold md:text-2xl ${open === i ? "" : "text-navy"}`}>{p.t}</h3>
              </div>
              <ChevronDown className={`transition ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <div className="grid gap-6 px-6 pb-8 md:grid-cols-2 md:px-8 md:pl-24">
                <div>
                  <p className="text-navy-foreground/80">{p.d}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="rounded-full glass px-3 py-1 text-xs">{t}</span>)}</div>
                </div>
                <ul className="grid gap-3">{p.r.map((r) => <li key={r} className="flex items-center gap-3 rounded-xl glass p-4 font-semibold"><Sparkles className="size-4 text-accent" />{r}</li>)}</ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  ["Understand", "Clarify business objectives, audiences and success metrics."],
  ["Research", "Study audiences, competitors, keywords and channels."],
  ["Strategise", "Plan the channel mix, budgets, content and KPIs."],
  ["Execute", "Launch campaigns with clean tracking and tight coordination."],
  ["Measure & Improve", "Analyse performance data and optimise continuously."],
];

function Approach() {
  return (
    <section className="bg-hero text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <SectionHead n="06" k="My Marketing Approach" title="Five steps from insight to growth." dark />
        <div className="relative grid gap-4 md:grid-cols-5 md:before:absolute md:before:left-0 md:before:right-0 md:before:top-12 md:before:h-px md:before:bg-brand md:before:opacity-50">
          {STEPS.map(([t, d], i) => (
            <div key={t} className="reveal ring-brand relative rounded-2xl glass p-6 transition hover:-translate-y-1" style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="font-heading text-5xl font-extrabold text-brand">{i + 1}</span>
              <h3 className="mt-3 font-heading text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-navy-foreground/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="reveal flex flex-col items-start gap-6 rounded-3xl border bg-card p-8 shadow-elegant md:flex-row md:items-center">
        <span className="grid size-14 place-items-center rounded-2xl bg-brand text-primary-foreground"><GraduationCap /></span>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Education</p>
          <h3 className="mt-1 font-heading text-2xl font-bold text-navy">B.Tech – Computer Science & Engineering</h3>
          <p className="text-muted-foreground">Sasi Institute of Technology & Engineering · Graduated 2014</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim().slice(0, 100);
    const email = String(f.get("email") || "").trim().slice(0, 255);
    const msg = String(f.get("message") || "").trim().slice(0, 2000);
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !msg) { toast.error("Please fill in your name, a valid email and a message."); return; }
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(`${msg}\n\n— ${name} (${email})`)}`;
    toast.success("Opening your email app…");
  };
  const links = [
    { i: Mail, l: EMAIL, h: `mailto:${EMAIL}` },
    { i: Phone, l: "+91 8790009840", h: `tel:${PHONE}` },
    { i: MessageCircle, l: "WhatsApp", h: `https://wa.me/918790009840` },
    { i: Linkedin, l: "LinkedIn", h: "https://www.linkedin.com/" },
    { i: MapPin, l: "Hyderabad, India", h: undefined },
  ];
  return (
    <section id="contact" className="bg-navy-deep text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2">
        <div>
          <SectionHead n="07" k="Contact" title="Let's Discuss Your Next Digital Growth Opportunity." dark />
          <div className="reveal grid gap-3">
            {links.map((x) => {
              const inner = <><span className="grid size-10 place-items-center rounded-xl bg-brand"><x.i className="size-4" /></span>{x.l}</>;
              return x.h ? <a key={x.l} href={x.h} target={x.h.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-2xl glass p-3 transition hover:translate-x-1">{inner}</a>
                : <div key={x.l} className="flex items-center gap-4 rounded-2xl glass p-3">{inner}</div>;
            })}
          </div>
        </div>
        <form onSubmit={submit} className="reveal grid content-start gap-4 rounded-3xl glass p-8">
          <Input name="name" placeholder="Your name" maxLength={100} className="h-12 border-navy-foreground/15 bg-navy/60" />
          <Input name="email" type="email" placeholder="Your email" maxLength={255} className="h-12 border-navy-foreground/15 bg-navy/60" />
          <Textarea name="message" placeholder="Tell me about your goals" rows={6} maxLength={2000} className="border-navy-foreground/15 bg-navy/60" />
          <Button type="submit" variant="hero" size="lg">Send Message <ArrowUpRight /></Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-navy-foreground/10 bg-navy-deep text-navy-foreground/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <span className="mb-3 inline-block rounded-xl bg-white/95 p-2"><img src={vkLogo.url} alt="VK Growth Marketing logo" className="h-9 w-auto" /></span>
          <p className="font-heading text-lg font-bold text-navy-foreground">Venkatesh Kuppili</p><p className="text-sm">Digital Marketing Strategist</p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm">{NAV.map(([l, id]) => <a key={id} href={`#${id}`} className="hover:text-navy-foreground">{l}</a>)}</nav>
        <div className="text-sm"><a href={`mailto:${EMAIL}`} className="block hover:text-navy-foreground">{EMAIL}</a><a href={`tel:${PHONE}`} className="hover:text-navy-foreground">+91 8790009840</a></div>
      </div>
      <p className="pb-8 text-center text-xs">© {new Date().getFullYear()} Venkatesh Kuppili. All rights reserved.</p>
    </footer>
  );
}
