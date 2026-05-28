import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Breadcrumb,
  Callout,
  DefinitionList,
  SaleBadge,
  Section,
} from '../../components/Ui'
import {
  EVENT_DETAILS,
  SESSIONS,
  saleStatusLabel,
  type EventDetail,
} from '../../lib/mockData'
import { eventCoverImage, eventGalleryImages } from '../../lib/eventMedia'

export default function EventDetailPage() {
  const { id } = useParams()
  const detail: EventDetail =
    EVENT_DETAILS[id ?? ''] ?? {
      id: id ?? 'unknown',
      title: 'Event',
      subtitle: 'Details will load from the catalogue API.',
      purchaseLimit: 6,
      refundSummary: 'See refund policy.',
      feeNote: 'NZD.',
      currency: 'NZD',
      duration: '—',
      language: '—',
      ageRating: '—',
      description: '',
      notices: [],
      venue: {
        name: 'Venue TBC',
        address: '—',
        mapUrl: '#',
        accessibility: '—',
        entryRules: '—',
      },
    }
  const sessions = SESSIONS.filter((s) => s.eventId === (id ?? 'sample-1'))
  const gallery = useMemo(() => eventGalleryImages(id), [id])
  const [heroSrc, setHeroSrc] = useState(() => eventCoverImage(id))

  useEffect(() => {
    setHeroSrc(eventCoverImage(id))
  }, [id])

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Discover', to: '/' },
          { label: detail.title },
        ]}
      />

      <div className="event-detail-hero">
        <div className="event-detail-hero-cover">
          <img src={heroSrc} alt="" width={1200} height={800} />
        </div>
        <div className="event-detail-hero-panel">
          <p className="muted" style={{ margin: 0, fontSize: '0.8rem' }}>
            Pacific/Auckland · {detail.currency}
          </p>
          <h1>{detail.title}</h1>
          <p className="page-lead muted" style={{ margin: 0 }}>
            {detail.subtitle}
          </p>
          <div className="row">
            {sessions.some((s) => s.status === 'on_sale') ? (
              <Link
                to={`/buy/events/${id ?? 'sample-1'}/sessions`}
                className="btn btn-primary"
              >
                Choose tickets
              </Link>
            ) : (
              <span className="btn" aria-disabled="true">
                Not on sale
              </span>
            )}
            <Link to="/legal/refunds" className="btn">
              Refund policy
            </Link>
          </div>
        </div>
      </div>

      <Section title="About this show">
        <DefinitionList
          items={[
            { term: 'Duration', detail: detail.duration },
            { term: 'Language', detail: detail.language },
            { term: 'Age guidance', detail: detail.ageRating },
          ]}
        />
        <p style={{ marginTop: '1rem' }}>{detail.description}</p>
        {detail.notices.length > 0 ? (
          <ul className="policy-list muted">
            {detail.notices.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        ) : null}
      </Section>

      <Section title="Photos">
        <div className="media-gallery">
          {gallery.map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => setHeroSrc(src)}
              aria-label="Show this image in the hero"
            >
              <img src={src} alt="" width={400} height={300} />
            </button>
          ))}
        </div>
      </Section>

      <Section title="Venue & entry">
        <p>
          <strong>{detail.venue.name}</strong> — {detail.venue.address}
        </p>
        <p className="muted">
          <a href={detail.venue.mapUrl} target="_blank" rel="noreferrer">
            Open map
          </a>
        </p>
        <DefinitionList
          items={[
            { term: 'Accessibility', detail: detail.venue.accessibility },
            { term: 'Entry rules', detail: detail.venue.entryRules },
          ]}
        />
        <div
          className="event-card-media"
          style={{
            marginTop: '0.75rem',
            borderRadius: '12px',
            maxWidth: '42rem',
          }}
        >
          <img
            src="/images/detail-venue.jpg"
            alt="Venue interior"
            width={1200}
            height={800}
          />
        </div>
      </Section>

      <Section title="Performances">
        <table className="table">
          <thead>
            <tr>
              <th>Starts (Pacific/Auckland)</th>
              <th>Hall</th>
              <th>Status</th>
              <th>From</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s) => (
              <tr key={s.id}>
                <td>{s.startsAt}</td>
                <td>{s.hall}</td>
                <td>
                  <SaleBadge status={s.status} />
                </td>
                <td>
                  {s.priceFrom != null
                    ? `NZD ${s.priceFrom.toFixed(2)}`
                    : '—'}
                </td>
                <td>
                  {s.status === 'on_sale' ? (
                    <Link
                      to={`/buy/events/${id}/sessions`}
                      className="btn btn-primary"
                    >
                      Tickets
                    </Link>
                  ) : s.status === 'not_on_sale' && s.onSaleOpensAt ? (
                    <span className="muted">Opens {s.onSaleOpensAt}</span>
                  ) : s.status === 'sold_out' ? (
                    <span className="muted">No availability</span>
                  ) : (
                    <span className="muted">{saleStatusLabel(s.status)}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="Pricing & fees">
        <p className="muted">{detail.feeNote}</p>
        <p className="muted">
          Zone meanings (Stalls, Balcony, etc.) are explained during seat or
          tier selection. Booking fees, if any, are shown before payment.
        </p>
      </Section>

      <Section title="Policies (summary)">
        <ul className="policy-list muted">
          <li>
            <strong>Refunds:</strong> {detail.refundSummary}{' '}
            <Link to="/legal/refunds">Full policy</Link>
          </li>
          <li>
            <strong>Purchase limit:</strong> Up to {detail.purchaseLimit}{' '}
            tickets per verified account per performance (enforced at checkout).
          </li>
          <li>
            <strong>Force majeure:</strong> Cancelled events — full refund to
            original payment method. Postponed events — keep tickets or request
            refund within the announced window.
          </li>
        </ul>
        <Callout>
          Purchasing tickets means you agree to our{' '}
          <Link to="/legal">platform terms</Link> and{' '}
          <Link to="/legal">privacy notice</Link>.
        </Callout>
      </Section>

      <Section title="On-sale countdown">
        {sessions
          .filter((s) => s.status === 'not_on_sale' && s.onSaleOpensAt)
          .map((s) => (
            <p key={s.id} className="muted">
              {s.startsAt}: sales open {s.onSaleOpensAt}. Sale reminders
              (email, requires sign-in) — post-MVP.
            </p>
          ))}
        {sessions.every((s) => s.status !== 'not_on_sale') ? (
          <p className="muted">All listed performances are on sale or closed.</p>
        ) : null}
      </Section>
    </>
  )
}
