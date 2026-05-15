/**
 * TechLogo — renders icon as inline SVG (bundled, no network req).
 * Mono ink default → fades to brand color on hover via CSS variable.
 */
export default function TechLogo({ name, Icon, color }) {
  return (
    <span
      className="tech-item group inline-flex cursor-default items-center gap-2.5"
      style={{ '--brand': color }}
    >
      <span className="tech-svg relative inline-flex h-4 w-4 shrink-0 items-center justify-center">
        {Icon ? (
          <Icon className="h-full w-full" aria-hidden />
        ) : (
          <span className="text-[8px] font-bold">{name?.[0]}</span>
        )}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--ink)] transition-colors duration-500 group-hover:text-[var(--ink-soft)]">
        {name}
      </span>
    </span>
  )
}
