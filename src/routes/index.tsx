import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GodHeimer Technologies — Bridging Space and Earth" },
      { name: "description", content: "GodHeimer builds RobertCore, resilient space-to-ground communication infrastructure that adapts to hostile atmospheric conditions." },
      { property: "og:title", content: "GodHeimer Technologies — Bridging Space and Earth" },
      { property: "og:description", content: "RobertCore: reliable space-to-ground communication, engineered for real-world conditions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1105 1119" fill="none" className={className} aria-label="GodHeimer logo">
      <path d="M52.1687 18.9388L233.684 518.939C233.684 518.939 415.653 498.939 552.169 498.939C688.684 498.939 870.755 518.939 870.755 518.939L1052.17 18.9388" stroke="currentColor" strokeWidth="111" />
      <path d="M552.219 468.939L552.169 1118.94" stroke="currentColor" strokeWidth="111" />
    </svg>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Label({ n, children, dark }: { n: string; children: ReactNode; dark?: boolean }) {
  return (
    <div className={`reveal mb-10 flex items-center gap-4 text-[10px] tracking-[0.35em] uppercase ${dark ? "text-paper/50" : "text-ink/50"}`}>
      <span>{n}</span>
      <span className={`h-px w-16 ${dark ? "bg-paper/30" : "bg-ink/30"}`} />
      <span>{children}</span>
    </div>
  );
}

const nav = [
  ["Challenge", "#challenge"],
  ["RobertCore", "#robertcore"],
  ["Adaptive", "#adaptive"],
  ["Leadership", "#leadership"],
  ["Contact", "#contact"],
];

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <main className="font-display bg-ink text-paper">
      {/* NAV */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-ink/80 backdrop-blur-md border-b border-line-dark" : ""}`}>
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-12">
          <a href="#top" className="flex items-center gap-3">
            <Logo className="h-7 w-7 text-paper" />
            <span className="text-sm font-bold tracking-[0.3em]">GODHEIMER</span>
          </a>
          <nav className="hidden gap-10 md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="text-[11px] tracking-[0.25em] uppercase text-paper/60 transition hover:text-paper">{l}</a>
            ))}
          </nav>
          <button onClick={() => setOpen(!open)} className="text-[11px] tracking-[0.25em] md:hidden">{open ? "CLOSE" : "MENU"}</button>
        </div>
        {open && (
          <div className="flex flex-col gap-6 border-t border-line-dark bg-ink px-6 py-8 md:hidden">
            {nav.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="text-sm tracking-[0.25em] uppercase">{l}</a>
            ))}
          </div>
        )}
      </header>

      {/* 1 HERO */}
      <section id="top" className="relative flex min-h-screen items-end overflow-hidden bg-ink">
        <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-20 md:px-12 md:pb-28">
          <p className="reveal mb-6 text-[10px] tracking-[0.4em] text-paper/50 uppercase">GodHeimer Technologies</p>
          <h1 className="reveal max-w-5xl text-4xl font-black leading-[1.05] tracking-tight uppercase md:text-7xl lg:text-8xl">
            Bridging Space<br />and Earth.<br /><span className="text-paper/40">Reliably.</span>
          </h1>
          <div className="reveal mt-12 flex flex-col gap-10 border-t border-line-dark pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-xs leading-relaxed tracking-wide text-paper/70 md:text-sm">
              We build resilient communication infrastructure between space and Earth — designed to perform even when the environment works against it.
            </p>
            <a href="#robertcore" className="group inline-flex items-center gap-4 border border-paper px-8 py-4 text-[11px] tracking-[0.3em] uppercase transition hover:bg-paper hover:text-ink">
              Discover RobertCore <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2 CHALLENGE */}
      <section id="challenge" className="bg-paper text-ink py-32 md:py-48">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-12 md:px-12">
          <div className="md:col-span-7">
            <Label n="01">The Problem</Label>
            <h2 className="reveal text-3xl font-black leading-tight uppercase md:text-6xl">The Challenge of Space-to-Earth Links</h2>
          </div>
          <div className="md:col-span-5 md:pt-24">
            <p className="reveal text-sm leading-loose text-ink/70">
              Traditional laser communication is highly efficient, yet extremely sensitive to weather. Clouds, rain, fog, and atmospheric turbulence can interrupt the link entirely.
            </p>
            <p className="reveal mt-8 border-l-2 border-ink pl-6 text-sm font-bold uppercase leading-relaxed tracking-wide">
              In critical missions, any interruption is unacceptable.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-24 grid max-w-[1400px] grid-cols-2 border-t border-line-light px-6 md:grid-cols-4 md:px-12">
          {["Clouds", "Rain", "Fog", "Turbulence"].map((t, i) => (
            <div key={t} className="reveal border-b border-r border-line-light py-10 pr-6 first:border-l-0 md:border-b-0">
              <div className="text-[10px] tracking-[0.3em] text-ink/40">0{i + 1}</div>
              <div className="mt-4 text-lg font-bold uppercase tracking-wider">{t}</div>
              <div className="mt-2 text-[10px] tracking-[0.2em] text-ink/50 uppercase">Link disruption</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 ROBERTCORE */}
      <section id="robertcore" className="relative overflow-hidden bg-ink py-32 md:py-48">
        <div className="mx-auto grid max-w-[1400px] items-center gap-20 px-6 md:grid-cols-2 md:px-12">
          <div>
            <Label n="02" dark>The System</Label>
            <p className="reveal text-xs tracking-[0.3em] text-paper/50 uppercase">Introducing</p>
            <h2 className="reveal mt-4 text-5xl font-black uppercase md:text-8xl">RobertCore</h2>
            <p className="reveal mt-10 max-w-lg text-sm leading-loose text-paper/70">
              RobertCore is a space-to-ground communication infrastructure developed by GodHeimer Technologies. It is designed to maintain reliable data transmission between space and Earth under changing and often hostile atmospheric conditions.
            </p>
          </div>
          <div className="reveal flex aspect-square w-full items-center justify-center">
            <Logo className="h-1/3 w-1/3 text-paper" />
          </div>
        </div>
      </section>

      {/* 4 ADAPTIVE */}
      <section id="adaptive" className="bg-paper text-ink py-32 md:py-48">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <Label n="03">Philosophy</Label>
          <h2 className="reveal max-w-5xl text-3xl font-black leading-tight uppercase md:text-6xl">
            Communication Must Adapt to the Environment
          </h2>
          <div className="mt-20 grid gap-px bg-line-light md:grid-cols-3">
            {[
              ["Sense", "Understand changing atmospheric conditions in real time."],
              ["Decide", "No single method performs under every condition."],
              ["Adapt", "Respond intelligently to keep the link alive."],
            ].map(([t, d], i) => (
              <div key={t} className="reveal group bg-paper p-10 transition hover:bg-ink hover:text-paper">
                <div className="text-[10px] tracking-[0.3em] opacity-40">0{i + 1}</div>
                <div className="mt-16 text-2xl font-bold uppercase tracking-wider">{t}</div>
                <p className="mt-4 text-xs leading-relaxed opacity-60">{d}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-16 max-w-2xl text-sm leading-loose text-ink/70">
            A single communication method cannot always perform under every condition. The future requires systems that can understand changing environments and adapt intelligently.
          </p>
        </div>
      </section>

      {/* 5 WEATHER */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
        <div className="relative mx-auto max-w-[1400px] px-6 text-center md:px-12">
          <Label n="04" dark>Atmosphere</Label>
          <h2 className="reveal text-4xl font-black uppercase md:text-8xl">Weather Changes<br />Everything</h2>
          <p className="reveal mx-auto mt-10 max-w-2xl text-sm leading-loose text-paper/70">
            Clouds, rain, and atmospheric conditions can severely affect how information travels between space and Earth. These challenges demand communication systems specifically engineered to respond to real-world conditions — not ideal ones.
          </p>
        </div>
      </section>

      {/* 6 LEADERSHIP */}
      <section id="leadership" className="bg-paper text-ink py-32 md:py-48">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-12 md:px-12">
          <div className="md:col-span-5">
            <Label n="05">Founder &amp; Leadership</Label>
            <div className="reveal flex aspect-[4/5] items-center justify-center bg-ink">
              <Logo className="h-1/4 w-1/4 text-paper" />
            </div>
          </div>
          <div className="flex flex-col justify-end md:col-span-7">
            <h2 className="reveal text-3xl font-black leading-tight uppercase md:text-6xl">Natthakorn “Boss” Mueangsangsri</h2>
            <p className="reveal mt-6 text-[11px] tracking-[0.3em] text-ink/50 uppercase">Founder &amp; CEO, GodHeimer Technologies</p>
            <p className="reveal mt-10 max-w-xl border-t border-line-light pt-10 text-sm leading-loose text-ink/70">
              Building adaptive and resilient space-to-ground communication systems for the most demanding environments.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="bg-ink py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <Label n="06" dark>Contact &amp; Follow</Label>
          <h2 className="reveal text-4xl font-black uppercase md:text-7xl">Get in Touch</h2>
          <div className="mt-20 grid gap-16 border-t border-line-dark pt-12 md:grid-cols-2">
            <div className="reveal">
              <div className="text-[10px] tracking-[0.3em] text-paper/50 uppercase">Email</div>
              {["boss@godheimer.com", "contact@godheimer.com"].map((e) => (
                <a key={e} href={`mailto:${e}`} className="mt-5 block text-lg font-bold transition hover:text-paper/60 md:text-2xl">{e}</a>
              ))}
            </div>
            <div className="reveal">
              <div className="text-[10px] tracking-[0.3em] text-paper/50 uppercase">Follow GodHeimer</div>
              {[
                ["Facebook", "facebook.com/godheimer"],
                ["Instagram", "instagram.com/godheimerhj"],
                ["X", "x.com/godheimerhj"],
                ["LinkedIn", "linkedin.com/company/godheimer"],
              ].map(([n, u]) => (
                <a key={n} href={`https://${u}`} target="_blank" rel="noreferrer" className="group mt-5 flex items-center justify-between border-b border-line-dark pb-4 transition hover:text-paper/60">
                  <span className="text-sm font-bold tracking-[0.2em] uppercase">{n}</span>
                  <span className="text-[10px] tracking-wider text-paper/50">{u} <span className="inline-block transition group-hover:translate-x-1">→</span></span>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-32 flex flex-col items-start justify-between gap-6 border-t border-line-dark pt-8 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <Logo className="h-6 w-6 text-paper" />
              <span className="text-xs font-bold tracking-[0.3em]">GODHEIMER TECHNOLOGIES</span>
            </div>
            <span className="text-[10px] tracking-[0.2em] text-paper/40">© {new Date().getFullYear()} GODHEIMER TECHNOLOGIES. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
