import { projects } from '../data/projects.js'

/**
 * Filmstrip — pre-footer celluloid showing all projects as a film roll.
 *
 * Looks like an actual film strip with perforations top + bottom.
 * Each frame is a mini scene — gradient, scene number, title.
 * Clickable to scroll back to the corresponding scene.
 *
 * Acts as a visual "credits crawl" before "Fin."
 */
export default function Filmstrip() {
  // Triple the list so the strip feels endless visually
  const frames = [...projects, ...projects, ...projects]

  return (
    <section className="relative overflow-hidden border-y border-[var(--ink)]/15 bg-[var(--ink)] py-8 sm:py-10">
      {/* top perforation row */}
      <div className="absolute inset-x-0 top-1.5 flex items-center justify-around" aria-hidden>
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="h-2 w-3 rounded-[1px] bg-[var(--paper)]/85" />
        ))}
      </div>
      {/* bottom perforation row */}
      <div className="absolute inset-x-0 bottom-1.5 flex items-center justify-around" aria-hidden>
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="h-2 w-3 rounded-[1px] bg-[var(--paper)]/85" />
        ))}
      </div>

      {/* film label at very top corner */}
      <div className="pointer-events-none absolute left-3 top-0 z-10 hidden font-mono text-[8px] uppercase tracking-[0.3em] text-[var(--paper)]/60 sm:block">
        KODAK · 35MM · TAKE 03
      </div>
      <div className="pointer-events-none absolute right-3 top-0 z-10 hidden font-mono text-[8px] uppercase tracking-[0.3em] text-[var(--paper)]/60 sm:block">
        REEL · {new Date().getFullYear()}
      </div>

      {/* frames */}
      <div className="relative overflow-x-auto px-4 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
        <div className="flex gap-3 py-6">
          {frames.map((p, i) => (
            <a
              key={i}
              href={`#scenes`}
              className="filmstrip-frame group relative shrink-0 overflow-hidden"
              style={{
                width: '160px',
                height: '100px',
                background: `linear-gradient(140deg, ${p.palette.from} 0%, ${p.palette.via} 50%, ${p.palette.to} 100%)`,
              }}
              aria-label={`Jump to ${p.title}`}
            >
              {/* scene number */}
              <div
                className="absolute left-2 top-1 font-serif font-light leading-none text-[var(--ink)]/80"
                style={{ fontSize: '2rem' }}
              >
                {p.no}
              </div>

              {/* title at bottom */}
              <div className="absolute inset-x-2 bottom-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--ink)]/85">
                <div className="truncate font-semibold">{p.title}</div>
                <div className="truncate opacity-60">{p.year} · {p.aperture}</div>
              </div>

              {/* lens flare */}
              <div
                className="pointer-events-none absolute inset-0 opacity-90"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 25% 30%, rgba(255,245,220,0.5) 0%, transparent 30%)',
                }}
              />

              {/* hover overlay — invert to ink for cinema dim effect */}
              <div className="pointer-events-none absolute inset-0 bg-[var(--ink)] opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
            </a>
          ))}
        </div>
      </div>

      {/* caption strip */}
      <div className="relative mt-2 px-5 text-center">
        <p className="font-serif text-xs italic text-[var(--paper)]/70 sm:text-sm">
          — reel of selected works · for full case study, scroll back up
        </p>
      </div>
    </section>
  )
}
