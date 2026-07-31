import { useEffect, useMemo, useState } from 'react'

/**
 * Warms the browser cache for preview images while the intro is on screen.
 *
 * mShots generates a screenshot on the first request for a URL, which is the
 * slow part — on a cold URL it can take several seconds and, before this hook,
 * that wait started only when the visitor hovered a scene. The intro already
 * holds the screen for ~2.4s doing nothing, so the fetches start on mount and
 * are usually decoded by the time anyone scrolls that far.
 *
 * Returns progress so the intro can show it instead of a bare "rolling…".
 */
export function usePreload(urls) {
  // Join to a primitive: a fresh array identity each render would otherwise
  // restart every download on every render.
  const key = useMemo(() => urls.join('|'), [urls])
  const [loaded, setLoaded] = useState(0)

  useEffect(() => {
    const list = key ? key.split('|') : []
    if (!list.length) return

    let alive = true
    let done = 0
    const bump = () => {
      if (!alive) return
      done += 1
      setLoaded(done)
    }

    const imgs = list.map((src) => {
      const img = new Image()
      // A preview that fails still counts: the strip falls back to the film
      // frame, and a stalled counter would leave the intro looking broken.
      img.onload = bump
      img.onerror = bump
      img.decoding = 'async'
      img.src = src
      return img
    })

    return () => {
      alive = false
      imgs.forEach((img) => {
        img.onload = null
        img.onerror = null
      })
    }
  }, [key])

  const total = key ? key.split('|').length : 0
  return { loaded, total, ready: total > 0 && loaded >= total }
}
