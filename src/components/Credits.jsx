import { useState } from 'react'
import { ArrowUpRight, Send } from 'lucide-react'
import { socials, credits, meta } from '../data/meta.js'
import TechLogo from './TechLogo.jsx'

export default function Credits() {
  const [form, setForm]   = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Ganti URL di bawah dengan endpoint Formspree/Web3Forms Anda
    // atau biarkan mailto sebagai fallback:
    const body = encodeURIComponent(
      `Nama: ${form.name}\n\n${form.message}\n\n— ${form.email}`
    )
    window.location.href = `mailto:halo@hfdz.my.id?subject=Halo dari ${form.name}&body=${body}`
    setTimeout(() => setStatus('sent'), 800)
  }

  return (
    <section id="credits" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">

        {/* heading */}
        <div className="reveal text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-[var(--ink-dim)]">
            CLOSING CREDITS / ROLL
          </div>
          <h2
            className="font-serif mt-5 font-light leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}
          >
            Cast &amp; Crew<span style={{ color: 'var(--terracotta)' }}>.</span>
          </h2>
          <p className="font-serif mt-4 text-base italic text-[var(--ink-soft)]">
            Untuk yang ingin terhubung — atau sekadar bilang halo.
          </p>
        </div>

        {/* two-col layout */}
        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">

          {/* LEFT — credit roll + social links */}
          <div>
            <div className="reveal font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
              CREW LIST
            </div>
            <div className="mt-4 space-y-1 border-y border-[var(--ink)]/20 py-6">
              {credits.map((c, i) => (
                <div
                  key={c.role}
                  className="reveal grid grid-cols-[1fr_1.5fr] gap-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em]"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="text-right text-[var(--ink-dim)]">{c.role}</span>
                  <span className="text-[var(--ink)]">{c.value}</span>
                </div>
              ))}
            </div>

            {/* social links */}
            <div className="reveal mt-8 space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
                DISTRIBUTION CHANNELS
              </div>
              {socials.map((s) => (
                <a
                  key={s.role}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between border-b border-[var(--ink)]/10 py-3 transition hover:border-[var(--ink)]"
                >
                  <div className="flex items-center gap-3">
                    <TechLogo slug={s.slug} name={s.role} color="#1a1612" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--ink-dim)] transition group-hover:text-[var(--ink)]">
                      {s.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="text-[var(--ink-faint)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--ink)]"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — contact form */}
          <div>
            <div className="reveal font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">
              FAN MAIL · PESAN LANGSUNG
            </div>
            <p className="reveal font-serif mt-2 text-sm italic text-[var(--ink-soft)]">
              Punya project? Ingin kolaborasi? Atau sekadar say hi — saya baca semua pesan.
            </p>

            <form onSubmit={handleSubmit} className="reveal mt-6 space-y-6">
              <FormField
                label="Nama / Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />
              <FormField
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
              <FormField
                label="Pesan / Message"
                value={form.message}
                onChange={(v) => setForm({ ...form, message: v })}
                multiline
              />
              <button
                type="submit"
                disabled={status === 'sent'}
                className="group inline-flex w-full items-center justify-center gap-3 border border-[var(--ink)] bg-[var(--ink)] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--paper)] transition hover:bg-transparent hover:text-[var(--ink)] disabled:cursor-default disabled:opacity-60"
              >
                {status === 'sent' ? '✓ Terkirim — terima kasih!' : (
                  <>
                    Send · Kirim
                    <Send size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, value, onChange, type = 'text', multiline }) {
  const base =
    'mt-1.5 w-full border-b border-[var(--ink)]/40 bg-transparent pb-2 font-serif text-lg text-[var(--ink)] outline-none transition placeholder:text-[var(--ink-faint)] focus:border-[var(--ink)]'
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-dim)]">{label}</span>
      {multiline ? (
        <textarea
          rows={4}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          type={type}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      )}
    </label>
  )
}
