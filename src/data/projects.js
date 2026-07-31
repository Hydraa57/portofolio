/**
 * PROJECTS DATA
 * ─────────────────────────────────────────────────────────────
 * Tambah project baru: copy satu object, isi fields-nya.
 * `palette` = warna gradient untuk visual frame (from/via/to).
 * `slug`    = dipakai untuk future /work/[slug] routing.
 * `status`  = 'live' | 'beta' | 'wip'
 *
 * `shots`   = contact sheet di bawah tiap scene. Dua bentuk:
 *               { page: 'https://…' }  → difoto otomatis lewat mShots
 *               { img:  '/shots/x.png' } → file sendiri di /public/shots/
 *             Pakai `img` kalau halamannya butuh login, atau kalau mau
 *             menampilkan bagian yang tidak bisa dijangkau URL publik.
 * ─────────────────────────────────────────────────────────────
 */
export const projects = [
  {
    no: "01",
    slug: "nayyiraai",
    title: "NayyiraAI",
    tagline: "AI agent keuangan yang tinggal di WhatsApp-mu.",
    synopsis:
      "Pencatatan keuangan biasanya ribet — buka app, isi form, lupa. NayyiraAI memotong semua itu: cukup kirim pesan WhatsApp seperti bicaranya ke teman, AI-nya yang paham, catat, dan kategorisasi otomatis. Landasannya dibangun di atas integrasi WhatsApp Business API, model LLM untuk natural language understanding, dan pipeline n8n untuk orkestrasi data.",
    what_i_built:
      "Landing page produk + backend AI agent: intent recognition, entity extraction (nominal, kategori, tanggal), penyimpanan terstruktur ke Google Sheets, dan reply konfirmasi otomatis — semua dalam satu pesan.",
    stack: ["n8n", "OpenAI", "WhatsApp API", "Google Sheets", "Node.js"],
    palette: { from: "#e8d5b7", via: "#d4a574", to: "#a67c5a" },
    links: {
      live: "https://nayyiraai.online",
      github: null, // private repo — ganti ke URL jika mau publik
    },
    year: "2026",
    runtime: null, // diisi kalau mau tampil di card
    aperture: "f/1.4",
    status: "live",
    highlight:
      "Otomatisasi penuh dari teks bebas → structured financial record via WhatsApp.",
    // Tambah entri di sini kalau ada halaman lain yang publik, atau taruh
    // tangkapan layar percakapan WhatsApp-nya di /public/shots/ lalu pakai
    // { img: '/shots/nama.png' } — chat pribadi jelas tidak bisa difoto mShots.
    shots: [
      {
        page: "https://nayyiraai.online",
        title: "Landing page",
        note: "Halaman produk: menjelaskan cara kerjanya dalam satu layar — kirim pesan biasa, AI-nya yang mencatat dan mengkategorikan.",
      },
    ],
  },
  {
    no: "02",
    slug: "nayyiraai-dashboard",
    title: "Nayyira Dashboard",
    tagline:
      "Dari spreadsheet ke aplikasi — satu langkah lebih dekat ke native.",
    synopsis:
      "Setelah data keuangan terkumpul lewat NayyiraAI, butuh tempat yang lebih manusiawi untuk membacanya. Dashboard ini mengubah baris-baris spreadsheet menjadi visualisasi interaktif — chart pengeluaran, tren bulanan, breakdown kategori, hingga monitoring portfolio investasi dan performa aset secara real-time — yang bisa dibuka dari browser. Roadmap berikutnya: dikemas jadi file .apk agar pengalaman native di Android.",
    what_i_built:
      "Aplikasi web full-stack: frontend React + visualisasi data, backend yang menyinkronkan Google Sheets dengan database internal, sistem autentikasi user, dan desain UI yang mobile-first karena target pengguna adalah pengguna smartphone.",
    stack: ["React", "Node.js", "Supabase", "Google Sheets API", "Tailwind"],
    palette: { from: "#d4d4a8", via: "#a8b894", to: "#6e7d5e" },
    links: {
      live: "https://dashboard.nayyiraai.online",
      github: null,
    },
    year: "2026",
    runtime: null,
    aperture: "f/2.0",
    status: "live",
    highlight:
      "Data dari WhatsApp, terbaca di dashboard, menuju .apk — satu ekosistem terpadu.",
    // Isi dashboard ada di balik login, jadi mShots hanya sampai halaman masuk.
    // Untuk memperlihatkan chart dan breakdown-nya, simpan tangkapan layar di
    // /public/shots/ lalu tambahkan { img: '/shots/nama.png' } di bawah.
    shots: [
      {
        page: "https://dashboard.nayyiraai.online",
        title: "Halaman masuk",
        note: "Pintu autentikasi dashboard. Isinya — chart pengeluaran, tren bulanan, breakdown kategori, dan monitoring portofolio — ada di balik login.",
      },
    ],
  },
  {
    no: "03",
    slug: "absen-face",
    title: "FacePresent",
    tagline: "Kehadiran dibuktikan dengan wajah, bukan tanda tangan.",
    synopsis:
      "Sistem absensi berbasis face recognition yang menggantikan absen manual atau isi link yang membuang waktu. Kamera menangkap wajah, model AI memverifikasi identitas dalam hitungan detik, data langsung tercatat dengan timestamp. Dirancang untuk lingkungan organisasi, sekolah atau perusahaan kecil-menengah yang ingin presisi tanpa infrastruktur mahal.",
    what_i_built:
      "Pipeline face recognition end-to-end: deteksi wajah real-time via kamera, face embedding dengan model deep learning, matching ke database terdaftar, pencatatan otomatis ke sistem manajemen kehadiran, dan dashboard laporan untuk admin.",
    stack: ["Python", "OpenCV", "DeepFace", "FastAPI", "React", "PostgreSQL"],
    palette: { from: "#e0ccd4", via: "#b89aaa", to: "#7a5a6a" },
    links: {
      live: "https://absensi.hfdz.my.id",
      github: null,
    },
    year: "2026",
    runtime: null,
    aperture: "f/2.8",
    status: "live",
    highlight:
      "Verifikasi identitas real-time tanpa hardware tambahan — hanya kamera tab/laptop.",
    shots: [
      {
        page: "https://absensi.hfdz.my.id",
        title: "Halaman absensi",
        note: "Titik masuk sistem: kamera menangkap wajah, model memverifikasi identitas, kehadiran tercatat dengan timestamp — tanpa tanda tangan atau isi link.",
      },
    ],
  },
  {
    no: "04",
    slug: "aura",
    title: "AURA",
    tagline: "Suara yang menjaga pasar, saat pasar tak pernah tidur.",
    synopsis:
      "Pasar bergerak terus meski kita tidur, tapi tak seorang pun sanggup menatap layar selama itu. AURA — dari 'Aurum', emas — adalah asisten suara pribadi yang diajak bicara seperti manusia: menanyakan kabar IHSG, meminta briefing pasar pagi, menyuruhnya membuka lima berita sekaligus jadi dinding jendela sinematik di layar. Ia bicara dua bahasa dengan suara yang bisa diganti di tengah percakapan, dan di baliknya ada rantai fallback empat penyedia LLM supaya ia tidak pernah bisu saat satu layanan tumbang.",
    what_i_built:
      "Asisten suara end-to-end di atas Python: wake word yang berjalan offline, percakapan real-time via Gemini Live, dan dua puluh lebih tool yang bisa dipanggil model — dari briefing finansial, analisa mendalam portofolio, kontrol PC dan smart home (Home Assistant + Tuya IR), sampai dashboard remote yang bisa dibuka dari HP lewat Cloudflare Tunnel dengan enkripsi AES di lapisan aplikasi.",
    stack: ["Python", "Gemini Live", "PyQt6", "FastAPI", "Vosk", "Home Assistant"],
    palette: { from: "#e6dcc0", via: "#c0a765", to: "#7d6428" },
    links: {
      // Landing page sudah dibuat, belum di-hosting.
      // Begitu live, ganti null di bawah dengan URL-nya — Scene otomatis
      // memunculkan badge LIVE, tombol "View live", dan hover screenshot.
      live: null,
      github: null, // private repo
    },
    year: "2026",
    runtime: null,
    aperture: "f/4.0",
    status: "beta",
    highlight:
      "Satu perintah suara: berita terbuka, portofolio terbaca, lampu rumah menyala.",
    // Kosong sampai landing page-nya hidup. Begitu live, cukup tambahkan
    // { page: 'https://aura-...', title: '…', note: '…' } — contact sheet-nya
    // muncul sendiri, dan halaman yang kosong tidak merender apa pun.
    shots: [],
  },
  {
    no: "05",
    slug: "pixel-matrix",
    title: "Pixel Matrix",
    tagline: "Empat HP, satu papan, dan tak ada yang mau mengalah.",
    synopsis:
      "Game nongkrong biasanya berakhir sama: satu orang install, sisanya menyerah di halaman App Store. Pixel Matrix menolak itu — buka browser, bagikan kode room, lalu dua sampai empat orang langsung berebut pixel di papan 8×8 yang sama, tanpa daftar dan tanpa install. Bukan sekadar adu cepat: warna target berganti, distraktor bertambah, dua warna target muncul di level 12, dan pixel bom menghukum karena disentuh — yang diuji beban mental, bukan cuma refleks jari.",
    what_i_built:
      "Monorepo dengan satu sumber aturan main: engine permainan hidup di paket shared dan dipakai identik oleh client solo maupun server multiplayer, jadi keduanya mustahil berbeda. Di atasnya, papan Phaser dengan HUD React yang responsif di layar kecil, server Socket.IO otoritatif yang memutus siapa lebih dulu menyentuh pixel, riwayat match lewat Prisma + PostgreSQL, UI dwibahasa, dan PWA yang bisa dipasang ke home screen.",
    stack: ["Next.js", "Phaser", "TypeScript", "Socket.IO", "Prisma", "PostgreSQL"],
    palette: { from: "#cfc8e0", via: "#8f86b5", to: "#3d3a5c" },
    links: {
      live: "https://game-casual-web.vercel.app",
      github: "https://github.com/Hydraa57/Game-Casual",
    },
    year: "2026",
    runtime: null,
    aperture: "f/5.6",
    status: "live",
    highlight:
      "Dua sampai empat pemain, satu papan rebutan, nol install — cukup bagikan kode room.",
    // Rute-rute ini diverifikasi ada di repo (apps/web/src/app/[locale]/),
    // default locale-nya "id".
    shots: [
      {
        page: "https://game-casual-web.vercel.app/id",
        title: "Halaman depan",
        note: "Pintu masuk: main solo langsung, atau buat/gabung room lewat kode. Tanpa daftar, tanpa install — syarat utama yang membentuk seluruh arsitekturnya.",
      },
      {
        page: "https://game-casual-web.vercel.app/id/play/solo",
        title: "Mode solo",
        note: "Papan 8×8, HUD React di atas canvas Phaser. Kurva kesulitan sampai Lv 20, pixel bom yang menghukum karena disentuh, dan dua warna target mulai Lv 12.",
      },
      {
        page: "https://game-casual-web.vercel.app/id/leaderboard",
        title: "Papan skor",
        note: "Skor solo tersimpan di localStorage saat tanpa database, dan naik ke PostgreSQL lewat Prisma begitu DATABASE_URL diset.",
      },
      {
        page: "https://game-casual-web.vercel.app/id/about",
        title: "Tentang & aturan main",
        note: "Aturan permainan dijelaskan dari satu sumber yang sama dengan yang dipakai engine — packages/shared, dipakai identik oleh client dan server.",
      },
    ],
  },
];

/**
 * LONG-TERM USAGE:
 * Saat ada project baru, cukup tambah object baru di array ini.
 * no, slug, title, tagline, synopsis, what_i_built, stack, palette, links, year, aperture, status, highlight.
 * Komponen Scene akan otomatis render tanpa perlu ubah code lain.
 */
