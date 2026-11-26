import { useEffect } from 'react'

/**
 * Memunculkan elemen ber-class `.reveal` saat ia masuk layar.
 *
 * Dulu pemindaiannya sekali jalan: `querySelectorAll` dipanggil satu kali saat
 * hook siap, lalu selesai. Itu cukup selama seluruh halaman dirender di awal —
 * dan diam-diam rusak begitu ada bagian yang baru muncul setelahnya, seperti
 * project yang dibuka dari daftar. Elemen yang lahir belakangan tidak pernah
 * diamati, jadi ia bertahan di `opacity: 0` selamanya: terpasang di DOM, punya
 * ukuran, tapi tidak terlihat sama sekali. Gejalanya menyesatkan — tampak
 * seperti konten yang gagal dimuat, padahal ia ada.
 *
 * Karena itu sekarang ada MutationObserver yang menangkap `.reveal` baru.
 */
export function useReveal(ready = true) {
  useEffect(() => {
    if (!ready) return

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.add('visible')
          io.unobserve(e.target) // sekali muncul, selamanya muncul
        }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const amati = (root) => {
      if (root.nodeType !== 1) return
      if (root.classList?.contains('reveal')) io.observe(root)
      root.querySelectorAll?.('.reveal').forEach((el) => io.observe(el))
    }

    amati(document.body)

    const mo = new MutationObserver((muts) =>
      muts.forEach((m) => m.addedNodes.forEach(amati))
    )
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      mo.disconnect()
      io.disconnect()
    }
  }, [ready])
}
