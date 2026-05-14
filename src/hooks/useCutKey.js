import { useEffect, useState } from 'react'

/**
 * useCutKey — press "C" anywhere to trigger a cinematic cut effect.
 * Screen flashes to ink-black briefly, mimicking a film cut.
 */
export function useCutKey() {
  const [cutting, setCutting] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      // ignore if typing in input/textarea
      const tag = e.target.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return
      if (e.key.toLowerCase() === 'c' && !e.metaKey && !e.ctrlKey) {
        setCutting(true)
        setTimeout(() => setCutting(false), 360)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return cutting
}
