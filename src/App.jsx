import { useState, useEffect } from 'react'
import { useReveal } from './hooks/useReveal.js'
import { projects } from './data/projects.js'

import Intro        from './components/Intro.jsx'
import Slate        from './components/Slate.jsx'
import Hero         from './components/Hero.jsx'
import Intertitle   from './components/Intertitle.jsx'
import Origin       from './components/Origin.jsx'
import Craft        from './components/Craft.jsx'
import Scene        from './components/Scene.jsx'
import Credits      from './components/Credits.jsx'
import Footer       from './components/Footer.jsx'
import FilmScrubber from './components/FilmScrubber.jsx'

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), 2450)
    return () => clearTimeout(t)
  }, [])

  // Activate scroll reveal after intro finishes
  useReveal(introDone)

  return (
    <>
      {/* Cinematic intro splash */}
      <Intro done={introDone} />

      {/* Main layout */}
      <div className="grain vignette paper-tex relative min-h-screen bg-[var(--paper)]">

        {/* Fixed top navigation / film slate */}
        <Slate />

        <main className="pt-[44px] pb-16"> {/* pt = slate height */}

          {/* ── OPENING ────────────────────────────────── */}
          <Hero />

          {/* ── ACT I — ORIGIN ─────────────────────────── */}
          <Intertitle
            act="I"
            latin="PARS PRIMA"
            english="Origin."
            indonesian="Asal mula. Tempat semuanya dimulai."
          />
          <Origin />

          {/* ── ACT II — CRAFT ─────────────────────────── */}
          <Intertitle
            act="II"
            latin="PARS SECUNDA"
            english="Craft."
            indonesian="Perkakas — dan tangan yang memakainya."
          />
          <Craft />

          {/* ── ACT III — SELECTED WORKS ───────────────── */}
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

          {/* ── CLOSING CREDITS ────────────────────────── */}
          <Intertitle
            act="∞"
            latin="FINIS"
            english="Let's make something."
            indonesian="Saya terbuka untuk kolaborasi, projek, atau sekadar ngobrol."
          />
          <Credits />
        </main>

        <Footer />

        {/* Fixed bottom film scrubber (clickable) */}
        <FilmScrubber />
      </div>
    </>
  )
}
