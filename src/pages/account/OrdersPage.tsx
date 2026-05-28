import { Link } from 'react-router-dom'
import { PageTitle, Section } from '../../components/Ui'

const ORDERS = [
  {
    id: 'ORD-2026-00042',
    event: 'Harbour Lights Orchestra',
    when: 'Sat 7 Jun 2026',
    status: 'Ticketed',
    statusClass: 'badge badge-ok',
    total: 124,
  },
  {
    id: 'ORD-2026-00038',
    event: 'Comedy Night Live',
    when: 'Fri 13 Jun 2026',
    status: 'Awaiting payment',
    statusClass: 'badge badge-warn',
    total: 78,
  },
]

export default function OrdersPage() {
  return (
    <>
      <PageTitle
        title="My orders"
        lead="Filter by status and performance date. Resend confirmation email: max 3 per hour."
      />
      <Section title="Filters">
        <div className="row">
          <select defaultValue="all" aria-label="Order status">
            <option value="all">All statuses</option>
            <option value="pending">Awaiting payment</option>
            <option value="paid">Paid — issuing</option>
            <option value="ticketed">Ticketed</option>
            <option value="refund">Refund in progress</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <input type="date" aria-label="Filter by performance date" />
        </div>
      </Section>
      <Section title="Orders">
        <table className="table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Event</th>
              <th>Performance</th>
              <th>Status</th>
              <th>Total (NZD)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.event}</td>
                <td>{o.when}</td>
                <td>
                  <span className={o.statusClass}>{o.status}</span>
                </td>
                <td>{o.total.toFixed(2)}</td>
                <td>
                  <Link to={`/account/orders/${o.id}`} className="btn">
                    Open
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </>
  )
}
