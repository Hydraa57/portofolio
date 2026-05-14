# hfdz.my.id — Take One

> Portfolio sinematik milik **Muhamad Hafidz Hidayatulloh** · AI Engineer & Full-Stack Developer.
>
> *Cinematic light · Act-structured · Interactive · Built for hfdz.my.id*

---

## 🎬 Apa yang membuat ini beda

- **Custom cursor sinematik** — reticle yang berubah bentuk: dot biasa, "+" di link, brackets `[ ]` di project frame, text-cursor di heading.
- **Hover live preview** — hover frame project → screenshot website asli muncul, dengan slow fade + scanline sweep (pakai mShots, gratis, tanpa auth).
- **Magnetic CTA** — tombol "Press play" tertarik halus ke arah cursor.
- **Marquee ticker** — ala credit roll horizontal antar Act.
- **Easter egg `C`** — tekan tombol C di keyboard kapan saja → layar flash "Cut!" 0.3 detik seperti film cut.
- **Portrait editorial** — foto Anda di Origin section dengan warm grade overlay + crop marks + slate.
- **Timecode counter** — di top bar, ngitung naik sesuai progress scroll (24fps simulasi).
- **Film scrubber** — bawah, clickable, seperti seek bar film editing.
- **Drop cap, pull quote, intertitle** — typography sinematik di setiap titik.
- **Reduced-motion aware** — semua animasi dimatikan untuk user dengan `prefers-reduced-motion`.

---

## 🚀 Stack

- **React 18 + Vite** (build dalam 4 detik, bundle gzipped 59KB)
- **TailwindCSS 3** (utility-only, zero unused CSS di production)
- **Fraunces** (variable serif, dengan axis `opsz` + `SOFT`) + **Geist** + **Geist Mono** via Google Fonts
- **lucide-react** untuk icon kecil
- **SimpleIcons CDN** untuk logo tech (monochrome → warna asli pas hover)
- **mShots API** untuk preview screenshot website (gratis, free tier WordPress)
- **Zero animation library** — semua animasi pure CSS + IntersectionObserver
- **Total dependency runtime:** react, react-dom, lucide-react (cuma 3)

---

## 🏃 Jalankan Lokal

