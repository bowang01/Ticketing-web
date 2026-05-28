import { Link, useParams } from 'react-router-dom'
import {
  Breadcrumb,
  Callout,
  PageTitle,
  Section,
  Steps,
} from '../../components/Ui'

export default function ZoneTicketsPage() {
  const { eventId } = useParams()
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Discover', to: '/' },
          {
            label: 'Sessions',
            to: `/buy/events/${eventId}/sessions`,
          },
          { label: 'Zones' },
        ]}
      />
      <Steps
        steps={['Performance', 'Tickets', 'Cart', 'Checkout', 'Tickets']}
        current={1}
      />
      <PageTitle
        title="Choose zone & quantity"
        lead="General admission — seats assigned at purchase. Strategy: keep party together, then prefer forward blocks."
      />
      <Callout>
        Same order: up to <strong>6</strong> tickets. If contiguous seats are
        unavailable, you will be asked to change quantity or tier before
        checkout.
      </Callout>
      <Section title="Price tiers (NZD)">
        <div className="grid-2">
          <div className="card">
            <h3>Balcony — NZD 39.00</h3>
            <p className="muted">
              Upper level · Fees at checkout · Excludes organiser holds.
            </p>
            <div className="field">
              <label htmlFor="n1">Quantity</label>
              <input id="n1" type="number" min={0} max={6} defaultValue={2} />
            </div>
          </div>
          <div className="card">
            <h3>Stalls — NZD 59.00</h3>
            <p className="muted">Main floor · Best-available allocation.</p>
            <div className="field">
              <label htmlFor="n2">Quantity</label>
              <input id="n2" type="number" min={0} max={6} defaultValue={0} />
            </div>
          </div>
        </div>
      </Section>
      <p>
        <Link to="/cart" className="btn btn-primary">
          Add to cart
        </Link>
      </p>
    </>
  )
}
