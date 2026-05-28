import { Link, useParams } from 'react-router-dom'
import { Breadcrumb, Callout, PageTitle, SaleBadge, Section } from '../../components/Ui'
import { EVENT_DETAILS, SESSIONS } from '../../lib/mockData'

export default function SessionSelectPage() {
  const { eventId } = useParams()
  const detail = EVENT_DETAILS[eventId ?? 'sample-1']
  const sessions = SESSIONS.filter((s) => s.eventId === (eventId ?? 'sample-1'))
  const pastSessionId = 's-past'

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Discover', to: '/' },
          { label: detail?.title ?? 'Event', to: `/events/${eventId}` },
          { label: 'Choose performance' },
        ]}
      />
      <PageTitle
        title="Choose a performance"
        lead="Past performances and not-yet-on-sale slots cannot be selected unless presale rules allow."
      />
      <Section title="Purchase limits">
        <Callout>
          This event: up to <strong>{detail?.purchaseLimit ?? 6}</strong>{' '}
          tickets per order / verified account. Limits are combined across
          devices when signed in.
        </Callout>
      </Section>
      <Section title="Available performances">
        <table className="table">
          <thead>
            <tr>
              <th>Date &amp; time</th>
              <th>Hall</th>
              <th>Status</th>
              <th>Seating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s) => {
              const isPast = s.id === pastSessionId
              const selectable = s.status === 'on_sale' && !isPast
              return (
                <tr key={s.id} style={isPast ? { opacity: 0.5 } : undefined}>
                  <td>
                    {s.startsAt}
                    {isPast ? (
                      <span className="muted"> (past)</span>
                    ) : null}
                  </td>
                  <td>{s.hall}</td>
                  <td>
                    <SaleBadge status={s.status} />
                  </td>
                  <td className="muted">
                    {s.seatingMode === 'reserved'
                      ? 'Reserved seating'
                      : 'General admission'}
                  </td>
                  <td>
                    {selectable ? (
                      <>
                        {s.seatingMode === 'reserved' ? (
                          <Link
                            to={`/buy/events/${eventId}/sessions/${s.id}/seats`}
                            className="btn btn-primary"
                          >
                            Seat map
                          </Link>
                        ) : null}{' '}
                        <Link
                          to={`/buy/events/${eventId}/sessions/${s.id}/zones`}
                          className="btn"
                        >
                          By zone
                        </Link>
                      </>
                    ) : (
                      <span className="muted">
                        {isPast
                          ? 'Unavailable'
                          : s.onSaleOpensAt
                            ? `Opens ${s.onSaleOpensAt}`
                            : 'Not selectable'}
                      </span>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Section>
    </>
  )
}
