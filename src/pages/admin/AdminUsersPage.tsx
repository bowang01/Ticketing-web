import { PageTitle, Section } from '../../components/Ui'

const ROLES = [
  { email: 'ops@citytickets.nz', role: 'Supervisor', scopes: 'All modules' },
  { email: 'editor@citytickets.nz', role: 'Event editor', scopes: 'Events, sessions, templates' },
  { email: 'finance@citytickets.nz', role: 'Finance', scopes: 'Reports, reconciliation, refunds (approve)' },
  { email: 'support@citytickets.nz', role: 'Customer lead', scopes: 'Orders, support, resend tickets' },
  { email: 'analyst@citytickets.nz', role: 'Read-only analyst', scopes: 'Reports only' },
]

export default function AdminUsersPage() {
  return (
    <>
      <PageTitle
        title="Users & RBAC"
        lead="Role-based access. Large refunds and price changes may require second approver (optional)."
      />
      <Section title="Team directory">
        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Scopes</th>
            </tr>
          </thead>
          <tbody>
            {ROLES.map((u) => (
              <tr key={u.email}>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td className="muted">{u.scopes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
      <Section title="Approval policies">
        <ul className="policy-list muted">
          <li>Refund &gt; NZD 500 — requires supervisor.</li>
          <li>Face-value change after on-sale — requires finance + editor.</li>
        </ul>
      </Section>
    </>
  )
}
