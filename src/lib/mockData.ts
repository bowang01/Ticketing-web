/** Demo catalogue — replace with API responses in production. */

export type SaleStatus =
  | 'not_on_sale'
  | 'on_sale'
  | 'sold_out'
  | 'paused'
  | 'cancelled'
  | 'postponed'

export type EventListItem = {
  id: string
  title: string
  venue: string
  city: string
  startsAt: string
  tag: string
  artist?: string
  status: SaleStatus
  priceFrom: number | null
  image: string
  statusNote?: string
}

export type Session = {
  id: string
  eventId: string
  startsAt: string
  hall: string
  status: SaleStatus
  priceFrom: number | null
  onSaleOpensAt?: string
  seatingMode: 'reserved' | 'general_admission'
}

export type EventDetail = {
  id: string
  title: string
  subtitle: string
  duration: string
  language: string
  ageRating: string
  description: string
  notices: string[]
  venue: {
    name: string
    address: string
    mapUrl: string
    accessibility: string
    entryRules: string
  }
  purchaseLimit: number
  refundSummary: string
  feeNote: string
  currency: 'NZD'
}

export const DEFAULT_CITY = 'Wellington'

export const EVENTS: EventListItem[] = [
  {
    id: 'sample-1',
    title: 'Harbour Lights Orchestra',
    venue: 'Michael Fowler Centre',
    city: 'Wellington',
    startsAt: 'Sat 7 Jun 2026, 7:30 PM',
    tag: 'Music',
    artist: 'Wellington Symphony',
    status: 'on_sale',
    priceFrom: 45,
    image: '/images/card-orchestra.jpg',
  },
  {
    id: 'sample-2',
    title: 'Comedy Night Live',
    venue: 'St James Theatre',
    city: 'Wellington',
    startsAt: 'Fri 13 Jun 2026, 8:00 PM',
    tag: 'Comedy',
    status: 'sold_out',
    priceFrom: 35,
    image: '/images/card-comedy.jpg',
    statusNote: 'All performances sold out. Join the waitlist via support.',
  },
  {
    id: 'sample-3',
    title: 'Indie Weekender',
    venue: 'San Fran',
    city: 'Wellington',
    startsAt: 'Multiple dates',
    tag: 'Music',
    status: 'postponed',
    priceFrom: null,
    image: '/images/card-indie.jpg',
    statusNote:
      'Postponed — new dates to be announced. Keep your tickets or request a refund.',
  },
  {
    id: 'sample-4',
    title: 'Romeo & Juliet',
    venue: 'Opera House',
    city: 'Wellington',
    startsAt: 'Thu 19 Jun 2026, 7:00 PM',
    tag: 'Theatre',
    artist: 'National Theatre Company',
    status: 'not_on_sale',
    priceFrom: 55,
    image: '/images/detail-venue.jpg',
    statusNote: 'On sale from Mon 2 Jun 2026, 10:00 AM (Pacific/Auckland).',
  },
]

