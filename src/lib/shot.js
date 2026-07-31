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
