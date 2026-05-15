/**
 * ColorBars — SMPTE test pattern overlay, triggered by pressing "B".
 *
 * Authentic-looking test card with 7-color bars + bottom black/white strip.
 * Like the test pattern shown on vintage TV when broadcast ends.
 */
const TOP_BARS = [
  { color: '#c0c0c0', label: 'WHITE' },  // 75% white
  { color: '#c0c000', label: 'YELLOW' },
  { color: '#00c0c0', label: 'CYAN' },
  { color: '#00c000', label: 'GREEN' },
  { color: '#c000c0', label: 'MAGENTA' },
  { color: '#c00000', label: 'RED' },
  { color: '#0000c0', label: 'BLUE' },
]

export default function ColorBars({ active }) {
  return (
    <div
      className={`color-bars pointer-events-none fixed inset-0 z-[85] ${active ? 'is-active' : ''}`}
      aria-hidden
    >
      {/* top — 7 color bars */}
      <div className="flex h-[70%]">
        {TOP_BARS.map((bar) => (
          <div key={bar.label} className="relative flex-1" style={{ background: bar.color }}>
            <span className="absolute bottom-2 left-2 font-mono text-[8px] uppercase tracking-widest text-black/60 mix-blend-multiply">
              {bar.label}
            </span>
          </div>
        ))}
      </div>

      {/* middle — inverted bars (PLUGE-like) */}
      <div className="flex h-[10%]">
        {['#0000c0', '#131313', '#c000c0', '#131313', '#00c0c0', '#131313', '#c0c0c0'].map((c, i) => (
          <div key={i} className="flex-1" style={{ background: c }} />
        ))}
      </div>

      {/* bottom — pluge bars + label */}
      <div className="relative flex h-[20%] items-center justify-center bg-[#131313] text-[var(--paper)]">
        {/* PLUGE 6 narrow segments */}
        <div className="absolute left-0 top-0 flex h-full w-[5/7]">
          <div className="flex-1 bg-[#1d1d35]" />
          <div className="flex-1 bg-[#ffffff]" />
          <div className="flex-1 bg-[#2e1d35]" />
          <div className="flex-1 bg-[#000000]" />
          <div className="flex-1 bg-[#0a0a0a]" />
          <div className="flex-1 bg-[#131313]" />
          <div className="flex-1 bg-[#1c1c1c]" />
        </div>

        {/* centered text */}
        <div className="relative z-10 text-center">
          <div className="font-mono text-xs uppercase tracking-[0.4em]">SMPTE COLOR BARS</div>
          <div className="font-serif mt-1 text-xl italic">hfdz.my.id</div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
            HOLD B · OR RELEASE TO RESUME
          </div>
        </div>
      </div>
    </div>
  )
}
