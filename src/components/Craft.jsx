import { tech } from '../data/tech.js'
import TechLogo from './TechLogo.jsx'

export default function Craft() {
  return (
    <section id="craft" className="relative px-5 pb-24 sm:px-8">
      <div className="mx-auto max-w-7xl">

        {/* header */}
        <div className="reveal flex flex-wrap items-baseline justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
          <span>EQUIPMENT MANIFEST</span>
          <span className="hidden sm:inline">HOVER → REVEAL TRUE COLOR</span>
        </div>
        <div className="mt-2 h-px bg-[var(--ink)]" />

        {/* departments */}
        <div className="mt-14 space-y-0">
          {tech.map((dept, di) => (
            <div
              key={dept.dept}
              className="reveal grid gap-5 border-b border-[var(--ink)]/15 py-8 sm:grid-cols-[200px_1fr] sm:items-center sm:gap-12"
              style={{ transitionDelay: `${di * 60}ms` }}
            >
              {/* dept info */}
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
                  {dept.subtitle}
                </div>
                <h3 className="font-serif mt-1 text-xl italic leading-tight text-[var(--ink)] sm:text-2xl">
                  {dept.dept}
                </h3>
              </div>

              {/* crew logos */}
              <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                {dept.crew.map((t) => (
                  <TechLogo key={t.name} slug={t.slug} name={t.name} color={t.color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* note */}
        <p className="reveal mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
          * Masih belajar dan terus bertambah. Updated {new Date().getFullYear()}.
        </p>
      </div>
    </section>
  )
}
