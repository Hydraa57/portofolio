import { useEffect, useState, useRef } from 'react'

/**
 * CURSOR — film reticle / crosshair that follows mouse with easing.
 * States:
 *   - default: small dot + outer ring
 *   - link:    morphs to "+" plus enlarged ring
 *   - frame:   morphs to camera shutter brackets [ ]
 *   - text:    morphs to thin vertical bar
 *
 * Detect via data-cursor attribute on hovered element.
 * Disabled on touch / fine pointer absent devices.
 */
export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const [state, setState] = useState('default')
  const [enabled, setEnabled] = useState(false)
  const target = useRef({ x: 0, y: 0 })
  const pos    = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse)
    const mq = window.matchMedia('(pointer: fine)')
    setEnabled(mq.matches)
    const onChange = (e) => setEnabled(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    const onOver = (e) => {
      const el = e.target.closest('[data-cursor]')
      if (el) setState(el.dataset.cursor)
      else if (e.target.closest('a, button, [role="button"]')) setState('link')
      else setState('default')
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)

    let raf
    const tick = () => {
      // Easing — dot follows fast, ring follows slow
      pos.current.x += (target.current.x - pos.current.x) * 0.85
      pos.current.y += (target.current.y - pos.current.y) * 0.85
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    document.body.style.cursor = 'none'
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
      document.body.style.cursor = ''
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      {/* DOT — fast follower */}
      <div
        ref={dotRef}
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[100]"
        data-state={state}
        aria-hidden
      />
      {/* RING — slow follower */}
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[99]"
        data-state={state}
        aria-hidden
      />
    </>
  )
}
