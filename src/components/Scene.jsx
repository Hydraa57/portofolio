import { ArrowUpRight, ExternalLink } from 'lucide-react'

/**
 * Scene — renders one project card.
 * `reversed` flips layout on large screens (alternating).
 */
export default function Scene({ project: p, reversed = false }) {
  const hasLive   = Boolean(p.links?.live)
  const hasGithub = Boolean(p.links?.github)

  return (
    <article className="scene-card border-t border-[var(--ink)]/15 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">

        {/* scene meta strip */}
        <div className="reveal grid items-baseline gap-3 sm:grid-cols-[auto_1fr_auto] sm:gap-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
            SCENE {p.no} of {String(3).padStart(2, '0')}
          </span>
          <div className="hidden h-px bg-[var(--ink)]/15 sm:block" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
            {p.year} · {p.aperture}
            {p.status === 'beta' && ' · BETA'}
          </span>
        </div>

        {/* main grid */}
        <div className={`mt-8 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16 ${reversed ? '' : ''}`}>

          {/* visual frame */}
          <div className={reversed ? 'lg:order-2' : ''}>
            {/* giant scene number */}
            <div
              className="font-serif font-light leading-[0.82] tracking-tighter text-[var(--ink)] select-none"
              style={{ fontSize: 'clamp(5.5rem, 18vw, 13rem)' }}
              aria-hidden
            >
              {p.no}
            </div>

            {/* film frame */}
            <div
              className="relative -mt-8 aspect-[16/10] overflow-hidden border border-[var(--ink)] sm:-mt-12"
              style={{
                background: `linear-gradient(140deg, ${p.palette.from} 0%, ${p.palette.via} 50%, ${p.palette.to} 100%)`,
              }}
            >
              {/* lens flare */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 22% 28%, rgba(255,245,220,0.55) 0%, transparent 28%), radial-gradient(circle at 72% 68%, rgba(255,230,190,0.3) 0%, transparent 22%)',
                }}
              />

              {/* crop marks */}
              <div className="crop-tl absolute left-3 top-3 h-4 w-4" />
              <div className="crop-tr absolute right-3 top-3 h-4 w-4" />
              <div className="crop-bl absolute bottom-3 left-3 h-4 w-4" />
              <div className="crop-br absolute bottom-3 right-3 h-4 w-4" />

              {/* left perforations */}
              <div className="perfs absolute left-0 top-0 w-3.5 h-full">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i} className="perf" />
                ))}
              </div>
              {/* right perforations */}
              <div className="perfs absolute right-0 top-0 w-3.5 h-full">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i} className="perf" />
                ))}
              </div>

              {/* film slate overlay (bottom) */}
              <div className="absolute inset-x-5 bottom-4 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--ink)] sm:text-[10px]">
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
                <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-none bg-[var(--ink)] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--paper)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] animate-blink" />
                  LIVE
                </div>
              )}
              {p.status === 'beta' && (
                <div className="absolute right-5 top-5 bg-[var(--ink)]/60 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--paper)]">
                  BETA
                </div>
              )}
            </div>
          </div>

          {/* text content */}
          <div className={`pt-2 ${reversed ? 'lg:order-1' : ''}`}>
            <h3
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

            {/* what i built */}
            <div className="reveal mt-8 border-t border-[var(--ink)]/15 pt-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
                What I built
              </div>
              <p className="font-serif mt-2 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
                {p.what_i_built}
              </p>
            </div>

            {/* highlight */}
            <div className="reveal mt-5 border-l-2 border-[var(--terracotta)] pl-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--ink-soft)]">
                {p.highlight}
              </p>
            </div>

            {/* stack */}
            <div className="reveal mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--ink)]/15 pt-5">
              {p.stack.map((t) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim)]">
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
