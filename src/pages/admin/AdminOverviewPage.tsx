import { PageTitle, Section, StatCard } from '../../components/Ui'
import { BUSINESS_DEFAULTS } from '../../lib/mockData'

export default function AdminOverviewPage() {
  return (
    <>
      <PageTitle
        title="Operations overview"
        lead="Sales, refunds, conversion, and inventory — connect to analytics API."
      />
      <Section title="Today">
        <div className="stats-grid">
          <StatCard label="Gross sales" value="NZD 12,400.00" hint="+8% vs last week" />
          <StatCard label="Tickets sold" value="284" />
          <StatCard label="Refund rate" value="1.2%" hint="NZD 148 pending" />
          <StatCard label="Active seat holds" value="37 seats" hint="Avg 9 min hold" />
        </div>
      </Section>
      <Section title="Conversion funnel (sample)">
        <table className="table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Count</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Event views</td>
              <td>4,210</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Seat selection started</td>
              <td>892</td>
              <td>21%</td>
            </tr>
            <tr>
              <td>Checkout started</td>
              <td>412</td>
              <td>46% of seat</td>
            </tr>
            <tr>
              <td>Payment success</td>
              <td>318</td>
              <td>77% of checkout</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="Business configuration (MVP defaults)">
        <div className="config-grid card" style={{ padding: '1rem' }}>
          <div className="config-row">
            <span className="muted">Login model</span>
            <strong>Guest + account (both)</strong>
          </div>
          <div className="config-row">
            <span className="muted">Seating</span>
            <strong>Reserved map + zone allocation</strong>
          </div>
          <div className="config-row">
            <span className="muted">Identity</span>
            <strong>{BUSINESS_DEFAULTS.identityLevel}</strong>
          </div>
          <div className="config-row">
            <span className="muted">Hold / payment window</span>
            <strong>
              {BUSINESS_DEFAULTS.holdMinutes} min /{' '}
              {BUSINESS_DEFAULTS.paymentMinutes} min
            </strong>
          </div>
          <div className="config-row">
            <span className="muted">Timezone / currency</span>
            <strong>
              {BUSINESS_DEFAULTS.timezone} · {BUSINESS_DEFAULTS.currency}
            </strong>
          </div>
          <div className="config-row">
            <span className="muted">Multi-channel</span>
            <strong>Self-operated only (MVP)</strong>
          </div>
        </div>
      </Section>
    </>
  )
}
