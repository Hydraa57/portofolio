/**
 * WordPress mShots — free screenshot service, no auth.
 *
 * Every caller must build its URL through here. The preloader and the <img>
 * that finally renders have to request the byte-identical URL, otherwise the
 * browser treats them as two different resources and the preload is wasted.
 */
const BASE = 'https://s.wordpress.com/mshots/v1'

export const mshot = (pageUrl, w = 1280, h = 800) =>
  `${BASE}/${encodeURIComponent(pageUrl)}?w=${w}&h=${h}`

/** Thumbnail variant used by the contact-sheet strip under each scene. */
export const mshotThumb = (pageUrl) => mshot(pageUrl, 640, 400)

/**
 * A shot entry is either a page to photograph (`page`) or an image already
 * sitting in /public (`img`). Resolves to the URL to actually load.
 */
export const shotSrc = (shot, thumb = false) =>
  shot.img ? shot.img : (thumb ? mshotThumb(shot.page) : mshot(shot.page))

/**
 * mShots renders the screenshot on the first request for a URL and, until that
 * finishes, answers with a "Generating Preview…" placeholder — a perfectly
 * valid image, so `onload` fires and preloading it achieves nothing.
 *
 * The placeholder cannot be detected in the browser: reading the pixels taints
 * the canvas, since mShots sends no CORS headers. So the only move left is to
 * ask again later. The `n` parameter is ignored by mShots but changes the URL,
 * which is what forces the browser past its cached copy of the placeholder.
 *
 * Local images (`/shots/...`) never go through this — they are already final,
 * which is why the projects worth showing in detail ship real screenshots.
 */
export const RETRY_DELAYS = [7000, 18000]

export const withRetry = (url, attempt) =>
  attempt === 0 ? url : `${url}&n=${attempt}`

export const isMshot = (url) => typeof url === 'string' && url.startsWith(BASE)
