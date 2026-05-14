import { useEffect, useRef } from 'react'

/**
 * useMagnetic — element gets subtly pulled toward cursor within a radius.
 * Returns ref to attach to the element.
 *
 * @param {number} strength  multiplier (0-1, default 0.3)
 * @param {number} radius    activation distance in px (default 120)
 */
export function useMagnetic(strength = 0.3, radius = 120) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Only on fine pointer devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    let raf
    let tx = 0, ty = 0, x = 0, y = 0

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy)
      if (dist < radius) {
        tx = dx * strength
        ty = dy * strength
      } else {
        tx = 0
        ty = 0
      }
    }

    const onLeave = () => { tx = 0; ty = 0 }

    const tick = () => {
      x += (tx - x) * 0.18
      y += (ty - y) * 0.18
      el.style.transform = `translate(${x}px, ${y}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [strength, radius])

  return ref
}
