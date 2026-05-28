import { Link } from 'react-router-dom'
import { PageTitle, Section } from '../../components/Ui'

export default function GuestOrderLookupPage() {
  return (
    <>
      <PageTitle
        title="Find a guest order"
        lead="Enter your order number and verify with email or SMS one-time code."
      />
      <Section title="Step 1 — Order details">
        <div className="field">
          <label htmlFor="ord">Order number</label>
          <input id="ord" placeholder="ORD-2026-00042" />
        </div>
        <div className="field">
          <label htmlFor="email">Email on the order</label>
          <input id="email" type="email" />
        </div>
        <button type="button" className="btn btn-primary">
          Send verification code
        </button>
      </Section>
      <Section title="Step 2 — Verify">
        <div className="field">
          <label htmlFor="otp">6-digit code</label>
          <input id="otp" inputMode="numeric" maxLength={6} placeholder="••••••" />
        </div>
        <button type="button" className="btn btn-primary">
          View order
        </button>
      </Section>
      <p className="muted">
        Signed in? <Link to="/account/orders">My orders</Link> lists all orders
        on your profile.
      </p>
    </>
  )
}
