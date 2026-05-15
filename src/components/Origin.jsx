import { meta } from "../data/meta.js";
import portrait from "../assets/portrait.png";

/**
 * Origin — Act I about section with editorial portrait.
 *
 * Portrait: back-view photo of Hafidz observing art in a gallery —
 * metaphor for a craftsman who studies others' work to refine his own.
 *
 * Layout: 12-col grid, portrait spans left 5 cols at desktop,
 * text floats right with drop-cap. Mobile stacks naturally.
 */
export default function Origin() {
  return (
    <section id="origin" className="relative px-5 pb-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* scene slate */}
        <div className="reveal grid items-baseline gap-3 sm:grid-cols-[auto_1fr_auto] sm:gap-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
            SCENE I.i
          </span>
          <div className="hidden h-px bg-[var(--ink)]/20 sm:block" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
            INT. GALLERY · DAY
          </span>
        </div>

        {/* main editorial grid */}
        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ── PORTRAIT (LEFT 5 COLS) ── */}
          <figure className="reveal relative lg:col-span-5">
            <div className="portrait-frame relative overflow-hidden border border-[var(--ink)]">
              {/* the photo */}
              <img
                src={portrait}
                alt="The director, observing — portrait of Hafidz in a gallery"
                className="portrait-img block w-full"
                loading="eager"
                fetchPriority="high"
              />
              {/* paper-tone warm overlay (multiply) to tie photo into the palette */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(241,234,220,0.08) 0%, rgba(184,84,58,0.06) 100%)",
                  mixBlendMode: "multiply",
                }}
              />
              {/* film grain on portrait */}
              <div className="pointer-events-none absolute inset-0 portrait-grain" />

              {/* crop marks */}
              <div className="crop-tl absolute left-2 top-2 h-4 w-4 z-10" />
              <div className="crop-tr absolute right-2 top-2 h-4 w-4 z-10" />
              <div className="crop-bl absolute bottom-2 left-2 h-4 w-4 z-10" />
              <div className="crop-br absolute bottom-2 right-2 h-4 w-4 z-10" />

              {/* slate overlay */}
              <div className="absolute inset-x-3 bottom-3 z-10 flex items-end justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-white/90 mix-blend-difference sm:text-[10px]">
                <span>PORTRAIT · 35MM · TAKE 02</span>
                <span>0:42:11</span>
              </div>
            </div>

            {/* photo caption */}
            <figcaption className="mt-3 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim)]">
              <span>FIG. 0 — THE DIRECTOR, OBSERVING.</span>
              <span>BKS · 2026</span>
            </figcaption>

            {/* extra meta — beside photo as marginalia */}
            <div className="mt-6 space-y-3 border-t border-[var(--ink)]/15 pt-5 text-xs sm:hidden">
              <p className="font-serif italic text-[var(--ink-soft)]">
                Sometimes the best way to learn how to make something — is to
                stand still and watch what others have made.
              </p>
            </div>
          </figure>

          {/* ── BODY COPY (RIGHT 7 COLS) ── */}
          <div className="lg:col-span-7">
            {meta.bio.map((para, i) => (
              <p
                key={i}
                className={`reveal font-serif text-[1.2rem] leading-[1.6] tracking-[-0.005em] text-[var(--ink-soft)] sm:text-[1.35rem] ${i === 0 ? "drop-cap" : "mt-6"}`}
              >
                {para}
              </p>
            ))}

            {/* pull-quote */}
            <blockquote className="reveal my-12 border-l-2 border-[var(--terracotta)] pl-6">
              <p className="font-serif text-xl italic leading-snug text-[var(--ink)] sm:text-2xl">
                {meta.manifesto}
              </p>
              <footer className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
                — Personal manifesto · 2024
              </footer>
            </blockquote>

            {/* sidebar info cards (now inline below body) */}
            <div className="grid gap-1 sm:grid-cols-3 sm:gap-6">
              {[
                {
                  label: "Trained on",
                  body: "Stack Overflow, ribuan tab dokumentasi, eksperimen yang gagal lebih sering daripada berhasil.",
                },
                { label: "Now working on", body: meta.now },
                {
                  label: "Available for",
                  body: "Kolaborasi produk, konsultasi AI/automation, freelance full-stack.",
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="reveal border-t border-[var(--ink)]/20 py-5 transition-colors hover:bg-[var(--paper-warm)]/40 sm:border-l sm:border-t-0 sm:px-4 sm:py-1 sm:first:border-l-0 sm:first:pl-0"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
                    {c.label}
                  </div>
                  <p className="font-serif mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
