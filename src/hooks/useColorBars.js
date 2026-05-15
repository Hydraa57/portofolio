import { useEffect, useState } from 'react'

/**
 * useColorBars — show SMPTE color bar test pattern while user holds "B".
 * Like vintage TV broadcasters used at sign-off.
 */
export function useColorBars() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onDown = (e) => {
      const tag = e.target.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return
      if (e.key.toLowerCase() === 'b' && !e.metaKey && !e.ctrlKey && !e.repeat) {
        setActive(true)
      }
    }
    const onUp = (e) => {
      if (e.key.toLowerCase() === 'b') setActive(false)
    }
    window.addEventListener('keydown', onDown)
    window.addEventListener('keyup', onUp)
    return () => {
      window.removeEventListener('keydown', onDown)
      window.removeEventListener('keyup', onUp)
    }
  }, [])

  return active
}
