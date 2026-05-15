import { useState, useEffect } from 'react'
import { useReveal }    from './hooks/useReveal.js'
import { useCutKey }    from './hooks/useCutKey.js'
import { useColorBars } from './hooks/useColorBars.js'
import { projects }     from './data/projects.js'

import Intro        from './components/Intro.jsx'
import Slate        from './components/Slate.jsx'
import Hero         from './components/Hero.jsx'
import Intertitle   from './components/Intertitle.jsx'
import Origin       from './components/Origin.jsx'
import Craft        from './components/Craft.jsx'
import Marquee      from './components/Marquee.jsx'
import Scene        from './components/Scene.jsx'
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

  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), 2450)
    return () => clearTimeout(t)
  }, [])

  useReveal(introDone)

  return (
    <>
      <Cursor />
      <Intro done={introDone} />

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

          <Intertitle
            act="I"
            latin="PARS PRIMA"
            english="Origin."
            indonesian="Asal mula. Tempat semuanya dimulai."
          />
          <Origin />

          <Intertitle
            act="II"
            latin="PARS SECUNDA"
            english="Craft."
            indonesian="Perkakas — dan tangan yang memakainya."
          />
          <Craft />

          <Marquee />

          <Intertitle
            act="III"
            latin="PARS TERTIA"
            english="Selected works."
            indonesian="Tiga karya — bukan portofolio, tapi reel."
          />
          <section id="scenes">
            {projects.map((p, i) => (
              <Scene key={p.slug} project={p} reversed={i % 2 === 1} />
            ))}
          </section>

          <Intertitle
            act="∞"
            latin="FINIS"
            english="Let's make something."
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
