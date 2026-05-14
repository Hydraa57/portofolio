import { useScrollPct } from '../hooks/useScrollPct.js'

const pad = (n, len = 2) => String(Math.floor(n)).padStart(len, '0')

function toTimecode(pct) {
  const totalFrames = Math.max(0, Math.floor((pct / 100) * 24 * 60 * 4))
  const ff = totalFrames % 24
  const ss = Math.floor(totalFrames / 24) % 60
  const mm = Math.floor(totalFrames / 24 / 60)
  return `${pad(mm)}:${pad(ss)}:${pad(ff)}`
}

const navLinks = [
  { href: '#origin',  label: 'Act I · Origin' },
  { href: '#craft',   label: 'Act II · Craft' },
  { href: '#scenes',  label: 'Act III · Works' },
  { href: '#credits', label: 'Credits' },
]

export default function Slate() {
  const pct = useScrollPct()
  const tc  = toTimecode(pct)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--ink)] bg-[var(--paper)]">
      <div className="flex items-center justify-between px-4 py-2 sm:px-6">
        {/* LEFT */}
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em]">
          <span className="flex items-center gap-1.5">
            <span className="animate-blink h-1.5 w-1.5 rounded-full bg-[var(--terracotta)]" />
            <span className="hidden xs:inline">REC</span>
          </span>
          <span className="text-[var(--ink-faint)]">·</span>
          <span className="font-serif italic text-[var(--ink-soft)]">hfdz.my.id</span>
        </div>

        {/* CENTER nav — hidden on small screens */}
        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="ink-link font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim)] transition hover:text-[var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim)]">
          <span className="hidden sm:inline">24 FPS</span>
          <span className="hidden text-[var(--ink-faint)] sm:inline">·</span>
          <span>{tc}</span>
        </div>
      </div>

      {/* Scrub progress bar */}
      <div className="relative h-[2px] bg-[var(--ink)]/10">
        <div
          className="absolute inset-y-0 left-0 bg-[var(--terracotta)] transition-[width] duration-100"
          style={{ width: `${pct}%` }}
        />
      </div>
    </header>
  )
}
