import { meta } from '../data/meta.js'

/**
 * FOOTER — closing credits with bilingual "Fin." treatment.
 *
 * "Fin." is the classical cinema convention for "The End"
 * (originally French, used worldwide in vintage film closing cards).
 * We accompany it with Indonesian context so it lands for all viewers.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-[var(--ink)] px-5 pb-32 pt-20 text-center sm:px-8">

      {/* end-card framing — small dashes top */}
      <div className="mx-auto mb-8 flex max-w-xs items-center gap-3">
        <span className="h-px flex-1 bg-[var(--ink)]/30" />
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[var(--ink-dim)]">END CARD</span>
        <span className="h-px flex-1 bg-[var(--ink)]/30" />
      </div>

      {/* "Fin." — giant display */}
      <div
        className="font-serif font-light italic leading-[0.82] tracking-[-0.04em] text-[var(--ink)] select-none"
        style={{ fontSize: 'clamp(5.5rem, 28vw, 22rem)' }}
      >
        Fin.
      </div>

      {/* Bilingual context line — explains "Fin." filosofi */}
      <div className="mx-auto mt-2 max-w-md">
        <p className="font-serif text-base italic text-[var(--ink-soft)] sm:text-lg">
          — Tamat. Tapi cerita berikutnya menunggu di pesanmu.
        </p>
        <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--ink-faint)]">
          fin · noun · french · the end of a film
        </p>
      </div>

      {/* meta line */}
      <div className="mt-12 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--ink-dim)] sm:flex-row sm:justify-center sm:gap-5">
        <span>© {year} {meta.short.toUpperCase()}</span>
        <span className="hidden sm:inline">·</span>
        <span>{meta.domain}</span>
        <span className="hidden sm:inline">·</span>
        <span>Indonesia → Dunia</span>
      </div>

      <p className="font-serif mt-4 text-sm italic text-[var(--ink-faint)]">
        Dibangun dengan kopi tubruk, banyak refactor, dan rasa ingin tahu yang belum habis.
      </p>

      {/* keyboard hints — easter eggs */}
      <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--ink-faint)]">
        <span>tekan</span>
        <kbd className="border border-[var(--ink)]/30 bg-[var(--paper-warm)] px-1.5 py-0.5">C</kbd>
        <span>→ cut!</span>
        <span className="text-[var(--ink-faint)]/50">·</span>
        <kbd className="border border-[var(--ink)]/30 bg-[var(--paper-warm)] px-1.5 py-0.5">B</kbd>
        <span>→ color bars</span>
      </div>

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
