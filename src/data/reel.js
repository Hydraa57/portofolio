/**
 * REEL — kerja konten di Instagram @hfdz.dev
 * ─────────────────────────────────────────────────────────────
 * Cara menambah video: salin satu object, isi fields-nya.
 *
 *   title  = judul besar di cover (huruf kapital, seperti di video)
 *   topic  = satu kata kategori: 'Ekonomi' | 'Lingkungan' | 'Isu publik'
 *   views  = angka mentah, misal 10_000_000. Pakai null kalau belum tahu —
 *            kartunya tetap tampil, angkanya saja yang disembunyikan.
 *   cover  = '/reel/nama.webp' di /public/reel/. Pakai null kalau belum ada —
 *            kartunya jatuh ke kartu tipografi, bukan gambar rusak.
 *   url    = permalink post Instagram-nya.
 *   note   = satu kalimat: apa yang dijelaskan video ini.
 * ─────────────────────────────────────────────────────────────
 */

/**
 * Angka kanal. Ini SNAPSHOT, bukan data langsung — Instagram tidak bisa
 * dibaca tanpa login, jadi tidak ada cara mengambilnya otomatis. Karena itu
 * `asOf` ikut tampil di layar: angka tanpa tanggal akan basi diam-diam, dan
 * portofolio ini sudah pernah kena persis masalah itu.
 */
export const channel = {
  handle: "@hfdz.dev",
  url: "https://instagram.com/hfdz.dev",
  followers: 16200,
  posts: 27,
  views30d: 4600000,
  asOf: "November 2026",
  bio: "Isu berat jadi gampang — explainer ekonomi & isu publik.",
};

export const videos = [
  {
    title: "Kalau semua hutan jadi sawit?",
    topic: "Lingkungan",
    views: 10000000,
    cover: null,
    url: null,
    note: "Menghitung apa yang sebenarnya hilang kalau tutupan hutan diganti satu komoditas — bukan cuma pohonnya.",
  },
  {
    title: "Ribuan tahun terbentuk, habis dalam hitungan hari",
    topic: "Lingkungan",
    views: 9300000,
    cover: null,
    url: null,
    note: "Skala waktu yang tidak sepadan: pembentukan yang makan ribuan tahun, dan kehancuran yang selesai dalam sepekan.",
  },
  {
    title: "Negara bisa bangkrut dalam 3 tahun",
    topic: "Ekonomi",
    views: 1000000,
    cover: null,
    url: null,
    note: "Bagaimana sebuah negara sampai ke titik gagal bayar, dirunut dari angka utang dan bunganya.",
  },
  {
    title: "Kabar gembira buat koruptor",
    topic: "Isu publik",
    views: null,
    cover: null,
    url: null,
    note: "Membaca ulang aturan yang terdengar teknis, lalu menunjukkan siapa yang sebenarnya diuntungkan.",
  },
  {
    title: "BI Rate = patokan",
    topic: "Ekonomi",
    views: null,
    cover: null,
    url: null,
    note: "Satu angka di Jakarta yang diam-diam menentukan cicilan, harga, dan tabungan orang sekampung.",
  },
];

/** Dipakai di hero dan kartu: 10000000 → "10JT", 16200 → "16,2RB". */
export function ringkasAngka(n) {
  if (n === null || n === undefined) return null;
  if (n >= 1_000_000) {
    const j = n / 1_000_000;
    return `${(j % 1 === 0 ? j : j.toFixed(1)).toString().replace(".", ",")}JT`;
  }
  if (n >= 1_000) {
    const r = n / 1_000;
    return `${(r % 1 === 0 ? r : r.toFixed(1)).toString().replace(".", ",")}RB`;
  }
  return String(n);
}
