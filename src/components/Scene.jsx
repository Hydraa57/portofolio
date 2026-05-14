import { useState } from 'react'
import { ArrowUpRight, ExternalLink, Eye } from 'lucide-react'

/**
 * Scene — single project card with hover-reveal live screenshot.
 *
 * Screenshot service: WordPress mShots (free, no auth required).
 * URL format: https://s.wordpress.com/mshots/v1/{encoded_url}?w=1280&h=800
 *
 * For projects without a live URL, falls back to the stylized film frame.
 */
export default function Scene({ project: p, reversed = false }) {
  const [loaded, setLoaded] = useState(false)
  const hasLive   = Boolean(p.links?.live)
  const hasGithub = Boolean(p.links?.github)
  const screenshot = hasLive
    ? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(p.links.live)}?w=1280&h=800`
    : null

  return (
    <article className="scene-card border-t border-[var(--ink)]/15 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">

        {/* scene meta strip */}
        <div className="reveal grid items-baseline gap-3 sm:grid-cols-[auto_1fr_auto] sm:gap-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
            SCENE {p.no} of 03
          </span>
          <div className="hidden h-px bg-[var(--ink)]/15 sm:block" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
            {p.year} · {p.aperture}
            {p.status === 'beta' && ' · BETA'}
          </span>
        </div>

        {/* main grid */}
        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">

          {/* ─── VISUAL FRAME ─── */}
          <div className={reversed ? 'lg:order-2' : ''}>
            {/* giant scene number */}
            <div
              className="font-serif font-light leading-[0.82] tracking-tighter text-[var(--ink)] select-none"
              style={{ fontSize: 'clamp(5.5rem, 18vw, 13rem)' }}
              aria-hidden
            >
              {p.no}
            </div>

            {/* film frame — group hover reveals screenshot */}
            <a
              href={hasLive ? p.links.live : '#scenes'}
              target={hasLive ? '_blank' : undefined}
              rel="noreferrer noopener"
              data-cursor="frame"
              className="scene-frame group relative -mt-8 block aspect-[16/10] overflow-hidden border border-[var(--ink)] sm:-mt-12"
              style={{
                background: `linear-gradient(140deg, ${p.palette.from} 0%, ${p.palette.via} 50%, ${p.palette.to} 100%)`,
              }}
            >
              {/* ── BASE: stylized film frame (fades out on hover) ── */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-700 group-hover:opacity-0"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 22% 28%, rgba(255,245,220,0.55) 0%, transparent 28%), radial-gradient(circle at 72% 68%, rgba(255,230,190,0.3) 0%, transparent 22%)',
                }}
              />

              {/* crop marks (always visible) */}
              <div className="crop-tl absolute left-3 top-3 h-4 w-4 z-10" />
              <div className="crop-tr absolute right-3 top-3 h-4 w-4 z-10" />
              <div className="crop-bl absolute bottom-3 left-3 h-4 w-4 z-10" />
              <div className="crop-br absolute bottom-3 right-3 h-4 w-4 z-10" />

              {/* film perforations */}
              <div className="perfs absolute left-0 top-0 w-3.5 h-full z-10 transition-opacity duration-700 group-hover:opacity-30">
                {Array.from({ length: 10 }).map((_, i) => <span key={i} className="perf" />)}
              </div>
              <div className="perfs absolute right-0 top-0 w-3.5 h-full z-10 transition-opacity duration-700 group-hover:opacity-30">
                {Array.from({ length: 10 }).map((_, i) => <span key={i} className="perf" />)}
              </div>

              {/* film slate (bottom) — fades out on hover */}
              <div className="absolute inset-x-5 bottom-4 z-10 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--ink)] transition-opacity duration-700 group-hover:opacity-0 sm:text-[10px]">
                <div className="flex justify-between opacity-70">
                  <span>ROLL {p.no} / TAKE 01</span>
                  <span>{p.aperture}</span>
                </div>
                <div className="my-1 h-px bg-[var(--ink)]/30" />
                <div className="flex justify-between opacity-80">
                  <span>{p.title.toUpperCase()}</span>
                  <span>FRAME 0024</span>
                </div>
              </div>

              {/* status badge */}
              {p.status === 'live' && (
                <div className="absolute right-5 top-5 z-20 flex items-center gap-1.5 bg-[var(--ink)] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--paper)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] animate-blink" />
                  LIVE
                </div>
              )}
              {p.status === 'beta' && (
                <div className="absolute right-5 top-5 z-20 bg-[var(--ink)]/70 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--paper)]">
                  BETA
                </div>
              )}

              {/* ── HOVER: live website screenshot ── */}
              {screenshot && (
                <>
                  <img
                    src={screenshot}
                    alt={`Preview ${p.title}`}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-[1.02]"
                    onLoad={() => setLoaded(true)}
                    loading="lazy"
                  />
                  {/* vignette over screenshot */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
                    style={{ background: 'radial-gradient(ellipse at center, transparent 60%, rgba(26,22,18,0.35) 100%)' }}
                  />
                </>
              )}

              {/* hover label — preview indicator */}
              <div className="absolute inset-0 z-20 flex items-end justify-start p-6 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="flex items-center gap-2 bg-[var(--ink)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--paper)]">
                  <Eye size={11} />
                  {hasLive ? 'LIVE PREVIEW · CLICK TO OPEN' : 'PREVIEW · CASE STUDY'}
                </div>
              </div>

              {/* scanline sweep on hover */}
              <div className="scanline-sweep pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100" aria-hidden />
            </a>

            {/* caption under frame */}
            <div className="mt-3 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim)]">
              <span>FIG. {p.no} — {p.title.toUpperCase()}</span>
              <span>{hasLive ? '↗ HOVER' : '— PRIVATE'}</span>
            </div>
          </div>

          {/* ─── TEXT CONTENT ─── */}
          <div className={`pt-2 ${reversed ? 'lg:order-1' : ''}`}>
            <h3
              data-cursor="text"
              className="reveal font-serif font-light leading-[0.94] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
            >
              {p.title}<span style={{ color: 'var(--terracotta)' }}>.</span>
            </h3>

            <p className="reveal font-serif mt-3 text-xl italic text-[var(--ink-soft)]">
              "{p.tagline}"
            </p>

            <p className="reveal font-serif mt-6 text-base leading-relaxed text-[var(--ink-soft)] sm:text-[1.05rem]">
              {p.synopsis}
            </p>

            <div className="reveal mt-8 border-t border-[var(--ink)]/15 pt-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
                What I built
              </div>
              <p className="font-serif mt-2 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
                {p.what_i_built}
              </p>
            </div>

            <div className="reveal mt-5 border-l-2 border-[var(--terracotta)] pl-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--ink-soft)]">
                {p.highlight}
              </p>
            </div>

            {/* stack */}
            <div className="reveal mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--ink)]/15 pt-5">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim)] transition-colors hover:text-[var(--ink)]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* links */}
            <div className="reveal mt-8 flex flex-wrap items-center gap-6">
              {hasLive && (
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em]"
                >
                  <span className="ink-link">View live</span>
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
              {hasGithub && (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-dim)]"
                >
                  <span className="ink-link">Source</span>
                  <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              )}
              {!hasLive && !hasGithub && (
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                  Coming soon · private repo
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
