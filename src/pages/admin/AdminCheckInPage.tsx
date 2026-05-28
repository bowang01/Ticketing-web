import { PageTitle, Section } from '../../components/Ui'

const SCANS = [
  { time: '19:12:04', gate: 'A1', result: 'Admitted', ticket: 'TIX-918273' },
  { time: '19:12:18', gate: 'A1', result: 'Duplicate', ticket: 'TIX-918273' },
  { time: '19:13:02', gate: 'B2', result: 'Wrong session', ticket: 'TIX-441002' },
]

export default function AdminCheckInPage() {
  return (
    <>
      <PageTitle
        title="Check-in monitor"
        lead="Live scan stream from box office and mobile scanners."
      />
      <Section title="Tonight — Harbour Lights">
        <p className="muted">
          Admitted: <strong>412</strong> · Capacity: <strong>1,800</strong>
        </p>
      </Section>
      <Section title="Recent scans">
        <table className="table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Gate</th>
              <th>Ticket</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {SCANS.map((s) => (
              <tr key={`${s.time}-${s.ticket}`}>
                <td>{s.time}</td>
                <td>{s.gate}</td>
                <td>{s.ticket}</td>
                <td>
                  {s.result === 'Admitted' ? (
                    <span className="badge badge-ok">{s.result}</span>
                  ) : (
                    <span className="badge badge-danger">{s.result}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
      <Section title="Exception handling">
        <ul className="policy-list muted">
          <li>
            <strong>Duplicate:</strong> Show first admission time; do not re-admit.
          </li>
          <li>
            <strong>Wrong session:</strong> Direct guest to correct hall/time.
          </li>
          <li>
            <strong>Invalid:</strong> Escalate to supervisor lookup by ticket ID.
          </li>
        </ul>
      </Section>
    </>
  )
}