export const EVENT_DETAILS: Record<string, EventDetail> = {
  'sample-1': {
    id: 'sample-1',
    title: 'Harbour Lights Orchestra',
    subtitle: 'An evening of cinematic favourites with full symphony.',
    duration: 'Approx. 2 hours 15 minutes (incl. interval)',
    language: 'English programme notes; no spoken dialogue',
    ageRating: 'PG — under 14s should be accompanied by an adult',
    description:
      'Experience iconic film scores performed live, from golden-age Hollywood to modern blockbusters. Conducted by Elena Marsh.',
    notices: [
      'Photography and recording are not permitted during the performance.',
      'Latecomers may be held in the foyer until a suitable break.',
      'Bags may be subject to security screening.',
    ],
    venue: {
      name: 'Michael Fowler Centre',
      address: '111 Wakefield Street, Te Aro, Wellington 6011',
      mapUrl:
        'https://www.openstreetmap.org/?mlat=-41.288&mlon=174.777#map=16/-41.288/174.777',
      accessibility:
        'Wheelchair spaces and companion seats in Stalls rows A–C when available. Lift access from ground foyer.',
      entryRules:
        'Doors open 60 minutes before start. Late entry at usher discretion after 7:40 PM.',
    },
    purchaseLimit: 6,
    refundSummary:
      'Full refund if requested ≥48h before curtain; no refund within 24h except credit per organiser policy.',
    feeNote: 'Prices shown exclude booking fee (added at checkout). All amounts NZD.',
    currency: 'NZD',
  },
  'sample-2': {
    id: 'sample-2',
    title: 'Comedy Night Live',
    subtitle: 'Stand-up showcase — two hours, no interval on Friday shows.',
    duration: 'Approx. 2 hours',
    language: 'English',
    ageRating: 'R16 — contains adult themes and language',
    description: 'Five comedians, one night. Line-up subject to change.',
    notices: ['Strictly no re-entry once you leave the auditorium.'],
    venue: {
      name: 'St James Theatre',
      address: '77 Courtenay Place, Te Aro, Wellington 6011',
      mapUrl: 'https://www.openstreetmap.org/',
      accessibility: 'Limited wheelchair positions — contact box office before purchase.',
      entryRules: 'Photo ID may be requested for R16 entry.',
    },
    purchaseLimit: 8,
    refundSummary: 'See full refund policy. Sold-out performances are not eligible for exchange.',
    feeNote: 'Fees included in displayed “from” price for this event.',
    currency: 'NZD',
  },
  'sample-3': {
    id: 'sample-3',
    title: 'Indie Weekender',
    subtitle: 'Three nights of emerging Aotearoa artists.',
    duration: 'Varies by night',
    language: 'English',
    ageRating: 'All ages — minors under 16 with guardian',
    description: 'Festival pass and single-night tickets were on sale before postponement.',
    notices: ['Original dates cancelled pending reschedule.'],
    venue: {
      name: 'San Fran',
      address: '171 Cuba Street, Te Aro, Wellington 6011',
      mapUrl: 'https://www.openstreetmap.org/',
      accessibility: 'Ground-floor standing; limited seating.',
      entryRules: 'Over-18 areas marked at venue.',
    },
    purchaseLimit: 4,
    refundSummary:
      'Postponement: keep tickets for new dates or request refund within 14 days of announcement.',
    feeNote: 'NZD only.',
    currency: 'NZD',
  },
}

export const SESSIONS: Session[] = [
  {
    id: 's1',
    eventId: 'sample-1',
    startsAt: 'Sat 7 Jun 2026, 7:30 PM',
    hall: 'Main auditorium',
    status: 'on_sale',
    priceFrom: 45,
    seatingMode: 'reserved',
  },
  {
    id: 's2',
    eventId: 'sample-1',
    startsAt: 'Sun 8 Jun 2026, 2:00 PM',
    hall: 'Main auditorium',
    status: 'not_on_sale',
    priceFrom: 45,
    onSaleOpensAt: 'Mon 12 May 2026, 10:00 AM',
    seatingMode: 'reserved',
  },
  {
    id: 's3',
    eventId: 'sample-1',
    startsAt: 'Mon 9 Jun 2026, 7:30 PM',
    hall: 'Main auditorium',
    status: 'sold_out',
    priceFrom: 45,
    seatingMode: 'reserved',
  },
  {
    id: 's-past',
    eventId: 'sample-1',
    startsAt: 'Fri 30 May 2026, 7:30 PM',
    hall: 'Main auditorium',
    status: 'on_sale',
    priceFrom: 45,
    seatingMode: 'reserved',
  },
]

export function saleStatusLabel(status: SaleStatus): string {
  const map: Record<SaleStatus, string> = {
    not_on_sale: 'Not yet on sale',
    on_sale: 'On sale',
    sold_out: 'Sold out',
    paused: 'Sales paused',
    cancelled: 'Cancelled',
    postponed: 'Postponed',
  }
  return map[status]
}

export function saleStatusBadgeClass(status: SaleStatus): string {
  if (status === 'on_sale') return 'badge badge-ok'
  if (status === 'sold_out' || status === 'cancelled') return 'badge badge-danger'
  if (status === 'postponed' || status === 'paused' || status === 'not_on_sale')
    return 'badge badge-warn'
  return 'badge'
}

export const BUSINESS_DEFAULTS = {
  loginModel: 'guest_and_account' as const,
  seatingMode: 'both' as const,
  identityLevel: 'weak' as const,
  refundPolicy: '48h_full_before_show',
  multiChannel: false,
  holdMinutes: 12,
  paymentMinutes: 15,
  timezone: 'Pacific/Auckland',
  currency: 'NZD',
}
