import { meta } from '../data/meta.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden border-t border-[var(--ink)] px-5 pb-28 pt-20 text-center sm:px-8">

      {/* "Fin." — giant display */}
      <div
        className="font-serif font-light italic leading-[0.82] tracking-[-0.04em] text-[var(--ink)] select-none"
        style={{ fontSize: 'clamp(6rem, 30vw, 22rem)' }}
      >
        Fin.
      </div>

      {/* meta line */}
      <div className="mt-8 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--ink-dim)] sm:flex-row sm:justify-center sm:gap-5">
        <span>© {year} {meta.short.toUpperCase()}</span>
        <span className="hidden sm:inline">·</span>
        <span>{meta.domain}</span>
        <span className="hidden sm:inline">·</span>
        <span>Indonesia → Dunia</span>
      </div>

      <p className="font-serif mt-4 text-sm italic text-[var(--ink-faint)]">
        Dibangun dengan kopi tubruk, banyak refactor, dan rasa ingin tahu yang belum habis.
      </p>

      {/* end-of-reel decorative strip */}
      <div className="mt-14 flex items-center justify-center gap-1" aria-hidden>
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="h-5 w-2 border border-[var(--ink)]/20"
            style={{ opacity: 0.15 + (i % 7) * 0.07 }}
          />
        ))}
      </div>
    </footer>
  )
}
