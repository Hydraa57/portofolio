import { ArrowDown } from 'lucide-react'
import { meta } from '../data/meta.js'
import { useMagnetic } from '../hooks/useMagnetic.js'

const STATS = [
  { k: '3',   v: 'Live products' },
  { k: '∞',   v: 'Automation runs' },
  { k: 'JKT', v: 'Indonesia · UTC+7' },
]

export default function Hero() {
  const ctaRef = useMagnetic(0.25, 100)

  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-end px-5 pb-28 pt-24 sm:px-8 sm:pt-28">
      <div className="mx-auto w-full max-w-7xl">

        {/* breadcrumb */}
        <div className="reveal flex flex-wrap items-baseline justify-between gap-3 border-b border-[var(--ink)]/25 pb-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
            OPENING SEQUENCE · 00:00
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
            hfdz.my.id · v2.0 · 2026
          </span>
        </div>

        {/* headline */}
        <div className="mt-10 sm:mt-14">
          <p className="reveal font-serif text-lg italic text-[var(--ink-soft)] sm:text-xl reveal-delay-1">
            A film by —
          </p>
          <h1
            data-cursor="text"
            className="reveal font-serif mt-3 leading-[0.88] tracking-[-0.025em] reveal-delay-2"
            style={{ fontSize: 'clamp(2.6rem, 11.5vw, 9.8rem)', fontWeight: 300 }}
          >
            <span className="hero-line block">Muhamad</span>
            <span className="hero-line block" style={{ fontStyle: 'italic' }}>Hafidz</span>
            <span className="hero-line block">Hidayatulloh<span style={{ color: 'var(--terracotta)' }}>.</span></span>
          </h1>
        </div>

        {/* meta strip */}
        <div className="reveal mt-10 grid gap-6 border-t border-[var(--ink)]/25 pt-8 sm:grid-cols-3 sm:gap-10 reveal-delay-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">Logline</div>
            <p className="font-serif mt-2 text-base leading-snug sm:text-lg">{meta.tagline}</p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">Genre</div>
            <p className="font-serif mt-2 text-base leading-snug sm:text-lg">{meta.logline}</p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">Runtime</div>
            <p className="font-serif mt-2 text-base leading-snug sm:text-lg">∞ — masih on going.</p>
          </div>
        </div>

        {/* stats row */}
        <div className="reveal mt-10 flex flex-wrap gap-8 reveal-delay-4">
          {STATS.map((s) => (
            <div key={s.v} className="cursor-default transition-transform hover:-translate-y-1">
              <div className="font-serif text-3xl font-light sm:text-4xl">{s.k}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim)]">{s.v}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="reveal mt-12 flex flex-wrap items-center gap-5 reveal-delay-5">
          <div ref={ctaRef} className="inline-block">
            <a
              href="#scenes"
              className="cta-primary group inline-flex items-center gap-3 border border-[var(--ink)] bg-[var(--ink)] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--paper)] transition-colors duration-500 hover:bg-transparent hover:text-[var(--ink)]"
            >
              <span>▶ Press play</span>
              <ArrowDown size={13} className="transition-transform duration-500 group-hover:translate-y-0.5" />
            </a>
          </div>
          <a href="#credits" className="ink-link font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-dim)]">
            Skip to credits
          </a>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-faint)] sm:inline">
            tip: tekan <kbd className="border border-[var(--ink)]/30 px-1.5 py-0.5">C</kbd> kapan saja
          </span>
        </div>
      </div>

      {/* scroll cue arrow */}
      <a
        href="#origin"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--ink-faint)] transition hover:text-[var(--ink)]"
        aria-label="Scroll down"
      >
        ↓ scroll
      </a>
    </section>
  )
}
