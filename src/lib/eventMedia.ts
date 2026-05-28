/** Public paths under /public — used for sample listings until API provides URLs. */

const FALLBACK = '/images/detail-venue.jpg'

const COVERS: Record<string, string> = {
  'sample-1': '/images/card-orchestra.jpg',
  'sample-2': '/images/card-comedy.jpg',
  'sample-3': '/images/card-indie.jpg',
}

export function eventCoverImage(eventId: string | undefined): string {
  if (!eventId) return FALLBACK
  return COVERS[eventId] ?? FALLBACK
}

export function eventGalleryImages(eventId: string | undefined): string[] {
  const primary = eventCoverImage(eventId)
  const pool = [
    '/images/card-orchestra.jpg',
    '/images/card-comedy.jpg',
    '/images/card-indie.jpg',
    '/images/detail-venue.jpg',
  ]
  const rest = pool.filter((u) => u !== primary).slice(0, 3)
  return [primary, ...rest]
}
