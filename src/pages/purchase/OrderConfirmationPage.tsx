import { Link } from 'react-router-dom'
import { Callout, PageTitle, Section, Steps } from '../../components/Ui'

export default function OrderConfirmationPage() {
  return (
    <>
      <Steps
        steps={['Performance', 'Seats', 'Cart', 'Checkout', 'Tickets']}
        current={4}
      />
      <PageTitle
        title="Thank you — order ORD-2026-00042"
        lead="Payment received. Status: Paid → issuing tickets. You will receive email when tickets are ready."
      />
      <Section title="What happens next">
        <ul className="policy-list muted">
          <li>
            <strong>Email:</strong> Receipt, performance details, link to digital
            tickets (rate-limited resend available in My orders).
          </li>
          <li>
            <strong>Tickets:</strong> Unique ticket numbers; QR payload is signed
            and valid for one admission scan.
          </li>
          <li>
            <strong>Transfers:</strong> Non-transferable unless official transfer
            process is published.
          </li>
          <li>
            <strong>Changes:</strong> If the show is cancelled or postponed, we
            email you with refund or exchange options.
          </li>
        </ul>
      </Section>
      <Callout>
        Order state machine: Pending payment → Paid → Issuing → Ticketed. You
        can track status under My orders or Guest lookup.
      </Callout>
      <p>
        <Link to="/account/orders/ORD-2026-00042" className="btn btn-primary">
          View order
        </Link>{' '}
        <Link to="/" className="btn">
          Discover more events
        </Link>
      </p>
    </>
  )
}
