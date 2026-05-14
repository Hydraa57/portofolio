/**
 * PROJECTS DATA
 * ─────────────────────────────────────────────────────────────
 * Tambah project baru: copy satu object, isi fields-nya.
 * `palette` = warna gradient untuk visual frame (from/via/to).
 * `slug`    = dipakai untuk future /work/[slug] routing.
 * `status`  = 'live' | 'beta' | 'wip'
 * ─────────────────────────────────────────────────────────────
 */
export const projects = [
  {
    no: '01',
    slug: 'nayyiraai',
    title: 'NayyiraAI',
    tagline: 'AI agent keuangan yang tinggal di WhatsApp-mu.',
    synopsis:
      'Pencatatan keuangan biasanya ribet — buka app, isi form, lupa. NayyiraAI memotong semua itu: cukup kirim pesan WhatsApp seperti bicaranya ke teman, AI-nya yang paham, catat, dan kategorisasi otomatis. Landasannya dibangun di atas integrasi WhatsApp Business API, model LLM untuk natural language understanding, dan pipeline n8n untuk orkestrasi data.',
    what_i_built:
      'Landing page produk + backend AI agent: intent recognition, entity extraction (nominal, kategori, tanggal), penyimpanan terstruktur ke Google Sheets, dan reply konfirmasi otomatis — semua dalam satu pesan.',
    stack: ['n8n', 'OpenAI', 'WhatsApp API', 'Google Sheets', 'Node.js'],
    palette: { from: '#e8d5b7', via: '#d4a574', to: '#a67c5a' },
    links: {
      live: 'https://nayyiraai.online',
      github: null,   // private repo — ganti ke URL jika mau publik
    },
    year: '2025',
    runtime: null,    // diisi kalau mau tampil di card
    aperture: 'f/1.4',
    status: 'live',
    highlight: 'Otomatisasi penuh dari teks bebas → structured financial record via WhatsApp.',
  },
  {
    no: '02',
    slug: 'nayyiraai-dashboard',
    title: 'Nayyira Dashboard',
    tagline: 'Dari spreadsheet ke aplikasi — satu langkah lebih dekat ke native.',
    synopsis:
      'Setelah data keuangan terkumpul lewat NayyiraAI, butuh tempat yang lebih manusiawi untuk membacanya. Dashboard ini mengubah baris-baris spreadsheet menjadi visualisasi interaktif — chart pengeluaran, tren bulanan, breakdown kategori — yang bisa dibuka dari browser. Roadmap berikutnya: dikemas jadi file .apk agar pengalaman native di Android.',
    what_i_built:
      'Aplikasi web full-stack: frontend React + visualisasi data, backend yang menyinkronkan Google Sheets dengan database internal, sistem autentikasi user, dan desain UI yang mobile-first karena target pengguna adalah pengguna smartphone.',
    stack: ['React', 'Node.js', 'Supabase', 'Google Sheets API', 'Tailwind'],
    palette: { from: '#d4d4a8', via: '#a8b894', to: '#6e7d5e' },
    links: {
      live: 'https://dashboard.nayyiraai.online',
      github: null,
    },
    year: '2025',
    runtime: null,
    aperture: 'f/2.0',
    status: 'live',
    highlight: 'Data dari WhatsApp, terbaca di dashboard, menuju .apk — satu ekosistem terpadu.',
  },
  {
    no: '03',
    slug: 'absen-face',
    title: 'FacePresent',
    tagline: 'Kehadiran dibuktikan dengan wajah, bukan tanda tangan.',
    synopsis:
      'Sistem absensi berbasis face recognition yang menggantikan absen manual atau fingerprint. Kamera menangkap wajah, model AI memverifikasi identitas dalam hitungan detik, data langsung tercatat dengan timestamp. Dirancang untuk lingkungan sekolah atau perusahaan kecil-menengah yang ingin presisi tanpa infrastruktur mahal.',
    what_i_built:
      'Pipeline face recognition end-to-end: deteksi wajah real-time via kamera, face embedding dengan model deep learning, matching ke database terdaftar, pencatatan otomatis ke sistem manajemen kehadiran, dan dashboard laporan untuk admin.',
    stack: ['Python', 'OpenCV', 'DeepFace', 'FastAPI', 'React', 'PostgreSQL'],
    palette: { from: '#e0ccd4', via: '#b89aaa', to: '#7a5a6a' },
    links: {
      live: null,     // ganti ke URL demo jika ada
      github: null,
    },
    year: '2025',
    runtime: null,
    aperture: 'f/2.8',
    status: 'beta',
    highlight: 'Verifikasi identitas real-time tanpa hardware tambahan — hanya kamera laptop/CCTV.',
  },
]

/**
 * LONG-TERM USAGE:
 * Saat ada project baru, cukup tambah object baru di array ini.
 * no, slug, title, tagline, synopsis, what_i_built, stack, palette, links, year, aperture, status, highlight.
 * Komponen Scene akan otomatis render tanpa perlu ubah code lain.
 */
