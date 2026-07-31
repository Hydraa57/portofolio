import { useEffect, useRef, useState } from 'react'
import { X, ArrowUpRight } from 'lucide-react'
import { shotSrc } from '../lib/shot.js'
import { useShotSrc } from '../hooks/useShotSrc.js'

/**
 * One frame in the strip. Split into its own component because the retry hook
 * has to run per thumbnail, and hooks cannot be called from inside a map.
 */
function Thumb({ shot, index, project, onOpen }) {
  const src = useShotSrc(shotSrc(shot, true))

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      data-cursor="frame"
      className="group relative w-[168px] shrink-0 border border-[var(--ink)]/25 bg-[var(--paper-warm)] text-left transition-colors hover:border-[var(--ink)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--paper-warm)]">
        <img
          src={src}
          alt={`${project} — ${shot.title}`}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* crop marks, same language as the scene frames */}
        <span className="crop-tl absolute left-1.5 top-1.5 h-2.5 w-2.5" />
        <span className="crop-br absolute bottom-1.5 right-1.5 h-2.5 w-2.5" />
      </div>
      <div className="border-t border-[var(--ink)]/15 px-2 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--ink-dim)]">
        <span className="text-[var(--ink)]">{String(index + 1).padStart(2, '0')}</span>{' '}
        {shot.title}
      </div>
    </button>
  )
}

/**
 * Shots — contact sheet under a scene.
 *
 * A strip of small frames that scrolls sideways, the way a photographer lays
 * negatives on a light table. Clicking one opens it large with the note that
 * explains what the visitor is actually looking at — the scene text says what
 * was built, this says what it looks like.
 *
 * Uses a native <dialog>: Esc, focus trapping and the backdrop come for free.
 */
export default function Shots({ shots = [], project }) {
  const dlg = useRef(null)
  const [open, setOpen] = useState(null) // index of the shot being viewed

  useEffect(() => {
    const el = dlg.current
    if (!el) return
    // Keep React state in sync when the dialog is dismissed by Esc or backdrop.
    const onClose = () => setOpen(null)
    el.addEventListener('close', onClose)
    return () => el.removeEventListener('close', onClose)
  }, [])

  // Hooks must run unconditionally, so the full-size src is resolved before the
  // early return below.
  const full = useShotSrc(open === null ? null : shotSrc(shots[open]))

  if (!shots.length) return null

  const show = (i) => {
    setOpen(i)
    dlg.current?.showModal()
  }
  const hide = () => dlg.current?.close()

  const active = open === null ? null : shots[open]

  return (
    <div className="reveal mt-10 border-t border-[var(--ink)]/15 pt-6">
      <div className="flex items-baseline justify-between">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
          Contact sheet
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
          {shots.length} {shots.length === 1 ? 'frame' : 'frames'} · geser →
        </div>
      </div>

      {/* strip — scrolls sideways, scrollbar hidden to keep the film feel */}
      <div
        className="shot-strip mt-4 flex gap-3 overflow-x-auto pb-2"
        style={{ scrollbarWidth: 'none' }}
      >
        {shots.map((s, i) => (
          <Thumb
            key={s.title}
            shot={s}
            index={i}
            project={project}
            onOpen={() => show(i)}
          />
        ))}
      </div>

      {/* ─── lightbox ─── */}
      <dialog
        ref={dlg}
        className="shot-dialog"
        aria-label={active ? `${project} — ${active.title}` : 'Screenshot'}
        onClick={(e) => {
          // Backdrop clicks land on the dialog element itself.
          if (e.target === dlg.current) hide()
        }}
      >
        {active && (
          <div className="bg-[var(--paper)]">
            <div className="flex items-start gap-4 border-b border-[var(--ink)]/15 px-5 py-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
                  {project} · frame {String(open + 1).padStart(2, '0')} of{' '}
                  {String(shots.length).padStart(2, '0')}
                </div>
                <h4 className="font-serif mt-1 text-2xl font-light">{active.title}</h4>
              </div>
              <button
                type="button"
                onClick={hide}
                aria-label="Tutup"
                className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--ink)]/25 text-[var(--ink-dim)] transition-colors hover:border-[var(--ink)] hover:text-[var(--ink)]"
              >
                <X size={14} />
              </button>
            </div>

            <img
              src={full}
              alt={`${project} — ${active.title}`}
              className="block max-h-[62vh] w-full bg-[var(--paper-warm)] object-contain"
            />

            <div className="border-t border-[var(--ink)]/15 px-5 py-4">
              <p className="font-serif text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
                {active.note}
              </p>
              {active.page && (
                <a
                  href={active.page}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]"
                >
                  <span className="ink-link">Buka halaman ini</span>
                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </div>
  )
}
