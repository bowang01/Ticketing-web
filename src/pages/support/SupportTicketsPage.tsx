import { PageTitle, Section } from '../../components/Ui'

const CASES = [
  {
    id: '#4821',
    topic: 'Did not receive tickets',
    order: 'ORD-2026-00042',
    status: 'Open',
    sla: '4h remaining',
  },
  {
    id: '#4819',
    topic: 'Refund — postponed show',
    order: 'ORD-2026-00011',
    status: 'Waiting on customer',
    sla: '—',
  },
  {
    id: '#4815',
    topic: 'Payment failed at checkout',
    order: 'ORD-2026-00038',
    status: 'Resolved',
    sla: 'Met',
  },
]

export default function SupportTicketsPage() {
  return (
    <>
      <PageTitle
        title="Customer support"
        lead="Cases linked to orders. Internal SLA targets — not customer-facing guarantees."
      />
      <Section title="Queue">
        <table className="table">
          <thead>
            <tr>
              <th>Case</th>
              <th>Topic</th>
              <th>Order</th>
              <th>Status</th>
              <th>SLA</th>
            </tr>
          </thead>
          <tbody>
            {CASES.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.topic}</td>
                <td>{c.order}</td>
                <td>{c.status}</td>
                <td className="muted">{c.sla}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
      <Section title="Categories">
        <p className="muted">
          Payment failure · Missing tickets · Refund / postponement · Wrong
          seats · Accessibility · Account access
        </p>
      </Section>
    </>
  )
}
