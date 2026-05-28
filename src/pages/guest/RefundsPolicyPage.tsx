import { Link } from 'react-router-dom'
import { PageTitle, Section } from '../../components/Ui'

export default function RefundsPolicyPage() {
  return (
    <>
      <PageTitle
        title="Refunds & exchanges"
        lead="Example policy for demo — replace with legal-approved terms."
      />
      <Section title="Standard refunds">
        <ul className="policy-list">
          <li>
            <strong>≥48 hours before curtain:</strong> Refund of face value
            (percentage per tier may apply).
          </li>
          <li>
            <strong>24–48 hours:</strong> Credit note or 50% refund at organiser
            discretion.
          </li>
          <li>
            <strong>Within 24 hours:</strong> No refund except as required by law
            or organiser exception.
          </li>
        </ul>
      </Section>
      <Section title="Booking fees">
        <p>
          Platform booking fees are <strong>non-refundable</strong> once the
          refund window for face value has passed. If the event is cancelled by
          the organiser, fees are refunded in full with the ticket price.
        </p>
      </Section>
      <Section title="Force majeure">
        <ul className="policy-list">
          <li>
            <strong>Cancelled:</strong> Automatic full reversal to original
            payment method; no action required.
          </li>
          <li>
            <strong>Postponed:</strong> Keep tickets for new date or request
            refund within 14 days of announcement via{' '}
            <Link to="/lookup">order lookup</Link> or support.
          </li>
        </ul>
      </Section>
      <Section title="Partial refunds">
        <p className="muted">
          Refunding part of an order (some seats only) is disabled in MVP. When
          enabled, released seats return to inventory and finance reconciliation
          matches partial amounts.
        </p>
      </Section>
      <Section title="Processing time">
        <p>
          We aim to approve refunds within <strong>2 business days</strong>.
          Card refunds typically appear in 5–10 business days depending on your
          bank. This is separate from our internal SLA.
        </p>
      </Section>
    </>
  )
}
