/**
 * TechLogo — renders icon from cdn.simpleicons.org
 * Mono ink state → hover reveals brand color.
 * Falls back gracefully if CDN is unreachable.
 */
export default function TechLogo({ slug, name, color }) {
  const mono  = `https://cdn.simpleicons.org/${slug}/1a1612`   // ink color
  const brand = `https://cdn.simpleicons.org/${slug}/${color?.replace('#', '')}` // brand color

  return (
    <div className="tech-item group inline-flex cursor-default items-center gap-2.5">
      <span className="relative h-4 w-4 shrink-0 select-none">
        <img
          src={mono}
          alt={name}
          width={16} height={16}
          className="tech-logo-mono absolute inset-0 h-full w-full object-contain"
          loading="lazy"
          decoding="async"
        />
        <img
          src={brand}
          alt=""
          aria-hidden
          width={16} height={16}
          className="tech-logo-color absolute inset-0 h-full w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--ink)] transition-colors group-hover:text-[var(--ink-soft)]">
        {name}
      </span>
    </div>
  )
}
