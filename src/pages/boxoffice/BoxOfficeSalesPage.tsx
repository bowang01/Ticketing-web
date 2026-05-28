import { Link } from 'react-router-dom'
import { Callout, PageTitle, Section } from '../../components/Ui'

export default function BoxOfficeSalesPage() {
  return (
    <>
      <PageTitle
        title="Walk-up sales"
        lead="Same inventory and hold rules as web. Cash or POS; optional printed receipt."
      />
      <Callout>
        Available = total − sold − active holds − organiser holds − maintenance.
      </Callout>
      <Section title="Performance">
        <div className="field">
          <label htmlFor="show">Select show</label>
          <select id="show">
            <option>Harbour Lights — Sat 7 Jun 2026, 7:30 PM</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="qty">Quantity (Stalls)</label>
          <input id="qty" type="number" min={1} max={6} defaultValue={2} />
        </div>
      </Section>
      <Section title="Payment">
        <label className="row">
          <input type="radio" name="pay" defaultChecked /> Card (POS)
        </label>
        <label className="row">
          <input type="radio" name="pay" /> Cash
        </label>
        <label className="row muted">
          <input type="checkbox" /> Print receipt
        </label>
        <button type="button" className="btn btn-primary">
          Complete sale — NZD 124.00
        </button>
      </Section>
      <p>
        <Link to="/box-office" className="btn">
          Back
        </Link>
      </p>
    </>
  )
}