```bash
# 1. Install dependencies
npm install

# 2. Dev server
npm run dev
# → http://localhost:5173

# 3. Build production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🚀 Deploy ke Vercel (5 menit)

### Step 1 — Push ke GitHub
```bash
git init
git add .
git commit -m "feat: hfdz portfolio v2 — cinematic with full interactivity"
git remote add origin https://github.com/USERNAME/hfdz-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Import di Vercel
1. Buka [vercel.com](https://vercel.com) → **Add New** → **Project**
2. Import repo `hfdz-portfolio`
3. Framework preset: **Vite** (auto-detected)
4. Build command: `npm run build` (auto)
5. Output dir: `dist` (auto)
6. Klik **Deploy** — selesai dalam ~30 detik

### Step 3 — Connect Domain hfdz.my.id
1. Di project Vercel → **Settings** → **Domains**
2. Add domain: `hfdz.my.id`
3. Vercel akan kasih instruksi DNS. Biasanya:
   - **A record**: `@` → `76.76.21.21`
   - **CNAME record**: `www` → `cname.vercel-dns.com`
4. Update di DNS provider domain Anda (Niagahoster, Cloudflare, dsb)
5. Tunggu propagasi DNS (biasanya 5-30 menit)

---

## 📁 Struktur Folder

```
hfdz-final/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── App.jsx                     # main composer + easter egg
│   ├── main.jsx                    # React entry
│   ├── index.css                   # tokens, animations, hover states
│   ├── assets/
│   │   └── portrait.png            # foto Anda
│   ├── components/
│   │   ├── Cursor.jsx              # cinematic reticle
│   │   ├── Intro.jsx               # "TAKE ONE / ACTION" splash
│   │   ├── Slate.jsx               # top film slate nav
│   │   ├── Hero.jsx                # opening sequence
│   │   ├── Intertitle.jsx          # act separator
│   │   ├── Origin.jsx              # Act I (with portrait)
│   │   ├── Craft.jsx               # Act II (tech)
│   │   ├── Marquee.jsx             # interlude ticker
│   │   ├── Scene.jsx               # project card with hover screenshot
│   │   ├── TechLogo.jsx            # mono/color logo from simpleicons
│   │   ├── Credits.jsx             # Act IV (contact)
│   │   ├── Footer.jsx              # "Fin." closing
│   │   └── FilmScrubber.jsx        # bottom scrub bar
│   ├── hooks/
│   │   ├── useScrollPct.js
│   │   ├── useReveal.js
│   │   ├── useMagnetic.js          # magnetic CTA effect
│   │   └── useCutKey.js            # easter egg
│   └── data/
│       ├── meta.js                 # personal info, socials
│       ├── projects.js             # 3 projects (Nayyira, Dashboard, FacePresent)
│       └── tech.js                 # equipment manifest
├── index.html                      # SEO, OG meta, fonts
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                     # SPA rewrites + cache headers
├── package.json
└── README.md
```

---

## ✏️ Customisasi

### Update data diri / kontak
`src/data/meta.js` — ganti handle IG, nomor WA, email yang sekarang masih placeholder (`@hafidz.id`, `+62 812-XXXX-XXXX`, dll).

### Tambah / edit project
`src/data/projects.js` — tambah object baru dengan format yang sama, `Scene` component render otomatis.

```js
{
  no: '04',
  slug: 'project-baru',
  title: 'Project Baru',
  tagline: 'Satu kalimat paling kena.',
  synopsis: 'Cerita masalah dan kenapa Anda yang solve.',
  what_i_built: 'Detail teknis spesifik.',
  stack: ['React', 'Python'],
  palette: { from: '#e8d5b7', via: '#d4a574', to: '#a67c5a' },
  links: { live: 'https://...', github: 'https://...' },
  year: '2026',
  aperture: 'f/1.8',
  status: 'live',  // 'live' | 'beta' | 'wip'
  highlight: 'Satu highlight teknis yang paling bangga.',
}
```

### Update tech stack
`src/data/tech.js` — slug logo cari di [simpleicons.org](https://simpleicons.org).

### Ganti foto profil
Replace `src/assets/portrait.png` dengan foto baru (rasio bebas, tapi 9:14 atau 4:5 paling pas untuk Origin layout).

### Ganti palette warna
`src/index.css` baris 7-22 — ubah CSS custom properties (`--paper`, `--ink`, `--terracotta`, dll).

---

## 🔧 Kontak Form

Saat ini pakai `mailto:` fallback. Untuk production sebaiknya pakai service real. Pilihan:

### Formspree (paling gampang, gratis 50/bulan)
1. Daftar di [formspree.io](https://formspree.io), buat form, dapatkan endpoint URL.
2. Di `src/components/Credits.jsx`, replace fungsi `handleSubmit`:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  if (res.ok) setStatus('sent')
}
```

### Alternative
- [Web3Forms](https://web3forms.com) — gratis unlimited
- [Resend](https://resend.com) — kalau pakai own domain email

---

## 🎯 Interactivity Reference

| Aksi | Yang Terjadi |
|---|---|
| Mouse desktop | Custom reticle cursor follow cursor |
| Hover link / button | Cursor jadi `+` |
| Hover project frame | Cursor jadi brackets `[ ]` |
| Hover heading | Cursor jadi text-cursor `\|` |
| Hover project frame | Screenshot website asli muncul + scanline sweep |
| Hover CTA "Press play" | Tombol magnetic ke cursor + shimmer effect |
| Hover hero headline | Letter spacing tightens + warna jadi terracotta |
| Tekan `C` di keyboard | Layar flash "Cut!" 0.36s |
| Klik scrubber bawah | Scroll ke posisi yang di-klik |
| Scroll | Timecode counter naik, progress bar fill, reveal animations trigger |
| Hover tech logo | Logo mono → warna brand asli (slow fade) |

---

## 🔐 Catatan Keamanan

- **Jangan pernah commit `.env`** — sudah di `.gitignore`.
- Kalau pakai Formspree / Web3Forms, taruh form ID di env var, jangan hardcode di repo public.
- Periksa "Settings → Secrets" di GitHub kosong dari token / PAT yang gak perlu.

---

## 📜 License

MIT — bebas dipakai dan dimodifikasi.

---

*Crafted dengan kopi tubruk, banyak refactor, dan rasa ingin tahu yang belum habis.*
