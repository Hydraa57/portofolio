import { useScrollPct } from '../hooks/useScrollPct.js'

const pad = (n) => String(Math.floor(n)).padStart(2, '0')

function toTimecode(pct) {
  const totalFrames = Math.max(0, Math.floor((pct / 100) * 24 * 60 * 4))
  const ff = totalFrames % 24
  const ss = Math.floor(totalFrames / 24) % 60
  const mm = Math.floor(totalFrames / 24 / 60)
  return `${pad(mm)}:${pad(ss)}:${pad(ff)}`
}

export default function FilmScrubber() {
  const pct = useScrollPct()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--ink)] bg-[var(--paper)]">
      <div className="flex items-center gap-3 px-4 py-2 sm:px-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim)]">▶</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] tabular-nums text-[var(--ink-dim)]">
          {toTimecode(pct)}
        </span>

        {/* track */}
        <div
          className="relative h-px flex-1 cursor-pointer bg-[var(--ink)]/15"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const ratio = (e.clientX - rect.left) / rect.width
            const doc   = document.documentElement
            doc.scrollTop = ratio * (doc.scrollHeight - doc.clientHeight)
          }}
        >
          {/* filled portion */}
          <div
            className="absolute inset-y-0 left-0 bg-[var(--terracotta)] transition-[width] duration-75"
            style={{ width: `${pct}%` }}
          />
          {/* scrub head */}
          <div
            className="animate-scrub-pulse absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--terracotta)]"
            style={{ left: `${pct}%` }}
          />
        </div>

        <span className="font-mono text-[10px] tabular-nums text-[var(--ink-dim)]">
          {Math.round(pct)}%
        </span>
      </div>
    </div>
  )
}
