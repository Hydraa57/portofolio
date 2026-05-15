/**
 * Laurels — film festival "Official Selection" style award for projects.
 *
 * Two mirrored SVG laurels frame a small text block.
 * Looks like the badges you see on indie film posters.
 */
export default function Laurels({
  topText = "OFFICIAL",
  mainText = "SELECTION",
  year = "2026",
}) {
  return (
    <div
      className="laurel inline-flex items-center gap-1.5 text-[var(--ink)]"
      role="img"
      aria-label={`${topText} ${mainText} ${year}`}
    >
      {/* left laurel */}
      <svg
        width="22"
        height="36"
        viewBox="0 0 22 36"
        fill="none"
        className="text-current"
      >
        <path
          d="M20 2 Q12 4 6 10 Q2 16 4 22 Q6 28 12 32 Q16 34 20 34"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* leaves */}
        {[5, 9, 13, 17, 21, 25, 29].map((y, i) => (
          <ellipse
            key={i}
            cx={15 - (i % 2) * 2}
            cy={y}
            rx="2.5"
            ry="1.2"
            transform={`rotate(${-25 - i * 4} ${15 - (i % 2) * 2} ${y})`}
            fill="currentColor"
            opacity="0.85"
          />
        ))}
      </svg>

      {/* center text */}
      <div className="px-1 text-center font-mono leading-none">
        <div className="text-[7px] uppercase tracking-[0.25em] opacity-70">
          {topText}
        </div>
        <div className="font-serif text-[11px] font-medium italic">
          {mainText}
        </div>
        <div className="text-[7px] uppercase tracking-[0.25em] opacity-70">
          {year}
        </div>
      </div>

      {/* right laurel (mirrored) */}
      <svg
        width="22"
        height="36"
        viewBox="0 0 22 36"
        fill="none"
        className="text-current"
      >
        <g transform="translate(22 0) scale(-1 1)">
          <path
            d="M20 2 Q12 4 6 10 Q2 16 4 22 Q6 28 12 32 Q16 34 20 34"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
          {[5, 9, 13, 17, 21, 25, 29].map((y, i) => (
            <ellipse
              key={i}
              cx={15 - (i % 2) * 2}
              cy={y}
              rx="2.5"
              ry="1.2"
              transform={`rotate(${-25 - i * 4} ${15 - (i % 2) * 2} ${y})`}
              fill="currentColor"
              opacity="0.85"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
