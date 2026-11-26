import { ArrowUpRight, Play } from 'lucide-react'
import { channel, videos, ringkasAngka } from '../data/reel.js'

/**
 * Reel — kerja konten, disajikan sebagai papan poster.
 *
 * Kartunya sengaja dirancang supaya tetap utuh TANPA cover: kalau `cover`
 * masih null, judulnya sendiri yang jadi posternya. Itu bukan tempat kosong
 * menunggu diisi — gambar yang rusak jauh lebih merusak daripada kartu
 * tipografi yang memang dirancang begitu, dan cover Instagram tidak bisa
 * diambil otomatis tanpa login.
 */
function Kartu({ video, index }) {
  const v = ringkasAngka(video.views)
  const punyaTautan = Boolean(video.url)
  const Tag = punyaTautan ? 'a' : 'div'

  return (
    <Tag
      {...(punyaTautan
        ? { href: video.url, target: '_blank', rel: 'noreferrer noopener' }
        : {})}
      data-cursor="frame"
      className="reel-card group relative flex shrink-0 flex-col border border-[var(--ink)]/25 bg-[var(--paper-warm)] transition-colors hover:border-[var(--ink)]"
      style={{ width: 'clamp(210px, 62vw, 260px)' }}
    >
      {/* bingkai 9:16 — rasio video vertikal yang sebenarnya */}
      <div className="relative aspect-[9/16] overflow-hidden bg-[var(--ink)]">
        {video.cover ? (
          <img
            src={video.cover}
            alt={video.title}
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          /* Poster tipografi: judulnya sendiri, digambar seperti cover videonya. */
          <div className="flex h-full w-full flex-col justify-between p-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--paper)]/55">
              {video.topic}
            </span>
            <span
              className="font-serif leading-[1.05] text-[var(--paper)]"
              style={{ fontSize: 'clamp(1.15rem, 4.4vw, 1.5rem)' }}
            >
              {video.title}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--paper)]/40">
              {channel.handle}
            </span>
          </div>
        )}

        {/* crop marks, bahasa yang sama dengan scene */}
        <span className="crop-tl absolute left-2 top-2 h-3 w-3" />
        <span className="crop-br absolute bottom-2 right-2 h-3 w-3" />

        {/* jumlah tontonan */}
        {v && (
          <div className="absolute right-3 top-3 flex items-center gap-1.5 bg-[var(--ink)] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--paper)]">
            <Play size={9} fill="currentColor" />
            {v}
          </div>
        )}

        <div className="absolute inset-0 bg-[var(--ink)] opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
      </div>

      <div className="flex flex-1 flex-col gap-1.5 border-t border-[var(--ink)]/15 px-3 py-3">
        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--ink-dim)]">
          {String(index + 1).padStart(2, '0')} · {video.topic}
        </div>
        <div className="font-serif text-[0.95rem] leading-snug">{video.title}</div>
        <p className="font-serif text-[0.78rem] leading-relaxed text-[var(--ink-soft)]">
          {video.note}
        </p>
      </div>
    </Tag>
  )
}

export default function Reel() {
  const total = videos.reduce((j, v) => j + (v.views ?? 0), 0)

  return (
    <section id="reel" className="border-t border-[var(--ink)]/15 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="reveal grid items-baseline gap-3 sm:grid-cols-[auto_1fr_auto] sm:gap-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
            Reel · {channel.handle}
          </span>
          <div className="hidden h-px bg-[var(--ink)]/15 sm:block" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
            {videos.length} video · {ringkasAngka(total)}+ tontonan
          </span>
        </div>

        {/* min-w-0 di dua kolomnya: tanpa itu strip kartu yang lebarnya
            ribuan piksel memaksa kolomnya melebar, section meluber, dan teks
            terpotong di tepi kanan alih-alih strip yang bisa digeser. */}
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <div className="reveal">
            <h3
              data-cursor="text"
              className="font-serif font-light leading-[0.94] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.4rem)' }}
            >
              Isu berat, sembilan puluh detik
              <span style={{ color: 'var(--terracotta)' }}>.</span>
            </h3>

            <p className="font-serif mt-5 text-base leading-relaxed text-[var(--ink-soft)]">
              Laporan ekonomi dan kebijakan publik biasanya tebal, kering, dan
              berakhir tidak dibaca siapa pun. Saya bongkar jadi video tegak yang
              bisa dipahami sambil antre — ilustrasi editorial, angka yang muncul
              di layar, dan sitasi yang disebut terang-terangan.
            </p>

            <div className="mt-6 border-l-2 border-[var(--terracotta)] pl-4">
              <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.15em] text-[var(--ink-soft)]">
                Angkanya digambar di kode, bukan oleh AI — supaya yang terbaca di
                layar memang angka yang benar.
              </p>
            </div>

            <p className="font-serif mt-5 text-sm leading-relaxed text-[var(--ink-soft)]">
              Tiap video juga membawa catatan kejujurannya sendiri:{' '}
              <em>visual disederhanakan</em>, <em>digambar ulang dari laporan</em>.
              Penonton berhak tahu mana yang data dan mana yang gambar.
            </p>

            <a
              href={channel.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em]"
            >
              <span className="ink-link">Tonton di Instagram</span>
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div className="reveal min-w-0">
            <div className="flex items-baseline justify-between">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
                Papan poster
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                geser →
              </div>
            </div>
            <div
              className="shot-strip mt-4 flex gap-4 overflow-x-auto pb-3"
              style={{ scrollbarWidth: 'none' }}
            >
              {videos.map((v, i) => (
                <Kartu key={v.title} video={v} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
