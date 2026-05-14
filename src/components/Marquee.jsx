/**
 * Marquee — infinite horizontal scrolling ticker.
 * Used as a "credit roll" interlude between Acts.
 *
 * Items mix serif italic + mono caps for cinematic typography contrast.
 */
const ITEMS = [
  { text: 'Available for collaboration',  style: 'italic' },
  { text: '★',                              style: 'symbol' },
  { text: '3 LIVE PRODUCTS',                style: 'mono' },
  { text: '★',                              style: 'symbol' },
  { text: 'AI engineering',                 style: 'italic' },
  { text: '★',                              style: 'symbol' },
  { text: 'BUILT FROM JAKARTA · UTC+7',     style: 'mono' },
  { text: '★',                              style: 'symbol' },
  { text: 'Workflow automation',            style: 'italic' },
  { text: '★',                              style: 'symbol' },
  { text: 'FULL-STACK · n8n · OPENAI',      style: 'mono' },
  { text: '★',                              style: 'symbol' },
  { text: 'Open for freelance',             style: 'italic' },
  { text: '★',                              style: 'symbol' },
  { text: 'hfdz.my.id',                     style: 'mono' },
  { text: '★',                              style: 'symbol' },
]

export default function Marquee() {
  // Duplicate so the loop seams visually
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee relative overflow-hidden border-y border-[var(--ink)]/15 bg-[var(--paper-warm)]/40 py-6">
      <div className="marquee-track flex whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`flex shrink-0 items-center px-8 ${
              item.style === 'italic'
                ? 'font-serif text-2xl italic text-[var(--ink)] sm:text-3xl'
                : item.style === 'symbol'
                ? 'text-base text-[var(--terracotta)]'
                : 'font-mono text-xs uppercase tracking-[0.3em] text-[var(--ink-dim)]'
            }`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
