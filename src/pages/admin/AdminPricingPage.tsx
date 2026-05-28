import { PageTitle, Section } from '../../components/Ui'

export default function AdminPricingPage() {
  return (
    <>
      <PageTitle
        title="Pricing & fees"
        lead="Face-value tiers, optional channel pricing, GST display, and fee refund rules."
      />
      <Section title="Price tiers (sample event)">
        <table className="table">
          <thead>
            <tr>
              <th>Zone</th>
              <th>Face value (NZD)</th>
              <th>Channel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stalls</td>
              <td>59.00</td>
              <td>Web (default)</td>
            </tr>
            <tr>
              <td>Balcony</td>
              <td>39.00</td>
              <td>Web (default)</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="Fee templates">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Basis</th>
              <th>Amount</th>
              <th>Refundable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Standard web</td>
              <td>Per ticket</td>
              <td>NZD 3.00</td>
              <td>No (except cancellation)</td>
            </tr>
            <tr>
              <td>Box office</td>
              <td>Per order</td>
              <td>NZD 2.00</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </Section>
    </>
  )
}
