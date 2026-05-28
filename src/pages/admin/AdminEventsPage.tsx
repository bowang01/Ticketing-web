import { Link } from 'react-router-dom'
import { PageTitle, SaleBadge, Section } from '../../components/Ui'
import { EVENTS } from '../../lib/mockData'

export default function AdminEventsPage() {
  return (
    <>
      <PageTitle
        title="Events"
        lead="Draft → optional compliance review → published. Unpublished events are hidden from the public site; existing orders remain valid."
      />
      <p>
        <Link to="/admin/events/new" className="btn btn-primary">
          New event
        </Link>
      </p>
      <Section title="Catalogue">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>City</th>
              <th>Public status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {EVENTS.map((ev) => (
              <tr key={ev.id}>
                <td>{ev.title}</td>
                <td>{ev.city}</td>
                <td>
                  {ev.status === 'on_sale' || ev.status === 'sold_out' ? (
                    <span className="badge badge-ok">Live</span>
                  ) : ev.status === 'postponed' ? (
                    <SaleBadge status="postponed" />
                  ) : (
                    <span className="badge">Draft / scheduled</span>
                  )}
                </td>
                <td>
                  <Link to={`/admin/events/${ev.id}`} className="btn">
                    Edit
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
