import { useState, useEffect } from 'react'

export function useScrollPct() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const update = () => {
      const h = document.documentElement
      const denom = h.scrollHeight - h.clientHeight
      setPct(denom > 0 ? Math.min(100, (h.scrollTop / denom) * 100) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return pct
}
