# hfdz.my.id — Take One

> Portfolio sinematik milik **Muhamad Hafidz Hidayatulloh** · AI Engineer & Full-Stack Developer.

**Live:** [hfdz.my.id](https://hfdz.my.id)

---

## Stack

- **React 18 + Vite** — super fast bundler
- **TailwindCSS 3** — utility classes
- **Fraunces** (variable serif) + **Geist** + **Geist Mono** — via Google Fonts
- **SimpleIcons CDN** — logo tech real (monochrome → warna saat hover)
- Zero dependencies untuk animation — pure CSS + IntersectionObserver

---

## Jalankan Lokal

```bash
# 1. Install
npm install

# 2. Dev server
npm run dev
# → http://localhost:5173

# 3. Build production
npm run build

# 4. Preview build
npm run preview
```

---

## Deploy ke Vercel + hfdz.my.id

```bash
# 1. Push ke GitHub
git init && git add . && git commit -m "init: hfdz portfolio v2"
git remote add origin https://github.com/USERNAME/hfdz-portfolio.git
git push -u origin main

# 2. Buka vercel.com → Import repository
# 3. Framework preset: Vite (auto-detected)
# 4. Build command : npm run build
# 5. Output dir    : dist
# 6. Settings → Domains → tambah hfdz.my.id
# 7. Update DNS: A record → 76.76.21.21 (Vercel)
#               atau CNAME → cname.vercel-dns.com
```

---

## Customisasi

| Mau ubah           | File                          |
|--------------------|-------------------------------|
| Data diri, bio     | `src/data/meta.js`            |
| 3 project          | `src/data/projects.js`        |
| Tech stack         | `src/data/tech.js`            |
| Social links       | `src/data/meta.js` → socials  |
| Warna (palette)    | `src/index.css` → `:root`     |
| Foto profil        | Tambah `<img>` di Hero.jsx    |
| Form contact       | Credits.jsx → ganti mailto ke Formspree URL |

### Tambah Project Baru

Di `src/data/projects.js`, tambah object baru:

```js
{
  no: '04',
  slug: 'nama-project',
  title: 'Nama Project',
  tagline: 'Satu kalimat paling kena.',
  synopsis: 'Paragraf yang cerita apa masalahnya dan kenapa kamu yang solve.',
  what_i_built: 'Detail teknis — apa yang kamu bangun spesifiknya.',
  stack: ['React', 'Python', 'OpenAI'],
  palette: { from: '#e8d5b7', via: '#d4a574', to: '#a67c5a' },
  links: { live: 'https://...', github: 'https://...' },
  year: '2026',
  aperture: 'f/1.8',
  status: 'live',
  highlight: 'Satu highlight teknis yang paling bangga.',
}
```

`Scene` component akan render otomatis — tidak perlu ubah kode lain.

### Ganti Logo Tech

Cek slug di [simpleicons.org](https://simpleicons.org). Di `src/data/tech.js`:

```js
{ name: 'NamaLib', slug: 'namalib', color: '#FF0000' }
```

---

## SEO & Meta

Edit `index.html`:
- `<title>`, `<meta name="description">` — untuk Google
- `og:image` — ganti dengan screenshot portofolio (1200×630px), upload ke `/public/og-image.jpg`
- Structured data JSON-LD — sudah include, update `"url"` dan `"sameAs"`

---

## Kontak Form

Saat ini pakai mailto fallback. Untuk production, ganti ke:

**Formspree (gratis, 50 submission/bulan):**
```jsx
// Di Credits.jsx:
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' }
})
```

---

## License

MIT — bebas dipakai dan dimodifikasi.

---

*Crafted dengan kopi tubruk, banyak refactor, dan rasa ingin tahu yang belum habis.*
# portofolio
