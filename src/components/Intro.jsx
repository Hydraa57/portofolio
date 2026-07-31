/**
 * INTRO — "TAKE ONE" splash screen (disappears after ~2.4s)
 *
 * The 2.4s were dead time; they now cover the preview downloads. The footer
 * reports that progress in film language, so the wait reads as part of the
 * production rather than as a loading screen.
 */
export default function Intro({ done, preload }) {
  const { loaded = 0, total = 0 } = preload ?? {}
  return (
    <div
      className={`intro-overlay fixed inset-0 z-[70] flex items-center justify-center bg-[var(--paper)] ${done ? 'hidden-overlay' : ''}`}
    >
      {/* film countdown reel decorations */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex h-6 items-center justify-between px-3">
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i} className="h-3 w-2 bg-[var(--ink)] opacity-25" />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-6 items-center justify-between px-3">
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i} className="h-3 w-2 bg-[var(--ink)] opacity-25" />
        ))}
      </div>

      {/* center content */}
      <div className="text-center">
        <div
          className="animate-fade-up font-mono text-xs uppercase tracking-[0.5em] text-[var(--ink-dim)]"
          style={{ animationDelay: '0.1s' }}
        >
          TAKE ONE
        </div>
        <div
          className="animate-fade-up font-serif mt-5 text-4xl italic text-[var(--ink)] sm:text-5xl"
          style={{ animationDelay: '0.75s' }}
        >
          rolling…
        </div>
        <div
          className="animate-fade-up mt-5 font-mono text-sm uppercase tracking-[0.5em] text-[var(--terracotta)]"
          style={{ animationDelay: '1.55s' }}
        >
          ▶ ACTION.
        </div>
      </div>

      {/* timecode-style footer — doubles as the preload readout */}
      <div className="absolute bottom-8 left-1/2 w-full -translate-x-1/2 px-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-faint)]">
        <div>hfdz.my.id · 24fps · stereo</div>
        {total > 0 && (
          <div className="mt-3 flex items-center justify-center gap-3">
            <span>
              {loaded >= total ? 'FOOTAGE READY' : `LOADING FOOTAGE ${loaded}/${total}`}
            </span>
            <span className="relative block h-px w-24 bg-[var(--ink)]/20" aria-hidden>
              <span
                className="absolute inset-y-0 left-0 bg-[var(--terracotta)] transition-[width] duration-500"
                style={{ width: `${Math.round((loaded / total) * 100)}%` }}
              />
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
