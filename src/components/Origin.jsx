import { meta } from '../data/meta.js'

export default function Origin() {
  return (
    <section id="origin" className="relative px-5 pb-24 sm:px-8">
      <div className="mx-auto max-w-7xl">

        {/* scene header */}
        <div className="reveal grid items-baseline gap-3 sm:grid-cols-[auto_1fr_auto] sm:gap-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">SCENE I.i</span>
          <div className="hidden h-px bg-[var(--ink)]/20 sm:block" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">INT. KAMAR · MALAM</span>
        </div>

        {/* two-column layout */}
        <div className="mt-12 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* body copy */}
          <div>
            {meta.bio.map((para, i) => (
              <p
                key={i}
                className={`reveal font-serif text-[1.2rem] leading-[1.6] tracking-[-0.005em] text-[var(--ink-soft)] sm:text-[1.35rem] ${i === 0 ? 'drop-cap' : 'mt-6'}`}
              >
                {para}
              </p>
            ))}

            {/* manifesto pull-quote */}
            <blockquote className="reveal my-14 border-l-2 border-[var(--terracotta)] pl-6">
              <p className="font-serif text-xl italic leading-snug text-[var(--ink)] sm:text-2xl">
                {meta.manifesto}
              </p>
              <footer className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
                — Personal manifesto · 2024
              </footer>
            </blockquote>
          </div>

          {/* sidebar info cards */}
          <div className="space-y-1 lg:pt-2">
            {[
              { label: 'Trained on',   body: 'Stack Overflow, ribuan tab dokumentasi, dan eksperimen yang gagal lebih sering daripada berhasil. Setiap project adalah footage mentah untuk ditonton ulang.' },
              { label: 'Now working on', body: meta.now },
              { label: 'Available for', body: 'Kolaborasi produk, konsultasi AI/automation, freelance full-stack. Open untuk project yang punya dampak nyata.' },
            ].map((c) => (
              <div key={c.label} className="reveal border-t border-[var(--ink)]/20 py-6 first:border-t-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">{c.label}</div>
                <p className="font-serif mt-2 text-base leading-relaxed text-[var(--ink-soft)]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
