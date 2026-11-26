import { useState, useEffect, useMemo } from 'react'
import { useReveal }    from './hooks/useReveal.js'
import { useCutKey }    from './hooks/useCutKey.js'
import { useColorBars } from './hooks/useColorBars.js'
import { usePreload }   from './hooks/usePreload.js'
import { projects }     from './data/projects.js'
import { mshot, shotSrc } from './lib/shot.js'

import Intro        from './components/Intro.jsx'
import Slate        from './components/Slate.jsx'
import Hero         from './components/Hero.jsx'
import Intertitle   from './components/Intertitle.jsx'
import Origin       from './components/Origin.jsx'
import Craft        from './components/Craft.jsx'
import Marquee      from './components/Marquee.jsx'
import Reel         from './components/Reel.jsx'
import Works        from './components/Works.jsx'
import Credits      from './components/Credits.jsx'
import Filmstrip    from './components/Filmstrip.jsx'
import Footer       from './components/Footer.jsx'
import FilmScrubber from './components/FilmScrubber.jsx'
import Cursor       from './components/Cursor.jsx'
import ColorBars    from './components/ColorBars.jsx'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const cutting   = useCutKey()
  const barsOn    = useColorBars()

  /**
   * Every preview the page will ever show, fetched while the intro is up.
   * Scene hover previews first — those are what a visitor hits soonest — then
   * the contact-sheet thumbnails under each scene.
   */
  const previews = useMemo(() => {
    const frames = projects
      .map((p) => p.poster ?? (p.links?.live ? mshot(p.links.live) : null))
      .filter(Boolean)
    const thumbs = projects.flatMap((p) => (p.shots ?? []).map((s) => shotSrc(s, true)))
    return [...new Set([...frames, ...thumbs])]
  }, [])

  const preload = usePreload(previews)

  /**
   * Intro dipersingkat 2450 → 1400 ms dan kini bisa dilewati oleh gerakan apa
   * pun: ketuk, klik, tombol, atau gulir. Jedanya tetap berguna — di situlah
   * preview diunduh — tapi menahan orang yang sudah ingin masuk adalah tempat
   * mereka menutup tab, dan pengunjung dari Instagram datang untuk melihat,
   * bukan menunggu.
   */
  useEffect(() => {
    const selesai = () => setIntroDone(true)
    const t = setTimeout(selesai, 1400)
    const ev = ['pointerdown', 'keydown', 'wheel', 'touchstart']
    ev.forEach((e) => window.addEventListener(e, selesai, { once: true, passive: true }))
    return () => {
      clearTimeout(t)
      ev.forEach((e) => window.removeEventListener(e, selesai))
    }
  }, [])

  useReveal(introDone)

  return (
    <>
      <Cursor />
      <Intro done={introDone} preload={preload} />

      {/* Press C → cut! flash */}
      <div
        className="cut-flash pointer-events-none fixed inset-0 z-[80] bg-[var(--ink)]"
        data-cutting={cutting ? 'true' : 'false'}
        aria-hidden
      >
        <div className="flex h-full items-center justify-center">
          <span className="font-serif text-7xl italic text-[var(--paper)] sm:text-9xl">Cut!</span>
        </div>
      </div>

      {/* Hold B → SMPTE color bars */}
      <ColorBars active={barsOn} />

      <div className="grain vignette paper-tex relative min-h-screen bg-[var(--paper)]">

        <Slate />

        <main className="pt-[44px] pb-16">

          <Hero />

          {/* Konten lebih dulu: dari Instagram-lah pengunjung terbanyak datang,
              dan video adalah hal pertama yang ingin mereka lihat. */}
          <Intertitle
            act="I"
            kicker="Konten"
            english="Video."
            indonesian="Isu berat, dibongkar jadi sembilan puluh detik."
          />
          <Reel />

          <Intertitle
            act="II"
            kicker="Produk"
            english="Produk."
            indonesian={`${projects.length} aplikasi yang dipakai orang sungguhan.`}
          />
          <Works />

          <Marquee />

          <Intertitle
            act="III"
            kicker="Asal mula"
            english="Asal mula."
            indonesian="Dari mana semuanya dimulai — dan dengan perkakas apa."
          />
          <Origin />
          <Craft />

          <Intertitle
            act="∞"
            kicker="Penutup"
            english="Ayo bikin sesuatu."
            indonesian="Saya terbuka untuk kolaborasi, projek, atau sekadar ngobrol."
          />
          <Credits />
        </main>

        {/* Filmstrip — visual closer before Fin */}
        <Filmstrip />

        <Footer />
        <FilmScrubber />
      </div>
    </>
  )
}
