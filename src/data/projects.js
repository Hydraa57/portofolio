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
    poster: "/shots/dashboard-1-ringkasan.webp",
    // Angka pada tangkapan layar ini DATA DEMO, bukan keuangan sungguhan.
    // Antarmukanya asli — dijalankan dari repo, lalu API-nya dibalas data contoh.
    // Saldo pribadi tidak layak dipajang di portofolio publik.
    shots: [
      {
        img: "/shots/dashboard-1-ringkasan.webp",
        title: "Ringkasan bulan berjalan",
        note: "Surplus, pemasukan, pengeluaran, dan savings rate dalam satu layar, lengkap dengan tren harian dan kategori terbesar. Angka pada gambar ini data contoh, bukan keuangan sungguhan.",
      },
      {
        img: "/shots/dashboard-5-catat-ai.webp",
        title: "Catat transaksi pakai AI",
        note: "Tulis apa adanya — \"beli kopi sama makan siang 85 ribu tadi\" — dan AI yang memecahnya jadi nominal, kategori, dan tanggal. Bisa juga lewat suara atau foto struk.",
      },
      {
        img: "/shots/dashboard-2-transaksi.webp",
        title: "Daftar transaksi",
        note: "Seluruh transaksi bulan berjalan, tersinkron dari Google Sheets yang diisi lewat WhatsApp. Bisa disaring per bulan, disunting, dan dihapus langsung dari sini.",
      },
      {
        img: "/shots/dashboard-3-investasi.webp",
        title: "Portofolio investasi",
        note: "Saham IDX, kripto, reksadana, dan emas dalam satu papan: modal, nilai sekarang, dan untung-rugi per aset. Harga ditarik otomatis dan dikonversi ke rupiah.",
      },
      {
        img: "/shots/dashboard-4-insights.webp",
        title: "Insight otomatis",
        note: "Sistem membaca pola belanja dan menyimpulkan sendiri — kategori yang membengkak, rasio tabungan yang membaik, anggaran yang masih aman — tanpa perlu ditanya.",
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
      live: "https://aura.hfdz.my.id",
      github: "https://github.com/Hydraa57/aura",
    },
    year: "2026",
    runtime: null,
    aperture: "f/4.0",
    status: "live",
    highlight:
      "Satu perintah suara: berita terbuka, portofolio terbaca, lampu rumah menyala.",
    poster: "/shots/aura-2-hud.webp",
    shots: [
      {
        img: "/shots/aura-1-hero.webp",
        title: "Apa itu AURA",
        note: "Asisten suara real-time bergaya JARVIS: mendengar lewat mikrofon, menjawab dengan suara, dan mengendalikan komputer serta rumah pintar lewat percakapan biasa. Dibangun dari nol dengan Python, PyQt6, dan Gemini Live.",
      },
      {
        img: "/shots/aura-2-hud.webp",
        title: "Antarmuka saat berjalan",
        note: "Kokpitnya: diagnostik CPU/RAM/GPU/suhu di kiri, neural core di tengah yang bereaksi pada suara, activity log dan portofolio pasar di kanan. Suara dan bahasa bisa diganti di tengah percakapan.",
      },
      {
        img: "/shots/aura-3-demo.webp",
        title: "Cara bicaranya",
        note: "Empat percakapan nyata: mengganti suara dan bahasa, meminta briefing pasar, menyalakan perangkat rumah, dan menanyakan apa yang sedang tampil di layar.",
      },
      {
        img: "/shots/aura-4-caps.webp",
        title: "27 tool yang bisa dipanggil",
        note: "Model memilih sendiri tool yang tepat dari maksud ucapan — tanpa perintah kaku. Terbagi delapan wilayah: finansial, rumah pintar, kontrol komputer, visi & berkas, web & media, produktivitas, ngoding, sistem & suara.",
      },
      {
        img: "/shots/aura-5-arch.webp",
        title: "Dari suara ke aksi",
        note: "Alurnya: wake word offline (Vosk) → percakapan real-time Gemini Live → pemilihan tool → eksekusi lokal → balasan diucapkan sambil disusun. Semuanya dikejar agar tetap di bawah satu detik.",
      },
    ],
  },
  {
    no: "05",
    slug: "pixel-matrix",
    title: "Pixel Matrix",
    tagline: "Empat HP, satu papan, dan tak ada yang mau mengalah.",
    synopsis:
      "Game nongkrong biasanya berakhir sama: satu orang install, sisanya menyerah di halaman App Store. Pixel Matrix menolak itu — buka browser, bagikan kode room, lalu dua sampai empat orang langsung berebut pixel di papan 8×8 yang sama, tanpa daftar dan tanpa install. Bukan sekadar adu cepat: warna target berganti, distraktor bertambah, dua warna target muncul di level 12, dan pixel bom menghukum karena disentuh — yang diuji beban mental, bukan cuma refleks jari.",
    what_i_built:
      "Monorepo dengan satu sumber aturan main: engine permainan hidup di paket shared dan dipakai identik oleh client solo maupun server multiplayer, jadi keduanya mustahil berbeda. Di atasnya, papan Phaser dengan HUD React yang responsif di layar kecil, server Socket.IO otoritatif yang memutus siapa lebih dulu menyentuh pixel, riwayat match lewat Prisma + PostgreSQL, UI dwibahasa, dan PWA yang bisa dipasang ke home screen. Menyusul permintaan pemain, versi Android native kini dibangun dengan React Native — dipilih justru karena ia satu-satunya yang bisa memakai paket shared apa adanya: Flutter maupun Kotlin menuntut 3.697 baris aturan main diport ke bahasa lain, dua salinan yang harus dijaga sinkron selamanya.",
    stack: ["Next.js", "Phaser", "TypeScript", "Socket.IO", "React Native", "PostgreSQL"],
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
    poster: "/shots/pixel-3-tantangan.webp",
    shots: [
      {
        img: "/shots/pixel-1-menu.webp",
        title: "Masuk tanpa daftar",
        note: "Buka browser, pilih main sebagai guest, langsung main. Tanpa install, tanpa akun — syarat inilah yang membentuk seluruh arsitekturnya: database tidak pernah boleh jadi prasyarat bermain.",
      },
      {
        img: "/shots/pixel-2-solo.webp",
        title: "Main solo",
        note: "Papan 8×8 di canvas Phaser dengan HUD React. Klik pixel yang warnanya sama dengan target sebelum memudar; makin cepat makin banyak poin. Tiga nyawa, salah tap kurang satu.",
      },
      {
        img: "/shots/pixel-3-tantangan.webp",
        title: "Tantangannya",
        note: "Level 14: dua warna target sekaligus (RED + YELLOW), pixel bom yang menghukum justru karena disentuh, dan pixel emas berlipat poin. Yang diuji beban mental, bukan cuma kecepatan jari.",
      },
      {
        img: "/shots/pixel-4-lobby.webp",
        title: "Main bareng teman",
        note: "Buat room, bagikan kodenya, 2–4 orang bergabung dari HP masing-masing. Bisa atur target skor dan batas waktu; match mulai setelah semua menekan siap.",
      },
      {
        img: "/shots/pixel-5-match.webp",
        title: "Rebutan satu papan",
        note: "Semua pemain berebut pixel di papan yang sama, dengan ping tiap orang tampil di layar. Server Socket.IO yang otoritatif memutus siapa lebih dulu menyentuh — bukan browser masing-masing.",
      },
    ],
  },
  {
    no: "06",
    slug: "ezura",
    title: "Ezura",
    tagline: "Kasir untuk usaha yang menjual barang sekaligus menerima jasa.",
    synopsis:
      "Semua aplikasi kasir dibangun untuk barang; jasa ditempelkan belakangan sebagai \"produk dengan stok tak terbatas\" — pemiliknya harus mengarang angka stok untuk sesuatu yang tidak punya stok. Ezura menegakkan bedanya di lapisan data, bukan di kedisiplinan kode: jasa tidak punya kolom stok yang terisi, dijaga tiga lapis sekaligus — tipe TypeScript, fungsi RPC, dan constraint tabel. Dirancang untuk warung, katering, laundry, jahit, bengkel, dan salon, yang di Indonesia jarang murni satu jenis.",
    what_i_built:
      "Aplikasi kasir local-first: seluruh alur jalan tanpa sinyal lewat IndexedDB, lalu antrean kirim mengangkut maksud (\"catat penjualan\") alih-alih baris, sehingga dua HP tidak pernah saling menimpa. Di atasnya ada struk lebar-tetap yang identik di layar, WhatsApp, dan printer termal ESC/POS; QRIS bernominal dihitung lokal dari QR statis yang sudah ditempel di meja; penyandi .xlsx ditulis sendiri tanpa pustaka; dan sinkronisasi dua arah supaya katalog, penjualan, dan utang turun sendiri saat masuk di HP lain.",
    stack: ["Next.js", "TypeScript", "Dexie", "Supabase", "PostgreSQL", "PWA"],
    palette: { from: "#d8e0d4", via: "#9bae96", to: "#4f6350" },
    links: {
      live: "https://ezura.hfdz.my.id",
      github: "https://github.com/Hydraa57/Saas-UMKM",
    },
    year: "2026",
    runtime: null,
    aperture: "f/8.0",
    status: "live",
    highlight:
      "Setiap kali pengguna memasukkan sesuatu, dia harus langsung menerima sesuatu — di kasir, yang diterima itu struk.",
    poster: "/shots/ezura-2-kasir.webp",
    // Dipotret dari aplikasinya sendiri yang dijalankan lokal dengan data
    // contoh — kode yang sama dengan yang tayang di ezura.hfdz.my.id.
    shots: [
      {
        img: "/shots/ezura-1-katalog.webp",
        title: "Barang dan jasa, satu daftar",
        note: "Di sinilah bedanya terlihat: barang menyebut sisanya (\"Sisa 24 pcs\"), jasa tidak menyebut stok sama sekali — bukan nol, bukan tak terbatas. Kolomnya memang hilang dari formulir jasa, bukan dinonaktifkan.",
      },
      {
        img: "/shots/ezura-2-kasir.webp",
        title: "Kasir",
        note: "Seluruh cara pakainya satu gerakan: ketuk fotonya. Jumlah menempel di pojok tiap kartu dan totalnya selalu terlihat di bawah, karena yang dikejar adalah melayani pembeli yang sedang menunggu, bukan mengisi formulir.",
      },
      {
        img: "/shots/ezura-3-struk.webp",
        title: "Struk",
        note: "Inilah yang diterima pemiliknya setiap kali ia memasukkan sesuatu — aturan yang lahir dari produk sebelumnya yang cuma menjawab \"sudah disimpan\". Teksnya lebar-tetap dan sama persis di layar, di WhatsApp, dan di printer termal.",
      },
      {
        img: "/shots/ezura-4-qris.webp",
        title: "QRIS yang nominalnya sudah terisi",
        note: "Dihitung di HP dari QRIS statis yang sudah tertempel di meja — tanpa penyedia jasa pembayaran, tanpa potongan, tanpa sinyal. Batasnya ditulis terang-terangan di layarnya sendiri: aplikasinya tidak pernah tahu uangnya sudah masuk, jadi penjualan baru tercatat setelah tombolnya ditekan.",
      },
      {
        img: "/shots/ezura-5-laporan.webp",
        title: "Laporan",
        note: "Rekap bulanan, total tahunan, barang terlaris, untung kotor dari harga modal yang disalin saat transaksi, dan jam paling ramai. Semuanya bisa diunduh jadi satu .xlsx — penyandinya ditulis sendiri, karena pustaka siap pakai membawa lebih dari satu megabita untuk tabel datar.",
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
