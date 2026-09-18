import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowDownRight, ArrowUpRight, Award, BookOpen, BrainCircuit, Check, ChevronRight, CloudCog, Code2, Database, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Network, Send, ShieldCheck, Sparkles, Terminal, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Vamsi Krishna — AI & Software Developer" },
    { name: "description", content: "Portfolio of Vamsi Krishna, a B.Tech CSE student specializing in AI and Data Science." },
    { property: "og:title", content: "Vamsi Krishna — AI & Software Developer" },
    { property: "og:description", content: "An aspiring software developer exploring AI, data science, web development, Java, Python, and cybersecurity." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Portfolio,
});

const nav = [["home","Home"],["about","About"],["education","Education"],["skills","Skills"],["projects","Projects"],["certifications","Certifications"],["contact","Contact"]] as const;
const roles = ["Java Developer", "Web Developer", "Python Enthusiast", "AI Enthusiast", "Future Software Engineer"];
const education = [
  { years: "2024 — 2028", title: "B.Tech — Artificial Intelligence & Data Science", place: "Sree Venkateswara College of Engineering", note: "Current · Nellore, Andhra Pradesh" },
  { years: "2022 — 2024", title: "Intermediate / Higher Secondary", place: "Sree Chaitanya Inter College", note: "Completed" },
  { years: "2012 — 2022", title: "School Education", place: "Kendriya Vidyalaya (KV)", note: "Completed" },
];
const skillGroups = [
  { title: "Programming", icon: Code2, skills: ["Java", "Python"] },
  { title: "Web Development", icon: Terminal, skills: ["Front-End Development", "Web Development"] },
  { title: "Artificial Intelligence", icon: BrainCircuit, skills: ["Artificial Intelligence", "AI Tools"] },
  { title: "Cybersecurity & Cloud", icon: ShieldCheck, skills: ["Cybersecurity", "Cloud Security", "Zscaler Zero Trust Exchange"] },
];
const certificates = [
  ["Cybersecurity", "Cybersecurity"], ["AI Tools and ChatGPT Workshop", "Artificial Intelligence"],
  ["Full Stack Web Development with AI Training", "Web Development"], ["Cybersecurity Virtual Internship", "Virtual Internship"],
  ["Zero Trust Cloud Security Virtual Internship", "Cloud Security"],
];
const learning = [
  [BrainCircuit,"Artificial Intelligence","Exploring intelligent systems and practical AI tools"], [Database,"Data Science","Building foundations in data-led problem solving"],
  [Code2,"Java Development","Strengthening object-oriented programming skills"], [Terminal,"Python","Practicing versatile, readable programming"],
  [Network,"Web Development","Creating useful, responsive web experiences"], [Sparkles,"AI Tools","Learning modern AI-assisted workflows"],
  [CloudCog,"Cloud Technologies","Understanding modern cloud and Zero Trust concepts"], [ShieldCheck,"Cybersecurity","Developing security-first thinking"],
] as const;

function scrollTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [role, setRole] = useState(0);
  const [sent, setSent] = useState(false);
  useEffect(() => { const timer = window.setInterval(() => setRole((v) => (v + 1) % roles.length), 2300); return () => window.clearInterval(timer); }, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: "-35% 0px -55%" });
    nav.forEach(([id]) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject") ?? "Portfolio enquiry").slice(0, 100);
    const body = `Hi Vamsi,\n\n${String(data.get("message") ?? "").slice(0, 1000)}\n\nFrom: ${String(data.get("name") ?? "").slice(0, 80)} (${String(data.get("email") ?? "").slice(0, 254)})`;
    setSent(true); window.location.href = `mailto:vamsikrishnakuracha30091@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return <main className="min-h-screen bg-background text-foreground">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3" aria-label="Go to home">
          <span className="grid size-9 place-items-center rounded-md bg-primary font-bold text-primary-foreground">VK</span><span className="hidden text-sm font-semibold tracking-wide sm:block">VAMSI KRISHNA</span>
        </button>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">{nav.map(([id,label]) => <button key={id} onClick={() => scrollTo(id)} className={`text-xs font-medium transition-colors ${active === id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>{label}</button>)}</nav>
        <div className="flex items-center gap-2"><Button onClick={() => scrollTo("contact")} className="hidden sm:inline-flex">Let’s Connect <ArrowUpRight /></Button><Button variant="outline" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</Button></div>
      </div>
      {menuOpen && <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">{nav.map(([id,label]) => <button key={id} onClick={() => { scrollTo(id); setMenuOpen(false); }} className="block w-full border-b border-border py-3 text-left text-sm text-muted-foreground last:border-0">{label}</button>)}</nav>}
    </header>

    <section id="home" className="relative flex min-h-[92vh] scroll-mt-20 items-center overflow-hidden pt-24">
      <div className="hero-ambient pointer-events-none absolute inset-0" />
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-55" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 sm:size-[44rem]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10 sm:size-[34rem]" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-14 text-center lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <div className="hero-glass relative mb-6 grid size-24 place-items-center rounded-full animate-profile sm:size-28">
            <span className="font-display text-3xl font-bold text-sheen sm:text-4xl">VK</span>
            <span className="absolute -bottom-1 -right-1 grid size-8 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground"><Sparkles size={13}/></span>
          </div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-[11px] font-medium uppercase tracking-[.16em] text-muted-foreground backdrop-blur-lg">
            <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70"/><span className="relative inline-flex size-2 rounded-full bg-primary"/></span>
            Open to learning, building & opportunities
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[.24em] text-primary">Hello, I’m</p>
          <h1 className="font-display text-6xl font-extrabold leading-[.95] tracking-normal sm:text-7xl lg:text-8xl">Vamsi <span className="text-sheen">Krishna</span></h1>
          <div className="mt-6 flex min-h-8 items-center justify-center font-mono text-base text-muted-foreground sm:text-lg"><span className="mr-3 text-primary">//</span><span key={role} className="animate-fade-in">{roles[role]}</span><span className="ml-1 h-5 w-0.5 bg-primary animate-caret"/></div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">A Computer Science Engineering student specializing in <span className="font-medium text-foreground">Artificial Intelligence & Data Science</span>—building practical technology solutions and growing through code.</p>
          <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"><Button size="lg" className="h-12 rounded-full px-8 transition-transform hover:-translate-y-0.5" onClick={() => scrollTo("projects")}>Explore My Work <ArrowDownRight/></Button><Button size="lg" variant="outline" className="h-12 rounded-full bg-background/30 px-8 backdrop-blur-md" onClick={() => scrollTo("contact")}>Let’s Connect</Button></div>
          <div className="mt-8 flex items-center gap-3"><a className="grid size-10 place-items-center rounded-full border border-border bg-background/30 text-muted-foreground backdrop-blur-md transition hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary" href="mailto:vamsikrishnakuracha30091@gmail.com" aria-label="Email Vamsi"><Mail size={17}/></a><span className="grid size-10 cursor-not-allowed place-items-center rounded-full border border-border bg-background/30 text-muted-foreground/40" title="LinkedIn URL coming soon"><Linkedin size={17}/></span><span className="grid size-10 cursor-not-allowed place-items-center rounded-full border border-border bg-background/30 text-muted-foreground/40" title="GitHub URL coming soon"><Github size={17}/></span></div>
          <div className="mt-11 h-px w-full max-w-2xl glow-line opacity-40" />
          <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[.16em] text-muted-foreground/60"><span>Java</span><span>Python</span><span>Web Development</span><span>Artificial Intelligence</span></div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[.2em] text-muted-foreground/40 sm:flex"><span className="h-px w-8 bg-border"/> Scroll to explore <span className="h-px w-8 bg-border"/></div>
    </section>

    <Section id="about" eyebrow="01 / ABOUT" title="Curious by nature. Building with purpose.">
      <div className="grid items-center gap-12 lg:grid-cols-[.7fr_1.3fr]"><div className="glass-panel relative aspect-[4/5] overflow-hidden rounded-lg"><div className="tech-grid absolute inset-0"/><div className="absolute inset-0 grid place-items-center"><div className="grid size-44 place-items-center rounded-full border border-primary/30 bg-primary/5 text-6xl font-bold text-primary">VK</div></div><p className="absolute bottom-5 left-5 right-5 text-center font-mono text-xs text-muted-foreground">Portrait ready to be added</p></div>
        <div><p className="max-w-3xl text-lg leading-8 text-muted-foreground">I’m pursuing a B.Tech in Artificial Intelligence and Data Science at Sree Venkateswara College of Engineering. I’m developing practical foundations across web development, Java, Python, AI, cybersecurity, and cloud security—one project and concept at a time.</p><p className="mt-5 max-w-3xl leading-7 text-muted-foreground">I’m driven by how technology can turn ideas into useful solutions. My goal is simple: keep learning, build thoughtfully, and grow into a capable software engineer.</p>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">{[["2024–2028","B.Tech Journey"],["AI & Data Science","Specialization"],["Web Development","Primary Interest"],["AI & Cybersecurity","Tech Interests"]].map(([a,b])=><div key={b} className="bg-surface p-5"><p className="text-sm font-semibold text-primary">{a}</p><p className="mt-2 text-xs leading-5 text-muted-foreground">{b}</p></div>)}</div>
        </div></div>
    </Section>

    <Section id="education" eyebrow="02 / EDUCATION" title="A foundation for what comes next." muted>{<div className="relative ml-3 border-l border-primary/25 pl-8 sm:ml-20 sm:pl-12">{education.map((item,i)=><article key={item.years} className="relative pb-12 last:pb-0"><span className="absolute -left-[2.57rem] top-1 grid size-5 place-items-center rounded-full border border-primary bg-background sm:-left-[3.57rem]"><span className="size-1.5 rounded-full bg-primary"/></span><p className="font-mono text-xs text-primary">{item.years}</p><h3 className="mt-3 text-xl font-semibold sm:text-2xl">{item.title}</h3><p className="mt-2 text-muted-foreground">{item.place}</p><p className="mt-2 text-xs uppercase tracking-[.15em] text-muted-foreground/70">{item.note}</p>{i===0 && <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"><span className="size-1.5 rounded-full bg-primary"/> In progress</span>}</article>)}</div>}
    </Section>

    <Section id="skills" eyebrow="03 / SKILLS" title="Tools I’m learning to build with."><div className="grid gap-4 md:grid-cols-2">{skillGroups.map(({title,icon:Icon,skills})=><article key={title} className="glass-panel rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/35"><div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-md bg-primary/10 text-primary"><Icon size={21}/></span><h3 className="text-lg font-semibold">{title}</h3></div><div className="mt-6 flex flex-wrap gap-2">{skills.map(s=><span key={s} className="rounded-md border border-border bg-muted px-3 py-2 text-sm text-muted-foreground">{s}</span>)}</div></article>)}</div></Section>

    <Section id="projects" eyebrow="04 / FEATURED PROJECTS" title="The strongest work is still being built." muted><div className="glass-panel relative overflow-hidden rounded-lg p-8 sm:p-12"><div className="tech-grid absolute inset-0"/><div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]"><div><span className="mb-5 grid size-14 place-items-center rounded-md bg-primary/10 text-primary"><Terminal/></span><h3 className="text-2xl font-semibold">Building practical projects and continuously expanding my development portfolio.</h3><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">This space is prepared for upcoming work—with room for project visuals, clear problem statements, technology stacks, GitHub repositories, and live demos.</p></div><div className="grid w-full grid-cols-2 gap-3 lg:w-72">{["Project image","Project name","Tech stack","GitHub + Demo"].map((x,i)=><div key={x} className="rounded-md border border-dashed border-border bg-background/40 p-4 text-xs text-muted-foreground"><span className="mb-4 block font-mono text-primary/60">0{i+1}</span>{x}</div>)}</div></div></div></Section>

    <Section id="certifications" eyebrow="05 / CERTIFICATIONS" title="Learning beyond the classroom."><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{certificates.map(([title,cat],i)=><article key={title} className="flex min-h-56 flex-col rounded-lg border border-border bg-card p-6 transition hover:border-primary/35"><div className="flex items-start justify-between"><Award className="text-primary"/><span className="font-mono text-xs text-muted-foreground">0{i+1}</span></div><h3 className="mt-7 text-lg font-semibold leading-6">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{cat}</p><button disabled className="mt-auto flex items-center gap-2 pt-6 text-left text-xs text-muted-foreground/60">Certificate details coming soon <ChevronRight size={14}/></button></article>)}</div></Section>

    <Section id="learning" eyebrow="06 / CURRENTLY EXPLORING" title="Learn → Build → Innovate → Grow" muted><div className="relative grid gap-0 overflow-hidden rounded-lg border border-border sm:grid-cols-2 lg:grid-cols-4">{learning.map(([Icon,title,text],i)=><article key={title} className="group relative min-h-60 border-b border-r border-border bg-surface p-6 transition hover:bg-surface-strong"><span className="font-mono text-xs text-primary/60">{String(i+1).padStart(2,"0")}</span><Icon className="mt-8 text-primary transition group-hover:scale-110"/><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></Section>

    <Section id="contact" eyebrow="07 / CONTACT" title="Let’s build something together."><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="max-w-md leading-7 text-muted-foreground">Have an internship, collaboration, hackathon, or learning opportunity in mind? I’d be glad to hear from you.</p><div className="mt-8 space-y-5"><a href="mailto:vamsikrishnakuracha30091@gmail.com" className="flex items-start gap-4 text-sm"><span className="grid size-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary"><Mail size={18}/></span><span><small className="block text-muted-foreground">Email</small><span className="mt-1 block break-all">vamsikrishnakuracha30091@gmail.com</span></span></a><div className="flex items-start gap-4 text-sm"><span className="grid size-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary"><MapPin size={18}/></span><span><small className="block text-muted-foreground">Location</small><span className="mt-1 block">Nellore, Andhra Pradesh, India</span></span></div><div className="flex items-start gap-4 text-sm opacity-60"><span className="grid size-10 shrink-0 place-items-center rounded-md bg-muted"><Linkedin size={18}/></span><span><small className="block text-muted-foreground">LinkedIn</small><span className="mt-1 block">Kuracha Vamsi Krishna · URL coming soon</span></span></div></div></div>
        <form onSubmit={submit} className="glass-panel grid gap-5 rounded-lg p-6 sm:grid-cols-2 sm:p-8"><Field label="Name" name="name" placeholder="Your name"/><Field label="Email" name="email" type="email" placeholder="you@example.com"/><Field label="Subject" name="subject" placeholder="What would you like to discuss?" wide/><label className="grid gap-2 text-sm sm:col-span-2">Message<textarea name="message" required minLength={10} maxLength={1000} rows={6} placeholder="Tell me about the opportunity..." className="resize-none rounded-md border border-input bg-background/60 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/15"/></label><div className="flex flex-wrap items-center gap-4 sm:col-span-2"><Button size="lg" type="submit">Send Message <Send/></Button>{sent && <span className="flex items-center gap-2 text-sm text-primary"><Check size={16}/> Email draft opened</span>}</div></form>
      </div></Section>
    <footer className="border-t border-border px-5 py-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-xs text-muted-foreground sm:flex-row sm:text-left"><p>© 2026 Kuracha Vamsi Krishna. All rights reserved.</p><p>Built with curiosity, code & AI.</p><div className="flex gap-3"><a href="mailto:vamsikrishnakuracha30091@gmail.com" aria-label="Email"><Mail size={16}/></a><Linkedin size={16} className="opacity-40"/><Github size={16} className="opacity-40"/></div></div></footer>
  </main>;
}

function Section({id,eyebrow,title,children,muted=false}:{id:string;eyebrow:string;title:string;children:React.ReactNode;muted?:boolean}) { return <section id={id} className={`scroll-mt-20 px-5 py-24 sm:py-28 lg:px-8 ${muted ? "bg-muted/35" : ""}`}><div className="mx-auto max-w-7xl"><p className="font-mono text-xs tracking-[.2em] text-primary">{eyebrow}</p><h2 className="mb-12 mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal sm:text-5xl">{title}</h2>{children}</div></section>; }
function Field({label,name,placeholder,type="text",wide=false}:{label:string;name:string;placeholder:string;type?:string;wide?:boolean}) { return <label className={`grid gap-2 text-sm ${wide ? "sm:col-span-2" : ""}`}>{label}<input name={name} type={type} required maxLength={type === "email" ? 254 : 100} placeholder={placeholder} className="h-12 rounded-md border border-input bg-background/60 px-4 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/15"/></label>; }
