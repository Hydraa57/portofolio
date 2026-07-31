import { useEffect, useState } from 'react'
import { RETRY_DELAYS, isMshot, withRetry } from '../lib/shot.js'

/**
 * Returns the src to render for a preview, re-requesting mShots URLs a couple
 * of times so a visitor is not left staring at "Generating Preview…".
 *
 * mShots answers the first request for a URL with a placeholder while it builds
 * the real screenshot. That placeholder loads successfully, so there is nothing
 * to detect and nothing for a preloader to fix — the only remedy is to ask
 * again once the render has had time to finish.
 *
 * Local images short-circuit: they are already the final asset, so they render
 * immediately and never retry.
 */
export function useShotSrc(url) {
  const [src, setSrc] = useState(url)

  useEffect(() => {
    setSrc(url)
    if (!isMshot(url)) return

    const timers = RETRY_DELAYS.map((delay, i) =>
      setTimeout(() => setSrc(withRetry(url, i + 1)), delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [url])

  return src
}
