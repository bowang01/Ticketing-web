import { PageTitle, Section } from '../../components/Ui'

export default function AdminSeatTemplatesPage() {
  return (
    <>
      <PageTitle
        title="Seat templates & zones"
        lead="Row/column generation, obstructions, maintenance blocks, organiser holds, and price-band mapping."
      />
      <Section title="Templates">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Venue / hall</th>
              <th>Seats</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MFC — Main auditorium</td>
              <td>Michael Fowler Centre</td>
              <td>1,842</td>
              <td>
                <button type="button" className="btn">
                  Edit geometry
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="Zones & holds">
        <p className="muted">
          Map sections to price tiers. Organiser holds block inventory from public
          sale — include reason code and release workflow.
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Hold</th>
              <th>Seats</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Press — Row A</td>
              <td>12</td>
              <td>Media allocation</td>
            </tr>
            <tr>
              <td>Maintenance</td>
              <td>4</td>
              <td>Broken seat mechanism</td>
            </tr>
          </tbody>
        </table>
      </Section>
    </>
  )
}
