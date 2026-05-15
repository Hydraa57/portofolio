/**
 * INTERTITLE — silent-film-style act separator.
 *
 * Mobile fix: Roman numeral moved BELOW text instead of overlapping right edge.
 * Desktop: stays as right-side watermark, but content area protected.
 */
export default function Intertitle({ act, latin, english, indonesian }) {
  return (
    <section className="relative overflow-hidden border-y border-[var(--ink)]/15 px-5 py-20 sm:px-8 sm:py-36">

      {/* Mobile: act number behind/below — hidden, replaced by inline accent */}
      {/* Desktop: large watermark on right edge */}
      <div
        className="pointer-events-none absolute hidden select-none font-serif font-light leading-none text-[var(--ink)]/[0.04] lg:block"
        style={{
          fontSize: 'clamp(10rem, 22vw, 22rem)',
          right: '4%',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        aria-hidden
      >
        {act}
      </div>

      <div className="reveal relative mx-auto max-w-4xl lg:max-w-[55%]">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.45em] text-[var(--ink-dim)] sm:text-[11px]">
          <span>{latin}</span>
          <span className="text-[var(--ink-faint)]">·</span>
          <span>ACT {act}</span>
        </div>
        <h2
          className="font-serif mt-5 font-light leading-[0.92] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(2.6rem, 9vw, 8rem)' }}
        >
          {english}
        </h2>
        <p className="font-serif mt-5 text-lg italic text-[var(--ink-soft)] sm:text-xl">
          {indonesian}
        </p>
        <div className="mt-8 h-px w-16 bg-[var(--ink)]" />
      </div>

      {/* Mobile-only: subtle Act marker positioned safely */}
      <div className="reveal mt-10 flex items-center gap-3 lg:hidden">
        <div className="h-px flex-1 bg-[var(--ink)]/20" />
        <span className="font-serif text-3xl font-light italic text-[var(--ink)]/40">
          {act}
        </span>
        <div className="h-px flex-1 bg-[var(--ink)]/20" />
      </div>
    </section>
  )
}
