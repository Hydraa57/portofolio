import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { projects } from '../data/projects.js'
import Scene from './Scene.jsx'

/**
 * Works — enam karya sebagai shot list, bukan enam layar penuh.
 *
 * Sebelumnya tiap project dirender utuh dan berurutan, jadi menelusuri
 * seluruhnya berarti menggulir puluhan layar sebelum sampai ke kontak. Itu
 * bisa ditanggung pengunjung yang memang datang untuk menilai kode; tidak
 * untuk orang yang mampir dari Instagram dan cuma ingin tahu ini siapa.
 *
 * Sekarang keenamnya muat dalam satu layar sebagai daftar yang bisa dipindai,
 * dan isi lengkapnya — yang satu baris pun tidak dibuang — terbuka saat
 * barisnya diketuk. Satu terbuka pada satu waktu: membuka yang kedua menutup
 * yang pertama, supaya daftarnya tidak berubah jadi halaman panjang yang
 * semula dihindari.
 */
export default function Works() {
  const [terbuka, setTerbuka] = useState(null)

  return (
    <section id="works" className="px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal grid items-baseline gap-3 border-b border-[var(--ink)]/25 pb-3 sm:grid-cols-[auto_1fr_auto] sm:gap-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
            Shot list
          </span>
          <div className="hidden h-px bg-[var(--ink)]/15 sm:block" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
            {projects.length} karya · ketuk untuk membuka
          </span>
        </div>

        <ul className="border-b border-[var(--ink)]/15">
          {projects.map((p, i) => {
            const buka = terbuka === p.slug
            return (
              <li key={p.slug} className="border-t border-[var(--ink)]/15 first:border-t-0">
                <button
                  type="button"
                  onClick={() => setTerbuka(buka ? null : p.slug)}
                  aria-expanded={buka}
                  className="work-row group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-5 text-left transition-colors sm:gap-8 sm:py-6"
                >
                  <span className="font-serif text-2xl font-light leading-none text-[var(--ink-dim)] transition-colors group-hover:text-[var(--ink)] sm:text-3xl">
                    {p.no}
                  </span>

                  <span className="min-w-0">
                    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-serif text-xl leading-tight sm:text-2xl">
                        {p.title}
                      </span>
                      {p.status === 'live' && (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--ink-dim)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--terracotta)]" />
                          Live
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block truncate font-serif text-sm italic text-[var(--ink-soft)] sm:text-base">
                      {p.tagline}
                    </span>
                    <span className="mt-2 hidden flex-wrap gap-x-4 gap-y-1 sm:flex">
                      {p.stack.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--ink-faint)]"
                        >
                          {t}
                        </span>
                      ))}
                    </span>
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[var(--ink-dim)] transition-transform duration-500 group-hover:text-[var(--ink)] ${
                      buka ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dirender hanya saat terbuka: Scene membawa gambar, contact
                    sheet, dan lightbox-nya sendiri — merender keenamnya
                    sekaligus mengembalikan beban yang baru saja dihapus. */}
                {buka && (
                  <div className="-mx-5 sm:-mx-8">
                    <Scene project={p} reversed={i % 2 === 1} total={projects.length} />
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
