import { PageTitle, SaleBadge, Section } from '../../components/Ui'
import { SESSIONS } from '../../lib/mockData'

export default function AdminSessionsPage() {
  return (
    <>
      <PageTitle
        title="Sessions & sale windows"
        lead="Create performances, bind capacity and seat templates, set on-sale / presale / pause, duplicate sessions."
      />
      <p>
        <button type="button" className="btn btn-primary">
          Add session
        </button>{' '}
        <button type="button" className="btn">
          Duplicate from template
        </button>
      </p>
      <Section title="Sessions">
        <table className="table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Starts</th>
              <th>Hall</th>
              <th>Capacity</th>
              <th>Sale state</th>
              <th>On sale from</th>
            </tr>
          </thead>
          <tbody>
            {SESSIONS.filter((s) => s.id !== 's-past').map((s) => (
              <tr key={s.id}>
                <td>{s.eventId}</td>
                <td>{s.startsAt}</td>
                <td>{s.hall}</td>
                <td>1,800</td>
                <td>
                  <SaleBadge status={s.status} />
                </td>
                <td>{s.onSaleOpensAt ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
      <Section title="Dynamic controls">
        <ul className="policy-list muted">
          <li>Pause sales — technical hold without cancelling orders.</li>
          <li>Add performance — copy seat map and pricing from sibling session.</li>
        </ul>
      </Section>
    </>
  )
}
