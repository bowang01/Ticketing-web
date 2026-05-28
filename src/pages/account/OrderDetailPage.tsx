import { Link, useParams } from 'react-router-dom'
import {
  Callout,
  DefinitionList,
  PageTitle,
  QrPlaceholder,
  Section,
} from '../../components/Ui'

export default function OrderDetailPage() {
  const { orderId } = useParams()
  const refundEligible = true

  return (
    <>
      <PageTitle
        title={`Order ${orderId ?? '—'}`}
        lead="Amounts in NZD. Notifications sent for payment, ticketing, refunds, and show changes."
      />
      <Section title="Summary">
        <DefinitionList
          items={[
            { term: 'Status', detail: 'Ticketed' },
            { term: 'Paid', detail: 'NZD 124.00' },
            { term: 'Performance', detail: 'Harbour Lights — Sat 7 Jun 2026, 7:30 PM' },
            { term: 'Payment', detail: 'Card ·••• 4242' },
          ]}
        />
      </Section>
      <Section title="Tickets">
        <table className="table">
          <thead>
            <tr>
              <th>Ticket #</th>
              <th>Seat / zone</th>
              <th>Attendee</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TIX-918273</td>
              <td>Stalls R12</td>
              <td>A. Buyer</td>
              <td>
                <details>
                  <summary className="btn">Show QR</summary>
                  <QrPlaceholder ticketId="TIX-918273" />
                </details>
              </td>
            </tr>
            <tr>
              <td>TIX-918274</td>
              <td>Stalls R13</td>
              <td>A. Buyer</td>
              <td>
                <details>
                  <summary className="btn">Show QR</summary>
                  <QrPlaceholder ticketId="TIX-918274" />
                </details>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="muted">
          One admission per scan. Re-entry not permitted after successful check-in.
        </p>
      </Section>
      <Section title="Self-service">
        {refundEligible ? (
          <button type="button" className="btn">
            Request refund
          </button>
        ) : (
          <Callout variant="warn">
            Refund not available — inside 24h window. See{' '}
            <Link to="/legal/refunds">policy</Link>.
          </Callout>
        )}{' '}
        <button type="button" className="btn">
          Resend email
        </button>{' '}
        <button type="button" className="btn">
          Request GST invoice
        </button>
      </Section>
      <Section title="Notifications sent">
        <ul className="policy-list muted">
          <li>Payment confirmation — 1 Jun 2026, 2:14 PM</li>
          <li>Tickets ready — 1 Jun 2026, 2:16 PM</li>
        </ul>
      </Section>
    </>
  )
}
