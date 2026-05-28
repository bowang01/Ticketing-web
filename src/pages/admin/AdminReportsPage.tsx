import { PageTitle, Section, StatCard } from '../../components/Ui'

export default function AdminReportsPage() {
  return (
    <>
      <PageTitle
        title="Reporting"
        lead="Sales, refunds, funnel, and inventory — numbers must match finance reconciliation."
      />
      <Section title="Sales by performance">
        <div className="stats-grid">
          <StatCard label="Harbour Lights — 7 Jun" value="NZD 8,420" hint="186 tickets" />
          <StatCard label="Comedy Night — 13 Jun" value="NZD 0" hint="Sold out" />
        </div>
      </Section>
      <Section title="Inventory snapshot">
        <table className="table">
          <thead>
            <tr>
              <th>Session</th>
              <th>Available</th>
              <th>Held</th>
              <th>Organiser hold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Harbour Lights — 7 Jun</td>
              <td>412</td>
              <td>37</td>
              <td>16</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="Exports">
        <button type="button" className="btn btn-primary">
          Download sales CSV
        </button>{' '}
        <button type="button" className="btn">
          Refund report
        </button>
        <p className="muted" style={{ marginTop: '0.75rem' }}>
          BI connector / API — align with{' '}
          <a href="/admin/reconciliation">reconciliation</a> totals.
        </p>
      </Section>
    </>
  )
}
