import { Link } from 'react-router-dom'
import { Callout, PageTitle, Section, Steps } from '../../components/Ui'

export default function CartPage() {
  return (
    <>
      <Steps
        steps={['Performance', 'Seats', 'Cart', 'Checkout', 'Tickets']}
        current={2}
      />
      <PageTitle
        title="Cart"
        lead="One checkout per performance — mixing sessions in a single payment is not supported in this MVP."
      />
      <Callout variant="warn">
        Session isolation: items in this cart are for{' '}
        <strong>Harbour Lights — Sat 7 Jun 2026, 7:30 PM</strong> only. Start a
        new order for another performance.
      </Callout>
      <Section title="Line items">
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Unit (NZD)</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Harbour Lights Orchestra — Stalls R12, R13</td>
              <td>2</td>
              <td>59.00</td>
              <td>118.00</td>
            </tr>
          </tbody>
        </table>
        <dl className="def-list" style={{ marginTop: '1rem' }}>
          <div className="def-list-row">
            <dt className="muted">Subtotal</dt>
            <dd>NZD 118.00</dd>
          </div>
          <div className="def-list-row">
            <dt className="muted">Service fee (per ticket)</dt>
            <dd>NZD 6.00</dd>
          </div>
          <div className="def-list-row">
            <dt className="muted">
              <strong>Total due</strong>
            </dt>
            <dd>
              <strong>NZD 124.00</strong>
            </dd>
          </div>
        </dl>
      </Section>
      <p>
        <Link to="/checkout" className="btn btn-primary">
          Proceed to checkout
        </Link>{' '}
        <Link to="/buy/events/sample-1/sessions/s1/seats" className="btn">
          Change seats
        </Link>
      </p>
    </>
  )
}
