import { PageTitle, Section } from '../../components/Ui'

export default function AdminOrdersPage() {
  return (
    <>
      <PageTitle
        title="Orders & interventions"
        lead="Search and high-risk actions — all audited. Use sparingly: stale lock release, exception refunds."
      />
      <Section title="Search">
        <div className="row">
          <input placeholder="Order #" aria-label="Order number" />
          <input placeholder="Customer email" aria-label="Email" />
          <input placeholder="Session ID" aria-label="Session" />
          <button type="button" className="btn btn-primary">
            Search
          </button>
        </div>
      </Section>
      <Section title="Sample order">
        <table className="table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ORD-2026-00042</td>
              <td>buyer@example.com</td>
              <td>
                <span className="badge badge-ok">Ticketed</span>
              </td>
              <td>NZD 124.00</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="Privileged actions">
        <div className="grid-2">
          <button type="button" className="btn">
            Approve exception refund
          </button>
          <button type="button" className="btn">
            Mark fraud / chargeback
          </button>
          <button type="button" className="btn">
            Resend ticket email
          </button>
          <button type="button" className="btn">
            Clear stale seat lock
          </button>
        </div>
        <p className="muted" style={{ marginTop: '0.75rem' }}>
          Blacklist: block email / phone from checkout (optional anti-scalping).
        </p>
      </Section>
    </>
  )
}
