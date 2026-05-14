/**
 * INTERTITLE — silent-film-style act separator.
 * Props: act (roman numeral string), latin, english, indonesian
 */
export default function Intertitle({ act, latin, english, indonesian }) {
  return (
    <section className="relative overflow-hidden border-y border-[var(--ink)]/15 px-5 py-24 sm:px-8 sm:py-36">
      {/* large act number watermark */}
      <div
        className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 select-none font-serif font-light leading-none text-[var(--ink)]/[0.04]"
        style={{ fontSize: 'clamp(8rem, 28vw, 22rem)' }}
        aria-hidden
      >
        {act}
      </div>

      <div className="reveal relative mx-auto max-w-4xl">
        <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-[var(--ink-dim)]">
          {latin} · ACT {act}
        </div>
        <h2
          className="font-serif mt-5 font-light leading-[0.92] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(2.8rem, 10vw, 8rem)' }}
        >
          {english}
        </h2>
        <p className="font-serif mt-5 text-lg italic text-[var(--ink-soft)] sm:text-xl">
          {indonesian}
        </p>
        <div className="mt-8 h-px w-16 bg-[var(--ink)]" />
      </div>
    </section>
  )
}
