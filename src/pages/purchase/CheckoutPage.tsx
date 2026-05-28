import { Link } from 'react-router-dom'
import { Callout, PageTitle, Section, Steps } from '../../components/Ui'
import { BUSINESS_DEFAULTS } from '../../lib/mockData'

export default function CheckoutPage() {
  return (
    <>
      <Steps
        steps={['Performance', 'Seats', 'Cart', 'Checkout', 'Tickets']}
        current={3}
      />
      <PageTitle
        title="Checkout"
        lead={`Pay within ${BUSINESS_DEFAULTS.paymentMinutes} minutes or your order is cancelled and seats return to inventory. Seat hold: ${BUSINESS_DEFAULTS.holdMinutes} minutes.`}
      />

      <Section title="How you are checking out">
        <label className="row muted">
          <input type="radio" name="acct" defaultChecked /> Signed in — orders
          merge to your profile; purchase limits apply per account.
        </label>
        <label className="row muted">
          <input type="radio" name="acct" /> Guest — retrieve orders with order
          number + email or SMS verification code.
        </label>
      </Section>

      <Section title="Primary contact">
        <div className="grid-2">
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input id="name" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="phone">Mobile (optional)</label>
            <input id="phone" type="tel" autoComplete="tel" />
          </div>
        </div>
        <p className="muted">
          Used for tickets, receipts, and show-change notifications. See{' '}
          <Link to="/legal">privacy notice</Link>.
        </p>
      </Section>

      <Section title="Attendees (strong identity — optional)">
        <Callout>
          MVP uses <strong>weak identity</strong> (contact only). When strong
          identity is enabled, each ticket requires legal name and ID; duplicate
          IDs per performance are blocked against purchase limits.
        </Callout>
        <div className="field">
          <label htmlFor="a1">Ticket 1 — attendee name</label>
          <input id="a1" placeholder="As shown on ID if required" />
        </div>
        <div className="field">
          <label htmlFor="id1">ID type &amp; number (if required)</label>
          <input id="id1" placeholder="e.g. NZ passport ·•••4821" />
        </div>
      </Section>

      <Section title="Order status (preview)">
        <p className="muted">
          On submit: order <strong>Pending payment</strong> → payment success →{' '}
          <strong>Paid</strong> → <strong>Issuing tickets</strong> (async OK) →{' '}
          <strong>Ticketed</strong>. Failed payment: retry (limited attempts) or
          cancel. Duplicate payment callbacks are idempotent — one charge, one
          set of tickets.
        </p>
      </Section>

      <Section title="Payment">
        <p className="muted">
          Payment service provider widget placeholder. Amount:{' '}
          <strong>NZD 124.00</strong> (GST display per your entity rules).
        </p>
        <button type="button" className="btn btn-primary">
          Pay NZD 124.00
        </button>
      </Section>

      <Callout variant="warn">
        Unpaid after the deadline: order <strong>Cancelled</strong>, seats
        released. Partial ticketing is not allowed — failures route to manual
        review.
      </Callout>

      <p>
        <Link to="/orders/confirm-demo" className="btn">
          Demo: skip to confirmation
        </Link>
      </p>
    </>
  )
}
