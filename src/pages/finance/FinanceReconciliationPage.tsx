import { PageTitle, Section, StatCard } from '../../components/Ui'

export default function FinanceReconciliationPage() {
  return (
    <>
      <PageTitle
        title="Payment reconciliation"
        lead="Daily close: platform orders vs payment gateway settlement. Refund pairing and commission (self-operated MVP: simplified)."
      />
      <Section title="Today&apos;s close">
        <div className="stats-grid">
          <StatCard label="Gateway captured" value="NZD 12,388.00" />
          <StatCard label="Internal ledger" value="NZD 12,400.00" />
          <StatCard label="Variance" value="NZD 12.00" hint="2 orders pending capture" />
          <StatCard label="Refunds processed" value="NZD 148.00" />
        </div>
      </Section>
      <Section title="Close checklist">
        <ul className="policy-list">
          <li>Import PSP batch totals for {new Date().toISOString().slice(0, 10)}</li>
          <li>Match captures to Ticketed orders</li>
          <li>Identify orphan captures / missing refunds</li>
          <li>Post revenue recognition entries</li>
        </ul>
      </Section>
      <Section title="Variance queue">
        <table className="table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Issue</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ORD-2026-00031</td>
              <td>Captured, order still Pending payment</td>
              <td>NZD 62.00</td>
            </tr>
          </tbody>
        </table>
      </Section>
    </>
  )
}
